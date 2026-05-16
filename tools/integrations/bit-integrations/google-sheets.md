# Google Sheets

Google Sheets is a cloud-based spreadsheet application for creating, editing, and collaborating on tabular data. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Project Management and Productivity
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Google_Sheets1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Append or update rows in Google Sheets |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to spreadsheet column headers |

## Action Events

- Append row (add a new row with form data)
- Update row (update an existing row matched by a value)

## Authentication

- **Type**: OAuth 2.0
- **Required**: Authorize Bit Integrations via Google OAuth. Select the target Google Sheet and worksheet tab.

## Common Workflow Recipes

### Recipe 1: Lead Form to Google Sheets Lead Log
**Trigger:** WordPress form submission
**Action:** Append a new row with name, email, phone, and submission date to a Google Sheet
**Use case:** Maintain a live, shareable lead log in Google Sheets populated automatically from every form submission

### Recipe 2: WooCommerce Order to Sales Spreadsheet
**Trigger:** WooCommerce order completed
**Action:** Append order details (product, amount, customer) to a sales tracking sheet
**Use case:** Build a running sales log in Google Sheets for reporting without exporting from WooCommerce

### Recipe 3: Event Registration to Attendee Sheet
**Trigger:** Event registration form submission
**Action:** Append registrant details to an attendee tracking Google Sheet
**Use case:** Share a live attendee list with event coordinators via Google Sheets

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Google Sheets as the Action.
5. Click "Authorize" and sign in with your Google account.
6. Select the target Google Spreadsheet and worksheet tab.
7. Map form fields to the corresponding column headers in the sheet.
8. Save and test.

## When to Use

- When you need a simple, shareable log of form submissions or orders in a spreadsheet
- When the team uses Google Sheets for reporting or tracking and data should flow in automatically
- When building lightweight dashboards or pivot tables from WordPress event data

## Related Integrations

- airtable.md
- notion.md
- google-drive.md
- zoho-sheet.md
