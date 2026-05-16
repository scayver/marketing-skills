# Advanced Coupons

Advanced Coupons is a WooCommerce extension that adds powerful coupon features including BOGO deals, shipping discounts, cart conditions, and loyalty programs to your WooCommerce store. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** eCommerce and Payments
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Advanced-Coupons.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Apply coupon to order, create coupon |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Apply coupon to order — apply a coupon code to an existing WooCommerce order
- Create coupon — generate a new Advanced Coupons coupon code

## Authentication

- **Type**: WordPress plugin-native
- **Required**: WooCommerce and Advanced Coupons must both be installed and active; Bit Integrations reads them directly via WordPress hooks
- **Note**: No API keys required; all plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Generate personalized coupon on first purchase
**Trigger:** WooCommerce — Order completed (first order)
**Action:** Advanced Coupons — Create coupon
**Key fields mapped:** Customer email, discount type, discount value, expiry date
**Use case:** Automatically generate a personal coupon for new customers after their first purchase to encourage repeat buying

### Recipe 2: Apply coupon on membership activation
**Trigger:** MemberPress / Restrict Content — Membership activated
**Action:** Advanced Coupons — Create coupon (member discount code)
**Key fields mapped:** User email, discount percentage tied to membership level
**Use case:** Issue exclusive member discount coupons automatically when a membership activates

### Recipe 3: Apply coupon from CRM deal or loyalty trigger
**Trigger:** HubSpot — Deal closed or contact tag applied
**Action:** Advanced Coupons — Apply coupon or create coupon
**Key fields mapped:** Customer email, coupon code to generate or apply
**Use case:** Reward customers with a discount when a CRM milestone is reached, such as a loyalty anniversary or upsell qualification

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Ensure WooCommerce and Advanced Coupons are both installed and active.
3. Go to Bit Integrations > Create Integration.
4. Select Advanced Coupons as the action.
5. Choose Apply Coupon to Order or Create Coupon.
6. Configure the coupon parameters (discount type, value, expiry) or the order to apply it to.
7. Map the customer email from your trigger source.
8. Save and test with a real event (complete a test purchase or activate a test membership).

## When to Use

- You want to automatically generate personal discount codes for customers after purchases or membership activations
- You need to apply coupons programmatically as part of a loyalty or rewards workflow
- You want to issue member-exclusive discounts when membership levels activate
- You integrate coupon creation into a broader post-purchase or retention automation stack

## Related Integrations

- woocommerce.md
- wployalty.md
- mycred.md
- memberpress.md
- restrict-content.md
