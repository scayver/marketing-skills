# Appointment Hour Booking

Appointment Hour Booking is a WordPress plugin for managing time-slot based appointment bookings with configurable schedules and services. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Webinars and Events
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Appointment-Hour-Booking.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; create bookings in Appointment Hour Booking |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to booking fields |

## Action Events

- Create booking

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and Appointment Hour Booking must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Service Inquiry Form to Time-Slot Booking
**Trigger:** WordPress service inquiry form submission
**Action:** Create a booking in Appointment Hour Booking with the requested time slot
**Use case:** Automate booking creation from a service inquiry form without manual scheduling intervention

### Recipe 2: WooCommerce Session Purchase to Booking
**Trigger:** WooCommerce order completed (session or service product)
**Action:** Create an Appointment Hour Booking entry for the purchased session
**Use case:** Automatically book a session in the scheduling system when a client purchases a service

### Recipe 3: Registration to Scheduled Onboarding Slot
**Trigger:** WordPress user registration or membership activation
**Action:** Create an Appointment Hour Booking for a welcome or onboarding session
**Use case:** Schedule an automatic onboarding appointment for every new member or customer

## Setup Steps

1. Install Bit Integrations Pro and Appointment Hour Booking on your WordPress site.
2. Configure services and time slots in Appointment Hour Booking.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select Appointment Hour Booking as the Action.
6. Configure the booking settings and target service.
7. Map form fields to booking fields.
8. Save and test.

## When to Use

- When forms or purchases should automatically create time-slot bookings in Appointment Hour Booking
- When running a time-slot based service business that uses this plugin for scheduling
- When WooCommerce service sales should create corresponding Appointment Hour Booking entries

## Related Integrations

- amelia.md
- simply-schedule-appointments.md
- fluentbooking.md
- google-calendar.md
