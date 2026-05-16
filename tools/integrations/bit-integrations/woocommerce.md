# WooCommerce

WooCommerce is the most widely used WordPress eCommerce plugin, powering product stores, subscriptions, digital downloads, and online marketplaces. Available as both Trigger and Action in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Yes — both Trigger and Action are free
**Category:** eCommerce and Payments
**Icon:** Action: `https://bit-integrations.com/wp-content/uploads/2026/02/WooCommerce-1.svg` — Trigger: `https://bit-integrations.com/wp-content/uploads/2026/02/WooCommerce.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on order status changes, subscription events, and new customer registration |
| As Action | ✓ | Create orders, update order status, create and update products, create coupons |
| Free Tier | ✓ | Free for both Trigger and Action |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Trigger Events

- Order completed — fires when a WooCommerce order reaches "Completed" status
- Order pending — fires when an order is placed but payment is pending
- Order failed — fires when an order payment fails
- Order refunded — fires when an order is refunded
- Order cancelled — fires when an order is cancelled
- Subscription activated — fires when a WooCommerce Subscription is activated
- New customer registered — fires when a new customer account is created

## Action Events

- Create order — programmatically create a WooCommerce order
- Update order status — change the status of an existing order
- Create product — add a new product to the WooCommerce store
- Update product — modify an existing product's details
- Create coupon — generate a new WooCommerce coupon code

## Authentication

- **Type**: WordPress plugin-native
- **Required**: WooCommerce must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Add customer to CRM on order completed
**Trigger:** WooCommerce — Order completed
**Action:** HubSpot / Zoho CRM — Create or update contact
**Key fields mapped:** Customer email, first name, last name, order total, product name
**Use case:** Automatically create or update CRM contacts with purchase data every time a sale is completed

### Recipe 2: Enroll customer in LMS course on purchase
**Trigger:** WooCommerce — Order completed
**Action:** LearnDash / TutorLMS — Enroll in course
**Key fields mapped:** Customer email, product linked to course
**Use case:** Automatically grant course access when a customer purchases the associated product

### Recipe 3: Send order data to email platform and generate coupon
**Trigger:** WooCommerce — Order completed
**Action:** Mailchimp — Add to list AND WooCommerce — Create coupon
**Key fields mapped:** Customer email, order total, discount percentage
**Use case:** Add buyers to your email list and generate a personal follow-up coupon to encourage repeat purchases

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select WooCommerce as the trigger or action.
4. For triggers, choose the event (e.g., Order Completed) and optionally filter by product or category.
5. For actions, choose the action type (e.g., Create Order or Create Coupon) and configure the fields.
6. Map the relevant fields to the connected platform.
7. Save and test with a real event (place a test order or register a test customer).

## When to Use

- You want to push WooCommerce order or customer data into your CRM or email platform automatically
- You need to enroll buyers in LMS courses after purchase without a separate enrollment plugin
- You want to generate personalized coupons or update order statuses from external triggers
- You need WooCommerce to serve as the central trigger hub for a multi-tool automation stack

## Related Integrations

- surecart.md
- easy-digital-downloads.md
- woocommerce-subscriptions.md
- woocommerce-memberships.md
- memberpress.md
- learndash.md
