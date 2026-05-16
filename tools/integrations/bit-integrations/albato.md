# Albato

Albato is a no-code automation platform focused on connecting business apps popular in Eastern European and global markets. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Automation and Integration Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Albato.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Send data to an Albato webhook trigger |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map any form field to the outgoing webhook payload |

## Action Events

- Send data to an Albato automation via webhook trigger

## Authentication

- **Type**: Webhook URL
- **Required**: Webhook URL from an Albato automation's webhook trigger step

## Common Workflow Recipes

### Recipe 1: Lead Form to CRM
**Trigger:** WordPress form submission
**Action:** Albato automation creates a lead in a connected CRM
**Use case:** Route WordPress leads into CRMs and tools supported by Albato's connector library

### Recipe 2: Registration to Messaging App Notification
**Trigger:** WordPress user registration
**Action:** Albato sends a notification message to Telegram or another messaging app
**Use case:** Alert sales or support teams instantly when new users register

### Recipe 3: WooCommerce Order to Accounting Tool
**Trigger:** WooCommerce order completed
**Action:** Albato automation logs order data to an accounting or finance tool
**Use case:** Automate financial record keeping for WooCommerce sales

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Albato as the Action.
5. In Albato, create an automation with "Webhook" as the trigger. Copy the webhook URL.
6. Paste the webhook URL into Bit Integrations.
7. Map fields.
8. Save and test.

## When to Use

- When your destination apps are in Albato's connector library but not natively in Bit Integrations
- When you need automation with apps popular in markets Albato specializes in
- When you want webhook-based WordPress automation with Albato as the orchestration layer

## Related Integrations

- zapier.md
- pabbly.md
- integrately.md
- webhook-outgoing.md
