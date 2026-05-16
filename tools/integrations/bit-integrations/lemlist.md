# lemlist

lemlist is a cold outreach platform that sets itself apart with personalized image and video emails, multi-channel sequences, and deliverability-focused sending for B2B sales teams. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Lemlist.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Add lead to campaign |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Add lead to campaign
- Update lead fields

## Authentication

- **Type**: API Key
- **Where to get credentials**: lemlist account > Settings > Integrations > API
- **Required in Bit Integrations**: API Key

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Lead email address | Required |
| First Name | Lead first name | Optional |
| Last Name | Lead last name | Optional |
| Company Name | Lead company name | Optional |
| Campaign ID | The lemlist campaign to add the lead to | Required |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Add lead to lemlist cold outreach campaign
**Key fields mapped:** Email, First Name, Last Name, Company Name
**Use case:** Automatically enroll leads who fill out your contact form into a personalized cold outreach sequence

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Add buyer as lead to lemlist post-purchase campaign
**Key fields mapped:** Email, First Name, Company Name
**Use case:** Segment buyers separately from leads for targeted post-purchase outreach sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Add enrolled user to lemlist onboarding outreach campaign
**Key fields mapped:** Email, First Name, membership level or course name
**Use case:** Trigger personalized outreach sequences automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select lemlist as the action.
5. Connect your lemlist account using your API Key.
6. Select the campaign to add leads to.
7. Map the email field and any name or company fields.
8. Save and test with a real form submission.

## When to Use

- Enrolling WordPress form leads into B2B cold outreach campaigns automatically
- Adding WooCommerce customers to personalized follow-up sales sequences
- Running image- or video-personalized outreach from WordPress-captured lead data
- Automating lead enrollment into multi-channel sequences without manual data entry
- Replacing manual prospect import into lemlist campaigns

## Related Integrations

- woodpecker.md
- activecampaign.md
- mailchimp.md
