# Perfex CRM

Perfex CRM is a self-hosted, open-source CRM and business management system that businesses can install on their own server, offering leads, customers, invoices, projects, and support tickets management. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Perfex-CRM.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create Leads, Customers, and Contacts in Perfex CRM |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to Perfex CRM fields |

## Action Events

- Create Lead
- Create Customer
- Create Contact

## Authentication

- **Type**: API Key
- **Where to get credentials**: Perfex CRM Settings > API — generate and copy the API key from your self-hosted Perfex installation
- **Required fields in Bit Integrations**: API Key, Perfex CRM Instance URL

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| firstname | Contact or lead first name | Optional |
| lastname | Contact or lead last name | Required |
| email | Email address | Optional; used for deduplication |
| phonenumber | Phone number | Optional |
| company | Company or customer name | Required for Customer records |
| lead_source | Origin of the lead | Optional; picklist value |

## Common Workflow Recipes

### Recipe 1: Contact Form to Perfex CRM Lead
**Trigger:** WPForms or Gravity Forms submission
**Action:** Create Lead in Perfex CRM
**Key fields mapped:** First Name, Last Name, Email, Phone, Company, Lead Source = Website
**Use case:** Automatically push website inquiries into Perfex CRM as leads so your team can track and follow up without manual entry.

### Recipe 2: Client Intake Form to Perfex Customer
**Trigger:** Gravity Forms or Fluent Forms client intake submission
**Action:** Create Customer in Perfex CRM
**Key fields mapped:** First Name, Last Name, Email, Phone, Company
**Use case:** Add new client details from your WordPress onboarding form directly as a Perfex customer record ready for invoicing and project management.

### Recipe 3: Service Request to Perfex CRM Contact
**Trigger:** Elementor service request form
**Action:** Create Contact in Perfex CRM
**Key fields mapped:** First Name, Last Name, Email, Phone, Company
**Use case:** Add service requesters as Perfex contacts so support tickets and follow-up communication can be linked to their record.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select Perfex CRM as the action.
5. Connect your Perfex CRM instance using your API key and your self-hosted Perfex instance URL.
6. Select the object type (Lead, Customer, Contact) you want to create.
7. Map the fields from your trigger to Perfex CRM fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- You use a self-hosted Perfex CRM and want your WordPress site to feed leads into it automatically
- You want new client onboarding forms to create customer records in Perfex ready for invoicing
- You need contact records in Perfex linked to service requests from your WordPress site
- You prefer self-hosted open-source tools and want tight integration between your WordPress site and Perfex

## Related Integrations

- onehash.md
- jetpack-crm.md
- propovoice-crm.md
- insightly.md
