# GetResponse

GetResponse is an all-in-one online marketing platform offering email marketing, automation, landing pages, and webinars. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/GetResponse1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Add contact to list, add tag, start automation workflow |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Add contact to list
- Add tag to contact
- Start automation workflow
- Update contact fields
- Unsubscribe contact

## Authentication

- **Type**: API Key
- **Where to get credentials**: GetResponse account > Tools > Integrations & API > API > Generate API key
- **Required in Bit Integrations**: API Key

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| Name | Subscriber full name | Optional |
| Tags | Tags to apply to the contact | Optional |
| Campaign ID | The list (campaign) to add the contact to | Required |
| Custom Field Values | Custom field key-value pairs | Optional |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Add subscriber to GetResponse list with welcome tag
**Key fields mapped:** Email, Name
**Use case:** Automatically grow your email list when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Add buyer to GetResponse customer list or segment
**Key fields mapped:** Email, Name, Order amount (as custom field if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Add to GetResponse list and start automation workflow
**Key fields mapped:** Email, Name, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select GetResponse as the action.
5. Connect your GetResponse account using your API Key.
6. Select the list (campaign) to add contacts to.
7. Map the email field and any name or tag fields.
8. Save and test with a real form submission.

## When to Use

- Growing an email list from WordPress form submissions automatically
- Segmenting new subscribers by lead source using tags
- Syncing WooCommerce buyers to a customer email list
- Adding new members or course students to onboarding sequences
- Triggering automation workflows from WordPress events
- Replacing manual CSV imports from WordPress to your email platform

## Related Integrations

- activecampaign.md
- mailchimp.md
- convertkit.md
