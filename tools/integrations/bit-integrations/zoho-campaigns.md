# Zoho Campaigns

Zoho Campaigns is the email marketing arm of the Zoho suite, offering list management, campaign creation, automation, and deep integration with Zoho CRM and other Zoho products. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/ZohoCampaigns.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Add subscriber to mailing list |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Add subscriber to mailing list
- Update subscriber fields
- Unsubscribe contact

## Authentication

- **Type**: OAuth 2.0
- **Where to get credentials**: Zoho developer console (api-console.zoho.com) — create a server-based application to obtain OAuth credentials
- **Required in Bit Integrations**: OAuth 2.0 authorization flow (authorize via Bit Integrations UI)

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Contact Email | Subscriber email address | Required |
| First Name | Subscriber first name | Optional |
| Last Name | Subscriber last name | Optional |
| Phone | Subscriber phone number | Optional |
| List Key | The Zoho Campaigns mailing list key to add the subscriber to | Required |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Add subscriber to Zoho Campaigns mailing list
**Key fields mapped:** Contact Email, First Name, Last Name
**Use case:** Automatically grow your email list when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Add buyer to Zoho Campaigns customer mailing list
**Key fields mapped:** Contact Email, First Name, Order amount (as custom field if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Add to Zoho Campaigns mailing list for enrollment-based nurture
**Key fields mapped:** Contact Email, First Name, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select Zoho Campaigns as the action.
5. Connect your Zoho Campaigns account using OAuth 2.0 authorization.
6. Select the mailing list to add subscribers to.
7. Map the contact email field and any name fields.
8. Save and test with a real form submission.

## When to Use

- Growing an email list from WordPress form submissions automatically
- Syncing WordPress leads with the broader Zoho ecosystem (CRM, Campaigns)
- Segmenting new subscribers by lead source using mailing lists
- Syncing WooCommerce buyers to a customer email list
- Adding new members or course students to onboarding sequences
- Replacing manual CSV imports from WordPress to your email platform

## Related Integrations

- zoho-marketinghub.md
- activecampaign.md
- mailchimp.md
