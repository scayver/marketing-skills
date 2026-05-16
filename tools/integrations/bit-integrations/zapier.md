# Zapier

Zapier is a no-code automation platform that connects 6,000+ apps via triggers and actions. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Automation and Integration Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Zapier.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Send WordPress data to a Zapier "Catch Hook" webhook |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map any form field to the outgoing webhook payload |

## Action Events

- Send data to Zapier Webhooks (Catch Hook) to route to 6,000+ apps

## Authentication

- **Type**: Webhook URL
- **Required**: Paste the Zapier "Catch Hook" webhook URL into Bit Integrations. No API key needed.

## Common Workflow Recipes

### Recipe 1: Form Submission to Any Zapier-Connected App
**Trigger:** WordPress form submission (any form plugin)
**Action:** Send payload to Zapier Catch Hook, then route to CRM, email tool, or spreadsheet
**Use case:** Bridge WordPress with any app Zapier supports without needing a native Bit Integrations connector

### Recipe 2: WooCommerce Order to Accounting Software
**Trigger:** WooCommerce order completed
**Action:** Send order data to Zapier, which posts to QuickBooks or Xero
**Use case:** Automate bookkeeping entries for every new sale

### Recipe 3: User Registration to Onboarding Sequence
**Trigger:** WordPress user registration
**Action:** Send user data to Zapier, which adds them to an onboarding email sequence in any ESP
**Use case:** Start automated onboarding the moment someone creates a WordPress account

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger (form plugin, WooCommerce, user registration, etc.).
4. Select Zapier as the Action.
5. In Zapier, create a Zap with "Webhooks by Zapier > Catch Hook" as the trigger. Copy the webhook URL.
6. Paste the webhook URL into Bit Integrations.
7. Map fields.
8. Save and test.

## When to Use

- When your destination app has a Zapier connector but no native Bit Integrations connector
- When you need multi-step logic (filters, formatters, delays) between WordPress and a destination
- When your team already manages automations in Zapier and you want to add WordPress as a source

## Related Integrations

- make.md
- pabbly.md
- n8n.md
- webhook-outgoing.md
