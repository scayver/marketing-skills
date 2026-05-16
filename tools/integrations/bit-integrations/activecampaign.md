# ActiveCampaign

Customer experience automation platform combining email marketing, marketing automation, CRM, and sales automation in one tool.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v3 at `https://{account}.api-us1.com/api/3/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | ✓ | Official Python, PHP, Ruby, Node wrappers available |

## Authentication

- **Type**: API Key
- **Header**: `Api-Token: {api_key}`
- **Get token**: ActiveCampaign > Settings > Developer > API Access

## Common Agent Operations

### Create or update a contact

```bash
POST https://{account}.api-us1.com/api/3/contacts

Api-Token: {api_key}
Content-Type: application/json

{
  "contact": {
    "email": "user@example.com",
    "firstName": "Jane",
    "lastName": "Doe",
    "phone": "+15551234567"
  }
}
```

### Add contact to a list

```bash
POST https://{account}.api-us1.com/api/3/contactLists

Api-Token: {api_key}
Content-Type: application/json

{"contactList": {"list": 2, "contact": 45, "status": 1}}
```

### Apply a tag to a contact

```bash
POST https://{account}.api-us1.com/api/3/contactTags

Api-Token: {api_key}
Content-Type: application/json

{"contactTag": {"contact": 45, "tag": 12}}
```

### Add contact to an automation

```bash
POST https://{account}.api-us1.com/api/3/contactAutomations

Api-Token: {api_key}
Content-Type: application/json

{"contactAutomation": {"contact": 45, "automation": 3}}
```

### Create a deal in the CRM

```bash
POST https://{account}.api-us1.com/api/3/deals

Api-Token: {api_key}
Content-Type: application/json

{
  "deal": {
    "title": "New Lead",
    "contact": 45,
    "pipeline": 1,
    "stage": 2,
    "value": 5000,
    "currency": "usd"
  }
}
```

## Key Fields

### Contact
- `id` - Contact ID
- `email` - Email address (required, unique)
- `firstName`, `lastName` - Name fields
- `phone` - Phone number
- `fieldValues` - Array of custom field values

### List
- `id` - List ID
- `name` - List name
- `status` - 1 = active, 0 = unsubscribed

### Tag
- `id` - Tag ID
- `tag` - Tag name string

### Deal
- `id` - Deal ID
- `title` - Deal name
- `value` - Deal value in cents
- `pipeline`, `stage` - CRM pipeline and stage IDs

## Parameters

- `limit` - Results per page (max 100)
- `offset` - Pagination offset
- `filters[email]` - Filter contacts by email
- `filters[tag]` - Filter contacts by tag ID

## When to Use

- Adding form leads directly to segmented email lists
- Tagging contacts by behavior or lead source for targeted campaigns
- Triggering onboarding automations on signup or purchase
- Managing sales pipeline deals from inbound leads

## Rate Limits

- 5 requests per second per account
- See ActiveCampaign pricing page for API call limits by plan

## Relevant Skills

- email-marketing
- crm-management
- lead-generation
