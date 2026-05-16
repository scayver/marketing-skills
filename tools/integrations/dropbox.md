# Dropbox

Cloud storage and file synchronization platform for storing, organizing, and sharing files across devices and teams with version history and collaboration features.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v2 at api.dropboxapi.com and content.dropboxapi.com |
| MCP | - | Not available |
| CLI | ✓ | Dropbox CLI for Linux; community dbxcli tool |
| SDK | ✓ | Official SDKs for Python, Java, .NET, JavaScript, Objective-C, Swift |

## Authentication

- **Type**: OAuth 2.0
- **Header**: `Authorization: Bearer {access_token}`
- **Get token**: Create an app at [dropbox.com/developers](https://dropbox.com/developers) > App Console > Generate access token, or complete the OAuth 2.0 flow

## Common Agent Operations

### Upload a file
```
POST https://content.dropboxapi.com/2/files/upload

Authorization: Bearer {access_token}
Content-Type: application/octet-stream
Dropbox-API-Arg: {"path": "/uploads/resume.pdf", "mode": "add", "autorename": true}

{binary file content}
```

### List folder contents
```
POST https://api.dropboxapi.com/2/files/list_folder

Authorization: Bearer {access_token}
Content-Type: application/json

{"path": "/uploads", "recursive": false, "limit": 100}
```

### Download a file
```
POST https://content.dropboxapi.com/2/files/download

Authorization: Bearer {access_token}
Dropbox-API-Arg: {"path": "/uploads/resume.pdf"}
```

### Create a shared link
```
POST https://api.dropboxapi.com/2/sharing/create_shared_link_with_settings

Authorization: Bearer {access_token}
Content-Type: application/json

{
  "path": "/reports/q1-2026.pdf",
  "settings": {"requested_visibility": "public"}
}
```

### Move a file
```
POST https://api.dropboxapi.com/2/files/move_v2

Authorization: Bearer {access_token}
Content-Type: application/json

{
  "from_path": "/inbox/document.pdf",
  "to_path": "/archive/2026/document.pdf"
}
```

## Key Fields

### File Metadata
- `name` - File name
- `path_lower` - Lowercase full path within Dropbox
- `path_display` - Display path preserving original case
- `id` - Stable Dropbox file identifier (not path-dependent)
- `size` - File size in bytes
- `client_modified` - Client-side modification timestamp
- `server_modified` - Server-side modification timestamp

### Folder
- `name` - Folder name
- `path_lower` - Full path in Dropbox
- `.tag` - `"folder"` or `"file"` to distinguish entry types

### Shared Link
- `url` - Publicly accessible share URL
- `path_lower` - Path of the shared item
- `link_permissions` - Object describing access rules

## Parameters

- `path` - Dropbox path string; root is `""` (empty string), not `"/"`
- `mode` - Upload mode: `add`, `overwrite`, or `update`
- `autorename` - Boolean; renames on conflict instead of overwriting when `true`
- `recursive` - Boolean; lists folder contents recursively when `true`
- `limit` - Max entries per `list_folder` response

## When to Use

- Automatically storing form file uploads (resumes, portfolios, documents) in organized Dropbox folders
- Archiving order-related documents or client deliverables from e-commerce or service workflows
- Creating shareable links for files that need to be distributed after upload
- Moving files between Dropbox folders based on processing status (inbox → reviewed → archived)

## Rate Limits

- 200 write operations per user per minute; 100,000 per day per app
- See [dropbox.com/developers/reference/rate-limits](https://dropbox.com/developers/reference/rate-limits) for current limits

## Relevant Skills

- content-strategy
- ecommerce
- crm-management
