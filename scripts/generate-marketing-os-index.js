#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const manifestPath = path.join(root, 'docs', 'MARKETING_OS_MANIFEST.json')
const outputPath = path.join(root, 'docs', 'MARKETING_OS_OUTCOME_INDEX.md')

function exists(file) {
  return fs.existsSync(path.join(root, file))
}

function listFiles(dir, predicate = () => true) {
  return fs.readdirSync(path.join(root, dir), { withFileTypes: true })
    .filter(entry => entry.isFile() && predicate(entry.name))
    .map(entry => entry.name)
    .sort()
}

function listDirs(dir) {
  return fs.readdirSync(path.join(root, dir), { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .sort()
}

function title(value) {
  return String(value)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, letter => letter.toUpperCase())
}

function escapeTable(value) {
  return String(value || '').replace(/\|/g, '\\|').replace(/\n/g, ' ')
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
  if (!fs.existsSync(file)) return ''
  const text = fs.readFileSync(file, 'utf8')
  const frontmatter = text.split('---')[1] || ''
  const lines = frontmatter.split('\n')
  const index = lines.findIndex(line => line.startsWith('description:'))
  if (index === -1) return ''

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

  return description
    .replace(/Trigger phrases:.*/i, '')
    .replace(/Trigger phrases include:.*/i, '')
    .trim()
}

function firstSentence(value, fallback) {
  const clean = String(value || '').replace(/\s+/g, ' ').trim()
  if (!clean) return fallback
  const match = clean.match(/^(.+?[.!?])\s/)
  return truncateAtWord(match ? match[1] : clean, 180, fallback)
}

function link(file, label) {
  return '[' + label + '](' + file + ')'
}

function bullet(items, formatter = item => item) {
  if (!items || !items.length) return '- None listed'
  return items.map(item => '- ' + formatter(item)).join('\n')
}

function generate() {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  const skillDirs = listDirs('skills')
  const integrationFiles = listFiles('tools/integrations', name => name.endsWith('.md') && name !== 'bit-integrations-registry.md')
  const cliFiles = listFiles('tools/clis', name => name.endsWith('.js'))
  const integrationNames = new Set(integrationFiles.map(file => file.replace(/\.md$/, '')))
  const cliNames = new Set(cliFiles.map(file => file.replace(/\.js$/, '')))
  const skillNames = new Set(skillDirs)

  const missing = []
  for (const workflow of manifest.workflows || []) {
    for (const skill of workflow.skills || []) if (!skillNames.has(skill)) missing.push('Missing skill `' + skill + '` referenced by ' + workflow.name)
    if (workflow.primary_skill && !skillNames.has(workflow.primary_skill)) missing.push('Missing primary skill `' + workflow.primary_skill + '` referenced by ' + workflow.name)
    for (const integration of workflow.integrations || []) if (!integrationNames.has(integration)) missing.push('Missing integration guide `' + integration + '` referenced by ' + workflow.name)
    for (const cli of workflow.clis || []) if (!cliNames.has(cli)) missing.push('Missing CLI `' + cli + '` referenced by ' + workflow.name)
  }

  const lines = []
  lines.push('# Marketing Skills OS Outcome Index')
  lines.push('')
  lines.push('Generated from `docs/MARKETING_OS_MANIFEST.json`, `skills/`, `tools/integrations/`, and `tools/clis/`.')
  lines.push('')
  lines.push('Use this Marketing Skills OS file when you know the business outcome but do not know which skill, integration guide, or CLI helper to start with.')
  lines.push('')
  lines.push('## Inventory')
  lines.push('')
  lines.push('| Asset | Count |')
  lines.push('|-------|------:|')
  lines.push('| Skills | ' + skillDirs.length + ' |')
  lines.push('| Integration guides | ' + integrationFiles.length + ' |')
  lines.push('| CLI tools | ' + cliFiles.length + ' |')
  lines.push('| OS workflows | ' + (manifest.workflows || []).length + ' |')
  lines.push('')
  lines.push('## Fast Routing Table')
  lines.push('')
  lines.push('| Outcome | Stage | Primary Skill | Core Deliverables | Metrics |')
  lines.push('|---------|-------|---------------|-------------------|---------|')
  for (const workflow of manifest.workflows || []) {
    lines.push('| ' + [
      link('#' + workflow.id, escapeTable(workflow.name)),
      escapeTable(workflow.stage),
      '`' + workflow.primary_skill + '`',
      escapeTable((workflow.deliverables || []).slice(0, 3).join(', ')),
      escapeTable((workflow.metrics || []).slice(0, 3).join(', ')),
    ].join(' | ') + ' |')
  }
  lines.push('')
  lines.push('## Workflow Cards')
  lines.push('')

  for (const workflow of manifest.workflows || []) {
    lines.push('<a id="' + workflow.id + '"></a>')
    lines.push('### ' + workflow.name)
    lines.push('')
    lines.push('**Goal:** ' + workflow.goal)
    lines.push('')
    lines.push('**Stage:** ' + workflow.stage)
    lines.push('')
    lines.push('**Primary skill:** `' + workflow.primary_skill + '`')
    lines.push('')
    lines.push('#### Skill Stack')
    lines.push('')
    lines.push(bullet(workflow.skills || [], skill => {
      const desc = firstSentence(skillDescription(skill), title(skill) + ' workflow.')
      return '`' + skill + '` - ' + desc
    }))
    lines.push('')
    lines.push('#### Platform Context')
    lines.push('')
    lines.push(bullet(workflow.integrations || [], integration => {
      const file = 'tools/integrations/' + integration + '.md'
      return exists(file) ? '[' + integration + '](../' + file + ')' : '`' + integration + '`'
    }))
    lines.push('')
    lines.push('#### CLI Helpers')
    lines.push('')
    lines.push(bullet(workflow.clis || [], cli => {
      const file = 'tools/clis/' + cli + '.js'
      return exists(file) ? '[' + cli + '](../' + file + ')' : '`' + cli + '`'
    }))
    lines.push('')
    lines.push('#### Deliverables')
    lines.push('')
    lines.push(bullet(workflow.deliverables || []))
    lines.push('')
    lines.push('#### Metrics')
    lines.push('')
    lines.push(bullet(workflow.metrics || []))
    lines.push('')
    lines.push('#### Start Prompt')
    lines.push('')
    lines.push('```text')
    lines.push('Use the marketing-os skill. Our goal is: ' + workflow.goal + ' Start with the `' + workflow.primary_skill + '` workflow, use the listed skill stack, check the relevant platform guides before making tool recommendations, and produce the first concrete deliverable with metrics.')
    lines.push('```')
    lines.push('')
  }

  lines.push('## Layer Map')
  lines.push('')
  lines.push('| Layer | Purpose | Skills |')
  lines.push('|-------|---------|--------|')
  for (const layer of manifest.layers || []) {
    lines.push('| ' + [
      '`' + layer.id + '`',
      escapeTable(layer.purpose),
      escapeTable((layer.skills || []).map(skill => '`' + skill + '`').join(', ')),
    ].join(' | ') + ' |')
  }
  lines.push('')
  lines.push('## Integrity Notes')
  lines.push('')
  if (missing.length) {
    lines.push('The following manifest references need attention:')
    lines.push('')
    lines.push(bullet(missing))
  } else {
    lines.push('All workflow skill, integration, and CLI references resolve to local files.')
  }
  lines.push('')
  lines.push('Regenerate this file with:')
  lines.push('')
  lines.push('```bash')
  lines.push('npm run os:index')
  lines.push('```')
  lines.push('')

  return lines.join('\n')
}

function main() {
  const expected = generate()
  const check = process.argv.includes('--check')

  if (check) {
    if (!fs.existsSync(outputPath)) {
      console.error('Missing generated file: ' + path.relative(root, outputPath))
      process.exit(1)
    }
    const current = fs.readFileSync(outputPath, 'utf8')
    if (current !== expected) {
      console.error('Marketing Skills OS outcome index is out of date. Run npm run os:index.')
      process.exit(1)
    }
    console.log('Marketing Skills OS outcome index is current.')
    return
  }

  fs.writeFileSync(outputPath, expected)
  console.log('Wrote docs/MARKETING_OS_OUTCOME_INDEX.md')
}

main()
