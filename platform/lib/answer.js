const { getAgent } = require('./agents')

function answerQuestion(session, agentId, message) {
  const agent = getAgent(agentId) || getAgent('atlas')
  const text = String(message || '').trim()
  if (!text) throw new Error('Enter a question.')
  const audit = session.audit
  const ranked = [...audit.findings].sort(bySeverity)
  const lower = text.toLowerCase()

  if (/who are you|what do you do|your role/.test(lower)) {
    return {
      agentId: agent.id,
      paragraphs: [
        `${agent.name} is your ${agent.title.toLowerCase()}.`,
        agent.summary,
        `Next step: ask ${agent.name} to use the current audit, or switch agents without repeating your business profile.`,
      ],
      findingIds: [],
    }
  }

  if (/five|top|most important|plan|fix them/.test(lower)) {
    const top = ranked.slice(0, 5)
    return {
      agentId: 'atlas',
      paragraphs: [
        top.length
          ? `Here are the ${top.length} highest-severity issues from the pages this workspace fetched.`
          : 'The fetched pages did not produce a measured issue list.',
        ...top.map((item, index) => `${index + 1}. ${item.title} ${item.agentName} can take this. ${item.why}`),
        'The plan is to clear high-severity technical blocks, then approve copy and alt text drafts, then rescan.',
        'Search traffic is not part of this plan because Search Console is not connected.',
        'Next step: open the workflow to see which agent owns each part.',
      ],
      findingIds: top.map(item => item.id),
      workflow: true,
    }
  }

  if (/traffic|organic|ranking|rankings|clicks/.test(lower)) {
    const technical = ranked.filter(item => item.agentId === 'rank' || item.area.includes('Technical') || item.area.includes('Content')).slice(0, 5)
    return {
      agentId: agent.id === 'atlas' ? 'rank' : agent.id,
      paragraphs: [
        'This workspace cannot tell you the traffic number. Google Search Console is not connected, so queries, clicks, and positions are unknown.',
        technical.length
          ? 'These measured issues can still suppress organic visibility:'
          : 'The fetched pages did not show a measured indexing block. That still does not prove the site earns traffic.',
        ...technical.map(item => `${item.title} ${item.what}`),
        'Next step: connect Search Console before you treat a traffic explanation as complete. Until then, fix the measured issues above.',
      ],
      findingIds: technical.map(item => item.id),
    }
  }

  if (/competitor|market/.test(lower)) {
    return {
      agentId: 'scout',
      paragraphs: [
        'Scout does not have a competitor list. A public crawl of your site cannot prove who you compete with.',
        'Next step: connect a search or review source before you ask for competitor names.',
      ],
      findingIds: [],
    }
  }

  if (agent.connection === 'ads' || /ad spend|google ads|meta ads|campaign budget/.test(lower)) {
    return {
      agentId: 'adpilot',
      paragraphs: [
        'AdPilot cannot see spend, clicks, or campaigns. No ad account is connected.',
        'Next step: connect Google Ads or Meta Ads before you request a budget change. This workspace will still ask you to approve it.',
      ],
      findingIds: [],
    }
  }

  const owned = ranked.filter(item => item.agentId === agent.id).slice(0, 4)
  const chosen = owned.length ? owned : ranked.slice(0, 3)
  return {
    agentId: agent.id,
    paragraphs: [
      `${agent.name} read the shared profile and the current crawl.`,
      profileSentence(audit),
      chosen.length
        ? 'The relevant measured items are:'
        : 'There is no measured finding for this agent yet.',
      ...chosen.map(item => `${item.title} ${item.how}`),
      'Next step: assign one finding, or ask for the five most important issues and a plan.',
    ],
    findingIds: chosen.map(item => item.id),
  }
}

function profileSentence(audit) {
  const name = audit.profile.find(item => item.id === 'businessName')
  const offer = audit.profile.find(item => item.id === 'positioning')
  const nameText = name?.value ? `${labelStatus(name)} business name is ${name.value}.` : 'The business name is still unknown.'
  const offerText = offer?.value ? `${labelStatus(offer)} offer is ${offer.value}` : 'The stated offer is still unknown.'
  return `${nameText} ${offerText}`
}

function labelStatus(field) {
  if (field.status === 'verified') return 'The verified'
  if (field.status === 'assumption') return 'The unconfirmed'
  if (field.status === 'rejected') return 'The rejected'
  return 'The unknown'
}

function bySeverity(a, b) {
  const rank = { high: 0, medium: 1, low: 2 }
  return rank[a.severity] - rank[b.severity]
}

function buildWorkflow(audit) {
  const count = agentIds => audit.findings.filter(item => agentIds.includes(item.agentId)).length
  return {
    id: 'seo-improvement',
    title: 'SEO improvement campaign',
    createdAt: new Date().toISOString(),
    steps: [
      step('scout', 'Market opportunities', 'limited', 'Competitor names are unknown until you connect a research source.'),
      step('rank', 'Technical assessment', count(['rank']) ? 'complete' : 'complete', `${count(['rank'])} technical finding(s) are ready for review.`),
      step('sage', 'Content strategy', count(['sage']) ? 'needs-review' : 'complete', count(['sage']) ? `${count(['sage'])} content finding(s) need a writing pass.` : 'Fetched pages did not trip the thin-content or heading checks.'),
      step('quill', 'Copy drafts', audit.findings.some(item => item.prepare === 'meta') ? 'needs-approval' : 'complete', 'Quill can draft missing meta descriptions. Nothing is published from this step.'),
      step('studio', 'Image alt drafts', audit.findings.some(item => item.prepare === 'alt') ? 'needs-approval' : 'complete', 'Studio only drafts alt text for images this crawl found.'),
      step('convert', 'Conversion review', count(['convert']) ? 'needs-review' : 'complete', count(['convert']) ? 'A contact path is missing on the fetched pages.' : 'A contact path was found.'),
      step('echo', 'AI search structure', count(['echo']) ? 'needs-review' : 'complete', 'Echo reports structure only. Citation counts are unknown.'),
      step('atlas', 'Implementation plan', 'complete', 'Atlas orders the work: technical blocks, approved drafts, then a rescan.'),
      step('pulse', 'Result measurement', 'blocked', 'Pulse cannot score traffic until analytics or Search Console is connected.'),
    ],
  }
}

function step(agentId, title, status, detail) {
  const agent = getAgent(agentId)
  return { agentId, agentName: agent.name, title, status, detail }
}

module.exports = { answerQuestion, buildWorkflow }
