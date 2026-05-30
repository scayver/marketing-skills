# Claude Code Testing

Use this checklist when you want to test Marketing Skills OS inside Claude Code before committing or publishing changes.

Compatibility note: the package name and install path remain `marketing-skills` and `scayver/marketing-skills`.

## Automated Smoke Test

Run:

```bash
npm run test:claude-code
```

This creates a temporary Claude Code-style project, installs every skill into both expected local skill folders, runs the Marketing Skills OS command loop, and verifies generated dashboard files are current.

The test checks:

- All skills copy into `.claude/skills/`.
- All skills copy into `.agents/skills/`.
- `marketing-os`, `product-marketing`, and `prospect-research` are discoverable from both locations.
- `npm run os:dashboard:check` passes.
- `npm run os:index:check` passes.
- `npm run os:init` creates a `.marketing-os/` workspace.
- All 7 Marketing Skills OS workflows can be activated with `npm run os:run`.
- `npm run os:review` creates a weekly review.
- `npm run os:snapshot` creates state files.
- `npm run os:status` renders the workspace status.

Expected result:

```text
Claude Code smoke test passed: 71 skills installed, 7 workflows exercised.
```

## Keep the Test Project for Manual Claude Code Review

Run:

```bash
npm run test:claude-code -- --keep
```

The command prints the generated test project path and the manual prompt file:

```text
Manual prompts: /private/tmp/.../CLAUDE_CODE_SMOKE_PROMPTS.md
```

Open that generated folder in Claude Code and run the prompts in `CLAUDE_CODE_SMOKE_PROMPTS.md`.

## Use a Fixed Test Folder

Run:

```bash
npm run test:claude-code -- --target /private/tmp/marketing-skills-claude-code --keep
```

Then open the folder in Claude Code:

```bash
cd /private/tmp/marketing-skills-claude-code
claude
```

## Manual Claude Code Prompts

After opening the generated test project in Claude Code, run these prompts.

### Skill Discovery

```text
Read .claude/skills/marketing-os/SKILL.md and tell me which Marketing OS workflow I should use for launching a SaaS product.
```

Expected result: Claude Code references the `marketing-os` skill, reads the local skill file, and recommends the SaaS Launch workflow.

### Product Context

```text
Use product-marketing to create a positioning context for a privacy-first analytics tool for indie SaaS founders.
```

Expected result: Claude Code follows the `product-marketing` skill structure and produces ICP, positioning, value proposition, messaging hierarchy, and competitive differentiation.

### Active Workflow

```text
Use the marketing-os skill. Read .marketing-os/active-workflow.md, .marketing-os/product-context.md, .marketing-os/scoreboard.md, and .marketing-os/compliance-checklist.md. Produce the next concrete deliverable with one measurable metric.
```

Expected result: Claude Code checks whether `product-context.md` is populated before producing assets. If the file is still blank, it routes to `product-marketing` first. If context is ready, it uses the active workflow and names the skill stack, integration guides, CLI helpers, deliverable, and metric.

### Tool Reference Awareness

```text
For the active workflow, identify the related integration guides and CLI helpers. Do not invent APIs. Tell me which local files you would read first.
```

Expected result: Claude Code points back to local files from the Marketing OS workflow and avoids connector-specific assumptions.

## Full Pre-Commit Test Sequence

Run:

```bash
npm run os:dashboard
npm run os:index
npm run os:dashboard:check
npm run os:index:check
npm run test:claude-code
npm run validate
```

Commit only after every command passes.
