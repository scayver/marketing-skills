# AutomatorWP

AutomatorWP is a WordPress automation plugin that creates automated workflows between WordPress plugins using triggers and actions. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Automation and Integration Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/AutomatorWP.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Pass data from Bit Integrations into an AutomatorWP automation |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map fields to AutomatorWP automation inputs |

## Action Events

- Trigger an AutomatorWP automation recipe with data from a WordPress event

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations and AutomatorWP must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Form Submission to LMS Enrollment
**Trigger:** WordPress form submission
**Action:** AutomatorWP recipe enrolls the user in a LearnDash or LifterLMS course
**Use case:** Automatically grant course access when a user fills out a registration or payment form

### Recipe 2: WooCommerce Purchase to Points Award
**Trigger:** WooCommerce order completed
**Action:** AutomatorWP awards GamiPress points or a badge to the purchasing user
**Use case:** Run a loyalty rewards program tied to purchases without custom code

### Recipe 3: Membership Activation to Content Unlock
**Trigger:** Membership plugin subscription activated
**Action:** AutomatorWP unlocks specific posts, pages, or forum access for the member
**Use case:** Automate content access changes when membership status changes

## Setup Steps

1. Install both Bit Integrations and AutomatorWP on your WordPress site.
2. In AutomatorWP, create an automation recipe with an appropriate trigger (or anonymous trigger).
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger source.
5. Select AutomatorWP as the Action.
6. Map fields to pass to the AutomatorWP recipe.
7. Save and test.

## When to Use

- When you want to connect Bit Integrations form triggers to AutomatorWP's wide library of WordPress plugin actions
- When your site relies on AutomatorWP for gamification, LMS, or membership automation
- When you need cross-plugin automation that stays entirely within WordPress

## Related Integrations

- flowmattic.md
- uncanny-automator.md
- thrive-automator.md
- gamipress.md
