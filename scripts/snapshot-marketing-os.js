#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const childProcess = require('child_process')

const repoRoot = path.resolve(__dirname, '..')
const statusScript = path.join(repoRoot, 'scripts/status-marketing-os.js')

function printHelp() {
  console.log(`Usage: node scripts/snapshot-marketing-os.js [options]

Persist the current Marketing Skills OS workspace status as JSON and Markdown.

Options:
  --target <path>   Project folder containing .marketing-os. Defaults to current directory.
  --dir <name>      OS directory name. Defaults to .marketing-os.
  --date <date>     Snapshot date in YYYY-MM-DD format. Defaults to today.
  --force           Overwrite an existing snapshot for the same date.
  --dry-run         Print the generated JSON without writing.
  --quiet           Only print the current snapshot path.
  --help            Show this help message.

Examples:
  node scripts/snapshot-marketing-os.js --target ../my-saas
  node scripts/snapshot-marketing-os.js --target . --date 2026-05-28 --force
`)
}

function parseArgs(argv) {
  const options = {
    target: process.cwd(),
    dir: '.marketing-os',
    date: new Date().toISOString().slice(0, 10),
    force: false,
    dryRun: false,
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

function loadStatus(target, dir) {
  const output = childProcess.execFileSync(process.execPath, [
    statusScript,
    '--target',
    target,
    '--dir',
    dir,
    '--json',
  ], { encoding: 'utf8' })

  return JSON.parse(output)
}

function renderMarkdown(snapshot) {
  const lines = []
  lines.push('# Marketing Skills OS State Snapshot')
  lines.push('')
  lines.push('## Snapshot')
  lines.push('')
  lines.push('| Field | Value |')
  lines.push('|-------|-------|')
  lines.push('| Date | ' + snapshot.snapshot_date + ' |')
  lines.push('| Captured At | ' + snapshot.captured_at + ' |')
  lines.push('| Status | `' + snapshot.status.status + '` |')
  lines.push('| Workspace | `' + snapshot.status.os_root + '` |')
  lines.push('| Active Workflow | ' + snapshot.status.active_workflow.workflow + ' |')
  lines.push('| Workflow ID | `' + snapshot.status.active_workflow.id + '` |')
  lines.push('| Primary Skill | `' + snapshot.status.active_workflow.primary_skill + '` |')
  lines.push('| Reviews Available | ' + snapshot.status.reviews_available + ' |')
  lines.push('| Missing Files | ' + snapshot.status.missing_files.length + ' |')
  lines.push('')
  lines.push('## Next Actions')
  lines.push('')
  for (const action of snapshot.status.next_actions) lines.push('- ' + action)
  lines.push('')
  lines.push('## Agent Resume Prompt')
  lines.push('')
  lines.push('```text')
  lines.push('Use marketing-os. Read .marketing-os/state/current-state.json, .marketing-os/active-workflow.md, and .marketing-os/current-weekly-review.md. Resume from the saved state, choose the next concrete action, and update the relevant checklist.')
  lines.push('```')
  lines.push('')
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

  const status = loadStatus(targetRoot, options.dir)
  const snapshot = {
    schema_version: '1.0.0',
    snapshot_date: options.date,
    captured_at: new Date().toISOString(),
    target_root: targetRoot,
    status,
  }

  if (options.dryRun) {
    console.log(JSON.stringify(snapshot, null, 2))
    return
  }

  const stateRoot = path.join(osRoot, 'state')
  const snapshotsRoot = path.join(stateRoot, 'snapshots')
  const datedJson = path.join(snapshotsRoot, options.date + '.json')
  const currentJson = path.join(stateRoot, 'current-state.json')
  const currentMarkdown = path.join(stateRoot, 'current-state.md')

  if (fs.existsSync(datedJson) && !options.force) {
    throw new Error(`Snapshot already exists for ${options.date}. Use --force to overwrite.`)
  }

  fs.mkdirSync(snapshotsRoot, { recursive: true })
  fs.writeFileSync(datedJson, JSON.stringify(snapshot, null, 2) + '\n')
  fs.writeFileSync(currentJson, JSON.stringify(snapshot, null, 2) + '\n')
  fs.writeFileSync(currentMarkdown, renderMarkdown(snapshot))

  if (options.quiet) {
    console.log(currentJson)
    return
  }

  console.log('Wrote current state: ' + currentJson)
  console.log('Wrote dated snapshot: ' + datedJson)
  console.log('Wrote resume guide: ' + currentMarkdown)
}

try {
  main()
} catch (error) {
  console.error(error.message)
  process.exit(1)
}
