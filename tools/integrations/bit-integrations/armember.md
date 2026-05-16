# ARMember

ARMember is a WordPress membership plugin for building subscription sites with content restriction, payment gateways, and member management. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Membership and Access Control
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/ARMember1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Add member to plan |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Add member to plan — assign a WordPress user to an ARMember membership plan

## Authentication

- **Type**: WordPress plugin-native
- **Required**: ARMember must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Add member to plan on WooCommerce purchase
**Trigger:** WooCommerce — Order completed
**Action:** ARMember — Add member to plan
**Key fields mapped:** Customer email, product linked to membership plan
**Use case:** Automatically grant ARMember plan access when a WooCommerce product is purchased

### Recipe 2: Add member to plan from form submission
**Trigger:** Gravity Forms / Bit Form — Form submitted
**Action:** ARMember — Add member to plan
**Key fields mapped:** Email field, membership plan selection
**Use case:** Enroll users in an ARMember plan via a sign-up or registration form

### Recipe 3: Add member to plan from CRM trigger
**Trigger:** HubSpot / ActiveCampaign — Deal closed or tag applied
**Action:** ARMember — Add member to plan
**Key fields mapped:** Contact email, plan to assign
**Use case:** Grant membership access when a CRM deal reaches a closed-won stage

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select ARMember as the action.
4. Choose Add Member to Plan and select the target plan.
5. Map the user email from your trigger source to ARMember's member field.
6. Save and test with a real event (complete a test purchase or submit a test form).

## When to Use

- You sell access via WooCommerce and deliver membership through ARMember
- You want to enroll members via form submissions or CRM-based triggers
- You need to programmatically assign membership plans based on external events
- You integrate ARMember into a multi-step onboarding or fulfillment workflow

## Related Integrations

- memberpress.md
- paid-memberships-pro.md
- restrict-content.md
- woocommerce.md
