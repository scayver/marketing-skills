# Paymattic

Paymattic is a WordPress payment and donation plugin with support for Stripe, PayPal, and other gateways, built for simple payment forms, subscriptions, and donation campaigns. Available as Action in the Bit Integrations WordPress plugin, with a payment trigger.

**Role:** Action
**Free Tier:** No
**Category:** eCommerce and Payments
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Paymattic.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Payment completed |
| As Action | ✓ | Process payment |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Trigger Events

- Payment completed — fires when a Paymattic payment form is successfully paid

## Action Events

- Process payment — initiate a payment process via Paymattic

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Paymattic must be installed and active, with your payment gateway connected; Bit Integrations reads it directly via WordPress hooks
- **Note**: No additional API keys required in Bit Integrations; Paymattic manages its own payment gateway connections

## Common Workflow Recipes

### Recipe 1: Add payer to CRM on payment completion
**Trigger:** Paymattic — Payment completed
**Action:** HubSpot / Zoho CRM — Create or update contact
**Key fields mapped:** Payer email, first name, last name, payment amount, campaign or form name
**Use case:** Automatically create or update CRM contacts when a Paymattic payment or donation is submitted

### Recipe 2: Add donor to email list on donation
**Trigger:** Paymattic — Payment completed (donation form)
**Action:** Mailchimp / ConvertKit — Add subscriber or tag
**Key fields mapped:** Donor email, donation amount, campaign name
**Use case:** Subscribe donors to a thank-you or engagement email list immediately after they give

### Recipe 3: Enroll payer in course after payment
**Trigger:** Paymattic — Payment completed
**Action:** LearnDash / TutorLMS — Enroll in course
**Key fields mapped:** Payer email, course linked to the payment form
**Use case:** Grant course access automatically when a student pays via a Paymattic form

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Ensure Paymattic is installed, active, and connected to your payment gateway.
3. Go to Bit Integrations > Create Integration.
4. Select Paymattic as the trigger.
5. Choose Payment Completed and select the specific payment form if needed.
6. Configure your action (CRM, email platform, LMS) and map the payment fields.
7. Save and test with a real or sandbox payment to verify the integration fires.

## When to Use

- You use Paymattic for payments or donations and want payer data pushed to your CRM or email platform
- You sell course access via Paymattic and need enrollment automated on payment
- You run donation campaigns and want donors added to email sequences automatically
- You need a Paymattic payment event to trigger broader automation workflows

## Related Integrations

- woocommerce.md
- wp-simple-pay.md
- surecart.md
- learndash.md
- memberpress.md
