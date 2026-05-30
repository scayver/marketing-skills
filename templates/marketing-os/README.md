# Marketing Skills OS Workspace

This folder is the working command center for running Marketing Skills OS through AI agents.

Compatibility note: the public brand is Marketing Skills OS, and the install path remains `scayver/marketing-skills`.

Use it to keep strategy, campaigns, experiments, scorecards, compliance notes, and customer learning in one place.

## Workflow activation

After initialization, activate a workflow from the repo root that contains Marketing Skills OS:

```bash
npm run os:run -- --target ../my-project --workflow saas-launch --force
```

This writes `.marketing-os/active-workflow.md` with the selected workflow, skill stack, platform guides, CLI helpers, deliverables, metrics, checklist, and agent prompt.

Close the weekly loop with a review artifact:

```bash
npm run os:review -- --target ../my-project --date 2026-05-28 --force
```

This writes `.marketing-os/reviews/YYYY-MM-DD-weekly-review.md` and updates `.marketing-os/current-weekly-review.md`.

Check the workspace status at any time:

```bash
npm run os:status -- --target ../my-project
```

Persist the current state for future agent sessions:

```bash
npm run os:snapshot -- --target ../my-project --date 2026-05-28 --force
```

## Recommended weekly loop

1. Complete `product-context.md` before running any workflow.
2. Update `product-context.md` with new positioning, ICP, objections, and proof.
3. Choose one active workflow from `workflows/`.
4. Plan the week in `command-center.md`.
5. Track numbers in `scoreboard.md`.
6. Add tests to `experiment-backlog.md`.
7. Capture lessons in `customer-learning-log.md`.
8. Roll the lesson back into product, copy, content, sales, or support.

## Agent install

```bash
npx skills add scayver/marketing-skills
```

## Good first prompt

```text
Use the marketing-os skill. Read .marketing-os/product-context.md, .marketing-os/command-center.md, and .marketing-os/scoreboard.md. First tell me whether product context is ready. If it is blank, use product-marketing to complete it before recommending a workflow. If it is ready, recommend the highest leverage workflow for this week, then produce the first concrete asset.
```
