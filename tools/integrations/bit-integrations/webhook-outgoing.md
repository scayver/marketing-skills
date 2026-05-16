# Webhook (Outgoing)

Webhook (Outgoing) is a generic action that sends a POST request containing WordPress event data to any destination webhook URL. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Automation and Integration Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/WebhookOutgoing.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Send a POST request with event data to any webhook URL |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map any WordPress event field to the outgoing payload |

## Action Events

- Send a POST webhook request to any configured URL with mapped field data

## Authentication

- **Type**: Webhook URL
- **Required**: Enter the destination webhook URL in Bit Integrations. No account or API key required on the Bit Integrations side. The destination may require authentication headers configured separately.

## Common Workflow Recipes

### Recipe 1: Form Submission to Any Webhook Endpoint
**Trigger:** WordPress form submission
**Action:** POST form data to any webhook URL (Zapier, Make, custom server, Slack Incoming Webhook, etc.)
**Use case:** Connect WordPress to any service that accepts webhook POST requests without needing a dedicated connector

### Recipe 2: WooCommerce Order to Internal Notification System
**Trigger:** WooCommerce order completed
**Action:** POST order details to an internal server or microservice endpoint
**Use case:** Trigger server-side business logic or notifications whenever a purchase completes

### Recipe 3: User Registration to External Directory
**Trigger:** WordPress user registration
**Action:** POST user data to an external directory or access control system
**Use case:** Synchronize new WordPress users to external systems in real time

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Webhook (Outgoing) as the Action.
5. Enter the destination webhook URL.
6. Map fields to include in the POST payload.
7. Optionally add custom headers if the destination requires authentication.
8. Save and test.

## When to Use

- When no dedicated Bit Integrations connector exists for your destination service
- When sending WordPress data to a custom server, API endpoint, or microservice
- When using a service that provides its own incoming webhook URL (Slack, Discord, Zapier, Make, etc.)

## Related Integrations

- webhook-incoming.md
- custom-api.md
- zapier.md
- n8n.md
