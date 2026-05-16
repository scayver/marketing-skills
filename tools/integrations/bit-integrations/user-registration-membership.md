# User Registration & Membership

User Registration & Membership is a WordPress plugin that combines front-end user registration form building with membership management and content restriction capabilities. Available as both Trigger and Action in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** No — both Trigger and Action require Pro
**Category:** Membership and Access Control
**Icon:** Action: `https://bit-integrations.com/wp-content/uploads/2026/04/User-Registration-Membership-1.svg` — Trigger: `https://bit-integrations.com/wp-content/uploads/2026/04/User-Registration-Membership.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on user registration and membership events |
| As Action | ✓ | Create user and manage membership assignments |
| Free Tier | — | Requires Pro for both Trigger and Action |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Trigger Events

- User and membership activity events (refer to Bit Integrations documentation for the current full list of supported trigger events)

## Action Events

- User creation and membership management actions (refer to Bit Integrations documentation for the current full list of supported action events)

## Authentication

- **Type**: WordPress plugin-native
- **Required**: User Registration & Membership must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Sync new registrations to email platform
**Trigger:** User Registration & Membership — User registered
**Action:** Mailchimp / ConvertKit — Add subscriber
**Key fields mapped:** User email, first name, last name, registration date
**Use case:** Automatically add newly registered users to your email marketing list

### Recipe 2: Add contact to CRM on membership activation
**Trigger:** User Registration & Membership — Membership activated
**Action:** HubSpot / Zoho CRM — Create or update contact
**Key fields mapped:** User email, membership plan, activation date
**Use case:** Push new members into your CRM when their membership becomes active

### Recipe 3: Enroll user in LMS course on membership purchase
**Trigger:** User Registration & Membership — Membership purchased
**Action:** LearnDash / TutorLMS — Enroll in course
**Key fields mapped:** User email, course tied to membership level
**Use case:** Grant LMS course access automatically when a user purchases a membership

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select User Registration & Membership as the trigger or action.
4. For triggers, choose the relevant user or membership event.
5. For actions, choose the user creation or membership management action and configure the target.
6. Map the relevant fields to the connected platform.
7. Save and test with a real event (register a test user or activate a test membership).

## When to Use

- You use User Registration & Membership for both form-based registration and membership gating
- You want to sync new user registrations or membership events with email or CRM platforms
- You need to enroll members in LMS courses based on their membership plan
- You want a combined registration and membership plugin integrated into a broader automation workflow

## Related Integrations

- user-registration.md
- wp-user-registration.md
- memberpress.md
- restrict-content.md
- learndash.md
