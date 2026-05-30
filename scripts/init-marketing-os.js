#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const templateDir = path.join(root, 'templates', 'marketing-os')
const manifestPath = path.join(root, 'docs', 'MARKETING_OS_MANIFEST.json')

function printHelp() {
  console.log(`Usage: node scripts/init-marketing-os.js [options]

Create a working Marketing Skills OS command center in a target project.

Options:
  --target <path>   Project folder to initialize. Defaults to current directory.
  --dir <name>      Output directory name. Defaults to .marketing-os.
  --force           Overwrite existing files.
  --dry-run         Show what would be written without writing files.
  --quiet           Only print errors.
  --help            Show this help message.

Examples:
  node scripts/init-marketing-os.js --target ../my-saas
  node scripts/init-marketing-os.js --target . --dir marketing-os
  node scripts/init-marketing-os.js --target . --dry-run
`)
}

function parseArgs(argv) {
  const options = {
    target: process.cwd(),
    dir: '.marketing-os',
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

  if (!options.target) throw new Error('--target requires a path')
  if (!options.dir) throw new Error('--dir requires a directory name')
  if (path.isAbsolute(options.dir)) throw new Error('--dir must be a relative directory name')
  if (options.dir.includes('..')) throw new Error('--dir cannot include ..')

  return options
}

function listTemplateFiles() {
  return fs.readdirSync(templateDir, { withFileTypes: true })
    .filter(entry => entry.isFile() && entry.name.endsWith('.md'))
    .map(entry => entry.name)
    .sort()
}

function safeWorkflowFileName(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') + '.md'
}

function bulletList(items, wrapCode) {
  if (!items || !items.length) return '- None listed'
  return items.map(item => wrapCode ? '- `' + item + '`' : '- ' + item).join('\n')
}

function workflowMarkdown(workflow) {
  const lines = [
    '# ' + workflow.name,
    '',
    '## Goal',
    '',
    workflow.goal,
    '',
    '## Stage',
    '',
    workflow.stage,
    '',
    '## Primary skill',
    '',
    '`' + workflow.primary_skill + '`',
    '',
    '## Skills',
    '',
    bulletList(workflow.skills, true),
    '',
    '## Integration guides',
    '',
    bulletList(workflow.integrations, true),
    '',
    '## CLI helpers',
    '',
    bulletList(workflow.clis, true),
    '',
    '## Deliverables',
    '',
    bulletList(workflow.deliverables, false),
    '',
    '## Metrics',
    '',
    bulletList(workflow.metrics, false),
    '',
    '## Agent prompt',
    '',
    '```text',
    'Use the marketing-os skill and this workflow. Read .marketing-os/product-context.md, .marketing-os/scoreboard.md, and .marketing-os/compliance-checklist.md. Produce the next concrete deliverable for "' + workflow.name + '" and list the skill, tool guide, and metric used.',
    '```',
    '',
  ]

  return lines.join('\n')
}

function writeFile(file, content, options, stats) {
  const exists = fs.existsSync(file)
  const relative = path.relative(options.targetRoot, file).replace(/\\/g, '/')

  if (exists && !options.force) {
    stats.skipped += 1
    if (!options.quiet) console.log(`skip   ${relative}`)
    return
  }

  stats.written += 1
  if (!options.quiet) console.log(`write  ${relative}`)

  if (!options.dryRun) {
    fs.mkdirSync(path.dirname(file), { recursive: true })
    fs.writeFileSync(file, content)
  }
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

  if (!fs.existsSync(templateDir)) throw new Error(`Missing template directory: ${templateDir}`)
  if (!fs.existsSync(manifestPath)) throw new Error(`Missing manifest: ${manifestPath}`)

  const targetRoot = path.resolve(options.target)
  const outputRoot = path.resolve(targetRoot, options.dir)
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
  const stats = { written: 0, skipped: 0 }
  const runtimeOptions = { ...options, targetRoot }

  if (!options.dryRun) fs.mkdirSync(outputRoot, { recursive: true })

  for (const fileName of listTemplateFiles()) {
    const source = path.join(templateDir, fileName)
    const destination = path.join(outputRoot, fileName)
    writeFile(destination, fs.readFileSync(source, 'utf8'), runtimeOptions, stats)
  }

  writeFile(
    path.join(outputRoot, 'marketing-os-manifest.json'),
    JSON.stringify(manifest, null, 2) + '\n',
    runtimeOptions,
    stats,
  )

  for (const workflow of manifest.workflows || []) {
    writeFile(
      path.join(outputRoot, 'workflows', safeWorkflowFileName(workflow.id || workflow.name)),
      workflowMarkdown(workflow),
      runtimeOptions,
      stats,
    )
  }

  if (!options.quiet) {
    console.log('')
    console.log(options.dryRun ? 'Dry run complete.' : 'Marketing Skills OS workspace ready.')
    console.log(`Target: ${outputRoot}`)
    console.log(`Files written: ${stats.written}`)
    console.log(`Files skipped: ${stats.skipped}`)
    console.log('')
    console.log('Next prompt:')
    console.log('Use the marketing-os skill. Read .marketing-os/product-context.md, .marketing-os/command-center.md, and .marketing-os/scoreboard.md. Recommend the next best workflow and produce the first deliverable.')
  }
}

try {
  main()
} catch (error) {
  console.error(error.message)
  process.exit(1)
}
