# WooCommerce Subscriptions

WooCommerce Subscriptions is the official WooCommerce extension for selling recurring products and services with automatic renewal billing and subscriber management. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** eCommerce and Payments
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Woo-Commerce-Subscription.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Activate subscription, cancel subscription, suspend subscription |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Activate subscription — activate a WooCommerce Subscription for a customer
- Cancel subscription — cancel a customer's active subscription
- Suspend subscription — temporarily pause a customer's subscription

## Authentication

- **Type**: WordPress plugin-native
- **Required**: WooCommerce and WooCommerce Subscriptions must both be installed and active; Bit Integrations reads them directly via WordPress hooks
- **Note**: No API keys required; all plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Activate subscription from external payment confirmation
**Trigger:** SureCart / Stripe Webhook — Payment confirmed
**Action:** WooCommerce Subscriptions — Activate subscription
**Key fields mapped:** Customer email, subscription product
**Use case:** Activate a WooCommerce Subscription when a payment is confirmed through an external payment processor

### Recipe 2: Cancel subscription based on CRM status change
**Trigger:** HubSpot / Zoho CRM — Contact status changed to Churned
**Action:** WooCommerce Subscriptions — Cancel subscription
**Key fields mapped:** Customer email, subscription to cancel
**Use case:** Automatically cancel a WooCommerce Subscription when a CRM deal or contact is marked as lost or churned

### Recipe 3: Suspend subscription on failed payment notification
**Trigger:** Email parser or webhook — Payment failure detected
**Action:** WooCommerce Subscriptions — Suspend subscription
**Key fields mapped:** Customer email, subscription identifier
**Use case:** Temporarily pause a subscription while a payment issue is resolved, preventing full cancellation

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Ensure WooCommerce and WooCommerce Subscriptions are both installed and active.
3. Go to Bit Integrations > Create Integration.
4. Select WooCommerce Subscriptions as the action.
5. Choose the action event: Activate, Cancel, or Suspend Subscription.
6. Map the customer email and subscription details from your trigger source.
7. Save and test with a real event (trigger the action for a test subscriber).

## When to Use

- You need to activate, cancel, or suspend WooCommerce Subscriptions programmatically from external events
- You manage subscriptions across multiple platforms and need WooCommerce Subscriptions synced with external states
- You want to automate subscription lifecycle management based on CRM, payment, or form triggers
- You need to suspend subscriptions temporarily as part of a payment recovery workflow

## Related Integrations

- woocommerce.md
- woocommerce-memberships.md
- surecart.md
- memberpress.md
- wp-simple-pay.md
