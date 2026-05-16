# BuddyPress

BuddyPress is an open-source WordPress plugin for building social networks and community sites with profiles, groups, and activity streams. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Community and Forum
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Buddy-Press.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; add users to BuddyPress groups |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user data to BuddyPress group membership |

## Action Events

- Add user to group

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and BuddyPress must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Membership Purchase to BuddyPress Group
**Trigger:** WooCommerce or membership plugin purchase
**Action:** Add the purchasing user to a BuddyPress group corresponding to their membership level
**Use case:** Automatically grant BuddyPress community group access after a membership purchase

### Recipe 2: Course Enrollment to Student Group
**Trigger:** LMS course enrollment
**Action:** Add the enrolled student to a BuddyPress course group
**Use case:** Create student cohort groups in BuddyPress automatically as learners enroll

### Recipe 3: Registration to Community Group
**Trigger:** WordPress user registration
**Action:** Add the new user to a default BuddyPress welcome group
**Use case:** Automatically onboard all new registrations into a community-wide BuddyPress group

## Setup Steps

1. Install Bit Integrations Pro and BuddyPress on your WordPress site.
2. Create the target BuddyPress group(s).
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select BuddyPress as the Action.
6. Select the target group.
7. Map the user identifier field.
8. Save and test.

## When to Use

- When membership, course, or registration events should grant BuddyPress group membership
- When automating community access management based on purchase or enrollment events
- When building a BuddyPress-powered community with automated group assignment

## Related Integrations

- buddyboss.md
- wpforo.md
- fluent-community.md
- learndash.md
