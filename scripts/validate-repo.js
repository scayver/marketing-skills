#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
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

function validateCliSyntax(cliFiles) {
  for (const file of cliFiles) {
    const scriptPath = path.join(root, 'tools/clis', file)
    const source = fs.readFileSync(scriptPath, 'utf8').replace(/^#!.*\n/, '')
    try {
      new vm.Script(source, { filename: rel(scriptPath) })
    } catch (error) {
      fail(`${rel(scriptPath)} has invalid JavaScript syntax: ${error.message}`)
    }
  }
}

function validateDocs(skillCount, integrationCount, cliCount) {
  expectContains('package.json', `"version": "1.4.0"`)
  expectContains('package.json', `${skillCount} marketing and growth skills plus ${integrationCount} standalone integration docs`)
  expectContains('README.md', `${skillCount} specialized marketing and growth skills`)
  expectContains('README.md', `skills-${skillCount}-orange`)
  expectContains('README.md', `integration%20guides-${integrationCount}-purple`)
  expectContains('README.md', `**All ${skillCount} skills at once:**`)
  expectContains('README.md', `clis/           ${cliCount} JavaScript CLI tools`)
  expectContains('README.md', `integrations/   ${integrationCount} standalone platform integration guides`)
  expectContains('AGENTS.md', `contains ${skillCount} reusable marketing and growth skills`)
  expectContains('AGENTS.md', `# ${cliCount} JavaScript CLI tools`)
  expectContains('AGENTS.md', `# ${integrationCount} standalone platform guides`)
  expectContains('docs/LAUNCH_KIT.md', `${skillCount} marketing and growth skills`)
  expectContains('docs/LAUNCH_KIT.md', `${integrationCount} standalone integration guides`)
  expectContains('docs/LAUNCH_KIT.md', `${cliCount} JavaScript CLI tools`)
  expectContains('VALIDATION.md', `Expected current count: \`${skillCount}\`.`)
  expectContains('VALIDATION.md', `Expected current count: \`${integrationCount}\`.`)
  expectContains('VALIDATION.md', `Expected current count: \`${cliCount}\`.`)
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
    'docs/DEMO.md',
    'docs/FAQ.md',
    'docs/LAUNCH_KIT.md',
    'docs/ROADMAP.md',
    'docs/SHOWCASE.md',
    'examples/README.md',
  ]
  for (const file of required) {
    if (!exists(file)) fail(`${file} is missing`)
  }
}

function validateNoArtifacts() {
  if (exists('tools/integrations/bit-integrations')) fail('tools/integrations/bit-integrations directory should not exist')
  if (exists('{skills')) fail('empty generated {skills directory should not exist')
}

function validateLocalLinks() {
  const files = [
    'README.md', 'AGENTS.md', 'CONTRIBUTING.md', 'SECURITY.md', 'VALIDATION.md', 'VERSIONS.md',
    'docs/COMPLIANCE.md', 'docs/DEMO.md', 'docs/FAQ.md', 'docs/LAUNCH_KIT.md', 'docs/ROADMAP.md', 'docs/SHOWCASE.md',
    'examples/README.md', 'tools/REGISTRY.md', 'tools/clis/README.md',
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
  validateDocs(skillCount, integrationCount, cliCount)
  validateRequiredFiles()
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
