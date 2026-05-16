# Slack

Slack is a business communication platform for team messaging, channels, and real-time notifications. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Communication and Messaging
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Slack.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Send channel messages and direct messages in Slack |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields into the Slack message body |

## Action Events

- Send channel message
- Send direct message

## Authentication

- **Type**: Incoming Webhook URL or OAuth app token
- **Required**: Create an Incoming Webhook in Slack API > Your Apps > Incoming Webhooks, or use an OAuth app token. Enter the webhook URL or token in Bit Integrations along with the target channel name.

## Common Workflow Recipes

### Recipe 1: Lead Form to Sales Channel Alert
**Trigger:** WordPress lead capture form submission
**Action:** Post a Slack message in the #sales channel with lead name, email, and message
**Use case:** Notify the sales team instantly when a qualified lead fills out a form

### Recipe 2: WooCommerce Order to Operations Channel
**Trigger:** WooCommerce order completed
**Action:** Post an order summary to the #orders or #operations Slack channel
**Use case:** Keep the team informed of new orders in real time without checking the WooCommerce dashboard

### Recipe 3: Support Ticket to Support Channel
**Trigger:** WordPress support form submission or Fluent Support ticket created
**Action:** Post ticket details to the #support Slack channel for immediate team awareness
**Use case:** Alert support agents of new tickets as soon as they are submitted

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Slack as the Action.
5. In Slack, go to your workspace's App settings and create an Incoming Webhook. Copy the webhook URL.
6. Paste the webhook URL into Bit Integrations.
7. Map fields: channel, message text, username, icon_emoji.
8. Save and test.

## When to Use

- When WordPress form submissions or WooCommerce events should send real-time notifications to Slack channels
- When sales, operations, or support teams need instant alerts from WordPress events
- When building team notification workflows with Slack as the primary communication hub

## Related Integrations

- discord.md
- telegram.md
- freshdesk.md
- fluent-support.md
