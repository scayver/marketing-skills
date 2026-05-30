#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const requiredFiles = [
  'README.md',
  'product-context.md',
  'command-center.md',
  'scoreboard.md',
  'experiment-backlog.md',
  'weekly-review.md',
  'compliance-checklist.md',
  'asset-inventory.md',
  'campaign-brief.md',
  'customer-learning-log.md',
  'operating-rhythm.md',
  'workflow-plan.md',
  'marketing-os-manifest.json',
]

function printHelp() {
  console.log(`Usage: node scripts/status-marketing-os.js [options]

Inspect a target .marketing-os workspace and print its operating status.

Options:
  --target <path>   Project folder containing .marketing-os. Defaults to current directory.
  --dir <name>      OS directory name. Defaults to .marketing-os.
  --json            Print machine-readable JSON.
  --quiet           Print only status summary.
  --help            Show this help message.

Examples:
  node scripts/status-marketing-os.js --target ../my-saas
  node scripts/status-marketing-os.js --target . --json
`)
}

function parseArgs(argv) {
  const options = {
    target: process.cwd(),
    dir: '.marketing-os',
    json: false,
    quiet: false,
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
    } else if (arg === '--json') {
      options.json = true
    } else if (arg === '--quiet') {
      options.quiet = true
    } else {
      throw new Error(`Unknown option: ${arg}`)
    }
  }

  if (!options.dir) throw new Error('--dir requires a directory name')
  if (path.isAbsolute(options.dir)) throw new Error('--dir must be a relative directory name')
  if (options.dir.includes('..')) throw new Error('--dir cannot include ..')

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

function listFiles(dir, predicate = () => true) {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter(entry => entry.isFile() && predicate(entry.name))
    .map(entry => entry.name)
    .sort()
}

function countUnchecked(text) {
  const matches = text.match(/- \[ \]/g)
  return matches ? matches.length : 0
}

function analyze(osRoot) {
  const missingFiles = requiredFiles.filter(file => !fs.existsSync(path.join(osRoot, file)))
  const activeWorkflow = readIfExists(path.join(osRoot, 'active-workflow.md'))
  const currentReview = readIfExists(path.join(osRoot, 'current-weekly-review.md'))
  const manifestText = readIfExists(path.join(osRoot, 'marketing-os-manifest.json'))
  const reviewFiles = listFiles(path.join(osRoot, 'reviews'), name => name.endsWith('-weekly-review.md'))
  const workflowFiles = listFiles(path.join(osRoot, 'workflows'), name => name.endsWith('.md'))

  let manifest = null
  if (manifestText) {
    try {
      manifest = JSON.parse(manifestText)
    } catch (error) {
      manifest = { error: error.message }
    }
  }

  const active = {
    present: Boolean(activeWorkflow),
    workflow: extractLine(activeWorkflow, 'Name', 'None selected'),
    id: extractLine(activeWorkflow, 'ID', 'none'),
    stage: extractLine(activeWorkflow, 'Stage', 'Unknown'),
    primary_skill: extractLine(activeWorkflow, 'Primary skill', 'marketing-os'),
    open_checklist_items: countUnchecked(activeWorkflow),
  }

  const review = {
    present: Boolean(currentReview),
    latest_file: reviewFiles.length ? reviewFiles[reviewFiles.length - 1] : null,
    open_checklist_items: countUnchecked(currentReview),
  }

  const status = missingFiles.length === 0 && active.present && review.present ? 'ready' : 'needs-attention'

  const nextActions = []
  if (missingFiles.length) nextActions.push('Run `npm run os:init -- --target <project> --force` to restore missing workspace files.')
  if (!active.present) nextActions.push('Run `npm run os:run -- --target <project> --workflow <id> --force` to activate a workflow.')
  if (!review.present) nextActions.push('Run `npm run os:review -- --target <project> --date YYYY-MM-DD --force` to create the weekly review.')
  if (active.present && active.open_checklist_items > 0) nextActions.push('Use the active workflow checklist to ship the next deliverable.')
  if (review.present && review.open_checklist_items > 0) nextActions.push('Close the weekly review maintenance checklist before changing workflows.')
  if (!nextActions.length) nextActions.push('Workspace is ready. Use `marketing-os` with `active-workflow.md` to produce the next deliverable.')

  return {
    status,
    os_root: osRoot,
    missing_files: missingFiles,
    workflows_available: workflowFiles.length,
    reviews_available: reviewFiles.length,
    active_workflow: active,
    current_review: review,
    manifest: manifest ? {
      name: manifest.name,
      version: manifest.version,
      workflows: Array.isArray(manifest.workflows) ? manifest.workflows.length : 0,
      counts: manifest.counts || null,
      error: manifest.error || null,
    } : null,
    next_actions: nextActions,
  }
}

function printMarkdown(result, quiet) {
  if (quiet) {
    console.log(`${result.status}: ${result.active_workflow.workflow} (${result.active_workflow.id})`)
    return
  }

  console.log('# Marketing Skills OS Workspace Status')
  console.log('')
  console.log('| Field | Value |')
  console.log('|-------|-------|')
  console.log('| Status | `' + result.status + '` |')
  console.log('| Workspace | `' + result.os_root + '` |')
  console.log('| Active workflow | ' + result.active_workflow.workflow + ' |')
  console.log('| Workflow ID | `' + result.active_workflow.id + '` |')
  console.log('| Stage | ' + result.active_workflow.stage + ' |')
  console.log('| Primary skill | `' + result.active_workflow.primary_skill + '` |')
  console.log('| Workflows available | ' + result.workflows_available + ' |')
  console.log('| Reviews available | ' + result.reviews_available + ' |')
  console.log('| Latest review | ' + (result.current_review.latest_file || 'None') + ' |')
  console.log('| Missing required files | ' + result.missing_files.length + ' |')
  console.log('')

  if (result.manifest) {
    console.log('## Manifest')
    console.log('')
    console.log('- Name: ' + (result.manifest.name || 'Unknown'))
    console.log('- Version: ' + (result.manifest.version || 'Unknown'))
    console.log('- Workflows: ' + result.manifest.workflows)
    if (result.manifest.counts) {
      console.log('- Skills: ' + result.manifest.counts.skills)
      console.log('- Integration guides: ' + result.manifest.counts.integration_guides)
      console.log('- CLI tools: ' + result.manifest.counts.cli_tools)
    }
    if (result.manifest.error) console.log('- Manifest error: ' + result.manifest.error)
    console.log('')
  }

  if (result.missing_files.length) {
    console.log('## Missing Files')
    console.log('')
    for (const file of result.missing_files) console.log('- `' + file + '`')
    console.log('')
  }

  console.log('## Next Actions')
  console.log('')
  for (const action of result.next_actions) console.log('- ' + action)
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

  const result = analyze(osRoot)
  if (options.json) {
    console.log(JSON.stringify(result, null, 2))
  } else {
    printMarkdown(result, options.quiet)
  }
}

try {
  main()
} catch (error) {
  console.error(error.message)
  process.exit(1)
}
