# pCloud

pCloud is a secure European cloud storage service offering encrypted file storage and sharing with lifetime plan options. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Cloud Storage
**Icon:** `https://bitapps.pro/wp-content/uploads/2023/07/pcloud.png`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Upload files from WordPress to pCloud |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map file URL and destination folder path |

## Action Events

- Upload file (from a URL to a specified pCloud folder)

## Authentication

- **Type**: API Token
- **Required**: API token from your pCloud account. Enter the token and target folder path in Bit Integrations.

## Common Workflow Recipes

### Recipe 1: File Upload Form to pCloud Folder
**Trigger:** WordPress form with file upload field
**Action:** Upload the submitted file to a specified pCloud folder
**Use case:** Store form-submitted files in pCloud for privacy-conscious organizations preferring European cloud storage

### Recipe 2: Client Media Submission to pCloud Archive
**Trigger:** WordPress client media submission form
**Action:** Upload submitted media files to a pCloud client archive folder
**Use case:** Collect and archive client-submitted media in pCloud without manual download-upload cycles

### Recipe 3: Application Documents to pCloud HR Storage
**Trigger:** WordPress job application form with file upload
**Action:** Store submitted resumes and cover letters in pCloud HR folder
**Use case:** Archive applicant documents in pCloud for organizations that value data privacy and encryption

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger (form with file upload field).
4. Select pCloud as the Action.
5. Log in to your pCloud account and generate an API token from account settings.
6. Enter the API token in Bit Integrations and specify the target folder path.
7. Map fields: file URL, folder path.
8. Save and test.

## When to Use

- When privacy and data sovereignty are priorities and pCloud's European storage is preferred
- When WordPress form file uploads should be stored in pCloud automatically
- When you own a pCloud lifetime plan and want to maximize its utility with WordPress automation

## Related Integrations

- google-drive.md
- dropbox.md
- onedrive.md
