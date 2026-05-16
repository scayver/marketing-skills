# Gravitec

Gravitec is a web push notification service for sending browser-based push notifications to website visitors and subscribers. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Communication and Messaging
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Gravitec.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Send web push notifications via Gravitec |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map fields to notification title, body, URL, and icon |

## Action Events

- Send push notification to Gravitec subscribers

## Authentication

- **Type**: API Key
- **Required**: API key from your Gravitec account dashboard. Enter the key in Bit Integrations.

## Common Workflow Recipes

### Recipe 1: New Post Published to Push Notification
**Trigger:** WordPress post published (via form, WP Post action, or hook)
**Action:** Send a Gravitec push notification to subscribers announcing the new content
**Use case:** Notify web push subscribers instantly when new blog posts or content are published

### Recipe 2: WooCommerce Sale to Promotional Push
**Trigger:** WooCommerce coupon or sale event
**Action:** Send a push notification with the promotion details and URL
**Use case:** Alert opted-in subscribers of time-sensitive sales or discounts via browser push

### Recipe 3: Form Submission Confirmation to Push Notification
**Trigger:** WordPress event registration or webinar sign-up form
**Action:** Send a push notification confirming the registration with event details
**Use case:** Deliver an immediate browser push confirmation to users who register for events

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Gravitec as the Action.
5. Log in to your Gravitec account and copy your API key from the dashboard.
6. Enter the API key in Bit Integrations.
7. Map fields: title, body, url, icon.
8. Save and test.

## When to Use

- When WordPress events should trigger browser push notifications to opted-in site visitors
- When announcing new content, promotions, or events via web push to Gravitec subscribers
- When supplementing email marketing with web push notifications triggered by WordPress events

## Related Integrations

- slack.md
- telegram.md
- discord.md
- onesignal.md
