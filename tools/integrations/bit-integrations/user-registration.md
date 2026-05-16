# User Registration

User Registration is a WordPress plugin by WPEverest for building custom user registration and login forms with profile fields, role assignment, and payment add-ons. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Membership and Access Control
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/User-Registration.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create WordPress user, assign role |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Create WordPress user — register a new user on the WordPress site via User Registration
- Assign role — assign a specific WordPress user role to the new or existing user

## Authentication

- **Type**: WordPress plugin-native
- **Required**: User Registration (by WPEverest) must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Create user and assign role on membership purchase
**Trigger:** MemberPress / WooCommerce — Membership purchased or order completed
**Action:** User Registration — Create WordPress user + Assign role
**Key fields mapped:** Customer email, first name, last name, role tied to product
**Use case:** Automatically create a WordPress account with the correct role when a new member purchases

### Recipe 2: Create user from form submission
**Trigger:** Gravity Forms / Bit Form — Form submitted
**Action:** User Registration — Create WordPress user
**Key fields mapped:** Email, first name, last name, custom fields
**Use case:** Convert a form submission into a registered WordPress user automatically

### Recipe 3: Assign role after course completion
**Trigger:** LearnDash / TutorLMS — Course completed
**Action:** User Registration — Assign role
**Key fields mapped:** User email, graduation or certified role
**Use case:** Promote a student to a new role with different site permissions upon completing a course

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select User Registration as the action.
4. Choose Create WordPress User or Assign Role.
5. Map the user email, name, and any custom fields from your trigger source.
6. Select the role to assign.
7. Save and test with a real event (submit a test form or complete a test purchase).

## When to Use

- You want to create WordPress accounts automatically from external form submissions or purchases
- You need to assign user roles programmatically based on membership or course events
- You use User Registration's profile form builder and want to populate fields from external triggers
- You want to automate the WordPress account creation step in a broader onboarding workflow

## Related Integrations

- wp-user-registration.md
- user-registration-membership.md
- profile-builder.md
- memberpress.md
- learndash.md
