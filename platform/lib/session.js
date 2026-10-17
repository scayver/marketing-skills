const crypto = require('node:crypto')

const { buildAudit } = require('./audit')
const { answerQuestion, buildWorkflow } = require('./answer')
const { prepareFinding } = require('./prepare')
const { discover } = require('./crawl')

function createSession(crawl) {
  const session = {
    id: crypto.randomUUID(),
    crawl,
    audit: buildAudit(crawl),
    messages: [],
    changeSets: [],
    workflow: null,
    events: [],
  }
  addEvent(session, 'scan', `Fetched ${session.audit.pages.length} public page(s).`)
  return session
}

function addEvent(session, type, detail) {
  session.events.unshift({
    id: crypto.randomUUID(),
    type,
    detail,
    at: new Date().toISOString(),
  })
}

function confirmField(session, fieldId, decision) {
  const field = session.audit.profile.find(item => item.id === fieldId)
  if (!field) throw new Error('That profile field was not found.')
  if (!field.value) throw new Error('There is no value to confirm yet.')
  if (decision === 'confirm') {
    field.status = 'verified'
    field.evidence = field.evidence.concat({
      url: session.audit.finalUrl,
      source: 'owner',
      detail: 'You confirmed this value.',
    })
    addEvent(session, 'confirm', `You confirmed ${field.label}.`)
  } else if (decision === 'reject') {
    field.status = 'rejected'
    addEvent(session, 'reject', `You rejected ${field.label}. Agents should not repeat it.`)
  } else {
    throw new Error('Choose confirm or reject.')
  }
  return field
}

function assignFinding(session, findingId, agentId) {
  const finding = session.audit.findings.find(item => item.id === findingId)
  if (!finding) throw new Error('That finding was not found.')
  const { getAgent } = require('./agents')
  const agent = getAgent(agentId)
  if (!agent) throw new Error('That agent was not found.')
  finding.assignee = agent.id
  finding.agentId = agent.id
  finding.agentName = agent.name
  addEvent(session, 'assign', `${agent.name} is assigned to "${finding.title}".`)
  return finding
}

function prepareChange(session, findingId) {
  const finding = session.audit.findings.find(item => item.id === findingId)
  if (!finding) throw new Error('That finding was not found.')
  const preview = prepareFinding(finding, session.crawl.pages)
  const changeSet = {
    id: crypto.randomUUID(),
    findingId,
    agentId: finding.agentId,
    title: finding.title,
    status: 'draft',
    preview,
    createdAt: new Date().toISOString(),
  }
  session.changeSets.unshift(changeSet)
  addEvent(session, 'prepare', `${finding.agentName} prepared a preview for your approval.`)
  return changeSet
}

function approveChange(session, changeSetId) {
  const changeSet = session.changeSets.find(item => item.id === changeSetId)
  if (!changeSet) throw new Error('That preview was not found.')
  changeSet.status = 'approved'
  changeSet.approvedAt = new Date().toISOString()
  addEvent(session, 'approve', 'You approved the preview. No live website, ad account, or email was changed.')
  return changeSet
}

function ask(session, agentId, message) {
  const result = answerQuestion(session, agentId, message)
  if (result.workflow) session.workflow = buildWorkflow(session.audit)
  session.messages.push({
    id: crypto.randomUUID(),
    role: 'user',
    agentId,
    text: message,
    at: new Date().toISOString(),
  })
  session.messages.push({
    id: crypto.randomUUID(),
    role: 'agent',
    agentId: result.agentId,
    paragraphs: result.paragraphs,
    findingIds: result.findingIds,
    at: new Date().toISOString(),
  })
  addEvent(session, 'ask', `You asked ${result.agentId} a question.`)
  return result
}

function createWorkflow(session) {
  session.workflow = buildWorkflow(session.audit)
  addEvent(session, 'workflow', 'Atlas saved the SEO improvement plan.')
  return session.workflow
}

async function rescan(session) {
  const crawl = await discover(session.audit.requestedUrl)
  const previous = session.audit
  const next = buildAudit(crawl)
  for (const field of next.profile) {
    const prior = previous.profile.find(item => item.id === field.id)
    if (!prior) continue
    if ((prior.status === 'verified' || prior.status === 'rejected') && prior.evidence.some(item => item.source === 'owner') && prior.value === field.value) {
      field.status = prior.status
      field.evidence = field.evidence.concat(prior.evidence.filter(item => item.source === 'owner'))
    }
  }
  for (const finding of next.findings) {
    const prior = previous.findings.find(item => item.id === finding.id)
    if (prior?.assignee) {
      finding.assignee = prior.assignee
      finding.agentId = prior.agentId
      finding.agentName = prior.agentName
    }
  }
  session.crawl = crawl
  session.audit = next
  addEvent(session, 'rescan', `Fetched ${next.pages.length} public page(s) again. Overall score is ${next.overall}.`)
  return session
}

function publicSession(session) {
  return {
    id: session.id,
    audit: session.audit,
    messages: session.messages,
    changeSets: session.changeSets,
    workflow: session.workflow,
    events: session.events.slice(0, 30),
  }
}

module.exports = {
  addEvent,
  approveChange,
  ask,
  assignFinding,
  confirmField,
  createSession,
  createWorkflow,
  prepareChange,
  publicSession,
  rescan,
}
