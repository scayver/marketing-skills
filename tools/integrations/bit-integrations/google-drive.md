# Google Drive

Google Drive is Google's cloud storage and file management platform for storing, sharing, and collaborating on files online. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Cloud Storage
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Google_Drive1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Upload files, create folders, and move files in Google Drive |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map file URL from form upload, folder ID, and file name |

## Action Events

- Upload file (from a URL to a specified Google Drive folder)
- Create folder
- Move file

## Authentication

- **Type**: OAuth 2.0
- **Required**: Authorize Bit Integrations via Google OAuth. Select the target Google Drive folder.

## Common Workflow Recipes

### Recipe 1: File Upload Form to Google Drive
**Trigger:** WordPress form submission with a file upload field
**Action:** Upload the submitted file to a specified Google Drive folder
**Use case:** Store form-uploaded documents (resumes, contracts, ID scans) directly in Google Drive for organized access

### Recipe 2: WooCommerce Order to Drive Invoice Folder
**Trigger:** WooCommerce order completed with attached invoice file
**Action:** Upload the invoice PDF to a Google Drive folder organized by date or customer
**Use case:** Automatically archive WooCommerce invoices in Google Drive for accounting

### Recipe 3: Media Submission Form to Drive Gallery
**Trigger:** WordPress media submission form
**Action:** Upload submitted images or videos to a Google Drive folder
**Use case:** Collect and organize media files from contributors or clients via a WordPress form

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger (form with file upload field).
4. Select Google Drive as the Action.
5. Click "Authorize" and sign in with your Google account.
6. Select the target Google Drive folder or create a new one.
7. Map fields: file URL (from form upload field), file name, folder ID.
8. Save and test.

## When to Use

- When WordPress forms with file uploads should store files directly in Google Drive
- When automating document archival from WooCommerce or form submissions
- When teams need uploaded files organized in Google Drive without manual downloading and uploading

## Related Integrations

- dropbox.md
- onedrive.md
- google-sheets.md
- google-contacts.md
