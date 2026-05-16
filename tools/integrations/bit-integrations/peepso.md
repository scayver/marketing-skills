# PeepSo

PeepSo is a WordPress social network plugin for building community sites with member profiles, activity streams, groups, and messaging. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Membership and Access Control
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/PeepSo.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create member, add to group |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Create member — create a new PeepSo community member (WordPress user) on the site
- Add to group — add an existing user to a PeepSo community group

## Authentication

- **Type**: WordPress plugin-native
- **Required**: PeepSo must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Create community member on WooCommerce purchase
**Trigger:** WooCommerce — Order completed
**Action:** PeepSo — Create member
**Key fields mapped:** Customer email, first name, last name
**Use case:** Automatically create a PeepSo community account when a customer completes a purchase, bypassing manual sign-up

### Recipe 2: Add member to group on membership activation
**Trigger:** MemberPress / Restrict Content — Membership activated
**Action:** PeepSo — Add to group
**Key fields mapped:** User email, group tied to membership level
**Use case:** Enroll new members into the correct PeepSo community group when their subscription activates

### Recipe 3: Create member from form submission
**Trigger:** Gravity Forms / Bit Form — Form submitted
**Action:** PeepSo — Create member
**Key fields mapped:** Email, first name, last name, custom fields
**Use case:** Register community members automatically from a lead or sign-up form

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select PeepSo as the action.
4. Choose Create Member or Add to Group.
5. Map the user email, name, and any relevant fields from your trigger source.
6. For Add to Group, select the target PeepSo group.
7. Save and test with a real event (complete a test purchase or submit a test form).

## When to Use

- You run a PeepSo community site and want new members created automatically from purchases or form submissions
- You bundle PeepSo group access with membership plans and need group enrollment automated
- You want to onboard users into your community as part of a post-purchase flow
- You need to integrate PeepSo into a multi-step new member automation sequence

## Related Integrations

- ultimate-member.md
- profilegrid.md
- memberpress.md
- woocommerce.md
- restrict-content.md
