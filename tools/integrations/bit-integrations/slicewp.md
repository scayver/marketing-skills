# SliceWP

SliceWP is an affiliate management plugin for WordPress that integrates with WooCommerce and Easy Digital Downloads for referral tracking and commissions. Available as an Action (free) and Trigger (Pro) in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Yes (Action free; Trigger requires Pro)
**Category:** Affiliate Management
**Icon (Action):** `https://bitapps.pro/wp-content/uploads/2023/07/slicewp.png`
**Icon (Trigger):** `https://bit-integrations.com/wp-content/uploads/2026/02/SliceWP.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Requires Pro plan; fires on affiliate and commission events |
| As Action | ✓ | Free; register affiliates |
| Free Tier | ✓ | Action is free; Trigger requires Pro |
| Field Mapping | ✓ | Map form fields to SliceWP affiliate fields |

## Trigger Events

- Affiliate registered
- Commission created

## Action Events

- Register affiliate

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations and SliceWP must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Affiliate Application Form to SliceWP
**Trigger:** WordPress affiliate application form submission
**Action:** Register the applicant as a SliceWP affiliate
**Use case:** Create a custom affiliate sign-up flow that automatically registers affiliates in SliceWP

### Recipe 2: New SliceWP Affiliate to Email Onboarding
**Trigger:** SliceWP affiliate registered
**Action:** Add the new affiliate to an email onboarding sequence
**Use case:** Automatically welcome and onboard new affiliates with an email series

### Recipe 3: Commission Created to CRM or Notification
**Trigger:** SliceWP commission created
**Action:** Log the commission in a Google Sheet or send a Slack notification
**Use case:** Track affiliate commissions in a spreadsheet or notify the finance team on each new commission

## Setup Steps

1. Install Bit Integrations and SliceWP on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. For Trigger: Select SliceWP as the Trigger and choose the event.
4. For Action: Choose your trigger source, then select SliceWP as the Action.
5. Select the action event (register affiliate).
6. Map fields.
7. Save and test.

## When to Use

- When using SliceWP to manage an affiliate program and wanting automated workflows on affiliate events
- When affiliate sign-ups or commissions should trigger email sequences or CRM updates
- When building a lightweight affiliate management system on top of WooCommerce with SliceWP

## Related Integrations

- affiliatewp.md
- solid-affiliate.md
- mailchimp.md
- google-sheets.md
