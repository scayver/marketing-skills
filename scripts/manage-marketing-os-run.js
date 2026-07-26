#!/usr/bin/env node

const crypto = require('node:crypto')
const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const repoManifestPath = path.join(repoRoot, 'docs', 'MARKETING_OS_MANIFEST.json')

function printHelp() {
  console.log(`Usage: node scripts/manage-marketing-os-run.js <command> [options]

Commands:
  create      Create a structured run record from a workflow plan.
  status      Print one run record.
  resume      Resume a paused or failed run from its last checkpoint.
  export      Export a run as JSON or Markdown.
  lineage     Print the planned or recorded artifact lineage.

Options:
  --target <path>       Project folder containing .marketing-os. Defaults to current directory.
  --dir <name>          OS directory name. Defaults to .marketing-os.
  --workflow <id>       Workflow id or name for create.
  --request <text>      User request for create.
  --run-id <id>         Existing run id for other commands.
  --format <format>     Export format: json or markdown. Defaults to json.
  --output <path>       Export destination. Defaults to .marketing-os/exports/.
  --dry-run             Print the planned change without writing.
  --json                Print machine-readable output where supported.
  --help                Show this help message.

Examples:
  npm run os:run-record -- create --target ../my-project --workflow saas-launch --request "Prepare the launch plan"
  npm run os:run-record -- create --target ../my-project --workflow saas-launch --request "Prepare the launch plan" --dry-run
  npm run os:resume -- --target ../my-project --run-id run-20260725-120000-a1b2
  npm run os:export -- --target ../my-project --run-id run-20260725-120000-a1b2 --format markdown
`)
}

function parseArgs(argv) {
  const options = {
    command: argv[0] && !argv[0].startsWith('-') ? argv[0] : null,
    target: process.cwd(),
    dir: '.marketing-os',
    format: 'json',
    dryRun: false,
    json: false,
  }

  let index = options.command ? 1 : 0
  for (; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--help' || arg === '-h') options.help = true
    else if (arg === '--target') { options.target = argv[index + 1]; index += 1 }
    else if (arg === '--dir') { options.dir = argv[index + 1]; index += 1 }
    else if (arg === '--workflow') { options.workflow = argv[index + 1]; index += 1 }
    else if (arg === '--request') { options.request = argv[index + 1]; index += 1 }
    else if (arg === '--run-id') { options.runId = argv[index + 1]; index += 1 }
    else if (arg === '--format') { options.format = argv[index + 1]; index += 1 }
    else if (arg === '--output') { options.output = argv[index + 1]; index += 1 }
    else if (arg === '--dry-run') options.dryRun = true
    else if (arg === '--json') options.json = true
    else throw new Error(`Unknown option: ${arg}`)
  }

  if (options.help) return options
  if (!options.command) throw new Error('A command is required. Use --help for usage.')
  if (!['create', 'status', 'resume', 'export', 'lineage'].includes(options.command)) {
    throw new Error(`Unknown command: ${options.command}`)
  }
  if (!options.dir || path.isAbsolute(options.dir) || options.dir.includes('..')) {
    throw new Error('--dir must be a relative directory name without ..')
  }
  if (!['json', 'markdown'].includes(options.format)) throw new Error('--format must be json or markdown')
  return options
}

function slug(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'))
}

function writeJson(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n')
}

function loadWorkspace(options) {
  const targetRoot = path.resolve(options.target)
  const osRoot = path.resolve(targetRoot, options.dir)
  if (!fs.existsSync(osRoot)) {
    throw new Error(`Marketing Skills OS workspace not found: ${osRoot}. Run npm run os:init first.`)
  }
  const workspaceManifest = path.join(osRoot, 'marketing-os-manifest.json')
  const manifestPath = fs.existsSync(workspaceManifest) ? workspaceManifest : repoManifestPath
  if (!fs.existsSync(manifestPath)) throw new Error(`Missing Marketing OS manifest: ${manifestPath}`)
  return { targetRoot, osRoot, manifest: readJson(manifestPath) }
}

function findWorkflow(manifest, value) {
  const wanted = slug(value)
  return (manifest.workflows || []).find(item => slug(item.id) === wanted || slug(item.name) === wanted)
}

function createRunId() {
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, '').replace('T', '-')
  return `run-${stamp}-${crypto.randomBytes(2).toString('hex')}`
}

function contextReadiness(osRoot) {
  const file = path.join(osRoot, 'product-context.md')
  const text = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : ''
  const normalized = text.toLowerCase()
  const markers = ['product name', 'primary audience', 'primary offer', 'conversion goal']
  const missing = markers.filter(marker => !normalized.includes(marker) || new RegExp(`${marker}\\s*:\\s*$`, 'i').test(text))
  return {
    file: 'product-context.md',
    ready: Boolean(text.trim()) && missing.length === 0,
    missing,
  }
}

function buildRun(workspace, options, workflow) {
  const createdAt = new Date().toISOString()
  const context = contextReadiness(workspace.osRoot)
  const runId = createRunId()
  const warnings = []
  if (!context.ready) warnings.push('Product context is incomplete. Route to product-marketing before producing campaign assets.')

  return {
    schema_version: '1.0.0',
    run_id: runId,
    parent_run_id: null,
    session_id: null,
    status: 'created',
    created_at: createdAt,
    updated_at: createdAt,
    request: options.request,
    input_context: {
      workspace_root: workspace.targetRoot,
      product_context: context,
      manifest_version: workspace.manifest.version,
    },
    selected_workflow: {
      id: workflow.id,
      name: workflow.name,
      stage: workflow.stage,
      primary_skill: workflow.primary_skill,
    },
    skills_activated: workflow.skills || [],
    tools_consulted: {
      integrations: workflow.integrations || [],
      clis: workflow.clis || [],
    },
    decisions: [],
    approvals: [],
    artifacts: [],
    metrics: (workflow.metrics || []).map(id => ({ id, status: 'planned' })),
    scorecards: [],
    warnings,
    errors: [],
    next_actions: [
      context.ready ? 'Review the workflow plan and produce the first concrete deliverable.' : 'Complete product-context.md with product-marketing before producing campaign assets.',
      'Confirm the metric baseline and measurement date in scoreboard.md.',
      'Record decisions, approvals, artifacts, and evidence in this run directory.',
    ],
    environment: {
      os: 'Marketing Skills OS',
      mode: options.dryRun ? 'dry-run' : 'local',
      node: process.version,
    },
  }
}

function runDirectory(osRoot, runId) {
  if (!/^run-[a-zA-Z0-9-]+$/.test(runId)) throw new Error(`Invalid run id: ${runId}`)
  return path.join(osRoot, 'runs', runId)
}

function writeRunPackage(runDir, run, workspace, request) {
  writeJson(path.join(runDir, 'run.json'), run)
  fs.mkdirSync(path.join(runDir, 'input'), { recursive: true })
  fs.writeFileSync(path.join(runDir, 'input', 'request.md'), `# Run Request\n\n${request}\n`)
  writeJson(path.join(runDir, 'input', 'context.json'), run.input_context)
  writeJson(path.join(runDir, 'routing', 'workflow.json'), run.selected_workflow)
  writeJson(path.join(runDir, 'routing', 'skills.json'), run.skills_activated)
  writeJson(path.join(runDir, 'tools', 'plan.json'), run.tools_consulted)
  writeJson(path.join(runDir, 'metrics', 'plan.json'), run.metrics)
  writeJson(path.join(runDir, 'warnings.json'), run.warnings)
  writeJson(path.join(runDir, 'errors.json'), run.errors)
  writeJson(path.join(runDir, 'next-actions.json'), run.next_actions)
  for (const directory of ['decisions', 'approvals', 'artifacts', 'evaluations']) {
    const readme = path.join(runDir, directory, 'README.md')
    fs.mkdirSync(path.dirname(readme), { recursive: true })
    fs.writeFileSync(readme, `# ${directory[0].toUpperCase() + directory.slice(1)}\n\nAdd structured ${directory} for run \`${run.run_id}\`.\n`)
  }
}

function loadRun(workspace, runId) {
  if (!runId) throw new Error('--run-id is required')
  const directory = runDirectory(workspace.osRoot, runId)
  const file = path.join(directory, 'run.json')
  if (!fs.existsSync(file)) throw new Error(`Run not found: ${file}`)
  return { directory, run: readJson(file) }
}

function renderMarkdown(run) {
  const lines = [
    `# Marketing OS Run ${run.run_id}`,
    '',
    '| Field | Value |',
    '|---|---|',
    `| Status | \`${run.status}\` |`,
    `| Request | ${run.request} |`,
    `| Workflow | ${run.selected_workflow.name} (\`${run.selected_workflow.id}\`) |`,
    `| Stage | ${run.selected_workflow.stage} |`,
    `| Primary skill | \`${run.selected_workflow.primary_skill}\` |`,
    `| Created | ${run.created_at} |`,
    '',
    '## Execution Path',
    '',
    'Request → Context → Workflow → Skills → Tools → Decisions → Approvals → Artifacts → Metrics.',
    '',
    '## Skills',
    '',
    ...(run.skills_activated.length ? run.skills_activated.map(item => `- \`${item}\``) : ['- None recorded.']),
    '',
    '## Tools',
    '',
    ...(run.tools_consulted.integrations.length ? run.tools_consulted.integrations.map(item => `- Integration: \`${item}\``) : ['- No integrations recorded.']),
    ...(run.tools_consulted.clis.length ? run.tools_consulted.clis.map(item => `- CLI: \`${item}\``) : []),
    '',
    '## Warnings',
    '',
    ...(run.warnings.length ? run.warnings.map(item => `- ${item}`) : ['- None.']),
    '',
    '## Next Actions',
    '',
    ...run.next_actions.map(item => `- [ ] ${item}`),
    '',
  ]
  return lines.join('\n')
}

function print(value, options) {
  console.log(options.json ? JSON.stringify(value, null, 2) : value)
}

function create(workspace, options) {
  if (!options.workflow) throw new Error('--workflow is required for create')
  if (!options.request) throw new Error('--request is required for create')
  const workflow = findWorkflow(workspace.manifest, options.workflow)
  if (!workflow) throw new Error(`Unknown workflow: ${options.workflow}. Use npm run os:run -- --list.`)
  const run = buildRun(workspace, options, workflow)
  const directory = runDirectory(workspace.osRoot, run.run_id)
  if (options.dryRun) {
    print({ run, directory, writes: ['run.json', 'input/', 'routing/', 'tools/', 'metrics/', 'decisions/', 'approvals/', 'artifacts/', 'evaluations/'] }, options)
    return
  }
  writeRunPackage(directory, run, workspace, options.request)
  print({ run_id: run.run_id, status: run.status, directory }, options)
}

function status(workspace, options) {
  const loaded = loadRun(workspace, options.runId)
  print(loaded.run, options)
}

function resume(workspace, options) {
  const loaded = loadRun(workspace, options.runId)
  const run = loaded.run
  if (!['created', 'paused', 'failed'].includes(run.status)) throw new Error(`Run ${run.run_id} cannot resume from status ${run.status}`)
  const next = { ...run, status: 'running', updated_at: new Date().toISOString(), resumed_at: new Date().toISOString() }
  if (options.dryRun) { print(next, options); return }
  writeJson(path.join(loaded.directory, 'run.json'), next)
  print(next, options)
}

function exportRun(workspace, options) {
  const loaded = loadRun(workspace, options.runId)
  const extension = options.format === 'markdown' ? 'md' : 'json'
  const destination = options.output
    ? path.resolve(options.output)
    : path.join(workspace.osRoot, 'exports', `${loaded.run.run_id}.${extension}`)
  const content = options.format === 'markdown' ? renderMarkdown(loaded.run) : JSON.stringify(loaded.run, null, 2) + '\n'
  if (options.dryRun) { print({ destination, format: options.format, bytes: Buffer.byteLength(content) }, options); return }
  fs.mkdirSync(path.dirname(destination), { recursive: true })
  fs.writeFileSync(destination, content)
  print({ destination, format: options.format }, options)
}

function lineage(workspace, options) {
  const loaded = loadRun(workspace, options.runId)
  const run = loaded.run
  const result = {
    run_id: run.run_id,
    nodes: [
      { type: 'request', id: run.run_id, label: run.request },
      { type: 'context', id: 'product-context', label: run.input_context.product_context.ready ? 'Ready' : 'Incomplete' },
      { type: 'workflow', id: run.selected_workflow.id, label: run.selected_workflow.name },
      ...run.skills_activated.map(id => ({ type: 'skill', id, label: id })),
      ...run.tools_consulted.integrations.map(id => ({ type: 'integration', id, label: id })),
      ...run.tools_consulted.clis.map(id => ({ type: 'cli', id, label: id })),
      ...run.artifacts.map(item => ({ type: 'artifact', id: item.id, label: item.name || item.id })),
      ...run.metrics.map(item => ({ type: 'metric', id: item.id, label: item.id })),
    ],
  }
  if (options.json) { print(result, options); return }
  console.log(`# Lineage for ${result.run_id}`)
  console.log('')
  console.log('Request → Context → Workflow → Skills → Tools → Artifacts → Metrics')
  console.log('')
  for (const node of result.nodes) console.log(`- ${node.type}: \`${node.id}\`${node.label && node.label !== node.id ? `, ${node.label}` : ''}`)
}

function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) { printHelp(); return }
  const workspace = loadWorkspace(options)
  if (options.command === 'create') create(workspace, options)
  else if (options.command === 'status') status(workspace, options)
  else if (options.command === 'resume') resume(workspace, options)
  else if (options.command === 'export') exportRun(workspace, options)
  else if (options.command === 'lineage') lineage(workspace, options)
}

try {
  main()
} catch (error) {
  console.error(error.message)
  process.exit(1)
}
