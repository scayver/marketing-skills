# Better Messages

Better Messages is a WordPress private messaging plugin that enables real-time direct messages and chat between users on a WordPress site. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Community and Forum
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Better-Messages.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; send messages to users via Better Messages |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map message content and recipient user fields |

## Action Events

- Send private message to a user

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and Better Messages must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: New Member Welcome Message
**Trigger:** WordPress user registration or membership activation
**Action:** Send a personalized welcome direct message via Better Messages from an admin account
**Use case:** Greet new members with a personal message automatically upon registration or purchase

### Recipe 2: Course Enrollment to Student Notification Message
**Trigger:** LMS course enrollment
**Action:** Send a Better Messages direct message to the student with course start information
**Use case:** Deliver personalized course start messages directly in the community inbox

### Recipe 3: Support Form to Private Message
**Trigger:** WordPress support form submission
**Action:** Send the submitter a private acknowledgment message via Better Messages
**Use case:** Immediately acknowledge support requests with a personal message in the community messaging system

## Setup Steps

1. Install Bit Integrations Pro and Better Messages on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Better Messages as the Action.
5. Configure the sender account and recipient user mapping.
6. Map the message content (static or dynamic from form fields).
7. Save and test.

## When to Use

- When new members or course enrollees should receive automatic welcome messages via WordPress private messaging
- When form submissions or events should trigger personalized in-platform messages to users
- When building a community site where automated private messages supplement email notifications

## Related Integrations

- buddyboss.md
- fluent-community.md
- slack.md
- telegram.md
