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

Start with [`GETTING_STARTED.md`](GETTING_STARTED.md) if you want the shortest path from install to a useful workflow.

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

## Workflow Reference

Use this table when you know the business goal but do not know which workflow to activate first.

| Workflow | Goal | Primary Skill | Core Deliverables | Core Metrics |
|----------|------|---------------|-------------------|--------------|
| SaaS Launch | Launch a SaaS product, feature, AI tool, open-source project, or agent product | `marketing-os` | Positioning context, launch plan, launch page, email sequence, social posts, press announcement, tracking plan | Visitors, waitlist signups, trial starts, activation, demos, revenue |
| Developer-Intent Outbound | Build a prospect list from GitHub activity and turn it into compliant outbound | `prospect-research` | ICP filter, intent signal export, account list, decision-maker map, cold email sequence, CRM fields | Qualified accounts, reply rate, meetings booked, SQLs, pipeline value |
| SEO Growth Engine | Build organic traffic with content clusters, long-form posts, schema, and AI-search visibility | `seo-content-strategy` | Topic clusters, SEO briefs, blog posts, schema markup, AI-search snippets, repurposed social posts | Impressions, clicks, rankings, organic signups, assisted conversions |
| Conversion Lab | Improve landing page, signup, pricing, checkout, or upgrade conversion | `cro` | Funnel diagnosis, friction map, hypothesis backlog, page rewrite, test plan, scorecard | Conversion rate, CTA clicks, form completion, checkout starts, paid conversion |
| Local SMB Growth | Generate more local leads through local pages, reviews, and conversion fixes | `local-seo` | City page, service area page, GBP description, review replies, local post plan, lead tracking sheet | Map pack visibility, calls, form leads, reviews, bookings |
| Ecommerce Revenue | Improve product visibility, product page conversion, email revenue, paid ads, and repeat purchases | `ecommerce-content` | Product descriptions, category page copy, launch emails, ad variants, upsell copy, FAQ | Conversion rate, AOV, cart recovery, ROAS, repeat purchase rate |
| Retention and Advocacy | Reduce churn, improve onboarding, create customer education, and drive referrals | `churn-prevention` | Onboarding flow, save offers, support templates, lifecycle emails, referral program, education content | Activation, time-to-value, support volume, churn, referrals |

## Playbook Patterns

Use these playbook patterns when you need a complete operating sequence.

### SaaS Launch

| Step | Skill | Output | Tool References |
|------|-------|--------|-----------------|
| 1 | `product-marketing` | Positioning, ICP, value proposition | CRM, website, competitor tools |
| 2 | `launch` | Launch plan and checklist | Product launch channels, GitHub, email tools |
| 3 | `landing-page-cro` | Launch page copy and FAQ | GA4, Hotjar, forms |
| 4 | `email-marketing` | Waitlist and launch sequence | Mailchimp, Customer.io, ActiveCampaign |
| 5 | `linkedin-strategy` | Founder launch posts and DMs | LinkedIn and scheduling tools |
| 6 | `pr-communications` | Press release and media pitch | PR lists and newsroom pages |
| 7 | `analytics` | Launch dashboard | GA4, Search Console, Mixpanel |

### Developer-Intent Outbound

| Step | Skill or Tool | Output |
|------|---------------|--------|
| 1 | `product-marketing` | ICP and qualification rules |
| 2 | `prospect-research` | Account and developer-intent list |
| 3 | `github-prospects.js` | Stargazers, forks, and watchers export |
| 4 | `apollo`, `zoominfo`, `hunter`, `clay` | Contact and account enrichment guidance |
| 5 | `cold-email` | Trigger-based email sequence |
| 6 | `linkedin-strategy` | Connection and DM support |
| 7 | `revops` | CRM stages, routing, and reporting |

### SEO Growth

| Step | Skill | Output | Tool References |
|------|-------|--------|-----------------|
| 1 | `customer-research` | Audience language and pain points | Reviews, support tickets, forums |
| 2 | `seo-content-strategy` | Keyword clusters and briefs | Ahrefs, Semrush, DataForSEO |
| 3 | `seo-blog-writer` | Long-form article draft | Search Console, GA4 |
| 4 | `schema` | JSON-LD markup | Rich Results Test |
| 5 | `ai-seo` | AI answer optimization | AI search references |
| 6 | `content-repurposing` | LinkedIn, X, email, carousel assets | Social tools |

### Conversion Improvement

| Step | Skill | Output | Tool References |
|------|-------|--------|-----------------|
| 1 | `analytics` | Funnel and event diagnosis | GA4, Mixpanel, Segment |
| 2 | `cro` | Friction map and hypothesis backlog | Hotjar, Optimizely |
| 3 | `landing-page-cro` | Hero, benefits, CTA, FAQ rewrite | CMS, forms |
| 4 | `copywriting` | Page copy and messaging | Product context |
| 5 | `ab-testing` | Test design and sample size | Optimizely, analytics |

### Local SMB Growth

| Step | Skill | Output | Tool References |
|------|-------|--------|-----------------|
| 1 | `local-seo` | City page and GBP content | Google Business Profile |
| 2 | `prospect-research` | Google Maps research and website status tiers | Browser, local directories |
| 3 | `customer-service` | Review replies and support templates | Google reviews, help desk |
| 4 | `social-content-planner` | Local social posts | Facebook, Instagram |
| 5 | `analytics` | Lead tracking | GA4, forms, CRM |

### Ecommerce Revenue

| Step | Skill | Output | Tool References |
|------|-------|--------|-----------------|
| 1 | `ecommerce-content` | Product descriptions, category copy, comparison copy | Shopify, WooCommerce |
| 2 | `email-marketing` | Product launch and cart recovery emails | Klaviyo, Mailchimp |
| 3 | `ads` | Paid media plan | Meta Ads, Google Ads, TikTok Ads |
| 4 | `ad-creative` | Hook and ad variant bank | Ad platforms |
| 5 | `pricing` | Bundle, upsell, and offer structure | Payment tools |
| 6 | `analytics` | Revenue attribution | GA4, ecommerce analytics |

### Weekly Review

| Question | Skill |
|----------|-------|
| What changed in customer behavior this week? | `customer-research` |
| Which channel showed useful signal? | `analytics` |
| Which page or funnel step lost the most people? | `cro` |
| What should we ship next week? | `marketing-os` |
| What content can we repurpose from this week's work? | `content-repurposing` |
| What should update in our positioning context? | `product-marketing` |

## Scorecards

Use these scorecards to decide whether the OS is creating measurable progress.

### Weekly Scorecard

| Metric | Target | Actual | Source | Owner | Next Action |
|--------|--------|--------|--------|-------|-------------|
| Website sessions | | | GA4 | | |
| Qualified signups or leads | | | CRM / forms | | |
| Activation rate | | | Product analytics | | |
| Demo or sales calls booked | | | CRM | | |
| Email reply rate | | | Outreach tool | | |
| Landing page conversion rate | | | GA4 / CRO tool | | |
| Organic clicks | | | Search Console | | |
| New content shipped | | | CMS | | |
| Experiments launched | | | A/B testing tool | | |
| Churn or cancellation signals | | | Billing / support | | |

### Funnel Scorecard

| Stage | Question | Metric | Skills to Use |
|-------|----------|--------|---------------|
| Awareness | Are the right people finding you? | Impressions, reach, rankings | `seo-content-strategy`, `social`, `pr-communications` |
| Acquisition | Are they taking the first step? | Leads, signups, demos | `landing-page-cro`, `copywriting`, `lead-magnets` |
| Activation | Are they reaching value? | Activation rate, time-to-value | `onboarding`, `emails`, `analytics` |
| Revenue | Are they paying? | Conversion rate, ACV, MRR | `pricing`, `sales-enablement`, `revops` |
| Retention | Are they staying? | Churn, usage, NPS | `churn-prevention`, `customer-service`, `community-marketing` |
| Referral | Are they bringing others? | Referral rate, affiliate revenue | `referrals`, `community-marketing`, `email-marketing` |

### Learning Log

Use this to feed results back into `product-marketing`.

| Date | Source | Learning | Messaging Impact | Product Impact | Next Test |
|------|--------|----------|------------------|----------------|-----------|
| | Sales call | | | | |
| | Support ticket | | | | |
| | SEO result | | | | |
| | Email reply | | | | |
| | Churn reason | | | | |

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
