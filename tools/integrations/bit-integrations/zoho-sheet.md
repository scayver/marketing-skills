# Zoho Sheet

Zoho Sheet is Zoho's cloud-based spreadsheet application for creating, editing, and sharing structured data online. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Project Management and Productivity
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Zoho-Sheet-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Append rows to a Zoho Sheet spreadsheet |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to spreadsheet column headers |

## Action Events

- Append row to spreadsheet

## Authentication

- **Type**: OAuth 2.0
- **Required**: Authorize Bit Integrations via Zoho OAuth. Select the target Zoho Sheet workbook and worksheet.

## Common Workflow Recipes

### Recipe 1: Lead Form to Zoho Sheet Lead Log
**Trigger:** WordPress form submission
**Action:** Append a new row with lead details to a Zoho Sheet spreadsheet
**Use case:** Maintain a shared Zoho Sheet lead log populated automatically from WordPress form submissions

### Recipe 2: WooCommerce Order to Sales Sheet
**Trigger:** WooCommerce order completed
**Action:** Append order data to a Zoho Sheet for tracking and reporting
**Use case:** Build a running WooCommerce sales log in Zoho Sheet for teams using Zoho tools

### Recipe 3: Event Registration to Attendee Sheet
**Trigger:** Event registration form submission
**Action:** Append registrant details to a Zoho Sheet attendee list
**Use case:** Track event sign-ups in a Zoho Sheet shared with coordinators

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Zoho Sheet as the Action.
5. Authorize Bit Integrations with your Zoho account.
6. Select the target workbook and worksheet.
7. Map form fields to the spreadsheet column headers.
8. Save and test.

## When to Use

- When your organization uses Zoho Suite and prefers Zoho Sheet over Google Sheets for data logging
- When form submissions or WooCommerce orders should populate a Zoho Sheet automatically
- When maintaining a shared Zoho Sheet database for team reporting or tracking

## Related Integrations

- google-sheets.md
- airtable.md
- zoho-flow.md
- zoho-crm.md
