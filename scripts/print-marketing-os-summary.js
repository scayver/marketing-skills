#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'docs/MARKETING_OS_MANIFEST.json'), 'utf8'))

  console.log(`${manifest.name} (${manifest.version})`)
console.log(`Install: ${manifest.install}`)
console.log(`Skills: ${manifest.counts.skills}`)
console.log(`Integration guides: ${manifest.counts.integration_guides}`)
console.log(`CLI tools: ${manifest.counts.cli_tools}`)
console.log('Workspace initializer: npm run os:init -- --target <project>')
console.log('\nWorkflows:')
for (const workflow of manifest.workflows) {
  console.log(`- ${workflow.name}: ${workflow.primary_skill}`)
}
