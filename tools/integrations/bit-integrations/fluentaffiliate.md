# FluentAffiliate

FluentAffiliate is a WordPress affiliate management plugin by the Fluent team, designed for simplicity and deep integration with other Fluent plugins. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Affiliate Management
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Fluent-Affiliate-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; manage affiliates in FluentAffiliate |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to FluentAffiliate affiliate fields |

## Action Events

- Create affiliate account
- Update affiliate status

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and FluentAffiliate must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Partner Application Form to FluentAffiliate
**Trigger:** WordPress affiliate or partner application form
**Action:** Create a FluentAffiliate account for the applicant
**Use case:** Automate the affiliate onboarding process from a custom WordPress application form

### Recipe 2: WooCommerce Customer to Affiliate Invitation
**Trigger:** WooCommerce order completed (customer qualifies for affiliate program)
**Action:** Create a FluentAffiliate account for the qualifying customer
**Use case:** Convert loyal customers into affiliates automatically based on purchase behavior

### Recipe 3: CRM Event to Affiliate Account Creation
**Trigger:** CRM deal closed or contact tagged as partner
**Action:** Create a FluentAffiliate account for the new partner
**Use case:** Bridge CRM partner management with FluentAffiliate account provisioning

## Setup Steps

1. Install Bit Integrations Pro and FluentAffiliate on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select FluentAffiliate as the Action.
5. Select the action event.
6. Map form fields to FluentAffiliate affiliate fields.
7. Save and test.

## When to Use

- When using FluentAffiliate in the Fluent ecosystem and wanting automated affiliate onboarding
- When converting customers or partners into affiliates programmatically from form events
- When the affiliate program management is handled by FluentAffiliate alongside other Fluent tools

## Related Integrations

- affiliatewp.md
- slicewp.md
- wc-affiliate.md
- fluent-support.md
