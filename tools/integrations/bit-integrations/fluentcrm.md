# FluentCRM

WordPress-native CRM and email marketing automation plugin for contacts, campaigns, sequences, and funnels.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via FluentCRM endpoints |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP hooks and filters |

## Authentication

- **Type**: WordPress Application Password or Basic Auth
- **Header**: `Authorization: Basic base64(username:app_password)`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List contacts
```bash
GET https://yoursite.com/wp-json/fluent-crm/v2/contacts?per_page=50

Authorization: Basic {base64_credentials}
```

### Create or update contact
```bash
POST https://yoursite.com/wp-json/fluent-crm/v2/contacts

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "email": "jane@example.com",
  "first_name": "Jane",
  "last_name": "Doe",
  "tags": [3, 7],
  "lists": [2]
}
```

### Add tag to contact
```bash
POST https://yoursite.com/wp-json/fluent-crm/v2/contacts/{id}/tags

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"tags": [5, 8]}
```

### List email campaigns
```bash
GET https://yoursite.com/wp-json/fluent-crm/v2/campaigns

Authorization: Basic {base64_credentials}
```

### List sequences (automation)
```bash
GET https://yoursite.com/wp-json/fluent-crm/v2/sequences

Authorization: Basic {base64_credentials}
```

## Key Fields

### Contact
- `id` - Contact ID
- `email` - Email address (unique)
- `first_name` / `last_name` - Name
- `status` - subscribed, unsubscribed, pending, bounced
- `tags` - Array of tag IDs
- `lists` - Array of list IDs
- `custom_fields` - Key-value custom data

### Campaign
- `id` - Campaign ID
- `title` - Campaign name
- `status` - draft, scheduled, processing, sent
- `subject` - Email subject line

### Tag / List
- `id` - ID
- `title` - Name
- `slug` - URL-safe identifier

## Parameters

- `status` - Filter contacts by status
- `tags` - Filter by tag IDs
- `lists` - Filter by list IDs
- `per_page` / `page` - Pagination
- `search` - Search by name or email

## When to Use

- Manage CRM contacts from external lead sources
- Tag and segment contacts based on behavior
- Trigger automated email sequences on events
- Pull contact engagement data for reporting

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- sales:account-research
