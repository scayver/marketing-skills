# FluentBooking

FluentBooking is a WordPress appointment scheduling plugin by the Fluent team with a clean UI, calendar management, and team booking features. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Webinars and Events
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/FluentBooking.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; create bookings in FluentBooking |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to FluentBooking appointment fields |

## Action Events

- Create booking

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and FluentBooking must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Custom Form to FluentBooking Appointment
**Trigger:** WordPress custom intake form submission
**Action:** Create a FluentBooking appointment with the submitter's details and service selection
**Use case:** Accept appointment requests via a custom form and create them in FluentBooking for calendar management

### Recipe 2: WooCommerce Service Purchase to Booking
**Trigger:** WooCommerce order completed (service or session product)
**Action:** Create a FluentBooking appointment for the purchased service
**Use case:** Automatically schedule a session in FluentBooking when a client purchases a service through WooCommerce

### Recipe 3: Lead Form to Consultation Booking
**Trigger:** WordPress consultation request form submission
**Action:** Create a FluentBooking booking for the requested consultation slot
**Use case:** Convert consultation request forms directly into scheduled FluentBooking appointments

## Setup Steps

1. Install Bit Integrations Pro and FluentBooking on your WordPress site.
2. Configure services and availability in FluentBooking.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select FluentBooking as the Action.
6. Select the target service and host.
7. Map form fields to booking fields.
8. Save and test.

## When to Use

- When custom forms or purchases should create FluentBooking appointments automatically
- When you want appointment scheduling in the Fluent ecosystem without manual booking entry
- When WooCommerce service purchases should immediately create a scheduled FluentBooking session

## Related Integrations

- amelia.md
- simply-schedule-appointments.md
- google-calendar.md
- fluent-support.md
