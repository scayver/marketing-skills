# Demo Walkthrough

This walkthrough shows how the repository works once installed in an Agent Skills-compatible coding agent.

## 1. Install the Skills

```bash
npx skills add scayver/marketing-skills
```

Install only the skills you need when you want a smaller footprint.

```bash
npx skills add scayver/marketing-skills --skill product-marketing prospect-research cold-email landing-page-cro
```

## 2. Create Product Context

Ask your agent:

```text
Use product-marketing to create the positioning context for my SaaS product.
```

The agent should create or update a product marketing context document with ICP, positioning, value proposition, messaging hierarchy, competitive differentiation, product narrative, and use cases.

## 3. Build a Prospect List From Developer Intent

Ask your agent:

```text
Use prospect-research to find developer-intent signals from GitHub stargazers, forks, and watchers for owner/repo.
```

Or run the CLI directly.

```bash
GITHUB_TOKEN=ghp_xxx node tools/clis/github-prospects.js prospects export --repo owner/repo --signals stargazers,forks,watchers --limit 100
```

The output gives your agent public GitHub profiles, matched intent signals, fork activity where available, and a compliance note.

## 4. Turn Research Into Outreach

Ask your agent:

```text
Use cold-email to write a three-email sequence for the highest-fit accounts from this prospect list. Use the trigger signal in the opening line.
```

The agent should produce specific subject lines, opening lines, short body copy, follow-ups, and CTAs.

## 5. Improve the Conversion Path

Ask your agent:

```text
Use landing-page-cro to audit this landing page and rewrite the hero, benefits, CTA, and FAQ section.
```

The agent should diagnose friction, rewrite the high-impact sections, and suggest A/B test variants.

## 6. Track the Work

Run validation before committing changes.

```bash
npm run validate
```

Expected result:

```text
Validation passed: 58 skills, 347 integration guides, 62 CLI tools.
```

## Useful Demo Chains

| Goal | Skill Chain |
|------|-------------|
| Launch a SaaS | `product-marketing` -> `launch` -> `landing-page-cro` -> `email-marketing` -> `linkedin-strategy` |
| Build SEO traffic | `product-marketing` -> `seo-content-strategy` -> `seo-blog-writer` -> `schema` -> `content-repurposing` |
| Build outbound pipeline | `product-marketing` -> `prospect-research` -> `cold-email` -> `linkedin-strategy` -> `revops` |
| Grow local leads | `local-seo` -> `prospect-research` -> `customer-service` -> `social-content-planner` |
| Improve conversion | `analytics` -> `cro` -> `landing-page-cro` -> `ab-testing` -> `copywriting` |
