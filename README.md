# Marketing Skills OS

Marketing Skills OS is an open-source Marketing OS for AI agents.

It gives Claude Code, OpenAI Codex, Cursor, Windsurf, and other Agent Skills-compatible tools a complete operating layer for marketing strategy, workflows, tool references, CLI helpers, scorecards, reviews, launch assets, and execution loops.

The repo includes 71 skills, 347 integration guides, 62 CLI tools, templates, workflows, dashboards, and validation. You keep the open-source install path, then run marketing work through a structured local OS instead of scattered prompts.

---

> **Support this work**
>
> Marketing Skills OS was researched, designed, and built by one person. If it saves you time, helps you ship better marketing, or gives your agent capabilities it did not have before, consider supporting the work that made it possible.
>
> ☕ [Buy me a coffee](https://buymeacoffee.com/dorcelusalain) — buymeacoffee.com/dorcelusalain
>
>  CashApp — **$AlainDorcelus**
>
> Every contribution directly funds new skills, improved frameworks, and continued maintenance of Marketing Skills OS.

---

Created and maintained by **[Alain Dorcelus](https://github.com/ScayverGraphix)** · [ScayverGraphix](https://github.com/ScayverGraphix)

[![Version](https://img.shields.io/badge/version-1.7.0-blue)](CHANGELOG.md)
[![Changelog](https://img.shields.io/badge/changelog-available-blue)](CHANGELOG.md)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Skills](https://img.shields.io/badge/skills-71-orange)](skills/)
[![Tools](https://img.shields.io/badge/integration%20guides-347-purple)](tools/REGISTRY.md)
[![Agent Skills Spec](https://img.shields.io/badge/Agent%20Skills%20Spec-compatible-brightgreen)](https://github.com/vercel-labs/skills)
[![GitHub stars](https://img.shields.io/github/stars/scayver/marketing-skills?style=social)](https://github.com/scayver/marketing-skills/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/scayver/marketing-skills?style=social)](https://github.com/scayver/marketing-skills/forks)
[![Validation](https://github.com/scayver/marketing-skills/actions/workflows/validate.yml/badge.svg)](https://github.com/scayver/marketing-skills/actions/workflows/validate.yml)

---

## Why star this repo

Star this repo if you want AI agents that can do more than write code.

Marketing Skills OS gives Claude Code, OpenAI Codex, Cursor, Windsurf, and other Agent Skills-compatible tools a full marketing operating system:

- Strategy skills for positioning, launches, pricing, research, and business planning.
- Revenue skills for CRO, email, sales copy, RevOps, referrals, churn, and analytics.
- Content skills for SEO, blogs, LinkedIn, Instagram, ecommerce, PR, education, and customer support.
- Tool references for 347 platforms, APIs, CLIs, WordPress plugins, CRMs, email tools, automation tools, LMS platforms, and more.

If this saves you time, star it so more builders can find it.

---

## Popular use cases

| Use Case | Start With | What You Get |
|----------|------------|--------------|
| Launch a SaaS product | `product-marketing`, `launch`, `email-marketing` | Positioning, launch plan, emails, social content, and PR assets |
| Improve a landing page | `landing-page-cro`, `copywriting`, `ab-testing` | Audit, rewritten page sections, CTA tests, and FAQ schema |
| Build SEO traffic | `seo-content-strategy`, `seo-blog-writer`, `schema` | Keyword map, content briefs, long-form posts, and structured data |
| Grow local leads | `local-seo`, `customer-service`, `social-content-planner` | City pages, review replies, Google Business Profile copy, and local posts |
| Sell ecommerce products | `ecommerce-content`, `email-marketing`, `ads` | Product pages, launch emails, ad hooks, and upsell copy |
| Build founder authority | `linkedin-strategy`, `brand-storytelling`, `pr-communications` | Profile copy, thought leadership posts, founder story, and media pitches |
| Automate marketing ops | `revops`, `analytics`, `tools/REGISTRY.md` | CRM fields, pipeline logic, reporting, and platform API references |

---

## Compatibility note

The public brand is **Marketing Skills OS**. The install path remains `scayver/marketing-skills` for compatibility with existing users, scripts, repo links, and Agent Skills tooling.

## The problem this solves

You ask your agent to "write copy for this landing page." It produces something that sounds reasonable, hits no specific framework, and could apply to any product in any industry.

You ask it to "write a press release." It returns a generic document that no journalist would open.

You ask it to "plan a LinkedIn content strategy." It lists five tactics you already knew.

The problem is not the agent. The problem is that the agent has no domain depth. It has broad knowledge but no structured process for marketing work specifically.

Marketing Skills OS gives the agent that process. Each skill is a markdown file that tells the agent exactly how to approach a specific marketing task: what questions to ask first, what framework to apply, how to structure the output, and what a good result actually looks like. The agent reads the skill and works from it while the OS connects context, workflow, tooling, measurement, and review.

---

## How it works

Install Marketing Skills OS into your project. Your agent picks up the skills, workflow docs, integration guides, CLI helpers, and local `.marketing-os/` workspace pattern.

When you describe a marketing task, the agent matches your request to the right skill and follows its process. You do not have to name the skill. You do not have to prompt engineer. You describe what you need and the agent does the work.

Every skill includes three things.

**A trigger definition.** The skill tells the agent exactly which requests it handles, including the specific phrases and task descriptions that activate it. When you say "respond to this Google review," the agent activates `customer-service` without any instruction from you.

**A process.** Each skill defines a step-by-step approach to the task. The `pr-communications` skill tells the agent to identify the media angle before writing a single line of the press release, produce the output table, then deliver the full press release with a wire summary and a social version. It does not let the agent skip steps.

**An output standard.** Every skill in Marketing Skills OS enforces the same content rules. Active voice. Short sentences. Direct address. No buzzwords. Dynamic depth based on the skill and task, from concise tactical answers to complete deliverables. The agent delivers structured, readable work that you can act on immediately.

---

## Start here

Before using any other skill, run `product-marketing` once in your project.

It creates a context document that every other skill reads before doing any work. Your product name, target audience, positioning, value proposition, and competitive differentiation live there. You enter it once. Every skill uses it automatically. The `copywriting` skill does not ask you to re-explain your product. The `cro` skill does not ask who your users are. The `email-marketing` skill does not ask what you sell.

This is the dependency that makes the whole OS coherent.

For the shortest path from install to first workflow, read [`docs/GETTING_STARTED.md`](docs/GETTING_STARTED.md).

---

## Skill map

`product-marketing` is the root context skill. It should run first for any new product, offer, or business because the other skills depend on that positioning context.

```text
product-marketing
├── Operating system
│   ├── marketing-os
│   ├── skill-security-auditor
│   └── env-secrets-manager
├── SEO and discovery
│   ├── seo-audit
│   ├── ai-seo
│   ├── site-architecture
│   ├── programmatic-seo
│   ├── schema
│   ├── aso
│   ├── seo-blog-writer
│   └── seo-content-strategy
├── Conversion optimization
│   ├── cro
│   ├── signup
│   ├── onboarding
│   ├── a11y-audit
│   ├── popups
│   ├── paywalls
│   └── landing-page-cro
├── Content and copy
│   ├── copywriting
│   ├── copy-editing
│   ├── cold-email
│   ├── emails
│   ├── email-marketing
│   ├── sms
│   ├── sales-copywriting
│   ├── social
│   ├── social-content-planner
│   ├── podcast-pipeline
│   ├── yt-competitive-analysis
│   ├── instagram-carousel
│   ├── content-repurposing
│   ├── content-humanizer
│   ├── ecommerce-content
│   ├── customer-service
│   ├── video
│   └── image
├── Paid media and measurement
│   ├── ads
│   ├── ad-creative
│   ├── social-media-analyzer
│   ├── ab-testing
│   └── analytics
├── Growth and retention
│   ├── referrals
│   ├── free-tools
│   ├── churn-prevention
│   ├── community-marketing
│   ├── lead-magnets
│   ├── co-marketing
│   └── directory-submissions
├── Sales and go-to-market
│   ├── revops
│   ├── prospecting
│   ├── prospect-research
│   ├── sales-enablement
│   ├── launch
│   ├── pricing
│   ├── competitors
│   └── competitor-profiling
├── Strategy and research
│   ├── marketing-ideas
│   ├── marketing-psychology
│   ├── market-research
│   ├── competitive-teardown
│   ├── customer-research
│   └── business-strategy
└── Brand and creator systems
    ├── brand-storytelling
    ├── brand-guidelines
    ├── linkedin-strategy
    ├── pr-communications
    ├── ai-image-creator
    └── education-content

Cross-skill dependencies:
  copywriting        <-> cro                 <-> ab-testing
  revops             <-> sales-enablement    <-> cold-email
  prospect-research  ->  cold-email, linkedin-strategy, revops
  seo-audit          <-> schema              <-> ai-seo
  seo-blog-writer    <-> seo-content-strategy
  customer-research  ->  copywriting, cro, competitors
  brand-storytelling ->  linkedin-strategy, pr-communications
  email-marketing    <-> landing-page-cro    <-> sales-copywriting
  local-seo          <-> seo-audit           <-> seo-content-strategy
  education-content  ->  content-repurposing, email-marketing
  ai-image-creator   ->  instagram-carousel, social-content-planner
```

---

## Agent compatibility

These skills follow the [Agent Skills spec](https://github.com/vercel-labs/skills). They work in any agent that supports it.

| Agent | Supported |
|-------|-----------|
| Claude Code | Yes |
| OpenAI Codex | Yes |
| Cursor | Yes |
| Windsurf | Yes |
| Any Agent Skills-compatible agent | Yes |

Skills install to `.agents/skills/` by default. Claude Code also reads from `.claude/skills/`. The install command handles both locations automatically.

---

## Install

**Install Marketing Skills OS with all 71 skills:**

```bash
npx skills add scayver/marketing-skills
```

**Specific skills only:**

```bash
npx skills add scayver/marketing-skills --skill email-marketing linkedin-strategy pr-communications
```

**See what is available before you install:**

```bash
npx skills add scayver/marketing-skills --list
```

**Install globally (available in every project on your machine):**

```bash
npx skills add scayver/marketing-skills --global
```

**Install across multiple agents at once with SkillKit:**

```bash
npx skillkit install scayver/marketing-skills
```

**Add as a git submodule (pulls updates with your repo):**

```bash
git submodule add https://github.com/scayver/marketing-skills.git .agents/marketing-skills
git submodule update --remote .agents/marketing-skills
```

**Clone and copy manually:**

```bash
git clone https://github.com/scayver/marketing-skills.git
cp -r marketing-skills/skills/* .agents/skills/
```

**Fork and customize:**

Fork this repo, modify skills for your product or voice, then install from your fork:

```bash
npx skills add YOUR_GITHUB_USERNAME/marketing-skills
```

---

## Quickstart examples

Install the full library, then try one of these requests in your agent:

```text
Use product-marketing to build the positioning context for my SaaS.
```

```text
Use landing-page-cro to audit this page and rewrite the hero, benefits, CTA, and FAQ section.
```

```text
Use email-marketing to create a 5-email lead magnet nurture sequence for this offer.
```

```text
Use local-seo to write a city page for HVAC repair in Austin, TX.
```

```text
Use tools/REGISTRY.md to find the right CRM integration guide, then show me the contact sync API pattern.
```

More examples live in [`examples/README.md`](examples/README.md).

---

## All 71 skills

### Operating system

| Skill | Description |
|-------|-------------|
| [`marketing-os`](skills/marketing-os/SKILL.md) | Root orchestration skill for building a full marketing operating system across strategy, demand, conversion, pipeline, retention, measurement, and assets |
| [`skill-security-auditor`](skills/skill-security-auditor/SKILL.md) | Audit Agent Skills, imported skill files, scripts, prompts, and tool references for safety, routing, and repo policy risks |
| [`env-secrets-manager`](skills/env-secrets-manager/SKILL.md) | Manage environment variables, API keys, secret rotation, deployment config, and credential hygiene |

### SEO and discovery

| Skill | Description |
|-------|-------------|
| [`seo-audit`](skills/seo-audit/SKILL.md) | Full technical, on-page, content, and off-page SEO audit with a scored action list |
| [`ai-seo`](skills/ai-seo/SKILL.md) | Optimize content for AI search engines: ChatGPT, Perplexity, Claude, and AI Overviews |
| [`site-architecture`](skills/site-architecture/SKILL.md) | Page hierarchy, navigation design, URL structure, and internal linking |
| [`programmatic-seo`](skills/programmatic-seo/SKILL.md) | SEO pages at scale using templates and structured data |
| [`schema`](skills/schema/SKILL.md) | JSON-LD schema markup for rich snippets and AI search citation |
| [`content-strategy`](skills/content-strategy/SKILL.md) | Topic clusters, content pillars, editorial calendar, and distribution plan |
| [`aso`](skills/aso/SKILL.md) | App Store and Google Play listing optimization: keywords, screenshots, reviews |
| [`seo-blog-writer`](skills/seo-blog-writer/SKILL.md) | Long-form SEO blog production with keyword planning, outline approval, and multi-platform repurposing |
| [`seo-content-strategy`](skills/seo-content-strategy/SKILL.md) | Keyword strategy, SERP analysis, content briefs, meta optimization, and blog-to-social repurposing |
| [`local-seo`](skills/local-seo/SKILL.md) | City pages, service area content, Google Business Profile descriptions, and local review responses |

### Conversion rate optimization

| Skill | Description |
|-------|-------------|
| [`cro`](skills/cro/SKILL.md) | Funnel analysis, friction diagnosis, ICE scoring, hypothesis writing, and A/B test design |
| [`signup`](skills/signup/SKILL.md) | Signup and free trial flow optimization: fields, friction, and abandonment diagnosis |
| [`onboarding`](skills/onboarding/SKILL.md) | Post-signup activation: aha moment, onboarding checklist, and time-to-value |
| [`a11y-audit`](skills/a11y-audit/SKILL.md) | Accessibility audits for marketing pages, forms, checkout flows, dashboards, and UI components |
| [`popups`](skills/popups/SKILL.md) | Exit intent, scroll triggers, lead capture, and announcement banners |
| [`paywalls`](skills/paywalls/SKILL.md) | In-app upgrade screens, feature gates, and freemium-to-paid conversion |
| [`landing-page-cro`](skills/landing-page-cro/SKILL.md) | Landing page audits, hero rewrites, CTA optimization, FAQ schema, and feature-to-benefit conversion |

### Content and copy

| Skill | Description |
|-------|-------------|
| [`copywriting`](skills/copywriting/SKILL.md) | AIDA, PAS, FAB, and Before/After/Bridge frameworks for any marketing page |
| [`copy-editing`](skills/copy-editing/SKILL.md) | Copy review, improvement, and content refresh for existing pages |
| [`cold-email`](skills/cold-email/SKILL.md) | B2B cold outreach: subject lines, opening lines, sequences, and reply rate optimization |
| [`emails`](skills/emails/SKILL.md) | Welcome sequences, nurture flows, re-engagement campaigns, and trigger-based emails |
| [`sms`](skills/sms/SKILL.md) | SMS and MMS marketing strategy, opt-in flows, STOP and HELP handling, A2P 10DLC planning, and lifecycle texts |
| [`social`](skills/social/SKILL.md) | LinkedIn, X, Instagram, TikTok: posts, threads, carousels, and short-form video scripts |
| [`image`](skills/image/SKILL.md) | AI image generation, prompt writing, product mockups, OG images, and compression |
| [`video`](skills/video/SKILL.md) | AI video production, explainer scripts, demo structure, and distribution |
| [`sales-copywriting`](skills/sales-copywriting/SKILL.md) | Long-form sales letters, VSLs, direct response copy, and value proposition writing across 10 formats |
| [`content-repurposing`](skills/content-repurposing/SKILL.md) | Transform one piece of content into six platform-native formats with humanization and topic generation |
| [`content-humanizer`](skills/content-humanizer/SKILL.md) | Rewrite stiff or AI-pattern drafts into clearer, more specific, more natural, brand-aligned content |
| [`podcast-pipeline`](skills/podcast-pipeline/SKILL.md) | Turn podcasts, interviews, webinars, and transcripts into show notes, clips, newsletters, blog posts, and social assets |
| [`yt-competitive-analysis`](skills/yt-competitive-analysis/SKILL.md) | Analyze YouTube competitors, outlier videos, packaging patterns, content gaps, titles, and thumbnails |
| [`instagram-carousel`](skills/instagram-carousel/SKILL.md) | Slide-by-slide Instagram carousel scripts with captions, hashtags, and visual direction |
| [`social-content-planner`](skills/social-content-planner/SKILL.md) | Instagram and Facebook content strategy with funnel-mapped weekly planning and Reels scripts |
| [`customer-service`](skills/customer-service/SKILL.md) | Phone, chat, and email scripts; feedback responses; FAQ content; and help center articles |
| [`ecommerce-content`](skills/ecommerce-content/SKILL.md) | Product descriptions, category pages, Amazon listings, feature highlights, and comparison pages |

### Paid advertising and measurement

| Skill | Description |
|-------|-------------|
| [`ads`](skills/ads/SKILL.md) | Google, Meta, LinkedIn, and TikTok campaigns: targeting, bidding, and optimization |
| [`ad-creative`](skills/ad-creative/SKILL.md) | Hook writing, bulk creative generation, and creative testing frameworks |
| [`analytics`](skills/analytics/SKILL.md) | GA4 setup, event tracking, UTM parameters, tag management, and attribution |
| [`social-media-analyzer`](skills/social-media-analyzer/SKILL.md) | Analyze social media performance, engagement quality, content patterns, channel ROI, and next tests |
| [`ab-testing`](skills/ab-testing/SKILL.md) | Hypothesis writing, sample size calculation, test design, and experimentation programs |

### Growth and retention

| Skill | Description |
|-------|-------------|
| [`referrals`](skills/referrals/SKILL.md) | Referral programs, affiliate programs, and viral loop design |
| [`free-tools`](skills/free-tools/SKILL.md) | Calculators, graders, and generators as a marketing and SEO channel |
| [`churn-prevention`](skills/churn-prevention/SKILL.md) | Cancellation flows, save offers, dunning, payment recovery, and win-back |
| [`community-marketing`](skills/community-marketing/SKILL.md) | Community strategy, Discord and Slack management, ambassador programs |
| [`lead-magnets`](skills/lead-magnets/SKILL.md) | Ebooks, templates, checklists, and Notion docs for email capture |
| [`co-marketing`](skills/co-marketing/SKILL.md) | Partner identification, joint campaigns, and integration partnerships |
| [`directory-submissions`](skills/directory-submissions/SKILL.md) | Startup, SaaS, AI, and review directory submissions for backlinks and discovery |

### Sales and go-to-market

| Skill | Description |
|-------|-------------|
| [`revops`](skills/revops/SKILL.md) | Lead scoring, routing, pipeline stages, CRM automation, and marketing-to-sales handoff |
| [`prospecting`](skills/prospecting/SKILL.md) | Build qualified prospect lists with SaaS, B2B, developer-intent, partner, and local SMB research workflows |
| [`prospect-research`](skills/prospect-research/SKILL.md) | Account research, GitHub stargazer and fork signals, firmographic targeting, Apollo/ZoomInfo/Sales Nav mapping, local SMB research, and compliance screening |
| [`sales-enablement`](skills/sales-enablement/SKILL.md) | Pitch decks, one-pagers, objection handling, demo scripts, and battle cards |
| [`launch`](skills/launch/SKILL.md) | Product launches: pre-launch prep, Product Hunt, launch day checklist, and post-launch |
| [`pricing`](skills/pricing/SKILL.md) | Pricing models, tier structure, value metrics, and pricing page design |
| [`competitors`](skills/competitors/SKILL.md) | Comparison pages and alternative pages for SEO and sales positioning |
| [`competitor-profiling`](skills/competitor-profiling/SKILL.md) | Competitor research dossiers: positioning, pricing, messaging, and channels |
| [`email-marketing`](skills/email-marketing/SKILL.md) | Cold email, abandoned cart, lead magnet delivery, newsletter generation, and campaign repurposing |

### Strategy and research

| Skill | Description |
|-------|-------------|
| [`product-marketing`](skills/product-marketing/SKILL.md) | Positioning, ICP, messaging hierarchy, and the context file all skills read first |
| [`marketing-ideas`](skills/marketing-ideas/SKILL.md) | Channel ideas, growth loops, underused tactics, and experiment prioritization |
| [`marketing-psychology`](skills/marketing-psychology/SKILL.md) | Anchoring, social proof, loss aversion, scarcity, and other biases applied to marketing |
| [`market-research`](skills/market-research/SKILL.md) | Market sizing, TAM SAM SOM, segmentation, category research, surveys, interviews, and demand validation |
| [`competitive-teardown`](skills/competitive-teardown/SKILL.md) | Deep competitor teardowns across positioning, UX, pricing, reviews, SEO, content, hiring, and roadmap signals |
| [`customer-research`](skills/customer-research/SKILL.md) | Customer interviews, JTBD, review mining, surveys, and research-to-messaging translation |
| [`business-strategy`](skills/business-strategy/SKILL.md) | Business idea generation, full business plan development, and customer journey mapping across 7 stages |

### Brand, creator, and communications

| Skill | Description |
|-------|-------------|
| [`brand-storytelling`](skills/brand-storytelling/SKILL.md) | Brand voice audits, About Pages, customer avatars, value propositions, and brand story writing |
| [`brand-guidelines`](skills/brand-guidelines/SKILL.md) | Create or audit brand guidelines, voice rules, messaging standards, visual identity rules, and channel examples |
| [`linkedin-strategy`](skills/linkedin-strategy/SKILL.md) | LinkedIn posts, profile optimization, connection messages, DM sequences, and company page content |
| [`pr-communications`](skills/pr-communications/SKILL.md) | Press releases, media pitches, crisis communications, executive quotes, and PR repurposing |
| [`ai-image-creator`](skills/ai-image-creator/SKILL.md) | Image prompt generation, content asset maps, Instagram carousel and Story slide production |
| [`education-content`](skills/education-content/SKILL.md) | Course descriptions, Bloom's Taxonomy objectives, module outlines, workshop descriptions, and curriculum maps |

---

## Tools

The `tools/` directory gives your agent standalone platform references it can use beside the skills.

```text
tools/
  clis/           62 JavaScript CLI tools
  integrations/   347 standalone platform integration guides
  composio/       Composio marketing tool references
  REGISTRY.md     Full tool index
```

**CLI tools include:** GA4, Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, Klaviyo, Mailchimp, HubSpot, Segment, Mixpanel, Amplitude, Ahrefs, SEMrush, Hotjar, Intercom, Paddle, GitHub prospecting, and more.

**Integration docs cover:** direct APIs, authentication, common agent operations, key fields, parameters, rate limits, and relevant skills for each platform. They are independent platform references, not connector-specific setup notes.

The original Bit Integrations source list is preserved at [`tools/integrations/bit-integrations-registry.md`](tools/integrations/bit-integrations-registry.md), while the individual platform docs now live directly in [`tools/integrations/`](tools/integrations/).

## Local Marketing OS workspace

Create a working marketing command center inside any project:

```bash
npm run os:init -- --target ../my-project
```

This creates a local `.marketing-os/` folder with product context, campaign brief, command center, scorecard, experiment backlog, compliance checklist, customer learning log, workflow recipes, and the machine-readable Marketing OS manifest.

Preview the OS inventory:

```bash
npm run os:summary
```

Activate a workflow in a project workspace:

```bash
npm run os:run -- --target ../my-project --workflow saas-launch --force
```

Create a weekly review from the active workflow:

```bash
npm run os:review -- --target ../my-project --date 2026-05-28 --force
```

Check the workspace status:

```bash
npm run os:status -- --target ../my-project
```

Persist the current OS state for future agent sessions:

```bash
npm run os:snapshot -- --target ../my-project --date 2026-05-28 --force
```

Generate the dashboard:

```bash
npm run os:dashboard
```

Regenerate the outcome index after changing workflows, skills, integrations, or CLI helpers:

```bash
npm run os:index
```

---

## Quality and validation

This repo now includes a validation layer so agents and contributors can trust the package before installing it.

```bash
npm run validate
```

The validator checks skill frontmatter, mandatory skill sections, integration registry coverage, CLI syntax, local documentation links, required community files, and current package counts. GitHub Actions runs the same validation on every push and pull request.

Test the package in a Claude Code-style sandbox:

```bash
npm run test:claude-code
```

Keep the generated sandbox for manual Claude Code prompts:

```bash
npm run test:claude-code -- --keep
```

Useful docs:

- [Getting started](docs/GETTING_STARTED.md).
- [Example workflows](docs/EXAMPLE_WORKFLOWS.md).
- [Documentation index](docs/README.md).
- [Marketing OS docs](docs/MARKETING_OS.md).
- [Claude Code testing guide](docs/CLAUDE_CODE_TESTING.md).
- [Marketing OS manifest](docs/MARKETING_OS_MANIFEST.json).
- [Marketing Skills OS dashboard](docs/MARKETING_OS_DASHBOARD.md).
- [Static HTML dashboard](docs/marketing-os-dashboard.html).
- [Marketing Skills OS outcome index](docs/MARKETING_OS_OUTCOME_INDEX.md).
- [Marketing OS initializer templates](templates/marketing-os/README.md).
- [Command center template](examples/marketing-os-command-center.md).
- [Social posting kit](examples/social-posts/README.md).
- [Demo walkthrough](docs/DEMO.md).
- [Social post library](docs/SOCIAL_POST_LIBRARY.md).
- [Compliance reference](docs/COMPLIANCE.md).
- [Validation guide](VALIDATION.md).
- [Security policy](SECURITY.md).

---

## Output standards

Every skill enforces the same rules on every word of output. There are no exceptions.

Output length is dynamic. The agent matches the depth to the task: concise answers for quick checks, structured tables for audits or plans, and full detailed deliverables when the request calls for a complete artifact.

Every sentence uses active voice. Passive constructions are not allowed.

The agent addresses you directly. "You" and "your" appear throughout. Generic third-person advice does not.

No em dashes. No hidden Unicode characters. Commas, semicolons, and periods replace them.

No hashtags, emojis, or asterisks in any strategy or long-form output. Social media repurposed formats use platform-appropriate formatting only.

No AI buzzwords. The agent does not write "leverage," "unlock," "game-changer," "dive into," "cutting-edge," or any variation of these.

No filler phrases. "In conclusion," "in summary," and "in a world where" do not appear.

Every section ends with a specific, actionable next step. No section closes with vague advice.

---

## Changelog

**Unreleased** — Added 12 new skills: prospecting, SMS, market research, competitive teardown, podcast pipeline, YouTube competitive analysis, brand guidelines, content humanizer, social media analyzer, skill security auditor, accessibility audit, and environment secrets manager. Updated counts to 71 skills and expanded dashboard coverage, roadmap, validation docs, and social post assets.

**v1.7.0 (2026-05-28)** — Added Marketing OS workflow index, command-center template, machine-readable OS manifest, and `npm run os:summary`.

**v1.6.0 (2026-05-28)** — Added the `marketing-os` orchestration skill plus Marketing OS architecture docs, playbooks, and scorecards.

**v1.5.0 (2026-05-28)** — Added a generated social post library with one post for every skill, integration guide, and CLI tool, plus mixed category campaign posts for launch and education.

**v1.4.0 (2026-05-27)** — Added repository validation automation, GitHub Actions CI, security and conduct docs, compliance and demo docs, expanded issue templates, `.gitignore`, and CLI index coverage.

**v1.3.0 (2026-05-27)** — Added `prospect-research` for SaaS developer-intent signals, B2B trigger-event research, local SMB website classification, and outreach compliance checks. Added `github-prospects.js` plus a standalone GitHub integration guide for stargazers, forks, and watcher research.

**v1.2.0 (2026-05-15)** — Tool system expansion and cleanup. The project now includes 346 standalone integration guides, 61 JavaScript CLI tools, and a regenerated tools registry. The former Bit Integrations tool docs were flattened into `tools/integrations/` and rewritten as independent platform references.

**v1.1.0 (2026-05-15)** — 17 new skills added by Alain Dorcelus: sales-copywriting, instagram-carousel, social-content-planner, brand-storytelling, business-strategy, content-repurposing, landing-page-cro, customer-service, ecommerce-content, seo-blog-writer, ai-image-creator, education-content, email-marketing, linkedin-strategy, local-seo, pr-communications, seo-content-strategy. Total skill count: 57.

**v1.0.0 (2026-05-15)** — Initial release. 40 skills, 63 CLI tools, 80+ integration docs. All skills enforce mandatory content standards. Compatible with Claude Code, OpenAI Codex, Cursor, Windsurf, and all Agent Skills-compatible agents.

Full release history: [CHANGELOG.md](CHANGELOG.md).

---

## Credits and support

Marketing Skills OS was created and is maintained by **Alain Dorcelus** ([ScayverGraphix](https://github.com/ScayverGraphix)).

The 17 custom skills added in v1.1.0 represent original instructional design work covering email marketing, brand storytelling, LinkedIn strategy, public relations, local SEO, e-commerce content, education content development, AI image creation, and more. Each skill was researched, structured, and written from scratch to meet the same output standards as the original library.

If Marketing Skills OS saves you hours of prompting, gives your agent new capabilities, or ships better marketing for your business, consider supporting the work directly.

**Support Alain's work:**

- ☕ [buymeacoffee.com/dorcelusalain](https://buymeacoffee.com/dorcelusalain)
- 💸 CashApp: **$AlainDorcelus**

Marketing Skills OS also draws on the Agent Skills spec published by [vercel-labs/skills](https://github.com/vercel-labs/skills).

---

## More docs

Start with the [`docs/README.md`](docs/README.md) documentation index.

The most important docs are:

- [`docs/GETTING_STARTED.md`](docs/GETTING_STARTED.md) for first-run setup.
- [`docs/MARKETING_OS.md`](docs/MARKETING_OS.md) for the operating model, workflows, playbooks, and scorecards.
- [`docs/ROADMAP.md`](docs/ROADMAP.md) for planned improvements.
- [`docs/FAQ.md`](docs/FAQ.md) for quick answers.

---

## Project files for maintainers

- [`AGENTS.md`](AGENTS.md) tells coding agents how to use and extend the repo.
- [`CONTRIBUTING.md`](CONTRIBUTING.md) explains how to add skills, tools, and docs.
- [`VALIDATION.md`](VALIDATION.md) lists the local checks to run before pushing.
- [`examples/README.md`](examples/README.md) gives copy-paste prompts for new users.
- [`tools/REGISTRY.md`](tools/REGISTRY.md) indexes every standalone integration guide.

---

## Contributing

Open a pull request with a new or improved skill. The only requirements are a `SKILL.md` with valid frontmatter and instructional content that follows the output standards above. Include a one-sentence description of what the skill does and when it activates.

For bugs or questions, open an issue on GitHub.

---

## License

MIT. Copyright 2026 Alain Dorcelus (ScayverGraphix). See [LICENSE](LICENSE) for the full text.
