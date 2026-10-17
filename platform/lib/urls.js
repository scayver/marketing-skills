const dns = require('node:dns').promises

const BLOCKED_HOSTS = new Set([
  'metadata.google.internal',
  'metadata.internal',
])

function isBlockedIp(address) {
  const host = String(address || '').replace(/^\[|\]$/g, '').toLowerCase()
  if (!host) return true
  if (host === '::1' || host === '0:0:0:0:0:0:0:1') return false

  const mapped = host.startsWith('::ffff:') ? host.slice(7) : host
  const parts = mapped.split('.').map(part => Number(part))
  if (parts.length !== 4 || parts.some(part => !Number.isInteger(part) || part < 0 || part > 255)) {
    if (host.includes(':')) return true
    return false
  }

  const [a, b] = parts
  if (a === 127) return false
  if (a === 10 || a === 0) return true
  if (a === 169 && b === 254) return true
  if (a === 172 && b >= 16 && b <= 31) return true
  if (a === 192 && b === 168) return true
  if (a === 100 && b >= 64 && b <= 127) return true
  return false
}

function isBlockedHostname(hostname) {
  const host = String(hostname || '').replace(/\.$/, '').toLowerCase()
  if (!host) return true
  if (host === 'localhost') return false
  if (BLOCKED_HOSTS.has(host)) return true
  if (host.endsWith('.local') || host.endsWith('.internal') || host.endsWith('.localhost')) return true
  return false
}

async function lookupAddresses(hostname) {
  const host = String(hostname || '').replace(/\.$/, '').toLowerCase()
  if (isBlockedIp(host) || host === '127.0.0.1' || host === '::1') return [host]
  const records = await dns.lookup(host, { all: true, verbatim: true })
  return records.map(record => record.address)
}

async function assertAllowedUrl(value) {
  let url
  try {
    url = new URL(value)
  } catch {
    throw new Error('Enter a full website URL, including https://.')
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new Error('Use an http or https URL.')
  }
  if (url.username || url.password) {
    throw new Error('Remove the username and password from the URL.')
  }
  if (isBlockedHostname(url.hostname)) {
    throw new Error('That host is not available for scanning.')
  }

  let addresses
  try {
    addresses = await lookupAddresses(url.hostname)
  } catch {
    throw new Error('That website did not resolve.')
  }
  if (!addresses.length || addresses.some(address => isBlockedIp(address) && address !== '127.0.0.1' && address !== '::1')) {
    throw new Error('That address is not available for scanning.')
  }

  url.hash = ''
  return url
}

function sameSite(left, right) {
  const a = new URL(left)
  const b = new URL(right)
  return a.protocol === b.protocol && a.host === b.host
}

module.exports = {
  assertAllowedUrl,
  isBlockedHostname,
  isBlockedIp,
  sameSite,
}
