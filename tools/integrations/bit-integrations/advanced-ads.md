# Advanced Ads

Advanced Ads is a WordPress ad management plugin for creating, scheduling, and rotating ads from any ad network or custom HTML. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** SEO and Analytics
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Advanced-Ads.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; rotate or update ad groups in Advanced Ads |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map event data to ad group configuration |

## Action Events

- Rotate or update ad groups

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and Advanced Ads must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: User Role Change to Ad Group Rotation
**Trigger:** WordPress user role update (from subscriber to member)
**Action:** Rotate or switch the ad group shown to the user in Advanced Ads
**Use case:** Show different ad sets or remove ads for paid members after they upgrade their account

### Recipe 2: Purchase to Ad-Free Experience
**Trigger:** WooCommerce order completed (ad-removal product)
**Action:** Update Advanced Ads settings to suppress ads for the purchasing user
**Use case:** Automatically enable an ad-free experience for users who purchase an ad-removal subscription

### Recipe 3: Scheduled Campaign Launch to Ad Group Activation
**Trigger:** Date-based or form-triggered campaign start
**Action:** Activate a specific ad group in Advanced Ads for the campaign period
**Use case:** Launch ad campaigns in Advanced Ads triggered by a WordPress form or scheduling event

## Setup Steps

1. Install Bit Integrations Pro and Advanced Ads on your WordPress site.
2. Set up ad groups and rotation rules in Advanced Ads.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select Advanced Ads as the Action.
6. Configure the ad group rotation or update settings.
7. Save and test.

## When to Use

- When user role changes or purchases should alter which ads are displayed to users
- When WooCommerce purchases of ad-free memberships should suppress ads automatically
- When campaign launches or time-based events should activate specific Advanced Ads groups

## Related Integrations

- post-creation.md
- wp-post.md
- seopress.md
- notificationx.md
