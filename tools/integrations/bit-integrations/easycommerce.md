# EasyCommerce

EasyCommerce is a WordPress eCommerce plugin for building lightweight online stores with simplified product management and checkout. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** eCommerce and Payments
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Easy-Commerce.svg`

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
- **Required**: EasyCommerce must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Create order from CRM deal
**Trigger:** HubSpot / Zoho CRM — Deal closed won
**Action:** EasyCommerce — Create order or customer record
**Key fields mapped:** Contact email, product, order amount
**Use case:** Automatically generate an EasyCommerce order when a CRM deal is closed

### Recipe 2: Create customer from form submission
**Trigger:** Gravity Forms / Bit Form — Form submitted
**Action:** EasyCommerce — Create customer
**Key fields mapped:** Email, first name, last name, contact details
**Use case:** Register new EasyCommerce customers from front-end form submissions

### Recipe 3: Update order status from external trigger
**Trigger:** Webhook or external payment system
**Action:** EasyCommerce — Update order
**Key fields mapped:** Order ID, new status, customer email
**Use case:** Sync EasyCommerce order statuses when payments or fulfillment events occur in external systems

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select EasyCommerce as the action.
4. Choose the appropriate action event for your workflow.
5. Map the required fields from your trigger source.
6. Save and test with a real event (submit a test form or trigger a CRM event).

## When to Use

- You use EasyCommerce for lightweight store management and want orders or customers created from external triggers
- You need to integrate EasyCommerce into a CRM-based sales workflow
- You want to automate customer record creation from form submissions
- You need EasyCommerce synced with external payment or fulfillment systems

## Related Integrations

- woocommerce.md
- surecart.md
- storeengine.md
- fluentcart.md
