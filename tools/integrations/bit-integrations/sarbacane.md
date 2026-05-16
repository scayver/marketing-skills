# Sarbacane

French email and SMS marketing platform (also known as Mailify) for campaign management, list automation, and multi-channel messaging for European businesses.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://sarbacaneapis.com/v1/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | No official SDK; standard REST |

## Authentication

- **Type**: API Key + Account ID
- **Header**: `apiKey: {api_key}` and `accountId: {account_id}`
- **Get credentials**: Sarbacane account > Settings > API section

## Common Agent Operations

### List contact lists

```bash
GET https://sarbacaneapis.com/v1/lists

apiKey: {api_key}
accountId: {account_id}
```

### Add contact to list

```bash
POST https://sarbacaneapis.com/v1/lists/{list_id}/contacts

apiKey: {api_key}
accountId: {account_id}
Content-Type: application/json

{"email": "jane@example.com", "properties": {"prenom": "Jane", "nom": "Doe"}}
```

### Get contact

```bash
GET https://sarbacaneapis.com/v1/contacts?email=jane@example.com

apiKey: {api_key}
accountId: {account_id}
```

### List campaigns

```bash
GET https://sarbacaneapis.com/v1/campaigns

apiKey: {api_key}
accountId: {account_id}
```

### Get campaign statistics

```bash
GET https://sarbacaneapis.com/v1/campaigns/{campaign_id}/stats

apiKey: {api_key}
accountId: {account_id}
```

## Key Fields

### Contact Object
- `id` - Contact ID
- `email` - Email address
- `properties.prenom` - First name
- `properties.nom` - Last name
- `properties.phone` - Phone number
- `unsubscribed` - Boolean unsubscribe status

### List Object
- `id` - List ID
- `name` - List name
- `count` - Number of contacts

### Campaign Statistics
- `sent` - Emails sent
- `opens` - Unique opens
- `clicks` - Unique clicks
- `unsubscribes` - Unsubscribes
- `bounces` - Bounced emails

## Parameters

- `list_id` - Target specific list
- `email` - Filter by email
- `page` - Page number

## When to Use

- Managing email and SMS campaigns for French and European audiences
- Growing subscriber lists with GDPR-compliant opt-ins
- Segmenting contacts by source, behavior, or purchase history
- Sending transactional or promotional email campaigns

## Rate Limits

- See Sarbacane pricing page for plan-based limits

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- marketing:performance-report
