# marketing-skills

40 marketing and growth skills for Claude Code and AI agents. Every skill follows strict human-centric content standards: active voice, short sentences, no AI cliches, direct reader address, and 1,500 to 10,000 words of actionable output per use.

## Install

**Install all skills:**
```bash
npx skills add ScayverGraphix/marketing-skills
```

**Install specific skills:**
```bash
npx skills add ScayverGraphix/marketing-skills --skill copywriting cold-email cro
```

**List available skills:**
```bash
npx skills add ScayverGraphix/marketing-skills --list
```

Skills install to `.claude/skills/` in your project by default. Use `--global` to install to `~/.claude/skills/`.

## Skills

| Skill | What it does |
|-------|-------------|
| [`ab-testing`](skills/ab-testing/SKILL.md) | Plan, design, and run A/B tests and growth experimentation programs |
| [`ad-creative`](skills/ad-creative/SKILL.md) | Generate and iterate ad creative for Meta, Google, LinkedIn, and TikTok |
| [`ads`](skills/ads/SKILL.md) | Paid advertising strategy, targeting, bidding, and optimization |
| [`ai-seo`](skills/ai-seo/SKILL.md) | Optimize content to be cited by AI search engines and LLMs |
| [`analytics`](skills/analytics/SKILL.md) | Set up, audit, and fix marketing analytics tracking |
| [`aso`](skills/aso/SKILL.md) | App Store and Google Play listing optimization |
| [`churn-prevention`](skills/churn-prevention/SKILL.md) | Reduce churn with cancellation flows, save offers, and dunning |
| [`co-marketing`](skills/co-marketing/SKILL.md) | Find partners and plan joint campaigns |
| [`cold-email`](skills/cold-email/SKILL.md) | Write B2B cold emails and follow-up sequences that get replies |
| [`community-marketing`](skills/community-marketing/SKILL.md) | Build and leverage communities to drive growth |
| [`competitor-profiling`](skills/competitor-profiling/SKILL.md) | Research and profile competitors into structured dossiers |
| [`competitors`](skills/competitors/SKILL.md) | Create comparison and alternative pages for SEO and sales |
| [`content-strategy`](skills/content-strategy/SKILL.md) | Plan what content to create and how to distribute it |
| [`copy-editing`](skills/copy-editing/SKILL.md) | Edit, review, and refresh existing marketing copy |
| [`copywriting`](skills/copywriting/SKILL.md) | Write high-converting copy for any marketing page |
| [`cro`](skills/cro/SKILL.md) | Conversion rate optimization for pages and forms |
| [`customer-research`](skills/customer-research/SKILL.md) | Conduct and synthesize customer research into messaging |
| [`directory-submissions`](skills/directory-submissions/SKILL.md) | Submit to directories for backlinks and product discovery |
| [`emails`](skills/emails/SKILL.md) | Create lifecycle email sequences and drip campaigns |
| [`free-tools`](skills/free-tools/SKILL.md) | Plan and build free tools as a marketing channel |
| [`image`](skills/image/SKILL.md) | Create and optimize marketing images with AI tools |
| [`launch`](skills/launch/SKILL.md) | Plan and execute product launches and feature announcements |
| [`lead-magnets`](skills/lead-magnets/SKILL.md) | Create lead magnets for email capture and lead generation |
| [`marketing-ideas`](skills/marketing-ideas/SKILL.md) | Generate and prioritize marketing ideas and experiments |
| [`marketing-psychology`](skills/marketing-psychology/SKILL.md) | Apply behavioral science and cognitive biases to marketing |
| [`onboarding`](skills/onboarding/SKILL.md) | Optimize post-signup activation and time-to-value |
| [`paywalls`](skills/paywalls/SKILL.md) | Design and optimize in-app upgrade screens and feature gates |
| [`popups`](skills/popups/SKILL.md) | Create and optimize popups, modals, and overlays |
| [`pricing`](skills/pricing/SKILL.md) | Pricing strategy, packaging, and monetization decisions |
| [`product-marketing`](skills/product-marketing/SKILL.md) | Build the positioning and messaging foundation all other skills use |
| [`programmatic-seo`](skills/programmatic-seo/SKILL.md) | Create SEO-driven pages at scale using templates and data |
| [`referrals`](skills/referrals/SKILL.md) | Design referral programs, affiliate programs, and viral loops |
| [`revops`](skills/revops/SKILL.md) | Revenue operations, lead scoring, and marketing-to-sales handoff |
| [`sales-enablement`](skills/sales-enablement/SKILL.md) | Create pitch decks, one-pagers, objection docs, and battle cards |
| [`schema`](skills/schema/SKILL.md) | Add and optimize schema markup for rich snippets and AI search |
| [`seo-audit`](skills/seo-audit/SKILL.md) | Full SEO audit: technical, on-page, content, and off-page |
| [`signup`](skills/signup/SKILL.md) | Optimize signup and free trial activation flows |
| [`site-architecture`](skills/site-architecture/SKILL.md) | Plan page hierarchy, navigation, and internal linking |
| [`social`](skills/social/SKILL.md) | Create social content for LinkedIn, X, Instagram, and TikTok |
| [`video`](skills/video/SKILL.md) | Produce marketing video using AI tools and programmatic frameworks |

## Content Standards

Every skill in this library enforces the same output standards.

- 1,500 to 10,000 words of actionable content per output.
- Active voice throughout. No passive constructions.
- Short sentences. One idea per sentence.
- Direct reader address using "you" and "your."
- No em dashes or hidden Unicode characters.
- No hashtags, emojis, or asterisks.
- No AI buzzwords or cliches.
- No filler phrases like "in conclusion" or "in a world where."
- Specific examples and data over broad generalizations.
- Every section ends with a clear next step.

## Contributing

1. Fork this repo.
2. Create a directory under `skills/` using lowercase hyphens.
3. Add a `SKILL.md` with YAML frontmatter (`name` and `description`) and detailed markdown instructions.
4. Apply the Content Standards above to all instructional prose.
5. Submit a pull request.

## License

MIT
