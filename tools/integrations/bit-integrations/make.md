# Make

Make (formerly Integromat) is a visual automation platform that connects apps via scenarios with advanced data transformation. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Automation and Integration Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Make.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Send data to a Make webhook trigger to start a scenario |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map any form field to the outgoing webhook payload |

## Action Events

- Send data to Make (Integromat) Webhooks module to start a scenario

## Authentication

- **Type**: Webhook URL
- **Required**: Webhook URL copied from a Make scenario's "Webhooks" trigger module

## Common Workflow Recipes

### Recipe 1: Form Submission to Multi-Step Scenario
**Trigger:** WordPress form submission
**Action:** Send payload to Make webhook, triggering a multi-step scenario with routers and filters
**Use case:** Run complex automation logic (conditions, data parsing, multiple destinations) from a single form submission

### Recipe 2: WooCommerce Order to Fulfillment Workflow
**Trigger:** WooCommerce order placed
**Action:** Send order data to Make scenario that notifies the warehouse, updates inventory, and emails the customer
**Use case:** Automate the full order fulfillment chain without custom code

### Recipe 3: Lead Form to CRM + Slack Notification
**Trigger:** WordPress lead form submission
**Action:** Make scenario creates CRM contact and posts a Slack message simultaneously
**Use case:** Notify sales instantly and create CRM records in one automated flow

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger (form plugin, WooCommerce, etc.).
4. Select Make as the Action.
5. In Make, create a new scenario and add a "Webhooks > Custom webhook" module as the trigger. Copy the webhook URL.
6. Paste the webhook URL into Bit Integrations.
7. Map fields.
8. Save and test.

## When to Use

- When you need advanced data transformation or routing logic between WordPress and other apps
- When a single WordPress event should trigger actions in multiple services simultaneously
- When your team prefers Make's visual scenario builder over simpler webhook tools

## Related Integrations

- zapier.md
- n8n.md
- pabbly.md
- webhook-outgoing.md
