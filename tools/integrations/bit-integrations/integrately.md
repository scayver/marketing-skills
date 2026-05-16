# Integrately

Integrately is a one-click automation platform that provides ready-made workflows for connecting popular apps. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Automation and Integration Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Integrately.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Send data to Integrately webhook trigger |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map any form field to the outgoing webhook payload |

## Action Events

- Send data to an Integrately automation via webhook trigger

## Authentication

- **Type**: Webhook URL
- **Required**: Webhook URL from an Integrately automation's webhook trigger step

## Common Workflow Recipes

### Recipe 1: Lead Form to Marketing Platform
**Trigger:** WordPress form submission
**Action:** Integrately sends lead to Mailchimp, HubSpot, or another marketing platform
**Use case:** Use Integrately's pre-built one-click automations to connect WordPress leads to your marketing stack

### Recipe 2: New Member to Project Management Tool
**Trigger:** Membership plugin user registration
**Action:** Integrately creates a task or project in Asana, Trello, or ClickUp
**Use case:** Automatically create onboarding tasks when new members join

### Recipe 3: Support Form to Helpdesk
**Trigger:** WordPress support form submission
**Action:** Integrately creates a ticket in Freshdesk or Zendesk
**Use case:** Route support requests to your helpdesk without manual processing

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Integrately as the Action.
5. In Integrately, create an automation with "Webhook" as the trigger. Copy the webhook URL.
6. Paste the webhook URL into Bit Integrations.
7. Map fields.
8. Save and test.

## When to Use

- When you want one-click pre-built automations between WordPress and popular business apps
- When your team prefers Integrately's simplified automation setup over more complex tools
- When destination apps are available in Integrately but not natively in Bit Integrations

## Related Integrations

- zapier.md
- pabbly.md
- konnectzit.md
- webhook-outgoing.md
