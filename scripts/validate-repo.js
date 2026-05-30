#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const os = require('os')
const childProcess = require('child_process')
const vm = require('vm')

const root = path.resolve(__dirname, '..')
const failures = []

function rel(file) {
  return path.relative(root, file).replace(/\\/g, '/')
}

function fail(message) {
  failures.push(message)
}

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8')
}

function exists(file) {
  return fs.existsSync(path.join(root, file))
}

function listDirs(dir) {
  return fs.readdirSync(path.join(root, dir), { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name).sort()
}

function listFiles(dir, predicate = () => true) {
  return fs.readdirSync(path.join(root, dir), { withFileTypes: true })
    .filter(d => d.isFile() && predicate(d.name))
    .map(d => d.name)
    .sort()
}

function expectContains(file, value) {
  const text = read(file)
  if (!text.includes(value)) fail(`${file} is missing: ${value}`)
}

function validateSkills() {
  const skillDirs = listDirs('skills')
  for (const dir of skillDirs) {
    const file = path.join(root, 'skills', dir, 'SKILL.md')
    if (!fs.existsSync(file)) {
      fail(`skills/${dir}/SKILL.md is missing`)
      continue
    }
    const text = fs.readFileSync(file, 'utf8')
    if (!text.startsWith('---')) {
      fail(`skills/${dir}/SKILL.md is missing YAML frontmatter`)
      continue
    }
    const parts = text.split('---')
    const frontmatter = parts[1] || ''
    const nameMatch = frontmatter.match(/^name:\s*(.+)$/m)
    if (!nameMatch) fail(`skills/${dir}/SKILL.md is missing name frontmatter`)
    else if (nameMatch[1].trim() !== dir) fail(`skills/${dir}/SKILL.md name does not match directory`)
    if (!/^description:\s*>/m.test(frontmatter) && !/^description:\s*.+/m.test(frontmatter)) {
      fail(`skills/${dir}/SKILL.md is missing description frontmatter`)
    }
    if (!text.includes('## Mandatory Content Standards')) {
      fail(`skills/${dir}/SKILL.md is missing Mandatory Content Standards`)
    }
  }
  return skillDirs.length
}

function validateToolRegistry(integrationCount, cliCount) {
  const registry = read('tools/REGISTRY.md')
  expectContains('tools/REGISTRY.md', `**Standalone integration guides:** ${integrationCount}`)
  expectContains('tools/REGISTRY.md', `**JavaScript CLI tools:** ${cliCount}`)

  const integrationFiles = listFiles('tools/integrations', name => name.endsWith('.md') && name !== 'bit-integrations-registry.md')
  for (const file of integrationFiles) {
    if (!registry.includes(`](integrations/${file})`)) fail(`tools/REGISTRY.md is missing ${file}`)
  }
}

function validateCliReadme(cliFiles) {
  const text = read('tools/clis/README.md')
  for (const file of cliFiles) {
    if (!text.includes(`\`${file}\``)) fail(`tools/clis/README.md is missing ${file}`)
  }
}

function validateNodeSyntax(files) {
  for (const file of files) {
    const scriptPath = path.join(root, file)
    const source = fs.readFileSync(scriptPath, 'utf8').replace(/^#!.*\n/, '')
    try {
      new vm.Script(source, { filename: rel(scriptPath) })
    } catch (error) {
      fail(`${rel(scriptPath)} has invalid JavaScript syntax: ${error.message}`)
    }
  }
}

function validateCliSyntax(cliFiles) {
  validateNodeSyntax(cliFiles.map(file => path.join('tools/clis', file)))
}
function validateDocs(skillCount, integrationCount, cliCount) {
  expectContains('package.json', `"version": "1.7.0"`)
  expectContains('package.json', `"test:claude-code": "node scripts/test-claude-code-package.js"`)
  expectContains('package.json', `Marketing Skills OS is an open-source Marketing OS for AI agents`)
  expectContains('README.md', `# Marketing Skills OS`)
  expectContains('README.md', `The public brand is **Marketing Skills OS**. The install path remains \`scayver/marketing-skills\``)
  expectContains('README.md', `The repo includes ${skillCount} skills, ${integrationCount} integration guides, ${cliCount} CLI tools`)
  expectContains('README.md', `skills-${skillCount}-orange`)
  expectContains('README.md', `integration%20guides-${integrationCount}-purple`)
  expectContains('README.md', `**Install Marketing Skills OS with all ${skillCount} skills:**`)
  expectContains('README.md', `clis/           ${cliCount} JavaScript CLI tools`)
  expectContains('README.md', `integrations/   ${integrationCount} standalone platform integration guides`)
  expectContains('AGENTS.md', `contains ${skillCount} reusable marketing and growth skills`)
  expectContains('AGENTS.md', `Marketing Skills OS is an open-source Marketing OS for AI agents`)
  expectContains('AGENTS.md', `# ${cliCount} JavaScript CLI tools`)
  expectContains('AGENTS.md', `# ${integrationCount} standalone platform guides`)
  expectContains('docs/LAUNCH_KIT.md', `${skillCount} marketing and growth skills`)
  expectContains('docs/LAUNCH_KIT.md', `${integrationCount} standalone integration guides`)
  expectContains('docs/LAUNCH_KIT.md', `${cliCount} JavaScript CLI tools`)
  expectContains('VALIDATION.md', `Expected current count: \`${skillCount}\`.`)
  expectContains('VALIDATION.md', `Expected current count: \`${integrationCount}\`.`)
  expectContains('VALIDATION.md', `Expected current count: \`${cliCount}\`.`)
}

function validateBranding() {
  const brandFiles = [
    'README.md',
    'AGENTS.md',
    'package.json',
    'docs/FAQ.md',
    'docs/GETTING_STARTED.md',
    'docs/LAUNCH_KIT.md',
    'docs/MARKETING_OS.md',
    'docs/README.md',
    'docs/MARKETING_OS_DASHBOARD.md',
    'docs/MARKETING_OS_OUTCOME_INDEX.md',
    'docs/SOCIAL_POST_LIBRARY.md',
    'examples/README.md',
    'templates/marketing-os/README.md',
  ].filter(exists)

  for (const file of brandFiles) {
    expectContains(file, 'Marketing Skills OS')
  }

  const outdatedPatterns = [
    new RegExp('skills ' + 'library', 'i'),
    new RegExp('skills ' + 'package', 'i'),
    new RegExp('marketing-skills is a ' + 'library', 'i'),
    new RegExp('Use `marketing-skills` as the operating ' + 'system'),
    new RegExp('marketing-skills` as the operating ' + 'system'),
    new RegExp('marketing-skills ' + 'package', 'i'),
    new RegExp('full `marketing-skills` ' + 'package', 'i'),
  ]

  const files = [
    'README.md',
    'AGENTS.md',
    'docs/CLAUDE_CODE_TESTING.md',
    'docs/FAQ.md',
    'docs/LAUNCH_KIT.md',
    'docs/MARKETING_OS.md',
    'docs/MARKETING_OS_DASHBOARD.md',
    'docs/MARKETING_OS_OUTCOME_INDEX.md',
    'docs/SOCIAL_POST_LIBRARY.md',
    'examples/README.md',
    'templates/marketing-os/README.md',
  ].filter(exists)

  for (const file of files) {
    const text = read(file)
    for (const pattern of outdatedPatterns) {
      if (pattern.test(text)) fail(`${file} still contains outdated branding pattern: ${pattern}`)
    }
  }
}

function validateSocialPosts(skillCount, integrationCount, cliCount) {
  const csvPath = path.join(root, 'examples/social-post-library.csv')
  if (!fs.existsSync(csvPath)) {
    fail('examples/social-post-library.csv is missing')
    return
  }
  const lines = fs.readFileSync(csvPath, 'utf8').trim().split(/\r?\n/)
  const rowCount = Math.max(0, lines.length - 1)
  const expected = skillCount + integrationCount + cliCount
  if (rowCount !== expected) fail(`examples/social-post-library.csv has ${rowCount} rows, expected ${expected}`)
}

function validateRequiredFiles() {
  const required = [
    '.github/workflows/validate.yml',
    '.github/FUNDING.yml',
    '.github/ISSUE_TEMPLATE/bug_report.md',
    '.github/ISSUE_TEMPLATE/skill-or-tool-request.md',
    '.github/ISSUE_TEMPLATE/tool-integration-request.md',
    '.github/pull_request_template.md',
    '.gitignore',
    'CODE_OF_CONDUCT.md',
    'CONTRIBUTING.md',
    'LICENSE',
    'README.md',
    'SECURITY.md',
    'VALIDATION.md',
    'VERSIONS.md',
    'docs/COMPLIANCE.md',
    'docs/CLAUDE_CODE_TESTING.md',
    'docs/DEMO.md',
    'docs/FAQ.md',
    'docs/GETTING_STARTED.md',
    'docs/LAUNCH_KIT.md',
    'docs/MARKETING_OS.md',
    'docs/README.md',
    'docs/MARKETING_OS_DASHBOARD.md',
    'docs/MARKETING_OS_MANIFEST.json',
    'docs/MARKETING_OS_OUTCOME_INDEX.md',
    'docs/marketing-os-dashboard.html',
    'docs/ROADMAP.md',
    'docs/SHOWCASE.md',
    'docs/SOCIAL_POST_LIBRARY.md',
    'examples/README.md',
    'scripts/generate-marketing-os-dashboard.js',
    'scripts/generate-marketing-os-index.js',
    'scripts/init-marketing-os.js',
    'scripts/print-marketing-os-summary.js',
    'scripts/review-marketing-os-week.js',
    'scripts/run-marketing-os-workflow.js',
    'scripts/snapshot-marketing-os.js',
    'scripts/status-marketing-os.js',
    'scripts/test-claude-code-package.js',
    'templates/marketing-os/README.md',
    'templates/marketing-os/asset-inventory.md',
    'templates/marketing-os/campaign-brief.md',
    'templates/marketing-os/command-center.md',
    'templates/marketing-os/compliance-checklist.md',
    'templates/marketing-os/customer-learning-log.md',
    'templates/marketing-os/experiment-backlog.md',
    'templates/marketing-os/operating-rhythm.md',
    'templates/marketing-os/product-context.md',
    'templates/marketing-os/scoreboard.md',
    'templates/marketing-os/weekly-review.md',
    'templates/marketing-os/workflow-plan.md',
    'examples/social-post-library.csv',
    'examples/social-posts/README.md',
    'examples/social-posts/30-day-posting-calendar.csv',
    'examples/social-posts/launch-week.md',
    'examples/social-posts/category-stacks.md',
    'examples/social-posts/skills-posts.md',
    'examples/social-posts/integration-posts.md',
    'examples/social-posts/cli-tool-posts.md',
    'examples/marketing-os-command-center.md',
  ]
  for (const file of required) {
    if (!exists(file)) fail(`${file} is missing`)
  }
}


function validateMarketingOsOutcomeIndex() {
  try {
    childProcess.execFileSync(process.execPath, [
      path.join(root, 'scripts/generate-marketing-os-index.js'),
      '--check',
    ], { stdio: 'pipe' })
  } catch (error) {
    fail(`docs/MARKETING_OS_OUTCOME_INDEX.md is out of date or invalid: ${error.message}`)
  }
}

function validateMarketingOsDashboard() {
  try {
    childProcess.execFileSync(process.execPath, [
      path.join(root, 'scripts/generate-marketing-os-dashboard.js'),
      '--check',
    ], { stdio: 'pipe' })
  } catch (error) {
    fail(`Marketing Skills OS dashboard is out of date or invalid: ${error.message}`)
  }
}

function validateClaudeCodeSmoke() {
  try {
    childProcess.execFileSync(process.execPath, [
      path.join(root, 'scripts/test-claude-code-package.js'),
      '--quiet',
    ], { stdio: 'pipe' })
  } catch (error) {
    fail(`Claude Code smoke test failed: ${error.message}`)
  }
}

function validateNoArtifacts() {
  if (exists('tools/integrations/bit-integrations')) fail('tools/integrations/bit-integrations directory should not exist')
  if (exists('{skills')) fail('empty generated {skills directory should not exist')
}

function validateMarketingOsInitializer() {
  const manifest = JSON.parse(read('docs/MARKETING_OS_MANIFEST.json'))
  if (!manifest.workflows || manifest.workflows.length < 7) fail('docs/MARKETING_OS_MANIFEST.json should include at least 7 workflows')

  const templateFiles = listFiles('templates/marketing-os', name => name.endsWith('.md'))
  if (templateFiles.length < 12) fail(`templates/marketing-os has ${templateFiles.length} templates, expected at least 12`)

  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'marketing-os-validate-'))
  try {
    childProcess.execFileSync(process.execPath, [
      path.join(root, 'scripts/init-marketing-os.js'),
      '--target',
      tempRoot,
      '--quiet',
    ], { stdio: 'pipe' })

    const outputRoot = path.join(tempRoot, '.marketing-os')
    if (!fs.existsSync(path.join(outputRoot, 'README.md'))) fail('init-marketing-os did not create .marketing-os/README.md')
    if (!fs.existsSync(path.join(outputRoot, 'marketing-os-manifest.json'))) fail('init-marketing-os did not create marketing-os-manifest.json')
    if (!fs.existsSync(path.join(outputRoot, 'workflows', 'saas-launch.md'))) fail('init-marketing-os did not create workflows/saas-launch.md')

    childProcess.execFileSync(process.execPath, [
      path.join(root, 'scripts/run-marketing-os-workflow.js'),
      '--target',
      tempRoot,
      '--workflow',
      'saas-launch',
      '--force',
      '--quiet',
    ], { stdio: 'pipe' })

    if (!fs.existsSync(path.join(outputRoot, 'active-workflow.md'))) fail('run-marketing-os-workflow did not create active-workflow.md')

    childProcess.execFileSync(process.execPath, [
      path.join(root, 'scripts/review-marketing-os-week.js'),
      '--target',
      tempRoot,
      '--date',
      '2026-05-28',
      '--force',
      '--quiet',
    ], { stdio: 'pipe' })

    if (!fs.existsSync(path.join(outputRoot, 'current-weekly-review.md'))) fail('review-marketing-os-week did not create current-weekly-review.md')
    if (!fs.existsSync(path.join(outputRoot, 'reviews', '2026-05-28-weekly-review.md'))) fail('review-marketing-os-week did not create dated weekly review')

    const statusOutput = childProcess.execFileSync(process.execPath, [
      path.join(root, 'scripts/status-marketing-os.js'),
      '--target',
      tempRoot,
      '--quiet',
    ], { encoding: 'utf8' })

    if (!statusOutput.includes('ready: SaaS Launch')) fail('status-marketing-os did not report ready SaaS Launch workspace')

    childProcess.execFileSync(process.execPath, [
      path.join(root, 'scripts/snapshot-marketing-os.js'),
      '--target',
      tempRoot,
      '--date',
      '2026-05-28',
      '--force',
      '--quiet',
    ], { stdio: 'pipe' })

    if (!fs.existsSync(path.join(outputRoot, 'state', 'current-state.json'))) fail('snapshot-marketing-os did not create state/current-state.json')
    if (!fs.existsSync(path.join(outputRoot, 'state', 'current-state.md'))) fail('snapshot-marketing-os did not create state/current-state.md')
    if (!fs.existsSync(path.join(outputRoot, 'state', 'snapshots', '2026-05-28.json'))) fail('snapshot-marketing-os did not create dated state snapshot')
  } catch (error) {
    fail(`scripts/init-marketing-os.js failed smoke test: ${error.message}`)
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true })
  }
}
function validateLocalLinks() {
  const files = [
    'README.md', 'AGENTS.md', 'CONTRIBUTING.md', 'SECURITY.md', 'VALIDATION.md', 'VERSIONS.md',
    'docs/COMPLIANCE.md', 'docs/DEMO.md', 'docs/FAQ.md', 'docs/LAUNCH_KIT.md',
    'docs/CLAUDE_CODE_TESTING.md',
    'docs/GETTING_STARTED.md',
    'docs/MARKETING_OS.md',
    'docs/README.md',
    'docs/MARKETING_OS_DASHBOARD.md',
    'docs/MARKETING_OS_MANIFEST.json', 'docs/MARKETING_OS_OUTCOME_INDEX.md', 'docs/ROADMAP.md', 'docs/SHOWCASE.md',
    'examples/README.md',
    'templates/marketing-os/README.md',
    'templates/marketing-os/asset-inventory.md',
    'templates/marketing-os/campaign-brief.md',
    'templates/marketing-os/command-center.md',
    'templates/marketing-os/compliance-checklist.md',
    'templates/marketing-os/customer-learning-log.md',
    'templates/marketing-os/experiment-backlog.md',
    'templates/marketing-os/operating-rhythm.md',
    'templates/marketing-os/product-context.md',
    'templates/marketing-os/scoreboard.md',
    'templates/marketing-os/weekly-review.md',
    'templates/marketing-os/workflow-plan.md',
    'examples/social-post-library.csv',
    'examples/social-posts/README.md',
    'examples/social-posts/30-day-posting-calendar.csv',
    'examples/social-posts/launch-week.md',
    'examples/social-posts/category-stacks.md',
    'examples/social-posts/skills-posts.md',
    'examples/social-posts/integration-posts.md',
    'examples/social-posts/cli-tool-posts.md',
    'examples/marketing-os-command-center.md', 'tools/REGISTRY.md', 'tools/clis/README.md',
  ].filter(exists)

  const linkPattern = /\[[^\]]+\]\(([^)]+)\)/g
  for (const file of files) {
    const text = read(file)
    let match
    while ((match = linkPattern.exec(text))) {
      let target = match[1].trim()
      if (!target || target.startsWith('#')) continue
      if (/^[a-z]+:/i.test(target)) continue
      if (target.startsWith('mailto:')) continue
      target = target.split('#')[0]
      if (!target) continue
      const resolved = path.resolve(root, path.dirname(file), target)
      if (!resolved.startsWith(root)) continue
      if (!fs.existsSync(resolved)) fail(`${file} has broken local link: ${match[1]}`)
    }
  }
}

function main() {
  const skillCount = validateSkills()
  const integrationFiles = listFiles('tools/integrations', name => name.endsWith('.md') && name !== 'bit-integrations-registry.md')
  const cliFiles = listFiles('tools/clis', name => name.endsWith('.js'))
  const integrationCount = integrationFiles.length
  const cliCount = cliFiles.length

  validateToolRegistry(integrationCount, cliCount)
  validateCliReadme(cliFiles)
  validateCliSyntax(cliFiles)
  validateNodeSyntax(['scripts/generate-marketing-os-dashboard.js', 'scripts/generate-marketing-os-index.js', 'scripts/init-marketing-os.js', 'scripts/print-marketing-os-summary.js', 'scripts/review-marketing-os-week.js', 'scripts/run-marketing-os-workflow.js', 'scripts/snapshot-marketing-os.js', 'scripts/status-marketing-os.js', 'scripts/test-claude-code-package.js'])
  validateDocs(skillCount, integrationCount, cliCount)
  validateBranding()
  validateRequiredFiles()
  validateSocialPosts(skillCount, integrationCount, cliCount)
  validateMarketingOsInitializer()
  validateMarketingOsDashboard()
  validateMarketingOsOutcomeIndex()
  validateClaudeCodeSmoke()
  validateNoArtifacts()
  validateLocalLinks()

  if (failures.length) {
    console.error('Validation failed:')
    for (const item of failures) console.error(`- ${item}`)
    process.exit(1)
  }

  console.log(`Validation passed: ${skillCount} skills, ${integrationCount} integration guides, ${cliCount} CLI tools.`)
}

main()
