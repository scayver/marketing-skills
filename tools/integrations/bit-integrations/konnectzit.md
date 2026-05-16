# KonnectzIT

KonnectzIT is a visual automation platform for connecting apps and automating workflows with a lifetime deal pricing model. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Automation and Integration Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/KonnectzIT.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Send data to KonnectzIT webhook |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map any form field to the outgoing webhook payload |

## Action Events

- Send data to a KonnectzIT flow via webhook trigger

## Authentication

- **Type**: Webhook URL
- **Required**: Webhook URL from a KonnectzIT flow's webhook trigger step

## Common Workflow Recipes

### Recipe 1: Contact Form to Email List
**Trigger:** WordPress contact form submission
**Action:** KonnectzIT flow subscribes the contact to an email marketing list
**Use case:** Grow email lists automatically from WordPress form submissions

### Recipe 2: Registration to CRM Contact
**Trigger:** WordPress user registration
**Action:** KonnectzIT creates a CRM contact with user details
**Use case:** Keep your CRM in sync with WordPress registrations without manual import

### Recipe 3: Order to Fulfillment Notification
**Trigger:** WooCommerce order placed
**Action:** KonnectzIT sends order details to a fulfillment or inventory system
**Use case:** Automate post-purchase workflows for product delivery

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select KonnectzIT as the Action.
5. In KonnectzIT, create a new flow and add a "Webhook" trigger. Copy the webhook URL.
6. Paste the webhook URL into Bit Integrations.
7. Map fields.
8. Save and test.

## When to Use

- When you own a KonnectzIT lifetime deal and want to connect WordPress to other apps
- When destination apps are supported in KonnectzIT but not natively in Bit Integrations
- When you need affordable multi-step automation triggered from WordPress events

## Related Integrations

- zapier.md
- pabbly.md
- integrately.md
- webhook-outgoing.md
