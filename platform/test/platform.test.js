const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')

const { buildAudit } = require('../lib/audit')
const { answerQuestion, buildWorkflow } = require('../lib/answer')
const { discover } = require('../lib/crawl')
const { extractPage, parseRobots, pathBlocked } = require('../lib/extract')
const { prepareFinding } = require('../lib/prepare')
const { createSession, publicSession } = require('../lib/session')
const { start } = require('../server')
const { isBlockedIp } = require('../lib/urls')

const fixtureDir = path.join(__dirname, '..', 'fixtures', 'harbor-pine')

function pageFrom(file, url) {
  const html = fs.readFileSync(path.join(fixtureDir, file), 'utf8')
  return {
    finalUrl: url,
    status: 200,
    bytes: Buffer.byteLength(html),
    durationMs: 20,
    extracted: extractPage(html, url),
  }
}

function sampleCrawl() {
  const origin = 'http://127.0.0.1:8787'
  const base = `${origin}/fixtures/harbor-pine`
  return {
    requestedUrl: `${base}/index.html`,
    finalUrl: `${base}/index.html`,
    fetchedAt: '2026-10-16T00:00:00.000Z',
    limits: { note: 'fixture' },
    robots: {
      url: `${origin}/robots.txt`,
      status: 200,
      disallowed: ['/fixtures/harbor-pine/private.html'],
      sitemaps: [],
    },
    sitemap: { url: `${base}/sitemap.xml`, status: 200, locs: [`${base}/index.html`] },
    llms: { url: `${origin}/llms.txt`, status: 404 },
    pages: [
      pageFrom('index.html', `${base}/index.html`),
      pageFrom('services.html', `${base}/services.html`),
      pageFrom('about.html', `${base}/about.html`),
      pageFrom('contact.html', `${base}/contact.html`),
    ],
    skipped: [{ url: `${base}/private.html`, reason: 'robots.txt disallows this path.' }],
  }
}

test('blocks private and metadata addresses', () => {
  assert.equal(isBlockedIp('127.0.0.1'), false)
  assert.equal(isBlockedIp('169.254.169.254'), true)
  assert.equal(isBlockedIp('10.0.0.5'), true)
  assert.equal(isBlockedIp('192.168.1.4'), true)
  assert.equal(isBlockedIp('8.8.8.8'), false)
})

test('robots parser keeps the sample staff page private', () => {
  const parsed = parseRobots(fs.readFileSync(path.join(fixtureDir, 'robots.txt'), 'utf8'))
  assert.equal(pathBlocked('http://127.0.0.1/fixtures/harbor-pine/private.html', parsed.disallowed), true)
  assert.equal(pathBlocked('http://127.0.0.1/fixtures/harbor-pine/contact.html', parsed.disallowed), false)
})

test('audit separates verified profile facts from assumptions and unknown competitors', () => {
  const audit = buildAudit(sampleCrawl())
  const byId = Object.fromEntries(audit.profile.map(item => [item.id, item]))
  assert.equal(byId.businessName.value, 'Harbor Pine Dental')
  assert.equal(byId.businessName.status, 'verified')
  assert.equal(byId.industry.value, 'Dentistry')
  assert.equal(byId.industry.status, 'verified')
  assert.equal(byId.locations.status, 'verified')
  assert.match(byId.services.value, /Family cleanings/)
  assert.equal(byId.audience.status, 'assumption')
  assert.equal(audit.scores.find(item => item.id === 'market').criteria.find(item => item.id === 'competitors').status, 'unknown')
  assert.equal(audit.scores.find(item => item.id === 'performance').criteria.find(item => item.id === 'cwv').status, 'unknown')
  assert.ok(audit.findings.some(item => item.id.startsWith('noindex:')))
  assert.ok(audit.findings.some(item => item.id.startsWith('meta:')))
  assert.equal(audit.findings.some(item => /competitor/i.test(item.title)), false)
  assert.ok(audit.overall >= 0 && audit.overall <= 100)
})

test('answers refuse invented traffic and prepare an approval preview', () => {
  const session = createSession(sampleCrawl())
  const traffic = answerQuestion(session, 'atlas', 'Analyze my website and tell me why we are not getting enough organic traffic.')
  assert.match(traffic.paragraphs.join(' '), /Search Console is not connected/)
  const plan = answerQuestion(session, 'quill', 'Show the five most important issues and create a plan.')
  assert.equal(plan.workflow, true)
  assert.equal(buildWorkflow(session.audit).steps.at(-1).status, 'blocked')
  const meta = session.audit.findings.find(item => item.prepare === 'meta')
  const preview = prepareFinding(meta, session.crawl.pages)
  assert.ok(preview.after.length >= 40)
  assert.match(preview.note, /does not publish/)
  const saved = publicSession(session)
  assert.equal(saved.audit.profile[0].value, 'Harbor Pine Dental')
})

test('live scan of the sample business skips the private page and supports approval', async () => {
  const server = await start(0)
  const port = server.address().port
  const origin = `http://127.0.0.1:${port}`
  try {
    const crawl = await discover(`${origin}/fixtures/harbor-pine/index.html`)
    const urls = crawl.pages.map(page => page.finalUrl)
    assert.ok(urls.some(url => url.endsWith('/contact.html')))
    assert.equal(urls.some(url => url.endsWith('/private.html')), false)
    assert.ok(crawl.skipped.some(item => item.url.endsWith('/private.html')))
    assert.equal(crawl.robots.status, 200)

    const discovered = await fetch(`${origin}/api/discover`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ url: `${origin}/fixtures/harbor-pine/index.html` }),
    })
    const session = await discovered.json()
    assert.equal(discovered.status, 200)
    assert.equal(session.audit.profile.find(item => item.id === 'businessName').value, 'Harbor Pine Dental')
    const finding = session.audit.findings.find(item => item.prepare === 'meta')
    const prepared = await fetch(`${origin}/api/sessions/${session.id}/prepare`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ findingId: finding.id }),
    })
    const drafted = await prepared.json()
    const changeSet = drafted.changeSets[0]
    assert.equal(changeSet.status, 'draft')
    const approved = await fetch(`${origin}/api/sessions/${session.id}/approve`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ changeSetId: changeSet.id }),
    })
    const finalSession = await approved.json()
    assert.equal(finalSession.changeSets[0].status, 'approved')
    assert.match(finalSession.events[0].detail, /No live website/)

    const blocked = await fetch(`${origin}/api/discover`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ url: 'http://169.254.169.254/latest/meta-data' }),
    })
    assert.equal(blocked.status, 400)
  } finally {
    await new Promise(resolve => server.close(resolve))
  }
})
