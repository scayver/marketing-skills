# Notion

Notion is an all-in-one workspace for notes, databases, wikis, and project management. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Project Management and Productivity
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Notion.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create database pages in Notion |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to any Notion database property |

## Action Events

- Create database page (add a new row/entry to a Notion database)

## Authentication

- **Type**: Internal Integration Token
- **Required**: Create an internal integration at notion.so/my-integrations and copy the token. Share the target Notion database with the integration. Enter the token in Bit Integrations and select the target database.

## Common Workflow Recipes

### Recipe 1: Lead Form to Notion CRM Database
**Trigger:** WordPress lead form submission
**Action:** Create a new page in a Notion CRM database with contact details
**Use case:** Use a Notion database as a lightweight CRM, populated automatically from WordPress forms

### Recipe 2: Job Application to Notion Applicant Tracker
**Trigger:** Job application form submission
**Action:** Create a Notion database entry with applicant name, email, and application details
**Use case:** Manage hiring pipelines in Notion with automatic population from application forms

### Recipe 3: Event Registration to Notion Attendee List
**Trigger:** Event registration form submission
**Action:** Add a new row to a Notion attendee tracking database
**Use case:** Maintain a live attendee list in Notion updated automatically as registrations come in

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Notion as the Action.
5. At notion.so/my-integrations, create an internal integration and copy the token.
6. Share your target Notion database with the integration (Share > Invite > select integration).
7. Enter the token in Bit Integrations and select the target database.
8. Map fields to database properties: Title, Email, Phone, Date, Status, Number, Select, etc.
9. Save and test.

## When to Use

- When your team uses Notion databases as a CRM, tracker, or data repository
- When you want form submissions or WordPress events to automatically populate a Notion database
- When building lightweight project or applicant tracking in Notion from WordPress data sources

## Related Integrations

- airtable.md
- google-sheets.md
- clickup.md
- asana.md
