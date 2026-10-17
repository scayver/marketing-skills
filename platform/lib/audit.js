const { getAgent } = require('./agents')

const TYPE_INDUSTRY = {
  Dentist: 'Dentistry',
  Physician: 'Healthcare',
  MedicalClinic: 'Healthcare',
  MedicalBusiness: 'Healthcare',
  Restaurant: 'Restaurant',
  Store: 'Retail',
  LegalService: 'Legal services',
  Attorney: 'Legal services',
  RealEstateAgent: 'Real estate',
  HomeAndConstructionBusiness: 'Home services',
  ProfessionalService: 'Professional services',
  AccountingService: 'Accounting',
  AutoRepair: 'Auto repair',
  LodgingBusiness: 'Hospitality',
  EducationalOrganization: 'Education',
  SoftwareApplication: 'Software',
}

const BUSINESS_TYPES = new Set([
  'Organization',
  'LocalBusiness',
  'Dentist',
  'MedicalBusiness',
  'MedicalClinic',
  'Physician',
  'Restaurant',
  'Store',
  'LegalService',
  'Attorney',
  'RealEstateAgent',
  'ProfessionalService',
  'Corporation',
  'AccountingService',
  'AutoRepair',
  'LodgingBusiness',
  'EducationalOrganization',
  'SoftwareApplication',
  'HomeAndConstructionBusiness',
])

function typesOf(node) {
  const value = node && node['@type']
  if (!value) return []
  return (Array.isArray(value) ? value : [value]).map(item => String(item))
}

function nodesOf(pages) {
  return pages.flatMap(page => (page.extracted.jsonld || [])
    .filter(node => node && !node.invalid)
    .map(node => ({ node, url: page.finalUrl })))
}

function businessNodes(pages) {
  return nodesOf(pages).filter(item => typesOf(item.node).some(type => BUSINESS_TYPES.has(type)))
}

function serviceNames(pages) {
  const names = []
  for (const { node, url } of nodesOf(pages)) {
    const offers = [].concat(node.makesOffer || node.hasOfferCatalog || [])
    for (const offer of offers) {
      const name = offer?.itemOffered?.name || offer?.name
      if (name) names.push({ name: String(name), url, source: 'json-ld' })
    }
    if (typesOf(node).includes('Service') && node.name) {
      names.push({ name: String(node.name), url, source: 'json-ld' })
    }
  }
  return uniqueBy(names, item => item.name.toLowerCase())
}

function uniqueBy(items, keyFn) {
  const seen = new Set()
  const result = []
  for (const item of items) {
    const key = keyFn(item)
    if (seen.has(key)) continue
    seen.add(key)
    result.push(item)
  }
  return result
}

function field(id, label, value, status, evidence) {
  return {
    id,
    label,
    value: value || '',
    status,
    evidence: evidence || [],
  }
}

function quote(text, max = 180) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean
  return clean.slice(0, max).replace(/\s+\S*$/, '')
}

function buildProfile(crawl) {
  const pages = crawl.pages.filter(page => page.extracted)
  const home = pages[0]
  const nodes = businessNodes(pages)
  const primary = nodes[0]
  const schemaName = primary?.node?.name ? String(primary.node.name) : ''
  const ogName = home?.extracted?.ogSiteName || ''
  const titleName = home?.extracted?.title ? home.extracted.title.split(/\||-|–|—/)[0].trim() : ''
  const nameEvidence = []
  let name = ''
  let nameStatus = 'unknown'
  if (schemaName) {
    name = schemaName
    nameStatus = 'verified'
    nameEvidence.push({ url: primary.url, source: 'json-ld', detail: schemaName })
  } else if (ogName) {
    name = ogName
    nameStatus = 'verified'
    nameEvidence.push({ url: home.finalUrl, source: 'meta', detail: ogName })
  } else if (titleName) {
    name = titleName
    nameStatus = 'assumption'
    nameEvidence.push({ url: home?.finalUrl, source: 'title', detail: home?.extracted?.title || '' })
  }

  let industry = ''
  let industryStatus = 'unknown'
  const industryEvidence = []
  for (const item of nodes) {
    for (const type of typesOf(item.node)) {
      if (TYPE_INDUSTRY[type]) {
        industry = TYPE_INDUSTRY[type]
        industryStatus = 'verified'
        industryEvidence.push({ url: item.url, source: 'json-ld', detail: type })
        break
      }
    }
    if (industry) break
  }
  if (!industry && home) {
    const match = home.extracted.text.match(/\b(dentist|dental|law firm|attorney|restaurant|plumber|accountant)\b/i)
    if (match) {
      industry = match[1].toLowerCase()
      industryStatus = 'assumption'
      industryEvidence.push({ url: home.finalUrl, source: 'visible-text', detail: quote(sentenceAround(home.extracted.text, match.index)) })
    }
  }

  const services = serviceNames(pages)
  const serviceHeadings = pages.flatMap(page => page.extracted.headings
    .filter(item => item.level === 2)
    .map(item => ({ name: item.text, url: page.finalUrl, source: 'heading' })))
  const serviceValue = services.length
    ? services.map(item => item.name).join(', ')
    : uniqueBy(serviceHeadings, item => item.name.toLowerCase()).slice(0, 6).map(item => item.name).join(', ')
  const serviceStatus = services.length ? 'verified' : serviceValue ? 'assumption' : 'unknown'
  const serviceEvidence = (services.length ? services : serviceHeadings).slice(0, 6).map(item => ({
    url: item.url,
    source: item.source,
    detail: item.name,
  }))

  const locations = []
  for (const item of nodes) {
    const addresses = [].concat(item.node.address || [])
    for (const address of addresses) {
      if (!address || typeof address !== 'object') continue
      const city = [address.addressLocality, address.addressRegion].filter(Boolean).join(', ')
      if (city) locations.push({ city, url: item.url, source: 'json-ld' })
    }
  }
  if (!locations.length && home) {
    const match = home.extracted.text.match(/\b([A-Z][a-z]+(?:\s[A-Z][a-z]+)?),\s*([A-Z]{2})\b/)
    if (match) locations.push({ city: `${match[1]}, ${match[2]}`, url: home.finalUrl, source: 'visible-text' })
  }
  const locationValue = uniqueBy(locations, item => item.city).map(item => item.city).join('; ')
  const locationStatus = locations.some(item => item.source === 'json-ld') ? 'verified' : locationValue ? 'assumption' : 'unknown'

  const description = primary?.node?.description || home?.extracted?.description || home?.extracted?.ogDescription || ''
  const descriptionSource = primary?.node?.description ? 'json-ld' : home?.extracted?.description ? 'meta' : 'meta'
  const audienceMatch = home?.extracted?.text?.match(/\b(?:for|serving)\s+([a-z][a-z\s]{2,40}?)(?:\.|,|\band\b)/i)
  const audience = audienceMatch ? audienceMatch[1].trim() : ''

  const socials = uniqueBy(pages.flatMap(page => page.extracted.links
    .filter(link => link.social)
    .map(link => ({ href: link.href, social: link.social, url: page.finalUrl }))), item => item.href)

  return [
    field('businessName', 'Business name', name, nameStatus, nameEvidence),
    field('industry', 'Industry', industry, industryStatus, industryEvidence),
    field('services', 'Products and services', serviceValue, serviceStatus, serviceEvidence),
    field('audience', 'Audience clue', audience, audience ? 'assumption' : 'unknown', audience ? [{
      url: home?.finalUrl,
      source: 'visible-text',
      detail: quote(sentenceAround(home.extracted.text, audienceMatch.index)),
    }] : []),
    field('locations', 'Service locations', locationValue, locationStatus, locations.map(item => ({
      url: item.url,
      source: item.source,
      detail: item.city,
    }))),
    field('positioning', 'Stated offer', String(description), description ? 'verified' : 'unknown', description ? [{
      url: primary?.url || home?.finalUrl,
      source: descriptionSource,
      detail: quote(description),
    }] : []),
    field('channels', 'Linked social profiles', socials.map(item => item.social).join(', '), socials.length ? 'verified' : 'unknown', socials.map(item => ({
      url: item.url,
      source: 'link',
      detail: item.href,
    }))),
  ]
}

function sentenceAround(text, index) {
  const source = String(text || '')
  const start = Math.max(0, source.lastIndexOf('.', index) + 1)
  const endCandidate = source.indexOf('.', index + 1)
  const end = endCandidate === -1 ? Math.min(source.length, index + 160) : endCandidate + 1
  return source.slice(start, end)
}

function criterion(id, label, status, detail) {
  return { id, label, status, detail }
}

function titleStatus(title) {
  const length = String(title || '').trim().length
  if (!length) return 'fail'
  if (length < 15 || length > 65) return 'fail'
  return 'pass'
}

function buildScores(crawl, pages) {
  const home = pages[0]
  const https = crawl.finalUrl.startsWith('https://')
  const robotsOk = crawl.robots.status === 200 && !crawl.robots.disallowed.includes('/')
  const sitemapOk = crawl.sitemap.locs.length > 0
  const titlesOk = pages.every(page => titleStatus(page.extracted.title) === 'pass')
  const h1Ok = pages.every(page => page.extracted.h1.length === 1)
  const indexOk = pages.every(page => !/noindex/i.test(page.extracted.robots))
  const canonicalOk = pages.every(page => page.extracted.canonical)
  const jsonldOk = pages.some(page => page.extracted.jsonld.some(node => !node.invalid && typesOf(node).length))
  const invalidJson = pages.some(page => page.extracted.invalidJsonLd)
  const langOk = Boolean(home?.extracted.lang)
  const viewportOk = Boolean(home?.extracted.viewport)
  const descriptionsOk = pages.every(page => page.extracted.description && page.extracted.description.length >= 50 && page.extracted.description.length <= 160)
  const thin = pages.filter(page => page.extracted.wordCount < 80)
  const duplicateTitles = hasDuplicates(pages.map(page => page.extracted.title).filter(Boolean))
  const responseOk = home ? home.durationMs <= 1500 : false
  const weightOk = home ? home.bytes <= 200000 : false
  const images = pages.flatMap(page => page.extracted.images)
  const altOk = images.length === 0 || images.every(image => image.hasAlt && image.alt.trim())
  const dimensionsOk = images.length === 0 || images.every(image => image.width && image.height)
  const blockingOk = pages.every(page => page.extracted.blockingScripts === 0)
  const formOk = pages.some(page => page.extracted.forms > 0 || page.extracted.links.some(link => link.href.startsWith('tel:') || link.href.startsWith('mailto:')))
  const navOk = pages.length >= 2
  const ctaOk = pages.some(page => page.extracted.links.some(link => /contact|book|call|schedule|quote/i.test(`${link.text} ${link.href}`)))
  const llmsOk = crawl.llms.status === 200
  const socialOk = pages.some(page => page.extracted.links.some(link => link.social))

  const groups = [
    {
      id: 'technical',
      label: 'Technical SEO',
      criteria: [
        criterion('https', 'HTTPS on the scanned URL', https ? 'pass' : 'fail', https ? 'The final URL uses HTTPS.' : 'The final URL uses HTTP.'),
        criterion('robots', 'robots.txt allows crawling', crawl.robots.status === 0 ? 'unknown' : robotsOk ? 'pass' : 'fail', robotsDetail(crawl.robots)),
        criterion('sitemap', 'XML sitemap found', crawl.sitemap.status === 0 ? 'unknown' : sitemapOk ? 'pass' : 'fail', sitemapOk ? `${crawl.sitemap.locs.length} URLs listed.` : 'No sitemap URLs were read.'),
        criterion('titles', 'Every fetched page has a title of 15 to 65 characters', titlesOk ? 'pass' : 'fail', titlesOk ? 'Titles are in range.' : 'At least one title is missing or outside that range.'),
        criterion('h1', 'Every fetched page has one H1', h1Ok ? 'pass' : 'fail', h1Ok ? 'Each fetched page has one H1.' : 'At least one page has no H1 or more than one.'),
        criterion('index', 'Fetched pages allow indexing', indexOk ? 'pass' : 'fail', indexOk ? 'No noindex directive on fetched pages.' : 'A fetched page includes noindex.'),
        criterion('canonical', 'Fetched pages declare a canonical URL', canonicalOk ? 'pass' : 'fail', canonicalOk ? 'Each fetched page has a canonical.' : 'At least one fetched page has no canonical.'),
        criterion('jsonld', 'Structured data is present and parseable', invalidJson ? 'fail' : jsonldOk ? 'pass' : 'fail', invalidJson ? 'A JSON-LD block did not parse.' : jsonldOk ? 'At least one structured data block parsed.' : 'No structured data was found.'),
        criterion('lang', 'Homepage declares a language', langOk ? 'pass' : 'fail', langOk ? `Language is ${home.extracted.lang}.` : 'The html element has no lang attribute.'),
        criterion('viewport', 'Homepage declares a viewport', viewportOk ? 'pass' : 'fail', viewportOk ? 'A viewport meta tag is present.' : 'No viewport meta tag was found.'),
      ],
    },
    {
      id: 'content',
      label: 'Content and on-page SEO',
      criteria: [
        criterion('descriptions', 'Every fetched page has a meta description of 50 to 160 characters', descriptionsOk ? 'pass' : 'fail', descriptionsOk ? 'Descriptions are in range.' : 'At least one description is missing or outside that range.'),
        criterion('depth', 'Fetched pages have at least 80 words of visible text', thin.length ? 'fail' : 'pass', thin.length ? `${thin.length} page(s) are under 80 words.` : 'Fetched pages meet the word floor.'),
        criterion('duplicate-titles', 'Fetched titles are unique', duplicateTitles ? 'fail' : 'pass', duplicateTitles ? 'Two fetched pages share a title.' : 'Titles differ.'),
      ],
    },
    {
      id: 'performance',
      label: 'Page response and weight',
      criteria: [
        criterion('response', 'Homepage responded within 1.5 seconds from this workspace', home ? (responseOk ? 'pass' : 'fail') : 'unknown', home ? `Response time was ${home.durationMs} ms. This is not a Core Web Vitals field measurement.` : 'Homepage was not fetched.'),
        criterion('weight', 'Homepage HTML is under 200 KB', home ? (weightOk ? 'pass' : 'fail') : 'unknown', home ? `HTML size was ${home.bytes} bytes.` : 'Homepage was not fetched.'),
        criterion('alt', 'Images on fetched pages have alt text', images.length ? (altOk ? 'pass' : 'fail') : 'unknown', images.length ? (altOk ? 'Every image has alt text.' : 'At least one image is missing alt text.') : 'No images were found on fetched pages.'),
        criterion('dimensions', 'Images declare width and height', images.length ? (dimensionsOk ? 'pass' : 'fail') : 'unknown', images.length ? (dimensionsOk ? 'Images declare dimensions.' : 'At least one image omits width or height.') : 'No images were found.'),
        criterion('blocking', 'Fetched pages avoid blocking scripts in the head', blockingOk ? 'pass' : 'fail', blockingOk ? 'No blocking head scripts were found.' : 'A head script is missing async or defer.'),
        criterion('cwv', 'Field Core Web Vitals', 'unknown', 'LCP, INP, and CLS need a field data source such as Search Console or PageSpeed field data. This crawl does not report them.'),
      ],
    },
    {
      id: 'conversion',
      label: 'User experience and conversion',
      criteria: [
        criterion('contact', 'A contact form, phone link, or email link exists', formOk ? 'pass' : 'fail', formOk ? 'A contact path was found.' : 'No form, tel link, or mailto link was found.'),
        criterion('nav', 'The crawl reached more than one HTML page', navOk ? 'pass' : 'fail', navOk ? `${pages.length} HTML pages were fetched.` : 'Only one HTML page was fetched.'),
        criterion('cta', 'A contact-style link is visible', ctaOk ? 'pass' : 'fail', ctaOk ? 'A contact, book, call, schedule, or quote link was found.' : 'No contact-style link text was found.'),
      ],
    },
    {
      id: 'brand',
      label: 'Brand and messaging',
      criteria: [
        criterion('name', 'A business name is present in structured data or social meta', nameSignal(pages) ? 'pass' : 'fail', nameSignal(pages) ? 'A name was found in structured data or og:site_name.' : 'The name would have to be guessed from the title.'),
        criterion('offer', 'The site states an offer in structured data or a meta description', offerSignal(pages) ? 'pass' : 'fail', offerSignal(pages) ? 'A description was found.' : 'No schema description or meta description was found.'),
      ],
    },
    {
      id: 'market',
      label: 'Marketing signals',
      criteria: [
        criterion('social', 'A public social profile is linked', socialOk ? 'pass' : 'fail', socialOk ? 'At least one known social host is linked.' : 'No known social profile link was found.'),
        criterion('competitors', 'Named competitors', 'unknown', 'A public page crawl does not establish a competitor set. Scout will not invent one.'),
        criterion('rankings', 'Keyword rankings and traffic', 'unknown', 'Search Console is not connected, so this workspace cannot report queries, clicks, or positions.'),
      ],
    },
    {
      id: 'ai',
      label: 'AI search structure',
      criteria: [
        criterion('structure', 'Parseable structured data exists', invalidJson ? 'fail' : jsonldOk ? 'pass' : 'fail', invalidJson ? 'JSON-LD failed to parse.' : jsonldOk ? 'Structured data parsed.' : 'No structured data was found.'),
        criterion('headings', 'Fetched pages use an H1', pages.every(page => page.extracted.h1.length >= 1) ? 'pass' : 'fail', 'Heading presence is a structure check, not a citation count.'),
        criterion('llms', 'llms.txt is available', crawl.llms.status === 0 ? 'unknown' : llmsOk ? 'pass' : 'fail', llmsOk ? 'llms.txt returned 200.' : 'llms.txt was not available.'),
        criterion('citations', 'AI citations and mentions', 'unknown', 'This crawl cannot see whether answer engines cite the site.'),
      ],
    },
  ]

  return groups.map(group => {
    const measured = group.criteria.filter(item => item.status !== 'unknown')
    const passed = measured.filter(item => item.status === 'pass').length
    return {
      ...group,
      score: measured.length ? Math.round((passed / measured.length) * 100) : null,
      measured: measured.length,
      passed,
    }
  })
}

function nameSignal(pages) {
  return pages.some(page => page.extracted.ogSiteName || page.extracted.jsonld.some(node => !node.invalid && node.name && typesOf(node).some(type => BUSINESS_TYPES.has(type))))
}

function offerSignal(pages) {
  return pages.some(page => page.extracted.description || page.extracted.jsonld.some(node => !node.invalid && node.description))
}

function robotsDetail(robots) {
  if (!robots || robots.status === 0) return 'robots.txt was not requested.'
  if (robots.status !== 200) return `robots.txt returned ${robots.status}.`
  if (robots.disallowed.includes('/')) return 'robots.txt disallows the whole site.'
  return 'robots.txt was read and does not disallow every path.'
}

function hasDuplicates(values) {
  return new Set(values.map(value => value.toLowerCase())).size !== values.length
}

function finding(partial) {
  return {
    assignee: null,
    evidence: 'measured',
    effort: 'Low',
    impact: 'Medium',
    costNote: 'No ad spend. This is a site change you can approve before any publishing step.',
    ...partial,
  }
}

function buildFindings(crawl, pages) {
  const findings = []
  if (!crawl.finalUrl.startsWith('https://')) {
    findings.push(finding({
      id: 'https',
      area: 'Technical SEO',
      severity: 'high',
      title: 'The scanned URL does not use HTTPS',
      what: `The crawl finished on ${crawl.finalUrl}.`,
      why: 'Browsers and search engines expect a secure page before a visitor enters information.',
      how: 'Serve the site over HTTPS and redirect HTTP requests.',
      agentId: 'rank',
      impact: 'High',
      pages: [crawl.finalUrl],
    }))
  }

  for (const page of pages) {
    const extracted = page.extracted
    if (/noindex/i.test(extracted.robots)) {
      findings.push(finding({
        id: `noindex:${page.finalUrl}`,
        area: 'Technical SEO',
        severity: 'high',
        title: 'A page asks crawlers not to index it',
        what: `${page.finalUrl} includes a noindex directive.`,
        why: 'If this page should earn organic visits, noindex keeps it out of search results.',
        how: 'Remove noindex when you want the page indexed. Keep it when the page is private.',
        agentId: 'rank',
        impact: 'High',
        pages: [page.finalUrl],
        prepare: 'noindex',
      }))
    }
    if (!extracted.title || extracted.title.length < 15 || extracted.title.length > 65) {
      findings.push(finding({
        id: `title:${page.finalUrl}`,
        area: 'Content and on-page SEO',
        severity: extracted.title ? 'medium' : 'high',
        title: extracted.title ? 'A title is outside the 15 to 65 character range' : 'A page is missing a title',
        what: extracted.title ? `"${extracted.title}" is ${extracted.title.length} characters.` : `${page.finalUrl} has no title.`,
        why: 'The title is the label searchers see first. A missing or awkward title makes the page harder to understand.',
        how: 'Write one specific title between 15 and 65 characters.',
        agentId: 'quill',
        pages: [page.finalUrl],
      }))
    }
    if (!extracted.description || extracted.description.length < 50 || extracted.description.length > 160) {
      findings.push(finding({
        id: `meta:${page.finalUrl}`,
        area: 'Content and on-page SEO',
        severity: 'medium',
        title: extracted.description ? 'A meta description is outside the 50 to 160 character range' : 'A page is missing a meta description',
        what: extracted.description ? `The description is ${extracted.description.length} characters.` : `${page.finalUrl} has no meta description.`,
        why: 'The description is the summary searchers may see under the title.',
        how: 'Draft a description from the page copy, then approve it before you publish.',
        agentId: 'quill',
        pages: [page.finalUrl],
        prepare: 'meta',
      }))
    }
    if (extracted.h1.length !== 1) {
      findings.push(finding({
        id: `h1:${page.finalUrl}`,
        area: 'Content and on-page SEO',
        severity: 'medium',
        title: extracted.h1.length ? 'A page has more than one H1' : 'A page has no H1',
        what: extracted.h1.length ? `H1s: ${extracted.h1.join(' | ')}` : `${page.finalUrl} has no H1.`,
        why: 'One H1 tells a visitor and a crawler what the page is about.',
        how: 'Keep a single H1 that states the page topic.',
        agentId: 'sage',
        pages: [page.finalUrl],
      }))
    }
    if (!extracted.canonical) {
      findings.push(finding({
        id: `canonical:${page.finalUrl}`,
        area: 'Technical SEO',
        severity: 'low',
        title: 'A page does not declare a canonical URL',
        what: `${page.finalUrl} has no canonical link.`,
        why: 'A canonical tells crawlers which URL is the preferred copy.',
        how: 'Add a canonical that points to the preferred URL.',
        agentId: 'rank',
        impact: 'Low',
        pages: [page.finalUrl],
      }))
    } else {
      try {
        const canonicalPath = new URL(extracted.canonical).pathname.replace(/\/index\.html$/, '').replace(/\/$/, '')
        const pagePath = new URL(page.finalUrl).pathname.replace(/\/index\.html$/, '').replace(/\/$/, '')
        if (canonicalPath && canonicalPath !== pagePath) {
          findings.push(finding({
            id: `canonical-target:${page.finalUrl}`,
            area: 'Technical SEO',
            severity: 'medium',
            title: 'A canonical points at a different page',
            what: `${page.finalUrl} declares ${extracted.canonical} as its canonical.`,
            why: 'A canonical that points elsewhere can keep this page out of the index.',
            how: 'Point the canonical at this page unless you intend to consolidate it.',
            agentId: 'rank',
            pages: [page.finalUrl],
          }))
        }
      } catch {
        /* ignore malformed canonicals here; missing-canonical covers empty values */
      }
    }
    if (extracted.wordCount < 80) {
      findings.push(finding({
        id: `thin:${page.finalUrl}`,
        area: 'Content and on-page SEO',
        severity: 'medium',
        title: 'A page has thin visible text',
        what: `${page.finalUrl} has ${extracted.wordCount} words of visible text.`,
        why: 'A thin page gives a visitor little reason to stay and little text for search engines to understand.',
        how: 'Expand the page with the services, proof, and next step you actually offer.',
        agentId: 'sage',
        effort: 'Medium',
        pages: [page.finalUrl],
      }))
    }
    const missingAlt = extracted.images.filter(image => !image.hasAlt || !image.alt.trim())
    if (missingAlt.length) {
      findings.push(finding({
        id: `alt:${page.finalUrl}`,
        area: 'User experience',
        severity: 'low',
        title: 'Images are missing alt text',
        what: `${missingAlt.length} image(s) on ${page.finalUrl} have no alt text.`,
        why: 'Alt text tells a visitor using a screen reader what the image shows.',
        how: 'Write alt text that describes the image, then approve the draft.',
        agentId: 'studio',
        impact: 'Low',
        pages: [page.finalUrl],
        prepare: 'alt',
      }))
    }
  }

  if (!pages.some(page => page.extracted.jsonld.some(node => !node.invalid && typesOf(node).length))) {
    findings.push(finding({
      id: 'jsonld',
      area: 'AI search structure',
      severity: 'medium',
      title: 'No parseable structured data was found',
      what: 'Fetched pages did not include a usable JSON-LD block.',
      why: 'Structured data makes the business, location, and offer explicit for search and answer systems.',
      how: 'Add JSON-LD for the business type you can confirm.',
      agentId: 'echo',
      effort: 'Medium',
      pages: pages.map(page => page.finalUrl),
    }))
  }

  if (crawl.llms.status && crawl.llms.status !== 200) {
    findings.push(finding({
      id: 'llms',
      area: 'AI search structure',
      severity: 'low',
      title: 'llms.txt is not available',
      what: `${crawl.llms.url} returned ${crawl.llms.status}.`,
      why: 'llms.txt is an optional guide for agents that look for a site summary. Its absence is not a ranking measurement.',
      how: 'Publish llms.txt only after you confirm the summary matches the business.',
      agentId: 'echo',
      impact: 'Low',
      pages: [crawl.llms.url],
    }))
  }

  if (!pages.some(page => page.extracted.forms > 0 || page.extracted.links.some(link => /^(tel:|mailto:)/.test(link.href)))) {
    findings.push(finding({
      id: 'contact-path',
      area: 'User experience and conversion',
      severity: 'high',
      title: 'No contact form, phone link, or email link was found',
      what: 'Fetched pages do not show a form, tel link, or mailto link.',
      why: 'A visitor who is ready to ask a question needs a visible next step.',
      how: 'Add a contact path on the page where you want inquiries to start.',
      agentId: 'convert',
      impact: 'High',
      effort: 'Medium',
      pages: pages.map(page => page.finalUrl),
    }))
  }

  return findings.sort(compareFindings)
}

function compareFindings(a, b) {
  const rank = { high: 0, medium: 1, low: 2 }
  return rank[a.severity] - rank[b.severity] || a.title.localeCompare(b.title)
}

function overallScore(groups) {
  const scored = groups.filter(group => group.score !== null)
  if (!scored.length) return null
  return Math.round(scored.reduce((sum, group) => sum + group.score, 0) / scored.length)
}

function buildAudit(crawl) {
  const pages = crawl.pages.filter(page => page.extracted)
  const profile = buildProfile({ ...crawl, pages })
  const scores = buildScores(crawl, pages)
  const findings = buildFindings(crawl, pages).map(item => ({
    ...item,
    agentName: getAgent(item.agentId)?.name || item.agentId,
  }))
  return {
    requestedUrl: crawl.requestedUrl,
    finalUrl: crawl.finalUrl,
    fetchedAt: crawl.fetchedAt,
    limits: crawl.limits,
    robots: {
      url: crawl.robots.url,
      status: crawl.robots.status,
      disallowed: crawl.robots.disallowed,
    },
    sitemap: {
      url: crawl.sitemap.url,
      status: crawl.sitemap.status,
      urlCount: crawl.sitemap.locs.length,
    },
    llms: crawl.llms,
    pages: pages.map(page => ({
      url: page.finalUrl,
      status: page.status,
      bytes: page.bytes,
      durationMs: page.durationMs,
      title: page.extracted.title,
      wordCount: page.extracted.wordCount,
      h1: page.extracted.h1,
      description: page.extracted.description,
    })),
    skipped: crawl.skipped,
    profile,
    scores,
    overall: overallScore(scores),
    findings,
    estimates: [
      'Field Core Web Vitals are not in the score.',
      'Keyword rankings, clicks, and AI citations are not in the score.',
      'Competitor names are not inferred from the crawl.',
    ],
  }
}

module.exports = {
  buildAudit,
  buildFindings,
  buildProfile,
  buildScores,
  overallScore,
}
