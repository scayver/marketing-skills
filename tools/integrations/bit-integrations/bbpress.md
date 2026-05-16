# bbPress

bbPress is a lightweight, fast, and compatible WordPress forum plugin maintained by Automattic. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Community and Forum
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/BB-Press.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; add users as forum members in bbPress |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user data to bbPress forum membership |

## Action Events

- Add user as forum member

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and bbPress must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Registration to bbPress Forum Access
**Trigger:** WordPress user registration
**Action:** Add the new user as a bbPress forum member
**Use case:** Automatically create forum membership for every new WordPress account

### Recipe 2: Membership Purchase to Private Forum Access
**Trigger:** WooCommerce product purchase or membership activation
**Action:** Assign the buyer as a member of a private bbPress forum
**Use case:** Gate forum access behind a purchase and grant it automatically on payment

### Recipe 3: Course Enrollment to Student Forum
**Trigger:** LMS course enrollment
**Action:** Add the student as a bbPress forum member for course-specific discussions
**Use case:** Provide enrolled students with automatic access to course discussion forums

## Setup Steps

1. Install Bit Integrations Pro and bbPress on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select bbPress as the Action.
5. Select the target forum or role.
6. Map the user identifier field.
7. Save and test.

## When to Use

- When automating bbPress forum membership based on registration, purchase, or enrollment events
- When gating forum access behind memberships or course enrollments with automatic provisioning
- When using bbPress as the community forum in a WordPress membership or LMS setup

## Related Integrations

- wpforo.md
- asgaros-forum.md
- buddypress.md
- learndash.md
