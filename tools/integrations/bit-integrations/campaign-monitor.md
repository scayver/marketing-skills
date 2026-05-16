# Campaign Monitor

Email marketing platform focused on beautifully designed campaigns, subscriber segmentation, and detailed analytics for growing businesses.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v3.3 with full CRUD for lists, campaigns, subscribers |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Official SDKs for PHP, Ruby, Python, Java, .NET, Node.js |

## Authentication

- **Type**: API Key (HTTP Basic Auth — use API key as username, any string as password)
- **Header**: `Authorization: Basic {base64(api_key:x)}`
- **Get token**: Campaign Monitor account > Account > API Keys > Generate API Key

## Common Agent Operations

### List all subscriber lists for a client
```
GET https://api.createsend.com/api/v3.3/clients/{client_id}/lists.json

Authorization: Basic {base64_credentials}
```

### Add subscriber to a list
```
POST https://api.createsend.com/api/v3.3/subscribers/{list_id}.json

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "EmailAddress": "user@example.com",
  "Name": "Jane Smith",
  "CustomFields": [{"Key": "Source", "Value": "website"}],
  "Resubscribe": true
}
```

### Update subscriber data
```
PUT https://api.createsend.com/api/v3.3/subscribers/{list_id}.json?email=user@example.com

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "EmailAddress": "user@example.com",
  "Name": "Jane Smith",
  "CustomFields": [{"Key": "Plan", "Value": "Pro"}]
}
```

### Unsubscribe a contact
```
POST https://api.createsend.com/api/v3.3/subscribers/{list_id}/unsubscribe.json

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"EmailAddress": "user@example.com"}
```

### Get campaign summary statistics
```
GET https://api.createsend.com/api/v3.3/campaigns/{campaign_id}/summary.json

Authorization: Basic {base64_credentials}
```

## Key Fields

### Subscriber
- `EmailAddress` - Subscriber email (required)
- `Name` - Full name
- `CustomFields` - Array of `{Key, Value}` objects for custom subscriber data
- `Resubscribe` - Boolean; re-subscribes previously unsubscribed contacts when `true`

### List
- `ListID` - Unique list identifier
- `Title` - List name
- `UnsubscribePage` - Custom unsubscribe URL

### Campaign
- `CampaignID` - Unique campaign identifier
- `Subject` - Campaign subject line
- `SentDate` - ISO 8601 send timestamp

## Parameters

- `list_id` - Targets a specific subscriber list for subscriber operations
- `client_id` - Identifies the Campaign Monitor client account
- `campaign_id` - Targets a specific campaign for stats or actions
- `email` - Used as query param when updating a subscriber by email

## When to Use

- Automating subscriber list growth from web forms or e-commerce events
- Syncing buyer segments from WooCommerce or Shopify into targeted lists
- Pulling campaign performance metrics (opens, clicks, unsubscribes) into reports
- Managing custom field data on subscribers for segmentation and personalization

## Rate Limits

- 10,000 API calls per day per account by default
- See [campaignmonitor.com/api](https://www.campaignmonitor.com/api/) for current limits

## Relevant Skills

- email-marketing
- lead-generation
- content-strategy
