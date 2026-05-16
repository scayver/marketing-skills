# Amelia

Amelia is a professional WordPress booking plugin for appointments, events, and services with a polished front-end calendar interface. Available as an Action (Pro) and Trigger (Pro) in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** No
**Category:** Webinars and Events
**Icon (Action):** `https://bit-integrations.com/wp-content/uploads/2026/02/Amelia-Booking.svg`
**Icon (Trigger — Webhook):** `https://bit-integrations.com/wp-content/uploads/2026/02/Amelia_Webhook1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Requires Pro plan; fires on appointment lifecycle events |
| As Action | ✓ | Requires Pro plan; create appointments and customers |
| Free Tier | — | Both roles require Pro |
| Field Mapping | ✓ | Map booking and customer data fields |

## Trigger Events

- Appointment booked
- Appointment cancelled
- Appointment completed

## Action Events

- Create appointment
- Create customer

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and Amelia must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Amelia Booking to CRM Contact
**Trigger:** Amelia appointment booked
**Action:** Create or update a CRM contact with the customer's booking details
**Use case:** Automatically add clients who book appointments to your CRM pipeline

### Recipe 2: External Form to Amelia Appointment
**Trigger:** WordPress custom form submission
**Action:** Create an Amelia appointment with the submitted details
**Use case:** Take appointment requests via a custom form and push them into Amelia's booking management

### Recipe 3: Appointment Completed to Follow-Up Email
**Trigger:** Amelia appointment completed
**Action:** Add the client to an email follow-up sequence or send a review request notification
**Use case:** Automate post-appointment follow-up by connecting Amelia completion events to email marketing

## Setup Steps

1. Install Bit Integrations Pro and Amelia on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. For Trigger: Select Amelia as the Trigger and choose the event (booked, cancelled, completed).
4. For Action: Choose your trigger source, then select Amelia as the Action (create appointment or customer).
5. Map fields.
6. Save and test.

## When to Use

- When Amelia booking events should sync to CRM, email marketing, or notification tools
- When external forms should create appointments directly in Amelia
- When post-appointment workflows (reviews, follow-ups) need to be automated from Amelia completion events

## Related Integrations

- fluentbooking.md
- simply-schedule-appointments.md
- google-calendar.md
- zoom-meeting.md
