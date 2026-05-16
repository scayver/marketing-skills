# IFTTT

IFTTT (If This Then That) is a consumer automation platform that connects apps and devices via simple conditional applets. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Automation and Integration Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/IFTTT-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Trigger IFTTT Webhooks (Maker) service with custom event name |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map up to three values (value1, value2, value3) to the IFTTT event |

## Action Events

- Trigger a named IFTTT Webhooks (Maker) event with up to three data values

## Authentication

- **Type**: API Key
- **Required**: IFTTT Webhook key (from ifttt.com/maker_webhooks/settings) and the event name configured in your IFTTT applet

## Common Workflow Recipes

### Recipe 1: Form Submission to Smart Home Device
**Trigger:** WordPress contact form submission
**Action:** Fire IFTTT Maker event that turns on a smart light or sends a mobile notification
**Use case:** Get a physical or phone alert the moment someone fills out a high-value form

### Recipe 2: WooCommerce Sale to Social Media Post
**Trigger:** WooCommerce order completed
**Action:** IFTTT applet posts a celebratory update to a social platform
**Use case:** Automatically share purchase milestones or sale announcements

### Recipe 3: User Registration to Google Sheets Log
**Trigger:** WordPress user registration
**Action:** IFTTT applet appends a row to a Google Sheet with name and email
**Use case:** Maintain a simple signup log without a dedicated integration

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select IFTTT as the Action.
5. In IFTTT, create an applet with "Webhooks > Receive a web request" as the trigger and set an event name.
6. Copy your Maker webhook key from ifttt.com/maker_webhooks/settings.
7. Enter the webhook key and event name in Bit Integrations.
8. Map up to three fields to value1, value2, value3.
9. Save and test.

## When to Use

- When connecting WordPress to consumer apps, smart home devices, or IFTTT-exclusive integrations
- When you need a dead-simple one-trigger-one-action automation without complex logic
- When the destination service has an IFTTT applet but no direct Bit Integrations connector

## Related Integrations

- zapier.md
- make.md
- webhook-outgoing.md
