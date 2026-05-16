# Airtable

Airtable is a flexible database and spreadsheet hybrid for organizing, tracking, and collaborating on structured data. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Project Management and Productivity
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Airtable1-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create or update records in Airtable |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to any Airtable field in the selected base and table |

## Action Events

- Create record
- Update record

## Authentication

- **Type**: API Key (Personal Access Token)
- **Required**: Personal Access Token from airtable.com/create/tokens with scopes for data.records:write and schema.bases:read. Enter token, base ID, and table name in Bit Integrations.

## Common Workflow Recipes

### Recipe 1: Lead Form to Airtable CRM Base
**Trigger:** WordPress lead form submission
**Action:** Create a new Airtable record with lead name, email, phone, and source
**Use case:** Build and populate an Airtable-based CRM automatically from WordPress form leads

### Recipe 2: Event Registration to Attendee Table
**Trigger:** Event registration form submission
**Action:** Create an Airtable record in the attendee tracking table
**Use case:** Maintain a live, filtered, and viewable event attendee database in Airtable

### Recipe 3: WooCommerce Order to Order Log Table
**Trigger:** WooCommerce order completed
**Action:** Append order details as a new Airtable record in an orders table
**Use case:** Keep an Airtable order log for reporting, filtering, and cross-team visibility

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Airtable as the Action.
5. Go to airtable.com/create/tokens and create a Personal Access Token with appropriate scopes.
6. Enter the token in Bit Integrations, then select the target base and table.
7. Map form fields to Airtable field names.
8. Save and test.

## When to Use

- When using Airtable as a CRM, database, or tracker and wanting automatic data entry from WordPress
- When teams need a structured, filterable view of form submissions or WooCommerce orders
- When building internal dashboards or reports from WordPress data stored in Airtable

## Related Integrations

- notion.md
- google-sheets.md
- clickup.md
- zoho-sheet.md
