# ClinchPad CRM

ClinchPad is a simple pipeline-focused CRM designed for small teams and freelancers, offering visual deal tracking across customizable pipeline stages without complex setup. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bitapps.pro/wp-content/uploads/2023/07/clinchpad-1.png`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create Leads in ClinchPad pipelines |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to ClinchPad fields |

## Action Events

- Create Lead

## Authentication

- **Type**: API Key
- **Where to get credentials**: ClinchPad account settings > API — generate and copy the API key
- **Required fields in Bit Integrations**: API Key

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| name | Full name of the lead | Required |
| email | Email address | Optional; used for contact detail |
| phone | Phone number | Optional |
| pipeline_id | ID of the target pipeline | Optional; defaults to primary pipeline |
| stage_id | ID of the target pipeline stage | Optional; defaults to first stage |

## Common Workflow Recipes

### Recipe 1: Contact Form to ClinchPad Lead
**Trigger:** WPForms or Contact Form 7 submission
**Action:** Create Lead in ClinchPad
**Key fields mapped:** Name, Email, Phone, Pipeline, Stage
**Use case:** Automatically add website inquiries as ClinchPad leads so freelancers and small teams can track deals visually.

### Recipe 2: Service Request to ClinchPad Pipeline Stage
**Trigger:** Gravity Forms service request submission
**Action:** Create Lead in specific ClinchPad pipeline and stage
**Key fields mapped:** Name, Email, Phone, Pipeline ID, Stage ID
**Use case:** Route service requests to the correct ClinchPad pipeline stage based on which service form was submitted.

### Recipe 3: Free Quote Request to ClinchPad Lead
**Trigger:** Elementor quote request form
**Action:** Create Lead in ClinchPad
**Key fields mapped:** Name, Email, Phone
**Use case:** Capture quote requests from your website as ClinchPad leads so your team can track quotes through to closure.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select ClinchPad as the action.
5. Connect your ClinchPad account using your API key from ClinchPad account settings.
6. Select the target pipeline and stage where new leads should be placed.
7. Map the fields from your trigger to ClinchPad fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- You use ClinchPad as a lightweight pipeline tracker and want website leads entering it automatically
- You are a freelancer or small team that needs simple deal tracking without a complex CRM
- You want different inquiry forms to route leads into different ClinchPad pipelines
- You need a no-frills way to ensure every website lead is tracked through to closure

## Related Integrations

- zoho-bigin.md
- capsulecrm.md
- nutshell-crm.md
- pipedrive.md
