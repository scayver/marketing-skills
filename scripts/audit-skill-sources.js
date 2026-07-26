#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const checkMode = process.argv.includes('--check');

const locations = [
  { key: 'public', label: 'Canonical public source', path: path.join(repoRoot, 'skills') },
  { key: 'private-aios', label: 'Private AIOS workflow layer', path: path.resolve(repoRoot, '../../AIOS/02 Skills'), kind: 'vault-notes' },
  { key: 'active-runtime', label: 'Shared active runtime', path: path.resolve(repoRoot, '../../Skills/active') },
  { key: 'agents-runtime', label: 'Project agent runtime cache', path: path.resolve(repoRoot, '../.agents/skills') },
  { key: 'legacy-parallel', label: 'Legacy parallel project', path: path.resolve(repoRoot, '../Claude Skills/skills') },
];

function listEntries(location) {
  if (!fs.existsSync(location.path)) return [];
  return fs.readdirSync(location.path, { withFileTypes: true })
    .filter((entry) => location.kind === 'vault-notes' ? entry.isFile() && entry.name.endsWith('.md') : entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function overlap(a, b) {
  const right = new Set(b);
  return a.filter((name) => right.has(name));
}

const inventory = new Map(locations.map((location) => [location.key, listEntries(location)]));
const publicSkills = inventory.get('public');
const checks = [
  ['canonical source documentation', fs.existsSync(path.join(repoRoot, 'docs/SKILL_SOURCES.md'))],
  ['public skill directory', fs.existsSync(path.join(repoRoot, 'skills'))],
  ['unique public skill slugs', new Set(publicSkills).size === publicSkills.length],
];

console.log('# Marketing Skills OS Source Audit\n');
console.log(`Repository: ${repoRoot}`);
console.log(`Mode: ${checkMode ? 'check' : 'report'}\n`);
console.log('| Layer | Path | Entries | Status |');
console.log('|-------|------|---------|--------|');

for (const location of locations) {
  const entries = inventory.get(location.key);
  const exists = fs.existsSync(location.path);
  console.log(`| ${location.label} | \`${location.path}\` | ${entries.length} | ${exists ? 'present' : 'not present on this machine'} |`);
}

console.log('\n## Expected Runtime Overlap\n');
console.log('| Compared layer | Shared slugs with public source |');
console.log('|----------------|----------------------------------|');
for (const key of ['active-runtime', 'agents-runtime', 'legacy-parallel']) {
  const location = locations.find((item) => item.key === key);
  console.log(`| ${location.label} | ${overlap(publicSkills, inventory.get(key)).length} |`);
}

console.log('\n## Checks\n');
for (const [label, pass] of checks) console.log(`- ${pass ? 'PASS' : 'FAIL'}: ${label}`);

if (checkMode && checks.some(([, pass]) => !pass)) process.exitCode = 1;
