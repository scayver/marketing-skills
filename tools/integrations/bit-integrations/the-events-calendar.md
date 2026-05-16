# The Events Calendar

The Events Calendar is the most popular WordPress event management plugin with robust event listings, RSVP, and ticketing features. Available as an Action (free) and Trigger (Pro) in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Yes (Action free; Trigger requires Pro)
**Category:** Webinars and Events
**Icon (Action):** `https://bit-integrations.com/wp-content/uploads/2026/02/The-Events-Calender-1.svg`
**Icon (Trigger):** `https://bit-integrations.com/wp-content/uploads/2026/02/The-Events-Calender.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Requires Pro plan; fires on RSVP events |
| As Action | ✓ | Free; create events |
| Free Tier | ✓ | Action is free; Trigger requires Pro |
| Field Mapping | ✓ | Map form or event data to The Events Calendar fields |

## Trigger Events

- Event RSVP submitted

## Action Events

- Create event

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations and The Events Calendar must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Form Submission to Events Calendar Event
**Trigger:** WordPress event submission form (e.g., community event submission)
**Action:** Create a new event in The Events Calendar with submitted details
**Use case:** Allow community members to submit events via a form that auto-creates entries in The Events Calendar

### Recipe 2: RSVP Submission to Email Notification
**Trigger:** The Events Calendar RSVP submitted
**Action:** Send a confirmation email or Slack notification with RSVP details
**Use case:** Notify the event organizer or send a custom confirmation when someone RSVPs for an event

### Recipe 3: RSVP to CRM Contact Creation
**Trigger:** The Events Calendar RSVP submitted
**Action:** Create a CRM contact or lead record with the attendee's details
**Use case:** Build a CRM contact list from event RSVP submissions automatically

## Setup Steps

1. Install Bit Integrations and The Events Calendar on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. For Trigger: Select The Events Calendar as the Trigger and choose RSVP submitted.
4. For Action: Choose your trigger source, then select The Events Calendar as the Action.
5. Select the action event (create event).
6. Map fields.
7. Save and test.

## When to Use

- When form-based community event submissions should auto-create Events Calendar listings
- When RSVP submissions should trigger notifications, CRM updates, or email sequences
- When automating event management workflows tied to The Events Calendar RSVP activity

## Related Integrations

- eventin.md
- modern-events-calendar.md
- google-calendar.md
- zoom-webinar.md
