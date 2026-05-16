# WooCommerce Bookings

WooCommerce Bookings is the official WooCommerce extension for selling appointments, rentals, and time-based services with calendar-integrated booking management. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** eCommerce and Payments
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/WooCommerce-Booking.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create booking, confirm booking |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Create booking — create a new WooCommerce Bookings appointment or reservation
- Confirm booking — change the status of a booking to Confirmed

## Authentication

- **Type**: WordPress plugin-native
- **Required**: WooCommerce and WooCommerce Bookings must both be installed and active; Bit Integrations reads them directly via WordPress hooks
- **Note**: No API keys required; all plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Create booking from form submission
**Trigger:** Gravity Forms / Bit Form — Form submitted (appointment request)
**Action:** WooCommerce Bookings — Create booking
**Key fields mapped:** Customer email, date, time, service type
**Use case:** Create a WooCommerce Booking directly when a customer submits an appointment request form

### Recipe 2: Confirm booking after payment is received
**Trigger:** WooCommerce — Order completed
**Action:** WooCommerce Bookings — Confirm booking
**Key fields mapped:** Order ID or customer email, booking linked to order
**Use case:** Automatically confirm a pending booking as soon as the associated WooCommerce payment is completed

### Recipe 3: Create booking from CRM deal
**Trigger:** HubSpot / Zoho CRM — Deal moved to Scheduled stage
**Action:** WooCommerce Bookings — Create booking
**Key fields mapped:** Contact email, scheduled date and time, service
**Use case:** Generate a WooCommerce Booking when a CRM deal reaches a scheduled or confirmed stage

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Ensure WooCommerce and WooCommerce Bookings are both installed and active.
3. Go to Bit Integrations > Create Integration.
4. Select WooCommerce Bookings as the action.
5. Choose Create Booking or Confirm Booking.
6. Map the customer email, date, time, and service fields from your trigger source.
7. Save and test with a real event (submit a test form or trigger a test payment).

## When to Use

- You accept appointment requests via forms and want to create WooCommerce Bookings automatically
- You want to confirm bookings programmatically as soon as payment is received
- You manage appointments through a CRM and need bookings created from CRM stage changes
- You want to integrate WooCommerce Bookings into a broader client intake or scheduling automation

## Related Integrations

- woocommerce.md
- woocommerce-subscriptions.md
- surecart.md
- wp-simple-pay.md
