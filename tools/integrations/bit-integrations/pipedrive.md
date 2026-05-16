# Pipedrive

Pipedrive is a sales-focused CRM designed around visual pipeline management, helping sales teams track deals and activities through customizable stages. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/PipeDrive.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create persons, deals, organizations, notes, and activities |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to Pipedrive fields |

## Action Events

- Create person
- Create deal
- Create organization
- Add note
- Create activity

## Authentication

- **Type**: API Key
- **Where to get credentials**: Pipedrive Settings > Personal preferences > API — copy the personal API token
- **Required fields in Bit Integrations**: API Token

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| name | Full name of the person or deal title | Required |
| email | Email address | Optional for person; used for deduplication |
| phone | Phone number | Optional |
| org_name | Organization name to associate | Optional; creates org if not found |
| pipeline_id | Target pipeline ID | Optional; defaults to first pipeline |
| stage_id | Pipeline stage ID | Optional; defaults to first stage |
| value | Deal monetary value | Optional; numeric |
| currency | Deal currency code | Optional; e.g., USD, EUR |

## Common Workflow Recipes

### Recipe 1: Inquiry Form to Pipedrive Person and Deal
**Trigger:** WPForms or Gravity Forms submission
**Action:** Create person and create deal in Pipedrive
**Key fields mapped:** Name, Email, Phone, Organization, Deal Title, Pipeline, Stage
**Use case:** Automatically add website inquiries as new persons and open deals in your Pipedrive pipeline.

### Recipe 2: Quote Request to Pipedrive Deal with Value
**Trigger:** Gravity Forms quote request form submission
**Action:** Create deal in Pipedrive
**Key fields mapped:** Name, Email, Deal Value, Currency, Pipeline Stage
**Use case:** Push quote requests into Pipedrive with deal value pre-filled so sales reps can prioritize follow-up.

### Recipe 3: Contact Form to Pipedrive with Activity
**Trigger:** Contact Form 7 submission
**Action:** Create person and create activity
**Key fields mapped:** Name, Email, Phone, Activity Type = Call, Due Date
**Use case:** Automatically schedule a follow-up call activity in Pipedrive whenever someone submits a contact form.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select Pipedrive as the action.
5. Connect your Pipedrive account using your personal API token from Settings > Personal preferences > API.
6. Select the object type (Person, Deal, Organization, Note, Activity) you want to create.
7. Map the fields from your trigger to Pipedrive fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- You use Pipedrive as your primary sales CRM and need WordPress leads to flow in automatically
- You want every website inquiry to open a new deal in your sales pipeline without manual entry
- You need to create follow-up activities in Pipedrive based on form submissions
- You want to associate new contacts with specific organizations and pipeline stages automatically

## Related Integrations

- hubspot.md
- salesflare.md
- nutshell-crm.md
- salesmate.md
