# Example Workflows

Use these examples to understand how Marketing Skills OS connects context, skills, tools, CLI helpers, deliverables, and metrics.

## SaaS Launch

| Field | Example |
|-------|---------|
| Business context | A small team launches an AI reporting tool for B2B agencies. |
| Starting prompt | `Use marketing-os with saas-launch. Produce the launch positioning summary, 7-day launch plan, and first metric scoreboard.` |
| Skills used | `product-marketing`, `market-research`, `competitive-teardown`, `launch`, `landing-page-cro`, `email-marketing`, `linkedin-strategy`, `pr-communications`, `analytics` |
| Tool guides used | `github`, `ga4`, `hubspot`, `mailchimp`, `customer-io`, `activecampaign` |
| CLI helpers used | `github-prospects`, `ga4`, `mailchimp` |
| Deliverables | Positioning context, launch page plan, email sequence, social posts, PR announcement, tracking plan |
| Metrics | Visitors, waitlist signups, trial starts, demos, revenue |
| What to do next | Run `npm run os:run -- --target ../my-project --workflow saas-launch --force`, then ask for one launch deliverable. |

## Developer-Intent Outbound

| Field | Example |
|-------|---------|
| Business context | A DevTool wants to find developers who starred, forked, or watched adjacent open-source repos. |
| Starting prompt | `Use prospecting and prospect-research. Build the ICP filters, allowed sources, scoring model, compliance guardrails, and first 25-account research plan.` |
| Skills used | `product-marketing`, `prospecting`, `prospect-research`, `cold-email`, `linkedin-strategy`, `sales-enablement`, `revops` |
| Tool guides used | `github`, `apollo`, `zoominfo`, `hunter`, `clay`, `hubspot`, `salesforce` |
| CLI helpers used | `github-prospects`, `apollo`, `hunter`, `zoominfo`, `clay` |
| Deliverables | ICP filter, intent signal export, account list, decision-maker map, outreach guardrails |
| Metrics | Qualified accounts, reply rate, meetings booked, SQLs, pipeline value |
| What to do next | Run `github-prospects.js` with an approved repo target, then pass the output to `prospecting`. |

## Local SMB Lead Generation

| Field | Example |
|-------|---------|
| Business context | A local HVAC company wants more calls and bookings across nearby cities. |
| Starting prompt | `Use local-smb-growth with local-seo. Classify the site, choose the first city or service page, and produce the local lead plan.` |
| Skills used | `local-seo`, `prospecting`, `prospect-research`, `customer-service`, `landing-page-cro`, `social-content-planner`, `analytics` |
| Tool guides used | `google-sheets`, `google-calendar`, `google-drive`, `wpforms`, `contact-form-7`, `ga4` |
| CLI helpers used | `ga4` |
| Deliverables | Website tier classification, city page, service area page, GBP description, review replies, local post plan |
| Metrics | Map pack visibility, calls, form leads, reviews, bookings |
| What to do next | Create the first service-area page and connect the lead source to the scoreboard. |

## Ecommerce Revenue

| Field | Example |
|-------|---------|
| Business context | A Shopify or WooCommerce store wants better product page conversion and more repeat purchases. |
| Starting prompt | `Use ecommerce-revenue. Choose the highest-impact product page, rewrite the benefit stack, and create the first revenue email.` |
| Skills used | `ecommerce-content`, `email-marketing`, `sms`, `ads`, `ad-creative`, `pricing`, `analytics`, `customer-service` |
| Tool guides used | `woocommerce`, `easy-digital-downloads`, `klaviyo`, `mailchimp`, `meta-ads`, `google-ads`, `shopify` |
| CLI helpers used | `klaviyo`, `mailchimp`, `meta-ads`, `google-ads`, `ga4` |
| Deliverables | Product description rewrite, category copy, launch email, ad variants, upsell copy, FAQ |
| Metrics | Conversion rate, AOV, cart recovery, ROAS, repeat purchase rate |
| What to do next | Pick one product page, rewrite it, then measure product-page conversion and cart recovery. |

## SEO Growth Engine

| Field | Example |
|-------|---------|
| Business context | A SaaS or service business wants more qualified organic traffic. |
| Starting prompt | `Use seo-content-strategy. Produce the first topic cluster, content brief, internal link plan, and measurement plan.` |
| Skills used | `product-marketing`, `customer-research`, `market-research`, `seo-content-strategy`, `seo-blog-writer`, `schema`, `ai-seo`, `content-repurposing`, `analytics` |
| Tool guides used | `ahrefs`, `semrush`, `google-search-console`, `dataforseo`, `ga4` |
| CLI helpers used | `ahrefs`, `semrush`, `google-search-console`, `dataforseo`, `ga4` |
| Deliverables | Topic clusters, SEO brief, blog post plan, schema plan, AI-search snippets, repurposed posts |
| Metrics | Impressions, clicks, rankings, organic signups, assisted conversions |
| What to do next | Build one topic cluster and publish the first brief before expanding the calendar. |

## Conversion Lab

| Field | Example |
|-------|---------|
| Business context | A landing page gets traffic but does not convert enough visitors into demos or trials. |
| Starting prompt | `Use conversion-lab with cro and landing-page-cro. Diagnose the main bottleneck, score the page sections, and produce the first test backlog.` |
| Skills used | `analytics`, `cro`, `landing-page-cro`, `a11y-audit`, `copywriting`, `sales-copywriting`, `ab-testing`, `pricing`, `signup`, `paywalls` |
| Tool guides used | `ga4`, `hotjar`, `mixpanel`, `amplitude`, `optimizely`, `segment` |
| CLI helpers used | `ga4`, `hotjar`, `mixpanel`, `amplitude`, `optimizely`, `segment` |
| Deliverables | Funnel diagnosis, friction map, hypothesis backlog, page rewrite, test plan, scorecard |
| Metrics | Conversion rate, CTA clicks, form completion, checkout starts, paid conversion |
| What to do next | Fix the highest-confidence bottleneck, then track the exact conversion metric connected to that change. |
