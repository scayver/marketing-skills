# Moosend

Email marketing and automation platform with a visual workflow builder, strong segmentation, and AI-powered predictive analytics for audience targeting.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://api.moosend.com/v3/` |
| MCP | - | No official MCP server |
| CLI | - | No CLI |
| SDK | - | No official SDK; community wrappers available |

## Authentication

- **Type**: API Key (query parameter)
- **Parameter**: `?apikey={your_api_key}`
- **Get token**: Moosend account > Settings > API Key

## Common Agent Operations

### Get all mailing lists
```bash
GET https://api.moosend.com/v3/lists.json?apikey={your_api_key}
```

### Subscribe a member to a list
```bash
POST https://api.moosend.com/v3/subscribers/{mailing_list_id}/subscribe.json?apikey={your_api_key}

Content-Type: application/json

{"Email": "user@example.com", "Name": "Jane Doe", "CustomFields": ["field1=value1"]}
```

### Unsubscribe from a list
```bash
POST https://api.moosend.com/v3/subscribers/{mailing_list_id}/unsubscribe.json?apikey={your_api_key}

Content-Type: application/json

{"Email": "user@example.com"}
```

### Get campaign statistics
```bash
GET https://api.moosend.com/v3/campaigns/{campaign_id}/stats/opens.json?apikey={your_api_key}
```

## Key Fields

### Subscriber
- `Email` - Email address (required)
- `Name` - Full name
- `CustomFields` - Array of `"field=value"` strings for custom attributes
- `Tags` - Array of tag strings

### Mailing List
- `ID` - List UUID
- `Name` - List display name
- `SubscribersCount` - Total subscriber count

## Parameters

- `apikey` - API key (required on all requests)
- `mailing_list_id` - Target mailing list UUID
- `campaign_id` - Target campaign UUID

## When to Use

- Managing email subscriber lists and automating opt-in/opt-out flows
- Sending transactional or broadcast email campaigns
- Building behavioral automation workflows with visual triggers and conditions
- Segmenting audiences using predictive analytics or custom field values

## Rate Limits

- See Moosend pricing page; limits vary by plan

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- marketing:performance-report
