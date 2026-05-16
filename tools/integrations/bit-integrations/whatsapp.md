# WhatsApp

WhatsApp is a global messaging platform with over 2 billion users, supporting business messaging via the WhatsApp Cloud API. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Communication and Messaging
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Whatsapp.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Send WhatsApp messages via WhatsApp Cloud API |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to message template variables |

## Action Events

- Send WhatsApp message via WhatsApp Cloud API (template-based messaging)

## Authentication

- **Type**: WhatsApp Cloud API credentials
- **Required**: WhatsApp Business Cloud API token, Phone Number ID, and recipient phone number. Configure in Meta for Developers (developers.facebook.com). Enter credentials in Bit Integrations.

## Common Workflow Recipes

### Recipe 1: Lead Form to WhatsApp Welcome Message
**Trigger:** WordPress lead form submission
**Action:** Send a WhatsApp message to the lead using a pre-approved message template
**Use case:** Instantly follow up with leads via WhatsApp the moment they submit a form

### Recipe 2: WooCommerce Order Confirmation via WhatsApp
**Trigger:** WooCommerce order completed
**Action:** Send the customer an order confirmation WhatsApp message using a template
**Use case:** Deliver order confirmations via WhatsApp for customers who prefer messaging over email

### Recipe 3: Appointment Booking Reminder via WhatsApp
**Trigger:** Booking or appointment form submission
**Action:** Send a WhatsApp appointment confirmation and reminder to the customer
**Use case:** Reduce no-shows by confirming and reminding customers of appointments via WhatsApp

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select WhatsApp as the Action.
5. Set up a WhatsApp Business account in Meta for Developers and obtain the Cloud API token and Phone Number ID.
6. Create and get approval for message templates in the WhatsApp Business Manager.
7. Enter API credentials in Bit Integrations.
8. Map fields: recipient phone, message template name, template variables.
9. Save and test.

## When to Use

- When customers or leads prefer WhatsApp over email for confirmations and follow-ups
- When sending order confirmations, appointment reminders, or lead follow-ups via WhatsApp at scale
- When operating in markets where WhatsApp is the primary business communication channel

## Related Integrations

- twilio.md
- telegram.md
- slack.md
- zoom-meeting.md
