# Changelog

All notable changes to Marketing Skills OS are documented here.

This file is the canonical public changelog and full release history for the repo.

---

## Unreleased

**Marketing Skills OS rebrand.**

This update makes **Marketing Skills OS** the canonical public brand while preserving the `scayver/marketing-skills` repo, package name, install path, `marketing-os` skill slug, `.marketing-os` workspace folder, and `os:*` commands for compatibility.

**New Skills**

| Skill | Category | Description |
|-------|----------|-------------|
| [`prospecting`](skills/prospecting/SKILL.md) | Sales and Go-to-Market | Lead list building, account qualification, SaaS and developer intent, B2B trigger events, decision-maker mapping, local SMB tiers, and outreach compliance. |
| [`sms`](skills/sms/SKILL.md) | Growth and Retention | SMS and MMS strategy, opt-in language, STOP and HELP workflows, A2P 10DLC planning, lifecycle texts, and compliance checkpoints. |
| [`market-research`](skills/market-research/SKILL.md) | Strategy and Research | Market sizing, TAM SAM SOM, segmentation, survey and interview planning, category signals, and demand validation. |
| [`competitive-teardown`](skills/competitive-teardown/SKILL.md) | Strategy and Research | Competitor teardown workflow for positioning, UX, pricing, reviews, SEO, content, hiring, social proof, and roadmap signals. |
| [`podcast-pipeline`](skills/podcast-pipeline/SKILL.md) | Content and Copy | Podcast and transcript repurposing into show notes, clips, newsletters, blog posts, social posts, carousels, and publishing schedules. |
| [`yt-competitive-analysis`](skills/yt-competitive-analysis/SKILL.md) | Content and Copy | YouTube competitor analysis, outlier research, title and thumbnail packaging, content gaps, and video idea prioritization. |
| [`brand-guidelines`](skills/brand-guidelines/SKILL.md) | Brand and Communications | Brand guidelines, voice rules, messaging standards, visual identity rules, channel examples, accessibility notes, and governance. |
| [`content-humanizer`](skills/content-humanizer/SKILL.md) | Content and Copy | AI-pattern audit and rewrite workflow for clearer, more specific, more natural, brand-aligned content. |
| [`social-media-analyzer`](skills/social-media-analyzer/SKILL.md) | Paid Advertising and Measurement | Social performance analysis, engagement quality, content pattern mining, channel ROI, and reporting recommendations. |
| [`skill-security-auditor`](skills/skill-security-auditor/SKILL.md) | Operating System | Safety audit workflow for imported skills, prompts, scripts, tools, permissions, dependencies, and repo policy fit. |
| [`a11y-audit`](skills/a11y-audit/SKILL.md) | Conversion Rate Optimization | Accessibility audit workflow for websites, landing pages, forms, checkouts, dashboards, and UI components. |
| [`env-secrets-manager`](skills/env-secrets-manager/SKILL.md) | Operating System | Environment variable inventory, `.env.example` planning, secret rotation, credential hygiene, and deployment config safety. |

**Counts**

- 71 skills.
- 347 standalone integration guides.
- 62 JavaScript CLI tools.

**Dashboard and Docs**

- Added OS Layer Skill Coverage to the generated Markdown and HTML dashboards.
- Added a workflow decision tree and first prompt chooser to `docs/GETTING_STARTED.md`.
- Added `docs/EXAMPLE_WORKFLOWS.md` with six end-to-end workflow examples.
- Added asset-specific contribution checklists to `CONTRIBUTING.md`.
- Replaced the fixed 1,500 to 10,000 word output rule with dynamic length guidance across global docs and skill standards.
- Updated the Marketing OS manifest, dashboard, outcome index, roadmap, launch kit, validation docs, demo docs, package metadata, README, and AGENTS instructions.
- Expanded the roadmap with recently shipped work, a next priority stack, stronger validation plans, and additional real-world examples.
- Added social post coverage for all 12 new skills.
- Expanded validation with manifest coverage checks, stale workflow reference checks, integration guide section checks, and social CSV quality checks.

**Verified**

- `npm run os:dashboard:check`
- `npm run os:index:check`
- `npm run validate`
- `npm run test:claude-code -- --target /private/tmp/marketing-skills-claude-code --keep`

---

## v1.7.0 (2026-05-28)

**Marketing OS command center and workflow manifest.**

> Support this work: [buymeacoffee.com/dorcelusalain](https://buymeacoffee.com/dorcelusalain) · CashApp $AlainDorcelus

This release adds operational assets that make the Marketing OS easier to run inside real projects.

**New OS Assets**

- Added goal-to-workflow routing, now consolidated in [`docs/MARKETING_OS.md`](docs/MARKETING_OS.md).
- Added [`docs/MARKETING_OS_MANIFEST.json`](docs/MARKETING_OS_MANIFEST.json) as a machine-readable OS map for agents and scripts.
- Added [`examples/marketing-os-command-center.md`](examples/marketing-os-command-center.md) as a copyable weekly command center.
- Added [`scripts/print-marketing-os-summary.js`](scripts/print-marketing-os-summary.js).
- Added `npm run os:summary`.

**Author**

v1.7.0 designed and implemented by **Alain Dorcelus** ([ScayverGraphix](https://github.com/ScayverGraphix)).

---

## v1.6.0 (2026-05-28)

**Marketing OS orchestration layer.**

> Support this work: [buymeacoffee.com/dorcelusalain](https://buymeacoffee.com/dorcelusalain) · CashApp $AlainDorcelus

This release turns the package from a broad skills and tools library into a clearer marketing operating system.

**New Skill**

| Skill | Category | Description |
|-------|----------|-------------|
| [`marketing-os`](skills/marketing-os/SKILL.md) | Operating System | Root orchestration skill for connecting strategy, demand generation, conversion, pipeline, retention, measurement, assets, tools, and weekly operating cadence. |

**New Docs**

- Added [`docs/MARKETING_OS.md`](docs/MARKETING_OS.md) for the system architecture.
- Added workflow recipes and measurement templates, now consolidated in [`docs/MARKETING_OS.md`](docs/MARKETING_OS.md).

**Counts**

- 59 skills.
- 347 standalone integration guides.
- 62 JavaScript CLI tools.

**Author**

v1.6.0 designed and implemented by **Alain Dorcelus** ([ScayverGraphix](https://github.com/ScayverGraphix)).

---

## v1.5.0 (2026-05-28)

**Social launch content system.**

> Support this work: [buymeacoffee.com/dorcelusalain](https://buymeacoffee.com/dorcelusalain) · CashApp $AlainDorcelus

This release adds reusable social content for promoting the library across LinkedIn, X, Threads, and GitHub Discussions.

**New Content Assets**

- Added [`docs/SOCIAL_POST_LIBRARY.md`](docs/SOCIAL_POST_LIBRARY.md) with posting strategy, weekly rhythm, CTA bank, platform notes, and mixed category posts.
- Added [`examples/social-post-library.csv`](examples/social-post-library.csv) with one generated post for every skill, standalone integration guide, and CLI tool.
- Updated README metadata and quality docs to reference the social post library.

**Post Coverage**

- 58 skill posts.
- 347 integration guide posts.
- 62 CLI tool posts.
- 10 mixed category campaign posts.

**Author**

v1.5.0 designed and implemented by **Alain Dorcelus** ([ScayverGraphix](https://github.com/ScayverGraphix)).

---

## v1.4.0 (2026-05-27)

**Validation automation and trust polish.**

> Support this work: [buymeacoffee.com/dorcelusalain](https://buymeacoffee.com/dorcelusalain) · CashApp $AlainDorcelus

This release adds the repository quality layer needed for safer contribution, easier agent trust, and a cleaner public GitHub launch.

**Quality and Automation**

- Added `scripts/validate-repo.js` for local validation.
- Added `.github/workflows/validate.yml` to run validation on push, pull request, and manual dispatch.
- Added `npm run validate` and `npm run check`.
- Expanded CLI README coverage so all 62 JavaScript CLI files appear in the CLI index.
- Added `.gitignore` for local environment files, dependencies, logs, and build artifacts.

**Docs and Community**

- Added `SECURITY.md`.
- Added `CODE_OF_CONDUCT.md`.
- Added `docs/DEMO.md`.
- Added `docs/COMPLIANCE.md`.
- Added separate bug and tool integration issue templates.
- Updated README, AGENTS, VALIDATION, and LAUNCH_KIT with the validation workflow and current counts.

**Author**

v1.4.0 designed and implemented by **Alain Dorcelus** ([ScayverGraphix](https://github.com/ScayverGraphix)).

---

## v1.3.0 (2026-05-27)

**Prospect research, developer-intent signals, and GitHub prospecting CLI.**

> Support this work: [buymeacoffee.com/dorcelusalain](https://buymeacoffee.com/dorcelusalain) · CashApp $AlainDorcelus

This release adds an outbound intelligence layer for agents that need to identify who to contact before writing outreach.

**New Skill**

| Skill | Category | Description |
|-------|----------|-------------|
| [`prospect-research`](skills/prospect-research/SKILL.md) | Content and Copy / Sales and Go-to-Market | Prospect list building, SaaS developer-intent signals, B2B firmographic and trigger-event research, decision-maker mapping through Apollo, ZoomInfo, and Sales Navigator, local SMB Google Maps research with four-tier website classification, and compliance checks for CAN-SPAM, GDPR, CASL, and platform terms. |

**New Tools**

- Added [`tools/clis/github-prospects.js`](tools/clis/github-prospects.js) to pull GitHub stargazers, forks, and repository subscribers as developer-intent signals.
- Added [`tools/integrations/github.md`](tools/integrations/github.md) as a standalone GitHub API reference for agents.
- Updated `tools/REGISTRY.md` and `tools/clis/README.md` so agents can discover the new GitHub prospecting workflow.

**Metadata**

- Updated `package.json` to v1.3.0.
- Updated the project count to 58 skills, 347 standalone integration guides, and 62 JavaScript CLI tools.

**Author**

v1.3.0 designed and implemented by **Alain Dorcelus** ([ScayverGraphix](https://github.com/ScayverGraphix)).

---

## v1.2.0 (2026-05-15)

**Tool system expansion and standalone integration reference cleanup.**

> Support this work: [buymeacoffee.com/dorcelusalain](https://buymeacoffee.com/dorcelusalain) · CashApp $AlainDorcelus

This release turns the tools directory into a much larger agent-ready integration reference system.

**Tools**

- Expanded `tools/integrations/` to 346 standalone platform guides.
- Preserved the original source registry as `tools/integrations/bit-integrations-registry.md`.
- Rewrote individual tool docs to use a platform-independent reference format: description, capabilities, authentication, common agent operations, key fields, parameters, when to use, rate limits, and relevant skills.
- Regenerated `tools/REGISTRY.md` so agents can discover all integration guides from one index.
- Standardized 9 older integration guides that were missing required sections.

**Metadata**

- Updated `package.json` to v1.2.0.
- Updated repository and homepage URLs to `scayver/marketing-skills`.
- Updated project description to reflect 57 skills and 346 standalone integration guides.

**Author**

v1.2.0 tool expansion and documentation cleanup by **Alain Dorcelus** ([ScayverGraphix](https://github.com/ScayverGraphix)).

---

## v1.1.0 (2026-05-15)

**17 new skills added by Alain Dorcelus ([ScayverGraphix](https://github.com/ScayverGraphix)).**

> Support this work: [buymeacoffee.com/dorcelusalain](https://buymeacoffee.com/dorcelusalain) · CashApp $AlainDorcelus

This release expands the library from 40 to 57 skills, adding coverage across brand communications, email marketing, LinkedIn strategy, public relations, local SEO, e-commerce content, education and course development, AI image creation, and advanced SEO content planning.

**New Skills**

| Skill | Category | Description |
|-------|----------|-------------|
| [`sales-copywriting`](skills/sales-copywriting/SKILL.md) | Content and Copy | Long-form sales letters, VSLs, direct response copy, and value proposition writing across 10 supported formats |
| [`instagram-carousel`](skills/instagram-carousel/SKILL.md) | Content and Copy | Slide-by-slide Instagram carousel scripts with output tables, captions, hashtags, and per-slide visual direction |
| [`social-content-planner`](skills/social-content-planner/SKILL.md) | Content and Copy | Instagram and Facebook content strategy with 23-column output tables, funnel-mapped weekly planning, and Reels scripts |
| [`brand-storytelling`](skills/brand-storytelling/SKILL.md) | Brand and Communications | Brand voice audits (5-dimension scoring), About Page generation, customer avatar narratives, value proposition writing (6 angles), and brand story writing |
| [`business-strategy`](skills/business-strategy/SKILL.md) | Strategy and Research | Business idea generation (5 components per idea), full business plan development with 90-day action plan, and customer journey mapping across 7 stages |
| [`content-repurposing`](skills/content-repurposing/SKILL.md) | Content and Copy | Repurposing strategist with pathway tables, format recommender, content humanizer (6 principles), and topic generator across 4 content buckets |
| [`landing-page-cro`](skills/landing-page-cro/SKILL.md) | Conversion Rate Optimization | Landing page audits across 5 dimensions, hero section copywriting, feature-to-benefit conversion, and FAQ JSON-LD schema generation |
| [`customer-service`](skills/customer-service/SKILL.md) | Content and Copy | Phone, chat, and messaging scripts; 16-scenario email templates; feedback and review responses; FAQ with Google Schema; and help center articles |
| [`ecommerce-content`](skills/ecommerce-content/SKILL.md) | Content and Copy | Short and long product descriptions, Amazon listing packages (title + 5 bullets + description), category pages, feature callouts, and comparison tables |
| [`seo-blog-writer`](skills/seo-blog-writer/SKILL.md) | SEO and Discovery | Long-form SEO blog production with a pre-writing approval workflow (6 inputs, outline approval) and repurposing for LinkedIn, X, TikTok, Instagram, and newsletter |
| [`ai-image-creator`](skills/ai-image-creator/SKILL.md) | Brand and Communications | Image prompt generation across 6 modes, content asset mapping, Instagram carousel and Story slide production, and multi-platform visual direction |
| [`education-content`](skills/education-content/SKILL.md) | Brand and Communications | Course descriptions (sales page and LMS formats), Bloom's Taxonomy learning objectives, module outlines, workshop descriptions, and curriculum maps |
| [`email-marketing`](skills/email-marketing/SKILL.md) | Sales and Go-to-Market | Cold email sequences, cart abandonment (3-email timed sequence), lead magnet delivery and nurture, newsletter generation, subject line writing across 6 tactics, and campaign repurposing |
| [`linkedin-strategy`](skills/linkedin-strategy/SKILL.md) | Brand and Communications | LinkedIn post writing (5 structures), profile optimization (5 headline formulas, 3 About section lengths), connection messages (300-char limit), DM sequences, and company page content |
| [`local-seo`](skills/local-seo/SKILL.md) | SEO and Discovery | City page generation (8-section structure), service area content, Google Business Profile descriptions (3 format lengths), review responses (3 tone variations each), and local schema markup |
| [`pr-communications`](skills/pr-communications/SKILL.md) | Brand and Communications | Full AP-style press releases with wire summaries, media and podcast pitches, company announcements, crisis communication templates (2-hour and 24-48 hour formats), and executive quotes (5 types) |
| [`seo-content-strategy`](skills/seo-content-strategy/SKILL.md) | SEO and Discovery | Keyword strategy, SERP competition analysis, content briefs, meta tag optimization, blog post writing (1,800-2,200 words), and blog-to-story, blog-to-Reel, and blog-to-carousel repurposing |

**Updated Files**

- `README.md` — Updated to reflect 57 skills, expanded skill map, updated install commands, and full credits with donation links.
- `AGENTS.md` — Updated skill index with all 57 skills, directory structure with v1.1.0 markers, and expanded output standards.
- `CHANGELOG.md` — This file.

**Author**

v1.1.0 skills designed and written by **Alain Dorcelus** ([ScayverGraphix](https://github.com/ScayverGraphix)).

If this library has been useful, support the work directly:
- [buymeacoffee.com/dorcelusalain](https://buymeacoffee.com/dorcelusalain)
- CashApp: **$AlainDorcelus**

---

## v1.0.0 (2026-05-15)

Initial release.

**Skills (40)**

- ab-testing
- ad-creative
- ads
- ai-seo
- analytics
- aso
- churn-prevention
- co-marketing
- cold-email
- community-marketing
- competitor-profiling
- competitors
- content-strategy
- copy-editing
- copywriting
- cro
- customer-research
- directory-submissions
- emails
- free-tools
- image
- launch
- lead-magnets
- marketing-ideas
- marketing-psychology
- onboarding
- paywalls
- popups
- pricing
- product-marketing
- programmatic-seo
- referrals
- revops
- sales-enablement
- schema
- seo-audit
- signup
- site-architecture
- social
- video

**Tools**

- 63 JavaScript CLI integrations in `tools/clis/`
- 80+ integration documentation files in `tools/integrations/`
- Composio marketing tool configurations in `tools/composio/`

**Content Standards**

All 40 launch skills enforced the same core output rules: active voice, no AI buzzwords, no em dashes, direct reader address, dynamic depth for the task, and actionable output with a clear next step per section.

**Agent Compatibility**

Compatible with Claude Code, OpenAI Codex, Cursor, Windsurf, and all agents that support the Agent Skills spec.

**Credits**

Built by [ScayverGraphix](https://github.com/ScayverGraphix). Draws on the Agent Skills spec from [vercel-labs/skills](https://github.com/vercel-labs/skills) and the original [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) project.
