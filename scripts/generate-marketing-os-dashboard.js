#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const manifestPath = path.join(root, 'docs', 'MARKETING_OS_MANIFEST.json')
const markdownPath = path.join(root, 'docs', 'MARKETING_OS_DASHBOARD.md')
const htmlPath = path.join(root, 'docs', 'marketing-os-dashboard.html')
const stageOrder = ['Launch', 'Demand', 'Pipeline', 'Conversion', 'Revenue', 'Retention']

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8')
}

function listDirs(dir) {
  return fs.readdirSync(path.join(root, dir), { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .sort()
}

function listFiles(dir, predicate = () => true) {
  return fs.readdirSync(path.join(root, dir), { withFileTypes: true })
    .filter(entry => entry.isFile() && predicate(entry.name))
    .map(entry => entry.name)
    .sort()
}

function exists(file) {
  return fs.existsSync(path.join(root, file))
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function escapeTable(value) {
  return String(value || '').replace(/\|/g, '\\|').replace(/\n/g, ' ')
}

function title(value) {
  return String(value || '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, letter => letter.toUpperCase())
}

function truncateAtWord(value, maxLength, fallback) {
  const clean = String(value || '').replace(/\s+/g, ' ').trim()
  if (!clean) return fallback
  if (clean.length <= maxLength) return clean

  const clipped = clean.slice(0, maxLength + 1)
  const lastSpace = clipped.lastIndexOf(' ')
  const cutPoint = lastSpace >= Math.floor(maxLength * 0.65) ? lastSpace : maxLength
  return clean.slice(0, cutPoint).replace(/[,.:\s]+$/, '') + '...'
}

function skillDescription(skill) {
  const file = path.join(root, 'skills', skill, 'SKILL.md')
  if (!fs.existsSync(file)) return title(skill) + ' workflow.'
  const text = fs.readFileSync(file, 'utf8')
  const frontmatter = text.split('---')[1] || ''
  const lines = frontmatter.split('\n')
  const index = lines.findIndex(line => line.startsWith('description:'))
  if (index === -1) return title(skill) + ' workflow.'

  const first = lines[index].replace(/^description:\s*/, '').trim()
  let description = ''

  if (first && first !== '>' && first !== '|') {
    description = first.replace(/^['"]|['"]$/g, '')
  } else {
    const collected = []
    for (const line of lines.slice(index + 1)) {
      if (/^[a-zA-Z0-9_-]+:\s*/.test(line)) break
      if (!line.startsWith(' ') && line.trim()) break
      collected.push(line.trim())
    }
    description = collected.filter(Boolean).join(' ')
  }

  const cleanDescription = description
    .replace(/Trigger phrases include:.*/i, '')
    .replace(/Trigger phrases:.*/i, '')
    .replace(/\s+/g, ' ')
    .trim()

  return truncateAtWord(cleanDescription, 180, title(skill) + ' workflow.')
}

function countSocialPosts() {
  const file = path.join(root, 'examples/social-post-library.csv')
  if (!fs.existsSync(file)) return { total: 0, skill: 0, integration: 0, cli: 0 }
  const lines = fs.readFileSync(file, 'utf8').trim().split(/\r?\n/)
  const counts = { total: Math.max(0, lines.length - 1), skill: 0, integration: 0, cli: 0 }
  for (const line of lines.slice(1)) {
    const type = line.split(',')[0]
    if (Object.prototype.hasOwnProperty.call(counts, type)) counts[type] += 1
  }
  return counts
}

function byStage(workflows) {
  const groups = new Map()
  for (const stage of stageOrder) groups.set(stage, [])
  for (const workflow of workflows) {
    if (!groups.has(workflow.stage)) groups.set(workflow.stage, [])
    groups.get(workflow.stage).push(workflow)
  }
  return [...groups.entries()].filter(([, workflowsForStage]) => workflowsForStage.length)
}

function linkIfExists(prefix, name, suffix, label = name) {
  const file = `${prefix}/${name}${suffix}`
  return exists(file) ? `[${label}](../${file})` : `\`${label}\``
}

function startPrompt(workflow) {
  return `Use the marketing-os skill. Our outcome is ${workflow.name}. Start with the \`${workflow.primary_skill}\` workflow, review the listed skills, read the related integration guides before recommending tools, and produce the first concrete deliverable with a metric.`
}

function generateMarkdown(context) {
  const lines = []
  lines.push('# Marketing Skills OS Dashboard')
  lines.push('')
  lines.push('Generated from `docs/MARKETING_OS_MANIFEST.json`, local skills, integration guides, CLI tools, and the social post library for Marketing Skills OS.')
  lines.push('')
  lines.push('Install Marketing Skills OS:')
  lines.push('')
  lines.push('```bash')
  lines.push(context.manifest.install)
  lines.push('```')
  lines.push('')
  lines.push('## OS Inventory')
  lines.push('')
  lines.push('| Asset | Count |')
  lines.push('|-------|------:|')
  lines.push(`| Skills | ${context.skillCount} |`)
  lines.push(`| Integration guides | ${context.integrationCount} |`)
  lines.push(`| CLI tools | ${context.cliCount} |`)
  lines.push(`| Workflows | ${context.manifest.workflows.length} |`)
  lines.push(`| Social posts | ${context.social.total} |`)
  lines.push('')
  lines.push('## OS Commands')
  lines.push('')
  lines.push('| Command | Purpose |')
  lines.push('|---------|---------|')
  lines.push('| `npm run os:summary` | Print the OS inventory and workflow list. |')
  lines.push('| `npm run os:init -- --target ../my-project` | Create a `.marketing-os/` workspace. |')
  lines.push('| `npm run os:run -- --target ../my-project --workflow saas-launch --force` | Activate a workflow. |')
  lines.push('| `npm run os:review -- --target ../my-project --date 2026-05-28 --force` | Create a weekly review. |')
  lines.push('| `npm run os:status -- --target ../my-project` | Inspect workspace readiness. |')
  lines.push('| `npm run os:snapshot -- --target ../my-project --date 2026-05-28 --force` | Persist current state for future agent sessions. |')
  lines.push('')
  lines.push('## Outcome Routing By Stage')
  lines.push('')
  for (const [stage, workflows] of byStage(context.manifest.workflows)) {
    lines.push(`### ${stage}`)
    lines.push('')
    lines.push('| Outcome | Primary Skill | Deliverables | Metrics |')
    lines.push('|---------|---------------|--------------|---------|')
    for (const workflow of workflows) {
      lines.push('| ' + [
        `[${workflow.name}](#${workflow.id})`,
        `\`${workflow.primary_skill}\``,
        escapeTable((workflow.deliverables || []).slice(0, 3).join(', ')),
        escapeTable((workflow.metrics || []).slice(0, 3).join(', ')),
      ].join(' | ') + ' |')
    }
    lines.push('')
  }
  lines.push('## Workflow Cards')
  lines.push('')
  for (const workflow of context.manifest.workflows) {
    lines.push(`<a id="${workflow.id}"></a>`)
    lines.push(`### ${workflow.name}`)
    lines.push('')
    lines.push(`**Goal:** ${workflow.goal}`)
    lines.push('')
    lines.push(`**Stage:** ${workflow.stage}`)
    lines.push('')
    lines.push(`**Primary skill:** \`${workflow.primary_skill}\``)
    lines.push('')
    lines.push('**Skill stack:**')
    lines.push('')
    for (const skill of workflow.skills || []) {
      lines.push(`- \`${skill}\` - ${skillDescription(skill)}`)
    }
    lines.push('')
    lines.push('**Related integration guides:**')
    lines.push('')
    for (const integration of workflow.integrations || []) {
      lines.push(`- ${linkIfExists('tools/integrations', integration, '.md')}`)
    }
    lines.push('')
    lines.push('**CLI helpers:**')
    lines.push('')
    for (const cli of workflow.clis || []) {
      lines.push(`- ${linkIfExists('tools/clis', cli, '.js')}`)
    }
    lines.push('')
    lines.push('**Next deliverables:**')
    lines.push('')
    for (const deliverable of workflow.deliverables || []) lines.push(`- ${deliverable}`)
    lines.push('')
    lines.push('**Metrics:**')
    lines.push('')
    for (const metric of workflow.metrics || []) lines.push(`- ${metric}`)
    lines.push('')
    lines.push('**Start prompt:**')
    lines.push('')
    lines.push('```text')
    lines.push(startPrompt(workflow))
    lines.push('```')
    lines.push('')
  }
  lines.push('## Supporting Assets')
  lines.push('')
  lines.push('- [Marketing Skills OS command center template](../examples/marketing-os-command-center.md).')
  lines.push('- [Social post library guide](SOCIAL_POST_LIBRARY.md).')
  lines.push('- [Social post CSV](../examples/social-post-library.csv).')
  lines.push('- [Local social posting kit](../examples/social-posts/README.md).')
  lines.push('- [Marketing Skills OS initializer templates](../templates/marketing-os/README.md).')
  lines.push('- [Outcome index](MARKETING_OS_OUTCOME_INDEX.md).')
  lines.push('')
  lines.push('Regenerate this dashboard with:')
  lines.push('')
  lines.push('```bash')
  lines.push('npm run os:dashboard')
  lines.push('```')
  lines.push('')
  return lines.join('\n')
}

function chipList(items, className) {
  return (items || []).map(item => `<span class="${className}">${escapeHtml(item)}</span>`).join('')
}

function generateHtml(context) {
  const workflowCards = context.manifest.workflows.map(workflow => `
      <section class="card" id="${escapeHtml(workflow.id)}">
        <div class="card-head">
          <div>
            <p class="eyebrow">${escapeHtml(workflow.stage)}</p>
            <h2>${escapeHtml(workflow.name)}</h2>
          </div>
          <code>${escapeHtml(workflow.primary_skill)}</code>
        </div>
        <p>${escapeHtml(workflow.goal)}</p>
        <h3>Skills</h3>
        <div class="chips">${chipList(workflow.skills, 'chip')}</div>
        <h3>Integrations</h3>
        <div class="chips">${chipList(workflow.integrations, 'chip muted')}</div>
        <h3>CLI Helpers</h3>
        <div class="chips">${chipList(workflow.clis, 'chip accent')}</div>
        <h3>Start Prompt</h3>
        <pre>${escapeHtml(startPrompt(workflow))}</pre>
      </section>`).join('\n')

  const stageRows = byStage(context.manifest.workflows).map(([stage, workflows]) => `
        <tr>
          <td>${escapeHtml(stage)}</td>
          <td>${workflows.map(workflow => `<a href="#${escapeHtml(workflow.id)}">${escapeHtml(workflow.name)}</a>`).join('<br>')}</td>
          <td>${workflows.map(workflow => `<code>${escapeHtml(workflow.primary_skill)}</code>`).join('<br>')}</td>
        </tr>`).join('\n')

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Marketing Skills OS Dashboard</title>
  <style>
    :root { color-scheme: light; --ink: #151515; --muted: #5e6470; --line: #dde1e7; --bg: #f7f8fa; --card: #ffffff; --accent: #0f766e; --accent-soft: #e5f4f1; --warm: #8a4b0f; --warm-soft: #fff2df; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: var(--ink); background: var(--bg); line-height: 1.5; }
    header { padding: 48px 24px 28px; background: #fff; border-bottom: 1px solid var(--line); }
    main { width: min(1180px, calc(100vw - 32px)); margin: 0 auto; padding: 28px 0 56px; }
    .hero { width: min(1180px, calc(100vw - 32px)); margin: 0 auto; }
    h1 { margin: 0 0 12px; font-size: clamp(2rem, 4vw, 4rem); line-height: 1; letter-spacing: 0; }
    h2 { margin: 0; font-size: 1.4rem; }
    h3 { margin: 20px 0 8px; font-size: .95rem; text-transform: uppercase; letter-spacing: .08em; color: var(--muted); }
    p { max-width: 760px; color: var(--muted); }
    a { color: var(--accent); text-decoration: none; }
    a:hover { text-decoration: underline; }
    code, pre { font-family: "SFMono-Regular", Consolas, monospace; }
    pre { overflow: auto; white-space: pre-wrap; background: #111827; color: #f9fafb; padding: 14px; border-radius: 8px; }
    table { width: 100%; border-collapse: collapse; background: var(--card); border: 1px solid var(--line); border-radius: 8px; overflow: hidden; }
    th, td { text-align: left; padding: 12px; border-bottom: 1px solid var(--line); vertical-align: top; }
    th { background: #f1f3f6; }
    .stats { display: grid; grid-template-columns: repeat(5, minmax(120px, 1fr)); gap: 12px; margin-top: 24px; }
    .stat { background: var(--card); border: 1px solid var(--line); border-radius: 8px; padding: 16px; }
    .stat strong { display: block; font-size: 1.8rem; }
    .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin-top: 18px; }
    .card { background: var(--card); border: 1px solid var(--line); border-radius: 8px; padding: 20px; }
    .card-head { display: flex; justify-content: space-between; gap: 16px; align-items: flex-start; }
    .eyebrow { margin: 0 0 4px; color: var(--accent); font-weight: 700; font-size: .78rem; text-transform: uppercase; letter-spacing: .1em; }
    .chips { display: flex; flex-wrap: wrap; gap: 8px; }
    .chip { display: inline-flex; align-items: center; min-height: 28px; padding: 4px 9px; border-radius: 999px; background: var(--accent-soft); color: #075e57; font-size: .86rem; }
    .chip.muted { background: #eef1f5; color: #424a55; }
    .chip.accent { background: var(--warm-soft); color: var(--warm); }
    .commands { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
    .command { background: #111827; color: #f9fafb; padding: 12px; border-radius: 8px; overflow: auto; }
    @media (max-width: 820px) { .stats, .grid, .commands { grid-template-columns: 1fr; } header { padding-top: 32px; } }
  </style>
</head>
<body>
  <header>
    <div class="hero">
      <h1>Marketing Skills OS Dashboard</h1>
      <p>A generated dashboard for browsing Marketing Skills OS by outcome, workflow, stage, skill, integration, CLI helper, and next action.</p>
      <pre>${escapeHtml(context.manifest.install)}</pre>
      <div class="stats">
        <div class="stat"><strong>${context.skillCount}</strong><span>Skills</span></div>
        <div class="stat"><strong>${context.integrationCount}</strong><span>Integration guides</span></div>
        <div class="stat"><strong>${context.cliCount}</strong><span>CLI tools</span></div>
        <div class="stat"><strong>${context.manifest.workflows.length}</strong><span>Workflows</span></div>
        <div class="stat"><strong>${context.social.total}</strong><span>Social posts</span></div>
      </div>
    </div>
  </header>
  <main>
    <h2>OS Commands</h2>
    <div class="commands">
      <div class="command">npm run os:init -- --target ../my-project</div>
      <div class="command">npm run os:run -- --target ../my-project --workflow saas-launch --force</div>
      <div class="command">npm run os:review -- --target ../my-project --date 2026-05-28 --force</div>
      <div class="command">npm run os:status -- --target ../my-project</div>
      <div class="command">npm run os:snapshot -- --target ../my-project --date 2026-05-28 --force</div>
      <div class="command">npm run os:dashboard</div>
    </div>

    <h2 style="margin-top:32px">Outcome Routing</h2>
    <table>
      <thead><tr><th>Stage</th><th>Outcomes</th><th>Primary Skills</th></tr></thead>
      <tbody>${stageRows}
      </tbody>
    </table>

    <h2 style="margin-top:32px">Workflow Cards</h2>
    <div class="grid">
${workflowCards}
    </div>

    <h2 style="margin-top:32px">Supporting Assets</h2>
    <p><a href="../examples/social-posts/README.md">Social posting kit</a> · <a href="../examples/marketing-os-command-center.md">Command center template</a> · <a href="MARKETING_OS_OUTCOME_INDEX.md">Outcome index</a> · <a href="../templates/marketing-os/README.md">Workspace templates</a></p>
  </main>
</body>
</html>
`
}

function buildContext() {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  return {
    manifest,
    skillCount: listDirs('skills').length,
    integrationCount: listFiles('tools/integrations', name => name.endsWith('.md') && name !== 'bit-integrations-registry.md').length,
    cliCount: listFiles('tools/clis', name => name.endsWith('.js')).length,
    social: countSocialPosts(),
  }
}

function main() {
  const check = process.argv.includes('--check')
  const context = buildContext()
  const markdown = generateMarkdown(context)
  const html = generateHtml(context)

  if (check) {
    if (!fs.existsSync(markdownPath)) {
      console.error('Missing generated file: docs/MARKETING_OS_DASHBOARD.md')
      process.exit(1)
    }
    if (!fs.existsSync(htmlPath)) {
      console.error('Missing generated file: docs/marketing-os-dashboard.html')
      process.exit(1)
    }
    const currentMarkdown = fs.readFileSync(markdownPath, 'utf8')
    const currentHtml = fs.readFileSync(htmlPath, 'utf8')
    if (currentMarkdown !== markdown || currentHtml !== html) {
      console.error('Marketing Skills OS dashboard is out of date. Run npm run os:dashboard.')
      process.exit(1)
    }
    console.log('Marketing Skills OS dashboard is current.')
    return
  }

  fs.writeFileSync(markdownPath, markdown)
  fs.writeFileSync(htmlPath, html)
  console.log('Wrote docs/MARKETING_OS_DASHBOARD.md')
  console.log('Wrote docs/marketing-os-dashboard.html')
}

main()
