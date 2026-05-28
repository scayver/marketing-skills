#!/usr/bin/env node

const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN
const BASE_URL = 'https://api.github.com'

function parseArgs(argv) {
  const result = { _: [] }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg.startsWith('--')) {
      const key = arg.slice(2)
      const next = argv[i + 1]
      if (next && !next.startsWith('--')) {
        result[key] = next
        i++
      } else {
        result[key] = true
      }
    } else {
      result._.push(arg)
    }
  }
  return result
}

const args = parseArgs(process.argv.slice(2))
const [cmd, sub] = args._

function parseRepo(value) {
  if (!value) throw new Error('--repo owner/name required')
  const cleaned = value.replace(/^https:\/\/github\.com\//, '').replace(/\.git$/, '').replace(/^\/+|\/+$/g, '')
  const parts = cleaned.split('/')
  if (parts.length < 2 || !parts[0] || !parts[1]) throw new Error('--repo must look like owner/name')
  return { owner: parts[0], repo: parts[1] }
}

function maskHeaders(headers) {
  const masked = { ...headers }
  if (masked.Authorization) masked.Authorization = 'Bearer ***'
  return masked
}

async function api(path, options = {}) {
  const headers = {
    'Accept': options.accept || 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2026-03-10',
    'User-Agent': 'marketing-skills-github-prospects',
  }
  if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`
  const url = `${BASE_URL}${path}`
  if (args['dry-run']) return { _dry_run: true, method: 'GET', url, headers: maskHeaders(headers) }
  const res = await fetch(url, { headers })
  const text = await res.text()
  let body
  try {
    body = text ? JSON.parse(text) : null
  } catch {
    body = text
  }
  if (!res.ok) {
    return { error: true, status: res.status, message: res.statusText, body }
  }
  return body
}

async function paged(path, limit, options = {}) {
  const perPage = Math.min(100, Math.max(1, Number(args['per-page'] || 100)))
  const max = Math.max(1, Number(limit || args.limit || 100))
  const rows = []
  let page = 1
  while (rows.length < max) {
    const separator = path.includes('?') ? '&' : '?'
    const batch = await api(`${path}${separator}per_page=${perPage}&page=${page}`, options)
    if (batch && batch._dry_run) return batch
    if (!Array.isArray(batch)) return batch
    if (batch.length === 0) break
    rows.push(...batch)
    if (batch.length < perPage) break
    page++
  }
  return rows.slice(0, max)
}

function userShape(user) {
  if (!user) return null
  return {
    login: user.login,
    id: user.id,
    type: user.type,
    site_admin: user.site_admin,
    html_url: user.html_url,
    api_url: user.url,
    avatar_url: user.avatar_url,
  }
}

function mergeProspect(map, key, data) {
  const existing = map.get(key) || {
    login: data.login,
    type: data.type,
    html_url: data.html_url,
    api_url: data.api_url,
    avatar_url: data.avatar_url,
    signals: [],
    signal_count: 0,
    starred_at: null,
    forks: [],
  }
  existing.signals.push(data.signal)
  existing.signal_count = existing.signals.length
  if (data.starred_at && !existing.starred_at) existing.starred_at = data.starred_at
  if (data.fork) existing.forks.push(data.fork)
  map.set(key, existing)
}

async function repoSummary(owner, repo) {
  return api(`/repos/${owner}/${repo}`)
}

async function listStargazers(owner, repo, limit) {
  const rows = await paged(`/repos/${owner}/${repo}/stargazers`, limit, { accept: 'application/vnd.github.star+json' })
  if (!Array.isArray(rows)) return rows
  return rows.map(row => {
    if (row.user) return { ...userShape(row.user), starred_at: row.starred_at, signal: 'stargazer' }
    return { ...userShape(row), starred_at: null, signal: 'stargazer' }
  })
}

async function listForks(owner, repo, limit) {
  const rows = await paged(`/repos/${owner}/${repo}/forks?sort=newest`, limit)
  if (!Array.isArray(rows)) return rows
  return rows.map(fork => ({
    ...userShape(fork.owner),
    signal: 'fork',
    fork: {
      full_name: fork.full_name,
      html_url: fork.html_url,
      created_at: fork.created_at,
      updated_at: fork.updated_at,
      pushed_at: fork.pushed_at,
      stargazers_count: fork.stargazers_count,
      forks_count: fork.forks_count,
      open_issues_count: fork.open_issues_count,
    },
  }))
}

async function listWatchers(owner, repo, limit) {
  const rows = await paged(`/repos/${owner}/${repo}/subscribers`, limit)
  if (!Array.isArray(rows)) return rows
  return rows.map(user => ({ ...userShape(user), signal: 'watcher' }))
}

async function exportProspects(owner, repo) {
  const signals = String(args.signals || 'stargazers,forks,watchers').split(',').map(s => s.trim()).filter(Boolean)
  const perSignalLimit = Number(args.limit || 100)
  const map = new Map()

  for (const signal of signals) {
    let rows = []
    if (signal === 'stargazers') rows = await listStargazers(owner, repo, perSignalLimit)
    else if (signal === 'forks') rows = await listForks(owner, repo, perSignalLimit)
    else if (signal === 'watchers') rows = await listWatchers(owner, repo, perSignalLimit)
    else continue
    if (!Array.isArray(rows)) return rows
    for (const row of rows) {
      if (!row || !row.login) continue
      mergeProspect(map, row.login, row)
    }
  }

  const prospects = Array.from(map.values()).sort((a, b) => b.signal_count - a.signal_count || a.login.localeCompare(b.login))
  return {
    repo: `${owner}/${repo}`,
    signals,
    count: prospects.length,
    compliance_note: 'Use public GitHub activity as an intent signal only. Respect GitHub terms, enrich lawfully, check suppression lists, and include required opt-out language in commercial outreach.',
    prospects,
  }
}

function usage() {
  return {
    env: 'Optional: GITHUB_TOKEN or GH_TOKEN for higher rate limits',
    commands: {
      repo: {
        summary: 'repo summary --repo owner/name',
      },
      stargazers: {
        list: 'stargazers list --repo owner/name [--limit 100]',
      },
      forks: {
        list: 'forks list --repo owner/name [--limit 100]',
      },
      watchers: {
        list: 'watchers list --repo owner/name [--limit 100]  # uses subscribers endpoint',
      },
      prospects: {
        export: 'prospects export --repo owner/name [--signals stargazers,forks,watchers] [--limit 100]',
      },
    },
  }
}

async function main() {
  let result
  try {
    const { owner, repo } = parseRepo(args.repo)
    if (cmd === 'repo' && sub === 'summary') {
      const data = await repoSummary(owner, repo)
      if (data && data._dry_run) {
        result = data
      } else {
        result = data && !data.error ? {
          full_name: data.full_name,
          html_url: data.html_url,
          description: data.description,
          language: data.language,
          topics: data.topics,
          stargazers_count: data.stargazers_count,
          forks_count: data.forks_count,
          subscribers_count: data.subscribers_count,
          watchers_count_note: 'GitHub watchers_count commonly mirrors stargazers_count. Use subscribers_count or watchers list for notification watchers.',
          pushed_at: data.pushed_at,
          created_at: data.created_at,
          updated_at: data.updated_at,
        } : data
      }
    } else if (cmd === 'stargazers' && sub === 'list') {
      result = await listStargazers(owner, repo, args.limit || 100)
    } else if (cmd === 'forks' && sub === 'list') {
      result = await listForks(owner, repo, args.limit || 100)
    } else if (cmd === 'watchers' && sub === 'list') {
      result = await listWatchers(owner, repo, args.limit || 100)
    } else if (cmd === 'prospects' && sub === 'export') {
      result = await exportProspects(owner, repo)
    } else {
      result = { error: 'Unknown command', usage: usage() }
    }
  } catch (err) {
    result = { error: err.message, usage: usage() }
  }
  console.log(JSON.stringify(result, null, 2))
}

main().catch(err => {
  console.error(JSON.stringify({ error: err.message }))
  process.exit(1)
})
