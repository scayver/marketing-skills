# wpForo Forum

wpForo is a full-featured WordPress forum plugin with topic management, user groups, and community features. Available as an Action (free) and Trigger (Pro) in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Yes (Action free; Trigger requires Pro)
**Category:** Community and Forum
**Icon (Action):** `https://bit-integrations.com/wp-content/uploads/2026/02/WPForoForum-1.svg`
**Icon (Trigger):** `https://bit-integrations.com/wp-content/uploads/2026/02/WPForoForum.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Requires Pro plan; fires on forum activity events |
| As Action | ✓ | Free; add members and assign user groups |
| Free Tier | ✓ | Action is free; Trigger requires Pro |
| Field Mapping | ✓ | Map user and forum data fields |

## Trigger Events

- New topic posted
- New reply posted
- User joined forum

## Action Events

- Add forum member
- Assign user group

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations and wpForo must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Membership Purchase to wpForo Access
**Trigger:** WooCommerce or membership purchase
**Action:** Add the buyer to wpForo as a member with the appropriate user group
**Use case:** Grant forum access automatically when a membership or course is purchased

### Recipe 2: New Topic to Slack Notification
**Trigger:** wpForo new topic posted
**Action:** Send a Slack message with topic title and author to the team channel
**Use case:** Keep the team informed of new community discussions in real time

### Recipe 3: Registration to Forum Member Group
**Trigger:** WordPress user registration
**Action:** Add the new user to wpForo as a member of the general user group
**Use case:** Automatically create forum accounts for all new WordPress registrations

## Setup Steps

1. Install Bit Integrations and wpForo on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. For Trigger: Select wpForo as the Trigger and choose the event.
4. For Action: Choose your trigger source, then select wpForo as the Action.
5. Select the action event and target user group.
6. Map fields.
7. Save and test.

## When to Use

- When memberships or course purchases should grant wpForo forum access
- When forum activity should trigger team notifications or CRM events
- When automating user group assignment in wpForo based on purchase or registration events

## Related Integrations

- buddyboss.md
- buddypress.md
- bbpress.md
- fluent-community.md
