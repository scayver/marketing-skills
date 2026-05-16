# Discord

Discord is a voice, video, and text communication platform popular with gaming, developer, and online communities. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Communication and Messaging
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Discord.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Send messages to a Discord channel via webhook |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields into the Discord message content |

## Action Events

- Send message to a Discord channel via webhook

## Authentication

- **Type**: Discord Webhook URL
- **Required**: Create an Incoming Webhook in Discord (Server Settings > Integrations > Webhooks). Copy the webhook URL and enter it in Bit Integrations.

## Common Workflow Recipes

### Recipe 1: New Member Registration to Discord Announcement
**Trigger:** WordPress user registration or membership activation
**Action:** Post a welcome announcement to a Discord #new-members channel
**Use case:** Welcome new community members in Discord automatically when they register on WordPress

### Recipe 2: Form Submission to Discord Notification Channel
**Trigger:** WordPress contact or application form submission
**Action:** Post form details to a Discord team notification channel
**Use case:** Alert the team in Discord when important forms are submitted on the website

### Recipe 3: WooCommerce Order to Discord Sales Channel
**Trigger:** WooCommerce order completed
**Action:** Post an order summary embed to a Discord #sales channel
**Use case:** Celebrate or track sales in Discord in real time for teams that use it as a primary hub

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Discord as the Action.
5. In Discord, go to your server's Settings > Integrations > Webhooks. Create a webhook for the target channel and copy the URL.
6. Paste the webhook URL into Bit Integrations.
7. Map fields: content (message text), username, embeds.
8. Save and test.

## When to Use

- When your community or team operates primarily in Discord and needs WordPress event notifications
- When new memberships, form submissions, or orders should be announced in Discord channels
- When building community-driven sites where Discord is the central communication hub

## Related Integrations

- slack.md
- telegram.md
- buddyboss.md
- fluent-community.md
