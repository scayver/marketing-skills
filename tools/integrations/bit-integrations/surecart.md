# SureCart

SureCart is a modern WordPress eCommerce plugin with a cloud-hosted checkout experience, subscriptions, one-click upsells, and digital product delivery. Available as both Trigger and Action in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Action: Yes — Trigger: No
**Category:** eCommerce and Payments
**Icon:** Action: `https://bit-integrations.com/wp-content/uploads/2026/02/SureCart-1.svg` — Trigger: `https://bit-integrations.com/wp-content/uploads/2026/02/SureCart.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on purchase, subscription, and refund events |
| As Action | ✓ | Create customer |
| Free Tier | ✓ | Action is free; Trigger requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Trigger Events

- Purchase completed — fires when a SureCart purchase is successfully completed
- Subscription activated — fires when a SureCart subscription becomes active
- Subscription cancelled — fires when a SureCart subscription is cancelled
- Refund issued — fires when a SureCart order is refunded

## Action Events

- Create customer — create a new customer record in SureCart

## Authentication

- **Type**: WordPress plugin-native
- **Required**: SureCart must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Add buyer to CRM on purchase
**Trigger:** SureCart — Purchase completed
**Action:** HubSpot / ActiveCampaign — Create or update contact
**Key fields mapped:** Customer email, first name, last name, product name, purchase amount
**Use case:** Automatically push SureCart buyers into your CRM with full purchase details for follow-up

### Recipe 2: Enroll customer in LMS course on purchase
**Trigger:** SureCart — Purchase completed
**Action:** LearnDash / TutorLMS — Enroll in course
**Key fields mapped:** Customer email, product linked to course
**Use case:** Grant LMS course access immediately when a SureCart purchase is confirmed

### Recipe 3: Trigger win-back automation on subscription cancellation
**Trigger:** SureCart — Subscription cancelled
**Action:** Mailchimp / ConvertKit — Add to automation or add tag
**Key fields mapped:** Customer email, subscription plan, cancellation date
**Use case:** Start a re-engagement email flow as soon as a SureCart subscriber cancels

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select SureCart as the trigger or action.
4. For triggers, choose the event (e.g., Purchase Completed) and optionally filter by product.
5. For actions, choose Create Customer and map the required fields.
6. Map the relevant fields to the connected platform.
7. Save and test with a real event (complete a test purchase or cancel a test subscription).

## When to Use

- You use SureCart as your WordPress checkout solution and want buyer data in your CRM or email platform
- You sell courses via SureCart and need automatic LMS enrollment on purchase
- You want to trigger win-back flows when SureCart subscriptions lapse or are cancelled
- You need to integrate SureCart into a broader post-purchase automation stack

## Related Integrations

- woocommerce.md
- easy-digital-downloads.md
- learndash.md
- lifterlms.md
- memberpress.md
