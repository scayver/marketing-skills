# WP Simple Pay

WP Simple Pay is a WordPress plugin for creating Stripe payment forms without a full shopping cart, ideal for one-time payments, donations, and simple product sales. Available as Action in the Bit Integrations WordPress plugin, with a payment trigger.

**Role:** Action
**Free Tier:** No
**Category:** eCommerce and Payments
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/WP-Simple-Pay.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Payment completed |
| As Action | ✓ | Create payment form submission record |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Trigger Events

- Payment completed — fires when a WP Simple Pay payment form is successfully submitted and paid

## Action Events

- Create payment form submission record — log a payment form submission in WP Simple Pay

## Authentication

- **Type**: WordPress plugin-native
- **Required**: WP Simple Pay must be installed and active, with Stripe connected; Bit Integrations reads it directly via WordPress hooks
- **Note**: No additional API keys required in Bit Integrations; WP Simple Pay manages its own Stripe connection

## Common Workflow Recipes

### Recipe 1: Add payer to CRM on payment completed
**Trigger:** WP Simple Pay — Payment completed
**Action:** HubSpot / Zoho CRM — Create or update contact
**Key fields mapped:** Payer email, first name, last name, payment amount, form name
**Use case:** Automatically create or update a CRM contact with full payment details when a Stripe form is submitted

### Recipe 2: Add payer to email list on payment
**Trigger:** WP Simple Pay — Payment completed
**Action:** Mailchimp / ActiveCampaign — Add subscriber or tag
**Key fields mapped:** Payer email, payment form name, amount, date
**Use case:** Subscribe payers to a thank-you or onboarding email list immediately after payment

### Recipe 3: Enroll payer in LMS course after payment
**Trigger:** WP Simple Pay — Payment completed
**Action:** LearnDash / TutorLMS — Enroll in course
**Key fields mapped:** Payer email, course linked to payment form
**Use case:** Grant LMS course access immediately when a WP Simple Pay form is used to purchase course access

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Ensure WP Simple Pay is installed, active, and connected to Stripe.
3. Go to Bit Integrations > Create Integration.
4. Select WP Simple Pay as the trigger.
5. Choose Payment Completed and select the specific payment form if needed.
6. Configure your action (CRM, email platform, LMS, etc.) and map the payment fields.
7. Save and test with a real payment using Stripe test mode.

## When to Use

- You use WP Simple Pay for lightweight Stripe-powered payments and want buyer data pushed to your CRM or email platform
- You sell course or service access via WP Simple Pay and need enrollment automated on payment
- You want to trigger post-payment onboarding sequences from Stripe form submissions
- You need a simple payment-to-automation connection without a full WooCommerce store

## Related Integrations

- woocommerce.md
- surecart.md
- paymattic.md
- learndash.md
- memberpress.md
