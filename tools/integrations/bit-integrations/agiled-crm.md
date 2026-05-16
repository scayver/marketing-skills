# Agiled CRM

Agiled is an all-in-one business management platform that combines CRM, project management, invoicing, contracts, and HR tools for agencies and freelancers. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Agiled-CRM.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create Contacts and Leads in Agiled |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to Agiled fields |

## Action Events

- Create Contact
- Create Lead

## Authentication

- **Type**: API Key
- **Where to get credentials**: Agiled Settings > API — generate and copy the API key from your account
- **Required fields in Bit Integrations**: API Key

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| name | Full name of the contact or lead | Required |
| email | Email address | Required; used as unique identifier |
| phone | Phone number | Optional |
| company | Associated company name | Optional |

## Common Workflow Recipes

### Recipe 1: Contact Form to Agiled Lead
**Trigger:** WPForms or Contact Form 7 submission
**Action:** Create Lead in Agiled
**Key fields mapped:** Name, Email, Phone, Company
**Use case:** Automatically push website inquiries into Agiled as leads so agency owners can track prospects alongside their projects and invoices.

### Recipe 2: Client Intake Form to Agiled Contact
**Trigger:** Gravity Forms client intake submission
**Action:** Create Contact in Agiled
**Key fields mapped:** Name, Email, Phone, Company
**Use case:** Add new client details from your onboarding form directly to Agiled contacts so billing and project management is ready from day one.

### Recipe 3: Free Consultation Request to Agiled Lead
**Trigger:** Elementor consultation booking form
**Action:** Create Lead in Agiled
**Key fields mapped:** Name, Email, Phone, Company
**Use case:** Capture consultation requests from your website as Agiled leads so you never lose track of potential clients.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select Agiled CRM as the action.
5. Connect your Agiled account using your API key from Agiled Settings > API.
6. Select the object type (Contact or Lead) you want to create.
7. Map the fields from your trigger to Agiled fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- You run an agency or freelance business and manage clients, projects, and invoices in Agiled
- You want website inquiry forms to feed directly into Agiled without switching tools
- You need new client contacts created in Agiled automatically when onboarding forms are submitted
- You want lead capture from your WordPress site connected to your all-in-one Agiled workspace

## Related Integrations

- suitedash.md
- flowlu.md
- moxiecrm.md
- propovoice-crm.md
