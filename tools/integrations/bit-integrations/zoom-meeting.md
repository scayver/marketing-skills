# Zoom Meeting

Zoom Meeting is a cloud-based video conferencing platform for virtual meetings, webinars, and collaboration. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Webinars and Events
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/ZoomMeeting.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Add meeting registrants to a Zoom meeting |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to Zoom meeting registrant fields |

## Action Events

- Add meeting registrant

## Authentication

- **Type**: OAuth 2.0 (Server-to-Server OAuth)
- **Required**: Create a Server-to-Server OAuth app in the Zoom Marketplace (JWT is deprecated). Enter Client ID, Client Secret, and Account ID in Bit Integrations.

## Common Workflow Recipes

### Recipe 1: Registration Form to Zoom Meeting
**Trigger:** WordPress meeting registration form submission
**Action:** Add the registrant to a Zoom meeting
**Use case:** Automatically register form submitters for a Zoom meeting and send them Zoom's confirmation email with join link

### Recipe 2: WooCommerce Purchase to Zoom Meeting Access
**Trigger:** WooCommerce order completed (meeting access product)
**Action:** Register the customer as a Zoom meeting participant
**Use case:** Grant purchased Zoom meeting access automatically upon payment without manual registration

### Recipe 3: Membership Signup to Group Zoom Session
**Trigger:** Membership plugin registration event
**Action:** Register the new member for a recurring Zoom meeting
**Use case:** Automatically enroll new members in scheduled group calls or coaching sessions

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Zoom Meeting as the Action.
5. In the Zoom Marketplace (marketplace.zoom.us), create a Server-to-Server OAuth app and get Client ID, Client Secret, and Account ID.
6. Enter credentials in Bit Integrations.
7. Select the target meeting.
8. Map fields: first_name, last_name, email, meeting_id.
9. Save and test.

## When to Use

- When WordPress forms should register attendees directly into a Zoom meeting
- When WooCommerce purchases should grant access to a paid Zoom meeting
- When automating Zoom meeting registration as part of a larger onboarding or event workflow

## Related Integrations

- zoom-webinar.md
- demio.md
- livestorm.md
- google-calendar.md
