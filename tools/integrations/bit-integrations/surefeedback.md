# SureFeedback

SureFeedback is a WordPress client feedback and project collaboration plugin for collecting visual feedback on websites and digital projects. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Support and Helpdesk
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Sure-Feedback.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; create feedback projects in SureFeedback |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to SureFeedback project fields |

## Action Events

- Create feedback project

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and SureFeedback must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Client Onboarding Form to SureFeedback Project
**Trigger:** WordPress client onboarding form submission
**Action:** Create a new SureFeedback project for the client
**Use case:** Automatically provision a SureFeedback feedback project when a new client completes their onboarding form

### Recipe 2: WooCommerce Service Purchase to Feedback Project
**Trigger:** WooCommerce order completed (service product)
**Action:** Create a SureFeedback project for the purchased service
**Use case:** Start a client feedback project automatically when a web design or digital service is purchased

### Recipe 3: Project Request Form to Feedback Environment
**Trigger:** WordPress project request form submission
**Action:** Create a SureFeedback project with the client's details and project name
**Use case:** Set up the client feedback environment immediately when a project request comes in

## Setup Steps

1. Install Bit Integrations Pro and SureFeedback on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select SureFeedback as the Action.
5. Configure the project creation settings.
6. Map form fields to project name and client details.
7. Save and test.

## When to Use

- When client onboarding or service purchase events should automatically create SureFeedback projects
- When managing web design or digital projects and wanting automatic feedback environment setup
- When building an automated client service delivery workflow with SureFeedback as the collaboration layer

## Related Integrations

- fluent-support.md
- asana.md
- clickup.md
- fluentboards.md
