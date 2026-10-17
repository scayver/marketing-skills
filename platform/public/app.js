const state = {
  route: 'home',
  session: null,
  agents: [],
  sampleUrl: '',
  busy: false,
  error: '',
  voiceNote: '',
  activeAgent: 'atlas',
}

const routes = [
  ['command', 'Command'],
  ['profile', 'Profile'],
  ['audit', 'Audit'],
  ['agents', 'Agents'],
  ['workflow', 'Workflow'],
  ['changes', 'Approvals'],
  ['roadmap', 'Roadmap'],
]

const phases = [
  ['Phase 1', 'In this build', 'URL scan, business profile, measured audit, agent assignment, and approval previews.'],
  ['Phase 2', 'Not in this build', 'Deeper specialist workspaces for Atlas, Rank, Sage, Quill, and Scout.'],
  ['Phase 3', 'Started', 'Voice and text share one thread. Multi-agent plans are saved. Live calling still depends on the browser.'],
  ['Phase 4', 'Not in this build', 'Search Console, analytics, CMS, ads, CRM, and social publishing.'],
  ['Phase 5', 'Not in this build', 'Subscriptions, bundles, agency workspaces, and a third-party marketplace.'],
  ['Phase 6', 'Not in this build', 'Recurring monitoring and controlled autonomy with spend limits.'],
]

function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[char]))
}

function agent(id) {
  return state.agents.find(item => item.id === id) || { id, name: id, title: '', summary: '' }
}

async function api(path, options) {
  const response = await fetch(path, {
    headers: { 'content-type': 'application/json' },
    ...options,
  })
  const payload = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(payload.error || 'The request failed.')
  return payload
}

async function boot() {
  window.addEventListener('hashchange', syncRoute)
  const [agents, sample] = await Promise.all([
    api('/api/agents'),
    api('/api/sample'),
  ])
  state.agents = agents.agents
  state.sampleUrl = sample.url
  const saved = localStorage.getItem('scayver-session')
  if (saved) {
    try { state.session = await api(`/api/sessions/${saved}`) } catch { localStorage.removeItem('scayver-session') }
  }
  syncRoute()
}

function syncRoute() {
  const hash = location.hash.replace('#/', '')
  if (!hash) state.route = state.session ? 'command' : 'home'
  else if (hash.startsWith('agent/')) {
    state.route = 'agent'
    state.activeAgent = hash.split('/')[1] || 'atlas'
  } else state.route = hash
  render()
}

function go(route) {
  location.hash = `#/${route}`
}

async function scan(url) {
  state.busy = true
  state.error = ''
  render()
  try {
    state.session = await api('/api/discover', { method: 'POST', body: JSON.stringify({ url }) })
    localStorage.setItem('scayver-session', state.session.id)
    state.busy = false
    go('command')
  } catch (error) {
    state.error = error.message
    state.busy = false
    render()
  }
}

async function act(path, body, route) {
  state.busy = true
  state.error = ''
  render()
  try {
    state.session = await api(`/api/sessions/${state.session.id}/${path}`, {
      method: 'POST',
      body: JSON.stringify(body || {}),
    })
    state.busy = false
    if (route) go(route)
    else render()
  } catch (error) {
    state.error = error.message
    state.busy = false
    render()
  }
}

function render() {
  const app = document.querySelector('#app')
  if (!state.session && state.route !== 'home' && state.route !== 'roadmap' && state.route !== 'agents') {
    app.innerHTML = shell(homeView())
    return
  }
  const view = {
    home: homeView,
    command: commandView,
    profile: profileView,
    audit: auditView,
    agents: agentsView,
    agent: agentView,
    workflow: workflowView,
    changes: changesView,
    roadmap: roadmapView,
  }[state.route] || commandView
  app.innerHTML = state.route === 'home' ? homeView() : shell(view())
  bind()
}

function shell(content) {
  const name = field('businessName')
  return `<div class="app">
    <aside class="side">
      <div class="brand"><strong>Scayver</strong><span>Marketing OS</span></div>
      <nav class="nav">
        ${routes.map(([id, label]) => `<button type="button" data-go="${id}" class="${state.route === id ? 'active' : ''}">${label}</button>`).join('')}
        <button type="button" id="new-scan">New scan</button>
      </nav>
      <p class="meta">${name?.value ? esc(name.value) : 'No business scanned yet.'}</p>
    </aside>
    <main class="main">${banner()}${content}</main>
  </div>`
}

function banner() {
  return state.error ? `<p class="error" role="alert">${esc(state.error)}</p>` : ''
}

function homeView() {
  return `<section class="home"><div class="home-card">
    <p class="eyebrow">Website intelligence</p>
    <h1>Enter your website.</h1>
    <p class="lede">The workspace reads the public pages, builds a business profile, and shows the measured issues to fix first.</p>
    <p>You confirm the important details once. Atlas, Rank, Quill, and the other agents read that same profile.</p>
    ${banner()}
    <form id="scan-form">
      <label for="site-url">Website URL
        <input id="site-url" name="url" type="url" required placeholder="https://example.com" value="${esc(state.sampleUrl)}">
      </label>
      <div class="row">
        <button class="primary" type="submit" ${state.busy ? 'disabled' : ''}>${state.busy ? 'Reading public pages' : 'Scan this website'}</button>
        <button class="secondary" type="button" id="sample-scan" ${state.busy ? 'disabled' : ''}>Scan the sample business</button>
      </div>
    </form>
    <p class="muted">The sample is Harbor Pine Dental, a local fixture with intentional issues. Approving a preview stores your decision. It does not edit a live site.</p>
    <p><button class="text-button" type="button" data-go="roadmap">See what this build includes</button></p>
  </div></section>`
}

function commandView() {
  const audit = state.session.audit
  const top = audit.findings.slice(0, 3)
  return `<p class="eyebrow">Command center</p>
    <h2>${esc(field('businessName')?.value || 'Your business')}</h2>
    <p class="muted">Scanned ${esc(audit.fetchedAt)}. ${audit.pages.length} public page(s). ${esc(audit.limits.note)}</p>
    <div class="row">
      <button class="primary" type="button" data-act="workflow" data-route="workflow" ${state.busy ? 'disabled' : ''}>Create the SEO plan</button>
      <button class="secondary" type="button" data-act="rescan" ${state.busy ? 'disabled' : ''}>Rescan</button>
    </div>
    <div class="questions">
      ${question('How is it performing?', audit.overall === null ? 'No measured score yet.' : `Measured health is ${audit.overall} out of 100. Traffic is not connected.`)}
      ${question('What is missing?', top[0] ? top[0].title : 'No measured issue on the fetched pages.')}
      ${question('What is next?', top[0] ? top[0].how : 'Rescan after you publish a fix.')}
      ${question('Which agent?', top[0] ? `${top[0].agentName} can take the first issue.` : 'Atlas can review the profile.')}
    </div>
    <div class="stats">${audit.scores.map(score => scoreCard(score, true)).join('')}</div>
    <div class="split" style="margin-top:16px">
      <section class="stack">
        <h2>Highest severity</h2>
        ${top.map(findingCard).join('') || '<p>No measured findings.</p>'}
        <button class="text-button" type="button" data-go="audit">Review every finding</button>
      </section>
      <section class="card stack">
        <h2>Confirm once</h2>
        <p>Which details should every agent treat as fact?</p>
        ${audit.profile.slice(0, 4).map(profileRow).join('')}
        <button class="text-button" type="button" data-go="profile">Open the full profile</button>
      </section>
    </div>`
}

function profileView() {
  return `<p class="eyebrow">Business intelligence profile</p>
    <h2>Shared context</h2>
    <p>Verified items come from structured data or from you. Assumptions come from visible copy. Unknown means the crawl did not see the fact.</p>
    <div class="stack">${state.session.audit.profile.map(profileCard).join('')}</div>`
}

function auditView() {
  const audit = state.session.audit
  return `<p class="eyebrow">Marketing audit</p>
    <h2>Measured findings</h2>
    <p>${esc(audit.estimates.join(' '))}</p>
    <div class="stats">${audit.scores.map(scoreCard).join('')}</div>
    <div class="stack" style="margin-top:16px">${audit.findings.map(findingCard).join('') || '<p>No measured findings.</p>'}</div>
    <h2>Fetched pages</h2>
    <table class="page-table">
      <thead><tr><th>URL</th><th>Status</th><th>Words</th><th>Response</th></tr></thead>
      <tbody>${audit.pages.map(page => `<tr><td>${esc(page.url)}</td><td>${page.status}</td><td>${page.wordCount}</td><td>${page.durationMs} ms</td></tr>`).join('')}</tbody>
    </table>`
}

function agentsView() {
  return `<p class="eyebrow">Agent roster</p>
    <h2>Your marketing department</h2>
    <p>Each agent has one job. They share the profile you confirm. Sensitive actions stop at a preview.</p>
    <div class="agents">${state.agents.map(agentCard).join('')}</div>`
}

function agentView() {
  const current = agent(state.activeAgent)
  const messages = (state.session?.messages || []).filter(item => true)
  return `<p class="eyebrow">${esc(current.title)}</p>
    <div class="split">
      <section>
        <h2>${esc(current.name)}</h2>
        <p>${esc(current.summary)}</p>
        <ul>${(current.responsibilities || []).map(item => `<li>${esc(item)}</li>`).join('')}</ul>
        <p><strong>Access.</strong> ${esc(current.access || '')}</p>
        <p class="muted">Skill file: ${esc(current.skill || '')}. Connection: ${esc(current.connection || 'none')}.</p>
        ${state.session ? `<form id="ask-form" class="stack">
          <label for="ask">Talk to ${esc(current.name)}
            <textarea id="ask" name="message" placeholder="Show the five most important issues and create a plan."></textarea>
          </label>
          <div class="row">
            <button class="primary" type="submit" ${state.busy ? 'disabled' : ''}>Send</button>
            <button class="secondary" type="button" id="voice" ${state.busy ? 'disabled' : ''}>Speak</button>
          </div>
          <p class="muted" id="voice-note">${esc(state.voiceNote || 'Voice uses the same thread as typing. If the browser blocks the microphone, type the question.')}</p>
        </form>
        <div class="thread">${messages.map(messageCard).join('')}</div>` : '<p>Scan a website before you ask an agent about a business.</p>'}
      </section>
      <aside class="card">
        <h3>Try a question</h3>
        <div class="stack">
          <button class="secondary" type="button" data-prompt="Why might this site struggle to earn organic traffic?">Why is organic traffic unclear?</button>
          <button class="secondary" type="button" data-prompt="Show the five most important issues and create a plan.">Show the five most important issues.</button>
          <button class="secondary" type="button" data-prompt="Who are you and what should I do next?">Ask what this agent does.</button>
        </div>
      </aside>
    </div>`
}

function workflowView() {
  const workflow = state.session?.workflow
  if (!workflow) {
    return `<h2>No plan yet</h2><p>Create the SEO improvement plan from the command center.</p><button class="primary" type="button" data-act="workflow">Create the SEO plan</button>`
  }
  return `<p class="eyebrow">Collaboration</p>
    <h2>${esc(workflow.title)}</h2>
    <div class="steps">${workflow.steps.map(item => `<article class="step">
      <header><h3>${esc(item.agentName)} · ${esc(item.title)}</h3><span class="status ${esc(item.status)}">${esc(item.status)}</span></header>
      <p>${esc(item.detail)}</p>
      <button class="text-button" type="button" data-go="agent/${esc(item.agentId)}">Open ${esc(item.agentName)}</button>
    </article>`).join('')}</div>`
}

function changesView() {
  const changes = state.session?.changeSets || []
  if (!changes.length) return `<h2>No previews yet</h2><p>Open a finding and prepare a draft. Approval stays in this workspace.</p>`
  return `<p class="eyebrow">Approval queue</p><h2>Prepared changes</h2><div class="stack">${changes.map(change => `<article class="change">
    <header><h3>${esc(change.title)}</h3><span class="status ${esc(change.status)}">${esc(change.status)}</span></header>
    <p>${esc(change.preview.note || '')}</p>
    ${change.preview.after !== undefined ? `<p><strong>Current.</strong> ${esc(change.preview.before || 'Empty')}</p><p><strong>Draft.</strong> ${esc(change.preview.after || 'Remove the directive.')}</p>` : ''}
    ${(change.preview.images || []).map(image => `<p><strong>${esc(image.src)}</strong><br>Draft: ${esc(image.after)}</p>`).join('')}
    ${change.status === 'draft' ? `<button class="primary" type="button" data-approve="${esc(change.id)}">Approve preview</button>` : '<p>Approved. No live website was changed.</p>'}
  </article>`).join('')}</div>`
}

function roadmapView() {
  return `<p class="eyebrow">Platform</p><h2>What is real today</h2><div class="stack">${phases.map(([phase, status, detail]) => `<article class="card"><header><h3>${esc(phase)}</h3><span class="status ${status === 'In this build' || status === 'Started' ? 'complete' : 'limited'}">${esc(status)}</span></header><p>${esc(detail)}</p></article>`).join('')}</div>`
}

function question(label, text) {
  return `<article class="card question"><span>${esc(label)}</span><p>${esc(text)}</p></article>`
}

function scoreCard(score, compact) {
  const width = score.score === null ? 0 : score.score
  const criteria = compact ? '' : `<ul class="criteria">${score.criteria.map(item => `<li><span class="status ${esc(item.status)}">${esc(item.status)}</span> ${esc(item.label)}. ${esc(item.detail)}</li>`).join('')}</ul>`
  return `<article class="stat">
    <span class="eyebrow">${esc(score.label)}</span>
    <div class="score">${score.score === null ? 'n/a' : score.score}</div>
    <div class="bar" aria-hidden="true"><span style="width:${width}%"></span></div>
    <p class="muted">${score.passed} of ${score.measured} measured checks passed.</p>
    ${criteria}
  </article>`
}

function findingCard(item) {
  const options = state.agents.map(agentItem => `<option value="${esc(agentItem.id)}" ${item.agentId === agentItem.id ? 'selected' : ''}>${esc(agentItem.name)}</option>`).join('')
  return `<article class="finding">
    <header>
      <h3>${esc(item.title)}</h3>
      <span class="pill ${esc(item.severity)}">${esc(item.severity)}</span>
    </header>
    <p>${esc(item.what)}</p>
    <p><strong>Why it matters.</strong> ${esc(item.why)}</p>
    <p><strong>How to fix it.</strong> ${esc(item.how)}</p>
    <p class="muted">Estimate: ${esc(item.effort)} effort, ${esc(item.impact)} impact. ${esc(item.costNote)}</p>
    <div class="row">
      <label>Agent
        <select data-assign="${esc(item.id)}">${options}</select>
      </label>
      ${item.prepare ? `<button class="secondary" type="button" data-prepare="${esc(item.id)}">Prepare preview</button>` : ''}
      <button class="text-button" type="button" data-go="agent/${esc(item.agentId)}">Open ${esc(item.agentName)}</button>
    </div>
  </article>`
}

function profileRow(item) {
  return `<p><span class="pill ${esc(item.status)}">${esc(item.status)}</span> <strong>${esc(item.label)}.</strong> ${esc(item.value || 'Unknown')}</p>`
}

function profileCard(item) {
  const evidence = (item.evidence || []).slice(0, 3).map(entry => `<li>${esc(entry.source)}: ${esc(entry.detail)}</li>`).join('')
  return `<article class="card">
    <header><h3>${esc(item.label)}</h3><span class="pill ${esc(item.status)}">${esc(item.status)}</span></header>
    <p>${esc(item.value || 'Unknown from this crawl.')}</p>
    ${evidence ? `<ul>${evidence}</ul>` : ''}
    ${item.value && item.status !== 'rejected' ? `<div class="row">
      <button class="primary" type="button" data-confirm="${esc(item.id)}" data-decision="confirm">Confirm</button>
      <button class="secondary" type="button" data-confirm="${esc(item.id)}" data-decision="reject">Reject</button>
    </div>` : ''}
  </article>`
}

function agentCard(item) {
  return `<article class="agent">
    <header><div class="avatar">${esc(item.name.slice(0, 1))}</div><div><h3>${esc(item.name)}</h3><p class="muted">${esc(item.title)}</p></div></header>
    <p>${esc(item.summary)}</p>
    <button class="text-button" type="button" data-go="agent/${esc(item.id)}">Open workspace</button>
  </article>`
}

function messageCard(message) {
  if (message.role === 'user') return `<article class="message user"><strong>You</strong><p>${esc(message.text)}</p></article>`
  const speaker = agent(message.agentId)
  return `<article class="message"><strong>${esc(speaker.name)}</strong>${(message.paragraphs || []).map(text => `<p>${esc(text)}</p>`).join('')}</article>`
}

function field(id) {
  return state.session?.audit.profile.find(item => item.id === id)
}

function bind() {
  document.querySelectorAll('[data-go]').forEach(node => {
    node.addEventListener('click', () => go(node.dataset.go))
  })
  document.querySelector('#new-scan')?.addEventListener('click', () => {
    state.session = null
    localStorage.removeItem('scayver-session')
    go('home')
  })
  document.querySelector('#scan-form')?.addEventListener('submit', event => {
    event.preventDefault()
    scan(new FormData(event.target).get('url'))
  })
  document.querySelector('#sample-scan')?.addEventListener('click', () => scan(state.sampleUrl))
  document.querySelectorAll('[data-act]').forEach(node => {
    node.addEventListener('click', () => act(node.dataset.act, {}, node.dataset.route))
  })
  document.querySelectorAll('[data-confirm]').forEach(node => {
    node.addEventListener('click', () => act('confirm', { fieldId: node.dataset.confirm, decision: node.dataset.decision }))
  })
  document.querySelectorAll('[data-assign]').forEach(node => {
    node.addEventListener('change', () => act('assign', { findingId: node.dataset.assign, agentId: node.value }))
  })
  document.querySelectorAll('[data-prepare]').forEach(node => {
    node.addEventListener('click', () => act('prepare', { findingId: node.dataset.prepare }, 'changes'))
  })
  document.querySelectorAll('[data-approve]').forEach(node => {
    node.addEventListener('click', () => act('approve', { changeSetId: node.dataset.approve }))
  })
  document.querySelector('#ask-form')?.addEventListener('submit', event => {
    event.preventDefault()
    const message = new FormData(event.target).get('message')
    ask(message, false)
  })
  document.querySelectorAll('[data-prompt]').forEach(node => {
    node.addEventListener('click', () => ask(node.dataset.prompt, false))
  })
  document.querySelector('#voice')?.addEventListener('click', listen)
}

async function ask(message, voice) {
  if (!state.session) return
  await act('ask', { agentId: state.activeAgent, message })
  const latest = [...(state.session.messages || [])].reverse().find(item => item.role === 'agent')
  if (voice && latest) speak((latest.paragraphs || []).join(' '))
}

function listen() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition
  if (!Recognition) {
    state.voiceNote = 'This browser has no speech recognition. Type in the same thread.'
    render()
    return
  }
  const recognition = new Recognition()
  recognition.lang = 'en-US'
  recognition.onresult = event => {
    const said = event.results[0][0].transcript
    ask(said, true)
  }
  recognition.onerror = () => {
    state.voiceNote = 'Voice did not start. Type in the same thread. The answer still uses this audit.'
    render()
  }
  state.voiceNote = 'Listening. Ask about the current audit.'
  render()
  recognition.start()
}

function speak(text) {
  if (!window.speechSynthesis) return
  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(text))
}

boot().catch(error => {
  state.error = error.message
  render()
})
