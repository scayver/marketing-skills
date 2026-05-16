# OneDrive

OneDrive is Microsoft's cloud storage service integrated with Microsoft 365 for storing and sharing files across devices and organizations. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Cloud Storage
**Icon:** `https://bitapps.pro/wp-content/uploads/2023/07/OneDrive.png`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Upload files from WordPress to OneDrive |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map file URL, folder path, and file name |

## Action Events

- Upload file (from a URL to a specified OneDrive folder)

## Authentication

- **Type**: OAuth 2.0
- **Required**: Authorize Bit Integrations via Microsoft OAuth. Specify the target OneDrive folder path.

## Common Workflow Recipes

### Recipe 1: Document Submission Form to OneDrive
**Trigger:** WordPress form with document upload field
**Action:** Upload the submitted document to a OneDrive folder
**Use case:** Store form-submitted documents in OneDrive for organizations running on Microsoft 365

### Recipe 2: Application Form to OneDrive HR Drive
**Trigger:** Job application form with resume upload
**Action:** Upload resume to the OneDrive HR team drive
**Use case:** Centralize incoming resumes in OneDrive for Microsoft 365-based HR teams

### Recipe 3: Client Deliverable Form to OneDrive Project
**Trigger:** Client file submission form
**Action:** Upload client files to a OneDrive shared folder or SharePoint library
**Use case:** Collect client files via WordPress and store them in the organization's OneDrive

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger (form with file upload field).
4. Select OneDrive as the Action.
5. Click "Authorize" and sign in with your Microsoft account.
6. Specify the target OneDrive folder path.
7. Map fields: file URL, folder path, file name.
8. Save and test.

## When to Use

- When your organization runs on Microsoft 365 and uses OneDrive as primary cloud storage
- When WordPress form uploads should flow into OneDrive or SharePoint automatically
- When Microsoft-ecosystem organizations need WordPress file intake connected to OneDrive

## Related Integrations

- google-drive.md
- dropbox.md
- pcloud.md
