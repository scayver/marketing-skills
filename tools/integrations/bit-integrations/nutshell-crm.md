# Nutshell CRM

Nutshell CRM is a user-friendly sales CRM and email marketing platform designed for small and mid-size B2B teams, combining contact management, pipeline tracking, and team collaboration tools. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Nutshell-CRM.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create People and Leads (opportunities) in Nutshell |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to Nutshell CRM fields |

## Action Events

- Create Person
- Create Lead (opportunity)

## Authentication

- **Type**: API Key
- **Where to get credentials**: Nutshell Settings > Integrations > API — generate and copy the API key
- **Required fields in Bit Integrations**: API Key, Account Email

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| name | Full name of the person | Required |
| email | Email address | Optional; recommended for deduplication |
| phone | Phone number | Optional |
| company_name | Associated company name | Optional; links to or creates an account |
| lead_source | Origin of the lead | Optional; e.g., Website, Referral |

## Common Workflow Recipes

### Recipe 1: Contact Form to Nutshell Person
**Trigger:** WPForms or Gravity Forms submission
**Action:** Create Person in Nutshell CRM
**Key fields mapped:** Name, Email, Phone, Company Name
**Use case:** Automatically add website contacts as Nutshell people so your B2B sales team can track and follow up without manual entry.

### Recipe 2: Demo Request to Nutshell Lead
**Trigger:** Elementor or Fluent Forms demo request form
**Action:** Create Lead in Nutshell CRM
**Key fields mapped:** Name, Email, Company Name, Lead Source = Website
**Use case:** Push demo requests into the Nutshell pipeline as open leads so your sales team can respond and move them to close.

### Recipe 3: Partner Inquiry to Nutshell Person and Lead
**Trigger:** Contact Form 7 partner inquiry submission
**Action:** Create Person and Create Lead in Nutshell CRM
**Key fields mapped:** Name, Email, Phone, Company Name, Lead Source = Partner
**Use case:** Capture partnership inquiries as both a contact record and an open pipeline lead in Nutshell for dual tracking.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select Nutshell CRM as the action.
5. Connect your Nutshell account using your API key and account email from Settings > Integrations > API.
6. Select the object type (Person or Lead) you want to create.
7. Map the fields from your trigger to Nutshell CRM fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- Your B2B sales team uses Nutshell and needs website inquiries to enter the CRM automatically
- You want demo or consultation requests to open deals in the Nutshell pipeline without manual input
- You need company-level account records created from B2B inquiry forms alongside person records
- You use Nutshell email campaigns and want web leads segmented by source for targeted outreach

## Related Integrations

- pipedrive.md
- salesflare.md
- capsulecrm.md
- companyhub.md
