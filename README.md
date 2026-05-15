# marketing-skills

Most AI agents know how to write code. Very few know how to market software, build a brand, or turn a landing page into a revenue engine.

This library fixes that. It gives your agent 57 specialized marketing and growth skills, each one built around a real framework, a real process, and a real output format. You stop getting generic advice. You start getting structured, professional-grade marketing work on demand.

---

> **Support this work**
>
> This library was researched, designed, and built by one person. If it saves you time, helps you ship better marketing, or gives your agent capabilities it did not have before, consider supporting the work that made it possible.
>
> ☕ [Buy me a coffee](https://buymeacoffee.com/dorcelusalain) — buymeacoffee.com/dorcelusalain
>
> 💸 CashApp — **$AlainDorcelus**
>
> Every contribution directly funds new skills, improved frameworks, and continued maintenance of this library.

---

Created and maintained by **[Alain Dorcelus](https://github.com/ScayverGraphix)** · [ScayverGraphix](https://github.com/ScayverGraphix)

[![Version](https://img.shields.io/badge/version-1.1.0-blue)](VERSIONS.md)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Skills](https://img.shields.io/badge/skills-57-orange)](skills/)
[![Agent Skills Spec](https://img.shields.io/badge/Agent%20Skills%20Spec-compatible-brightgreen)](https://github.com/vercel-labs/skills)

---

## The problem this solves

You ask your agent to "write copy for this landing page." It produces something that sounds reasonable, hits no specific framework, and could apply to any product in any industry.

You ask it to "write a press release." It returns a generic document that no journalist would open.

You ask it to "plan a LinkedIn content strategy." It lists five tactics you already knew.

The problem is not the agent. The problem is that the agent has no domain depth. It has broad knowledge but no structured process for marketing work specifically.

Skills give the agent that process. Each skill is a markdown file that tells the agent exactly how to approach a specific marketing task: what questions to ask first, what framework to apply, how to structure the output, and what a good result actually looks like. The agent reads the skill and works from it. You get consistent, structured, professional-grade marketing output every time.

---

## How it works

Drop the skills into your project. Your agent picks them up automatically.

When you describe a marketing task, the agent matches your request to the right skill and follows its process. You do not have to name the skill. You do not have to prompt engineer. You describe what you need and the agent does the work.

Every skill includes three things.

**A trigger definition.** The skill tells the agent exactly which requests it handles, including the specific phrases and task descriptions that activate it. When you say "respond to this Google review," the agent activates `customer-service` without any instruction from you.

**A process.** Each skill defines a step-by-step approach to the task. The `pr-communications` skill tells the agent to identify the media angle before writing a single line of the press release, produce the output table, then deliver the full press release with a wire summary and a social version. It does not let the agent skip steps.

**An output standard.** Every skill in this library enforces the same content rules. Active voice. Short sentences. Direct address. No buzzwords. Between 1,500 and 10,000 words of actual instructional output per session. The agent delivers structured, readable work that you can act on immediately.

---

## Start here

Before using any other skill, run `product-marketing` once in your project.

It creates a context document that every other skill reads before doing any work. Your product name, target audience, positioning, value proposition, and competitive differentiation live there. You enter it once. Every skill uses it automatically. The `copywriting` skill does not ask you to re-explain your product. The `cro` skill does not ask who your users are. The `email-marketing` skill does not ask what you sell.

This is the dependency that makes the whole library coherent.

---

## Skill map

```
                        ┌──────────────────────────────────────┐
                        │          product-marketing           │
                        │    (read by all other skills first)  │
                        └──────────────────┬───────────────────┘
                                           │
  ┌──────────────┬─────────────┬───────────┼──────────┬──────────────┬──────────────┬──────────────┐
  ▼              ▼             ▼           ▼          ▼              ▼              ▼              ▼
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐ ┌──────────┐ ┌─────────────┐ ┌───────────┐ ┌───────────┐
│  SEO &   │ │   CRO    │ │Content & │ │ Paid & │ │ Growth & │ │  Sales &    │ │ Strategy  │ │ Creator & │
│ Discovery│ │          │ │   Copy   │ │Measure │ │Retention │ │    GTM      │ │           │ │  Brand    │
├──────────┤ ├──────────┤ ├──────────┤ ├────────┤ ├──────────┤ ├─────────────┤ ├───────────┤ ├───────────┤
│seo-audit │ │cro       │ │copywritng│ │ads     │ │referrals │ │revops       │ │mktg-ideas │ │brand-     │
│ai-seo    │ │signup    │ │copy-edit │ │ad-creat│ │free-tools│ │sales-enable │ │mktg-psych │ │ storytell │
│site-arch │ │onboarding│ │cold-email│ │ab-test │ │churn-prev│ │launch       │ │customer-  │ │business-  │
│programm  │ │popups    │ │emails    │ │analyts │ │community │ │pricing      │ │  research │ │ strategy  │
│schema    │ │paywalls  │ │social    │ │        │ │lead-magnt│ │competitors  │ │           │ │linkedin-  │
│content   │ │landing-  │ │video     │ │        │ │co-mktg   │ │comp-profile │ │           │ │ strategy  │
│aso       │ │ page-cro │ │sales-copy│ │        │ │directory │ │             │ │           │ │pr-comms   │
│seo-blog  │ │          │ │email-mkt │ │        │ │          │ │             │ │           │ │ai-image   │
│seo-strat │ │          │ │local-seo │ │        │ │          │ │             │ │           │ │education  │
│          │ │          │ │ecommerce │ │        │ │          │ │             │ │           │ │           │
│          │ │          │ │instagram │ │        │ │          │ │             │ │           │ │           │
│          │ │          │ │social-   │ │        │ │          │ │             │ │           │ │           │
│          │ │          │ │ planner  │ │        │ │          │ │             │ │           │ │           │
│          │ │          │ │content-  │ │        │ │          │ │             │ │           │ │           │
│          │ │          │ │ repurpose│ │        │ │          │ │             │ │           │ │           │
│          │ │          │ │customer- │ │        │ │          │ │             │ │           │ │           │
│          │ │          │ │ service  │ │        │ │          │ │             │ │           │ │           │
└──────────┘ └──────────┘ └──────────┘ └────────┘ └──────────┘ └─────────────┘ └───────────┘ └───────────┘

Cross-skill dependencies:
  copywriting      <->  cro           <->  ab-testing
  revops           <->  sales-enable  <->  cold-email
  seo-audit        <->  schema        <->  ai-seo
  seo-blog-writer  <->  seo-content-strategy
  customer-research ->  copywriting, cro, competitors
  brand-storytelling -> linkedin-strategy, pr-communications
  email-marketing  <->  landing-page-cro  <->  sales-copywriting
  local-seo        <->  seo-audit     <->  seo-content-strategy
  education-content -> content-repurposing, email-marketing
  ai-image-creator  -> instagram-carousel, social-content-planner
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

**All 57 skills at once:**

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

## All 57 skills

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
| [`social`](skills/social/SKILL.md) | LinkedIn, X, Instagram, TikTok: posts, threads, carousels, and short-form video scripts |
| [`image`](skills/image/SKILL.md) | AI image generation, prompt writing, product mockups, OG images, and compression |
| [`video`](skills/video/SKILL.md) | AI video production, explainer scripts, demo structure, and distribution |
| [`sales-copywriting`](skills/sales-copywriting/SKILL.md) | Long-form sales letters, VSLs, direct response copy, and value proposition writing across 10 formats |
| [`content-repurposing`](skills/content-repurposing/SKILL.md) | Transform one piece of content into six platform-native formats with humanization and topic generation |
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
| [`email-marketing`](skills/email-marketing/SKILL.md) | Cold email, abandoned cart, lead magnet delivery, newsletter generation, and campaign repurposing |

### Strategy and research

| Skill | Description |
|-------|-------------|
| [`product-marketing`](skills/product-marketing/SKILL.md) | Positioning, ICP, messaging hierarchy, and the context file all skills read first |
| [`marketing-ideas`](skills/marketing-ideas/SKILL.md) | Channel ideas, growth loops, underused tactics, and experiment prioritization |
| [`marketing-psychology`](skills/marketing-psychology/SKILL.md) | Anchoring, social proof, loss aversion, scarcity, and other biases applied to marketing |
| [`customer-research`](skills/customer-research/SKILL.md) | Customer interviews, JTBD, review mining, surveys, and research-to-messaging translation |
| [`business-strategy`](skills/business-strategy/SKILL.md) | Business idea generation, full business plan development, and customer journey mapping across 7 stages |

### Brand, creator, and communications

| Skill | Description |
|-------|-------------|
| [`brand-storytelling`](skills/brand-storytelling/SKILL.md) | Brand voice audits, About Pages, customer avatars, value propositions, and brand story writing |
| [`linkedin-strategy`](skills/linkedin-strategy/SKILL.md) | LinkedIn posts, profile optimization, connection messages, DM sequences, and company page content |
| [`pr-communications`](skills/pr-communications/SKILL.md) | Press releases, media pitches, crisis communications, executive quotes, and PR repurposing |
| [`ai-image-creator`](skills/ai-image-creator/SKILL.md) | Image prompt generation, content asset maps, Instagram carousel and Story slide production |
| [`education-content`](skills/education-content/SKILL.md) | Course descriptions, Bloom's Taxonomy objectives, module outlines, workshop descriptions, and curriculum maps |

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

No hashtags, emojis, or asterisks in any strategy or long-form output. Social media repurposed formats use platform-appropriate formatting only.

No AI buzzwords. The agent does not write "leverage," "unlock," "game-changer," "dive into," "cutting-edge," or any variation of these.

No filler phrases. "In conclusion," "in summary," and "in a world where" do not appear.

Every section ends with a specific, actionable next step. No section closes with vague advice.

---

## Changelog

Full history in [VERSIONS.md](VERSIONS.md).

**v1.1.0 (2026-05-15)** — 17 new skills added by Alain Dorcelus: sales-copywriting, instagram-carousel, social-content-planner, brand-storytelling, business-strategy, content-repurposing, landing-page-cro, customer-service, ecommerce-content, seo-blog-writer, ai-image-creator, education-content, email-marketing, linkedin-strategy, local-seo, pr-communications, seo-content-strategy. Total skill count: 57.

**v1.0.0 (2026-05-15)** — Initial release. 40 skills, 63 CLI tools, 80+ integration docs. All skills enforce mandatory content standards. Compatible with Claude Code, OpenAI Codex, Cursor, Windsurf, and all Agent Skills-compatible agents.

---

## Credits and support

This library was created and is maintained by **Alain Dorcelus** ([ScayverGraphix](https://github.com/ScayverGraphix)).

The 17 custom skills added in v1.1.0 represent original instructional design work covering email marketing, brand storytelling, LinkedIn strategy, public relations, local SEO, e-commerce content, education content development, AI image creation, and more. Each skill was researched, structured, and written from scratch to meet the same output standards as the original library.

If this library saves you hours of prompting, gives your agent new capabilities, or ships better marketing for your business, consider supporting the work directly.

**Support Alain's work:**

- ☕ [buymeacoffee.com/dorcelusalain](https://buymeacoffee.com/dorcelusalain)
- 💸 CashApp: **$AlainDorcelus**

This library also draws on the Agent Skills spec published by [vercel-labs/skills](https://github.com/vercel-labs/skills) and builds on work from the marketing skills community, including the original [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) project.

---

## Contributing

Open a pull request with a new or improved skill. The only requirements are a `SKILL.md` with valid frontmatter and instructional content that follows the output standards above. Include a one-sentence description of what the skill does and when it activates.

For bugs or questions, open an issue on GitHub.

---

## License

MIT. Copyright 2026 Alain Dorcelus (ScayverGraphix). See [LICENSE](LICENSE) for the full text.
