# Pabbly Connect

Pabbly Connect is an affordable automation platform that connects 1,000+ apps via workflows with a one-time pricing model. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Automation and Integration Platforms
**Icon:** `https://bitapps.pro/wp-content/uploads/2023/07/pabbly-connect.png`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Send data to Pabbly Connect webhook trigger |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map any form field to the outgoing webhook payload |

## Action Events

- Send data to a Pabbly Connect workflow via webhook trigger

## Authentication

- **Type**: Webhook URL
- **Required**: Webhook URL from a Pabbly Connect workflow's "Webhook" trigger step

## Common Workflow Recipes

### Recipe 1: Form Lead to CRM
**Trigger:** WordPress form submission
**Action:** Send lead data to Pabbly Connect, which creates a contact in a CRM like Zoho or HubSpot
**Use case:** Automatically populate CRM contacts without manual data entry

### Recipe 2: WooCommerce Order to Invoice Tool
**Trigger:** WooCommerce order completed
**Action:** Pabbly Connect workflow generates an invoice in FreshBooks or Zoho Invoice
**Use case:** Automate invoicing for every completed purchase

### Recipe 3: New User to Email Welcome Sequence
**Trigger:** WordPress user registration
**Action:** Pabbly workflow adds user to email marketing list and starts a welcome automation
**Use case:** Trigger onboarding sequences immediately on signup

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Pabbly Connect as the Action.
5. In Pabbly Connect, create a workflow and select "Webhook" as the trigger. Copy the webhook URL.
6. Paste the webhook URL into Bit Integrations.
7. Map fields.
8. Save and test.

## When to Use

- When you want Zapier-style automation with a one-time payment rather than monthly subscription
- When connecting WordPress to apps supported by Pabbly Connect but not natively by Bit Integrations
- When you need multi-step workflows triggered from WordPress form events

## Related Integrations

- zapier.md
- make.md
- konnectzit.md
- webhook-outgoing.md
