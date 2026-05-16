# StoreEngine

StoreEngine is a WordPress eCommerce plugin for building and managing online stores with product listings, cart, and checkout functionality. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** eCommerce and Payments
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Store-Engine-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Store and order management actions |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Store and order management actions (refer to Bit Integrations documentation for the current full list of supported action events)

## Authentication

- **Type**: WordPress plugin-native
- **Required**: StoreEngine must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Create order from CRM closed deal
**Trigger:** HubSpot / Zoho CRM — Deal closed won
**Action:** StoreEngine — Create order
**Key fields mapped:** Contact email, product or service, deal amount
**Use case:** Automatically generate a StoreEngine order when a sales deal closes in your CRM

### Recipe 2: Create customer from form submission
**Trigger:** Gravity Forms / Bit Form — Form submitted
**Action:** StoreEngine — Create customer
**Key fields mapped:** Email, first name, last name, phone number
**Use case:** Register new StoreEngine customers from front-end registration or inquiry forms

### Recipe 3: Update product from external data source
**Trigger:** Google Sheets / webhook — Row updated or data event fired
**Action:** StoreEngine — Update product
**Key fields mapped:** Product ID, price, stock status
**Use case:** Keep StoreEngine product data in sync with an external inventory or pricing system

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select StoreEngine as the action.
4. Choose the appropriate action event for your workflow.
5. Map the required fields from your trigger source.
6. Save and test with a real event (close a test CRM deal or submit a test form).

## When to Use

- You use StoreEngine for WordPress eCommerce and want orders or customers created from external triggers
- You need to integrate StoreEngine into a CRM-based sales or fulfillment workflow
- You want to automate product data updates from external inventory sources
- You need StoreEngine customer records synced with form submissions or external systems

## Related Integrations

- woocommerce.md
- easycommerce.md
- surecart.md
- fluentcart.md
