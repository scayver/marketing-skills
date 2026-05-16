# Dokan

Dokan is a WordPress multivendor marketplace plugin that transforms WooCommerce stores into platforms where multiple vendors can manage their own storefronts and products. Available as both Trigger and Action in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Action: Yes — Trigger: No
**Category:** eCommerce and Payments
**Icon:** Action: `https://bit-integrations.com/wp-content/uploads/2026/02/DokanMaker-1.svg` — Trigger: `https://bit-integrations.com/wp-content/uploads/2026/02/DokanMaker.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on vendor registration, product publishing, and new order events |
| As Action | ✓ | Create or update vendor records |
| Free Tier | ✓ | Action is free; Trigger requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Trigger Events

- Vendor registered — fires when a new vendor signs up on the marketplace
- Vendor product published — fires when a vendor publishes a new product
- New order to vendor — fires when a new order is placed for a vendor's product

## Action Events

- Create vendor — create a new vendor account on the Dokan marketplace
- Update vendor — update an existing vendor's profile or settings

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Dokan must be installed and active with WooCommerce; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Add new vendor to CRM on registration
**Trigger:** Dokan — Vendor registered
**Action:** HubSpot / Zoho CRM — Create or update contact
**Key fields mapped:** Vendor email, store name, registration date
**Use case:** Automatically create a CRM record for every new vendor who joins the marketplace for onboarding and relationship management

### Recipe 2: Notify marketplace admin on new vendor product
**Trigger:** Dokan — Vendor product published
**Action:** Email notification or Slack webhook
**Key fields mapped:** Vendor name, product name, product URL
**Use case:** Alert marketplace admins when a vendor publishes a new product for quality review or promotion

### Recipe 3: Create vendor from CRM application
**Trigger:** HubSpot / Gravity Forms — Deal closed or form submitted (vendor application)
**Action:** Dokan — Create vendor
**Key fields mapped:** Applicant email, store name, contact details
**Use case:** Automatically create a Dokan vendor account when a vendor application is approved via a CRM or form

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Ensure Dokan and WooCommerce are both installed and active.
3. Go to Bit Integrations > Create Integration.
4. Select Dokan as the trigger or action.
5. For triggers, choose the event (e.g., Vendor Registered) and configure any filters.
6. For actions, choose Create Vendor or Update Vendor and map the required fields.
7. Save and test with a real event (register a test vendor or publish a test product).

## When to Use

- You run a multivendor marketplace and want new vendor data automatically in your CRM or email platform
- You need to notify admins when vendors take specific actions like publishing products
- You want to create vendor accounts programmatically from application forms or CRM approvals
- You need to integrate Dokan vendor lifecycle events into a broader business automation workflow

## Related Integrations

- woocommerce.md
- woocommerce-memberships.md
- surecart.md
