# Contributing

Thanks for helping improve Marketing Skills OS.

Compatibility note: the package name and install path remain `marketing-skills` and `scayver/marketing-skills`.

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
- `CHANGELOG.md`.
- `package.json`.
- `tools/REGISTRY.md`.

## Contribution Templates

Use these checklists before opening a pull request.

### New Skill

- Create `skills/<skill-name>/SKILL.md`.
- Use YAML frontmatter with `name` matching the folder exactly.
- Write a specific `description` with activation triggers.
- Include `## Mandatory Content Standards`.
- Add objective, process, output format, guardrails, and related skills.
- Update `README.md`, `AGENTS.md`, `CHANGELOG.md`, `package.json`, and `docs/MARKETING_OS_MANIFEST.json` when counts or routing change.
- Add a row to `examples/social-post-library.csv`.
- Add a local post to `examples/social-posts/skills-posts.md`.

### New Integration Guide

- Create `tools/integrations/<tool-name>.md`.
- Keep it platform-independent.
- Include capabilities, authentication, common agent operations, key fields or metrics, parameters or modes, when to use, rate limits, and relevant skills.
- Add official docs links when available.
- Avoid destructive API examples unless they are clearly marked and agent-safe.
- Regenerate `tools/REGISTRY.md` when the guide count changes.

### New CLI Helper

- Create `tools/clis/<tool-name>.js`.
- Use zero dependencies unless the reason is documented.
- Support predictable JSON output for agent use.
- Provide clear missing-credential errors.
- Add usage examples to `tools/clis/README.md`.
- Add syntax-safe code that passes `npm run validate`.

### New Example

- Add examples that show a full workflow, not a one-off prompt.
- Include business context, starting prompt, skills used, tool guides used, CLI helpers used, deliverables, metrics, and next action.
- Link examples from `docs/EXAMPLE_WORKFLOWS.md` or `examples/README.md` when useful.

## Before You Commit

Run the checks in [`VALIDATION.md`](VALIDATION.md).

Keep commit messages short and specific.
