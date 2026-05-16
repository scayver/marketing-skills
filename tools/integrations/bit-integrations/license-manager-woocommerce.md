# License Manager for WooCommerce

License Manager for WooCommerce is a free WordPress plugin that generates, delivers, and manages software license keys for products sold through WooCommerce. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** eCommerce and Payments
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/License-Manager-for-WooCommerce-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Generate license, activate license |
| Free Tier | ✓ | Free |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Generate license — create and assign a new license key for a WooCommerce product
- Activate license — activate an existing license key for a customer

## Authentication

- **Type**: WordPress plugin-native
- **Required**: License Manager for WooCommerce must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Generate license on WooCommerce order completion
**Trigger:** WooCommerce — Order completed
**Action:** License Manager for WooCommerce — Generate license
**Key fields mapped:** Customer email, product linked to license generator
**Use case:** Automatically generate and deliver a license key when a software or digital product is purchased

### Recipe 2: Activate license after customer verification
**Trigger:** Bit Form / Gravity Forms — Verification form submitted
**Action:** License Manager for WooCommerce — Activate license
**Key fields mapped:** Customer email, license key field
**Use case:** Activate a license key after a customer completes a verification or registration step

### Recipe 3: Generate license from CRM closed deal
**Trigger:** HubSpot / Zoho CRM — Deal closed won
**Action:** License Manager for WooCommerce — Generate license
**Key fields mapped:** Contact email, product or software tied to the deal
**Use case:** Issue a license key automatically when a CRM deal is marked as closed-won for software sales

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select License Manager for WooCommerce as the action.
4. Choose Generate License or Activate License.
5. Select the product or license generator to use.
6. Map the customer email from your trigger source.
7. Save and test with a real event (complete a test WooCommerce order or submit a test form).

## When to Use

- You sell software or digital products via WooCommerce and want licenses generated automatically on purchase
- You need to activate license keys after a manual verification or customer registration step
- You manage software sales via a CRM and need license generation triggered by deal closure
- You want to automate license delivery as part of a post-purchase fulfillment workflow

## Related Integrations

- woocommerce.md
- easy-digital-downloads.md
- surecart.md
