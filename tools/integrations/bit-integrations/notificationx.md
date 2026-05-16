# NotificationX

NotificationX is a WordPress social proof and FOMO notification plugin for displaying live sales notifications, review alerts, and engagement stats. Available as an Action (Pro) and Trigger (Pro) in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** No
**Category:** SEO and Analytics
**Icon (Action):** `https://bit-integrations.com/wp-content/uploads/2026/04/NotificationX-1.svg`
**Icon (Trigger):** `https://bit-integrations.com/wp-content/uploads/2026/04/NotificationX.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Requires Pro plan; fires when a notification is clicked |
| As Action | ✓ | Requires Pro plan; display notification via NotificationX |
| Free Tier | — | Both roles require Pro |
| Field Mapping | ✓ | Map event data to notification display fields |

## Trigger Events

- Notification clicked

## Action Events

- Display notification

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and NotificationX must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: WooCommerce Sale to Social Proof Notification
**Trigger:** WooCommerce order completed
**Action:** Display a NotificationX sales notification showing the recent purchase
**Use case:** Automatically show live "someone just bought this" social proof notifications driven by actual WooCommerce orders

### Recipe 2: Form Sign-Up to Subscriber Notification
**Trigger:** WordPress form submission (email opt-in)
**Action:** Display a NotificationX notification showing a recent sign-up
**Use case:** Show real-time social proof of new subscriber activity driven by actual form opt-ins

### Recipe 3: Notification Clicked to CRM or Analytics Event
**Trigger:** NotificationX notification clicked
**Action:** Log the click as a conversion event in Google Sheets or a CRM
**Use case:** Track notification engagement by capturing click events and logging them in reporting tools

## Setup Steps

1. Install Bit Integrations Pro and NotificationX on your WordPress site.
2. Create the notification campaign in NotificationX.
3. Go to Bit Integrations > Create Integration.
4. For Trigger: Select NotificationX as the Trigger (notification clicked).
5. For Action: Choose your trigger source, then select NotificationX as the Action (display notification).
6. Map fields.
7. Save and test.

## When to Use

- When WooCommerce purchases or form sign-ups should drive real social proof notifications in NotificationX
- When notification click events should be tracked in external analytics or CRM tools
- When building a conversion-focused site where real-time FOMO notifications are driven by actual WordPress events

## Related Integrations

- advanced-ads.md
- seopress.md
- post-creation.md
- google-sheets.md
