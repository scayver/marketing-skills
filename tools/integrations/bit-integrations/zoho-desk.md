# Zoho Desk

Zoho Desk is a cloud-based customer support and helpdesk platform for managing tickets, contacts, and agent workflows. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Project Management and Productivity
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/ZohoDesk.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create tickets and contacts in Zoho Desk |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to Zoho Desk ticket and contact fields |

## Action Events

- Create ticket
- Create contact

## Authentication

- **Type**: OAuth 2.0
- **Required**: Authorize Bit Integrations via Zoho OAuth. Select the target Zoho Desk organization and department.

## Common Workflow Recipes

### Recipe 1: Support Form to Zoho Desk Ticket
**Trigger:** WordPress support request form submission
**Action:** Create a Zoho Desk ticket with the customer's issue, priority, and contact details
**Use case:** Route website support requests directly into Zoho Desk for agent handling

### Recipe 2: Contact Form to Zoho Desk Contact
**Trigger:** WordPress contact form submission
**Action:** Create or update a Zoho Desk contact with name, email, and phone
**Use case:** Build a Zoho Desk contact database automatically from website inquiries

### Recipe 3: WooCommerce Order Issue to Support Ticket
**Trigger:** Custom WooCommerce order status or form trigger
**Action:** Create a Zoho Desk ticket linked to the customer and order
**Use case:** Automatically open a support ticket when an order issue is flagged via a WordPress form

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Zoho Desk as the Action.
5. Authorize Bit Integrations with your Zoho account.
6. Select the target organization and department.
7. Map fields: subject, description, email, phone, department_id, priority.
8. Save and test.

## When to Use

- When WordPress support forms should auto-create Zoho Desk tickets for agent assignment
- When building a customer contact database in Zoho Desk from WordPress form submissions
- When integrating WooCommerce order issues or complaints into a structured support workflow

## Related Integrations

- freshdesk.md
- fluent-support.md
- zendesk-sell.md
- zoho-crm.md
