# marketing-skills

**40 marketing and growth skills for AI coding agents.**

Works with Claude Code, OpenAI Codex, Cursor, Windsurf, and any agent that supports the Agent Skills spec. Built and maintained by [ScayverGraphix](https://github.com/ScayverGraphix).

[![Version](https://img.shields.io/badge/version-1.0.0-blue)](VERSIONS.md)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Skills](https://img.shields.io/badge/skills-40-orange)](skills/)
[![Agent Skills Spec](https://img.shields.io/badge/Agent%20Skills%20Spec-compatible-brightgreen)](https://github.com/vercel-labs/skills)

---

## What are Skills?

Skills are markdown files that give AI agents specialized knowledge and workflows for specific tasks. When you add these skills to your project, your agent can recognize when you are working on a marketing task and apply the right frameworks and best practices automatically.

Each skill contains three things.

First, a trigger description. This tells the agent when to activate the skill. It includes specific phrases and request patterns the agent watches for. When you say "help me reduce churn," the agent activates the `churn-prevention` skill without you having to name it.

Second, a mandatory content standard. Every skill in this library enforces the same output rules: active voice, short sentences, direct reader address, no AI buzzwords, no filler phrases, and between 1,500 and 10,000 words of actionable output. The agent does not drift into generic advice because the skill does not allow it.

Third, a structured framework. Each skill gives the agent a specific process to follow, a set of diagnostic questions to ask, and a defined output format to deliver. You get consistent, structured results instead of freeform responses that vary by session.

Skills work in any project directory. They are plain markdown files. They do not require plugins, extensions, or configuration files. You drop them in and your agent picks them up.

---

## How Skills Work Together

Skills reference each other and build on shared context. The `product-marketing` skill is the foundation. Every other skill reads it first to understand your product, audience, and positioning before doing any work. Set it up once at the start of a project and every other skill will use it automatically.

```
                        ┌──────────────────────────────────────┐
                        │          product-marketing           │
                        │    (read by all other skills first)  │
                        └──────────────────┬───────────────────┘
                                           │
  ┌──────────────┬─────────────┬───────────┼──────────┬──────────────┬──────────────┐
  ▼              ▼             ▼           ▼          ▼              ▼              ▼
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐ ┌──────────┐ ┌─────────────┐ ┌───────────┐
│  SEO &   │ │   CRO    │ │Content & │ │ Paid & │ │ Growth & │ │  Sales &    │ │ Strategy  │
│ Discovery│ │          │ │   Copy   │ │Measure │ │Retention │ │    GTM      │ │           │
├──────────┤ ├──────────┤ ├──────────┤ ├────────┤ ├──────────┤ ├─────────────┤ ├───────────┤
│seo-audit │ │cro       │ │copywritng│ │ads     │ │referrals │ │revops       │ │mktg-ideas │
│ai-seo    │ │signup    │ │copy-edit │ │ad-creat│ │free-tools│ │sales-enable │ │mktg-psych │
│site-arch │ │onboarding│ │cold-email│ │ab-test │ │churn-prev│ │launch       │ │customer-  │
│programm  │ │popups    │ │emails    │ │analyts │ │community │ │pricing      │ │  research │
│schema    │ │paywalls  │ │social    │ │        │ │lead-magnt│ │competitors  │ │           │
│content   │ │          │ │video     │ │        │ │co-mktg   │ │comp-profile │ │           │
│aso       │ │          │ │image     │ │        │ │directory │ │             │ │           │
└────┬─────┘ └────┬─────┘ └────┬─────┘ └───┬────┘ └────┬─────┘ └──────┬──────┘ └─────┬─────┘
     │            │            │            │           │              │              │
     └────────────┴──────┬─────┴────────────┴───────────┴──────────────┴──────────────┘
                         │
          Skills cross-reference each other:
            copywriting  <->  cro  <->  ab-testing
            revops       <->  sales-enablement  <->  cold-email
            seo-audit    <->  schema  <->  ai-seo
            customer-research  ->  copywriting, cro, competitors
```

See each skill's **Related Skills** section for the full dependency map.

---

## Compatible Agents

These skills follow the [Agent Skills spec](https://github.com/vercel-labs/skills) and work with any agent that supports it.

| Agent | Install Method |
|-------|---------------|
| Claude Code | `npx skills add` or `.claude/skills/` |
| OpenAI Codex | `.agents/skills/` directory |
| Cursor | `.cursor/skills/` or `.agents/skills/` |
| Windsurf | `.agents/skills/` directory |
| Any Agent Skills-compatible agent | `npx skills add` or manual copy |

---

## Installation

### Option 1: CLI Install (Recommended)

Use `npx skills` to install directly into your project.

```bash
# Install all 40 skills
npx skills add ScayverGraphix/marketing-skills

# Install specific skills
npx skills add ScayverGraphix/marketing-skills --skill cro copywriting cold-email

# List all available skills before installing
npx skills add ScayverGraphix/marketing-skills --list
```

This installs to `.agents/skills/` and symlinks to `.claude/skills/` for Claude Code compatibility.

For global installation (available in every project):

```bash
npx skills add ScayverGraphix/marketing-skills --global
```

### Option 2: SkillKit (Multi-Agent)

Use SkillKit to install across Claude Code, Cursor, Windsurf, and other agents simultaneously.

```bash
# Install all skills across all agents
npx skillkit install ScayverGraphix/marketing-skills

# Install specific skills
npx skillkit install ScayverGraphix/marketing-skills --skill cro copywriting

# List available skills
npx skillkit install ScayverGraphix/marketing-skills --list
```

### Option 3: Claude Code Plugin

```bash
# Add the marketplace
/plugin marketplace add ScayverGraphix/marketing-skills

# Install all marketing skills
/plugin install marketing-skills
```

### Option 4: Git Submodule

Add as a submodule for easy updates:

```bash
git submodule add https://github.com/scayver/marketing-skills.git .agents/marketing-skills
```

Reference skills from `.agents/marketing-skills/skills/`. To pull future updates:

```bash
git submodule update --remote .agents/marketing-skills
```

### Option 5: Clone and Copy

```bash
git clone https://github.com/scayver/marketing-skills.git
cp -r marketing-skills/skills/* .agents/skills/
```

### Option 6: Fork and Customize

1. Fork this repository on GitHub.
2. Customize skills for your product, voice, or audience.
3. Clone your fork into your projects.
4. Install from your fork: `npx skills add YOUR_USERNAME/marketing-skills`

---

## Usage

Once installed, ask your agent to help with any marketing task. The agent activates the right skill automatically based on what you describe.

```
"Help me optimize this landing page for conversions"
  Uses: cro

"Write homepage copy for my SaaS"
  Uses: copywriting

"Set up GA4 tracking for signups"
  Uses: analytics

"Create a 5-email welcome sequence"
  Uses: emails

"Why did my traffic drop last month?"
  Uses: analytics-review

"Write a cold email sequence for enterprise prospects"
  Uses: cold-email

"Plan our Product Hunt launch"
  Uses: launch

"Find our competitors and profile them"
  Uses: competitor-profiling, competitors
```

You can also invoke skills directly in Claude Code:

```
/cro
/emails
/seo-audit
/copywriting
/pricing
```

**Start with `product-marketing` on any new project.** It creates the context document all other skills read first. You enter your product details once and every skill uses them automatically.

---

## Available Skills

### SEO and Discovery

| Skill | What it does |
|-------|-------------|
| [`seo-audit`](skills/seo-audit/SKILL.md) | Full SEO audit: technical, on-page, content, and off-page signals with a prioritized action list |
| [`ai-seo`](skills/ai-seo/SKILL.md) | Optimize content to be cited by AI search engines and LLMs (ChatGPT, Perplexity, AI Overviews) |
| [`site-architecture`](skills/site-architecture/SKILL.md) | Plan page hierarchy, navigation structure, URL patterns, and internal linking |
| [`programmatic-seo`](skills/programmatic-seo/SKILL.md) | Create SEO-driven pages at scale using templates and data |
| [`schema`](skills/schema/SKILL.md) | Add and optimize schema markup for rich snippets and AI search visibility |
| [`content-strategy`](skills/content-strategy/SKILL.md) | Plan what content to create, for whom, and how to distribute it |
| [`aso`](skills/aso/SKILL.md) | App Store and Google Play listing optimization for visibility and conversion |

### Conversion Rate Optimization

| Skill | What it does |
|-------|-------------|
| [`cro`](skills/cro/SKILL.md) | Conversion rate optimization for landing pages, homepages, pricing pages, and lead capture forms |
| [`signup`](skills/signup/SKILL.md) | Optimize signup, registration, and free trial activation flows |
| [`onboarding`](skills/onboarding/SKILL.md) | Post-signup activation, aha moment identification, and time-to-value optimization |
| [`popups`](skills/popups/SKILL.md) | Design and optimize popups, modals, overlays, and announcement banners |
| [`paywalls`](skills/paywalls/SKILL.md) | In-app upgrade screens, feature gates, and freemium conversion |

### Content and Copy

| Skill | What it does |
|-------|-------------|
| [`copywriting`](skills/copywriting/SKILL.md) | High-converting copy for any marketing page using AIDA, PAS, FAB, and other frameworks |
| [`copy-editing`](skills/copy-editing/SKILL.md) | Edit, review, improve, and refresh existing marketing copy |
| [`cold-email`](skills/cold-email/SKILL.md) | B2B cold emails and multi-touch follow-up sequences that get replies |
| [`emails`](skills/emails/SKILL.md) | Lifecycle email sequences, drip campaigns, and automated email flows |
| [`social`](skills/social/SKILL.md) | Social content for LinkedIn, X, Instagram, TikTok, and short-form video |
| [`image`](skills/image/SKILL.md) | Create and optimize marketing images with AI tools (Flux, Midjourney, DALL-E, Ideogram) |
| [`video`](skills/video/SKILL.md) | Produce marketing video using AI tools (Runway, HeyGen, Synthesia) and programmatic frameworks |

### Paid and Measurement

| Skill | What it does |
|-------|-------------|
| [`ads`](skills/ads/SKILL.md) | Paid advertising on Google, Meta, LinkedIn, and TikTok: strategy, targeting, bidding, and optimization |
| [`ad-creative`](skills/ad-creative/SKILL.md) | Generate and iterate ad creative at scale for any paid platform |
| [`analytics`](skills/analytics/SKILL.md) | Set up, audit, and fix marketing analytics tracking in GA4, Mixpanel, and Segment |
| [`ab-testing`](skills/ab-testing/SKILL.md) | A/B test design, hypothesis writing, sample size calculation, and experimentation programs |

### Growth and Retention

| Skill | What it does |
|-------|-------------|
| [`referrals`](skills/referrals/SKILL.md) | Design referral programs, affiliate programs, and word-of-mouth growth loops |
| [`free-tools`](skills/free-tools/SKILL.md) | Plan and build free tools as a marketing channel (calculators, graders, generators) |
| [`churn-prevention`](skills/churn-prevention/SKILL.md) | Cancellation flows, save offers, dunning, payment recovery, and win-back campaigns |
| [`community-marketing`](skills/community-marketing/SKILL.md) | Build and grow communities to drive product adoption and brand loyalty |
| [`lead-magnets`](skills/lead-magnets/SKILL.md) | Create lead magnets for email capture: ebooks, templates, checklists, and Notion docs |
| [`co-marketing`](skills/co-marketing/SKILL.md) | Find co-marketing partners and plan joint campaigns |
| [`directory-submissions`](skills/directory-submissions/SKILL.md) | Submit to directories for backlinks, domain authority, and product discovery |

### Sales and Go-to-Market

| Skill | What it does |
|-------|-------------|
| [`revops`](skills/revops/SKILL.md) | Revenue operations: lead scoring, routing, pipeline design, and marketing-to-sales handoff |
| [`sales-enablement`](skills/sales-enablement/SKILL.md) | Pitch decks, one-pagers, objection handling docs, demo scripts, and battle cards |
| [`launch`](skills/launch/SKILL.md) | Product launches and feature announcements: pre-launch, launch day, and post-launch |
| [`pricing`](skills/pricing/SKILL.md) | Pricing strategy, packaging, monetization, and pricing page design |
| [`competitors`](skills/competitors/SKILL.md) | Competitor comparison and alternative pages for SEO and sales |
| [`competitor-profiling`](skills/competitor-profiling/SKILL.md) | Research and profile competitors into structured intelligence documents |

### Strategy and Research

| Skill | What it does |
|-------|-------------|
| [`product-marketing`](skills/product-marketing/SKILL.md) | Build the positioning and messaging foundation that every other skill reads first |
| [`marketing-ideas`](skills/marketing-ideas/SKILL.md) | Generate and prioritize marketing ideas, channels, and growth experiments |
| [`marketing-psychology`](skills/marketing-psychology/SKILL.md) | Apply cognitive biases and behavioral science to copy, pricing, CRO, and product |
| [`customer-research`](skills/customer-research/SKILL.md) | Customer interviews, survey design, review mining, JTBD, and turning research into messaging |

---

## Tools

This project includes 63 CLI tool integrations and 80+ integration documentation files in the `tools/` directory.

```
tools/
  clis/         — 63 JavaScript CLI tools (GA4, Meta Ads, Klaviyo, Ahrefs, Segment, and more)
  integrations/ — 80+ integration guides (HubSpot, Stripe, Webflow, Salesforce, and more)
  composio/     — Composio marketing tool configurations
  REGISTRY.md   — Full tool registry with usage notes
```

CLI tools give your agent direct access to marketing platforms. Integration guides tell your agent how to work with each platform in context.

---

## Content Standards

Every skill in this library enforces the same output rules. These apply to every word the agent writes when using a skill.

- Output is between 1,500 and 10,000 words. No thin responses.
- Active voice throughout. No passive constructions.
- Short sentences. One idea per sentence.
- Direct reader address using "you" and "your."
- No em dashes or hidden Unicode characters. Commas, semicolons, and periods replace them.
- No hashtags, emojis, or asterisks in output.
- No AI buzzwords: no "leverage," "unlock," "game-changer," "dive into," "cutting-edge," or similar.
- No filler phrases: no "in conclusion," "in summary," or "in a world where."
- Specific examples and data over broad generalizations.
- At least one thought-provoking question per output.
- Every section ends with a clear, actionable next step.

---

## Migrating from v1.x

If you installed skills from an earlier version, 17 skills were renamed in v2.0 and two were merged. The new skills install alongside the old ones. Clean up the stale folders after upgrading.

```bash
# Run from your skills install directory (.agents/skills/ or .claude/skills/)
rm -rf page-cro form-cro \
       ab-test-setup analytics-tracking aso-audit competitor-alternatives \
       email-sequence free-tool-strategy launch-strategy onboarding-cro \
       paid-ads paywall-upgrade-cro popup-cro pricing-strategy \
       product-marketing-context referral-program schema-markup \
       signup-flow-cro social-content
```

Then reinstall:

```bash
npx skills add ScayverGraphix/marketing-skills
```

**Migrate the product marketing context file.**

The context file moved from `.claude/` to `.agents/` and was renamed from `product-marketing-context.md` to `product-marketing.md`.

```bash
mkdir -p .agents
mv .claude/product-marketing.md .agents/product-marketing.md 2>/dev/null
mv .claude/product-marketing-context.md .agents/product-marketing.md 2>/dev/null
```

Skills still check `.claude/` and the legacy filename as fallbacks, so nothing breaks if you skip this step.

### Full Rename Map

| v1.x Name | v2.0 Name |
|-----------|-----------|
| ab-test-setup | ab-testing |
| analytics-tracking | analytics |
| aso-audit | aso |
| competitor-alternatives | competitors |
| email-sequence | emails |
| form-cro | merged into cro |
| free-tool-strategy | free-tools |
| launch-strategy | launch |
| onboarding-cro | onboarding |
| page-cro | cro |
| paid-ads | ads |
| paywall-upgrade-cro | paywalls |
| popup-cro | popups |
| pricing-strategy | pricing |
| product-marketing-context | product-marketing |
| referral-program | referrals |
| schema-markup | schema |
| signup-flow-cro | signup |
| social-content | social |

---

## Changelog

See [VERSIONS.md](VERSIONS.md) for the full version history.

### v1.0.0 (2026-05-15)

- Initial release with 40 marketing and growth skills.
- All skills enforce mandatory content standards: active voice, 1,500 to 10,000 word outputs, no AI buzzwords, direct reader address.
- 63 CLI tool integrations included in `tools/clis/`.
- 80+ integration documentation files included in `tools/integrations/`.
- Compatible with Claude Code, OpenAI Codex, Cursor, Windsurf, and all Agent Skills-compatible agents.
- Built on the Agent Skills spec by [vercel-labs/skills](https://github.com/vercel-labs/skills).

---

## Credits

Built and maintained by [ScayverGraphix](https://github.com/ScayverGraphix).

This project is inspired by and builds on the foundation of [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills). Skills have been rewritten from scratch with expanded frameworks, stricter content standards, and additional coverage across 40 marketing domains.

The Agent Skills spec and `npx skills` CLI are maintained by [vercel-labs/skills](https://github.com/vercel-labs/skills).

---

## Contributing

Found a way to improve a skill? Have a new skill to add? Contributions are welcome.

1. Fork this repository.
2. Create a directory under `skills/` using lowercase hyphens (e.g. `skills/email-deliverability/`).
3. Add a `SKILL.md` with YAML frontmatter containing a `name` and `description` field.
4. Write the instructional content following the Content Standards above.
5. Submit a pull request with a short description of what the skill does and when it activates.

For bugs or feature requests, open an issue on GitHub.

---

## License

MIT License. See [LICENSE](LICENSE) for the full text.

Copyright (c) 2026 ScayverGraphix.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, and to permit persons to whom the software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
