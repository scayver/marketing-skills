# OneDrive

Microsoft cloud storage service integrated with Microsoft 365 for storing, sharing, and collaborating on files across devices and organizations.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Microsoft Graph API at `https://graph.microsoft.com/v1.0/me/drive/` |
| MCP | - | No official MCP server |
| CLI | ✓ | Available via Microsoft 365 CLI (`m365`) |
| SDK | ✓ | Microsoft Graph SDKs for .NET, Python, JS, and more |

## Authentication

- **Type**: OAuth 2.0 (Bearer Token)
- **Header**: `Authorization: Bearer {access_token}`
- **Get token**: Register app in Azure AD > grant Files.ReadWrite permissions > exchange auth code for access token via `https://login.microsoftonline.com/{tenant_id}/oauth2/v2.0/token`

## Common Agent Operations

### List files in root drive
```bash
GET https://graph.microsoft.com/v1.0/me/drive/root/children

Authorization: Bearer {access_token}
```

### List files in a folder
```bash
GET https://graph.microsoft.com/v1.0/me/drive/root:/{folder_path}:/children

Authorization: Bearer {access_token}
```

### Upload a file (simple upload)
```bash
PUT https://graph.microsoft.com/v1.0/me/drive/root:/{folder_path}/{filename}:/content

Authorization: Bearer {access_token}
Content-Type: application/octet-stream

{file_binary_content}
```

### Create a sharing link
```bash
POST https://graph.microsoft.com/v1.0/me/drive/items/{item_id}/createLink

Authorization: Bearer {access_token}
Content-Type: application/json

{"type": "view", "scope": "anonymous"}
```

## Key Fields

### Drive Item
- `id` - File or folder ID
- `name` - File name
- `size` - File size in bytes
- `webUrl` - Browser URL for the file
- `createdDateTime` - Creation timestamp (ISO 8601)
- `lastModifiedDateTime` - Last modified timestamp
- `file` - Present if item is a file (contains `mimeType`)
- `folder` - Present if item is a folder (contains `childCount`)

### Sharing Link
- `link.webUrl` - Shareable URL
- `link.type` - `view`, `edit`, or `embed`
- `link.scope` - `anonymous` or `organization`

## Parameters

- `$select` - Comma-separated fields to return
- `$filter` - OData filter expression
- `$top` - Results per page (max 200)
- `$skiptoken` - Pagination token

## When to Use

- Storing and organizing files from form submissions in a Microsoft 365 environment
- Sharing documents with external collaborators via generated links
- Archiving client deliverables or HR documents in OneDrive or SharePoint
- Automating file organization workflows in Microsoft 365 ecosystems

## Rate Limits

- 10,000 requests per 10 minutes per app per tenant; see Microsoft Graph throttling docs

## Relevant Skills

- operations:process-doc
- operations:runbook
- marketing:content-creation
