# WP Webhooks

WP Webhooks is a WordPress plugin that turns your site into a webhook sender and receiver, enabling event-driven integrations with external services. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Automation and Integration Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/WP-Webhooks.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Send data from Bit Integrations to a WP Webhooks outgoing webhook |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map fields to WP Webhooks webhook payload |

## Action Events

- Fire a WP Webhooks outgoing webhook action with data from a WordPress event

## Authentication

- **Type**: WordPress plugin-native + webhook URL configuration
- **Required**: WP Webhooks must be installed and active. Configure outgoing webhook URL in WP Webhooks settings. No external API credentials required.

## Common Workflow Recipes

### Recipe 1: Form Submission to External Webhook Endpoint
**Trigger:** WordPress form submission
**Action:** WP Webhooks sends the data to a configured external webhook URL or service
**Use case:** Use WP Webhooks' advanced payload configuration options to send structured data to any endpoint

### Recipe 2: WooCommerce Event to Notification Service
**Trigger:** WooCommerce order status changed
**Action:** WP Webhooks fires a webhook to notify a custom notification or logging service
**Use case:** Keep external monitoring or notification systems updated on WooCommerce order events

### Recipe 3: User Role Change to External System
**Trigger:** WordPress user role update (via form or automation)
**Action:** WP Webhooks sends user data to an external membership or access control system
**Use case:** Synchronize WordPress user roles with external platforms in real time

## Setup Steps

1. Install both Bit Integrations and WP Webhooks on your WordPress site.
2. In WP Webhooks, configure an outgoing webhook with the desired endpoint URL and payload.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger source.
5. Select WP Webhooks as the Action.
6. Map fields.
7. Save and test.

## When to Use

- When you need advanced webhook payload customization that WP Webhooks provides
- When you want to manage outgoing webhook configurations centrally in WP Webhooks
- When combining Bit Integrations event detection with WP Webhooks' delivery features

## Related Integrations

- webhook-outgoing.md
- webhook-incoming.md
- n8n.md
- custom-api.md
