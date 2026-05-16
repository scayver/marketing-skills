# Zoho CRM

Zoho CRM is a feature-rich customer relationship management platform offering sales automation, analytics, and multichannel communication for businesses of all sizes. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/ZohoCRM.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create Leads, Contacts, and Deals in Zoho CRM |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to Zoho CRM fields |

## Action Events

- Create Lead
- Create Contact
- Create Deal

## Authentication

- **Type**: OAuth 2.0
- **Where to get credentials**: Zoho Developer Console (api-console.zoho.com) — create a Server-based Application, note Client ID and Client Secret, then authorize via Bit Integrations OAuth flow
- **Required fields in Bit Integrations**: OAuth connection using Client ID and Client Secret from Zoho Developer Console

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| First_Name | Contact or lead first name | Optional |
| Last_Name | Contact or lead last name | Required |
| Email | Email address | Optional; recommended for deduplication |
| Phone | Phone number | Optional |
| Lead_Source | Origin of the lead | Optional; picklist value |
| Company | Company or account name | Required for Lead module |
| Description | Additional notes or comments | Optional |

## Common Workflow Recipes

### Recipe 1: Contact Form to Zoho CRM Lead
**Trigger:** WPForms or Gravity Forms submission
**Action:** Create Lead in Zoho CRM
**Key fields mapped:** First Name, Last Name, Email, Phone, Company, Lead Source = Web
**Use case:** Push every website inquiry directly into the Zoho CRM Leads module for sales team follow-up.

### Recipe 2: WooCommerce Customer to Zoho CRM Contact
**Trigger:** WooCommerce order completed
**Action:** Create Contact in Zoho CRM
**Key fields mapped:** First Name, Last Name, Email, Phone, Company
**Use case:** Automatically create a Zoho CRM contact record when a customer places their first order.

### Recipe 3: Webinar Registration to Zoho CRM Deal
**Trigger:** Gravity Forms webinar registration
**Action:** Create Deal in Zoho CRM
**Key fields mapped:** First Name, Last Name, Email, Deal Name, Stage
**Use case:** Convert event or webinar sign-ups into CRM deals to track post-event sales opportunities.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select Zoho CRM as the action.
5. Connect your Zoho CRM account using OAuth 2.0 via your Zoho Developer Console credentials.
6. Select the Zoho CRM module (Lead, Contact, Deal) you want to write to.
7. Map the fields from your trigger to Zoho CRM fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- Your team works in Zoho CRM and you need WordPress form submissions to sync automatically
- You want every website lead captured in Zoho CRM without copy-pasting data manually
- You use multiple Zoho apps together (Books, Campaigns, Desk) and want CRM as the central contact hub
- You need to track deal pipeline activity that originates from your WordPress site

## Related Integrations

- zoho-bigin.md
- hubspot.md
- salesforce.md
- flowlu.md
