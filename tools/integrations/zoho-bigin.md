# Zoho Bigin

Pipeline CRM for small businesses managing contacts, companies, deals, and activities.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API or webhook API for core platform operations |
| MCP | - | Not available |
| CLI | - | Not available unless provided by the platform |
| SDK | ✓ | SDK availability varies by language and plan |

## Authentication

- **Type**: API Token, OAuth 2.0, or signed webhook URL depending on account setup
- **Header**: `Authorization: Zoho-oauthtoken {access_token}`
- **Get token**: Developer settings, API settings, private app settings, or webhook settings inside the Zoho Bigin dashboard

## Common Agent Operations

### List records

```bash
GET https://www.zohoapis.com/bigin/v2/records?limit=50

Authorization: Zoho-oauthtoken {access_token}
```

### Get one record

```bash
GET https://www.zohoapis.com/bigin/v2/records/{record_id}

Authorization: Zoho-oauthtoken {access_token}
```

### Create record

```bash
POST https://www.zohoapis.com/bigin/v2/records

Authorization: Zoho-oauthtoken {access_token}
Content-Type: application/json

{
  "email": "customer@example.com",
  "first_name": "Jane",
  "last_name": "Doe",
  "source": "website"
}
```

### Update record

```bash
PATCH https://www.zohoapis.com/bigin/v2/records/{record_id}

Authorization: Zoho-oauthtoken {access_token}
Content-Type: application/json

{
  "status": "active",
  "tags": ["lead", "website"]
}
```

### Send event or webhook payload

```bash
POST https://www.zohoapis.com/bigin/v2/events

Authorization: Zoho-oauthtoken {access_token}
Content-Type: application/json

{
  "event": "form_submitted",
  "email": "customer@example.com",
  "properties": {
    "page_url": "https://example.com/contact",
    "campaign": "spring-launch"
  }
}
```

## Key Fields

- `id` - Unique platform record identifier
- `email` - Contact or user email address
- `first_name` - First name
- `last_name` - Last name
- `phone` - Phone number when supported
- `status` - Record, subscriber, deal, ticket, or workflow state
- `tags` - Segmentation, source, or lifecycle labels
- `created_at` - Record creation timestamp
- `updated_at` - Last update timestamp

## Parameters

- `limit` - Number of records returned per request
- `offset` or `page` - Pagination position
- `sort` - Sort field and direction when supported
- `filter` - Field-level filter expression
- `query` - Search term for matching records

## When to Use

- Sync website leads or customer records
- Enrich customer profiles
- Trigger follow-up workflows
- Report on campaign or lifecycle performance
- Connect marketing, sales, support, and operations data

## Rate Limits

- Varies by plan and endpoint
- OAuth apps often receive per-minute and daily limits
- Bulk imports may use separate async limits
- Use pagination and backoff for large sync jobs

## Relevant Skills

- revops
- sales-enablement
- analytics
