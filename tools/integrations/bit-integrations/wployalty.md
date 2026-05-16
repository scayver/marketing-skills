# WPLoyalty

WPLoyalty is a WooCommerce loyalty and rewards plugin that lets store owners create points-based reward programs, referral incentives, and coupon rewards for customers. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** eCommerce and Payments
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/WP-Loyalty-4.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Add points to customer, add reward |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Add points to customer — award loyalty points to a WooCommerce customer in WPLoyalty
- Add reward — grant a specific reward (coupon, product, etc.) to a customer

## Authentication

- **Type**: WordPress plugin-native
- **Required**: WooCommerce and WPLoyalty must both be installed and active; Bit Integrations reads them directly via WordPress hooks
- **Note**: No API keys required; all plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Award points on course completion
**Trigger:** LearnDash / TutorLMS — Course completed
**Action:** WPLoyalty — Add points to customer
**Key fields mapped:** User email, points to award (configured per course)
**Use case:** Reward students with loyalty points when they complete a course, bridging your LMS and WooCommerce loyalty program

### Recipe 2: Award points on membership renewal
**Trigger:** MemberPress — Membership renewed
**Action:** WPLoyalty — Add points to customer
**Key fields mapped:** User email, renewal bonus points
**Use case:** Give bonus loyalty points to members who renew their subscription as a retention incentive

### Recipe 3: Grant reward on milestone form submission
**Trigger:** Bit Form / Gravity Forms — Form submitted (e.g., survey or referral form)
**Action:** WPLoyalty — Add reward
**Key fields mapped:** Customer email, reward type (coupon or product)
**Use case:** Issue a loyalty reward to customers who complete a survey, referral, or engagement activity outside WooCommerce

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Ensure WooCommerce and WPLoyalty are both installed and active.
3. Go to Bit Integrations > Create Integration.
4. Select WPLoyalty as the action.
5. Choose Add Points to Customer or Add Reward.
6. Configure the points amount or reward type.
7. Map the customer email from your trigger source.
8. Save and test with a real event (complete a test course or submit a test form).

## When to Use

- You want to award loyalty points based on LMS course completions or membership renewals, not just WooCommerce purchases
- You run engagement campaigns where completing forms or surveys earns rewards
- You need to integrate your WooCommerce loyalty program with external event triggers
- You want to gamify customer engagement across multiple touchpoints beyond the storefront

## Related Integrations

- mycred.md
- advanced-coupons.md
- woocommerce.md
- learndash.md
- memberpress.md
