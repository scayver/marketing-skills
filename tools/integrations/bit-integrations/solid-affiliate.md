# Solid Affiliate

Solid Affiliate is a modern WordPress affiliate management plugin built for WooCommerce stores with a focus on ease of use and clean reporting. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Affiliate Management
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Solid-Affiliate.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; create or update affiliates in Solid Affiliate |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to Solid Affiliate affiliate record fields |

## Action Events

- Create affiliate
- Update affiliate

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and Solid Affiliate must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Partner Application Form to Solid Affiliate
**Trigger:** WordPress partner or affiliate application form submission
**Action:** Create a new affiliate record in Solid Affiliate with the applicant's details
**Use case:** Automate affiliate account creation from a custom application form built in any WordPress form plugin

### Recipe 2: WooCommerce Customer to Affiliate Conversion
**Trigger:** WooCommerce order completed (repeat purchase or high-value customer)
**Action:** Create a Solid Affiliate account for the customer
**Use case:** Automatically invite high-value customers to join the affiliate program after purchase

### Recipe 3: Referral Partner Update to Solid Affiliate
**Trigger:** WordPress form or CRM event
**Action:** Update an existing Solid Affiliate affiliate record with new details
**Use case:** Sync affiliate profile updates from a partner portal form into Solid Affiliate

## Setup Steps

1. Install Bit Integrations Pro and Solid Affiliate on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Solid Affiliate as the Action.
5. Select the action event (create affiliate or update affiliate).
6. Map form fields to affiliate record fields.
7. Save and test.

## When to Use

- When using Solid Affiliate on WooCommerce and wanting automated affiliate onboarding from forms
- When converting customers into affiliates based on purchase events
- When managing affiliate data updates via WordPress forms instead of manual admin editing

## Related Integrations

- affiliatewp.md
- slicewp.md
- wc-affiliate.md
