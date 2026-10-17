const { assertAllowedUrl, sameSite } = require('./urls')
const { absoluteUrl, extractPage, parseRobots, parseSitemap, pathBlocked } = require('./extract')

const USER_AGENT = 'ScayverMarketingOS/0.1 (+https://github.com/scayver/marketing-skills)'
const MAX_PAGES = 8
const MAX_BYTES = 500000
const TIMEOUT_MS = 8000

async function fetchText(url, redirects = 0) {
  const started = Date.now()
  const response = await fetch(url, {
    redirect: 'manual',
    headers: {
      'user-agent': USER_AGENT,
      accept: 'text/html,application/xhtml+xml,text/plain,application/xml;q=0.9,*/*;q=0.8',
    },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  })
  if ([301, 302, 303, 307, 308].includes(response.status)) {
    if (redirects >= 3) throw new Error('The site redirected too many times.')
    const location = response.headers.get('location')
    if (!location) throw new Error('A redirect was missing its next URL.')
    const next = await assertAllowedUrl(new URL(location, url).href)
    return fetchText(next.href, redirects + 1)
  }

  const reader = response.body?.getReader?.()
  let bytes = new Uint8Array(0)
  if (reader) {
    const chunks = []
    let total = 0
    while (total < MAX_BYTES) {
      const step = await reader.read()
      if (step.done) break
      total += step.value.byteLength
      chunks.push(step.value)
    }
    try { await reader.cancel() } catch { /* already closed */ }
    bytes = concat(chunks, Math.min(total, MAX_BYTES))
  } else {
    const buffer = new Uint8Array(await response.arrayBuffer())
    bytes = buffer.slice(0, MAX_BYTES)
  }

  return {
    url: response.url || url,
    status: response.status,
    contentType: response.headers.get('content-type') || '',
    bytes: bytes.byteLength,
    durationMs: Date.now() - started,
    text: new TextDecoder('utf-8', { fatal: false }).decode(bytes),
    truncated: bytes.byteLength >= MAX_BYTES,
  }
}

function concat(chunks, length) {
  const output = new Uint8Array(length)
  let offset = 0
  for (const chunk of chunks) {
    const slice = chunk.subarray(0, Math.max(0, length - offset))
    output.set(slice, offset)
    offset += slice.byteLength
    if (offset >= length) break
  }
  return output
}

function isHtml(contentType, url) {
  if (/text\/html|application\/xhtml\+xml/i.test(contentType)) return true
  if (!contentType && /\.html?$/i.test(new URL(url).pathname)) return true
  return false
}

async function discover(input) {
  const requested = await assertAllowedUrl(input)
  const home = await fetchText(requested.href)
  if (!isHtml(home.contentType, home.url)) {
    throw new Error('The URL did not return an HTML page.')
  }
  if (home.status >= 400) {
    throw new Error(`The homepage returned ${home.status}.`)
  }

  const finalUrl = home.url
  const robotsUrl = new URL('/robots.txt', finalUrl).href
  let robots = { url: robotsUrl, status: 0, text: '', disallowed: [], sitemaps: [] }
  try {
    const robotsResponse = await fetchText(robotsUrl)
    if (sameSite(finalUrl, robotsResponse.url) && robotsResponse.status === 200) {
      const parsed = parseRobots(robotsResponse.text)
      robots = { url: robotsResponse.url, status: 200, text: robotsResponse.text, ...parsed }
    } else {
      robots.status = robotsResponse.status
    }
  } catch {
    robots.status = 0
  }

  const sitemapCandidates = robots.sitemaps.length
    ? robots.sitemaps.map(item => absoluteUrl(finalUrl, item)).filter(Boolean)
    : [new URL('/sitemap.xml', finalUrl).href]
  let sitemap = { url: sitemapCandidates[0] || '', status: 0, locs: [] }
  for (const candidate of sitemapCandidates) {
    try {
      const allowed = await assertAllowedUrl(candidate)
      if (!sameSite(finalUrl, allowed.href)) continue
      const sitemapResponse = await fetchText(allowed.href)
      sitemap = {
        url: sitemapResponse.url,
        status: sitemapResponse.status,
        locs: sitemapResponse.status === 200 ? parseSitemap(sitemapResponse.text) : [],
      }
      if (sitemap.locs.length) break
    } catch {
      sitemap = { url: candidate, status: 0, locs: [] }
    }
  }

  const llmsUrl = new URL('/llms.txt', finalUrl).href
  let llms = { url: llmsUrl, status: 0 }
  try {
    const llmsResponse = await fetchText(llmsUrl)
    llms = { url: llmsResponse.url, status: sameSite(finalUrl, llmsResponse.url) ? llmsResponse.status : 0 }
  } catch {
    llms = { url: llmsUrl, status: 0 }
  }

  const queue = [home.url]
  for (const loc of sitemap.locs) {
    try {
      const allowed = await assertAllowedUrl(loc)
      if (sameSite(finalUrl, allowed.href)) queue.push(allowed.href)
    } catch {
      /* skip unsafe sitemap urls */
    }
  }

  const seen = new Set()
  const pages = []
  const skipped = []
  const homeExtracted = extractPage(home.text, home.url)
  pages.push(pageRecord(home, homeExtracted))
  seen.add(normalize(home.url))
  enqueueLinks(homeExtracted, finalUrl, queue)

  const resolvedQueue = []
  for (const loc of queue) {
    try {
      resolvedQueue.push(new URL(loc, finalUrl).href)
    } catch {
      skipped.push({ url: loc, reason: 'The sitemap URL could not be resolved.' })
    }
  }
  queue.length = 0
  queue.push(...resolvedQueue)

  while (queue.length && pages.length < MAX_PAGES) {
    const next = queue.shift()
    const key = normalize(next)
    if (seen.has(key)) continue
    seen.add(key)
    if (pathBlocked(next, robots.disallowed)) {
      skipped.push({ url: next, reason: 'robots.txt disallows this path.' })
      continue
    }
    let response
    try {
      const allowed = await assertAllowedUrl(next)
      if (!sameSite(finalUrl, allowed.href)) {
        skipped.push({ url: next, reason: 'The link leaves the scanned host.' })
        continue
      }
      response = await fetchText(allowed.href)
    } catch (error) {
      skipped.push({ url: next, reason: error.message })
      continue
    }
    if (!sameSite(finalUrl, response.url)) {
      skipped.push({ url: next, reason: 'The page redirected off the scanned host.' })
      continue
    }
    if (!isHtml(response.contentType, response.url) || response.status >= 400) {
      skipped.push({ url: response.url, reason: `Skipped status ${response.status}.` })
      continue
    }
    const extracted = extractPage(response.text, response.url)
    pages.push(pageRecord(response, extracted))
    enqueueLinks(extracted, finalUrl, queue)
  }

  return {
    requestedUrl: requested.href,
    finalUrl,
    fetchedAt: new Date().toISOString(),
    limits: {
      maxPages: MAX_PAGES,
      maxBytes: MAX_BYTES,
      timeoutMs: TIMEOUT_MS,
      note: 'This scan reads public HTML on the same host. It does not log into analytics, ads, or a CMS.',
    },
    robots,
    sitemap,
    llms,
    pages,
    skipped,
  }
}

function pageRecord(response, extracted) {
  return {
    requestedUrl: response.url,
    finalUrl: response.url,
    status: response.status,
    contentType: response.contentType,
    bytes: response.bytes,
    durationMs: response.durationMs,
    truncated: response.truncated,
    extracted,
  }
}

function enqueueLinks(extracted, finalUrl, queue) {
  for (const link of extracted.links) {
    if (!link.href.startsWith('http')) continue
    try {
      if (sameSite(finalUrl, link.href)) queue.push(link.href.split('#')[0])
    } catch {
      /* ignore malformed links */
    }
  }
}

function normalize(url) {
  const parsed = new URL(url)
  parsed.hash = ''
  if (parsed.pathname.length > 1) parsed.pathname = parsed.pathname.replace(/\/$/, '')
  return parsed.href
}

module.exports = { discover, MAX_PAGES }
