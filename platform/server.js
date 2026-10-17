#!/usr/bin/env node

const fs = require('node:fs')
const http = require('node:http')
const path = require('node:path')

const { listAgents } = require('./lib/agents')
const { discover } = require('./lib/crawl')
const {
  approveChange,
  ask,
  assignFinding,
  confirmField,
  createSession,
  createWorkflow,
  prepareChange,
  publicSession,
  rescan,
} = require('./lib/session')

const root = path.resolve(__dirname)
const publicDir = path.join(root, 'public')
const fixtureDir = path.join(root, 'fixtures')
const sessions = new Map()

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
}

function start(port = Number(process.env.PORT || 8787), host = '127.0.0.1') {
  const server = http.createServer((req, res) => {
    handle(req, res).catch(error => {
      const message = error.message || 'The workspace hit an unexpected error.'
      const status = /Enter a full|Use an http|Remove the username|not available|did not resolve|did not return|returned|redirected|Choose confirm|not found|no longer available|does not have a preview|Enter a question|Send JSON|too large/i.test(message) ? 400 : 500
      send(res, status, { error: message })
    })
  })
  return new Promise(resolve => {
    server.listen(port, host, () => resolve(server))
  })
}

async function handle(req, res) {
  const url = new URL(req.url, 'http://127.0.0.1')
  if (req.method === 'GET' && url.pathname === '/api/health') {
    return send(res, 200, { ok: true })
  }
  if (req.method === 'GET' && url.pathname === '/api/agents') {
    return send(res, 200, { agents: listAgents() })
  }
  if (req.method === 'GET' && url.pathname === '/api/sample') {
    const host = req.headers.host || `127.0.0.1:${serverPort(req)}`
    return send(res, 200, { url: `http://${host}/fixtures/harbor-pine/index.html`, name: 'Harbor Pine Dental' })
  }
  if (req.method === 'POST' && url.pathname === '/api/discover') {
    const body = await readBody(req)
    const session = createSession(await discover(body.url))
    sessions.set(session.id, session)
    return send(res, 200, publicSession(session))
  }

  const sessionMatch = url.pathname.match(/^\/api\/sessions\/([^/]+)(?:\/([^/]+))?$/)
  if (sessionMatch) {
    const session = sessions.get(sessionMatch[1])
    if (!session) return send(res, 404, { error: 'That scan is no longer in memory. Start a new scan.' })
    const action = sessionMatch[2] || ''
    if (req.method === 'GET' && !action) return send(res, 200, publicSession(session))
    const body = req.method === 'POST' ? await readBody(req) : {}
    if (req.method === 'POST' && action === 'confirm') {
      confirmField(session, body.fieldId, body.decision)
      return send(res, 200, publicSession(session))
    }
    if (req.method === 'POST' && action === 'assign') {
      assignFinding(session, body.findingId, body.agentId)
      return send(res, 200, publicSession(session))
    }
    if (req.method === 'POST' && action === 'prepare') {
      prepareChange(session, body.findingId)
      return send(res, 200, publicSession(session))
    }
    if (req.method === 'POST' && action === 'approve') {
      approveChange(session, body.changeSetId)
      return send(res, 200, publicSession(session))
    }
    if (req.method === 'POST' && action === 'ask') {
      ask(session, body.agentId || 'atlas', body.message)
      return send(res, 200, publicSession(session))
    }
    if (req.method === 'POST' && action === 'workflow') {
      createWorkflow(session)
      return send(res, 200, publicSession(session))
    }
    if (req.method === 'POST' && action === 'rescan') {
      await rescan(session)
      return send(res, 200, publicSession(session))
    }
    return send(res, 404, { error: 'That action is not available.' })
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return send(res, 405, { error: 'Method not allowed.' })
  }
  return serveStatic(url.pathname, res)
}

function serverPort(req) {
  const host = req.headers.host || ''
  const port = host.split(':')[1]
  return port || '8787'
}

function serveStatic(pathname, res) {
  const requested = pathname === '/' ? '/index.html' : pathname
  let filePath
  if (requested === '/robots.txt') {
    filePath = path.join(fixtureDir, 'harbor-pine', 'robots.txt')
  } else if (requested.startsWith('/fixtures/')) {
    filePath = path.join(fixtureDir, requested.slice('/fixtures/'.length))
  } else {
    filePath = path.join(publicDir, requested)
  }
  const resolved = path.resolve(filePath)
  const allowed = resolved.startsWith(publicDir) || resolved.startsWith(fixtureDir)
  if (!allowed || !fs.existsSync(resolved) || fs.statSync(resolved).isDirectory()) {
    return send(res, 404, { error: 'Not found.' })
  }
  const ext = path.extname(resolved)
  res.writeHead(200, { 'content-type': TYPES[ext] || 'application/octet-stream', 'cache-control': 'no-store' })
  fs.createReadStream(resolved).pipe(res)
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    let size = 0
    req.on('data', chunk => {
      size += chunk.length
      if (size > 100000) {
        reject(new Error('The request is too large.'))
        req.destroy()
      } else {
        chunks.push(chunk)
      }
    })
    req.on('end', () => {
      if (!chunks.length) return resolve({})
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')))
      } catch {
        reject(new Error('Send JSON.'))
      }
    })
    req.on('error', reject)
  })
}

function send(res, status, payload) {
  const body = JSON.stringify(payload)
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
  })
  res.end(body)
}

if (require.main === module) {
  start().then(server => {
    const address = server.address()
    console.log(`Scayver Marketing OS listening on http://127.0.0.1:${address.port}`)
    console.log(`Sample business: http://127.0.0.1:${address.port}/fixtures/harbor-pine/index.html`)
  })
}

module.exports = { start }
