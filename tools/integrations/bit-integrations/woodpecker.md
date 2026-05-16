# Woodpecker

Woodpecker is a cold email outreach tool designed for B2B sales and marketing teams to automate personalized cold email campaigns and follow-up sequences. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Woodpecker.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Add prospect to campaign |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Add prospect to campaign
- Update prospect fields

## Authentication

- **Type**: API Key
- **Where to get credentials**: Woodpecker account > Settings > Integrations > API
- **Required in Bit Integrations**: API Key

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Prospect email address | Required |
| First Name | Prospect first name | Optional |
| Last Name | Prospect last name | Optional |
| Company | Prospect company name | Optional |
| Campaign ID | The Woodpecker campaign to add the prospect to | Required |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Add prospect to Woodpecker cold email campaign
**Key fields mapped:** Email, First Name, Last Name, Company
**Use case:** Automatically enroll leads who fill out your contact form into a cold outreach campaign

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Add buyer as prospect to Woodpecker customer follow-up campaign
**Key fields mapped:** Email, First Name, Company
**Use case:** Segment buyers separately from leads for targeted post-purchase outreach sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Add enrolled user to Woodpecker onboarding outreach campaign
**Key fields mapped:** Email, First Name, membership level or course name
**Use case:** Trigger personalized outreach sequences automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select Woodpecker as the action.
5. Connect your Woodpecker account using your API Key.
6. Select the campaign to add prospects to.
7. Map the email field and any name or company fields.
8. Save and test with a real form submission.

## When to Use

- Enrolling WordPress form leads into B2B cold outreach campaigns automatically
- Adding WooCommerce customers to follow-up sales sequences
- Running personalized outreach from WordPress-captured contact data
- Automating prospect enrollment without manual CRM data entry
- Replacing manual prospect import into Woodpecker campaigns

## Related Integrations

- lemlist.md
- activecampaign.md
- mailchimp.md
