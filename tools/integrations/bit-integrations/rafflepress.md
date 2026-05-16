# RafflePress

RafflePress is a WordPress viral giveaway and contest plugin for growing audiences, email lists, and social followings through referral-based entry campaigns. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Gamification and Loyalty
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/RafflePress-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; add entries to RafflePress giveaways |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user data to giveaway entry fields |

## Action Events

- Add entry to giveaway

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and RafflePress must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Form Submission to Giveaway Entry
**Trigger:** WordPress form submission (newsletter opt-in, survey, quiz)
**Action:** Add the submitter as an entry in an active RafflePress giveaway
**Use case:** Reward form completions with automatic giveaway entries to increase engagement and form submissions

### Recipe 2: Purchase to Bonus Giveaway Entry
**Trigger:** WooCommerce order completed
**Action:** Add a giveaway entry for the purchasing customer
**Use case:** Incentivize purchases by automatically entering buyers into a giveaway or sweepstakes

### Recipe 3: User Registration to Giveaway Entry
**Trigger:** WordPress user registration
**Action:** Add the new user as a giveaway entry
**Use case:** Grow the user base by offering giveaway entry as a registration incentive

## Setup Steps

1. Install Bit Integrations Pro and RafflePress on your WordPress site.
2. Create an active giveaway in RafflePress.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select RafflePress as the Action.
6. Select the target giveaway.
7. Map user identifier and name fields.
8. Save and test.

## When to Use

- When form submissions, purchases, or registrations should automatically earn giveaway entries
- When running a viral giveaway that should be fueled by other WordPress site actions
- When incentivizing specific user behaviors with giveaway entry rewards

## Related Integrations

- gamipress.md
- optinmonster.md
- mailchimp.md
- givewp.md
