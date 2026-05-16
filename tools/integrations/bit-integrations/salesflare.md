# Salesflare CRM

Salesflare is an automated CRM for B2B startups and small businesses that reduces manual data entry by pulling contact and company data from email, social profiles, and calendar automatically. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/SalesFlare.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create Contacts, Accounts (companies), and Opportunities in Salesflare |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to Salesflare fields |

## Action Events

- Create Contact
- Create Account (company)
- Create Opportunity

## Authentication

- **Type**: API Key
- **Where to get credentials**: Salesflare Settings > Integrations > API — generate and copy the API key
- **Required fields in Bit Integrations**: API Key

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| firstname | Contact first name | Optional |
| lastname | Contact last name | Required |
| email | Email address | Required; used for social enrichment and deduplication |
| phone_number | Phone number | Optional |
| account_name | Associated company or account name | Optional; creates or links account |

## Common Workflow Recipes

### Recipe 1: Contact Form to Salesflare Contact
**Trigger:** WPForms or Gravity Forms submission
**Action:** Create Contact in Salesflare
**Key fields mapped:** First Name, Last Name, Email, Phone, Account Name
**Use case:** Add website inquiries as Salesflare contacts and let Salesflare automatically enrich them with social and company data.

### Recipe 2: B2B Inquiry to Salesflare Account and Opportunity
**Trigger:** Gravity Forms or Elementor B2B inquiry form
**Action:** Create Account and Create Opportunity in Salesflare
**Key fields mapped:** First Name, Last Name, Email, Account Name, Opportunity Name
**Use case:** Push B2B inquiries into Salesflare as both a company account and an open opportunity for your sales team to pursue.

### Recipe 3: Demo Request to Salesflare Opportunity
**Trigger:** Fluent Forms demo request form
**Action:** Create Opportunity in Salesflare
**Key fields mapped:** First Name, Last Name, Email, Account Name, Opportunity Name
**Use case:** Convert demo requests into open Salesflare opportunities so your team can track them through the automated pipeline.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select Salesflare as the action.
5. Connect your Salesflare account using your API key from Settings > Integrations > API.
6. Select the object type (Contact, Account, Opportunity) you want to create.
7. Map the fields from your trigger to Salesflare fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- You use Salesflare as your B2B CRM and want website leads to enter it without manual data entry
- You want Salesflare's auto-enrichment to fill in company and social data for contacts captured on your WordPress site
- You need account-level company records created alongside contacts from B2B inquiry forms
- You want demo or trial requests to open Salesflare opportunities automatically for pipeline tracking

## Related Integrations

- pipedrive.md
- nutshell-crm.md
- hubspot.md
- salesmate.md
