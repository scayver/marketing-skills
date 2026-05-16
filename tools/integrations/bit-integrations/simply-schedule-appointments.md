# Simply Schedule Appointments

Simply Schedule Appointments is a user-friendly WordPress appointment booking plugin with Google Calendar sync and flexible scheduling rules. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Webinars and Events
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Simply-Schedule-Appointments.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; create appointments in Simply Schedule Appointments |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to appointment booking fields |

## Action Events

- Create appointment

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and Simply Schedule Appointments must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Intake Form to SSA Appointment
**Trigger:** WordPress client intake form submission
**Action:** Create a Simply Schedule Appointments booking with the client's details
**Use case:** Convert intake form submissions into scheduled appointments in SSA without manual booking

### Recipe 2: WooCommerce Service Purchase to Appointment
**Trigger:** WooCommerce order completed (service product)
**Action:** Create a Simply Schedule Appointments booking for the purchased service
**Use case:** Automatically schedule a session in SSA when a client pays for a service through WooCommerce

### Recipe 3: Contact Form Consultation to Appointment
**Trigger:** WordPress consultation request form submission
**Action:** Book a consultation slot in Simply Schedule Appointments for the requester
**Use case:** Turn website consultation requests into scheduled SSA appointments automatically

## Setup Steps

1. Install Bit Integrations Pro and Simply Schedule Appointments on your WordPress site.
2. Create the target appointment type in SSA.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select Simply Schedule Appointments as the Action.
6. Select the appointment type.
7. Map form fields to appointment fields.
8. Save and test.

## When to Use

- When form submissions or purchases should create SSA appointments automatically
- When running a service business that uses Simply Schedule Appointments for client scheduling
- When WooCommerce service sales should trigger automatic appointment scheduling in SSA

## Related Integrations

- amelia.md
- fluentbooking.md
- appointment-hour-booking.md
- google-calendar.md
