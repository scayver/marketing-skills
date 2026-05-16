# WP Travel Engine

WP Travel Engine is a WordPress travel booking plugin for travel agencies and tour operators to manage trip listings, bookings, and payments. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Webinars and Events
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/WP-Travel-Engine.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; create bookings in WP Travel Engine |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to WP Travel Engine booking fields |

## Action Events

- Create booking

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and WP Travel Engine must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Custom Booking Form to WP Travel Engine
**Trigger:** WordPress custom travel inquiry or booking form submission
**Action:** Create a booking in WP Travel Engine with the submitted trip and traveler details
**Use case:** Accept travel booking requests via a custom form and push them into WP Travel Engine for agency management

### Recipe 2: External Payment to Trip Booking
**Trigger:** WooCommerce or payment form completion
**Action:** Create a WP Travel Engine booking for the purchased trip
**Use case:** Sync external payment events with WP Travel Engine's booking management system

### Recipe 3: Group Tour Form to Group Booking
**Trigger:** WordPress group tour inquiry form submission
**Action:** Create a group booking in WP Travel Engine with all submitted details
**Use case:** Process group travel inquiry forms and automatically create group bookings for agency review

## Setup Steps

1. Install Bit Integrations Pro and WP Travel Engine on your WordPress site.
2. Set up trips and pricing in WP Travel Engine.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select WP Travel Engine as the Action.
6. Select the target trip.
7. Map form fields to booking fields (traveler name, email, trip ID, travel date, travelers count).
8. Save and test.

## When to Use

- When custom travel inquiry forms should create WP Travel Engine bookings automatically
- When running a travel agency or tour operator site and needing booking automation from form submissions
- When payment events should trigger automatic booking records in WP Travel Engine

## Related Integrations

- amelia.md
- the-events-calendar.md
- woocommerce.md
- google-calendar.md
