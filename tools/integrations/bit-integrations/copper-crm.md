# Copper CRM

Copper CRM is a Google Workspace-native CRM that lives inside Gmail and Google Calendar, designed for teams that run their business on Google apps. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** CRM
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/CopperCRM1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create People, Opportunities, and Companies in Copper |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map WordPress data fields to Copper fields |

## Action Events

- Create Person
- Create Opportunity
- Create Company

## Authentication

- **Type**: API Key + Email
- **Where to get credentials**: Copper Settings > Integrations > API Keys — generate an API key; also requires the email address of the Copper account
- **Required fields in Bit Integrations**: API Key, Account Email Address

## Field Mapping Reference

Common fields available for mapping when this integration is used as an Action:

| Field | Description | Notes |
|-------|-------------|-------|
| name | Full name of the person or company | Required |
| email | Email address | Optional; used for deduplication |
| phone | Phone number | Optional |
| company_name | Associated company name | Optional |
| pipeline_id | Target pipeline ID | Optional; for Opportunity records |
| pipeline_stage_id | Pipeline stage ID | Optional; for Opportunity records |

## Common Workflow Recipes

### Recipe 1: Contact Form to Copper Person
**Trigger:** WPForms or Contact Form 7 submission
**Action:** Create Person in Copper CRM
**Key fields mapped:** Name, Email, Phone, Company Name
**Use case:** Automatically add website contacts to Copper so Gmail-based sales teams can follow up without leaving their inbox.

### Recipe 2: Proposal Request to Copper Opportunity
**Trigger:** Gravity Forms proposal request submission
**Action:** Create Opportunity in Copper
**Key fields mapped:** Name, Email, Company Name, Pipeline, Stage
**Use case:** Push proposal requests into a Copper pipeline so your team can track them from inquiry to close inside Gmail.

### Recipe 3: Event Sign-Up to Copper Person and Company
**Trigger:** Elementor form event registration
**Action:** Create Person and Create Company in Copper
**Key fields mapped:** Name, Email, Phone, Company Name
**Use case:** Capture event attendees as both people and company records in Copper for post-event sales outreach.

## Setup Steps

1. Install Bit Integrations on your WordPress site (free version from wordpress.org/plugins/bit-integrations/).
2. Go to Bit Integrations > Create Integration in your WordPress dashboard.
3. Select your trigger source (the form plugin or WordPress event that starts the workflow).
4. Select Copper CRM as the action.
5. Connect your Copper account using your API key and account email address from Copper Settings > Integrations > API Keys.
6. Select the object type (Person, Opportunity, Company) you want to create.
7. Map the fields from your trigger to Copper fields.
8. Save and submit a test entry to verify data arrives correctly.

## When to Use

- Your team manages relationships primarily through Gmail and wants CRM data there automatically
- You want WordPress form submissions to appear in Copper without leaving the Google Workspace environment
- You need new leads to enter your Copper pipeline directly from your website
- You use Google Calendar heavily and want contact data available alongside meetings

## Related Integrations

- hubspot.md
- freshsales.md
- insightly.md
- nimble.md
