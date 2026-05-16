# ProfileGrid

ProfileGrid is a WordPress plugin for building user groups, member directories, and community profiles with group-based access control and activity feeds. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Membership and Access Control
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Profile-Grid.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Add user to group |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Add user to group — add a WordPress user to a ProfileGrid group

## Authentication

- **Type**: WordPress plugin-native
- **Required**: ProfileGrid must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Add user to group on WooCommerce purchase
**Trigger:** WooCommerce — Order completed
**Action:** ProfileGrid — Add user to group
**Key fields mapped:** Customer email, group linked to purchased product
**Use case:** Automatically add buyers to a ProfileGrid community group when they purchase a product

### Recipe 2: Add user to group on membership activation
**Trigger:** MemberPress / Paid Memberships Pro — Membership activated
**Action:** ProfileGrid — Add user to group
**Key fields mapped:** User email, group tied to membership level
**Use case:** Enroll new members in the correct ProfileGrid community group based on their membership tier

### Recipe 3: Add user to group on form submission
**Trigger:** Gravity Forms / Bit Form — Form submitted
**Action:** ProfileGrid — Add user to group
**Key fields mapped:** Email field, target group
**Use case:** Add users to community groups when they submit a sign-up or interest form

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select ProfileGrid as the action.
4. Choose Add User to Group and select the target group.
5. Map the user email from your trigger source to ProfileGrid's user lookup field.
6. Save and test with a real event (make a test purchase or submit a test form).

## When to Use

- You use ProfileGrid for community groups and want group membership automated from purchases or forms
- You bundle ProfileGrid group access with membership plans
- You want to add users to community groups as part of a post-purchase onboarding flow
- You need to segment your community by product, membership level, or interest area automatically

## Related Integrations

- ultimate-member.md
- peepso.md
- memberpress.md
- paid-memberships-pro.md
- woocommerce.md
