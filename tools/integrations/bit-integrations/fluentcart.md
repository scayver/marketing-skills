# FluentCart

FluentCart is a modern WordPress eCommerce plugin by the WPManageNinja team, built for speed and flexibility with a streamlined checkout experience and digital product support. Available as both Trigger and Action in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** No — both Trigger and Action require Pro
**Category:** eCommerce and Payments
**Icon:** Action: `https://bit-integrations.com/wp-content/uploads/2026/02/Fluent-Cart.svg` — Trigger: `https://bit-integrations.com/wp-content/uploads/2026/02/Fluent-Cart-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on purchase and order events |
| As Action | ✓ | Manage orders and customer records |
| Free Tier | — | Requires Pro for both Trigger and Action |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Trigger Events

- Purchase and order events (refer to Bit Integrations documentation for the current full list of supported trigger events)

## Action Events

- Order and customer management actions (refer to Bit Integrations documentation for the current full list of supported action events)

## Authentication

- **Type**: WordPress plugin-native
- **Required**: FluentCart must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Add buyer to CRM on purchase
**Trigger:** FluentCart — Purchase completed
**Action:** HubSpot / Zoho CRM — Create or update contact
**Key fields mapped:** Customer email, first name, last name, product name, order total
**Use case:** Automatically push FluentCart buyers into your CRM with purchase details for follow-up and upsell tracking

### Recipe 2: Enroll buyer in LMS course on purchase
**Trigger:** FluentCart — Purchase completed
**Action:** LearnDash / TutorLMS — Enroll in course
**Key fields mapped:** Customer email, course linked to purchased product
**Use case:** Grant LMS course access immediately when a FluentCart purchase is confirmed

### Recipe 3: Add buyer to email marketing list
**Trigger:** FluentCart — Purchase completed
**Action:** Mailchimp / ActiveCampaign — Add subscriber or add tag
**Key fields mapped:** Customer email, product name, purchase date
**Use case:** Automatically add FluentCart buyers to the correct email list or segment for post-purchase nurturing

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select FluentCart as the trigger or action.
4. For triggers, choose the relevant purchase or order event.
5. For actions, choose the order or customer management action.
6. Map the relevant fields to the connected platform.
7. Save and test with a real event (complete a test FluentCart purchase).

## When to Use

- You use FluentCart as your WordPress checkout solution and want buyer data in your CRM or email platform
- You sell courses via FluentCart and need LMS enrollment automated on purchase
- You want to trigger post-purchase email sequences from FluentCart order events
- You need FluentCart integrated into a broader eCommerce automation workflow

## Related Integrations

- woocommerce.md
- surecart.md
- easy-digital-downloads.md
- learndash.md
