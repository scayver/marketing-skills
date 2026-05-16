# BuddyBoss

BuddyBoss is a WordPress platform for building social networks, online communities, and membership sites with groups, messaging, and activity feeds. Available as an Action (free) and Trigger (Pro) in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Yes (Action free; Trigger requires Pro)
**Category:** Community and Forum
**Icon (Action):** `https://bit-integrations.com/wp-content/uploads/2026/02/BuddyBoss1-1.svg`
**Icon (Trigger):** `https://bit-integrations.com/wp-content/uploads/2026/02/BuddyBoss1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Requires Pro plan; fires on community activity events |
| As Action | ✓ | Free; add users to groups and send notifications |
| Free Tier | ✓ | Action is free; Trigger requires Pro |
| Field Mapping | ✓ | Map user and activity data to action inputs |

## Trigger Events

- Member joined group
- Profile field updated
- Activity posted

## Action Events

- Add user to group
- Send notification to user

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations and BuddyBoss Platform must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Membership Purchase to BuddyBoss Group
**Trigger:** WooCommerce or membership purchase
**Action:** Add the buyer to a BuddyBoss group matching their membership level
**Use case:** Automatically grant community group access when a membership is purchased

### Recipe 2: Course Enrollment to Community Group
**Trigger:** LMS course enrollment (LearnDash, LifterLMS, etc.)
**Action:** Add the student to a BuddyBoss cohort group for peer interaction
**Use case:** Build learning cohorts in BuddyBoss automatically as students enroll in courses

### Recipe 3: New Member Activity to External Notification
**Trigger:** BuddyBoss member joined group
**Action:** Send a Slack notification or email alert to the community manager
**Use case:** Monitor community growth by getting notified when members join specific groups

## Setup Steps

1. Install Bit Integrations and BuddyBoss Platform on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. For Trigger: Select BuddyBoss as the Trigger and choose the event.
4. For Action: Choose your trigger source, then select BuddyBoss as the Action.
5. Select the action event and target group.
6. Map fields.
7. Save and test.

## When to Use

- When membership purchases or course enrollments should grant BuddyBoss group access
- When BuddyBoss community events should trigger external notifications or CRM updates
- When building a social learning or membership community with automated group management

## Related Integrations

- buddypress.md
- wpforo.md
- learndash.md
- fluent-community.md
