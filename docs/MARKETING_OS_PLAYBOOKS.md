# Marketing Skills OS Playbooks

These playbooks show how Marketing Skills OS combines skills, integration guides, and CLIs into complete marketing workflows.

## 1. SaaS Launch Playbook

| Step | Skill | Output | Tool References |
|------|-------|--------|-----------------|
| 1 | `product-marketing` | Positioning, ICP, value proposition | CRM, website, competitor tools |
| 2 | `launch` | Launch plan and checklist | Product Hunt, GitHub, email tools |
| 3 | `landing-page-cro` | Launch page copy and FAQ | GA4, Hotjar, forms |
| 4 | `email-marketing` | Waitlist and launch sequence | Mailchimp, Customer.io, ActiveCampaign |
| 5 | `linkedin-strategy` | Founder launch posts and DMs | LinkedIn, Buffer |
| 6 | `pr-communications` | Press release and media pitch | PR lists, newsroom pages |
| 7 | `analytics` | Launch dashboard | GA4, Search Console, Mixpanel |

Install command:

```bash
npx skills add scayver/marketing-skills --skill product-marketing launch landing-page-cro email-marketing linkedin-strategy pr-communications analytics
```

## 2. Developer-Intent Outbound Playbook

| Step | Skill or Tool | Output |
|------|---------------|--------|
| 1 | `product-marketing` | ICP and qualification rules |
| 2 | `prospect-research` | Account and developer-intent list |
| 3 | `github-prospects.js` | Stargazers, forks, and watchers export |
| 4 | `apollo`, `zoominfo`, `hunter`, `clay` | Contact and account enrichment guidance |
| 5 | `cold-email` | Trigger-based email sequence |
| 6 | `linkedin-strategy` | Connection and DM support |
| 7 | `revops` | CRM stages, routing, and reporting |

CLI example:

```bash
GITHUB_TOKEN=ghp_xxx node tools/clis/github-prospects.js prospects export --repo owner/repo --signals stargazers,forks,watchers --limit 100
```

## 3. SEO Growth Playbook

| Step | Skill | Output | Tool References |
|------|-------|--------|-----------------|
| 1 | `customer-research` | Audience language and pain points | Reviews, support tickets, forums |
| 2 | `seo-content-strategy` | Keyword clusters and briefs | Ahrefs, Semrush, DataForSEO |
| 3 | `seo-blog-writer` | Long-form article draft | Search Console, GA4 |
| 4 | `schema` | JSON-LD markup | Rich Results Test |
| 5 | `ai-seo` | AI answer optimization | AI search references |
| 6 | `content-repurposing` | LinkedIn, X, email, carousel assets | Social tools |

## 4. Conversion Improvement Playbook

| Step | Skill | Output | Tool References |
|------|-------|--------|-----------------|
| 1 | `analytics` | Funnel and event diagnosis | GA4, Mixpanel, Segment |
| 2 | `cro` | Friction map and hypothesis backlog | Hotjar, Optimizely |
| 3 | `landing-page-cro` | Hero, benefits, CTA, FAQ rewrite | CMS, forms |
| 4 | `copywriting` | Page copy and messaging | Product context |
| 5 | `ab-testing` | Test design and sample size | Optimizely, analytics |

## 5. Local SMB Growth Playbook

| Step | Skill | Output | Tool References |
|------|-------|--------|-----------------|
| 1 | `local-seo` | City page and GBP content | Google Business Profile |
| 2 | `prospect-research` | Google Maps research and website status tiers | Browser, local directories |
| 3 | `customer-service` | Review replies and support templates | Google reviews, help desk |
| 4 | `social-content-planner` | Local social posts | Facebook, Instagram |
| 5 | `analytics` | Lead tracking | GA4, forms, CRM |

## 6. Ecommerce Revenue Playbook

| Step | Skill | Output | Tool References |
|------|-------|--------|-----------------|
| 1 | `ecommerce-content` | Product descriptions, category copy, comparison copy | Shopify, WooCommerce |
| 2 | `email-marketing` | Product launch and cart recovery emails | Klaviyo, Mailchimp |
| 3 | `ads` | Paid media plan | Meta Ads, Google Ads, TikTok Ads |
| 4 | `ad-creative` | Hook and ad variant bank | Ad platforms |
| 5 | `pricing` | Bundle, upsell, and offer structure | Payment tools |
| 6 | `analytics` | Revenue attribution | GA4, ecommerce analytics |

## 7. Weekly Marketing Skills OS Review

Run this every week.

| Question | Skill |
|----------|-------|
| What changed in customer behavior this week? | `customer-research` |
| Which channel showed useful signal? | `analytics` |
| Which page or funnel step lost the most people? | `cro` |
| What should we ship next week? | `marketing-os` |
| What content can we repurpose from this week's work? | `content-repurposing` |
| What should update in our positioning context? | `product-marketing` |

## 8. 90-Day Marketing Skills OS Roadmap

| Phase | Weeks | Focus | Core Skills |
|-------|-------|-------|-------------|
| Foundation | 1-2 | Positioning, ICP, offer, measurement baseline | `product-marketing`, `business-strategy`, `analytics` |
| Acquisition | 3-6 | SEO, launch, social, outbound, directories | `seo-content-strategy`, `launch`, `prospect-research`, `directory-submissions` |
| Conversion | 7-9 | Landing pages, signup, pricing, A/B tests | `landing-page-cro`, `cro`, `pricing`, `ab-testing` |
| Retention | 10-12 | Onboarding, lifecycle email, churn, referrals | `onboarding`, `email-marketing`, `churn-prevention`, `referrals` |
| Systemization | 13 | Document workflows and update scorecards | `marketing-os`, `revops`, `content-repurposing` |
