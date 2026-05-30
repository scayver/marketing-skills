# Marketing Skills OS Outcome Index

Generated from `docs/MARKETING_OS_MANIFEST.json`, `skills/`, `tools/integrations/`, and `tools/clis/`.

Use this Marketing Skills OS file when you know the business outcome but do not know which skill, integration guide, or CLI helper to start with.

## Inventory

| Asset | Count |
|-------|------:|
| Skills | 59 |
| Integration guides | 347 |
| CLI tools | 62 |
| OS workflows | 7 |

## Fast Routing Table

| Outcome | Stage | Primary Skill | Core Deliverables | Metrics |
|---------|-------|---------------|-------------------|---------|
| [SaaS Launch](#saas-launch) | Launch | `marketing-os` | positioning context, launch plan, launch page | visitors, waitlist signups, trial starts |
| [Developer-Intent Outbound](#developer-intent-outbound) | Pipeline | `prospect-research` | ICP filter, intent signal export, account list | qualified accounts, reply rate, meetings booked |
| [SEO Growth Engine](#seo-growth-engine) | Demand | `seo-content-strategy` | topic clusters, SEO briefs, blog posts | impressions, clicks, rankings |
| [Conversion Lab](#conversion-lab) | Conversion | `cro` | funnel diagnosis, friction map, hypothesis backlog | conversion rate, CTA clicks, form completion |
| [Local SMB Growth](#local-smb-growth) | Demand | `local-seo` | city page, service area page, GBP description | map pack visibility, calls, form leads |
| [Ecommerce Revenue](#ecommerce-revenue) | Revenue | `ecommerce-content` | product descriptions, category page copy, launch emails | conversion rate, AOV, cart recovery |
| [Retention and Advocacy](#retention-and-advocacy) | Retention | `churn-prevention` | onboarding flow, save offers, support templates | activation, time-to-value, support volume |

## Workflow Cards

<a id="saas-launch"></a>
### SaaS Launch

**Goal:** Launch a SaaS product, feature, AI tool, open-source project, or agent product.

**Stage:** Launch

**Primary skill:** `marketing-os`

#### Skill Stack

- `product-marketing` - Create and maintain a product marketing context document covering positioning, ICP definition, messaging hierarchy, competitive differentiation, and value proposition.
- `business-strategy` - You are a professional business strategist and customer journey specialist.
- `launch` - Use this skill when planning a product launch, feature announcement, or release strategy.
- `landing-page-cro` - You are a Conversion Rate Optimization Strategist and Persuasive Content Specialist.
- `email-marketing` - You are a professional Email Marketing Specialist and Conversion Copywriter.
- `linkedin-strategy` - You are a LinkedIn strategist, brand positioning expert, and professional content copywriter.
- `pr-communications` - You are a professional Public Relations Strategist and Media Communications Expert.
- `analytics` - Use this skill for setting up, auditing, or improving marketing analytics tracking.

#### Platform Context

- [github](../tools/integrations/github.md)
- [ga4](../tools/integrations/ga4.md)
- [hubspot](../tools/integrations/hubspot.md)
- [mailchimp](../tools/integrations/mailchimp.md)
- [customer-io](../tools/integrations/customer-io.md)
- [activecampaign](../tools/integrations/activecampaign.md)

#### CLI Helpers

- [github-prospects](../tools/clis/github-prospects.js)
- [ga4](../tools/clis/ga4.js)
- [mailchimp](../tools/clis/mailchimp.js)

#### Deliverables

- positioning context
- launch plan
- launch page
- email sequence
- social posts
- press announcement
- tracking plan

#### Metrics

- visitors
- waitlist signups
- trial starts
- activation
- demos
- revenue

#### Start Prompt

```text
Use the marketing-os skill. Our goal is: Launch a SaaS product, feature, AI tool, open-source project, or agent product. Start with the `marketing-os` workflow, use the listed skill stack, check the relevant platform guides before making tool recommendations, and produce the first concrete deliverable with metrics.
```

<a id="developer-intent-outbound"></a>
### Developer-Intent Outbound

**Goal:** Build a prospect list from GitHub activity and turn it into compliant outbound.

**Stage:** Pipeline

**Primary skill:** `prospect-research`

#### Skill Stack

- `product-marketing` - Create and maintain a product marketing context document covering positioning, ICP definition, messaging hierarchy, competitive differentiation, and value proposition.
- `prospect-research` - Use this skill when the user wants to build prospect lists, research accounts, identify buying signals, map decision-makers, qualify outbound leads, find SaaS developer intent...
- `cold-email` - Use this skill when writing B2B cold emails or follow-up sequences.
- `linkedin-strategy` - You are a LinkedIn strategist, brand positioning expert, and professional content copywriter.
- `sales-enablement` - Use this skill for creating sales collateral and materials that help sales teams close deals.
- `revops` - Use this skill for revenue operations questions, lead lifecycle management, and marketing-to-sales handoff.

#### Platform Context

- [github](../tools/integrations/github.md)
- [apollo](../tools/integrations/apollo.md)
- [zoominfo](../tools/integrations/zoominfo.md)
- [hunter](../tools/integrations/hunter.md)
- [clay](../tools/integrations/clay.md)
- [hubspot](../tools/integrations/hubspot.md)
- [salesforce](../tools/integrations/salesforce.md)

#### CLI Helpers

- [github-prospects](../tools/clis/github-prospects.js)
- [apollo](../tools/clis/apollo.js)
- [hunter](../tools/clis/hunter.js)
- [zoominfo](../tools/clis/zoominfo.js)
- [clay](../tools/clis/clay.js)

#### Deliverables

- ICP filter
- intent signal export
- account list
- decision-maker map
- cold email sequence
- CRM fields

#### Metrics

- qualified accounts
- reply rate
- meetings booked
- SQLs
- pipeline value

#### Start Prompt

```text
Use the marketing-os skill. Our goal is: Build a prospect list from GitHub activity and turn it into compliant outbound. Start with the `prospect-research` workflow, use the listed skill stack, check the relevant platform guides before making tool recommendations, and produce the first concrete deliverable with metrics.
```

<a id="seo-growth-engine"></a>
### SEO Growth Engine

**Goal:** Build organic traffic with content clusters, long-form posts, schema, and AI-search visibility.

**Stage:** Demand

**Primary skill:** `seo-content-strategy`

#### Skill Stack

- `product-marketing` - Create and maintain a product marketing context document covering positioning, ICP definition, messaging hierarchy, competitive differentiation, and value proposition.
- `customer-research` - Use this skill when conducting, analyzing, or synthesizing customer research.
- `seo-content-strategy` - You are an SEO expert and content strategist.
- `seo-blog-writer` - You are an expert SEO strategist and skilled content creator.
- `schema` - Use this skill for structured data and schema markup questions.
- `ai-seo` - Use this skill when optimizing content to appear in AI-generated answers, be cited by LLMs, or rank in AI search engines.
- `content-repurposing` - You are a highly skilled content strategist and repurposing specialist.
- `analytics` - Use this skill for setting up, auditing, or improving marketing analytics tracking.

#### Platform Context

- [ahrefs](../tools/integrations/ahrefs.md)
- [semrush](../tools/integrations/semrush.md)
- [google-search-console](../tools/integrations/google-search-console.md)
- [dataforseo](../tools/integrations/dataforseo.md)
- [ga4](../tools/integrations/ga4.md)

#### CLI Helpers

- [ahrefs](../tools/clis/ahrefs.js)
- [semrush](../tools/clis/semrush.js)
- [google-search-console](../tools/clis/google-search-console.js)
- [dataforseo](../tools/clis/dataforseo.js)
- [ga4](../tools/clis/ga4.js)

#### Deliverables

- topic clusters
- SEO briefs
- blog posts
- schema markup
- AI-search snippets
- repurposed social posts

#### Metrics

- impressions
- clicks
- rankings
- organic signups
- assisted conversions

#### Start Prompt

```text
Use the marketing-os skill. Our goal is: Build organic traffic with content clusters, long-form posts, schema, and AI-search visibility. Start with the `seo-content-strategy` workflow, use the listed skill stack, check the relevant platform guides before making tool recommendations, and produce the first concrete deliverable with metrics.
```

<a id="conversion-lab"></a>
### Conversion Lab

**Goal:** Improve landing page, signup, pricing, checkout, or upgrade conversion.

**Stage:** Conversion

**Primary skill:** `cro`

#### Skill Stack

- `analytics` - Use this skill for setting up, auditing, or improving marketing analytics tracking.
- `cro` - Use this skill for conversion rate optimization on marketing pages and forms.
- `landing-page-cro` - You are a Conversion Rate Optimization Strategist and Persuasive Content Specialist.
- `copywriting` - Use this skill when writing new marketing copy for any page.
- `sales-copywriting` - You are a professional Sales Copywriter and Conversion Strategist.
- `ab-testing` - Use this skill when planning, designing, or analyzing A/B tests and growth experiments.
- `pricing` - Pricing strategy, packaging, and monetization decisions for SaaS and software products.
- `signup` - Use this skill for optimizing signup, registration, account creation, and free trial flows.
- `paywalls` - Create and optimize in-app paywalls, upgrade screens, upsell modals, and feature gates for SaaS products.

#### Platform Context

- [ga4](../tools/integrations/ga4.md)
- [hotjar](../tools/integrations/hotjar.md)
- [mixpanel](../tools/integrations/mixpanel.md)
- [amplitude](../tools/integrations/amplitude.md)
- [optimizely](../tools/integrations/optimizely.md)
- [segment](../tools/integrations/segment.md)

#### CLI Helpers

- [ga4](../tools/clis/ga4.js)
- [hotjar](../tools/clis/hotjar.js)
- [mixpanel](../tools/clis/mixpanel.js)
- [amplitude](../tools/clis/amplitude.js)
- [optimizely](../tools/clis/optimizely.js)
- [segment](../tools/clis/segment.js)

#### Deliverables

- funnel diagnosis
- friction map
- hypothesis backlog
- page rewrite
- test plan
- scorecard

#### Metrics

- conversion rate
- CTA clicks
- form completion
- checkout starts
- paid conversion

#### Start Prompt

```text
Use the marketing-os skill. Our goal is: Improve landing page, signup, pricing, checkout, or upgrade conversion. Start with the `cro` workflow, use the listed skill stack, check the relevant platform guides before making tool recommendations, and produce the first concrete deliverable with metrics.
```

<a id="local-smb-growth"></a>
### Local SMB Growth

**Goal:** Generate more local leads through Google Maps research, local pages, reviews, and conversion fixes.

**Stage:** Demand

**Primary skill:** `local-seo`

#### Skill Stack

- `local-seo` - You are a highly skilled Local SEO strategist and content copywriter.
- `prospect-research` - Use this skill when the user wants to build prospect lists, research accounts, identify buying signals, map decision-makers, qualify outbound leads, find SaaS developer intent...
- `customer-service` - You are a professional Customer Service Specialist and Communication Strategist.
- `landing-page-cro` - You are a Conversion Rate Optimization Strategist and Persuasive Content Specialist.
- `social-content-planner` - You are a social media content strategist for Instagram and Facebook.
- `analytics` - Use this skill for setting up, auditing, or improving marketing analytics tracking.

#### Platform Context

- [google-sheets](../tools/integrations/google-sheets.md)
- [google-calendar](../tools/integrations/google-calendar.md)
- [google-drive](../tools/integrations/google-drive.md)
- [wpforms](../tools/integrations/wpforms.md)
- [contact-form-7](../tools/integrations/contact-form-7.md)
- [ga4](../tools/integrations/ga4.md)

#### CLI Helpers

- `google-sheets`
- [ga4](../tools/clis/ga4.js)

#### Deliverables

- city page
- service area page
- GBP description
- review replies
- local post plan
- lead tracking sheet

#### Metrics

- map pack visibility
- calls
- form leads
- reviews
- bookings

#### Start Prompt

```text
Use the marketing-os skill. Our goal is: Generate more local leads through Google Maps research, local pages, reviews, and conversion fixes. Start with the `local-seo` workflow, use the listed skill stack, check the relevant platform guides before making tool recommendations, and produce the first concrete deliverable with metrics.
```

<a id="ecommerce-revenue"></a>
### Ecommerce Revenue

**Goal:** Improve product visibility, product page conversion, email revenue, paid ads, and repeat purchases.

**Stage:** Revenue

**Primary skill:** `ecommerce-content`

#### Skill Stack

- `ecommerce-content` - You are a professional E-commerce Content Strategist and Conversion Copywriter.
- `email-marketing` - You are a professional Email Marketing Specialist and Conversion Copywriter.
- `ads` - Use this skill for paid advertising campaign strategy, setup, optimization, and reporting.
- `ad-creative` - Use this skill when generating, iterating, or scaling ad creative for any paid platform.
- `pricing` - Pricing strategy, packaging, and monetization decisions for SaaS and software products.
- `analytics` - Use this skill for setting up, auditing, or improving marketing analytics tracking.
- `customer-service` - You are a professional Customer Service Specialist and Communication Strategist.

#### Platform Context

- [woocommerce](../tools/integrations/woocommerce.md)
- [easy-digital-downloads](../tools/integrations/easy-digital-downloads.md)
- [klaviyo](../tools/integrations/klaviyo.md)
- [mailchimp](../tools/integrations/mailchimp.md)
- [meta-ads](../tools/integrations/meta-ads.md)
- [google-ads](../tools/integrations/google-ads.md)
- [shopify](../tools/integrations/shopify.md)

#### CLI Helpers

- [klaviyo](../tools/clis/klaviyo.js)
- [mailchimp](../tools/clis/mailchimp.js)
- [meta-ads](../tools/clis/meta-ads.js)
- [google-ads](../tools/clis/google-ads.js)
- [ga4](../tools/clis/ga4.js)

#### Deliverables

- product descriptions
- category page copy
- launch emails
- ad variants
- upsell copy
- FAQ

#### Metrics

- conversion rate
- AOV
- cart recovery
- ROAS
- repeat purchase rate

#### Start Prompt

```text
Use the marketing-os skill. Our goal is: Improve product visibility, product page conversion, email revenue, paid ads, and repeat purchases. Start with the `ecommerce-content` workflow, use the listed skill stack, check the relevant platform guides before making tool recommendations, and produce the first concrete deliverable with metrics.
```

<a id="retention-and-advocacy"></a>
### Retention and Advocacy

**Goal:** Reduce churn, improve onboarding, create customer education, and drive referrals.

**Stage:** Retention

**Primary skill:** `churn-prevention`

#### Skill Stack

- `onboarding` - Optimize post-signup onboarding, user activation, and time-to-value for SaaS products.
- `churn-prevention` - Use this skill for reducing churn in SaaS and subscription businesses.
- `customer-service` - You are a professional Customer Service Specialist and Communication Strategist.
- `emails` - Use this skill when creating, planning, or optimizing email sequences, drip campaigns, and lifecycle email programs.
- `email-marketing` - You are a professional Email Marketing Specialist and Conversion Copywriter.
- `referrals` - Create, design, and optimize referral programs, affiliate programs, and word-of-mouth strategies.
- `community-marketing` - Use this skill when building or improving community-driven growth strategies.
- `education-content` - You are a professional education content developer and instructional design specialist.

#### Platform Context

- [intercom](../tools/integrations/intercom.md)
- [freshdesk](../tools/integrations/freshdesk.md)
- [zendesk-sell](../tools/integrations/zendesk-sell.md)
- [customer-io](../tools/integrations/customer-io.md)
- [discord](../tools/integrations/discord.md)
- [slack](../tools/integrations/slack.md)
- [mailchimp](../tools/integrations/mailchimp.md)

#### CLI Helpers

- [intercom](../tools/clis/intercom.js)
- [customer-io](../tools/clis/customer-io.js)
- [mailchimp](../tools/clis/mailchimp.js)

#### Deliverables

- onboarding flow
- save offers
- support templates
- lifecycle emails
- referral program
- education content

#### Metrics

- activation
- time-to-value
- support volume
- churn
- referrals

#### Start Prompt

```text
Use the marketing-os skill. Our goal is: Reduce churn, improve onboarding, create customer education, and drive referrals. Start with the `churn-prevention` workflow, use the listed skill stack, check the relevant platform guides before making tool recommendations, and produce the first concrete deliverable with metrics.
```

## Layer Map

| Layer | Purpose | Skills |
|-------|---------|--------|
| `context` | Define ICP, positioning, offer, category, and product story. | `product-marketing`, `customer-research`, `business-strategy`, `brand-storytelling` |
| `strategy` | Choose the growth motion and roadmap. | `marketing-os`, `marketing-ideas`, `marketing-psychology`, `pricing` |
| `demand` | Create awareness and qualified demand. | `seo-content-strategy`, `seo-blog-writer`, `ai-seo`, `social`, `linkedin-strategy`, `pr-communications`, `ads`, `directory-submissions` |
| `conversion` | Convert attention into leads, trials, demos, customers, or upgrades. | `landing-page-cro`, `copywriting`, `sales-copywriting`, `cro`, `signup`, `paywalls`, `ab-testing` |
| `pipeline` | Create and manage sales opportunities. | `prospect-research`, `cold-email`, `sales-enablement`, `revops`, `email-marketing` |
| `retention` | Increase activation, retention, advocacy, and expansion. | `onboarding`, `churn-prevention`, `customer-service`, `emails`, `referrals`, `community-marketing`, `education-content` |
| `measurement` | Track performance and decide what to improve. | `analytics`, `seo-audit`, `ab-testing`, `revops` |
| `assets` | Create reusable content, visuals, and campaigns. | `content-repurposing`, `ai-image-creator`, `instagram-carousel`, `video`, `image`, `social-content-planner` |

## Integrity Notes

The following manifest references need attention:

- Missing CLI `google-sheets` referenced by Local SMB Growth

Regenerate this file with:

```bash
npm run os:index
```
