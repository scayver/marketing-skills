# Marketing Skills OS Example Prompts

Use these prompts after installing Marketing Skills OS. The brand is Marketing Skills OS, and the install path remains `scayver/marketing-skills` for compatibility.

```bash
npx skills add scayver/marketing-skills
```

## Marketing OS Workspace

Create the local command center in your project.

```bash
npm run os:init -- --target ../my-product
```

Then ask your agent:

```text
Use the marketing-os skill. Read .marketing-os/product-context.md, .marketing-os/command-center.md, and .marketing-os/scoreboard.md. Recommend the next best workflow and produce the first deliverable.
```

## Foundation

```text
Use product-marketing to create a context document for my product. Ask me only for the missing details you need.
```

## SEO

```text
Use seo-content-strategy to create a content brief for the keyword "AI appointment scheduling for dentists".
```

```text
Use seo-blog-writer to plan a 3,500 word blog post for small business owners comparing CRM tools.
```

## Conversion

```text
Use landing-page-cro to audit this landing page. Rewrite the hero section, CTA options, benefits, and FAQ schema.
```

```text
Use cro to identify funnel friction and create an ICE-scored experiment backlog.
```

## Email

```text
Use email-marketing to write a 7-email nurture sequence for a lead magnet about local SEO.
```

```text
Use cold-email to create a 3-step outreach sequence for SaaS founders who use HubSpot.
```

## Social and Brand

```text
Use linkedin-strategy to write 5 thought leadership posts for a founder launching a new AI tool.
```

```text
Use instagram-carousel to turn this topic into spreadsheet-ready carousel copy and a full caption.
```

```text
Use brand-storytelling to rewrite this About Page so it sounds confident, clear, and personal.
```

## Tools

```text
Read tools/REGISTRY.md, find the HubSpot guide, and show me how to create or update a contact through the API.
```

```text
Read tools/integrations/wpforms.md and explain the WordPress REST or WP-CLI pattern for checking plugin status and related records.
```

## Local Business

```text
Use local-seo to write a service area page for emergency plumbing in Tampa, FL.
```

## Ecommerce

```text
Use ecommerce-content to write a Shopify product page for a premium standing desk. Include SEO title, meta description, benefits, FAQs, and upsell copy.
```
