# Custom API

Custom API is a flexible action that sends WordPress form or event data to any REST API endpoint with configurable HTTP method, headers, and body mapping. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Automation and Integration Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/CustomAPI.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Send data to any REST API with custom method, headers, and body |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Fully configurable request body with field mapping |

## Action Events

- Send an HTTP GET, POST, or PUT request to any REST API endpoint with custom headers and a mapped request body

## Authentication

- **Type**: Configurable in Bit Integrations
- **Required**: Configure target URL, HTTP method (GET/POST/PUT), request headers (e.g., Authorization, Content-Type), and body field mapping directly in Bit Integrations settings

## Common Workflow Recipes

### Recipe 1: Form Submission to Proprietary CRM API
**Trigger:** WordPress form submission
**Action:** POST form data to a proprietary CRM or internal API that has no standard connector
**Use case:** Connect WordPress to any API-enabled internal system without needing a pre-built integration

### Recipe 2: WooCommerce Order to ERP System
**Trigger:** WooCommerce order completed
**Action:** POST order data to an ERP API endpoint for inventory or financial processing
**Use case:** Trigger ERP workflows from WooCommerce purchases in real time

### Recipe 3: User Registration to External SSO or Directory
**Trigger:** WordPress user registration
**Action:** POST user data to an external identity provider or directory API
**Use case:** Synchronize WordPress user creation with external access control or SSO systems

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Custom API as the Action.
5. Enter the target API endpoint URL.
6. Select the HTTP method (GET, POST, or PUT).
7. Add any required headers (e.g., `Authorization: Bearer <token>`, `Content-Type: application/json`).
8. Map form or event fields to the request body parameters.
9. Save and test.

## When to Use

- When your destination has a REST API but no dedicated Bit Integrations connector
- When integrating WordPress with proprietary, internal, or enterprise APIs
- When you need full control over the HTTP method, headers, and body structure

## Related Integrations

- webhook-outgoing.md
- webhook-incoming.md
- n8n.md
- zapier.md
