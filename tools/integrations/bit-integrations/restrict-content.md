# Restrict Content (Pro)

Restrict Content Pro is a straightforward WordPress membership plugin for creating subscription-based sites with content restriction by membership level. Available as both Trigger and Action in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Action: Yes — Trigger: No
**Category:** Membership and Access Control
**Icon:** Action: `https://bit-integrations.com/wp-content/uploads/2026/02/Restrict-Content-1.svg` — Trigger: `https://bit-integrations.com/wp-content/uploads/2026/02/Restrict-Content.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on membership activation, expiry, and cancellation events |
| As Action | ✓ | Add member to a subscription level |
| Free Tier | ✓ | Action is free; Trigger requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Trigger Events

- Membership activated — fires when a member's subscription becomes active
- Membership expired — fires when a membership expires
- Membership cancelled — fires when a member cancels their subscription

## Action Events

- Add member to subscription level — assign a Restrict Content Pro subscription level to a WordPress user

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Restrict Content Pro must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Add new member to email list on activation
**Trigger:** Restrict Content — Membership activated
**Action:** Mailchimp / MailerLite — Add subscriber or add tag
**Key fields mapped:** User email, membership level, activation date
**Use case:** Automatically welcome new members to your email list when their subscription activates

### Recipe 2: Trigger win-back campaign on cancellation
**Trigger:** Restrict Content — Membership cancelled
**Action:** ConvertKit / ActiveCampaign — Add to automation or remove tag
**Key fields mapped:** User email, membership level, cancellation date
**Use case:** Start a re-engagement email flow as soon as a member cancels

### Recipe 3: Enroll member in LMS course on activation
**Trigger:** Restrict Content — Membership activated
**Action:** LearnDash / TutorLMS — Enroll in course
**Key fields mapped:** User email, subscription level mapped to course
**Use case:** Automatically grant course access when a membership becomes active

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select Restrict Content as the trigger or action.
4. For triggers, choose the event (e.g., Membership Expired) and select the subscription level.
5. For actions, choose Add Member to Subscription Level and select the target level.
6. Map the relevant fields to the connected platform.
7. Save and test with a real event (activate a test membership or trigger a test cancellation).

## When to Use

- You want to sync Restrict Content Pro members with your email marketing platform
- You need to enroll members in LMS courses automatically when their subscription activates
- You want to trigger re-engagement campaigns on membership expiry or cancellation
- You need to manage access to connected tools based on membership status

## Related Integrations

- memberpress.md
- paid-memberships-pro.md
- learndash.md
- lifterlms.md
- suremembers.md
