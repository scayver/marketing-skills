#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

function printHelp() {
  console.log(`Usage: node scripts/review-marketing-os-week.js [options]

Create a weekly Marketing Skills OS review artifact from a target .marketing-os workspace.

Options:
  --target <path>   Project folder containing .marketing-os. Defaults to current directory.
  --dir <name>      OS directory name. Defaults to .marketing-os.
  --date <date>     Review date in YYYY-MM-DD format. Defaults to today.
  --force           Overwrite an existing review file for the same date.
  --dry-run         Print the review without writing.
  --quiet           Only print the written review path.
  --help            Show this help message.

Examples:
  node scripts/review-marketing-os-week.js --target ../my-saas
  node scripts/review-marketing-os-week.js --target . --date 2026-05-28 --force
`)
}

function parseArgs(argv) {
  const options = {
    target: process.cwd(),
    dir: '.marketing-os',
    force: false,
    dryRun: false,
    quiet: false,
    date: new Date().toISOString().slice(0, 10),
  }

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--help' || arg === '-h') {
      options.help = true
    } else if (arg === '--target') {
      options.target = argv[index + 1]
      index += 1
    } else if (arg === '--dir') {
      options.dir = argv[index + 1]
      index += 1
    } else if (arg === '--date') {
      options.date = argv[index + 1]
      index += 1
    } else if (arg === '--force') {
      options.force = true
    } else if (arg === '--dry-run') {
      options.dryRun = true
    } else if (arg === '--quiet') {
      options.quiet = true
    } else {
      throw new Error(`Unknown option: ${arg}`)
    }
  }

  if (!options.dir) throw new Error('--dir requires a directory name')
  if (path.isAbsolute(options.dir)) throw new Error('--dir must be a relative directory name')
  if (options.dir.includes('..')) throw new Error('--dir cannot include ..')
  if (!/^\d{4}-\d{2}-\d{2}$/.test(options.date)) throw new Error('--date must use YYYY-MM-DD format')

  return options
}

function readIfExists(file) {
  if (!fs.existsSync(file)) return ''
  return fs.readFileSync(file, 'utf8')
}

function extractLine(text, label, fallback) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const pattern = new RegExp('^- ' + escaped + ':\\s*(.+)$', 'm')
  const match = text.match(pattern)
  if (!match) return fallback
  return match[1].replace(/^`|`$/g, '').trim()
}

function sectionExists(text, title) {
  return text.includes('## ' + title) || text.includes('### ' + title)
}

function renderReview(osRoot, options) {
  const activeWorkflow = readIfExists(path.join(osRoot, 'active-workflow.md'))
  const scoreboard = readIfExists(path.join(osRoot, 'scoreboard.md'))
  const learningLog = readIfExists(path.join(osRoot, 'customer-learning-log.md'))
  const experimentBacklog = readIfExists(path.join(osRoot, 'experiment-backlog.md'))
  const commandCenter = readIfExists(path.join(osRoot, 'command-center.md'))

  const workflowName = extractLine(activeWorkflow, 'Name', 'No active workflow selected')
  const workflowId = extractLine(activeWorkflow, 'ID', 'none')
  const primarySkill = extractLine(activeWorkflow, 'Primary skill', 'marketing-os')
  const stage = extractLine(activeWorkflow, 'Stage', 'Unknown')

  const lines = []
  lines.push('# Weekly Marketing Skills OS Review')
  lines.push('')
  lines.push('## Review Date')
  lines.push('')
  lines.push(options.date)
  lines.push('')
  lines.push('## Active Workflow')
  lines.push('')
  lines.push('| Field | Value |')
  lines.push('|-------|-------|')
  lines.push('| Workflow | ' + workflowName + ' |')
  lines.push('| Workflow ID | `' + workflowId + '` |')
  lines.push('| Stage | ' + stage + ' |')
  lines.push('| Primary Skill | `' + primarySkill + '` |')
  lines.push('')
  lines.push('## Source Checks')
  lines.push('')
  lines.push('| Source | Present | Use |')
  lines.push('|--------|---------|-----|')
  lines.push('| `active-workflow.md` | ' + (activeWorkflow ? 'Yes' : 'No') + ' | Current workflow and deliverables. |')
  lines.push('| `scoreboard.md` | ' + (scoreboard ? 'Yes' : 'No') + ' | Metrics and channel movement. |')
  lines.push('| `customer-learning-log.md` | ' + (learningLog ? 'Yes' : 'No') + ' | Customer objections, praise, and repeated questions. |')
  lines.push('| `experiment-backlog.md` | ' + (experimentBacklog ? 'Yes' : 'No') + ' | Tests to continue, ship, pause, or replace. |')
  lines.push('| `command-center.md` | ' + (commandCenter ? 'Yes' : 'No') + ' | Priorities, decisions, and owner notes. |')
  lines.push('')
  lines.push('## What Shipped')
  lines.push('')
  lines.push('- [ ] Add shipped asset, campaign, test, or system update.')
  lines.push('- [ ] Add link or file path.')
  lines.push('- [ ] Add owner and status.')
  lines.push('')
  lines.push('## Metrics Review')
  lines.push('')
  lines.push('| Metric | Baseline | Current | Change | Decision |')
  lines.push('|--------|----------|---------|--------|----------|')
  lines.push('| | | | | |')
  lines.push('')
  lines.push('## Learning Loop')
  lines.push('')
  lines.push('| Learning Type | What Changed | Evidence | Update Needed |')
  lines.push('|---------------|--------------|----------|---------------|')
  lines.push('| Customer | | | `product-context.md` |')
  lines.push('| Channel | | | active workflow or campaign brief |')
  lines.push('| Offer | | | positioning and landing page copy |')
  lines.push('| Message | | | copy, email, social, sales assets |')
  lines.push('| Product | | | roadmap or onboarding notes |')
  lines.push('')
  lines.push('## Experiment Decisions')
  lines.push('')
  lines.push('| Experiment | Decision | Reason | Next Step |')
  lines.push('|------------|----------|--------|-----------|')
  lines.push('| | Continue / Scale / Stop / Replace | | |')
  lines.push('')
  lines.push('## Next Week Operating Plan')
  lines.push('')
  lines.push('| Priority | Skill | Tool Guide or CLI | Deliverable | Metric |')
  lines.push('|----------|-------|-------------------|-------------|--------|')
  lines.push('| | `' + primarySkill + '` | | | |')
  lines.push('')
  lines.push('## Agent Prompt')
  lines.push('')
  lines.push('```text')
  lines.push('Use marketing-os, analytics, product-marketing, and the active workflow. Review .marketing-os/current-weekly-review.md, .marketing-os/scoreboard.md, .marketing-os/customer-learning-log.md, and .marketing-os/experiment-backlog.md. Summarize what changed, update the learning loop, choose next week\'s highest leverage priority, and list the first three actions.')
  lines.push('```')
  lines.push('')
  lines.push('## Maintenance Checklist')
  lines.push('')
  lines.push('- [ ] Update `product-context.md` with durable learning.')
  lines.push('- [ ] Update `scoreboard.md` with final weekly numbers.')
  lines.push('- [ ] Update `experiment-backlog.md` with decisions.')
  lines.push('- [ ] Update `command-center.md` with next week priorities.')
  lines.push('- [ ] Activate a new workflow with `npm run os:run` if the priority changes.')
  lines.push('')

  if (!sectionExists(activeWorkflow, 'Deliverable Checklist')) {
    lines.push('## Warning')
    lines.push('')
    lines.push('No active workflow checklist was found. Run `npm run os:run -- --workflow <id>` before the next review.')
    lines.push('')
  }

  return lines.join('\n')
}

function main() {
  let options
  try {
    options = parseArgs(process.argv.slice(2))
  } catch (error) {
    console.error(error.message)
    printHelp()
    process.exit(1)
  }

  if (options.help) {
    printHelp()
    return
  }

  const targetRoot = path.resolve(options.target)
  const osRoot = path.resolve(targetRoot, options.dir)
  if (!fs.existsSync(osRoot)) throw new Error(`Marketing Skills OS workspace not found: ${osRoot}. Run npm run os:init first.`)

  const content = renderReview(osRoot, options)
  const reviewsDir = path.join(osRoot, 'reviews')
  const datedReview = path.join(reviewsDir, options.date + '-weekly-review.md')
  const currentReview = path.join(osRoot, 'current-weekly-review.md')

  if (options.dryRun) {
    console.log(content)
    return
  }

  if (fs.existsSync(datedReview) && !options.force) {
    throw new Error(`Review already exists for ${options.date}. Use --force to overwrite.`)
  }

  fs.mkdirSync(reviewsDir, { recursive: true })
  fs.writeFileSync(datedReview, content)
  fs.writeFileSync(currentReview, content)

  if (options.quiet) {
    console.log(datedReview)
    return
  }

  console.log('Wrote weekly review: ' + datedReview)
  console.log('Updated current review: ' + currentReview)
  console.log('')
  console.log('Next prompt:')
  console.log('Use marketing-os. Read .marketing-os/current-weekly-review.md and produce next week\'s operating plan.')
}

try {
  main()
} catch (error) {
  console.error(error.message)
  process.exit(1)
}
