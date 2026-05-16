# Selzy

Email marketing platform (formerly UniSender) offering campaign creation, subscriber list management, segmentation, and automation for growing businesses.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://api.selzy.com/en/api/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | No official SDK; standard REST with `api_key` param |

## Authentication

- **Type**: API Key (query parameter)
- **Parameter**: `api_key={your_api_key}`
- **Get token**: Selzy account > Settings > API Access

## Common Agent Operations

### List subscriber lists

```bash
GET https://api.selzy.com/en/api/getLists?api_key={api_key}&format=json
```

### Subscribe a contact

```bash
POST https://api.selzy.com/en/api/subscribe

Content-Type: application/x-www-form-urlencoded

api_key={api_key}&list_ids=12345&fields[email]=jane@example.com&fields[Name]=Jane+Doe&format=json
```

### Get subscriber info

```bash
GET https://api.selzy.com/en/api/getContact?api_key={api_key}&email=jane@example.com&format=json
```

### Unsubscribe a contact

```bash
POST https://api.selzy.com/en/api/unsubscribe

api_key={api_key}&list_ids=12345&contact_emails[]=jane@example.com&format=json
```

### List campaigns

```bash
GET https://api.selzy.com/en/api/getCampaigns?api_key={api_key}&format=json
```

## Key Fields

### Subscriber Object
- `id` - Subscriber ID
- `email` - Email address
- `fields.Name` - Full name
- `fields.email` - Email (also stored as field)
- `status` - new / active / unsubscribed / bounced
- `list_ids` - Array of list IDs subscribed to

### Campaign Object
- `campaign_id` - Campaign ID
- `name` - Campaign name
- `status` - Draft / Scheduled / Sent
- `send_date` - Send timestamp

## Parameters

- `api_key` - Required on every request
- `list_ids` - Comma-separated list IDs
- `format` - Response format (json or xml)
- `email` - Filter by email address

## When to Use

- Growing email subscriber lists from web forms and landing pages
- Sending newsletters and promotional campaigns
- Segmenting contacts by list for targeted messaging
- Tracking campaign performance (open rates, clicks, bounces)

## Rate Limits

- See Selzy pricing page for plan-based API limits

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- marketing:performance-report
