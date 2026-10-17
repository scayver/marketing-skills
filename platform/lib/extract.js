const SOCIAL_HOSTS = [
  'instagram.com',
  'facebook.com',
  'linkedin.com',
  'x.com',
  'twitter.com',
  'youtube.com',
  'tiktok.com',
  'pinterest.com',
]

function decode(value) {
  return String(value || '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
}

function attr(tag, name) {
  const pattern = new RegExp(`\\b${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i')
  const match = String(tag).match(pattern)
  if (!match) return ''
  return decode(match[2] ?? match[3] ?? match[4] ?? '').trim()
}

function textContent(html) {
  const body = String(html || '').match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)
  const source = body ? body[1] : String(html || '')
  return decode(source
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim())
}

function collectTags(html, tagName) {
  const pattern = new RegExp(`<${tagName}\\b[^>]*>`, 'gi')
  return String(html || '').match(pattern) || []
}

function parseJsonLd(html) {
  const blocks = []
  const pattern = /<script\b[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  let match
  while ((match = pattern.exec(html))) {
    const raw = match[1].trim()
    if (!raw) continue
    try {
      blocks.push(JSON.parse(raw))
    } catch {
      blocks.push({ invalid: true })
    }
  }
  return blocks
}

function flattenJsonLd(value, bucket = []) {
  if (!value) return bucket
  if (Array.isArray(value)) {
    value.forEach(item => flattenJsonLd(item, bucket))
    return bucket
  }
  if (typeof value !== 'object') return bucket
  if (value.invalid) {
    bucket.push(value)
    return bucket
  }
  if (Array.isArray(value['@graph'])) flattenJsonLd(value['@graph'], bucket)
  bucket.push(value)
  return bucket
}

function absoluteUrl(base, href) {
  if (!href) return ''
  const cleaned = String(href).trim()
  if (!cleaned || cleaned.startsWith('#') || cleaned.startsWith('mailto:') || cleaned.startsWith('tel:') || cleaned.startsWith('javascript:')) return ''
  try {
    return new URL(cleaned, base).href
  } catch {
    return ''
  }
}

function socialHost(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '').toLowerCase()
    return SOCIAL_HOSTS.find(item => host === item || host.endsWith(`.${item}`)) || ''
  } catch {
    return ''
  }
}

function extractPage(html, pageUrl) {
  const source = String(html || '')
  const headMatch = source.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)
  const head = headMatch ? headMatch[1] : source.slice(0, 50000)
  const htmlTag = (source.match(/<html\b[^>]*>/i) || [''])[0]
  const title = decode((source.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i) || [, ''])[1]).replace(/\s+/g, ' ').trim()
  const metas = collectTags(source, 'meta')
  const links = collectTags(source, 'link')
  const description = metaContent(metas, 'description')
  const robots = metaContent(metas, 'robots')
  const ogSiteName = metaProperty(metas, 'og:site_name')
  const ogTitle = metaProperty(metas, 'og:title')
  const ogDescription = metaProperty(metas, 'og:description')
  const canonicalTag = links.find(tag => attr(tag, 'rel').toLowerCase().split(/\s+/).includes('canonical'))
  const canonical = canonicalTag ? absoluteUrl(pageUrl, attr(canonicalTag, 'href')) : ''
  const viewport = metaContent(metas, 'viewport')
  const headings = []
  const headingPattern = /<h([1-3])\b[^>]*>([\s\S]*?)<\/h\1>/gi
  let heading
  while ((heading = headingPattern.exec(source))) {
    const text = textContent(heading[2])
    if (text) headings.push({ level: Number(heading[1]), text })
  }

  const anchors = []
  const anchorPattern = /<a\b[^>]*href\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))[^>]*>([\s\S]*?)<\/a>/gi
  let anchor
  while ((anchor = anchorPattern.exec(source))) {
    const href = decode(anchor[2] ?? anchor[3] ?? anchor[4] ?? '')
    const text = textContent(anchor[5])
    const resolved = absoluteUrl(pageUrl, href)
    if (resolved) anchors.push({ href: resolved, text, social: socialHost(resolved) })
    if (href.startsWith('mailto:')) anchors.push({ href, text, social: '' })
    if (href.startsWith('tel:')) anchors.push({ href, text, social: '' })
  }

  const images = collectTags(source, 'img').map(tag => ({
    src: absoluteUrl(pageUrl, attr(tag, 'src')),
    alt: attr(tag, 'alt'),
    hasAlt: Boolean(tag.match(/\balt\s*=/i)),
    width: attr(tag, 'width'),
    height: attr(tag, 'height'),
  }))

  const headScripts = collectTags(head, 'script').filter(tag => {
    const type = attr(tag, 'type').toLowerCase()
    if (type === 'application/ld+json') return false
    if (!attr(tag, 'src')) return false
    if (type === 'module') return false
    return !/\bdefer\b/i.test(tag) && !/\basync\b/i.test(tag)
  })

  const jsonld = flattenJsonLd(parseJsonLd(source))
  const paragraphs = []
  const paragraphPattern = /<p\b[^>]*>([\s\S]*?)<\/p>/gi
  let paragraph
  while ((paragraph = paragraphPattern.exec(source))) {
    const paragraphText = textContent(`<body>${paragraph[1]}</body>`)
    if (paragraphText) paragraphs.push(paragraphText)
  }
  const text = textContent(source)
  const words = text ? text.split(/\s+/).filter(Boolean) : []

  return {
    url: pageUrl,
    title,
    description,
    robots,
    ogSiteName,
    ogTitle,
    ogDescription,
    canonical,
    lang: attr(htmlTag, 'lang'),
    viewport,
    headings,
    h1: headings.filter(item => item.level === 1).map(item => item.text),
    links: anchors,
    images,
    jsonld,
    invalidJsonLd: jsonld.some(item => item.invalid),
    forms: (source.match(/<form\b/gi) || []).length,
    blockingScripts: headScripts.length,
    text,
    paragraphs,
    wordCount: words.length,
  }
}

function metaContent(tags, name) {
  const tag = tags.find(item => attr(item, 'name').toLowerCase() === name)
  return tag ? attr(tag, 'content') : ''
}

function metaProperty(tags, property) {
  const tag = tags.find(item => attr(item, 'property').toLowerCase() === property)
  return tag ? attr(tag, 'content') : ''
}

function parseRobots(text) {
  const lines = String(text || '').split(/\r?\n/)
  const disallowed = []
  const sitemaps = []
  let applies = false
  for (const line of lines) {
    const clean = line.replace(/#.*$/, '').trim()
    if (!clean) continue
    const [rawKey, ...rest] = clean.split(':')
    const key = rawKey.trim().toLowerCase()
    const value = rest.join(':').trim()
    if (key === 'user-agent') {
      applies = value === '*'
    } else if (key === 'sitemap') {
      sitemaps.push(value)
    } else if (applies && key === 'disallow' && value) {
      disallowed.push(value)
    }
  }
  return { disallowed, sitemaps }
}

function pathBlocked(url, disallowed) {
  let pathname = '/'
  try {
    pathname = new URL(url).pathname
  } catch {
    return false
  }
  return disallowed.some(rule => {
    if (rule === '/') return true
    return pathname.startsWith(rule)
  })
}

function parseSitemap(xml) {
  const locs = []
  const pattern = /<loc>\s*([^<]+)\s*<\/loc>/gi
  let match
  while ((match = pattern.exec(String(xml || '')))) locs.push(decode(match[1].trim()))
  return locs
}

module.exports = {
  absoluteUrl,
  extractPage,
  parseRobots,
  parseSitemap,
  pathBlocked,
  textContent,
}
