# Demio

Demio is a browser-based webinar platform designed for marketers, with automated webinars, live events, and engagement tools. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Webinars and Events
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Demio1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Register attendees for Demio events |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to Demio attendee registration fields |

## Action Events

- Register attendee for event

## Authentication

- **Type**: API Key + API Secret
- **Required**: API key and API secret from Demio account settings. Enter both in Bit Integrations.

## Common Workflow Recipes

### Recipe 1: Landing Page Form to Demio Webinar Registration
**Trigger:** WordPress landing page opt-in or webinar registration form
**Action:** Register the submitter for a Demio live or automated webinar event
**Use case:** Convert landing page opt-ins directly into Demio webinar registrations without manual export/import

### Recipe 2: WooCommerce Purchase to Demio Event Access
**Trigger:** WooCommerce order completed (webinar product)
**Action:** Register the buyer for the Demio event associated with the purchased product
**Use case:** Grant paid webinar access in Demio automatically after WooCommerce purchase

### Recipe 3: Email Subscribe to Automated Webinar Sequence
**Trigger:** WordPress email opt-in form submission
**Action:** Register the subscriber for a Demio automated (on-demand) webinar
**Use case:** Enroll email subscribers in automated webinar funnels to nurture them toward conversion

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Demio as the Action.
5. In Demio, go to account settings and copy your API key and API secret.
6. Enter both in Bit Integrations.
7. Select the target Demio event.
8. Map fields: name, email, event_id.
9. Save and test.

## When to Use

- When WordPress registration forms should feed attendees directly into Demio events
- When selling webinar access through WooCommerce and needing automatic Demio registration
- When running automated webinar funnels where email opt-ins trigger Demio enrollment

## Related Integrations

- zoom-webinar.md
- livestorm.md
- zoom-meeting.md
- google-calendar.md
