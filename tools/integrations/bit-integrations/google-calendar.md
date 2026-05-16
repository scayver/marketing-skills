# Google Calendar

Google Calendar is a time-management and scheduling tool for creating and sharing events and appointments. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Project Management and Productivity
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Google_Calender1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create or update events in Google Calendar |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to calendar event fields |

## Action Events

- Create event
- Update event

## Authentication

- **Type**: OAuth 2.0
- **Required**: Authorize Bit Integrations via Google OAuth. Select the target calendar.

## Common Workflow Recipes

### Recipe 1: Appointment Booking Form to Google Calendar Event
**Trigger:** Appointment or booking form submission
**Action:** Create a Google Calendar event with the appointment date, time, and attendee details
**Use case:** Automatically block time on the calendar when clients book through a WordPress form

### Recipe 2: Event Registration to Calendar Reminder
**Trigger:** Event registration form submission
**Action:** Create a Google Calendar event for the registrant's spot at the event
**Use case:** Give event organizers a calendar view of all registered attendees

### Recipe 3: Consultation Request to Team Calendar
**Trigger:** Consultation request form submission
**Action:** Create a Google Calendar event on the team's shared calendar with the prospect's contact info
**Use case:** Immediately schedule consultation slots when prospects request a meeting via form

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Google Calendar as the Action.
5. Click "Authorize" and sign in with your Google account.
6. Select the target calendar.
7. Map fields: summary, description, start datetime, end datetime, location, attendees.
8. Save and test.

## When to Use

- When booking or appointment forms should automatically create Google Calendar events
- When event registrations should populate a shared team calendar
- When scheduling requests from WordPress forms need to flow into Google Calendar without manual entry

## Related Integrations

- google-sheets.md
- google-contacts.md
- zoom-meeting.md
- amelia.md
