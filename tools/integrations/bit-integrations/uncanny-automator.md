# Uncanny Automator

Uncanny Automator is a powerful WordPress automation plugin that connects plugins together using recipes with triggers and actions. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Automation and Integration Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/UncannyAutomator.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Pass data from Bit Integrations into an Uncanny Automator recipe |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map fields to Uncanny Automator recipe inputs |

## Action Events

- Trigger an Uncanny Automator recipe with data passed from a WordPress event

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations and Uncanny Automator must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Form Submission to Course Enrollment and Email
**Trigger:** Gravity Forms or WPForms submission
**Action:** Uncanny Automator recipe enrolls the user in a LearnDash course and sends a custom email
**Use case:** Automate course access grants and confirmation emails from a single form submission

### Recipe 2: WooCommerce Order to User Role Change
**Trigger:** WooCommerce product purchased
**Action:** Uncanny Automator changes user role (e.g., from Subscriber to Member)
**Use case:** Automatically elevate user permissions when a membership product is bought

### Recipe 3: Quiz Completion to Certificate and Notification
**Trigger:** LearnDash quiz completed (passed via form or LMS trigger)
**Action:** Uncanny Automator issues a certificate and notifies an admin
**Use case:** Automate credential delivery and admin alerts on course milestones

## Setup Steps

1. Install both Bit Integrations and Uncanny Automator on your WordPress site.
2. In Uncanny Automator, create a recipe with an appropriate trigger or use a "Run in background" action.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger source.
5. Select Uncanny Automator as the Action.
6. Map fields to pass to the recipe.
7. Save and test.

## When to Use

- When your site uses Uncanny Automator for LMS, membership, or e-commerce automation
- When you need a Bit Integrations trigger to kick off complex multi-step WordPress plugin actions
- When automating learner journeys that span forms, LMS, memberships, and notifications

## Related Integrations

- automatorwp.md
- flowmattic.md
- thrive-automator.md
- learndash.md
