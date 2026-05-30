#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const repoRoot = path.resolve(__dirname, '..')
const repoManifestPath = path.join(repoRoot, 'docs', 'MARKETING_OS_MANIFEST.json')

function printHelp() {
  console.log(`Usage: node scripts/run-marketing-os-workflow.js --workflow <id> [options]

Activate one Marketing Skills OS workflow in a target .marketing-os workspace.

Options:
  --workflow <id>   Workflow id or name. Example: saas-launch.
  --target <path>   Project folder containing .marketing-os. Defaults to current directory.
  --dir <name>      OS directory name. Defaults to .marketing-os.
  --force           Overwrite active-workflow.md.
  --dry-run         Print the generated workflow without writing.
  --list            List available workflows.
  --quiet           Only print errors and the final prompt path.
  --help            Show this help message.

Examples:
  node scripts/run-marketing-os-workflow.js --workflow saas-launch --target ../my-saas
  node scripts/run-marketing-os-workflow.js --workflow seo-growth-engine --target . --force
  node scripts/run-marketing-os-workflow.js --list
`)
}

function parseArgs(argv) {
  const options = {
    target: process.cwd(),
    dir: '.marketing-os',
    force: false,
    dryRun: false,
    quiet: false,
    list: false,
  }

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--help' || arg === '-h') {
      options.help = true
    } else if (arg === '--workflow') {
      options.workflow = argv[index + 1]
      index += 1
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
    } else if (arg === '--list') {
      options.list = true
    } else {
      throw new Error(`Unknown option: ${arg}`)
    }
  }

  if (!options.dir) throw new Error('--dir requires a directory name')
  if (path.isAbsolute(options.dir)) throw new Error('--dir must be a relative directory name')
  if (options.dir.includes('..')) throw new Error('--dir cannot include ..')

  return options
}

function slug(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function loadManifest(osRoot) {
  const workspaceManifest = path.join(osRoot, 'marketing-os-manifest.json')
  const manifestPath = fs.existsSync(workspaceManifest) ? workspaceManifest : repoManifestPath
  if (!fs.existsSync(manifestPath)) throw new Error(`Missing Marketing Skills OS manifest: ${manifestPath}`)
  return JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
}

function findWorkflow(manifest, value) {
  const wanted = slug(value)
  return (manifest.workflows || []).find(workflow => slug(workflow.id) === wanted || slug(workflow.name) === wanted)
}

function bullet(items, formatter = item => item) {
  if (!items || !items.length) return '- None listed'
  return items.map(item => '- ' + formatter(item)).join('\n')
}

function checkbox(items) {
  if (!items || !items.length) return '- [ ] None listed'
  return items.map(item => '- [ ] ' + item).join('\n')
}

function table(items, columnName) {
  if (!items || !items.length) return '| ' + columnName + ' | Status |\n|---|---|\n| None listed | Missing |'
  return '| ' + columnName + ' | Status |\n|---|---|\n' + items.map(item => '| `' + item + '` | Needed |').join('\n')
}

function renderWorkflow(workflow, manifest) {
  const lines = []
  lines.push('# Active Marketing Skills OS Workflow')
  lines.push('')
  lines.push('## Workflow')
  lines.push('')
  lines.push('- Name: ' + workflow.name)
  lines.push('- ID: `' + workflow.id + '`')
  lines.push('- Stage: ' + workflow.stage)
  lines.push('- Primary skill: `' + workflow.primary_skill + '`')
  lines.push('- Source manifest: ' + manifest.name + ' ' + manifest.version)
  lines.push('')
  lines.push('## Goal')
  lines.push('')
  lines.push(workflow.goal)
  lines.push('')
  lines.push('## Required Context Before Execution')
  lines.push('')
  lines.push('- [ ] Review `product-context.md`.')
  lines.push('- [ ] Confirm `product-context.md` is populated with product name, ICP, offer, primary conversion, proof points, and key constraints.')
  lines.push('- [ ] If `product-context.md` is still a blank template, pause workflow execution and run `product-marketing` first.')
  lines.push('- [ ] Review `scoreboard.md`.')
  lines.push('- [ ] Review `compliance-checklist.md`.')
  lines.push('- [ ] Review any relevant files in `workflows/`.')
  lines.push('')
  lines.push('## Product Context Readiness Gate')
  lines.push('')
  lines.push('Do not produce campaign assets, outreach, landing page copy, SEO briefs, or tool recommendations until the product context has enough detail to make the work specific.')
  lines.push('')
  lines.push('Minimum context required:')
  lines.push('')
  lines.push('- Product name and category.')
  lines.push('- ICP or buyer segment.')
  lines.push('- Primary offer or conversion goal.')
  lines.push('- Core pain, desired outcome, and main objection.')
  lines.push('- Proof points, constraints, or known assumptions.')
  lines.push('')
  lines.push('If any required context is missing, the next action is to complete `product-context.md` with the `product-marketing` skill before continuing this workflow.')
  lines.push('')
  lines.push('## Skill Stack')
  lines.push('')
  lines.push(table(workflow.skills, 'Skill'))
  lines.push('')
  lines.push('## Platform Context')
  lines.push('')
  lines.push(table(workflow.integrations, 'Integration guide'))
  lines.push('')
  lines.push('## CLI Helpers')
  lines.push('')
  lines.push(table(workflow.clis, 'CLI helper'))
  lines.push('')
  lines.push('## Deliverable Checklist')
  lines.push('')
  lines.push(checkbox(workflow.deliverables))
  lines.push('')
  lines.push('## Metric Checklist')
  lines.push('')
  lines.push(checkbox(workflow.metrics))
  lines.push('')
  lines.push('## Execution Plan')
  lines.push('')
  lines.push('| Step | Action | Output |')
  lines.push('|------|--------|--------|')
  lines.push('| 1 | Check whether `product-context.md` is populated. | Context readiness decision. |')
  lines.push('| 2 | If context is blank, run `product-marketing` before any campaign work. | Completed product context. |')
  lines.push('| 3 | Confirm the active ICP, offer, stage, and constraint. | Updated context notes. |')
  lines.push('| 4 | Use the primary skill to frame the workflow. | Workflow-specific brief. |')
  lines.push('| 5 | Read relevant integration guides before recommending tools. | Platform-aware execution notes. |')
  lines.push('| 6 | Produce the first deliverable. | Draft asset or operational file. |')
  lines.push('| 7 | Define the measurement path. | Metrics, baseline, review date. |')
  lines.push('| 8 | Capture what changes in `customer-learning-log.md`. | Learning loop update. |')
  lines.push('')
  lines.push('## Agent Prompt')
  lines.push('')
  lines.push('```text')
  lines.push('Use the marketing-os skill. Activate the `' + workflow.id + '` workflow. Read .marketing-os/product-context.md, .marketing-os/scoreboard.md, .marketing-os/compliance-checklist.md, and .marketing-os/active-workflow.md. First decide whether product context is populated. If it is blank or generic, pause execution and complete product-marketing context before producing campaign assets. If it is ready, produce the first concrete deliverable, define the metric, and update the execution checklist.')
  lines.push('```')
  lines.push('')
  lines.push('## Notes')
  lines.push('')
  lines.push('- Add decisions, blockers, and links here as the workflow runs.')
  lines.push('- Move completed work into `weekly-review.md` at the end of the week.')
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
  const manifest = loadManifest(osRoot)

  if (options.list) {
    for (const workflow of manifest.workflows || []) {
      console.log(`${workflow.id}\t${workflow.name}\t${workflow.primary_skill}`)
    }
    return
  }

  if (!options.workflow) throw new Error('--workflow is required unless --list is used')
  if (!fs.existsSync(osRoot)) throw new Error(`Marketing Skills OS workspace not found: ${osRoot}. Run npm run os:init first.`)

  const workflow = findWorkflow(manifest, options.workflow)
  if (!workflow) throw new Error(`Unknown workflow: ${options.workflow}. Use --list to see options.`)

  const content = renderWorkflow(workflow, manifest)
  const output = path.join(osRoot, 'active-workflow.md')

  if (options.dryRun) {
    console.log(content)
    return
  }

  if (fs.existsSync(output) && !options.force) {
    throw new Error(`active-workflow.md already exists. Use --force to overwrite.`)
  }

  fs.writeFileSync(output, content)

  if (options.quiet) {
    console.log(output)
    return
  }

  console.log('Activated workflow: ' + workflow.name)
  console.log('Wrote: ' + output)
  console.log('')
  console.log('Next prompt:')
  console.log('Use the marketing-os skill. Read .marketing-os/active-workflow.md and produce the first concrete deliverable.')
}

try {
  main()
} catch (error) {
  console.error(error.message)
  process.exit(1)
}
