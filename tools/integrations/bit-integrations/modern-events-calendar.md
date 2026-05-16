# Modern Events Calendar

Modern Events Calendar is a feature-rich WordPress event management plugin with booking, front-end submission, and multiple calendar views. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Webinars and Events
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Modern-Events-Calender.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; register bookings in Modern Events Calendar |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to Modern Events Calendar booking fields |

## Action Events

- Register booking

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and Modern Events Calendar must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: External Registration Form to MEC Booking
**Trigger:** WordPress registration form submission
**Action:** Register the attendee as a booking in Modern Events Calendar
**Use case:** Use a custom WordPress form to collect registrations and pass them into MEC's booking system

### Recipe 2: WooCommerce Ticket Purchase to MEC Booking
**Trigger:** WooCommerce order completed (event ticket)
**Action:** Create a booking in Modern Events Calendar for the purchased event
**Use case:** Sync WooCommerce ticket sales with MEC's attendee booking records automatically

### Recipe 3: Membership Signup to Exclusive Event Booking
**Trigger:** Membership plugin activation
**Action:** Create a Modern Events Calendar booking for a member-only event
**Use case:** Automatically register new members for exclusive events as a membership benefit

## Setup Steps

1. Install Bit Integrations Pro and Modern Events Calendar on your WordPress site.
2. Create the target event in Modern Events Calendar.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select Modern Events Calendar as the Action.
6. Select the target event.
7. Map form fields to booking fields.
8. Save and test.

## When to Use

- When external forms should register attendees into Modern Events Calendar's booking system
- When WooCommerce ticket sales should create corresponding MEC booking records
- When membership activations should trigger automatic event bookings for members

## Related Integrations

- the-events-calendar.md
- eventin.md
- amelia.md
- google-calendar.md
