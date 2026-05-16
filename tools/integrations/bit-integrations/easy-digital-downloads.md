# Easy Digital Downloads

Easy Digital Downloads (EDD) is a WordPress plugin for selling digital products such as software, ebooks, PDFs, and audio files, with a lightweight storefront and licensing add-ons. Available as Action in the Bit Integrations WordPress plugin, with a purchase trigger.

**Role:** Action
**Free Tier:** No
**Category:** eCommerce and Payments
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Easy_Digital_Downloads1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Purchase completed |
| As Action | ✓ | Add customer, apply discount |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Trigger Events

- Purchase completed — fires when an EDD purchase is successfully completed

## Action Events

- Add customer — create or update a customer record in Easy Digital Downloads
- Apply discount — apply a discount code to an EDD order

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Easy Digital Downloads must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Add buyer to CRM on purchase
**Trigger:** Easy Digital Downloads — Purchase completed
**Action:** Zoho CRM / HubSpot — Create or update contact
**Key fields mapped:** Customer email, first name, last name, product name, purchase total
**Use case:** Automatically push EDD buyers into your CRM with full purchase details for upsell or support follow-up

### Recipe 2: Add buyer to email list on purchase
**Trigger:** Easy Digital Downloads — Purchase completed
**Action:** Mailchimp / ConvertKit — Add subscriber or tag
**Key fields mapped:** Customer email, product name, purchase date
**Use case:** Add digital product buyers to the correct email list for post-purchase onboarding or upsell sequences

### Recipe 3: Apply discount from membership or CRM trigger
**Trigger:** MemberPress — Membership purchased OR HubSpot — Deal created
**Action:** Easy Digital Downloads — Apply discount
**Key fields mapped:** User email, discount code to apply
**Use case:** Automatically apply a discount to an EDD purchase as part of a member benefit or sales workflow

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select Easy Digital Downloads as the trigger or action.
4. For the trigger, choose Purchase Completed and optionally filter by product.
5. For actions, choose Add Customer or Apply Discount and configure the required fields.
6. Map the relevant fields to the connected platform.
7. Save and test with a real event (complete a test EDD purchase).

## When to Use

- You sell digital products via EDD and want buyer data automatically in your CRM or email platform
- You need to apply discount codes programmatically from membership or CRM-based triggers
- You want to trigger post-purchase automation sequences from EDD sales events
- You integrate EDD into a broader digital product fulfillment and marketing stack

## Related Integrations

- woocommerce.md
- surecart.md
- studiocart.md
- memberpress.md
- license-manager-woocommerce.md
