# Dropbox

Dropbox is a cloud storage and file synchronization service for storing and sharing files across devices and teams. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Cloud Storage
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Dropbox1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Upload files from WordPress to Dropbox |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map file URL, destination path, and file name |

## Action Events

- Upload file (from a URL to a specified Dropbox path)

## Authentication

- **Type**: OAuth 2.0
- **Required**: Authorize Bit Integrations via Dropbox OAuth. Specify the target Dropbox folder path.

## Common Workflow Recipes

### Recipe 1: Resume Upload Form to Dropbox HR Folder
**Trigger:** WordPress job application form with file upload
**Action:** Upload the submitted resume to a Dropbox HR folder
**Use case:** Automatically organize incoming resumes in Dropbox, accessible by the hiring team

### Recipe 2: Client File Submission to Dropbox Project Folder
**Trigger:** WordPress client file submission form
**Action:** Upload client files to a specific Dropbox project folder
**Use case:** Collect client deliverables via WordPress and organize them in Dropbox without manual handling

### Recipe 3: WooCommerce Order Documents to Dropbox Archive
**Trigger:** WooCommerce order completed with document attachment
**Action:** Upload order-related documents to a Dropbox archive folder
**Use case:** Maintain a Dropbox-based archive of order documents for accounting or compliance

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger (form with file upload field).
4. Select Dropbox as the Action.
5. Click "Authorize" and sign in with your Dropbox account.
6. Specify the target Dropbox folder path.
7. Map fields: file URL, destination path, file name.
8. Save and test.

## When to Use

- When WordPress form file uploads should be stored in Dropbox for team access
- When client or applicant files submitted via WordPress should be archived in Dropbox
- When Dropbox is the primary file storage platform and WordPress is the intake form

## Related Integrations

- google-drive.md
- onedrive.md
- pcloud.md
