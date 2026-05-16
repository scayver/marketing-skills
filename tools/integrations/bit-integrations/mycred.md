# myCred

myCred is a WordPress points, ranks, and badges plugin that lets site owners build gamified reward systems with customizable point types, achievements, and leaderboards. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** eCommerce and Payments
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/My-Cred.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Add points to user, deduct points, assign badge, assign rank |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Add points to user — award myCred points to a WordPress user
- Deduct points — remove myCred points from a user's balance
- Assign badge — grant a specific badge to a user
- Assign rank — assign or update a user's rank in the myCred system

## Authentication

- **Type**: WordPress plugin-native
- **Required**: myCred must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Award points on LMS course completion
**Trigger:** LearnDash / TutorLMS — Course completed
**Action:** myCred — Add points to user
**Key fields mapped:** User email, points to award per course
**Use case:** Reward students with myCred points when they complete a course, enabling a gamified learning experience

### Recipe 2: Assign badge on quiz passed
**Trigger:** LearnDash — Quiz passed
**Action:** myCred — Assign badge
**Key fields mapped:** User email, badge linked to quiz or subject
**Use case:** Automatically award subject-specific badges when students pass quizzes

### Recipe 3: Assign rank on membership upgrade
**Trigger:** MemberPress — Membership renewed or upgraded
**Action:** myCred — Assign rank
**Key fields mapped:** User email, rank tied to membership level
**Use case:** Promote users to a higher myCred rank when they upgrade to a premium membership, reflecting their status across the site

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select myCred as the action.
4. Choose Add Points, Deduct Points, Assign Badge, or Assign Rank.
5. Configure the point type, badge, or rank to award or adjust.
6. Map the user email from your trigger source to myCred's user field.
7. Save and test with a real event (complete a test course, pass a test quiz, or activate a test membership).

## When to Use

- You run a gamified learning or community site and want myCred points, badges, or ranks tied to LMS or membership events
- You want to reward users for engagement activities like quiz completions or form submissions
- You need to deduct points programmatically from external triggers (e.g., a refund or penalty event)
- You integrate myCred into a broader engagement and retention automation stack

## Related Integrations

- wployalty.md
- advanced-coupons.md
- learndash.md
- memberpress.md
- profilegrid.md
