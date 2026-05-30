# Marketing Skills OS — Agent Instructions

Marketing Skills OS is an open-source Marketing OS for AI agents. It contains 71 reusable marketing and growth skills, 347 integration guides, 62 CLI helpers, templates, workflows, dashboards, and validation. Each skill lives in `skills/<skill-name>/SKILL.md`.

The package name and install path remain `marketing-skills` and `scayver/marketing-skills` for compatibility.

**Created and maintained by Alain Dorcelus ([ScayverGraphix](https://github.com/ScayverGraphix)).**
Support the work: [buymeacoffee.com/dorcelusalain](https://buymeacoffee.com/dorcelusalain) · CashApp $AlainDorcelus

---

## For Agents Using These Skills

When a skill is activated, follow the instructions in the corresponding `SKILL.md` exactly. Every skill defines:

- **When to activate** — described in the YAML `description` field with trigger phrases.
- **Mandatory Content Standards** — a required section near the top of each skill that governs every word of output.
- **Framework** — the process, methodology, and structured approach to follow.
- **Output format** — what to deliver and how to structure it.

Never skip the Mandatory Content Standards section. It applies to every word you write when using a skill.

---

## Repository Structure

```
marketing-skills/
├── skills/
│   ├── ab-testing/
│   ├── a11y-audit/              ← NEW v1.8.0
│   ├── ad-creative/
│   ├── ads/
│   ├── ai-image-creator/         ← NEW v1.1.0
│   ├── ai-seo/
│   ├── analytics/
│   ├── aso/
│   ├── brand-guidelines/         ← NEW v1.8.0
│   ├── brand-storytelling/       ← NEW v1.1.0
│   ├── business-strategy/        ← NEW v1.1.0
│   ├── churn-prevention/
│   ├── co-marketing/
│   ├── cold-email/
│   ├── prospect-research/       ← NEW v1.3.0
│   ├── community-marketing/
│   ├── competitive-teardown/     ← NEW v1.8.0
│   ├── competitor-profiling/
│   ├── competitors/
│   ├── content-repurposing/      ← NEW v1.1.0
│   ├── content-humanizer/        ← NEW v1.8.0
│   ├── content-strategy/
│   ├── copy-editing/
│   ├── copywriting/
│   ├── cro/
│   ├── customer-research/
│   ├── customer-service/         ← NEW v1.1.0
│   ├── directory-submissions/
│   ├── ecommerce-content/        ← NEW v1.1.0
│   ├── education-content/        ← NEW v1.1.0
│   ├── email-marketing/          ← NEW v1.1.0
│   ├── emails/
│   ├── env-secrets-manager/      ← NEW v1.8.0
│   ├── free-tools/
│   ├── image/
│   ├── instagram-carousel/       ← NEW v1.1.0
│   ├── landing-page-cro/         ← NEW v1.1.0
│   ├── launch/
│   ├── lead-magnets/
│   ├── linkedin-strategy/        ← NEW v1.1.0
│   ├── local-seo/                ← NEW v1.1.0
│   ├── marketing-os/             ← NEW v1.6.0
│   ├── market-research/          ← NEW v1.8.0
│   ├── marketing-ideas/
│   ├── marketing-psychology/
│   ├── onboarding/
│   ├── paywalls/
│   ├── popups/
│   ├── podcast-pipeline/         ← NEW v1.8.0
│   ├── pr-communications/        ← NEW v1.1.0
│   ├── pricing/
│   ├── product-marketing/
│   ├── prospecting/              ← NEW v1.8.0
│   ├── programmatic-seo/
│   ├── referrals/
│   ├── revops/
│   ├── sales-copywriting/        ← NEW v1.1.0
│   ├── sales-enablement/
│   ├── schema/
│   ├── seo-audit/
│   ├── seo-blog-writer/          ← NEW v1.1.0
│   ├── seo-content-strategy/     ← NEW v1.1.0
│   ├── signup/
│   ├── site-architecture/
│   ├── social/
│   ├── social-media-analyzer/    ← NEW v1.8.0
│   ├── social-content-planner/   ← NEW v1.1.0
│   ├── sms/                      ← NEW v1.8.0
│   ├── skill-security-auditor/   ← NEW v1.8.0
│   ├── video/
│   └── yt-competitive-analysis/  ← NEW v1.8.0
├── tools/
│   ├── clis/            # 62 JavaScript CLI tools
│   ├── integrations/    # 347 standalone platform guides
│   ├── composio/        # Composio marketing tool references
│   └── REGISTRY.md      # Generated tool index
├── scripts/
│   └── validate-repo.js
├── docs/
│   ├── COMPLIANCE.md
│   ├── README.md
│   ├── MARKETING_OS.md
│   ├── GETTING_STARTED.md
│   ├── MARKETING_OS_MANIFEST.json
│   ├── DEMO.md
│   ├── FAQ.md
│   ├── LAUNCH_KIT.md
│   ├── ROADMAP.md
│   ├── SHOWCASE.md
│   └── SOCIAL_POST_LIBRARY.md
├── package.json
├── README.md
├── AGENTS.md
├── SECURITY.md
├── VALIDATION.md
├── CHANGELOG.md
└── LICENSE
```

---

## Tool References

The `tools/` directory contains standalone platform references agents can use alongside skills.

- `tools/REGISTRY.md` indexes all 347 integration guides.
- `tools/integrations/` contains platform-independent docs with authentication, common agent operations, key fields, parameters, rate limits, and relevant skills.
- `tools/clis/` contains 62 JavaScript CLI helpers for high-use marketing platforms.
- `tools/integrations/bit-integrations-registry.md` preserves the original source list used to expand the tool library.

When a task requires a platform, read the matching integration guide before giving setup instructions or API examples. Prefer direct platform APIs, official CLIs, SDKs, WordPress REST endpoints, or documented webhook patterns.

## Repository Validation

Run validation before committing skill, tool, or documentation changes.

```bash
npm run validate
```

Use this command to print the Marketing OS workflow summary.

```bash
npm run os:summary
```

The validator checks skill frontmatter, mandatory sections, registry coverage, CLI syntax, required community files, local documentation links, and package counts. The GitHub Actions workflow runs the same command on pushes and pull requests.

## Skill Activation

Skills activate automatically when the user's request matches the trigger phrases in each skill's `description` frontmatter. When activated:

1. Read the full `SKILL.md` for the skill.
2. Apply the Mandatory Content Standards to every word of output.
3. Follow the defined framework and output format.
4. Ask for clarifying context (audience, goal, data) before proceeding if critical information is missing. Ask only one clarifying question at a time.

Start with the `product-marketing` skill when beginning work on a new project. It creates the context document all other skills reference for product, audience, and positioning.

---

## Skill Index by Category

### Operating System
- `marketing-os` — Root orchestration skill for full-funnel marketing systems, campaign routing, operating cadence, scorecards, and tool mapping *(v1.6.0)*
- `skill-security-auditor` — Audit Agent Skills, imported skill files, prompts, scripts, and tool references for safety and policy risks *(v1.8.0)*
- `env-secrets-manager` — Environment variable, API key, secret rotation, deployment config, and credential hygiene workflow *(v1.8.0)*

### SEO and Discovery
- `seo-audit` — Technical, on-page, content, and off-page SEO audit
- `ai-seo` — Optimize for AI search engines and AI Overviews
- `site-architecture` — Page hierarchy, URL structure, internal linking
- `programmatic-seo` — SEO pages at scale using templates
- `schema` — JSON-LD schema markup for rich snippets
- `content-strategy` — Topic clusters, pillars, and editorial calendar
- `aso` — App Store and Google Play listing optimization
- `seo-blog-writer` — Long-form SEO blog production with pre-writing approval workflow *(v1.1.0)*
- `seo-content-strategy` — Keyword strategy, SERP analysis, content briefs, meta optimization *(v1.1.0)*
- `local-seo` — City pages, service area content, GBP descriptions, review responses *(v1.1.0)*

### Conversion Rate Optimization
- `cro` — Funnel analysis, ICE scoring, hypothesis writing, A/B test design
- `signup` — Signup and free trial flow optimization
- `onboarding` — Post-signup activation and time-to-value
- `a11y-audit` — Accessibility audits for marketing pages, forms, checkout flows, dashboards, and UI components *(v1.8.0)*
- `popups` — Exit intent, scroll triggers, lead capture banners
- `paywalls` — Upgrade screens, feature gates, freemium-to-paid conversion
- `landing-page-cro` — Landing page audits, hero rewrites, CTA optimization, FAQ schema *(v1.1.0)*

### Content and Copy
- `copywriting` — AIDA, PAS, FAB frameworks for marketing pages
- `copy-editing` — Copy review, improvement, and content refresh
- `cold-email` — B2B cold outreach sequences and reply rate optimization
- `emails` — Welcome sequences, nurture flows, re-engagement campaigns
- `sms` — SMS and MMS marketing, opt-in flows, STOP and HELP handling, A2P 10DLC, and lifecycle texts *(v1.8.0)*
- `social` — LinkedIn, X, Instagram, TikTok posts and scripts
- `image` — AI image generation and prompt writing
- `video` — AI video production and explainer scripts
- `sales-copywriting` — Long-form sales letters, VSLs, direct response copy *(v1.1.0)*
- `content-repurposing` — One piece of content into six platform-native formats *(v1.1.0)*
- `content-humanizer` — Rewrite stiff or AI-pattern drafts into clearer, more specific, more natural content *(v1.8.0)*
- `podcast-pipeline` — Turn episodes, transcripts, and interviews into show notes, clips, newsletters, blog posts, and social assets *(v1.8.0)*
- `yt-competitive-analysis` — YouTube competitor, outlier, title, thumbnail, packaging, and content gap analysis *(v1.8.0)*
- `instagram-carousel` — Slide-by-slide carousel scripts with visual direction *(v1.1.0)*
- `social-content-planner` — Instagram and Facebook strategy with weekly planning *(v1.1.0)*
- `customer-service` — Scripts, email templates, review responses, FAQ, help center articles *(v1.1.0)*
- `ecommerce-content` — Product descriptions, Amazon listings, category pages, comparisons *(v1.1.0)*

### Paid Advertising and Measurement
- `ads` — Google, Meta, LinkedIn, TikTok campaign management
- `ad-creative` — Hook writing and creative testing frameworks
- `analytics` — GA4 setup, event tracking, UTM parameters, attribution
- `social-media-analyzer` — Social media performance, engagement quality, channel ROI, pattern mining, and reporting *(v1.8.0)*
- `ab-testing` — Hypothesis writing, sample size, experimentation programs

### Growth and Retention
- `referrals` — Referral programs, affiliate programs, viral loops
- `free-tools` — Calculators, graders, generators as a marketing channel
- `churn-prevention` — Cancellation flows, dunning, payment recovery, win-back
- `community-marketing` — Community strategy, Discord/Slack, ambassador programs
- `lead-magnets` — Ebooks, templates, checklists for email capture
- `co-marketing` — Partner identification and joint campaigns
- `directory-submissions` — Startup and SaaS directory submissions

### Sales and Go-to-Market
- `revops` — Lead scoring, pipeline stages, CRM automation
- `prospecting` — Qualified prospect lists for SaaS, B2B, developer, partner, and local SMB segments *(v1.8.0)*
- `prospect-research` — Account research, GitHub stargazers and forks, firmographics, trigger events, decision-maker mapping *(v1.3.0)*
- `sales-enablement` — Pitch decks, objection handling, battle cards
- `launch` — Product launches, Product Hunt, launch day checklists
- `pricing` — Pricing models, tier structure, pricing page design
- `competitors` — Comparison and alternative pages
- `competitor-profiling` — Competitor research dossiers
- `email-marketing` — Cold email, cart abandonment, lead magnet delivery, newsletters *(v1.1.0)*

### Strategy and Research
- `product-marketing` — Positioning, ICP, messaging hierarchy (read first)
- `marketing-ideas` — Channel ideas, growth loops, experiment prioritization
- `marketing-psychology` — Cognitive biases applied to marketing
- `market-research` — Market sizing, TAM SAM SOM, segmentation, surveys, interviews, and demand validation *(v1.8.0)*
- `competitive-teardown` — Competitor teardowns across positioning, UX, pricing, reviews, SEO, jobs, and roadmap signals *(v1.8.0)*
- `customer-research` — Interviews, JTBD, review mining, surveys
- `business-strategy` — Business plans, idea generation, customer journey mapping *(v1.1.0)*

### Brand, Creator, and Communications
- `brand-storytelling` — Brand voice, About Pages, customer avatars, value propositions *(v1.1.0)*
- `brand-guidelines` — Brand guidelines, voice rules, messaging standards, visual identity rules, and channel examples *(v1.8.0)*
- `linkedin-strategy` — LinkedIn posts, profiles, connection messages, company pages *(v1.1.0)*
- `pr-communications` — Press releases, media pitches, crisis communications *(v1.1.0)*
- `ai-image-creator` — Image prompts, content asset maps, carousel and Story production *(v1.1.0)*
- `education-content` — Course descriptions, learning objectives, module outlines *(v1.1.0)*

---

## Adding New Skills

New skills must follow this format:

```yaml
---
name: skill-name
description: >
  When to use this skill and trigger phrases. Be specific about every
  phrase or scenario that should activate this skill.
---
```

Followed by:
1. A **Mandatory Content Standards** section that defines output quality, safety boundaries, context handling, and compliance constraints.
2. Detailed instructional content covering objective, process, frameworks, output format, tone options, add-ons, and repurposing capabilities where relevant.
3. Clear guardrails for legal, privacy, platform, accessibility, security, or credential risks when the skill touches those areas.

Every skill must produce actionable, structured output that the user can implement immediately. No outlines. No placeholders. No generic advice.

---

## Output Standards (Applied by Every Skill)

All 71 skills enforce these rules on every word of output:

- Output length: dynamic based on the skill, user request, and deliverable type. Use concise answers for quick checks and full detail for complete deliverables.
- Voice: active voice only. No passive constructions.
- Address: "you" and "your" throughout all customer-facing and user-facing copy.
- No em dashes: replaced with commas, parentheses, semicolons, or new sentences.
- No hashtags, emojis, or asterisks in strategy or long-form output.
- No AI buzzwords: "leverage," "unlock," "game-changer," "dive into," "cutting-edge," and similar phrases are banned.
- No filler closings: "in conclusion," "in summary," "in a world where" do not appear.
- Every section ends with a specific, actionable next step.
- Every deliverable ends with one customization note for the user.
