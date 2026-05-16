# Klaviyo

Klaviyo is a powerful email and SMS marketing platform built for eCommerce, known for deep data segmentation and behavioral triggers. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Klaviyo-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Add profile to list, update profile properties |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Add profile to list
- Update profile properties
- Subscribe contact
- Unsubscribe contact

## Authentication

- **Type**: API Key
- **Where to get credentials**: Klaviyo account > Account > Settings > API Keys > Create Private API Key
- **Required in Bit Integrations**: Private API Key

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| First Name | Subscriber first name | Optional |
| Last Name | Subscriber last name | Optional |
| Phone Number | Subscriber phone number (E.164 format) | Optional |
| List ID | The Klaviyo list to add the profile to | Required |
| Properties | Custom profile property key-value pairs | Optional |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Add profile to Klaviyo list with welcome tag
**Key fields mapped:** Email, First Name, Last Name
**Use case:** Automatically grow your email list when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Add buyer profile to Klaviyo customer list or segment
**Key fields mapped:** Email, First Name, Order amount (as custom property if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Add to Klaviyo list and apply enrollment tag as a profile property
**Key fields mapped:** Email, First Name, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select Klaviyo as the action.
5. Connect your Klaviyo account using your Private API Key.
6. Select the list to add profiles to.
7. Map the email field and any name or custom property fields.
8. Save and test with a real form submission.

## When to Use

- Growing an email list from WordPress form submissions automatically
- Segmenting new subscribers by lead source using list properties
- Syncing WooCommerce buyers to a Klaviyo customer list for post-purchase flows
- Adding new members or course students to onboarding sequences
- Capturing profile data from WordPress to power Klaviyo behavioral flows
- Replacing manual CSV imports from WordPress to your email platform

## Related Integrations

- activecampaign.md
- mailchimp.md
- omnisend.md
