# Zoho Bigin

Zoho Bigin is a pipeline-focused mini CRM built for small businesses, offering simple contact and deal management without the complexity of a full enterprise CRM. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/ZohoBigin.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create Contacts and Deals in Zoho Bigin pipelines |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to Zoho Bigin fields |

## Action Events

- Create Contact
- Create Deal in pipeline

## Authentication

- **Type**: OAuth 2.0
- **Where to get credentials**: Zoho Developer Console (api-console.zoho.com) — create a Server-based Application for Bigin scope, note Client ID and Client Secret
- **Required fields in Bit Integrations**: OAuth connection using Client ID and Client Secret from Zoho Developer Console

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| First_Name | Contact first name | Optional |
| Last_Name | Contact last name | Required |
| Email | Email address | Optional; recommended for deduplication |
| Phone | Phone number | Optional |
| Pipeline | Target pipeline name | Optional; defaults to primary pipeline |
| Stage | Pipeline stage name | Optional; defaults to first stage |

## Common Workflow Recipes

### Recipe 1: Contact Form to Bigin Contact
**Trigger:** WPForms or Elementor form submission
**Action:** Create Contact in Zoho Bigin
**Key fields mapped:** First Name, Last Name, Email, Phone
**Use case:** Automatically add website inquiries as Bigin contacts so small business owners never lose a lead.

### Recipe 2: Service Request to Bigin Deal
**Trigger:** Gravity Forms service request submission
**Action:** Create Deal in Zoho Bigin
**Key fields mapped:** First Name, Last Name, Email, Pipeline, Stage
**Use case:** Push service request submissions directly into the right Bigin pipeline stage for follow-up.

### Recipe 3: Lead Magnet Opt-In to Bigin Contact
**Trigger:** Fluent Forms opt-in form submission
**Action:** Create Contact in Zoho Bigin
**Key fields mapped:** First Name, Last Name, Email, Phone
**Use case:** Capture lead magnet subscribers as Bigin contacts to nurture them through the sales pipeline.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select Zoho Bigin as the action.
5. Connect your Zoho Bigin account using OAuth 2.0 via your Zoho Developer Console credentials.
6. Select the object type (Contact, Deal) you want to create, and choose the target pipeline if applicable.
7. Map the fields from your trigger to Zoho Bigin fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- You run a small business and want a simple pipeline CRM without Zoho CRM's full complexity
- You want website leads to land directly in your Bigin contact list and pipeline
- You already use Zoho products and want Bigin as a lightweight companion to Zoho Books or Zoho Mail
- You need basic deal tracking from WordPress form submissions without a complex CRM setup

## Related Integrations

- zoho-crm.md
- clinchpad.md
- capsulecrm.md
- nutshell-crm.md
