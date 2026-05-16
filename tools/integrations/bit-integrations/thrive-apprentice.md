# Thrive Apprentice

Thrive Apprentice is a WordPress course builder by Thrive Themes that integrates with the Thrive Suite for sales pages, quizzes, and marketing-focused course delivery. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** LMS and Course Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/ThriveApprentice.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Grant or revoke course access |
| Free Tier | ✓ | Free |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Grant course access — give a WordPress user access to a Thrive Apprentice course
- Revoke course access — remove a user's access to a Thrive Apprentice course

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Thrive Apprentice must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Grant course access on WooCommerce purchase
**Trigger:** WooCommerce — Order completed
**Action:** Thrive Apprentice — Grant course access
**Key fields mapped:** Customer email, product linked to course
**Use case:** Automatically unlock a Thrive Apprentice course when a WooCommerce product is purchased

### Recipe 2: Grant course access on membership activation
**Trigger:** MemberPress / Restrict Content — Membership activated
**Action:** Thrive Apprentice — Grant course access
**Key fields mapped:** User email, membership level mapped to course
**Use case:** Bundle course access with membership tiers outside Thrive's native access rules

### Recipe 3: Revoke access on membership cancellation
**Trigger:** MemberPress — Membership cancelled
**Action:** Thrive Apprentice — Revoke course access
**Key fields mapped:** User email, course to revoke
**Use case:** Automatically remove course access when a member cancels or their subscription lapses

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select Thrive Apprentice as the action.
4. Choose the action event: Grant Course Access or Revoke Course Access.
5. Select the course to grant or revoke access to.
6. Map the user email field from your trigger source to Thrive Apprentice's user field.
7. Save and test with a real event (complete a test purchase or activate a test membership).

## When to Use

- You use Thrive Apprentice for course delivery but sell or gate access through WooCommerce or a membership plugin
- You want to grant course access automatically after form submissions or external purchases
- You need to revoke course access programmatically when subscriptions lapse
- You want to bundle Thrive Apprentice courses with non-Thrive checkout flows

## Related Integrations

- learndash.md
- lifterlms.md
- memberpress.md
- woocommerce.md
- restrict-content.md
