# Validation Checklist

Run these checks before committing changes.

## Skill Count

```bash
find skills -mindepth 2 -maxdepth 2 -name SKILL.md | wc -l
```

Expected current count: `58`.

## Integration Guide Count

```bash
find tools/integrations -maxdepth 1 -name '*.md' ! -iname '*registry*' | wc -l
```

Expected current count: `347`.

## CLI Count

```bash
find tools/clis -maxdepth 1 -name '*.js' | wc -l
```

Expected current count: `62`.

## Skill Frontmatter Check

```bash
python3 - <<'PY'
from pathlib import Path
import re

root = Path('.')
issues = []

for file in sorted((root / 'skills').glob('*/SKILL.md')):
    text = file.read_text(errors='replace')
    if not text.startswith('---'):
        issues.append((file, 'missing frontmatter'))
        continue
    frontmatter = text.split('---', 2)[1]
    name = re.search(r'^name:\s*(.+)$', frontmatter, re.M)
    desc = re.search(r'^description:', frontmatter, re.M)
    if not name:
        issues.append((file, 'missing name'))
    elif name.group(1).strip().strip('"\'') != file.parent.name:
        issues.append((file, 'name does not match folder'))
    if not desc:
        issues.append((file, 'missing description'))

print('issues', len(issues))
for issue in issues:
    print(issue)
PY
```

Expected result: `issues 0`.

## Integration Format Check

```bash
python3 - <<'PY'
from pathlib import Path

required = [
    '## Capabilities',
    '## Authentication',
    '## Common Agent Operations',
    '## When to Use',
    '## Rate Limits',
    '## Relevant Skills',
]

missing = []

for file in sorted(Path('tools/integrations').glob('*.md')):
    if 'registry' in file.name.lower():
        continue
    text = file.read_text(errors='replace')
    absent = [section for section in required if section not in text]
    if absent:
        missing.append((file.name, absent))

print('missing required sections', len(missing))
for item in missing:
    print(item)
PY
```

Expected result: `missing required sections 0`.

## Registry Link Check

```bash
python3 - <<'PY'
from pathlib import Path
import re

root = Path('.')
missing = []
registry = (root / 'tools/REGISTRY.md').read_text(errors='replace')

for match in re.finditer(r'\((integrations/[^)]+\.md)\)', registry):
    if not (root / 'tools' / match.group(1)).exists():
        missing.append(match.group(1))

print('missing registry targets', len(missing))
for item in missing:
    print(item)
PY
```

Expected result: `missing registry targets 0`.


## Automated Validation

Run the repository validator before every pull request.

```bash
npm run validate
```

The command checks skill frontmatter, required skill sections, integration registry coverage, CLI syntax, local documentation links, package counts, and required community files. GitHub Actions runs the same check on push and pull request events.
