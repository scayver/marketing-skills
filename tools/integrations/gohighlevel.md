# GoHighLevel

All-in-one marketing and CRM platform for agencies combining lead capture, pipelines, email/SMS automation, booking, and white-label portals.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v1 (and v2 for sub-accounts) |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | API-only |

## Authentication

- **Type**: Bearer Token (Agency or Location API Key)
- **Header**: `Authorization: Bearer {api_key}`
- **Get token**: GHL Settings > Integrations > API Key (Agency level or sub-account)

## Common Agent Operations

### Create contact
```bash
POST https://rest.gohighlevel.com/v1/contacts/

Authorization: Bearer {api_key}
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane@example.com",
  "phone": "+1234567890",
  "tags": ["lead", "webinar"],
  "source": "API"
}
```

### Search contacts
```bash
GET https://rest.gohighlevel.com/v1/contacts/?email=jane@example.com

Authorization: Bearer {api_key}
```

### List opportunities (deals)
```bash
GET https://rest.gohighlevel.com/v1/opportunities/search?pipelineId={id}

Authorization: Bearer {api_key}
```

### Create appointment
```bash
POST https://rest.gohighlevel.com/v1/appointments/

Authorization: Bearer {api_key}
Content-Type: application/json

{
  "calendarId": "cal_abc123",
  "contactId": "con_xyz789",
  "startTime": "2024-06-15T10:00:00Z",
  "endTime": "2024-06-15T10:30:00Z",
  "title": "Discovery Call"
}
```

## Key Fields

### Contact
- `id` - Contact ID
- `firstName` / `lastName` - Name
- `email` - Email address
- `phone` - Phone number
- `tags` - Array of tag strings
- `source` - Lead source
- `dateAdded` - Creation timestamp

### Opportunity
- `id` - Opportunity ID
- `name` - Deal name
- `pipelineId` - Pipeline ID
- `pipelineStageId` - Current stage
- `contactId` - Linked contact
- `monetaryValue` - Deal value
- `status` - open, won, lost, abandoned

## Parameters

- `email` - Search contacts by email
- `limit` / `startAfter` - Pagination
- `pipelineId` - Filter opportunities by pipeline

## When to Use

- Add leads from web forms to GHL CRM
- Move contacts through pipeline stages on external events
- Book appointments from landing page forms
- Trigger SMS or email campaigns on contact creation

## Rate Limits

- 100 requests/10 seconds; see GHL API docs for updated limits

## Relevant Skills

- sales:pipeline-review
- marketing:campaign-plan
- sales:draft-outreach
