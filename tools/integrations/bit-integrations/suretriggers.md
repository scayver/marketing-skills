# SureTriggers

SureTriggers is a WordPress-native automation platform by SureBiz that connects WordPress plugins and third-party apps directly from your WordPress dashboard. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Automation and Integration Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/SureTriggers.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Pass data from Bit Integrations into a SureTriggers workflow |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map fields to SureTriggers workflow inputs |

## Action Events

- Trigger a SureTriggers automation with data from a WordPress event

## Authentication

- **Type**: WordPress plugin-native + SureTriggers account
- **Required**: SureTriggers plugin installed and connected to a SureTriggers cloud account. No additional API keys needed for the WordPress-side connection.

## Common Workflow Recipes

### Recipe 1: Form Submission to SureTriggers Multi-Step Workflow
**Trigger:** WordPress form submission
**Action:** SureTriggers workflow sends data to multiple apps (email, CRM, Slack)
**Use case:** Orchestrate complex multi-app automations triggered by Bit Integrations form events

### Recipe 2: WooCommerce Order to Membership and Email
**Trigger:** WooCommerce order completed
**Action:** SureTriggers grants SureMembers access and sends a confirmation email via an ESP
**Use case:** Automate the full post-purchase sequence for digital products within the SureBiz ecosystem

### Recipe 3: User Registration to Onboarding Automation
**Trigger:** WordPress user registration
**Action:** SureTriggers starts an onboarding workflow adding the user to tools and sending welcome messages
**Use case:** Create a unified onboarding experience across plugins and external services

## Setup Steps

1. Install both Bit Integrations and SureTriggers on your WordPress site.
2. Connect SureTriggers to your SureTriggers cloud account.
3. In SureTriggers, create an automation with a webhook trigger or Bit Integrations connector.
4. Go to Bit Integrations > Create Integration.
5. Choose your trigger source.
6. Select SureTriggers as the Action.
7. Map fields.
8. Save and test.

## When to Use

- When your site is built on the SureBiz ecosystem (SureCart, SureMembers, etc.)
- When you want WordPress-native automation that also connects to external apps via SureTriggers
- When combining Bit Integrations trigger detection with SureTriggers' automation workflows

## Related Integrations

- automatorwp.md
- flowmattic.md
- uncanny-automator.md
- zapier.md
