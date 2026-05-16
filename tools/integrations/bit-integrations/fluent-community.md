# FluentCommunity

FluentCommunity is a WordPress community platform plugin by the Fluent team that enables social feeds, spaces, and member management within WordPress. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Community and Forum
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Fluent-Community.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; add members to FluentCommunity spaces |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user data to FluentCommunity space membership |

## Action Events

- Add member to community space

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and FluentCommunity must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Membership Purchase to FluentCommunity Space
**Trigger:** WooCommerce or membership plugin purchase
**Action:** Add the buyer to the corresponding FluentCommunity space
**Use case:** Grant community space access automatically when a membership or course is purchased

### Recipe 2: User Registration to Welcome Space
**Trigger:** WordPress user registration
**Action:** Add the new user to a FluentCommunity onboarding or welcome space
**Use case:** Automatically onboard new registrations into a community welcome space

### Recipe 3: Course Enrollment to Learner Space
**Trigger:** LMS course enrollment
**Action:** Add the enrolled student to a FluentCommunity learner cohort space
**Use case:** Build course-specific community spaces that students join automatically on enrollment

## Setup Steps

1. Install Bit Integrations Pro and FluentCommunity on your WordPress site.
2. Create the target FluentCommunity spaces.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select FluentCommunity as the Action.
6. Select the target space.
7. Map the user identifier.
8. Save and test.

## When to Use

- When purchases or enrollments should automatically add users to FluentCommunity spaces
- When building a community membership site using FluentCommunity with automated access management
- When new registrations should be placed into a community onboarding space automatically

## Related Integrations

- buddyboss.md
- buddypress.md
- wpforo.md
- fluent-support.md
