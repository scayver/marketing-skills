# lemlist

Cold outreach platform with personalized image and video emails, multi-channel sequences, and deliverability tools for B2B sales.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API for campaigns, leads, and activities |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | API only |

## Authentication

- **Type**: API Key (Basic Auth)
- **Header**: `Authorization: Basic {base64(api_key:)}`  (API key as username, empty password)
- **Alternate header**: `X-Api-Key: {api_key}` on some endpoints
- **Get key**: lemlist Settings > Integrations > API

## Common Agent Operations

### Add a lead to a campaign

```bash
POST https://api.lemlist.com/api/campaigns/{campaign_id}/leads/{email}

Authorization: Basic {base64(api_key:)}
Content-Type: application/json

{"firstName": "Jane", "lastName": "Doe", "companyName": "Acme Corp"}
```

### Get all campaigns

```bash
GET https://api.lemlist.com/api/campaigns

Authorization: Basic {base64(api_key:)}
```

### Get leads in a campaign

```bash
GET https://api.lemlist.com/api/campaigns/{campaign_id}/leads

Authorization: Basic {base64(api_key:)}
```

### Update lead data

```bash
PATCH https://api.lemlist.com/api/leads/{email}

Authorization: Basic {base64(api_key:)}
Content-Type: application/json

{"companyName": "New Corp", "phone": "+15555550100"}
```

### Get lead activity

```bash
GET https://api.lemlist.com/api/activities?leadEmail={email}

Authorization: Basic {base64(api_key:)}
```

## Key Fields

### Lead Object
- `email` - Primary lead identifier
- `firstName`, `lastName` - Name fields
- `companyName` - Company
- `phone` - Phone number
- `icebreaker` - Personalization variable for email copy
- Custom variables - Any field used in campaign templates

### Campaign Object
- `_id` - Unique campaign ID
- `name` - Campaign name
- `status` - active | paused | draft
- `sendingSchedule` - Days and hours for sending

### Activity Object
- `type` - emailSent | emailOpened | emailClicked | replied
- `campaignId` - Source campaign
- `createdAt` - Event timestamp

## Parameters

- `campaign_id` - Target campaign for lead operations
- `email` - Lead identifier in URL path
- `offset` - Pagination offset
- `limit` - Results per page (max 100)

## When to Use

- Running personalized cold email outreach for B2B lead generation
- Managing multi-channel sequences (email + LinkedIn + calls)
- Tracking email engagement (opens, clicks, replies) per lead
- Enrolling inbound leads into automated outreach sequences

## Rate Limits

- See lemlist.com/api documentation for current rate limits by plan

## Relevant Skills

- lead-generation
- sales:draft-outreach
- email-marketing
