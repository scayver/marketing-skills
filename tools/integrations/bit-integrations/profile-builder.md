# Profile Builder

Profile Builder is a WordPress plugin for creating custom user registration, login, and profile edit forms with role assignment and front-end user management. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Membership and Access Control
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Profile-Builder.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create user, assign role, update profile field |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Create user — register a new WordPress user via Profile Builder
- Assign role — set a WordPress user role for a new or existing user
- Update profile field — update a custom Profile Builder profile field for an existing user

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Profile Builder must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Create user and assign role on membership purchase
**Trigger:** MemberPress / WooCommerce — Membership purchased or order completed
**Action:** Profile Builder — Create user + Assign role
**Key fields mapped:** Customer email, first name, last name, role tied to product
**Use case:** Automatically create a WordPress account with the correct role when a customer purchases

### Recipe 2: Update profile field on form submission
**Trigger:** Gravity Forms / Bit Form — Form submitted
**Action:** Profile Builder — Update profile field
**Key fields mapped:** User email, custom field key, field value
**Use case:** Keep Profile Builder profile data current when users submit update or preference forms

### Recipe 3: Assign new role on LMS course completion
**Trigger:** LearnDash / TutorLMS — Course completed
**Action:** Profile Builder — Assign role
**Key fields mapped:** User email, promoted role
**Use case:** Upgrade a student's site role when they complete a course, granting them new permissions or community access

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select Profile Builder as the action.
4. Choose Create User, Assign Role, or Update Profile Field.
5. Map the user email and relevant fields from your trigger source.
6. For role assignment, select the target WordPress role.
7. Save and test with a real event (complete a test purchase or submit a test form).

## When to Use

- You use Profile Builder for front-end registration and want account creation automated from purchases or forms
- You need to assign or change WordPress roles programmatically based on membership or course events
- You want to keep custom profile fields updated from form submissions or external data sources
- You integrate Profile Builder into a multi-step onboarding or access control workflow

## Related Integrations

- user-registration.md
- wp-user-registration.md
- ultimate-member.md
- memberpress.md
- learndash.md
