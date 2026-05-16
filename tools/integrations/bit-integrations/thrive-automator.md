# Thrive Automator

Thrive Automator is a free WordPress automation plugin by Thrive Themes that connects Thrive products and third-party plugins via triggers and actions. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Automation and Integration Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/ThriveAutomator.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Pass data from Bit Integrations into a Thrive Automator workflow |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map fields to Thrive Automator workflow inputs |

## Action Events

- Trigger a Thrive Automator workflow with data from a WordPress event

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations and Thrive Automator must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Form Submission to Thrive Leads Opt-In
**Trigger:** WordPress form submission
**Action:** Thrive Automator adds the contact to a Thrive Leads list or triggers a Thrive Leads asset delivery
**Use case:** Connect any form plugin to Thrive Leads for lead magnet delivery and list building

### Recipe 2: WooCommerce Purchase to Thrive Apprentice Access
**Trigger:** WooCommerce order completed
**Action:** Thrive Automator grants access to a Thrive Apprentice course
**Use case:** Automatically enroll buyers in Thrive Apprentice courses after purchase

### Recipe 3: User Registration to Email Sequence via Thrive Automator
**Trigger:** WordPress user registration
**Action:** Thrive Automator triggers an email sequence via a connected email service provider
**Use case:** Start onboarding sequences automatically for new registered users

## Setup Steps

1. Install both Bit Integrations and Thrive Automator on your WordPress site.
2. In Thrive Automator, create an automation with a webhook or compatible trigger.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger source.
5. Select Thrive Automator as the Action.
6. Map fields to pass to the automation.
7. Save and test.

## When to Use

- When your site uses Thrive Suite products and you want Bit Integrations triggers to drive Thrive Automator actions
- When connecting form submissions to Thrive Leads, Thrive Apprentice, or other Thrive plugins
- When you want WordPress-native automation without external API dependencies

## Related Integrations

- automatorwp.md
- flowmattic.md
- uncanny-automator.md
- thrive-leads.md
