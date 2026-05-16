# Line

Line is a popular messaging and social platform widely used in Japan, Taiwan, Thailand, and other Asian markets. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Communication and Messaging
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Line.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; send Line Notify messages |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to message text |

## Action Events

- Send Line Notify message to a Line account or group

## Authentication

- **Type**: Line Notify Access Token
- **Required**: Line Notify access token from notify-bot.line.me. Enter the token in Bit Integrations.

## Common Workflow Recipes

### Recipe 1: Form Submission to Line Notify Alert
**Trigger:** WordPress form submission
**Action:** Send a Line Notify message with form details
**Use case:** Alert team members or admins via Line Notify when a form is submitted on a site serving Asian markets

### Recipe 2: WooCommerce Order to Line Notification
**Trigger:** WooCommerce order completed
**Action:** Send an order summary via Line Notify to the admin or team group
**Use case:** Monitor WooCommerce orders in real time via Line for teams using Line as a primary tool

### Recipe 3: Registration to Line Welcome Message
**Trigger:** WordPress user registration
**Action:** Send a Line Notify message with the new user's details
**Use case:** Track new registrations instantly via Line for WordPress sites with Asian user bases

## Setup Steps

1. Install Bit Integrations Pro on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Line as the Action.
5. Go to notify-bot.line.me, log in, and generate a Line Notify access token for the target recipient or group.
6. Enter the access token in Bit Integrations.
7. Map the message text field.
8. Save and test.

## When to Use

- When operating in markets (Japan, Thailand, Taiwan) where Line is the primary messaging platform
- When team members use Line as their primary communication tool and need WordPress event notifications
- When WooCommerce or form events should send alerts via Line Notify

## Related Integrations

- telegram.md
- slack.md
- whatsapp.md
- discord.md
