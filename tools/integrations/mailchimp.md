# Mailchimp

Email marketing and audience management platform for building lists, sending campaigns, and running automations.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Full REST API for lists, members, campaigns, tags, segments |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Official Python SDK; community SDKs for PHP, Ruby, Node |

## Authentication

- **Type**: API Key (Basic Auth)
- **Header**: `Authorization: Basic {base64(anystring:api_key)}`
- **Base URL**: `https://{dc}.api.mailchimp.com/3.0/` (dc is server prefix from API key, e.g., us14)
- **Get key**: Mailchimp Account > Extras > API Keys > Create A Key

## Common Agent Operations

### Add a subscriber to an audience

```bash
POST https://{dc}.api.mailchimp.com/3.0/lists/{list_id}/members

Authorization: Basic {base64(anystring:api_key)}
Content-Type: application/json

{"email_address": "jane@example.com", "status": "subscribed", "merge_fields": {"FNAME": "Jane", "LNAME": "Doe"}}
```

### Add or update a subscriber (upsert)

```bash
PUT https://{dc}.api.mailchimp.com/3.0/lists/{list_id}/members/{subscriber_hash}

Authorization: Basic {base64(anystring:api_key)}
Content-Type: application/json

{"email_address": "jane@example.com", "status_if_new": "subscribed", "merge_fields": {"FNAME": "Jane"}}
```

### Add a tag to a subscriber

```bash
POST https://{dc}.api.mailchimp.com/3.0/lists/{list_id}/members/{subscriber_hash}/tags

Authorization: Basic {base64(anystring:api_key)}
Content-Type: application/json

{"tags": [{"name": "LeadMagnet", "status": "active"}]}
```

### Get all audiences (lists)

```bash
GET https://{dc}.api.mailchimp.com/3.0/lists?count=50

Authorization: Basic {base64(anystring:api_key)}
```

### Get members of an audience

```bash
GET https://{dc}.api.mailchimp.com/3.0/lists/{list_id}/members?count=100&status=subscribed

Authorization: Basic {base64(anystring:api_key)}
```

## Key Fields

### Member Object
- `email_address` - Subscriber email
- `status` - subscribed | unsubscribed | pending | cleaned
- `merge_fields` - Object with FNAME, LNAME, PHONE, and custom fields
- `tags` - Array of tag objects applied to the member
- `timestamp_signup` - When they first subscribed

### List (Audience) Object
- `id` - List ID
- `name` - Audience name
- `stats.member_count` - Total active subscribers
- `double_optin` - Whether double opt-in is enabled

## Parameters

- `count` - Results per page (max 1000)
- `offset` - Pagination offset
- `status` - Filter members by subscription status
- `subscriber_hash` - MD5 hash of lowercase email address

## When to Use

- Growing and managing email subscriber audiences
- Sending broadcast newsletters and automated campaigns
- Segmenting subscribers by tags, groups, or merge field values
- Running drip sequences triggered by subscriber events

## Rate Limits

- 10 simultaneous connections per account
- No hard per-minute limit; rate limiting applies for high-volume use
- Batch endpoint available for bulk operations

## Relevant Skills

- email-marketing
- lead-generation
- ecommerce
