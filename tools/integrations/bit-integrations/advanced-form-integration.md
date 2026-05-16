# Advanced Form Integration

Advanced Form Integration is a WordPress plugin that connects form plugins to third-party services and APIs directly from the WordPress dashboard. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Automation and Integration Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Advanced-Form-Integration.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Pass form data from Bit Integrations into Advanced Form Integration workflows |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map fields to Advanced Form Integration connection inputs |

## Action Events

- Trigger an Advanced Form Integration connection to send data to a configured third-party service

## Authentication

- **Type**: WordPress plugin-native + destination API keys
- **Required**: Advanced Form Integration must be installed and active. Each destination service configured in Advanced Form Integration requires its own API credentials.

## Common Workflow Recipes

### Recipe 1: Form Submission to CRM via AFI Connection
**Trigger:** WordPress form submission
**Action:** Advanced Form Integration sends data to a CRM already configured in AFI
**Use case:** Leverage AFI's existing CRM connections when Bit Integrations doesn't have a native connector for that CRM

### Recipe 2: Registration Form to Email Platform
**Trigger:** WordPress user registration form
**Action:** AFI connection adds the registrant to an email platform list
**Use case:** Combine Bit Integrations trigger capabilities with AFI's email platform connectors

### Recipe 3: Order Form to Fulfillment API
**Trigger:** WooCommerce or custom order form submission
**Action:** AFI connection posts order details to a fulfillment or shipping API
**Use case:** Route order data through AFI's configured API connections for fulfillment processing

## Setup Steps

1. Install both Bit Integrations and Advanced Form Integration on your WordPress site.
2. In Advanced Form Integration, configure a connection to the desired third-party service with its API credentials.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger source.
5. Select Advanced Form Integration as the Action.
6. Select the AFI connection to use.
7. Map fields.
8. Save and test.

## When to Use

- When your site already uses Advanced Form Integration and you want to add Bit Integrations triggers to its connections
- When the destination service is configured in AFI but not natively supported in Bit Integrations
- When you want to centralize API credential management in AFI while using Bit Integrations for event detection

## Related Integrations

- zapier.md
- flowmattic.md
- custom-api.md
- webhook-outgoing.md
