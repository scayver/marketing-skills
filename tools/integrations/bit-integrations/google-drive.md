# Google Drive

Google's cloud storage platform for storing, sharing, and collaborating on files and folders online.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Google Drive API v3 |
| MCP | ✓ | Available via Google Drive MCP |
| CLI | - | Not available |
| SDK | ✓ | Official client libraries for Python, Node.js, Java, PHP, Go |

## Authentication

- **Type**: OAuth 2.0
- **Header**: `Authorization: Bearer {access_token}`
- **Get token**: Google Cloud Console > Credentials; scopes: `https://www.googleapis.com/auth/drive`

## Common Agent Operations

### List files
```bash
GET https://www.googleapis.com/drive/v3/files?q=mimeType!='application/vnd.google-apps.folder'&fields=files(id,name,mimeType,modifiedTime)

Authorization: Bearer {access_token}
```

### Upload file
```bash
POST https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart

Authorization: Bearer {access_token}
Content-Type: multipart/related; boundary=boundary123

--boundary123
Content-Type: application/json

{"name": "report.pdf", "parents": ["folder_id"]}
--boundary123
Content-Type: application/pdf

{binary_file_content}
--boundary123--
```

### Create folder
```bash
POST https://www.googleapis.com/drive/v3/files

Authorization: Bearer {access_token}
Content-Type: application/json

{"name": "Q2 Reports", "mimeType": "application/vnd.google-apps.folder"}
```

### Share file
```bash
POST https://www.googleapis.com/drive/v3/files/{fileId}/permissions

Authorization: Bearer {access_token}
Content-Type: application/json

{"role": "reader", "type": "user", "emailAddress": "jane@example.com"}
```

## Key Fields

### File
- `id` - File ID
- `name` - File name
- `mimeType` - File type
- `size` - File size in bytes
- `parents` - Array of parent folder IDs
- `modifiedTime` - ISO 8601 last modified
- `webViewLink` - Browser URL
- `owners` - Array of owner objects

### Permission
- `id` - Permission ID
- `role` - owner, organizer, fileOrganizer, writer, commenter, reader
- `type` - user, group, domain, anyone
- `emailAddress` - Recipient email (for user/group type)

## Parameters

- `q` - Query string for filtering (Drive query language)
- `fields` - Fields to return in response
- `pageSize` - Results per page (max 1000)
- `pageToken` - Pagination cursor

## When to Use

- Store generated reports or exports in Drive automatically
- Organize uploaded files into project folders
- Share documents with clients after form submission
- Back up content from other platforms to Drive

## Rate Limits

- 1000 requests/100 seconds per user; 20000 requests/100 seconds per project

## Relevant Skills

- operations:process-doc
- data:analyze
- marketing:content-creation
