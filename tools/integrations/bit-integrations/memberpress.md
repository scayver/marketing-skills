# MemberPress

MemberPress is a leading WordPress membership plugin for creating subscription sites, gating content by membership level, and managing recurring payments. Available as both Trigger and Action in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Action: Yes — Trigger: No
**Category:** Membership and Access Control
**Icon:** Action: `https://bit-integrations.com/wp-content/uploads/2026/02/Member-Press-1.svg` — Trigger: `https://bit-integrations.com/wp-content/uploads/2026/02/Member-Press.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on membership purchase, expiry, cancellation, and renewal events |
| As Action | ✓ | Add or remove membership levels |
| Free Tier | ✓ | Action is free; Trigger requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Trigger Events

- Membership purchased — fires when a member buys a membership
- Membership expired — fires when a membership expires
- Membership cancelled — fires when a member cancels their subscription
- Membership renewed — fires when a membership renews

## Action Events

- Add membership level — assign a MemberPress membership to a WordPress user
- Remove membership level — remove a MemberPress membership from a user

## Authentication

- **Type**: WordPress plugin-native
- **Required**: MemberPress must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Add contact to CRM on membership purchase
**Trigger:** MemberPress — Membership purchased
**Action:** HubSpot / Zoho CRM — Create or update contact
**Key fields mapped:** User email, first name, last name, membership level, purchase date
**Use case:** Automatically feed new members into your CRM for onboarding or upsell tracking

### Recipe 2: Trigger win-back sequence on cancellation
**Trigger:** MemberPress — Membership cancelled
**Action:** ActiveCampaign / Mailchimp — Add to automation or tag
**Key fields mapped:** User email, membership name, cancellation date
**Use case:** Start a cancellation win-back email sequence the moment a member cancels

### Recipe 3: Enroll new member in LMS course
**Trigger:** MemberPress — Membership purchased
**Action:** LearnDash / TutorLMS — Enroll in course
**Key fields mapped:** User email, membership level mapped to course
**Use case:** Automatically enroll members in courses tied to their membership level

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select MemberPress as the trigger or action.
4. For triggers, choose the event (e.g., Membership Purchased) and select the membership level or leave global.
5. For actions, choose Add Membership Level or Remove Membership Level and select the target level.
6. Map the relevant fields to the connected platform.
7. Save and test with a real event (purchase a test membership or cancel a test subscription).

## When to Use

- You want to sync new members automatically into your CRM or email platform
- You need to trigger LMS course enrollment based on membership level purchased
- You want to start win-back or re-engagement email flows on cancellations or expirations
- You need to remove access or tags in connected tools when memberships lapse

## Related Integrations

- memberpress-courses.md
- learndash.md
- lifterlms.md
- restrict-content.md
- paid-memberships-pro.md
- woocommerce.md
