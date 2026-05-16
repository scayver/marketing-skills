# Sendy

Sendy is a self-hosted email newsletter application that sends bulk emails via Amazon SES, offering a dramatically lower cost per send than hosted platforms. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Sendy.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Subscribe to list |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Subscribe contact to list
- Unsubscribe contact from list

## Authentication

- **Type**: API Key
- **Where to get credentials**: Sendy installation settings > API section (requires your self-hosted Sendy URL and API key)
- **Required in Bit Integrations**: Sendy installation URL and API Key

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| Name | Subscriber full name | Optional |
| List | Sendy list ID to subscribe the contact to | Required |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Subscribe contact to Sendy list
**Key fields mapped:** Email, Name
**Use case:** Automatically grow your email list when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Subscribe buyer to Sendy customer list
**Key fields mapped:** Email, Name
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Subscribe to Sendy list for enrollment-based onboarding
**Key fields mapped:** Email, Name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select Sendy as the action.
5. Enter your Sendy installation URL and API Key.
6. Select the list to subscribe contacts to.
7. Map the email field and the name field.
8. Save and test with a real form submission.

## When to Use

- Growing an email list from WordPress form submissions at minimal sending cost
- Sending bulk newsletters via Amazon SES from a self-hosted setup
- Segmenting new subscribers by lead source using Sendy lists
- Syncing WooCommerce buyers to a customer email list
- Replacing manual CSV imports from WordPress to your self-hosted email tool

## Related Integrations

- emailoctopus.md
- mailbluster.md
- mailerlite.md
