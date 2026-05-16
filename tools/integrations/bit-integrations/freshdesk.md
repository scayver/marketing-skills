# Freshdesk

Freshdesk is a cloud-based customer support platform for managing support tickets, contacts, and agent collaboration. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Support and Helpdesk
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Fresh_Desk1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create tickets and contacts in Freshdesk |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to Freshdesk ticket and contact fields |

## Action Events

- Create ticket
- Create contact

## Authentication

- **Type**: API Key
- **Required**: API key from Freshdesk (Profile Settings > Your API key). Enter the key and your Freshdesk subdomain in Bit Integrations.

## Common Workflow Recipes

### Recipe 1: Support Form to Freshdesk Ticket
**Trigger:** WordPress support or contact form submission
**Action:** Create a Freshdesk ticket with subject, description, email, and priority
**Use case:** Route website support requests directly into Freshdesk for agent assignment and tracking

### Recipe 2: WooCommerce Order Issue to Support Ticket
**Trigger:** WordPress order issue form or WooCommerce order status event
**Action:** Create a Freshdesk ticket linked to the customer's email
**Use case:** Automatically open a support ticket when customers report order problems via a WordPress form

### Recipe 3: Contact Form to Freshdesk Contact Record
**Trigger:** WordPress contact form submission
**Action:** Create a Freshdesk contact with name, email, and phone
**Use case:** Build a Freshdesk contact database automatically from website inquiries

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Freshdesk as the Action.
5. In Freshdesk, go to Profile Settings and copy your API key.
6. Enter the API key and your Freshdesk subdomain (yourcompany.freshdesk.com) in Bit Integrations.
7. Map fields: subject, description, email, name, priority, status, source, type.
8. Save and test.

## When to Use

- When WordPress support forms should auto-create Freshdesk tickets for agent handling
- When building a customer support workflow where WordPress is the intake point
- When you need a Freshdesk contact directory populated from WordPress form submissions

## Related Integrations

- fluent-support.md
- zoho-desk.md
- zendesk-sell.md
- slack.md
