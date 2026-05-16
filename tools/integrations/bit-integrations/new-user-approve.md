# New User Approve

New User Approve is a WordPress plugin that holds new user registrations in a pending state until an administrator manually approves them, giving site owners control over who joins. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Membership and Access Control
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/New-User-Approve.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Approve user |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Approve user — programmatically approve a pending WordPress user registration held by New User Approve

## Authentication

- **Type**: WordPress plugin-native
- **Required**: New User Approve must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Auto-approve user after payment confirmation
**Trigger:** WooCommerce — Order completed
**Action:** New User Approve — Approve user
**Key fields mapped:** Customer email matched to pending user
**Use case:** Automatically approve a pending registration when the corresponding payment is confirmed, removing the need for manual admin approval

### Recipe 2: Auto-approve user after membership activation
**Trigger:** MemberPress — Membership purchased
**Action:** New User Approve — Approve user
**Key fields mapped:** User email matched to pending registration
**Use case:** Approve new member accounts immediately when they purchase a membership, bypassing the manual review queue

### Recipe 3: Approve user after CRM qualification
**Trigger:** HubSpot / Zoho CRM — Contact status updated or deal closed
**Action:** New User Approve — Approve user
**Key fields mapped:** Contact email matched to pending user
**Use case:** Grant site access to a pending registrant once a CRM-based qualification step is completed (e.g., a sales call or onboarding task)

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select New User Approve as the action.
4. Choose Approve User.
5. Map the user email from your trigger source to identify the pending user to approve.
6. Save and test with a real event (register a test user and trigger an approval).

## When to Use

- You require admin approval for new registrations but want approval automated for paying customers
- You use a vetting process (payment, CRM qualification, form submission) before granting site access
- You want to remove the manual approval bottleneck for specific user types while keeping review for others
- You integrate paid or gated access workflows where approval should follow a completed payment or verification step

## Related Integrations

- user-registration.md
- wp-user-registration.md
- memberpress.md
- woocommerce.md
- profile-builder.md
