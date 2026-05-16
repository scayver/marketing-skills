# Kirim Email

Kirim Email is an Indonesian email marketing platform offering list management, campaign tools, and subscriber automation for businesses serving Southeast Asian markets. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Kirim-Email.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Add subscriber to list |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Add subscriber to list
- Update subscriber fields
- Unsubscribe contact

## Authentication

- **Type**: API Key
- **Where to get credentials**: Kirim Email account settings > API section
- **Required in Bit Integrations**: API Key

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| Name | Subscriber full name | Optional |
| List ID | The Kirim Email list to add the subscriber to | Required |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Add subscriber to Kirim Email list with welcome tag
**Key fields mapped:** Email, Name
**Use case:** Automatically grow your email list when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Add buyer to Kirim Email customer list or segment
**Key fields mapped:** Email, Name, Order amount (as custom field if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Add to Kirim Email list for enrollment-based nurture
**Key fields mapped:** Email, Name, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations Pro on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select Kirim Email as the action.
5. Connect your Kirim Email account using your API Key.
6. Select the list to add subscribers to.
7. Map the email field and the name field.
8. Save and test with a real form submission.

## When to Use

- Growing an email list from WordPress form submissions for Indonesian or Southeast Asian audiences
- Segmenting new subscribers by lead source using lists
- Syncing WooCommerce buyers to a customer email list
- Adding new members or course students to onboarding sequences
- Replacing manual CSV imports from WordPress to your email platform

## Related Integrations

- mailchimp.md
- mailerlite.md
- getresponse.md
