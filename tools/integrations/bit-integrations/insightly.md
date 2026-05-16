# Insightly

Insightly is a CRM and project management platform that helps teams manage contacts, leads, opportunities, and post-sale project delivery in one place. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Insightly-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create Contacts, Leads, Opportunities, and Projects in Insightly |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to Insightly fields |

## Action Events

- Create Contact
- Create Lead
- Create Opportunity
- Create Project

## Authentication

- **Type**: API Key
- **Where to get credentials**: Insightly User Settings (avatar menu) > API key — copy the key shown on the page
- **Required fields in Bit Integrations**: API Key

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| FIRST_NAME | Contact or lead first name | Optional |
| LAST_NAME | Contact or lead last name | Required |
| EMAIL_ADDRESS | Email address | Optional; recommended for deduplication |
| PHONE | Phone number | Optional |
| ORGANISATION_NAME | Associated organization name | Optional |

## Common Workflow Recipes

### Recipe 1: Contact Form to Insightly Lead
**Trigger:** WPForms or Contact Form 7 submission
**Action:** Create Lead in Insightly
**Key fields mapped:** First Name, Last Name, Email, Phone, Organization Name
**Use case:** Capture every website inquiry as an Insightly lead so your sales team can qualify and convert them.

### Recipe 2: Project Inquiry to Insightly Opportunity
**Trigger:** Gravity Forms project inquiry form
**Action:** Create Opportunity in Insightly
**Key fields mapped:** First Name, Last Name, Email, Opportunity Name, Stage
**Use case:** Turn project scope requests from your website into Insightly pipeline opportunities for tracking and quoting.

### Recipe 3: Client Onboarding Form to Insightly Project
**Trigger:** Fluent Forms client onboarding submission
**Action:** Create Project in Insightly
**Key fields mapped:** First Name, Last Name, Email, Project Name, Status
**Use case:** Automatically create a post-sale project record in Insightly when a new client submits an onboarding form.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select Insightly as the action.
5. Connect your Insightly account using your API key from User Settings > API key.
6. Select the object type (Contact, Lead, Opportunity, Project) you want to create.
7. Map the fields from your trigger to Insightly fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- You use Insightly to manage both sales opportunities and post-sale project delivery
- You want every website form submission to create a lead or contact automatically in Insightly
- You need project records created automatically when clients submit onboarding forms
- Your team needs a combined CRM and project management view starting from web lead capture

## Related Integrations

- hubspot.md
- freshsales.md
- copper-crm.md
- flowlu.md
