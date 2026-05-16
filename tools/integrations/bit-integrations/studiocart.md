# StudioCart

StudioCart is a WordPress checkout plugin designed for coaches, course creators, and service businesses, with order bumps, upsells, and simple payment form creation. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** eCommerce and Payments
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/StudioCart.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create order, add customer |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Create order — generate a new order record in StudioCart
- Add customer — add a customer to StudioCart

## Authentication

- **Type**: WordPress plugin-native
- **Required**: StudioCart must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Create StudioCart order from CRM deal
**Trigger:** HubSpot / Zoho CRM — Deal closed won
**Action:** StudioCart — Create order
**Key fields mapped:** Contact email, product or service tied to the deal, order amount
**Use case:** Automatically generate a StudioCart order record when a deal is closed in your CRM

### Recipe 2: Add customer from form submission
**Trigger:** Gravity Forms / Bit Form — Form submitted
**Action:** StudioCart — Add customer
**Key fields mapped:** Email, first name, last name, phone
**Use case:** Create StudioCart customer records from lead or booking form submissions

### Recipe 3: Create order after external payment confirmation
**Trigger:** WooCommerce / SureCart — Order completed
**Action:** StudioCart — Create order
**Key fields mapped:** Customer email, product name, order total
**Use case:** Mirror or log orders in StudioCart when purchases are made through a different checkout system

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select StudioCart as the action.
4. Choose Create Order or Add Customer.
5. Map the required fields from your trigger source (email, name, product, amount).
6. Save and test with a real event (close a CRM deal or submit a test form).

## When to Use

- You use StudioCart as your checkout solution for coaching or course products and want orders created from external triggers
- You need to keep StudioCart customer records in sync with form submissions or CRM data
- You want to create StudioCart order records programmatically as part of a fulfillment or reporting workflow
- You run a multi-platform setup and need StudioCart integrated with external sales or CRM tools

## Related Integrations

- woocommerce.md
- surecart.md
- easy-digital-downloads.md
- learndash.md
