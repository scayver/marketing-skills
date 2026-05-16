# WPCafe

WPCafe is a WordPress restaurant ordering and reservation plugin that enables food ordering, table reservations, and menu management directly from a WordPress site. Available as both Trigger and Action in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** No — both Trigger and Action require Pro
**Category:** eCommerce and Payments
**Icon:** Action: `https://bit-integrations.com/wp-content/uploads/2026/02/WP-Cafe.svg` — Trigger: `https://bit-integrations.com/wp-content/uploads/2026/02/WP-Cafe-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on reservation and order events |
| As Action | ✓ | Manage reservations and orders |
| Free Tier | — | Requires Pro for both Trigger and Action |
| Field Mapping | ✓ | Map customer and order data to connected platforms |

## Trigger Events

- Reservation made — fires when a customer makes a table reservation
- Order placed — fires when a customer places a food order

## Action Events

- Reservation and order management actions (refer to Bit Integrations documentation for the current full list of supported action events)

## Authentication

- **Type**: WordPress plugin-native
- **Required**: WPCafe must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Add customer to CRM on reservation
**Trigger:** WPCafe — Reservation made
**Action:** HubSpot / Zoho CRM — Create or update contact
**Key fields mapped:** Customer email, name, reservation date and time, party size
**Use case:** Automatically create or update a CRM contact whenever a customer makes a reservation, building a guest database for marketing

### Recipe 2: Send confirmation email via external platform on order
**Trigger:** WPCafe — Order placed
**Action:** Mailchimp / ActiveCampaign — Send transactional email or add to list
**Key fields mapped:** Customer email, order details, estimated delivery time
**Use case:** Trigger a branded order confirmation or thank-you email from your email marketing platform instead of a generic WordPress email

### Recipe 3: Notify staff via Slack on new reservation
**Trigger:** WPCafe — Reservation made
**Action:** Slack webhook — Post message to staff channel
**Key fields mapped:** Customer name, reservation date, time, party size, special requests
**Use case:** Instantly alert your front-of-house staff in Slack whenever a new table reservation is made

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select WPCafe as the trigger or action.
4. For triggers, choose the event (e.g., Reservation Made or Order Placed).
5. For actions, choose the appropriate reservation or order management action.
6. Map the customer and order fields to the connected platform.
7. Save and test with a real event (make a test reservation or place a test order).

## When to Use

- You run a restaurant website with WPCafe and want guest reservation data automatically in your CRM or email platform
- You want to send branded order confirmations or follow-up emails via an external email marketing tool
- You need to notify staff via Slack or another channel when new reservations or orders come in
- You want to build a guest marketing list from WPCafe reservation and order data

## Related Integrations

- woocommerce.md
- surecart.md
- paymattic.md
