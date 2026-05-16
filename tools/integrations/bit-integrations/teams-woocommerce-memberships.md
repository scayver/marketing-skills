# Teams for WooCommerce Memberships

Teams for WooCommerce Memberships is a WooCommerce extension that enables group or team-based membership purchases, allowing one buyer to grant membership access to multiple team members. Available as both Trigger and Action in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** No — both Trigger and Action require Pro
**Category:** eCommerce and Payments
**Icon:** Action: `https://bit-integrations.com/wp-content/uploads/2026/02/Teams-for-WooCommerce-Memberships-2.svg` — Trigger: `https://bit-integrations.com/wp-content/uploads/2026/02/Teams-for-WooCommerce-Memberships-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on team seat management events |
| As Action | ✓ | Manage team seats and member assignments |
| Free Tier | — | Requires Pro for both Trigger and Action |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Trigger Events

- Team seat assignment and management events (refer to Bit Integrations documentation for the current full list of supported trigger events)

## Action Events

- Team seat and member management actions (refer to Bit Integrations documentation for the current full list of supported action events)

## Authentication

- **Type**: WordPress plugin-native
- **Required**: WooCommerce, WooCommerce Memberships, and Teams for WooCommerce Memberships must all be installed and active; Bit Integrations reads them directly via WordPress hooks
- **Note**: No API keys required; all plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Notify team owner on seat assignment
**Trigger:** Teams for WooCommerce Memberships — Seat assigned to team member
**Action:** Email notification or Slack webhook
**Key fields mapped:** Team owner email, new member email, team name
**Use case:** Alert the team owner or admin whenever a new member is added to a team seat

### Recipe 2: Add new team member to CRM or email platform
**Trigger:** Teams for WooCommerce Memberships — Seat assigned
**Action:** HubSpot / Mailchimp — Create or update contact
**Key fields mapped:** New member email, team name, membership plan
**Use case:** Automatically create or tag CRM contacts when individuals join a team membership

### Recipe 3: Grant additional access on team seat assignment
**Trigger:** Teams for WooCommerce Memberships — Seat assigned
**Action:** LearnDash / TutorLMS — Enroll in course
**Key fields mapped:** New member email, course linked to team membership
**Use case:** Automatically enroll new team members in the LMS course associated with the team membership plan

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Ensure WooCommerce, WooCommerce Memberships, and Teams for WooCommerce Memberships are all installed and active.
3. Go to Bit Integrations > Create Integration.
4. Select Teams for WooCommerce Memberships as the trigger or action.
5. Choose the relevant seat or team management event.
6. Map the required fields to the connected platform.
7. Save and test with a real event (assign a test seat to a team member).

## When to Use

- You sell team or group memberships and want to automate actions when seats are assigned or removed
- You need to notify team owners or admins when team membership changes occur
- You want to enroll individual team members in LMS courses automatically on seat assignment
- You integrate team membership management into a broader CRM or email automation workflow

## Related Integrations

- woocommerce-memberships.md
- woocommerce.md
- woocommerce-subscriptions.md
- learndash.md
- memberpress.md
