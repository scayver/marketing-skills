# Mail Mint

WordPress-native email marketing plugin for contact management, list building, automation, and broadcast campaigns.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at /wp-json/mrm/v1/ |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | WordPress hooks and REST API only |

## Authentication

- **Type**: WordPress Application Password (Basic Auth)
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### Create a contact

```bash
POST https://yoursite.com/wp-json/mrm/v1/contacts

Authorization: Basic {base64(user:app_password)}
Content-Type: application/json

{"email": "jane@example.com", "first_name": "Jane", "last_name": "Doe", "status": "subscribed"}
```

### Add contact to a list

```bash
POST https://yoursite.com/wp-json/mrm/v1/lists/{list_id}/contacts

Authorization: Basic {base64(user:app_password)}
Content-Type: application/json

{"contact_ids": [123, 456]}
```

### Apply a tag to a contact

```bash
POST https://yoursite.com/wp-json/mrm/v1/tags/{tag_id}/contacts

Authorization: Basic {base64(user:app_password)}
Content-Type: application/json

{"contact_ids": [123]}
```

### Get all lists

```bash
GET https://yoursite.com/wp-json/mrm/v1/lists

Authorization: Basic {base64(user:app_password)}
```

### Get all contacts

```bash
GET https://yoursite.com/wp-json/mrm/v1/contacts?per_page=100

Authorization: Basic {base64(user:app_password)}
```

## Key Fields

### Contact Object
- `id` - Unique contact ID
- `email` - Primary email address
- `first_name`, `last_name` - Name fields
- `phone` - Phone number
- `status` - subscribed | unsubscribed | pending
- `lists` - Array of list IDs
- `tags` - Array of tag IDs

### List Object
- `id` - Unique list ID
- `title` - List name
- `count` - Number of contacts in list

### Tag Object
- `id` - Unique tag ID
- `title` - Tag label
- `slug` - URL-safe tag identifier

## Parameters

- `per_page` - Results per page
- `page` - Pagination offset
- `status` - Filter contacts by subscription status
- `search` - Search contacts by email or name

## When to Use

- Building and managing email marketing lists entirely within WordPress
- Running automated email sequences and broadcasts without a third-party service
- Segmenting contacts with lists and tags based on behavior or source
- Capturing leads from WordPress forms and routing them into email automation

## Rate Limits

- No external rate limits; subject to WordPress server capacity

## Relevant Skills

- email-marketing
- lead-generation
- content-creation
