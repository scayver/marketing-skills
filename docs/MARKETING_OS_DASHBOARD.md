# Marketing Skills OS Dashboard

Generated from `docs/MARKETING_OS_MANIFEST.json`, local skills, integration guides, CLI tools, and the social post library for Marketing Skills OS.

Install Marketing Skills OS:

```bash
npx skills add scayver/marketing-skills
```

## OS Inventory

| Asset | Count |
|-------|------:|
| Skills | 71 |
| Integration guides | 347 |
| CLI tools | 62 |
| Workflows | 7 |
| Social posts | 480 |

## OS Commands

| Command | Purpose |
|---------|---------|
| `npm run os:summary` | Print the OS inventory and workflow list. |
| `npm run os:init -- --target ../my-project` | Create a `.marketing-os/` workspace. |
| `npm run os:run -- --target ../my-project --workflow saas-launch --force` | Activate a workflow. |
| `npm run os:review -- --target ../my-project --date 2026-05-28 --force` | Create a weekly review. |
| `npm run os:status -- --target ../my-project` | Inspect workspace readiness. |
| `npm run os:snapshot -- --target ../my-project --date 2026-05-28 --force` | Persist current state for future agent sessions. |

## OS Layer Skill Coverage

These layers show the skills that support the operating system beyond the seven workflow cards.

| Layer | Purpose | Skills |
|-------|---------|--------|
| `context` | Define ICP, positioning, offer, category, and product story. | [product-marketing](../skills/product-marketing/SKILL.md), [customer-research](../skills/customer-research/SKILL.md), [market-research](../skills/market-research/SKILL.md), [business-strategy](../skills/business-strategy/SKILL.md), [brand-storytelling](../skills/brand-storytelling/SKILL.md), [brand-guidelines](../skills/brand-guidelines/SKILL.md) |
| `strategy` | Choose the growth motion and roadmap. | [marketing-os](../skills/marketing-os/SKILL.md), [marketing-ideas](../skills/marketing-ideas/SKILL.md), [marketing-psychology](../skills/marketing-psychology/SKILL.md), [skill-security-auditor](../skills/skill-security-auditor/SKILL.md), [env-secrets-manager](../skills/env-secrets-manager/SKILL.md), [competitor-profiling](../skills/competitor-profiling/SKILL.md), [competitors](../skills/competitors/SKILL.md), [pricing](../skills/pricing/SKILL.md) |
| `demand` | Create awareness and qualified demand. | [seo-content-strategy](../skills/seo-content-strategy/SKILL.md), [seo-blog-writer](../skills/seo-blog-writer/SKILL.md), [ai-seo](../skills/ai-seo/SKILL.md), [content-strategy](../skills/content-strategy/SKILL.md), [site-architecture](../skills/site-architecture/SKILL.md), [programmatic-seo](../skills/programmatic-seo/SKILL.md), [aso](../skills/aso/SKILL.md), [social](../skills/social/SKILL.md), [linkedin-strategy](../skills/linkedin-strategy/SKILL.md), [pr-communications](../skills/pr-communications/SKILL.md), [yt-competitive-analysis](../skills/yt-competitive-analysis/SKILL.md), [ads](../skills/ads/SKILL.md), [directory-submissions](../skills/directory-submissions/SKILL.md), [free-tools](../skills/free-tools/SKILL.md), [lead-magnets](../skills/lead-magnets/SKILL.md), [co-marketing](../skills/co-marketing/SKILL.md) |
| `conversion` | Convert attention into leads, trials, demos, customers, or upgrades. | [landing-page-cro](../skills/landing-page-cro/SKILL.md), [copywriting](../skills/copywriting/SKILL.md), [sales-copywriting](../skills/sales-copywriting/SKILL.md), [popups](../skills/popups/SKILL.md), [cro](../skills/cro/SKILL.md), [a11y-audit](../skills/a11y-audit/SKILL.md), [signup](../skills/signup/SKILL.md), [paywalls](../skills/paywalls/SKILL.md), [ab-testing](../skills/ab-testing/SKILL.md) |
| `pipeline` | Create and manage sales opportunities. | [prospect-research](../skills/prospect-research/SKILL.md), [prospecting](../skills/prospecting/SKILL.md), [cold-email](../skills/cold-email/SKILL.md), [sales-enablement](../skills/sales-enablement/SKILL.md), [revops](../skills/revops/SKILL.md), [email-marketing](../skills/email-marketing/SKILL.md) |
| `retention` | Increase activation, retention, advocacy, and expansion. | [onboarding](../skills/onboarding/SKILL.md), [churn-prevention](../skills/churn-prevention/SKILL.md), [customer-service](../skills/customer-service/SKILL.md), [emails](../skills/emails/SKILL.md), [referrals](../skills/referrals/SKILL.md), [community-marketing](../skills/community-marketing/SKILL.md), [education-content](../skills/education-content/SKILL.md) |
| `measurement` | Track performance and decide what to improve. | [analytics](../skills/analytics/SKILL.md), [social-media-analyzer](../skills/social-media-analyzer/SKILL.md), [seo-audit](../skills/seo-audit/SKILL.md), [ab-testing](../skills/ab-testing/SKILL.md), [revops](../skills/revops/SKILL.md) |
| `assets` | Create reusable content, visuals, and campaigns. | [content-repurposing](../skills/content-repurposing/SKILL.md), [content-humanizer](../skills/content-humanizer/SKILL.md), [podcast-pipeline](../skills/podcast-pipeline/SKILL.md), [copy-editing](../skills/copy-editing/SKILL.md), [ai-image-creator](../skills/ai-image-creator/SKILL.md), [instagram-carousel](../skills/instagram-carousel/SKILL.md), [video](../skills/video/SKILL.md), [image](../skills/image/SKILL.md), [social-content-planner](../skills/social-content-planner/SKILL.md) |

## Outcome Routing By Stage

### Launch

| Outcome | Primary Skill | Deliverables | Metrics |
|---------|---------------|--------------|---------|
| [SaaS Launch](#saas-launch) | `marketing-os` | positioning context, launch plan, launch page | visitors, waitlist signups, trial starts |

### Demand

| Outcome | Primary Skill | Deliverables | Metrics |
|---------|---------------|--------------|---------|
| [SEO Growth Engine](#seo-growth-engine) | `seo-content-strategy` | topic clusters, SEO briefs, blog posts | impressions, clicks, rankings |
| [Local SMB Growth](#local-smb-growth) | `local-seo` | city page, service area page, GBP description | map pack visibility, calls, form leads |

### Pipeline

| Outcome | Primary Skill | Deliverables | Metrics |
|---------|---------------|--------------|---------|
| [Developer-Intent Outbound](#developer-intent-outbound) | `prospect-research` | ICP filter, intent signal export, account list | qualified accounts, reply rate, meetings booked |

### Conversion

| Outcome | Primary Skill | Deliverables | Metrics |
|---------|---------------|--------------|---------|
| [Conversion Lab](#conversion-lab) | `cro` | funnel diagnosis, friction map, hypothesis backlog | conversion rate, CTA clicks, form completion |

### Revenue

| Outcome | Primary Skill | Deliverables | Metrics |
|---------|---------------|--------------|---------|
| [Ecommerce Revenue](#ecommerce-revenue) | `ecommerce-content` | product descriptions, category page copy, launch emails | conversion rate, AOV, cart recovery |

### Retention

| Outcome | Primary Skill | Deliverables | Metrics |
|---------|---------------|--------------|---------|
| [Retention and Advocacy](#retention-and-advocacy) | `churn-prevention` | onboarding flow, save offers, support templates | activation, time-to-value, support volume |

## Workflow Cards

<a id="saas-launch"></a>
### SaaS Launch

**Goal:** Launch a SaaS product, feature, AI tool, open-source project, or agent product.

**Stage:** Launch

**Primary skill:** `marketing-os`

**Skill stack:**

- `product-marketing` - Create and maintain a product marketing context document covering positioning, ICP definition, messaging hierarchy, competitive differentiation, and value proposition. This skill...
- `business-strategy` - You are a professional business strategist and customer journey specialist. Use this skill when the user wants to develop a business idea, build a business plan, map a customer...
- `market-research` - Use this skill when the user wants market research, TAM SAM SOM sizing, customer segmentation, category research, survey planning, interview synthesis, market opportunity analysis...
- `competitive-teardown` - Use this skill when the user wants a deep teardown of competitors, product positioning, website UX, pricing, reviews, SEO, content, jobs, social proof, onboarding, roadmap signals...
- `launch` - Use this skill when planning a product launch, feature announcement, or release strategy.
- `landing-page-cro` - You are a Conversion Rate Optimization Strategist and Persuasive Content Specialist. Use this skill when the user wants to audit or improve a landing page, write conversion-focused...
- `email-marketing` - You are a professional Email Marketing Specialist and Conversion Copywriter. Use this skill when the user wants to write, optimize, or repurpose email marketing campaigns...
- `linkedin-strategy` - You are a LinkedIn strategist, brand positioning expert, and professional content copywriter. Use this skill when the user wants to build a personal brand on LinkedIn, write...
- `pr-communications` - You are a professional Public Relations Strategist and Media Communications Expert. Use this skill when the user wants to write press releases, media pitches, company...
- `analytics` - Use this skill for setting up, auditing, or improving marketing analytics tracking.

**Related integration guides:**

- [github](../tools/integrations/github.md)
- [ga4](../tools/integrations/ga4.md)
- [hubspot](../tools/integrations/hubspot.md)
- [mailchimp](../tools/integrations/mailchimp.md)
- [customer-io](../tools/integrations/customer-io.md)
- [activecampaign](../tools/integrations/activecampaign.md)

**CLI helpers:**

- [github-prospects](../tools/clis/github-prospects.js)
- [ga4](../tools/clis/ga4.js)
- [mailchimp](../tools/clis/mailchimp.js)

**Next deliverables:**

- positioning context
- launch plan
- launch page
- email sequence
- social posts
- press announcement
- tracking plan

**Metrics:**

- visitors
- waitlist signups
- trial starts
- activation
- demos
- revenue

**Start prompt:**

```text
Use the marketing-os skill. Our outcome is SaaS Launch. Start with the `marketing-os` workflow, review the listed skills, read the related integration guides before recommending tools, and produce the first concrete deliverable with a metric.
```

<a id="developer-intent-outbound"></a>
### Developer-Intent Outbound

**Goal:** Build a prospect list from GitHub activity and turn it into compliant outbound.

**Stage:** Pipeline

**Primary skill:** `prospect-research`

**Skill stack:**

- `product-marketing` - Create and maintain a product marketing context document covering positioning, ICP definition, messaging hierarchy, competitive differentiation, and value proposition. This skill...
- `prospecting` - Use this skill when the user wants to build qualified lead lists, research prospects, score accounts, find buying signals, prepare outreach handoffs, or qualify SaaS, B2B...
- `prospect-research` - Use this skill when the user wants to build prospect lists, research accounts, identify buying signals, map decision-makers, qualify outbound leads, find SaaS developer intent...
- `cold-email` - Use this skill when writing B2B cold emails or follow-up sequences.
- `linkedin-strategy` - You are a LinkedIn strategist, brand positioning expert, and professional content copywriter. Use this skill when the user wants to build a personal brand on LinkedIn, write...
- `sales-enablement` - Use this skill for creating sales collateral and materials that help sales teams close deals. Triggers on: pitch deck, one-pager, sales deck, battle card, objection handling, talk...
- `revops` - Use this skill for revenue operations questions, lead lifecycle management, and marketing-to-sales handoff. Triggers on: MQL definition, SQL definition, lead scoring, lead routing...

**Related integration guides:**

- [github](../tools/integrations/github.md)
- [apollo](../tools/integrations/apollo.md)
- [zoominfo](../tools/integrations/zoominfo.md)
- [hunter](../tools/integrations/hunter.md)
- [clay](../tools/integrations/clay.md)
- [hubspot](../tools/integrations/hubspot.md)
- [salesforce](../tools/integrations/salesforce.md)

**CLI helpers:**

- [github-prospects](../tools/clis/github-prospects.js)
- [apollo](../tools/clis/apollo.js)
- [hunter](../tools/clis/hunter.js)
- [zoominfo](../tools/clis/zoominfo.js)
- [clay](../tools/clis/clay.js)

**Next deliverables:**

- ICP filter
- intent signal export
- account list
- decision-maker map
- cold email sequence
- CRM fields

**Metrics:**

- qualified accounts
- reply rate
- meetings booked
- SQLs
- pipeline value

**Start prompt:**

```text
Use the marketing-os skill. Our outcome is Developer-Intent Outbound. Start with the `prospect-research` workflow, review the listed skills, read the related integration guides before recommending tools, and produce the first concrete deliverable with a metric.
```

<a id="seo-growth-engine"></a>
### SEO Growth Engine

**Goal:** Build organic traffic with content clusters, long-form posts, schema, and AI-search visibility.

**Stage:** Demand

**Primary skill:** `seo-content-strategy`

**Skill stack:**

- `product-marketing` - Create and maintain a product marketing context document covering positioning, ICP definition, messaging hierarchy, competitive differentiation, and value proposition. This skill...
- `customer-research` - Use this skill when conducting, analyzing, or synthesizing customer research.
- `seo-content-strategy` - You are an SEO expert and content strategist. Use this skill when the user wants to improve organic search rankings, plan SEO content, analyze competitors, generate keyword...
- `market-research` - Use this skill when the user wants market research, TAM SAM SOM sizing, customer segmentation, category research, survey planning, interview synthesis, market opportunity analysis...
- `seo-blog-writer` - You are an expert SEO strategist and skilled content creator. Use this skill when the user wants to write, plan, or optimize long-form blog content that ranks on Google, attracts...
- `schema` - Use this skill for structured data and schema markup questions. Triggers on: JSON-LD, schema.org, structured data, rich snippets, rich results, FAQ schema, Product schema, Article...
- `ai-seo` - Use this skill when optimizing content to appear in AI-generated answers, be cited by LLMs, or rank in AI search engines.
- `content-repurposing` - You are a highly skilled content strategist and repurposing specialist. Use this skill when the user wants to repurpose existing content into new formats, find the best format for...
- `analytics` - Use this skill for setting up, auditing, or improving marketing analytics tracking.

**Related integration guides:**

- [ahrefs](../tools/integrations/ahrefs.md)
- [semrush](../tools/integrations/semrush.md)
- [google-search-console](../tools/integrations/google-search-console.md)
- [dataforseo](../tools/integrations/dataforseo.md)
- [ga4](../tools/integrations/ga4.md)

**CLI helpers:**

- [ahrefs](../tools/clis/ahrefs.js)
- [semrush](../tools/clis/semrush.js)
- [google-search-console](../tools/clis/google-search-console.js)
- [dataforseo](../tools/clis/dataforseo.js)
- [ga4](../tools/clis/ga4.js)

**Next deliverables:**

- topic clusters
- SEO briefs
- blog posts
- schema markup
- AI-search snippets
- repurposed social posts

**Metrics:**

- impressions
- clicks
- rankings
- organic signups
- assisted conversions

**Start prompt:**

```text
Use the marketing-os skill. Our outcome is SEO Growth Engine. Start with the `seo-content-strategy` workflow, review the listed skills, read the related integration guides before recommending tools, and produce the first concrete deliverable with a metric.
```

<a id="conversion-lab"></a>
### Conversion Lab

**Goal:** Improve landing page, signup, pricing, checkout, or upgrade conversion.

**Stage:** Conversion

**Primary skill:** `cro`

**Skill stack:**

- `analytics` - Use this skill for setting up, auditing, or improving marketing analytics tracking.
- `cro` - Use this skill for conversion rate optimization on marketing pages and forms.
- `landing-page-cro` - You are a Conversion Rate Optimization Strategist and Persuasive Content Specialist. Use this skill when the user wants to audit or improve a landing page, write conversion-focused...
- `a11y-audit` - Use this skill when the user wants an accessibility audit for a website, landing page, app UI, form, checkout, dashboard, marketing page, or design system. Trigger phrases include...
- `copywriting` - Use this skill when writing new marketing copy for any page.
- `sales-copywriting` - You are a professional Sales Copywriter and Conversion Strategist. Use this skill when the user wants to write or improve sales copy for any format or channel. Activate when the...
- `ab-testing` - Use this skill when planning, designing, or analyzing A/B tests and growth experiments.
- `pricing` - Pricing strategy, packaging, and monetization decisions for SaaS and software products.
- `signup` - Use this skill for optimizing signup, registration, account creation, and free trial flows. Triggers on: signup form optimization, registration form, account creation, free trial...
- `paywalls` - Create and optimize in-app paywalls, upgrade screens, upsell modals, and feature gates for SaaS products.

**Related integration guides:**

- [ga4](../tools/integrations/ga4.md)
- [hotjar](../tools/integrations/hotjar.md)
- [mixpanel](../tools/integrations/mixpanel.md)
- [amplitude](../tools/integrations/amplitude.md)
- [optimizely](../tools/integrations/optimizely.md)
- [segment](../tools/integrations/segment.md)

**CLI helpers:**

- [ga4](../tools/clis/ga4.js)
- [hotjar](../tools/clis/hotjar.js)
- [mixpanel](../tools/clis/mixpanel.js)
- [amplitude](../tools/clis/amplitude.js)
- [optimizely](../tools/clis/optimizely.js)
- [segment](../tools/clis/segment.js)

**Next deliverables:**

- funnel diagnosis
- friction map
- hypothesis backlog
- page rewrite
- test plan
- scorecard

**Metrics:**

- conversion rate
- CTA clicks
- form completion
- checkout starts
- paid conversion

**Start prompt:**

```text
Use the marketing-os skill. Our outcome is Conversion Lab. Start with the `cro` workflow, review the listed skills, read the related integration guides before recommending tools, and produce the first concrete deliverable with a metric.
```

<a id="local-smb-growth"></a>
### Local SMB Growth

**Goal:** Generate more local leads through Google Maps research, local pages, reviews, and conversion fixes.

**Stage:** Demand

**Primary skill:** `local-seo`

**Skill stack:**

- `local-seo` - You are a highly skilled Local SEO strategist and content copywriter. Use this skill when the user wants to improve local search visibility, write location-based landing pages...
- `prospecting` - Use this skill when the user wants to build qualified lead lists, research prospects, score accounts, find buying signals, prepare outreach handoffs, or qualify SaaS, B2B...
- `prospect-research` - Use this skill when the user wants to build prospect lists, research accounts, identify buying signals, map decision-makers, qualify outbound leads, find SaaS developer intent...
- `customer-service` - You are a professional Customer Service Specialist and Communication Strategist. Use this skill when the user wants to write customer service scripts, support email templates...
- `landing-page-cro` - You are a Conversion Rate Optimization Strategist and Persuasive Content Specialist. Use this skill when the user wants to audit or improve a landing page, write conversion-focused...
- `social-content-planner` - You are a social media content strategist for Instagram and Facebook. Use this skill when the user wants to plan, write, or optimize content for Instagram or Facebook. Activate...
- `analytics` - Use this skill for setting up, auditing, or improving marketing analytics tracking.

**Related integration guides:**

- [google-sheets](../tools/integrations/google-sheets.md)
- [google-calendar](../tools/integrations/google-calendar.md)
- [google-drive](../tools/integrations/google-drive.md)
- [wpforms](../tools/integrations/wpforms.md)
- [contact-form-7](../tools/integrations/contact-form-7.md)
- [ga4](../tools/integrations/ga4.md)

**CLI helpers:**

- [ga4](../tools/clis/ga4.js)

**Next deliverables:**

- city page
- service area page
- GBP description
- review replies
- local post plan
- lead tracking sheet

**Metrics:**

- map pack visibility
- calls
- form leads
- reviews
- bookings

**Start prompt:**

```text
Use the marketing-os skill. Our outcome is Local SMB Growth. Start with the `local-seo` workflow, review the listed skills, read the related integration guides before recommending tools, and produce the first concrete deliverable with a metric.
```

<a id="ecommerce-revenue"></a>
### Ecommerce Revenue

**Goal:** Improve product visibility, product page conversion, email revenue, paid ads, and repeat purchases.

**Stage:** Revenue

**Primary skill:** `ecommerce-content`

**Skill stack:**

- `ecommerce-content` - You are a professional E-commerce Content Strategist and Conversion Copywriter. Use this skill when the user wants to write or improve product descriptions, category page copy...
- `email-marketing` - You are a professional Email Marketing Specialist and Conversion Copywriter. Use this skill when the user wants to write, optimize, or repurpose email marketing campaigns...
- `sms` - Use this skill when the user wants SMS or MMS marketing strategy, opt-in flows, text message campaigns, abandoned cart texts, event reminders, win-back texts, STOP and HELP...
- `ads` - Use this skill for paid advertising campaign strategy, setup, optimization, and reporting.
- `ad-creative` - Use this skill when generating, iterating, or scaling ad creative for any paid platform.
- `pricing` - Pricing strategy, packaging, and monetization decisions for SaaS and software products.
- `analytics` - Use this skill for setting up, auditing, or improving marketing analytics tracking.
- `customer-service` - You are a professional Customer Service Specialist and Communication Strategist. Use this skill when the user wants to write customer service scripts, support email templates...

**Related integration guides:**

- [woocommerce](../tools/integrations/woocommerce.md)
- [easy-digital-downloads](../tools/integrations/easy-digital-downloads.md)
- [klaviyo](../tools/integrations/klaviyo.md)
- [mailchimp](../tools/integrations/mailchimp.md)
- [meta-ads](../tools/integrations/meta-ads.md)
- [google-ads](../tools/integrations/google-ads.md)
- [shopify](../tools/integrations/shopify.md)

**CLI helpers:**

- [klaviyo](../tools/clis/klaviyo.js)
- [mailchimp](../tools/clis/mailchimp.js)
- [meta-ads](../tools/clis/meta-ads.js)
- [google-ads](../tools/clis/google-ads.js)
- [ga4](../tools/clis/ga4.js)

**Next deliverables:**

- product descriptions
- category page copy
- launch emails
- ad variants
- upsell copy
- FAQ

**Metrics:**

- conversion rate
- AOV
- cart recovery
- ROAS
- repeat purchase rate

**Start prompt:**

```text
Use the marketing-os skill. Our outcome is Ecommerce Revenue. Start with the `ecommerce-content` workflow, review the listed skills, read the related integration guides before recommending tools, and produce the first concrete deliverable with a metric.
```

<a id="retention-and-advocacy"></a>
### Retention and Advocacy

**Goal:** Reduce churn, improve onboarding, create customer education, and drive referrals.

**Stage:** Retention

**Primary skill:** `churn-prevention`

**Skill stack:**

- `onboarding` - Optimize post-signup onboarding, user activation, and time-to-value for SaaS products.
- `churn-prevention` - Use this skill for reducing churn in SaaS and subscription businesses.
- `sms` - Use this skill when the user wants SMS or MMS marketing strategy, opt-in flows, text message campaigns, abandoned cart texts, event reminders, win-back texts, STOP and HELP...
- `customer-service` - You are a professional Customer Service Specialist and Communication Strategist. Use this skill when the user wants to write customer service scripts, support email templates...
- `emails` - Use this skill when creating, planning, or optimizing email sequences, drip campaigns, and lifecycle email programs.
- `email-marketing` - You are a professional Email Marketing Specialist and Conversion Copywriter. Use this skill when the user wants to write, optimize, or repurpose email marketing campaigns...
- `referrals` - Create, design, and optimize referral programs, affiliate programs, and word-of-mouth strategies.
- `community-marketing` - Use this skill when building or improving community-driven growth strategies.
- `education-content` - You are a professional education content developer and instructional design specialist. Use this skill when the user wants to create course descriptions, learning objectives...

**Related integration guides:**

- [intercom](../tools/integrations/intercom.md)
- [freshdesk](../tools/integrations/freshdesk.md)
- [zendesk-sell](../tools/integrations/zendesk-sell.md)
- [customer-io](../tools/integrations/customer-io.md)
- [discord](../tools/integrations/discord.md)
- [slack](../tools/integrations/slack.md)
- [mailchimp](../tools/integrations/mailchimp.md)

**CLI helpers:**

- [intercom](../tools/clis/intercom.js)
- [customer-io](../tools/clis/customer-io.js)
- [mailchimp](../tools/clis/mailchimp.js)

**Next deliverables:**

- onboarding flow
- save offers
- support templates
- lifecycle emails
- referral program
- education content

**Metrics:**

- activation
- time-to-value
- support volume
- churn
- referrals

**Start prompt:**

```text
Use the marketing-os skill. Our outcome is Retention and Advocacy. Start with the `churn-prevention` workflow, review the listed skills, read the related integration guides before recommending tools, and produce the first concrete deliverable with a metric.
```

## Supporting Assets

- [Marketing Skills OS command center template](../examples/marketing-os-command-center.md).
- [Social post library guide](SOCIAL_POST_LIBRARY.md).
- [Social post CSV](../examples/social-post-library.csv).
- [Local social posting kit](../examples/social-posts/README.md).
- [Marketing Skills OS initializer templates](../templates/marketing-os/README.md).
- [Outcome index](MARKETING_OS_OUTCOME_INDEX.md).

Regenerate this dashboard with:

```bash
npm run os:dashboard
```
