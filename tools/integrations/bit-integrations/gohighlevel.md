# GoHighLevel

GoHighLevel (GHL) is an all-in-one marketing and CRM platform built for agencies, combining lead capture, CRM pipelines, email and SMS automation, booking, and white-label client portals in a single system. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Go-High-Level.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create Contacts, add to workflow, add tags, and add to pipeline opportunity |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to GoHighLevel fields |

## Action Events

- Create Contact
- Add to workflow
- Add tag
- Add to pipeline opportunity

## Authentication

- **Type**: API Key
- **Where to get credentials**: GoHighLevel Settings > Integrations > API Keys — generate a key, or use a Private Integration key for sub-account access
- **Required fields in Bit Integrations**: API Key (or Private Integration Key for sub-accounts)

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| firstName | Contact first name | Optional |
| lastName | Contact last name | Optional |
| email | Email address | Required; used as unique identifier |
| phone | Phone number | Optional; include country code |
| tags | Tags to apply to the contact | Optional; comma-separated list |
| pipelineId | Target pipeline ID | Optional; for Opportunity records |
| stageId | Pipeline stage ID | Optional; for Opportunity records |
| source | Lead source label | Optional; e.g., Website, Facebook |

## Common Workflow Recipes

### Recipe 1: Contact Form to GoHighLevel Contact with Tag
**Trigger:** WPForms or Elementor form submission
**Action:** Create Contact and add tag in GoHighLevel
**Key fields mapped:** First Name, Last Name, Email, Phone, Tag = WebsiteLead, Source = Website
**Use case:** Automatically add website contacts to GoHighLevel with a source tag so agency workflows can trigger follow-up automations immediately.

### Recipe 2: Lead Magnet Download to GoHighLevel Workflow
**Trigger:** Gravity Forms lead magnet opt-in
**Action:** Create Contact and add to workflow in GoHighLevel
**Key fields mapped:** First Name, Last Name, Email, Phone, Workflow ID
**Use case:** Enroll lead magnet downloaders directly into a GoHighLevel nurture workflow so automated SMS and email follow-up begins right away.

### Recipe 3: Demo Request to GoHighLevel Pipeline Opportunity
**Trigger:** Fluent Forms or WPForms demo request form
**Action:** Create Contact and add to pipeline opportunity in GoHighLevel
**Key fields mapped:** First Name, Last Name, Email, Phone, Pipeline ID, Stage ID
**Use case:** Push demo requests into a GoHighLevel sales pipeline so agency reps can track and close leads from one platform.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select GoHighLevel as the action.
5. Connect your GoHighLevel account using your API key from Settings > Integrations > API Keys.
6. Select the action (Create Contact, Add to Workflow, Add Tag, Add to Pipeline) you want to perform.
7. Map the fields from your trigger to GoHighLevel fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- You run a marketing agency using GoHighLevel and want client website leads flowing into GHL automatically
- You want website form submissions to trigger GoHighLevel automation workflows for email and SMS follow-up
- You need WordPress leads to enter a GoHighLevel pipeline as opportunities for deal tracking
- You manage multiple client sub-accounts in GoHighLevel and want separate WordPress sites feeding each one

## Related Integrations

- keap.md
- hubspot.md
- fluentcrm.md
- salesmate.md
