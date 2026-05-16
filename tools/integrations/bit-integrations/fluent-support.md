# Fluent Support

Fluent Support is a WordPress-native customer support and helpdesk plugin for managing tickets and customer conversations without leaving WordPress. Available as an Action (free) and Trigger (Pro) in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Yes (Action free; Trigger requires Pro)
**Category:** Support and Helpdesk
**Icon (Action):** `https://bit-integrations.com/wp-content/uploads/2026/02/Fluent_Support1.svg`
**Icon (Trigger):** `https://bit-integrations.com/wp-content/uploads/2026/02/Fluent_Support1-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Requires Pro plan; fires on ticket lifecycle events |
| As Action | ✓ | Free; create support tickets |
| Free Tier | ✓ | Action is free; Trigger requires Pro |
| Field Mapping | ✓ | Map form fields to Fluent Support ticket fields |

## Trigger Events

- Ticket created
- Ticket resolved
- Reply added to ticket

## Action Events

- Create ticket

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations and Fluent Support must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Contact Form to Fluent Support Ticket
**Trigger:** WordPress contact or support form submission
**Action:** Create a Fluent Support ticket with the submitter's message and contact details
**Use case:** Route website inquiries directly into Fluent Support for agent handling without leaving WordPress

### Recipe 2: Ticket Resolved to CRM Update
**Trigger:** Fluent Support ticket resolved
**Action:** Update the customer's CRM record with a resolved ticket note or tag
**Use case:** Keep CRM contact history in sync with support resolution events automatically

### Recipe 3: WooCommerce Order to Auto-Support Ticket
**Trigger:** WooCommerce order event (refund requested, order on hold, etc.)
**Action:** Create a Fluent Support ticket for the customer
**Use case:** Automatically open a support ticket for order issues that require agent review

## Setup Steps

1. Install Bit Integrations and Fluent Support on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. For Trigger: Select Fluent Support as the Trigger and choose the event.
4. For Action: Choose your trigger source, then select Fluent Support as the Action.
5. Select the action event (create ticket).
6. Map fields to ticket fields.
7. Save and test.

## When to Use

- When WordPress forms should create Fluent Support tickets for team handling
- When support ticket lifecycle events should update CRM records or send notifications
- When building a fully WordPress-native support workflow without external helpdesk tools

## Related Integrations

- freshdesk.md
- zoho-desk.md
- slack.md
- fluentboards.md
