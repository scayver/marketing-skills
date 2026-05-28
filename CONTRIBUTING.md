# Contributing

Thanks for helping improve `marketing-skills`.

This repo has two main contribution types:

- Skills in `skills/<skill-name>/SKILL.md`.
- Tool references in `tools/integrations/<tool-name>.md`.

## Skill Contributions

Every skill must use this structure:

```yaml
---
name: skill-name
description: >
  Clear activation guidance and trigger phrases.
---
```

After the frontmatter, include:

- Mandatory content standards.
- Objective.
- Core capabilities.
- Output format.
- Process.
- Tone options where useful.
- Add-ons and repurposing options where useful.
- Relevant related skills.

The folder name and `name` value must match exactly.

## Tool Reference Contributions

Every tool reference should be platform-independent. Do not write it as a connector-specific note.

Required sections:

- Description.
- `## Capabilities`.
- `## Authentication`.
- `## Common Agent Operations`.
- `## Key Fields` or `## Key Metrics`.
- `## Parameters`, `## Modes`, or equivalent.
- `## When to Use`.
- `## Rate Limits`.
- `## Relevant Skills`.

Use real API endpoints, official CLI commands, SDK notes, WordPress REST routes, webhook patterns, or documented plugin hooks where available.

## Documentation Contributions

When counts change, update:

- `README.md`.
- `AGENTS.md`.
- `VERSIONS.md`.
- `package.json`.
- `tools/REGISTRY.md`.

## Before You Commit

Run the checks in [`VALIDATION.md`](VALIDATION.md).

Keep commit messages short and specific.
