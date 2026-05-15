# marketing-skills

Most AI agents know how to write code. Very few know how to market software.

This library fixes that. It gives your coding agent 40 specialized marketing skills, each one built around a real framework, a real process, and a real output format. You stop getting generic advice. You start getting structured work.

Built by [ScayverGraphix](https://github.com/ScayverGraphix).

[![Version](https://img.shields.io/badge/version-1.0.0-blue)](VERSIONS.md)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Skills](https://img.shields.io/badge/skills-40-orange)](skills/)
[![Agent Skills Spec](https://img.shields.io/badge/Agent%20Skills%20Spec-compatible-brightgreen)](https://github.com/vercel-labs/skills)

---

## The problem this solves

You ask your agent to "write copy for this landing page." It produces something that sounds reasonable, hits no specific framework, and could apply to any product in any industry.

You ask it to "reduce churn." It lists five generic tactics you already knew.

The problem is not the agent. The problem is that the agent has no domain depth. It has broad knowledge but no structured process for marketing work specifically.

Skills give the agent that process. Each skill is a markdown file that tells the agent exactly how to approach a specific marketing task: what questions to ask first, what framework to apply, how to structure the output, and what a good result actually looks like. The agent reads the skill and works from it. You get consistent, structured, professional-grade marketing output instead of freeform responses that vary by session.

---

## How it works

Drop the skills into your project. Your agent picks them up automatically.

When you describe a marketing task, the agent matches your request to the right skill and follows its process. You do not have to name the skill. You do not have to prompt engineer. You describe what you need and the agent does the work.

Every skill includes three things.

**A trigger definition.** The skill tells the agent exactly which requests it handles, including the specific phrases and task descriptions that activate it. When you say "I want to A/B test this headline," the agent activates `ab-testing` without any instruction from you.

**A process.** Each skill defines a step-by-step approach to the task. The `cro` skill tells the agent to define the conversion metric first, map the full funnel, identify friction by stage, score issues with ICE, write a testable hypothesis, and design the experiment. It does not let the agent skip to recommendations.

**An output standard.** Every skill in this library enforces the same content rules. Active voice. Short sentences. Direct address. No buzzwords. Between 1,500 and 10,000 words of actual instructional output per session. The agent delivers structured, readable work that you can act on immediately.

---

## Start here

Before using any other skill, run `product-marketing` once in your project.

It creates a context document that every other skill reads before doing any work. Your product name, target audience, positioning, value proposition, and competitive differentiation live there. You enter it once. Every skill uses it automatically. The `copywriting` skill does not ask you to re-explain your product. The `cro` skill does not ask who your users are. The `cold-email` skill does not ask what you sell.

This is the dependency that makes the whole library coherent.

---

## Skill map

Every skill connects to others. This map shows the full structure.

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
└──────────┘ └──────────┘ └──────────┘ └────────┘ └──────────┘ └─────────────┘ └───────────┘

Cross-skill dependencies:
  copywriting  <->  cro  <->  ab-testing
  revops       <->  sales-enablement  <->  cold-email
  seo-audit    <->  schema  <->  ai-seo
  customer-research  ->  copywriting, cro, competitors
```

Each skill's **Related Skills** section lists every dependency and cross-reference for that specific skill.

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

**All 40 skills at once:**

```bash
npx skills add ScayverGraphix/marketing-skills
```

**Specific skills only:**

```bash
npx skills add ScayverGraphix/marketing-skills --skill copywriting cro cold-email
```

**See what is available before you install:**

```bash
npx skills add ScayverGraphix/marketing-skills --list
```

**Install globally (available in every project on your machine):**

```bash
npx skills add ScayverGraphix/marketing-skills --global
```

**Install across multiple agents at once with SkillKit:**

```bash
npx skillkit install ScayverGraphix/marketing-skills
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

## All 40 skills

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

### Conversion rate optimization

| Skill | Description |
|-------|-------------|
| [`cro`](skills/cro/SKILL.md) | Funnel analysis, friction diagnosis, ICE scoring, hypothesis writing, and A/B test design |
| [`signup`](skills/signup/SKILL.md) | Signup and free trial flow optimization: fields, friction, and abandonment diagnosis |
| [`onboarding`](skills/onboarding/SKILL.md) | Post-signup activation: aha moment, onboarding checklist, and time-to-value |
| [`popups`](skills/popups/SKILL.md) | Exit intent, scroll triggers, lead capture, and announcement banners |
| [`paywalls`](skills/paywalls/SKILL.md) | In-app upgrade screens, feature gates, and freemium-to-paid conversion |

### Content and copy

| Skill | Description |
|-------|-------------|
| [`copywriting`](skills/copywriting/SKILL.md) | AIDA, PAS, FAB, and Before/After/Bridge frameworks for any marketing page |
| [`copy-editing`](skills/copy-editing/SKILL.md) | Copy review, improvement, and content refresh for existing pages |
| [`cold-email`](skills/cold-email/SKILL.md) | B2B cold outreach: subject lines, opening lines, sequences, and reply rate optimization |
| [`emails`](skills/emails/SKILL.md) | Welcome sequences, nurture flows, re-engagement campaigns, and trigger-based emails |
| [`social`](skills/social/SKILL.md) | LinkedIn, X, Instagram, TikTok: posts, threads, carousels, and short-form video scripts |
| [`image`](skills/image/SKILL.md) | AI image generation, prompt writing, product mockups, OG images, and compression |
| [`video`](skills/video/SKILL.md) | AI video production, explainer scripts, demo structure, and distribution |

### Paid advertising and measurement

| Skill | Description |
|-------|-------------|
| [`ads`](skills/ads/SKILL.md) | Google, Meta, LinkedIn, and TikTok campaigns: targeting, bidding, and optimization |
| [`ad-creative`](skills/ad-creative/SKILL.md) | Hook writing, bulk creative generation, and creative testing frameworks |
| [`analytics`](skills/analytics/SKILL.md) | GA4 setup, event tracking, UTM parameters, tag management, and attribution |
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
| [`sales-enablement`](skills/sales-enablement/SKILL.md) | Pitch decks, one-pagers, objection handling, demo scripts, and battle cards |
| [`launch`](skills/launch/SKILL.md) | Product launches: pre-launch prep, Product Hunt, launch day checklist, and post-launch |
| [`pricing`](skills/pricing/SKILL.md) | Pricing models, tier structure, value metrics, and pricing page design |
| [`competitors`](skills/competitors/SKILL.md) | Comparison pages and alternative pages for SEO and sales positioning |
| [`competitor-profiling`](skills/competitor-profiling/SKILL.md) | Competitor research dossiers: positioning, pricing, messaging, and channels |

### Strategy and research

| Skill | Description |
|-------|-------------|
| [`product-marketing`](skills/product-marketing/SKILL.md) | Positioning, ICP, messaging hierarchy, and the context file all skills read first |
| [`marketing-ideas`](skills/marketing-ideas/SKILL.md) | Channel ideas, growth loops, underused tactics, and experiment prioritization |
| [`marketing-psychology`](skills/marketing-psychology/SKILL.md) | Anchoring, social proof, loss aversion, scarcity, and other biases applied to marketing |
| [`customer-research`](skills/customer-research/SKILL.md) | Customer interviews, JTBD, review mining, surveys, and research-to-messaging translation |

---

## Tools

The `tools/` directory gives your agent direct access to marketing platforms.

```
tools/
  clis/           63 JavaScript CLI tools
  integrations/   80+ integration documentation files
  composio/       Composio marketing tool configurations
  REGISTRY.md     Full tool index
```

**CLI tools include:** GA4, Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, Klaviyo, Mailchimp, HubSpot, Segment, Mixpanel, Amplitude, Ahrefs, SEMrush, Hotjar, Intercom, Stripe, Paddle, and more.

**Integration docs cover:** how to connect each platform, what data to pull, how to use it in context with the skills, and which skills reference each tool.

---

## Output standards

Every skill enforces the same rules on every word of output. There are no exceptions.

Output length is between 1,500 and 10,000 words. The agent does not give you a three-paragraph summary when you need a full audit.

Every sentence uses active voice. Passive constructions are not allowed.

The agent addresses you directly. "You" and "your" appear throughout. Generic third-person advice does not.

No em dashes. No hidden Unicode characters. Commas, semicolons, and periods replace them.

No hashtags, emojis, or asterisks in any output.

No AI buzzwords. The agent does not write "leverage," "unlock," "game-changer," "dive into," "cutting-edge," or any variation of these.

No filler phrases. "In conclusion," "in summary," and "in a world where" do not appear.

Every section ends with a specific, actionable next step. No section closes with vague advice.

---

## Changelog

Full history in [VERSIONS.md](VERSIONS.md).

**v1.0.0 (2026-05-15)** — Initial release. 40 skills, 63 CLI tools, 80+ integration docs. All skills enforce mandatory content standards. Compatible with Claude Code, OpenAI Codex, Cursor, Windsurf, and all Agent Skills-compatible agents.

---

## Credits

Created and maintained by [ScayverGraphix](https://github.com/ScayverGraphix).

This library draws on the Agent Skills spec published by [vercel-labs/skills](https://github.com/vercel-labs/skills) and builds on work from the marketing skills community, including the original [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) project.

---

## Contributing

Open a pull request with a new or improved skill. The only requirements are a `SKILL.md` with valid frontmatter and instructional content that follows the output standards above. Include a one-sentence description of what the skill does and when it activates.

For bugs or questions, open an issue on GitHub.

---

## License

MIT. Copyright 2026 ScayverGraphix. See [LICENSE](LICENSE) for the full text.
