# GetResponse

All-in-one online marketing platform for email campaigns, automation, landing pages, and webinars.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v3 |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Official PHP SDK; community libraries available |

## Authentication

- **Type**: API Key
- **Header**: `X-Auth-Token: api-key {your_api_key}`
- **Get token**: GetResponse Account > Tools > Integrations & API > API

## Common Agent Operations

### Add contact to list
```bash
POST https://api.getresponse.com/v3/contacts

X-Auth-Token: api-key {your_api_key}
Content-Type: application/json

{
  "email": "jane@example.com",
  "name": "Jane Doe",
  "campaign": {"campaignId": "abc123"},
  "customFieldValues": [{"customFieldId": "xyz", "value": ["pro"]}]
}
```

### List contacts
```bash
GET https://api.getresponse.com/v3/contacts?campaignId=abc123&perPage=100

X-Auth-Token: api-key {your_api_key}
```

### Get campaigns (lists)
```bash
GET https://api.getresponse.com/v3/campaigns

X-Auth-Token: api-key {your_api_key}
```

### List autoresponders
```bash
GET https://api.getresponse.com/v3/autoresponders

X-Auth-Token: api-key {your_api_key}
```

### Get newsletters
```bash
GET https://api.getresponse.com/v3/newsletters?perPage=50

X-Auth-Token: api-key {your_api_key}
```

## Key Fields

### Contact
- `contactId` - Unique contact ID
- `email` - Email address
- `name` - Full name
- `campaign` - Associated list/campaign object
- `createdOn` - ISO 8601 creation date
- `customFieldValues` - Array of custom field entries

### Campaign (List)
- `campaignId` - List ID
- `name` - List name
- `languageCode` - Language setting
- `isDefault` - Default list flag

### Autoresponder
- `autoresponderId` - ID
- `subject` - Email subject
- `dayOfCycle` - Day in sequence

## Parameters

- `campaignId` - Filter contacts by list
- `perPage` - Results per page (max 1000)
- `page` - Page number
- `sort[createdOn]` - Sort direction (ASC/DESC)

## When to Use

- Add leads from web forms to email marketing lists
- Trigger autoresponder sequences on signup
- Pull newsletter performance metrics
- Sync contact tags and custom fields from CRM

## Rate Limits

- 400 requests/hour per API key; higher on paid plans

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- marketing:performance-report
