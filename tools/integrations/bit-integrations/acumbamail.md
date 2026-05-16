# Acumbamail

Acumbamail is a Spanish email and SMS marketing platform used by businesses in Spanish-speaking markets for list management, campaign automation, and subscriber analytics. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Acumbamail1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Subscribe to list |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Subscribe contact to list
- Update subscriber merge fields
- Unsubscribe contact

## Authentication

- **Type**: API Key
- **Where to get credentials**: Acumbamail account > Settings > Auth Token
- **Required in Bit Integrations**: Auth Token

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| Merge Fields | Custom merge field key-value pairs | Optional |
| List ID | The Acumbamail list to add the subscriber to | Required |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Subscribe contact to Acumbamail list with welcome merge fields
**Key fields mapped:** Email, merge fields (name, etc.)
**Use case:** Automatically grow your email list when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Subscribe buyer to Acumbamail customer list
**Key fields mapped:** Email, Order amount (as merge field if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Subscribe to Acumbamail list with enrollment merge fields
**Key fields mapped:** Email, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select Acumbamail as the action.
5. Connect your Acumbamail account using your Auth Token.
6. Select the list to add subscribers to.
7. Map the email field and any merge fields.
8. Save and test with a real form submission.

## When to Use

- Growing an email list from WordPress form submissions for Spanish-speaking audiences
- Segmenting new subscribers by lead source using lists
- Syncing WooCommerce buyers to a customer email list
- Adding new members or course students to onboarding sequences
- Replacing manual CSV imports from WordPress to your email platform

## Related Integrations

- mailchimp.md
- mailerlite.md
- getresponse.md
