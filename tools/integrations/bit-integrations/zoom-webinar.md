# Zoom Webinar

Zoom Webinar is Zoom's platform for hosting large-scale virtual events and webinars with presenter and attendee roles. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Webinars and Events
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/ZoomMeeting-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Add webinar registrants to a Zoom Webinar |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to Zoom webinar registrant fields |

## Action Events

- Add webinar registrant

## Authentication

- **Type**: OAuth 2.0 (Server-to-Server OAuth)
- **Required**: Same Server-to-Server OAuth app as Zoom Meeting (marketplace.zoom.us). Enter Client ID, Client Secret, and Account ID in Bit Integrations.

## Common Workflow Recipes

### Recipe 1: Webinar Registration Form to Zoom Webinar
**Trigger:** WordPress webinar registration form submission
**Action:** Add the registrant to a Zoom Webinar
**Use case:** Register form submitters directly into a Zoom Webinar and send them Zoom's automated confirmation and reminder emails

### Recipe 2: WooCommerce Purchase to Paid Webinar Access
**Trigger:** WooCommerce order completed (webinar product)
**Action:** Register the customer as a Zoom Webinar attendee
**Use case:** Automatically grant webinar access after purchase without manual registration management

### Recipe 3: Email List Opt-In to Webinar Registration
**Trigger:** Email marketing platform opt-in or landing page form submission
**Action:** Register the subscriber for an upcoming Zoom Webinar
**Use case:** Convert email opt-ins into webinar registrants automatically for lead generation webinars

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Zoom Webinar as the Action.
5. Use the same Server-to-Server OAuth app credentials as Zoom Meeting (Client ID, Client Secret, Account ID).
6. Enter credentials in Bit Integrations and select the target webinar.
7. Map fields: first_name, last_name, email, webinar_id.
8. Save and test.

## When to Use

- When WordPress registration forms should add attendees directly to a Zoom Webinar
- When paid webinar access is sold through WooCommerce and attendees need automatic registration
- When growing webinar attendance from email opt-ins or landing page forms

## Related Integrations

- zoom-meeting.md
- demio.md
- livestorm.md
- google-calendar.md
