# Salesforce

Salesforce is the world's leading enterprise CRM platform, providing tools for sales, service, marketing, and analytics across teams of all sizes. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Salesforce-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create Leads, Contacts, Opportunities; update existing records |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to Salesforce fields |

## Action Events

- Create Lead
- Create Contact
- Create Opportunity
- Update record

## Authentication

- **Type**: OAuth 2.0
- **Where to get credentials**: Salesforce Setup > App Manager > New Connected App — enable OAuth, set callback URL, and note Consumer Key and Secret
- **Required fields in Bit Integrations**: OAuth connection via Connected App (Consumer Key, Consumer Secret, environment URL)

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| FirstName | Lead or contact first name | Optional |
| LastName | Lead or contact last name | Required |
| Email | Email address | Required; used as unique identifier |
| Phone | Phone number | Optional |
| Company | Company or account name | Required for Lead object |
| LeadSource | Origin of the lead | Optional; picklist value (e.g., Web, Phone) |
| Status | Lead status | Optional; e.g., Open, Working, Converted |
| OwnerId | Assigned Salesforce user ID | Optional; defaults to connected user |

## Common Workflow Recipes

### Recipe 1: Contact Form to Salesforce Lead
**Trigger:** WPForms or Contact Form 7 submission
**Action:** Create Lead in Salesforce
**Key fields mapped:** FirstName, LastName, Email, Phone, Company, LeadSource = Web
**Use case:** Push every website inquiry directly into Salesforce as a new lead for your sales team to follow up.

### Recipe 2: WooCommerce Order to Salesforce Contact
**Trigger:** WooCommerce order completed
**Action:** Create Contact in Salesforce
**Key fields mapped:** FirstName, LastName, Email, Phone, Company
**Use case:** Automatically create or update Salesforce contact records when customers complete purchases.

### Recipe 3: Event Registration to Salesforce Opportunity
**Trigger:** Gravity Forms event registration submission
**Action:** Create Opportunity in Salesforce
**Key fields mapped:** FirstName, LastName, Email, Company, Opportunity Name, Stage
**Use case:** Turn webinar or event sign-ups into pipeline opportunities in Salesforce for post-event follow-up.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select Salesforce as the action.
5. Connect your Salesforce account using OAuth 2.0 via your Connected App credentials.
6. Select the Salesforce object (Lead, Contact, Opportunity) you want to write to.
7. Map the fields from your trigger to Salesforce fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- Your sales team works in Salesforce and you need WordPress form data to flow in automatically
- You want to create Salesforce Leads from every website inquiry without manual entry
- You need WooCommerce customer data synced to Salesforce Contacts
- You want to push event registrations or quote requests into the Salesforce pipeline as Opportunities

## Related Integrations

- hubspot.md
- pipedrive.md
- zoho-crm.md
- freshsales.md
