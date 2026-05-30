# Getting Started

Use this guide when you want the fastest path from install to a useful Marketing Skills OS workflow.

The project is branded as Marketing Skills OS. The install path remains `scayver/marketing-skills` for compatibility.

## 10-Minute Quickstart

### 1. Install Marketing Skills OS

```bash
npx skills add scayver/marketing-skills
```

### 2. Initialize the local command center

From this repo, create a `.marketing-os/` workspace inside the project you want to operate.

```bash
npm run os:init -- --target ../my-project
```

This creates:

- `.marketing-os/product-context.md`.
- `.marketing-os/command-center.md`.
- `.marketing-os/scoreboard.md`.
- `.marketing-os/compliance-checklist.md`.
- `.marketing-os/workflows/`.
- Review and snapshot templates.

### 3. Fill the product context

Open `.marketing-os/product-context.md` in your target project.

Fill the minimum fields before asking an agent to create assets:

- Product name.
- Product category.
- ICP or buyer segment.
- Primary offer.
- Primary conversion goal.
- Core pain.
- Desired outcome.
- Main objection.
- Proof points.
- Constraints.

If this file is still blank, the agent should pause and run `product-marketing` first.

### 4. Pick a workflow

Use one of the workflows below, or ask your agent to choose.

```bash
npm run os:run -- --target ../my-project --workflow saas-launch --force
```

### 5. Ask your agent to execute

Start with this prompt:

```text
Use the marketing-os skill. Read .marketing-os/product-context.md, .marketing-os/active-workflow.md, .marketing-os/scoreboard.md, and .marketing-os/compliance-checklist.md. Confirm whether product context is ready. If it is ready, produce the first concrete deliverable for the active workflow and name the skill, integration guide, CLI helper, and metric you used.
```

## First-Run Checklist

- [ ] Install the repo with `npx skills add scayver/marketing-skills`.
- [ ] Run `npm run os:init -- --target ../my-project`.
- [ ] Fill `.marketing-os/product-context.md`.
- [ ] Review `.marketing-os/compliance-checklist.md`.
- [ ] Choose one workflow.
- [ ] Run `npm run os:run`.
- [ ] Ask the agent to produce one deliverable, not a full campaign universe.
- [ ] Review the metric connected to that deliverable.
- [ ] Save a snapshot with `npm run os:snapshot`.
- [ ] Run a weekly review with `npm run os:review`.

## Choose Your Workflow

| Goal | Workflow | Start With | Best First Deliverable |
|------|----------|------------|------------------------|
| Launch a product, feature, repo, or AI tool | `saas-launch` | `product-marketing`, `launch` | Positioning summary and launch scoreboard |
| Build developer-intent prospect lists | `developer-intent-outbound` | `prospect-research` | ICP filter and GitHub intent signal plan |
| Grow organic traffic | `seo-growth-engine` | `seo-content-strategy` | Topic cluster map |
| Improve conversion | `conversion-lab` | `analytics`, `cro` | Funnel diagnosis and test backlog |
| Grow local leads | `local-smb-growth` | `local-seo` | Location page plan and website status review |
| Increase ecommerce revenue | `ecommerce-revenue` | `ecommerce-content` | Product page and email improvement plan |
| Reduce churn and increase advocacy | `retention-and-advocacy` | `churn-prevention` | Churn reason map and lifecycle action plan |

## Quickstart Prompts

### SaaS Launch

```text
Use the marketing-os skill. Our workflow is SaaS Launch. Read product context first. Then create a launch positioning summary, launch scoreboard, and first 7-day action plan. Use product-marketing, launch, landing-page-cro, email-marketing, and analytics where relevant.
```

### Developer-Intent Outbound

```text
Use the marketing-os skill. Our workflow is Developer-Intent Outbound. Read product context first. Then define the ICP filter, developer-intent signals, account qualification rules, outreach guardrails, and first prospect research plan. Use prospect-research, cold-email, sales-enablement, revops, and the github integration guide where relevant.
```

### SEO Growth Engine

```text
Use the marketing-os skill. Our workflow is SEO Growth Engine. Read product context first. Then create a topic cluster map, first content brief, internal link plan, and measurement plan. Use seo-content-strategy, seo-blog-writer, schema, ai-seo, and analytics where relevant.
```

### Conversion Lab

```text
Use the marketing-os skill. Our workflow is Conversion Lab. Read product context first. Then identify the main conversion bottleneck, write three hypotheses, prioritize the tests, and create the first page or funnel improvement plan. Use analytics, cro, landing-page-cro, copywriting, and ab-testing where relevant.
```

### Local SMB Growth

```text
Use the marketing-os skill. Our workflow is Local SMB Growth. Read product context first. Then classify the current website status, define the highest-value local service or city page, list review and GBP improvements, and create the first local lead-generation action plan. Use local-seo, customer-service, seo-content-strategy, and analytics where relevant.
```

### Ecommerce Revenue

```text
Use the marketing-os skill. Our workflow is Ecommerce Revenue. Read product context first. Then identify the highest-impact product page, rewrite the main product benefits, propose bundle or upsell copy, and outline the first revenue email. Use ecommerce-content, email-marketing, ads, landing-page-cro, and analytics where relevant.
```

### Retention And Advocacy

```text
Use the marketing-os skill. Our workflow is Retention and Advocacy. Read product context first. Then map churn reasons, identify one onboarding improvement, one lifecycle email, one support content asset, and one referral or advocacy motion. Use churn-prevention, onboarding, customer-service, emails, referrals, and analytics where relevant.
```

## Useful Commands

```bash
npm run os:summary
npm run os:init -- --target ../my-project
npm run os:run -- --target ../my-project --workflow saas-launch --force
npm run os:status -- --target ../my-project
npm run os:snapshot -- --target ../my-project --date 2026-05-30 --force
npm run os:review -- --target ../my-project --date 2026-05-30 --force
npm run os:dashboard
```

## Dashboard Preview

Use these generated files to browse the OS before choosing a workflow:

- [`MARKETING_OS_DASHBOARD.md`](MARKETING_OS_DASHBOARD.md).
- [`marketing-os-dashboard.html`](marketing-os-dashboard.html).
- [`MARKETING_OS_OUTCOME_INDEX.md`](MARKETING_OS_OUTCOME_INDEX.md).

The Markdown dashboard works in GitHub. The HTML dashboard opens directly in a browser.

## Troubleshooting

### The agent gives generic advice

Check whether `.marketing-os/product-context.md` is filled. If it is blank, ask the agent to run `product-marketing` first.

### The agent chooses the wrong skill

Ask it to use `marketing-os` and read `.marketing-os/active-workflow.md` before producing output.

### The workflow file is missing

Run:

```bash
npm run os:init -- --target ../my-project --force
```

Then activate a workflow again:

```bash
npm run os:run -- --target ../my-project --workflow saas-launch --force
```

### The dashboard is stale

Run:

```bash
npm run os:dashboard
npm run os:index
```

Then verify:

```bash
npm run os:dashboard:check
npm run os:index:check
```

### Validation fails

Run:

```bash
npm run validate
```

Read the failure message first. The validator usually tells you the exact missing file, stale generated output, broken local link, or count mismatch.

## Next Step

Run `product-marketing` once, fill `.marketing-os/product-context.md`, then activate one workflow. Do not start with seven campaigns. Start with one workflow, one deliverable, and one metric.
