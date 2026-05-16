# Ultimate Member

Ultimate Member is a WordPress plugin for building user profiles, member directories, and community features with role-based access control and custom profile fields. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Membership and Access Control
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Ultimate-Member.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Assign role to user, update user meta |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Assign role to user — set or change a WordPress user's role via Ultimate Member
- Update user meta — update custom profile fields stored in Ultimate Member for a user

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Ultimate Member must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Assign role on membership purchase
**Trigger:** MemberPress / WooCommerce — Membership purchased or order completed
**Action:** Ultimate Member — Assign role to user
**Key fields mapped:** User email, role tied to membership or product
**Use case:** Automatically promote a user to a higher-access role when they purchase a membership or product

### Recipe 2: Update profile field from form submission
**Trigger:** Gravity Forms / Bit Form — Form submitted
**Action:** Ultimate Member — Update user meta
**Key fields mapped:** Email, custom profile fields (company, phone, bio, etc.)
**Use case:** Keep Ultimate Member profile data up to date when users submit forms

### Recipe 3: Assign role from LMS course completion
**Trigger:** LearnDash / TutorLMS — Course completed
**Action:** Ultimate Member — Assign role to user
**Key fields mapped:** User email, role to assign on completion
**Use case:** Promote users to a "Graduate" or "Certified" role in Ultimate Member after completing a course

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select Ultimate Member as the action.
4. Choose Assign Role to User or Update User Meta.
5. Select the target role or the user meta key to update.
6. Map the user email from your trigger source to Ultimate Member's user field.
7. Save and test with a real event (complete a test purchase, form submission, or course).

## When to Use

- You use Ultimate Member for community profiles and need to assign roles based on purchases or course completions
- You want to keep Ultimate Member profile fields synced with form submission data
- You need to promote or demote users programmatically based on external events
- You integrate Ultimate Member into a broader onboarding or community access workflow

## Related Integrations

- memberpress.md
- profilegrid.md
- peepso.md
- learndash.md
- user-registration.md
