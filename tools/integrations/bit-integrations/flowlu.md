# Flowlu

Flowlu is a business management platform that combines project management, CRM, invoicing, and collaboration tools in one workspace for agencies, freelancers, and growing teams. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Flowlu1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create Contacts, Leads, and Deals in Flowlu |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to Flowlu fields |

## Action Events

- Create Contact
- Create Lead
- Create Deal

## Authentication

- **Type**: API Key
- **Where to get credentials**: Flowlu account Settings > API — generate and copy the API key
- **Required fields in Bit Integrations**: API Key

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| name | Full name of the contact or lead | Required |
| email | Email address | Optional; used for deduplication |
| phone | Phone number | Optional |
| company_id | ID of the associated company | Optional; must exist in Flowlu |
| source_id | Lead source ID | Optional; must match a Flowlu source |

## Common Workflow Recipes

### Recipe 1: Contact Form to Flowlu Lead
**Trigger:** WPForms or Gravity Forms submission
**Action:** Create Lead in Flowlu
**Key fields mapped:** Name, Email, Phone, Source
**Use case:** Automatically push website inquiries into Flowlu as leads so your team can track and convert them alongside projects and invoices.

### Recipe 2: Client Onboarding Form to Flowlu Contact
**Trigger:** Fluent Forms or Elementor onboarding form
**Action:** Create Contact in Flowlu
**Key fields mapped:** Name, Email, Phone, Company
**Use case:** Add new client details from your onboarding form as Flowlu contacts so you can immediately link them to projects and billing.

### Recipe 3: Quote Request to Flowlu Deal
**Trigger:** Gravity Forms quote request submission
**Action:** Create Deal in Flowlu
**Key fields mapped:** Name, Email, Phone, Deal Name, Source
**Use case:** Convert quote requests from your WordPress site into Flowlu deals so your team can manage pricing and project scope in one place.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select Flowlu as the action.
5. Connect your Flowlu account using your API key from Flowlu Settings > API.
6. Select the object type (Contact, Lead, Deal) you want to create.
7. Map the fields from your trigger to Flowlu fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- You use Flowlu for project management and CRM and need website leads entering the system automatically
- You want client onboarding forms to create Flowlu contacts ready for project and invoice linking
- You need deals created in Flowlu from quote requests so your team can track revenue alongside project delivery
- You prefer an all-in-one workspace and want your WordPress site as the primary lead capture point

## Related Integrations

- insightly.md
- agiled-crm.md
- suitedash.md
- onehash.md
