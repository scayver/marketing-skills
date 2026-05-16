# Mailjet

Cloud-based transactional email and marketing campaign platform with contact management and real-time sending analytics.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API for sending, contacts, lists, and campaigns |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Official SDKs for Python, PHP, Node, Ruby, Go, Java |

## Authentication

- **Type**: API Key + Secret Key (Basic Auth)
- **Header**: `Authorization: Basic {base64(api_key:secret_key)}`
- **Get keys**: Mailjet account > Account Settings > REST API > API Key Management

## Common Agent Operations

### Send a transactional email

```bash
POST https://api.mailjet.com/v3.1/send

Authorization: Basic {base64(api_key:secret_key)}
Content-Type: application/json

{"Messages": [{"From": {"Email": "from@example.com", "Name": "Sender"}, "To": [{"Email": "jane@example.com"}], "Subject": "Hello", "TextPart": "Hello Jane"}]}
```

### Add a contact to a list

```bash
POST https://api.mailjet.com/v3/REST/listrecipient

Authorization: Basic {base64(api_key:secret_key)}
Content-Type: application/json

{"IsUnsubscribed": false, "ContactAlt": "jane@example.com", "ListID": 12345}
```

### Create or update a contact

```bash
PUT https://api.mailjet.com/v3/REST/contact/{email}

Authorization: Basic {base64(api_key:secret_key)}
Content-Type: application/json

{"IsExcludedFromCampaigns": false, "Name": "Jane Doe"}
```

### Get all contact lists

```bash
GET https://api.mailjet.com/v3/REST/contactslist

Authorization: Basic {base64(api_key:secret_key)}
```

### Get campaign stats

```bash
GET https://api.mailjet.com/v3/REST/campaignstatistics/{campaign_id}

Authorization: Basic {base64(api_key:secret_key)}
```

## Key Fields

### Message Object (Send)
- `From` - Sender email and name object
- `To` - Array of recipient objects (Email, Name)
- `Subject` - Email subject line
- `TextPart` - Plain text body
- `HTMLPart` - HTML body
- `TemplateID` - Mailjet template ID

### Contact Object
- `Email` - Primary identifier
- `Name` - Display name
- `IsExcludedFromCampaigns` - Opt-out flag (boolean)
- `Properties` - Custom contact properties

### List Object
- `ID` - Unique list ID
- `Name` - List name
- `SubscriberCount` - Active subscriber count

## Parameters

- `CountOnly` - Return count only (1 or 0)
- `Limit` - Results per page (max 1000)
- `Offset` - Pagination offset
- `Sort` - Sort field and direction

## When to Use

- Sending transactional emails (order confirmations, password resets) reliably
- Managing marketing contact lists and running broadcast campaigns
- Using pre-built email templates for consistent campaign design
- Tracking email delivery, open, and click rates in real time

## Rate Limits

- Free tier: 6,000 emails/month, 200/day
- Paid plans: Based on monthly sending volume
- API: 300 requests/minute

## Relevant Skills

- email-marketing
- lead-generation
- ecommerce
