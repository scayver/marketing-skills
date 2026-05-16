# OneHash CRM

OneHash CRM is an open-source, ERPNext-based CRM platform that combines lead management, sales pipeline, customer support, and ERP capabilities for startups and SMBs at low cost. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/OneHash-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create Leads, Contacts, and Opportunities in OneHash |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to OneHash fields |

## Action Events

- Create Lead
- Create Contact
- Create Opportunity

## Authentication

- **Type**: API Key + API Secret
- **Where to get credentials**: OneHash Settings > Integrations > API — generate an API key and API secret pair from your account
- **Required fields in Bit Integrations**: API Key, API Secret, OneHash Instance URL

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| lead_name | Full name of the lead | Required |
| email_id | Email address | Optional; used for deduplication |
| mobile_no | Mobile phone number | Optional |
| company_name | Associated company name | Optional |
| source | Lead source | Optional; e.g., Website, Campaign |

## Common Workflow Recipes

### Recipe 1: Contact Form to OneHash Lead
**Trigger:** WPForms or Gravity Forms submission
**Action:** Create Lead in OneHash
**Key fields mapped:** Lead Name, Email, Mobile Number, Company Name, Source = Website
**Use case:** Push every website inquiry directly into OneHash as a lead for your sales team to qualify and pursue.

### Recipe 2: Signup Form to OneHash Contact
**Trigger:** Elementor or Fluent Forms sign-up form
**Action:** Create Contact in OneHash
**Key fields mapped:** Lead Name, Email, Mobile Number, Company Name
**Use case:** Add new sign-ups from your website directly as OneHash contact records for pipeline and customer management.

### Recipe 3: Demo Request to OneHash Opportunity
**Trigger:** Gravity Forms demo request form
**Action:** Create Opportunity in OneHash
**Key fields mapped:** Lead Name, Email, Company Name, Source = Demo Request
**Use case:** Turn demo requests from your WordPress site into pipeline opportunities in OneHash for deal tracking and follow-up.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select OneHash as the action.
5. Connect your OneHash account using your API key, API secret, and OneHash instance URL from Settings > Integrations > API.
6. Select the object type (Lead, Contact, Opportunity) you want to create.
7. Map the fields from your trigger to OneHash fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- You use OneHash as a low-cost ERPNext CRM and want WordPress leads to flow in automatically
- You need leads, contacts, and opportunities created from different form types across your WordPress site
- You want an open-source CRM alternative connected to your WordPress marketing funnel
- You use OneHash across sales, support, and operations and want web leads entering the system automatically

## Related Integrations

- perfex-crm.md
- zoho-crm.md
- insightly.md
- flowlu.md
