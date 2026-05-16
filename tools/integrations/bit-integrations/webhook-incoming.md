# Webhook (Incoming)

Webhook (Incoming) is a trigger that receives a webhook POST from an external system and fires a Bit Integrations workflow in response. Available as a Trigger (Pro) in the Bit Integrations WordPress plugin.

**Role:** Trigger
**Free Tier:** No
**Category:** Automation and Integration Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Webhookincomming.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Requires Pro plan; receives incoming webhook POST to start a workflow |
| As Action | — | — |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map incoming payload fields to action inputs |

## Trigger Events

- Receive an HTTP POST webhook from any external service or system
- Parse the incoming payload and use its fields to drive Bit Integrations actions

## Authentication

- **Type**: Unique incoming webhook URL
- **Required**: Bit Integrations generates a unique incoming webhook URL. Share this URL with the external service that will send the POST request. No API key configuration needed on the WordPress side.

## Common Workflow Recipes

### Recipe 1: Payment Gateway to WordPress User Creation
**Trigger:** Payment platform (Stripe, PayPal, etc.) sends a webhook to the Bit Integrations URL on successful payment
**Action:** Create a WordPress user or grant membership access
**Use case:** Provision WordPress access automatically when a payment is confirmed outside of WooCommerce

### Recipe 2: External CRM to Post Creation
**Trigger:** CRM sends a webhook when a deal closes or contact is updated
**Action:** Create a WordPress post or custom post type entry with the deal/contact data
**Use case:** Publish content automatically based on CRM events without manual effort

### Recipe 3: Third-Party Form to WordPress Workflow
**Trigger:** External form tool (Typeform, JotForm, etc.) sends a webhook on submission
**Action:** Add subscriber to email list, create a user, or update a custom field in WordPress
**Use case:** Process external form submissions through WordPress-based automation workflows

## Setup Steps

1. Install Bit Integrations Pro on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select Webhook (Incoming) as the Trigger.
4. Bit Integrations generates a unique webhook URL — copy it.
5. In the external service, configure it to POST to this URL on the desired event.
6. Send a test payload to let Bit Integrations detect the field structure.
7. Configure the desired Action (user creation, post creation, email, etc.).
8. Map incoming payload fields to action inputs.
9. Save and activate.

## When to Use

- When an external service or payment gateway needs to trigger a WordPress workflow
- When a third-party form tool or app sends webhooks that should drive WordPress actions
- When you need WordPress to respond to events that originate outside of WordPress

## Related Integrations

- webhook-outgoing.md
- custom-api.md
- action-hook.md
- zapier.md
