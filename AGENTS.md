# marketing-skills — Agent Instructions

This repository contains 40 reusable marketing and growth skills for AI agents. Each skill lives in `skills/<skill-name>/SKILL.md`.

## For Agents Using These Skills

When a skill is activated, follow the instructions in the corresponding `SKILL.md` exactly. Every skill defines:

- **When to activate** — described in the YAML `description` field with trigger phrases.
- **Mandatory Content Standards** — a required section near the top of each skill that governs every word of output.
- **Framework** — the process, methodology, and structured approach to follow.
- **Output format** — what to deliver and how to structure it.

Never skip the Mandatory Content Standards section. It applies to every word you write when using a skill.

## Repository Structure

```
marketing-skills/
├── skills/
│   ├── ab-testing/
│   ├── ad-creative/
│   ├── ads/
│   ├── ai-seo/
│   ├── analytics/
│   ├── aso/
│   ├── churn-prevention/
│   ├── co-marketing/
│   ├── cold-email/
│   ├── community-marketing/
│   ├── competitor-profiling/
│   ├── competitors/
│   ├── content-strategy/
│   ├── copy-editing/
│   ├── copywriting/
│   ├── cro/
│   ├── customer-research/
│   ├── directory-submissions/
│   ├── emails/
│   ├── free-tools/
│   ├── image/
│   ├── launch/
│   ├── lead-magnets/
│   ├── marketing-ideas/
│   ├── marketing-psychology/
│   ├── onboarding/
│   ├── paywalls/
│   ├── popups/
│   ├── pricing/
│   ├── product-marketing/
│   ├── programmatic-seo/
│   ├── referrals/
│   ├── revops/
│   ├── sales-enablement/
│   ├── schema/
│   ├── seo-audit/
│   ├── signup/
│   ├── site-architecture/
│   ├── social/
│   └── video/
├── package.json
├── README.md
└── AGENTS.md
```

## Skill Activation

Skills activate automatically when the user's request matches the trigger phrases in each skill's `description` frontmatter. When activated:

1. Read the full `SKILL.md` for the skill.
2. Apply the Mandatory Content Standards to every word of output.
3. Follow the defined framework and output format.
4. Ask for clarifying context (audience, goal, data) before proceeding if critical information is missing.

Start with the `product-marketing` skill when beginning work on a new project. It creates the context document all other skills reference for product, audience, and positioning.

## Adding New Skills

New skills must follow this format:

```yaml
---
name: skill-name
description: >
  When to use this skill and trigger phrases.
---
```

Followed by a Mandatory Content Standards section (copy from any existing skill) and detailed instructional content covering process, frameworks, and output format.
