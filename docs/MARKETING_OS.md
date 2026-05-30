# Marketing Skills OS

Marketing Skills OS is an open-source Marketing OS for AI agents. The project keeps the `scayver/marketing-skills` install path for compatibility, but the public product is the OS.

A normal prompt collection gives an agent isolated instructions. Marketing Skills OS gives the agent a way to decide what matters, choose the right workflow, use the right tool reference, create the right asset, measure the result, and improve the system next week.

## Definition

A Marketing OS is a repeatable system for turning strategy into demand, demand into pipeline, pipeline into revenue, and customer learning back into better strategy.

The repo includes the core building blocks:

| Layer | What It Contains |
|-------|------------------|
| Skills | Domain workflows for strategy, SEO, CRO, email, social, sales, research, retention, and support |
| Tools | Standalone integration guides for platform APIs, authentication, fields, operations, and limits |
| CLIs | Scriptable helpers for common marketing platforms |
| Docs | Demo, compliance, launch, roadmap, validation, and social content systems |
| Validation | Local and CI checks that keep the package coherent as it grows |

## Operating Model

The OS follows a simple loop.

```text
Context -> Strategy -> Campaign -> Tooling -> Measurement -> Learning -> Next Action
```

### 1. Context

The OS starts with `product-marketing`.

That skill defines the ICP, positioning, value proposition, messaging hierarchy, competitive difference, product narrative, and use cases. Without this layer, every other workflow has to guess.

Before an agent produces campaign assets, it should check whether `.marketing-os/product-context.md` is populated. If that file still contains blank template fields, the active workflow should pause and route to `product-marketing` first.

### 2. Strategy

The strategy layer chooses where growth should come from.

Useful skills:

- `business-strategy`.
- `customer-research`.
- `marketing-ideas`.
- `marketing-psychology`.
- `brand-storytelling`.
- `pricing`.

### 3. Campaign

The campaign layer creates the market-facing assets.

Useful skills:

- `launch`.
- `seo-content-strategy`.
- `seo-blog-writer`.
- `landing-page-cro`.
- `copywriting`.
- `email-marketing`.
- `linkedin-strategy`.
- `pr-communications`.
- `social-content-planner`.
- `ads`.

### 4. Tooling

The tooling layer connects the plan to platforms.

Useful files:

- `tools/REGISTRY.md`.
- `tools/integrations/*.md`.
- `tools/clis/*.js`.

Outcome routing:

- `docs/MARKETING_OS_OUTCOME_INDEX.md` maps business goals to workflows, skills, integrations, CLI helpers, deliverables, metrics, and start prompts.
- `docs/MARKETING_OS_DASHBOARD.md` and `docs/marketing-os-dashboard.html` provide generated workflow dashboards for GitHub and static browsing.

The agent should read platform guides before making API recommendations. It should use CLI helpers when the task needs scriptable output.

### 5. Measurement

The measurement layer decides what worked.

Useful skills:

- `analytics`.
- `ab-testing`.
- `cro`.
- `revops`.
- `seo-audit`.

Useful tools:

- `ga4`.
- `google-search-console`.
- `mixpanel`.
- `amplitude`.
- `segment`.
- `hotjar`.

### 6. Learning

The learning layer updates the context. This is where the OS becomes a system instead of a pile of tasks.

Inputs:

- Customer objections.
- Support tickets.
- Campaign results.
- SEO rankings.
- Email replies.
- Sales call notes.
- Churn reasons.
- Reviews.
- Community questions.

Outputs:

- Updated ICP notes.
- Better messaging.
- Stronger offer language.
- New content ideas.
- New objections for sales enablement.
- New experiments.

## OS Scoreboard

Use this scoreboard for ongoing work.

| Area | Leading Metric | Lagging Metric | Review Cadence |
|------|----------------|----------------|----------------|
| Awareness | Impressions, search visibility, social reach | Branded search, direct traffic | Weekly |
| Acquisition | Visitors, directory clicks, ad clicks | Signups, leads, demos | Weekly |
| Activation | First key action, onboarding completion | Activated accounts | Weekly |
| Conversion | CTA clicks, form completion, checkout starts | Customers, revenue | Weekly |
| Pipeline | Replies, meetings booked, SQLs | Closed-won deals | Weekly |
| Retention | Feature usage, support volume, health score | Churn, expansion, referrals | Monthly |
| Content | Briefs shipped, posts published | Organic traffic, assisted conversions | Monthly |

## Agent Routing Pattern

When the user gives a broad request, the agent should not jump straight to output. It should route the request.

| User Request | First Skill | Follow-Up Skills |
|--------------|-------------|------------------|
| We need more customers | `marketing-os` | `product-marketing`, `business-strategy`, `analytics` |
| Launch this product | `launch` | `product-marketing`, `landing-page-cro`, `email-marketing`, `pr-communications` |
| Get more organic traffic | `seo-content-strategy` | `seo-blog-writer`, `schema`, `ai-seo`, `content-repurposing` |
| Build a prospect list | `prospect-research` | `cold-email`, `linkedin-strategy`, `revops` |
| Improve our page | `landing-page-cro` | `copywriting`, `cro`, `ab-testing` |
| Reduce churn | `churn-prevention` | `onboarding`, `customer-service`, `emails`, `analytics` |

## What Makes This an OS

The repo becomes a true OS when every major workflow has these pieces:

1. A skill that defines the expert process.
2. A tool guide that explains platform execution.
3. A CLI or API pattern where useful.
4. A measurement path.
5. A reusable output artifact.
6. A feedback loop into the product marketing context.

## Current Status

| Component | Status |
|-----------|--------|
| Skills | Strong base with 59 skills including `marketing-os` and the operating workflow assets |
| Integration guides | Strong base with 347 standalone platform references |
| CLI tools | Strong base with 62 JavaScript helpers |
| Validation | Local validator and GitHub Actions workflow exist |
| Social launch system | Generated CSV and guide exist |
| OS orchestration | Added through `marketing-os` and these docs |
| Local OS initializer | Added through `scripts/init-marketing-os.js` and `templates/marketing-os/` |
| Dashboard layer | Added through `docs/MARKETING_OS_DASHBOARD.md`, `docs/marketing-os-dashboard.html`, and `scripts/generate-marketing-os-dashboard.js` |

## Next Build Layer

The dashboard layer is now implemented as generated Markdown and static HTML. The next meaningful layer is operational automation that can regenerate broader repo indexes and optional external dashboard templates.

The local commands now exist:

```bash
npm run os:init -- --target ../my-project
npm run os:run -- --target ../my-project --workflow saas-launch --force
npm run os:review -- --target ../my-project --date 2026-05-28 --force
npm run os:status -- --target ../my-project
npm run os:snapshot -- --target ../my-project --date 2026-05-28 --force
npm run os:dashboard
```

Implemented dashboard artifacts:

- `docs/MARKETING_OS_DASHBOARD.md` for GitHub-readable dashboard navigation.
- `docs/marketing-os-dashboard.html` for static browsing without a dev server.
- `scripts/generate-marketing-os-dashboard.js` to regenerate both files from the manifest and local inventory.

Recommended next artifacts:

- `scripts/generate-index.js` to regenerate README tables and social posts from source files.
- Optional starter dashboards for Airtable, Notion, and Google Sheets.
