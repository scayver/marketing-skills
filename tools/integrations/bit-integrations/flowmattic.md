# FlowMattic

FlowMattic is a WordPress-native automation plugin that connects WordPress plugins and services without leaving the WordPress dashboard. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Automation and Integration Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/FlowMatic.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Pass data from Bit Integrations into a FlowMattic workflow |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map fields to FlowMattic workflow inputs |

## Action Events

- Trigger a FlowMattic workflow with data from a WordPress event

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations and FlowMattic must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Form Submission to Multi-Plugin Workflow
**Trigger:** WordPress form submission
**Action:** FlowMattic workflow runs additional actions across multiple installed plugins
**Use case:** Chain together plugin actions that Bit Integrations doesn't natively support, all within WordPress

### Recipe 2: WooCommerce Purchase to Membership and Email
**Trigger:** WooCommerce order completed
**Action:** FlowMattic workflow grants membership, sends a custom email, and logs a record
**Use case:** Orchestrate complex post-purchase logic across multiple WordPress plugins

### Recipe 3: User Registration to Role and Notification
**Trigger:** WordPress user registration
**Action:** FlowMattic assigns a user role and sends a welcome notification via another plugin
**Use case:** Automate user onboarding steps across plugins that Bit Integrations doesn't cover directly

## Setup Steps

1. Install both Bit Integrations and FlowMattic on your WordPress site.
2. In FlowMattic, create a workflow with a webhook or Bit Integrations trigger.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger source (form, WooCommerce, etc.).
5. Select FlowMattic as the Action.
6. Map the fields to pass to FlowMattic.
7. Save and test.

## When to Use

- When you want to extend Bit Integrations automation with additional WordPress plugin actions
- When your automation logic needs to stay entirely within WordPress without external APIs
- When combining Bit Integrations triggers with FlowMattic's broader WordPress plugin support

## Related Integrations

- automatorwp.md
- uncanny-automator.md
- thrive-automator.md
- wp-webhooks.md
