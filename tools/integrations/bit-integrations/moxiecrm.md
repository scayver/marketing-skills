# MoxieCRM

MoxieCRM is a lightweight CRM built specifically for solopreneurs and freelancers, combining client management, project tracking, time logging, and invoicing in a single simple interface. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/MoxieCRM.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create Contacts and Projects in MoxieCRM |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to MoxieCRM fields |

## Action Events

- Create Contact
- Create Project

## Authentication

- **Type**: API Key
- **Where to get credentials**: MoxieCRM account settings — locate and copy the API key from your profile or integrations section
- **Required fields in Bit Integrations**: API Key

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| name | Full name of the contact | Required |
| email | Email address | Required; used as unique identifier |
| phone | Phone number | Optional |
| company | Associated company name | Optional |

## Common Workflow Recipes

### Recipe 1: Inquiry Form to MoxieCRM Contact
**Trigger:** WPForms or Contact Form 7 submission
**Action:** Create Contact in MoxieCRM
**Key fields mapped:** Name, Email, Phone, Company
**Use case:** Automatically add website inquiries as MoxieCRM contacts so freelancers can track leads without switching tools.

### Recipe 2: Client Intake Form to MoxieCRM Project
**Trigger:** Gravity Forms client intake form
**Action:** Create Project in MoxieCRM
**Key fields mapped:** Name, Email, Company, Project Name
**Use case:** When a new client completes your intake form, automatically create a project in MoxieCRM ready for time tracking and invoicing.

### Recipe 3: Discovery Call Request to MoxieCRM Contact
**Trigger:** Elementor discovery call request form
**Action:** Create Contact in MoxieCRM
**Key fields mapped:** Name, Email, Phone
**Use case:** Capture discovery call requests from your website as MoxieCRM contacts so you can track prospects through your freelance pipeline.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select MoxieCRM as the action.
5. Connect your MoxieCRM account using your API key from MoxieCRM account settings.
6. Select the object type (Contact or Project) you want to create.
7. Map the fields from your trigger to MoxieCRM fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- You are a solopreneur or freelancer using MoxieCRM and want website leads captured automatically
- You want client intake forms to create ready-to-use project records in MoxieCRM
- You need contact creation automated so you can focus on client work instead of data entry
- You want discovery call requests or consultation bookings to flow directly into your MoxieCRM contact list

## Related Integrations

- agiled-crm.md
- propovoice-crm.md
- suitedash.md
- capsulecrm.md
