# WP-Polls

WP-Polls is a WordPress plugin for creating and managing polls and voting forms on WordPress posts and pages. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Gamification and Loyalty
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/WP-Polls-2.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; log votes in WP-Polls |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map vote data to WP-Polls poll fields |

## Action Events

- Log vote in a poll

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and WP-Polls must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: External Survey Response to Poll Vote
**Trigger:** WordPress survey or form submission with a selection field
**Action:** Log the response as a vote in a corresponding WP-Polls poll
**Use case:** Aggregate voting data from custom forms into WP-Polls for consolidated reporting and display

### Recipe 2: Event Attendance to Poll Participation
**Trigger:** Event check-in or registration form submission
**Action:** Record a vote in a post-event satisfaction poll
**Use case:** Automatically capture attendee satisfaction data in a WP-Polls poll after event check-in

### Recipe 3: Product Rating Form to Poll
**Trigger:** WordPress product rating or review form submission
**Action:** Log the rating selection as a vote in a WP-Polls product poll
**Use case:** Aggregate customer ratings from form submissions into WP-Polls for public display

## Setup Steps

1. Install Bit Integrations Pro and WP-Polls on your WordPress site.
2. Create the target poll in WP-Polls.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select WP-Polls as the Action.
6. Select the target poll and answer option mapping.
7. Map form fields to poll vote data.
8. Save and test.

## When to Use

- When form selections or survey responses should be logged as WP-Polls votes for aggregated display
- When consolidating voting data from multiple WordPress sources into a single WP-Polls poll
- When automating poll participation as part of a broader WordPress user engagement workflow

## Related Integrations

- gamipress.md
- ninja-tables.md
- google-sheets.md
