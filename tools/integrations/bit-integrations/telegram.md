# Telegram

Telegram is a cloud-based instant messaging platform with support for bots, channels, and groups. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Communication and Messaging
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Telegram.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Send messages to Telegram channels or groups via a bot |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields into the Telegram message body |

## Action Events

- Send message to a Telegram channel or group

## Authentication

- **Type**: Bot Token + Chat ID
- **Required**: Create a Telegram bot via BotFather to get a bot token. Get the Chat ID of the target channel or group. Enter both in Bit Integrations.

## Common Workflow Recipes

### Recipe 1: Form Submission to Telegram Notification
**Trigger:** WordPress form submission
**Action:** Send a Telegram message with form details to a team group or channel
**Use case:** Alert team members via Telegram instantly when a form is submitted on the site

### Recipe 2: WooCommerce Order to Telegram Sales Bot
**Trigger:** WooCommerce order completed
**Action:** Send order summary to a Telegram sales channel or admin
**Use case:** Receive WooCommerce order notifications directly in Telegram for mobile monitoring

### Recipe 3: New User Registration to Telegram Admin Alert
**Trigger:** WordPress user registration
**Action:** Send a Telegram message to the admin with the new user's details
**Use case:** Monitor new registrations in real time via Telegram without checking the WordPress dashboard

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Telegram as the Action.
5. Open Telegram and create a bot using BotFather (/newbot). Copy the bot token.
6. Add the bot to your target channel or group and get the Chat ID.
7. Enter the bot token and Chat ID in Bit Integrations.
8. Map fields: chat_id, message text, parse_mode.
9. Save and test.

## When to Use

- When team members prefer Telegram over email or Slack for WordPress event notifications
- When monitoring WooCommerce orders or form submissions via mobile Telegram notifications
- When running communities or support channels on Telegram that need WordPress event feeds

## Related Integrations

- slack.md
- discord.md
- whatsapp.md
- twilio.md
