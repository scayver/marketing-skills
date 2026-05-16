# Livestorm

Livestorm is a browser-based webinar and video meeting platform with strong engagement, analytics, and automation features. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Webinars and Events
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Livestorm-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Register contacts for Livestorm events |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to Livestorm contact registration fields |

## Action Events

- Register contact for event

## Authentication

- **Type**: API Key
- **Required**: API key from Livestorm Organization Settings > API. Enter the key in Bit Integrations.

## Common Workflow Recipes

### Recipe 1: WordPress Registration Form to Livestorm Event
**Trigger:** WordPress webinar or event registration form submission
**Action:** Register the submitter as a contact for a Livestorm event
**Use case:** Automatically register form submitters for Livestorm webinars and send them Livestorm's confirmation and reminder emails

### Recipe 2: WooCommerce Purchase to Livestorm Event Registration
**Trigger:** WooCommerce order completed (webinar or training product)
**Action:** Register the buyer for the associated Livestorm event
**Use case:** Grant paid event access in Livestorm automatically on WooCommerce purchase

### Recipe 3: Email Opt-In to Livestorm On-Demand Session
**Trigger:** WordPress email opt-in form
**Action:** Register the subscriber for a Livestorm on-demand session
**Use case:** Drive webinar registrations from email opt-in campaigns without manual registration management

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Livestorm as the Action.
5. In Livestorm, go to Organization Settings > API and copy your API key.
6. Enter the API key in Bit Integrations.
7. Select the target Livestorm event.
8. Map fields: email, first_name, last_name, event_id.
9. Save and test.

## When to Use

- When WordPress forms should register attendees directly into Livestorm events
- When WooCommerce purchases include access to a Livestorm webinar or training session
- When email opt-ins should automatically enroll subscribers in Livestorm on-demand content

## Related Integrations

- demio.md
- zoom-webinar.md
- zoom-meeting.md
- google-calendar.md
