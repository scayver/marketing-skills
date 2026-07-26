#!/usr/bin/env node

const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')
const schemaRoot = path.join(root, 'schemas', 'marketing-os')
const manifestPath = path.join(root, 'docs', 'MARKETING_OS_MANIFEST.json')
const requiredSchemas = [
  'skill.schema.json',
  'workflow.schema.json',
  'integration.schema.json',
  'cli-tool.schema.json',
  'run.schema.json',
  'decision.schema.json',
  'approval.schema.json',
  'scorecard.schema.json',
  'metric.schema.json',
  'artifact.schema.json',
  'lineage.schema.json',
  'module.schema.json',
]

const failures = []

function fail(message) { failures.push(message) }
function readJson(file) { return JSON.parse(fs.readFileSync(file, 'utf8')) }

function validateSchemas() {
  for (const file of requiredSchemas) {
    const fullPath = path.join(schemaRoot, file)
    if (!fs.existsSync(fullPath)) { fail(`Missing schema: schemas/marketing-os/${file}`); continue }
    try {
      const schema = readJson(fullPath)
      if (schema.$schema !== 'https://json-schema.org/draft/2020-12/schema') fail(`${file} must use JSON Schema 2020-12`)
      if (!schema.$id) fail(`${file} must declare $id`)
      if (schema.type !== 'object') fail(`${file} must declare object type`)
      if (!schema.properties || typeof schema.properties !== 'object') fail(`${file} must declare properties`)
    } catch (error) {
      fail(`Invalid JSON schema ${file}: ${error.message}`)
    }
  }
}

function validateManifest() {
  let manifest
  try { manifest = readJson(manifestPath) } catch (error) { fail(`Invalid Marketing OS manifest: ${error.message}`); return }
  if (!manifest.version) fail('Marketing OS manifest must declare a version')
  if (!manifest.repo || !manifest.install) fail('Marketing OS manifest must declare repo and install')
  for (const workflow of manifest.workflows || []) {
    const required = ['id', 'name', 'goal', 'stage', 'primary_skill', 'skills', 'integrations', 'clis', 'deliverables', 'metrics']
    for (const key of required) if (!(key in workflow)) fail(`Workflow ${workflow.id || '<unknown>'} is missing ${key}`)
    for (const key of ['skills', 'integrations', 'clis', 'deliverables', 'metrics']) {
      if (!Array.isArray(workflow[key])) fail(`Workflow ${workflow.id || '<unknown>'} field ${key} must be an array`)
    }
  }
}

validateSchemas()
validateManifest()

if (failures.length) {
  console.error('Marketing OS contract validation failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log(`Marketing OS contracts passed: ${requiredSchemas.length} schemas and manifest validation.`)
