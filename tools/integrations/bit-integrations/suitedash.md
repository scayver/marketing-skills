# SuiteDash

SuiteDash is an all-in-one business platform combining CRM, client portals, project management, invoicing, scheduling, and white-label branding for agencies and service businesses. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/SuiteDash.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create Contacts, assign to team, and add to projects |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to SuiteDash fields |

## Action Events

- Create Contact
- Assign contact to team
- Add to project

## Authentication

- **Type**: API Key
- **Where to get credentials**: SuiteDash Settings > API — generate and copy the API key from your account dashboard
- **Required fields in Bit Integrations**: API Key

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| first_name | Contact first name | Optional |
| last_name | Contact last name | Required |
| email | Email address | Required; used as unique identifier |
| phone | Phone number | Optional |
| company | Associated company name | Optional |

## Common Workflow Recipes

### Recipe 1: Contact Form to SuiteDash Contact
**Trigger:** WPForms or Gravity Forms submission
**Action:** Create Contact in SuiteDash
**Key fields mapped:** First Name, Last Name, Email, Phone, Company
**Use case:** Automatically add website inquiries as SuiteDash contacts so agency owners can manage communication and billing from one platform.

### Recipe 2: Client Onboarding Form to SuiteDash Contact and Project
**Trigger:** Gravity Forms or Fluent Forms onboarding form
**Action:** Create Contact and add to project in SuiteDash
**Key fields mapped:** First Name, Last Name, Email, Phone, Company, Project Name
**Use case:** When a new client completes an onboarding form, automatically create their contact record and add them to their project in SuiteDash.

### Recipe 3: Partnership Inquiry to SuiteDash Contact with Team Assignment
**Trigger:** Elementor partnership inquiry form
**Action:** Create Contact and assign to team in SuiteDash
**Key fields mapped:** First Name, Last Name, Email, Phone, Company, Team
**Use case:** Route partnership inquiries to the right internal team in SuiteDash automatically based on the inquiry type.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select SuiteDash as the action.
5. Connect your SuiteDash account using your API key from SuiteDash Settings > API.
6. Select the action (Create Contact, Assign to Team, Add to Project) and configure the target.
7. Map the fields from your trigger to SuiteDash fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- You use SuiteDash as your white-label client portal and want new contacts added automatically from WordPress
- You need client onboarding forms to create both a contact record and a project in SuiteDash simultaneously
- You want team routing to happen automatically when different inquiry types come in from your website
- You run an agency that manages billing, projects, and client communication through SuiteDash

## Related Integrations

- agiled-crm.md
- flowlu.md
- moxiecrm.md
- propovoice-crm.md
