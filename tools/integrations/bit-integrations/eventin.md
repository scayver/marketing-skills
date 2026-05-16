# Eventin

Eventin is a comprehensive event management plugin for WordPress that handles event listings, schedules, ticketing, and attendee registration. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Webinars and Events
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Eventin.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; register attendees for Eventin events |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to Eventin attendee registration fields |

## Action Events

- Register attendee for an event

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and Eventin must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: External Form to Eventin Event Registration
**Trigger:** WordPress form submission (a form separate from Eventin's own registration)
**Action:** Register the submitter as an Eventin attendee
**Use case:** Use a custom-designed WordPress form to collect attendee details and pass them into Eventin for event management

### Recipe 2: WooCommerce Ticket Purchase to Eventin Registration
**Trigger:** WooCommerce order completed (event ticket product)
**Action:** Register the buyer as an Eventin event attendee
**Use case:** Sync WooCommerce ticket sales with Eventin's attendee management automatically

### Recipe 3: Membership Activation to Premium Event Access
**Trigger:** Membership plugin subscription activated
**Action:** Register the member as an attendee in an exclusive Eventin event
**Use case:** Grant event access as a membership benefit automatically on subscription activation

## Setup Steps

1. Install Bit Integrations Pro and Eventin on your WordPress site.
2. Create the target event in Eventin.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select Eventin as the Action.
6. Select the target event.
7. Map form fields to attendee registration fields.
8. Save and test.

## When to Use

- When external WordPress forms should register attendees into Eventin-managed events
- When WooCommerce ticket sales should sync with Eventin attendee records
- When membership activations should grant access to Eventin events automatically

## Related Integrations

- the-events-calendar.md
- modern-events-calendar.md
- zoom-webinar.md
- amelia.md
