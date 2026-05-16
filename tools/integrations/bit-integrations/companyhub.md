# CompanyHub CRM

CompanyHub is a customizable CRM platform that lets businesses model their sales process with custom objects, fields, and automated follow-ups without coding. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/CompanyHub1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create Leads, Companies, and Deals in CompanyHub |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to CompanyHub fields |

## Action Events

- Create Lead
- Create Company
- Create Deal

## Authentication

- **Type**: API Key
- **Where to get credentials**: CompanyHub account settings > API — generate and copy the API key
- **Required fields in Bit Integrations**: API Key

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| name | Full name of the lead or contact | Required |
| email | Email address | Optional; used for deduplication |
| phone | Phone number | Optional |
| company | Associated company name | Optional |
| lead_source | Origin of the lead | Optional; e.g., Web, Referral |

## Common Workflow Recipes

### Recipe 1: Contact Form to CompanyHub Lead
**Trigger:** WPForms or Gravity Forms submission
**Action:** Create Lead in CompanyHub
**Key fields mapped:** Name, Email, Phone, Company, Lead Source = Web
**Use case:** Automatically add website inquiries as CompanyHub leads so your sales team can track and follow up without manual entry.

### Recipe 2: Partner Inquiry to CompanyHub Company
**Trigger:** Elementor partner inquiry form
**Action:** Create Company in CompanyHub
**Key fields mapped:** Company Name, Email, Phone, Lead Source
**Use case:** Add partner or B2B inquiry submissions directly as Company records in CompanyHub for account-level tracking.

### Recipe 3: Quote Request to CompanyHub Deal
**Trigger:** Gravity Forms quote request submission
**Action:** Create Deal in CompanyHub
**Key fields mapped:** Name, Email, Company, Deal Name, Value
**Use case:** Push pricing and quote requests into CompanyHub as deals so your team can track them through the sales process.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select CompanyHub CRM as the action.
5. Connect your CompanyHub account using your API key from CompanyHub account settings.
6. Select the object type (Lead, Company, Deal) you want to create.
7. Map the fields from your trigger to CompanyHub fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- You use CompanyHub as your CRM and need website leads to enter it automatically
- You want to map custom form fields to custom CompanyHub objects or fields
- You need company-level records created from B2B inquiry forms on your website
- You track deals in CompanyHub and want pricing requests to feed the pipeline directly

## Related Integrations

- hubspot.md
- salesmate.md
- nutshell-crm.md
- freshsales.md
