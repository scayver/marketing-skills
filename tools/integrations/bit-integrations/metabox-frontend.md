# Metabox Frontend Submission

Metabox Frontend Submission is an extension for the Meta Box WordPress plugin that allows users to submit and edit custom post type data from the front end of a WordPress site. Available as a Trigger in the Bit Integrations WordPress plugin — fires a workflow when a frontend form is submitted.

**Role:** Trigger
**Free Tier:** No (requires Bit Integrations Pro)
**Category:** WordPress Core and Utility
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Metabox-Frontend.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires when a frontend Meta Box form is submitted (requires Pro) |
| As Action | — | Not available as an action |
| Free Tier | — | Requires Bit Integrations Pro |
| Field Mapping | ✓ | All Meta Box custom fields available for mapping to action platforms |

## Trigger Events

- Frontend form submitted (user submits a Meta Box frontend form)
- Post created via frontend submission
- Post updated via frontend submission

## What Data Gets Passed

When a Meta Box frontend form is submitted, Bit Integrations passes the following to connected action platforms:

- All Meta Box custom field values (text, number, date, select, checkbox, image, file, repeater fields)
- Post title and post content
- Post type and post status
- Submitted user ID and user email
- Submission timestamp

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Meta Box plugin plus MB Frontend Submission extension must be installed and active on the same WordPress site
- **Note**: No external API key required

## Common Workflow Recipes

### Recipe 1: Frontend Submission to CRM
**Trigger:** Meta Box frontend form submitted
**Action:** Create or update contact in HubSpot, Zoho CRM, or Pipedrive
**Use case:** Capture user-submitted data from a front-end directory or listing form directly into your CRM

### Recipe 2: Frontend Submission to Google Sheets
**Trigger:** Meta Box frontend form submitted
**Action:** Append row to Google Sheets
**Use case:** Log all frontend submissions to a spreadsheet for team review and reporting

### Recipe 3: Frontend Submission to Email Notification
**Trigger:** Meta Box frontend form submitted
**Action:** Send Slack message or email notification
**Use case:** Alert your team when a new post is submitted from the front end for moderation or review

## Setup Steps

1. Install Meta Box and the MB Frontend Submission extension on your WordPress site.
2. Install Bit Integrations Pro on the same site.
3. Go to Bit Integrations > Create Integration.
4. Select Metabox Frontend Submission as the trigger.
5. Select the specific frontend form or post type you want to monitor.
6. Select your action platform (HubSpot, Google Sheets, Slack, etc.).
7. Map the Meta Box custom fields to the destination platform fields.
8. Save and test by submitting a real frontend form entry.

## When to Use

- Running a front-end submission directory (jobs board, listings, classifieds) powered by Meta Box
- Automating CRM contact creation from user-submitted profile or listing forms
- Logging custom post type submissions to a spreadsheet for moderation
- Triggering email or Slack notifications when users submit or update posts from the front end
- Connecting Meta Box front-end data entry to external marketing or operations tools

## Related Integrations

- post-creation.md
- wp-post.md
- acpt.md
- advanced-custom-fields.md
- google-sheets.md
