# Zoho Marketing Automation

Zoho Marketing Automation (MarketingHub) is a multi-channel marketing automation platform within the Zoho ecosystem offering lead management, behavioral tracking, and email campaign automation. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/ZohoMarketingHub.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Add lead, add to list, update contact |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Add lead
- Add contact to list
- Update contact information

## Authentication

- **Type**: OAuth 2.0
- **Where to get credentials**: Zoho developer console (api-console.zoho.com) — create a server-based application to obtain OAuth credentials
- **Required in Bit Integrations**: OAuth 2.0 authorization flow (authorize via Bit Integrations UI)

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Lead or contact email address | Required |
| First Name | Lead or contact first name | Optional |
| Last Name | Lead or contact last name | Optional |
| Phone | Lead or contact phone number | Optional |
| List ID | The Zoho Marketing Automation list to add to | Optional |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Add lead to Zoho Marketing Automation and add to nurture list
**Key fields mapped:** Email, First Name, Last Name
**Use case:** Automatically grow your lead database when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Add buyer as lead to Zoho Marketing Automation customer list
**Key fields mapped:** Email, First Name, Order amount (as custom field if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Add lead to Zoho Marketing Automation and enroll in onboarding list
**Key fields mapped:** Email, First Name, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select Zoho Marketing Automation as the action.
5. Connect your Zoho account using OAuth 2.0 authorization.
6. Configure the lead or contact action and select the list.
7. Map the email field and any name or phone fields.
8. Save and test with a real form submission.

## When to Use

- Growing a lead database from WordPress form submissions within the Zoho ecosystem
- Segmenting new leads by source using Zoho Marketing Automation lists
- Syncing WooCommerce buyers to a customer list in Zoho
- Adding new members or course students to automated onboarding sequences
- Replacing manual CSV imports from WordPress to your marketing automation platform

## Related Integrations

- zoho-campaigns.md
- activecampaign.md
- hubspot.md
