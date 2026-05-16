# Zoho Flow

Zoho Flow is Zoho's no-code automation platform for connecting apps and building multi-step workflows with logic and conditions. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Project Management and Productivity
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/ZohoFlow.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Send data to a Zoho Flow webhook trigger |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map any form field to the outgoing webhook payload |

## Action Events

- Send data to a Zoho Flow workflow via webhook trigger

## Authentication

- **Type**: Webhook URL
- **Required**: Webhook URL from a Zoho Flow workflow's webhook trigger step

## Common Workflow Recipes

### Recipe 1: WordPress Form to Zoho Suite Workflow
**Trigger:** WordPress form submission
**Action:** Zoho Flow workflow creates records in Zoho CRM, Desk, and Campaigns simultaneously
**Use case:** Use a single WordPress form submission to drive actions across the entire Zoho ecosystem

### Recipe 2: WooCommerce Order to Zoho Books Invoice
**Trigger:** WooCommerce order completed
**Action:** Zoho Flow creates an invoice in Zoho Books and updates the Zoho CRM deal
**Use case:** Automate accounting and CRM updates for every WooCommerce sale via Zoho's native tools

### Recipe 3: Registration to Zoho Campaigns List
**Trigger:** WordPress user registration or form submission
**Action:** Zoho Flow adds the contact to a Zoho Campaigns mailing list
**Use case:** Grow Zoho Campaigns lists automatically from WordPress form and registration events

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Zoho Flow as the Action.
5. In Zoho Flow, create a flow with "Webhook" as the trigger. Copy the webhook URL.
6. Paste the webhook URL into Bit Integrations.
7. Map fields.
8. Save and test.

## When to Use

- When your business runs on the Zoho ecosystem and needs WordPress to drive cross-app Zoho workflows
- When you need multi-step Zoho automation triggered by WordPress form or WooCommerce events
- When logic, conditions, or data transformations are needed between WordPress and Zoho apps

## Related Integrations

- zoho-crm.md
- zoho-desk.md
- zoho-sheet.md
- zapier.md
