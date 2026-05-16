# WooCommerce Memberships

WooCommerce Memberships is the official WooCommerce extension for creating membership plans that restrict content and grant perks, sold through the WooCommerce checkout. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** eCommerce and Payments
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Woo-Commerce-Memberships.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Grant membership, revoke membership |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Grant membership — add a WordPress user to a WooCommerce Membership plan
- Revoke membership — remove a user from a WooCommerce Membership plan

## Authentication

- **Type**: WordPress plugin-native
- **Required**: WooCommerce and WooCommerce Memberships must both be installed and active; Bit Integrations reads them directly via WordPress hooks
- **Note**: No API keys required; all plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Grant membership on external payment or form submission
**Trigger:** SureCart / Gravity Forms — Purchase completed or form submitted
**Action:** WooCommerce Memberships — Grant membership
**Key fields mapped:** Customer email, membership plan to assign
**Use case:** Grant WooCommerce Membership access when a purchase or enrollment happens through a system other than WooCommerce itself

### Recipe 2: Enroll member in LMS course after membership granted
**Trigger:** WooCommerce — Order completed (product linked to membership)
**Action:** WooCommerce Memberships — Grant membership AND LearnDash — Enroll in course
**Key fields mapped:** Customer email, membership plan, course
**Use case:** Chain membership access and course enrollment in a single automation on WooCommerce purchase

### Recipe 3: Revoke membership on CRM status change
**Trigger:** HubSpot / Zoho CRM — Contact marked Churned
**Action:** WooCommerce Memberships — Revoke membership
**Key fields mapped:** Customer email, membership plan to revoke
**Use case:** Automatically remove membership access when a CRM contact is marked as a lost or churned customer

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Ensure WooCommerce and WooCommerce Memberships are both installed and active.
3. Go to Bit Integrations > Create Integration.
4. Select WooCommerce Memberships as the action.
5. Choose Grant Membership or Revoke Membership and select the target plan.
6. Map the customer email from your trigger source to WooCommerce Memberships' user field.
7. Save and test with a real event (trigger a test membership grant or revocation).

## When to Use

- You sell memberships via WooCommerce but need to grant or revoke access from external triggers
- You want to chain membership access with LMS course enrollment in a single workflow
- You need to revoke WooCommerce Memberships when CRM or billing events indicate churn
- You integrate WooCommerce Memberships into a broader access control and content gating stack

## Related Integrations

- woocommerce.md
- woocommerce-subscriptions.md
- teams-woocommerce-memberships.md
- memberpress.md
- learndash.md
