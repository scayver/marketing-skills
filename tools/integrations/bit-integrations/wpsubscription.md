# WPSubscription

WPSubscription is a WordPress plugin for managing newsletter and content subscriptions directly within WordPress. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Gamification and Loyalty
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/WP-Subsription.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; add subscribers to WPSubscription lists |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to subscriber fields |

## Action Events

- Add subscriber

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and WPSubscription must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Form Opt-In to WPSubscription List
**Trigger:** WordPress opt-in or contact form submission
**Action:** Add the submitter as a subscriber in WPSubscription
**Use case:** Grow a WordPress-hosted subscription list from opt-in forms without external email service dependencies

### Recipe 2: WooCommerce Purchase to Subscriber
**Trigger:** WooCommerce order completed
**Action:** Add the customer as a WPSubscription subscriber
**Use case:** Build a buyer email list within WordPress for post-purchase newsletter communications

### Recipe 3: User Registration to Subscription List
**Trigger:** WordPress user registration
**Action:** Add the new user to a WPSubscription list
**Use case:** Automatically subscribe new WordPress registrations to a newsletter or update list

## Setup Steps

1. Install Bit Integrations Pro and WPSubscription on your WordPress site.
2. Create the target subscription list in WPSubscription.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select WPSubscription as the Action.
6. Select the target subscription list.
7. Map form fields (email, name) to subscriber fields.
8. Save and test.

## When to Use

- When managing subscriptions entirely within WordPress without an external email service provider
- When form opt-ins or purchases should populate a WordPress-native subscription list
- When you prefer keeping subscriber data on-site rather than in a third-party ESP

## Related Integrations

- mailchimp.md
- mailerlite.md
- popup-maker.md
- optinmonster.md
