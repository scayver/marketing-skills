---
name: prospecting
description: >
  Use this skill when the user wants to build qualified lead lists, research prospects,
  score accounts, find buying signals, prepare outreach handoffs, or qualify SaaS,
  B2B, developer, partner, or local SMB prospects. Trigger phrases include "build a
  prospect list," "find leads," "lead qualification," "prospecting," "developer
  intent," "GitHub stargazers," "funding triggers," "hiring triggers," "decision-maker
  mapping," "Apollo research," "ZoomInfo research," "Sales Navigator research,"
  "Google Maps prospecting," and "local SMB lead list."
---

# Prospecting

## Mandatory Content Standards

- Write in active voice.
- Use short sentences and plain language.
- Address the user as "you" and "your."
- Use `.marketing-os/product-context.md` when it exists. If it is blank or missing, recommend running `product-marketing` first.
- Ask for missing ICP, segment, geography, offer, or compliance constraints before producing a final prospect list.
- Do not invent companies, contacts, email addresses, private data, analytics results, or verified intent signals.
- Include source URLs, evidence notes, and confidence levels for every researched account when available.
- Respect CAN-SPAM, GDPR, CASL, TCPA, platform terms, and anti-scraping limits.
- Do not recommend bulk scraping from LinkedIn, Google Maps, GitHub, or any platform where the method violates terms.
- Do not use em dashes, hashtags, emojis, or filler closings.
- End every full deliverable with one specific next step.

## Objective

Use this skill to turn a vague target market into a prioritized prospect list with clear evidence, fit scoring, trigger events, and a compliant outreach handoff.

This skill works before `cold-email`, `linkedin-strategy`, `revops`, `sales-enablement`, `email-marketing`, and `prospect-research`. It answers who to contact, why they fit, why now, and what message angle should start the conversation.

Next step: define the market segment before collecting contacts.

## Required Inputs

| Input | Why It Matters |
|-------|----------------|
| Offer or product | Defines pain, value, and qualification logic |
| Ideal customer profile | Prevents random lead collection |
| Segment mode | Chooses SaaS, B2B, developer, local SMB, or partner workflow |
| Geography | Keeps compliance, local relevance, and market size clear |
| Buying trigger | Separates active prospects from nurture accounts |
| Data sources allowed | Keeps research compliant and practical |
| Outreach channel | Shapes opt-out, consent, and personalization requirements |

Next step: ask for the missing input that most affects qualification quality.

## Segment Modes

| Mode | Best For | Primary Signals | Useful Sources |
|------|----------|-----------------|----------------|
| SaaS and developer tools | DevTools, APIs, infrastructure, open-source products | Tech stack, funding, hiring, GitHub stars, forks, watchers, repo topics | GitHub, BuiltWith, Wappalyzer, job boards, funding databases |
| B2B commercial teams | Agencies, SaaS, service firms, mid-market sellers | Firmographics, new roles, tool usage, funding, department growth | Apollo, ZoomInfo, Sales Navigator, company sites |
| Local SMB | Home services, clinics, restaurants, local services | Website quality, reviews, Google Business Profile, booking friction | Browser-assisted Google Maps research, business websites, review sites |
| Partner ecosystem | Agencies, consultants, communities, integrators | Audience fit, complementary offers, integration fit, trust overlap | Partner pages, directories, LinkedIn, communities |

Next step: select one mode before collecting accounts.

## Qualification Framework

Score each account from 0 to 15.

| Factor | Score | What To Check |
|--------|-------|---------------|
| ICP fit | 0 to 3 | Industry, size, geography, business model, use case |
| Pain fit | 0 to 3 | Public evidence of the problem your offer solves |
| Timing | 0 to 3 | Funding, hiring, expansion, new tools, new initiatives |
| Reachability | 0 to 2 | Valid public contact path or known decision-maker role |
| Personalization depth | 0 to 2 | Specific reason you can mention in outreach |
| Compliance risk | -2 to 2 | Consent status, channel rules, source restrictions |

Prioritize accounts with a score of 10 or higher. Place accounts from 7 to 9 into nurture. Reject accounts below 7 unless the user asks for market exploration.

Next step: define the minimum score required for active outreach.

## Research Workflows

### SaaS And Developer Tools

Use public technical signals as prioritization inputs, not as permission to spam.

- GitHub stargazers on your repo, competitor repos, and adjacent open-source projects.
- Forks that suggest evaluation or implementation intent.
- Watchers, represented by GitHub subscribers.
- Public repo topics, languages, and organization domains.
- Stack signals such as Vercel, Supabase, Stripe, Segment, PostHog, HubSpot, Salesforce, Shopify, or Intercom.
- Funding announcements followed by GTM, RevOps, engineering, security, or data hiring.
- Integration pages that mention tools your product supports or replaces.

Use `tools/clis/github-prospects.js` when the user has a GitHub token and a repo target.

```bash
GITHUB_TOKEN=ghp_xxx node tools/clis/github-prospects.js prospects export --repo owner/repo --signals stargazers,forks,watchers --limit 300
```

Next step: rank GitHub accounts by signal strength before enriching contacts.

### B2B Commercial Teams

Map firmographics, triggers, and decision-makers together. Do not use a contact database as the strategy.

| Research Layer | Fields |
|----------------|--------|
| Account fit | Company, website, industry, size, location, funding stage, revenue band |
| Trigger event | Funding, hiring, leadership change, launch, expansion, compliance pressure |
| Decision map | Economic buyer, champion, technical evaluator, procurement or legal |
| Outreach reason | One sentence that connects the trigger to the offer |
| Source proof | URL, date, and evidence note |

Next step: choose one first-contact persona per account before writing messages.

### Local SMB

Use browser-assisted research for local businesses. Do not automate scraping against Google Maps or review platforms.

| Tier | Website Status | Opportunity |
|------|----------------|-------------|
| Tier 1 | No website or broken website | New site, booking, local SEO, basic trust assets |
| Tier 2 | Outdated site with weak conversion | Redesign, forms, calls, reviews, service pages |
| Tier 3 | Functional site with SEO gaps | City pages, schema, GBP optimization, content |
| Tier 4 | Strong site with growth gaps | CRO, ads, reputation, automation, retention |

Next step: group local businesses by tier before proposing outreach angles.

## Compliance Guardrails

Always include a compliance note when the output supports outreach.

- CAN-SPAM: include truthful identity, accurate subject lines, a physical mailing address when required, and a clear opt-out.
- GDPR: document lawful basis, minimize data, respect deletion requests, and avoid collecting unnecessary personal data.
- CASL: check consent requirements before messaging Canadian recipients.
- TCPA: do not use SMS or calls without proper consent and opt-out handling.
- Platform terms: do not recommend scraping or automation that violates LinkedIn, Google, GitHub, or directory rules.

This skill does not provide legal advice. It produces operational compliance checkpoints for review.

Next step: identify the strictest compliance rule that applies to the target geography and channel.

## Output Format

Use this table for prospect lists.

| Rank | Account | Segment | Fit Score | Trigger | Decision-Maker Role | Evidence URL | Outreach Angle | Compliance Note | Next Action |
|------|---------|---------|-----------|---------|---------------------|--------------|----------------|-----------------|-------------|

End with the next skill to run, usually `cold-email`, `linkedin-strategy`, `revops`, or `sales-enablement`.

