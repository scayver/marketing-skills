# Smaily

Smaily is an Estonian email marketing platform offering autoresponders, list management, and campaign analytics for small to mid-size businesses. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Smaily.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Subscribe to autoresponder |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Subscribe contact to autoresponder
- Update subscriber custom fields

## Authentication

- **Type**: API Key
- **Where to get credentials**: Smaily account settings > API credentials (username + password)
- **Required in Bit Integrations**: API username and API password

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| Name | Subscriber full name | Optional |
| Custom Fields | Custom subscriber field key-value pairs | Optional |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Subscribe contact to Smaily autoresponder
**Key fields mapped:** Email, Name
**Use case:** Automatically grow your email list when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Subscribe buyer to Smaily autoresponder with customer custom fields
**Key fields mapped:** Email, Name, Order amount (as custom field if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Subscribe to Smaily autoresponder with enrollment custom fields
**Key fields mapped:** Email, Name, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select Smaily as the action.
5. Connect your Smaily account using your API username and API password.
6. Select the autoresponder to subscribe contacts to.
7. Map the email field and any name or custom fields.
8. Save and test with a real form submission.

## When to Use

- Growing an email list from WordPress form submissions automatically
- Subscribing new contacts to email autoresponders
- Syncing WooCommerce buyers to a customer email autoresponder
- Adding new members or course students to onboarding sequences
- Replacing manual CSV imports from WordPress to your email platform

## Related Integrations

- mailerlite.md
- benchmark-email.md
- mailchimp.md
