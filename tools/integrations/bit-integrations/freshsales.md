# Freshsales

Freshsales is a CRM platform by Freshworks that combines AI-powered contact management, deal tracking, and built-in phone and email tools for sales teams. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Freshsales1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create Contacts, Leads, and Deals in Freshsales |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to Freshsales fields |

## Action Events

- Create Contact
- Create Lead
- Create Deal

## Authentication

- **Type**: API Key
- **Where to get credentials**: Freshsales Settings > API Settings — copy the API key listed under your profile
- **Required fields in Bit Integrations**: API Key, Freshsales Domain (your-domain.myfreshworks.com)

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| first_name | Contact first name | Optional |
| last_name | Contact last name | Required |
| email | Email address | Required; used as unique identifier |
| mobile_number | Mobile phone number | Optional |
| company_name | Associated company name | Optional |
| lead_source | Source of the lead | Optional; picklist value (e.g., Web, Referral) |

## Common Workflow Recipes

### Recipe 1: Contact Form to Freshsales Lead
**Trigger:** WPForms or Gravity Forms submission
**Action:** Create Lead in Freshsales
**Key fields mapped:** First Name, Last Name, Email, Mobile Number, Company Name, Lead Source = Web
**Use case:** Automatically route every website inquiry into Freshsales as a new lead for your sales team.

### Recipe 2: Free Trial Sign-Up to Freshsales Contact
**Trigger:** Elementor or Fluent Forms free trial form
**Action:** Create Contact in Freshsales
**Key fields mapped:** First Name, Last Name, Email, Company Name
**Use case:** Add trial sign-ups as Freshsales contacts so your team can reach out and convert them to paid customers.

### Recipe 3: Service Inquiry to Freshsales Deal
**Trigger:** Gravity Forms service inquiry submission
**Action:** Create Deal in Freshsales
**Key fields mapped:** First Name, Last Name, Email, Company, Deal Name, Stage
**Use case:** Push high-intent service inquiries directly into the Freshsales pipeline as open deals.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select Freshsales as the action.
5. Connect your Freshsales account using your API key from Settings > API Settings, along with your Freshsales domain.
6. Select the object type (Contact, Lead, Deal) you want to create.
7. Map the fields from your trigger to Freshsales fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- Your sales team uses Freshsales and needs website leads captured automatically
- You want to avoid duplicate lead entry when your site receives inquiries
- You use Freshworks products (Freshdesk, Freshservice) and want CRM data centralized in Freshsales
- You need deal records created from high-value form submissions like quote or demo requests

## Related Integrations

- hubspot.md
- copper-crm.md
- salesmate.md
- insightly.md
