# GamiPress

GamiPress is a WordPress gamification plugin for awarding points, achievements, and ranks to users based on site activity. Available as an Action (free) and Trigger (Pro) in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Yes (Action free; Trigger requires Pro)
**Category:** Gamification and Loyalty
**Icon (Action):** `https://bit-integrations.com/wp-content/uploads/2026/02/Gamipress1.svg`
**Icon (Trigger):** `https://bit-integrations.com/wp-content/uploads/2026/02/Gamipress1-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Requires Pro plan; fires on gamification events |
| As Action | ✓ | Free; award points, achievements, and ranks |
| Free Tier | ✓ | Action is free; Trigger requires Pro |
| Field Mapping | ✓ | Map user and gamification data fields |

## Trigger Events

- Point awarded
- Achievement earned
- Rank reached

## Action Events

- Award points
- Award achievement
- Assign rank

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations and GamiPress must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Form Submission to GamiPress Points Award
**Trigger:** WordPress form submission (quiz, survey, profile completion)
**Action:** Award GamiPress points to the submitting user
**Use case:** Reward users with points for completing forms, surveys, or profile setup on the site

### Recipe 2: WooCommerce Purchase to Achievement Unlock
**Trigger:** WooCommerce order completed
**Action:** Award a GamiPress achievement (badge) to the buyer for making a purchase
**Use case:** Gamify the shopping experience by rewarding customers with badges for purchases

### Recipe 3: Achievement Earned to Email Notification
**Trigger:** GamiPress achievement earned
**Action:** Send a congratulatory email or Slack notification with the achievement details
**Use case:** Celebrate user milestones by notifying them (and the team) when achievements are earned

## Setup Steps

1. Install Bit Integrations and GamiPress on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. For Trigger: Select GamiPress as the Trigger and choose the event.
4. For Action: Choose your trigger source, then select GamiPress as the Action.
5. Select the action event and target point type, achievement, or rank.
6. Map the user identifier field.
7. Save and test.

## When to Use

- When form completions, purchases, or enrollments should award GamiPress points or achievements
- When GamiPress gamification events should trigger email notifications, CRM updates, or external rewards
- When building a gamified WordPress site with automated reward logic tied to user actions

## Related Integrations

- automatorwp.md
- uncanny-automator.md
- givewp.md
- learndash.md
