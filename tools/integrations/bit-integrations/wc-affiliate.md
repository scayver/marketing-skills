# WC Affiliate

WC Affiliate is a WooCommerce-specific affiliate management plugin for tracking referrals, commissions, and payouts within a WooCommerce store. Available as an Action (Pro) and Trigger (Pro) in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** No
**Category:** Affiliate Management
**Icon (Action):** `https://bit-integrations.com/wp-content/uploads/2026/04/WC-Affiliate-1.svg`
**Icon (Trigger):** `https://bit-integrations.com/wp-content/uploads/2026/04/WC-Affiliate.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Requires Pro plan |
| As Action | ✓ | Requires Pro plan |
| Free Tier | — | Both roles require Pro |
| Field Mapping | ✓ | Map fields to WC Affiliate affiliate and commission data |

## Trigger Events

- Affiliate registered
- Commission created or approved

## Action Events

- Register affiliate
- Update affiliate status

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and WC Affiliate must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Affiliate Application to WC Affiliate Registration
**Trigger:** WordPress affiliate application form
**Action:** Register the applicant in WC Affiliate
**Use case:** Create a front-end affiliate sign-up experience that auto-registers in WC Affiliate

### Recipe 2: WC Affiliate Commission to Email Notification
**Trigger:** WC Affiliate commission created
**Action:** Send email notification to the affiliate with commission details
**Use case:** Automatically notify affiliates when they earn a commission

### Recipe 3: WC Affiliate Registration to CRM Contact
**Trigger:** WC Affiliate affiliate registered
**Action:** Create a CRM contact for the new affiliate
**Use case:** Add new WC Affiliate affiliates to your CRM for relationship management

## Setup Steps

1. Install Bit Integrations Pro and WC Affiliate on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. For Trigger: Select WC Affiliate as the Trigger and choose the event.
4. For Action: Choose your trigger source, then select WC Affiliate as the Action.
5. Map fields.
6. Save and test.

## When to Use

- When running a WooCommerce-based affiliate program with WC Affiliate and needing automated workflows
- When affiliate events in WC Affiliate should trigger email notifications or CRM updates
- When building a complete affiliate automation pipeline within the WooCommerce ecosystem

## Related Integrations

- affiliatewp.md
- slicewp.md
- solid-affiliate.md
- ultimate-affiliate-pro.md
