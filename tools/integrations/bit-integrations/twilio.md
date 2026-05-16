# Twilio

Twilio is a cloud communications platform for programmatic SMS, voice, WhatsApp, and other messaging at scale. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Communication and Messaging
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Twilio.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Send SMS and WhatsApp messages via Twilio |
| Free Tier | ✓ | Free with Bit Integrations free plan (Twilio usage costs apply separately) |
| Field Mapping | ✓ | Map form fields to message recipient and body |

## Action Events

- Send SMS
- Send WhatsApp message

## Authentication

- **Type**: API Key (Account SID + Auth Token)
- **Required**: Account SID, Auth Token, and a Twilio phone number from console.twilio.com. Enter all in Bit Integrations.

## Common Workflow Recipes

### Recipe 1: Form Submission to SMS Confirmation
**Trigger:** WordPress form submission (appointment, registration, order)
**Action:** Send an SMS confirmation to the submitter's phone number
**Use case:** Deliver instant SMS confirmations for bookings, registrations, or purchases submitted via WordPress

### Recipe 2: WooCommerce Order to Customer SMS Alert
**Trigger:** WooCommerce order status change
**Action:** Send an SMS to the customer with order status update
**Use case:** Keep customers informed of their order status via text message without email

### Recipe 3: Lead Form to Sales Rep SMS Alert
**Trigger:** WordPress lead form submission
**Action:** Send an SMS to a sales representative with the lead's name and phone number
**Use case:** Alert the sales team instantly via text when a high-priority lead submits a form

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Twilio as the Action.
5. Log in to console.twilio.com, copy your Account SID and Auth Token, and get a Twilio phone number.
6. Enter Account SID, Auth Token, and Twilio phone number in Bit Integrations.
7. Select the action (Send SMS or Send WhatsApp).
8. Map fields: To (recipient number), From (Twilio number), Body (message text).
9. Save and test.

## When to Use

- When form submissions or WooCommerce events should trigger SMS notifications to customers or staff
- When offering SMS order status updates as an alternative to email
- When real-time text alerts for high-value leads or events are needed

## Related Integrations

- whatsapp.md
- telegram.md
- slack.md
- zoom-meeting.md
