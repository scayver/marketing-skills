# Nimble

Social CRM focused on relationship intelligence, automatically enriching contact records with social profile data and helping teams manage follow-ups across email and social channels.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://api.nimble.com/api/v1/` |
| MCP | - | No official MCP server |
| CLI | - | No CLI |
| SDK | - | No official SDK |

## Authentication

- **Type**: Bearer Token (OAuth 2.0)
- **Header**: `Authorization: Bearer {access_token}`
- **Get token**: Nimble Settings > API & Integrations > Generate API Token

## Common Agent Operations

### List contacts
```bash
GET https://api.nimble.com/api/v1/contacts?per_page=25

Authorization: Bearer {access_token}
```

### Create a contact
```bash
POST https://api.nimble.com/api/v1/contact

Authorization: Bearer {access_token}
Content-Type: application/json

{"fields": {"first name": [{"value": "Jane"}], "last name": [{"value": "Doe"}], "email": [{"value": "jane@example.com", "modifier": "work"}], "phone": [{"value": "555-1234", "modifier": "work"}]}, "tags": ["website-lead"]}
```

### Search contacts
```bash
GET https://api.nimble.com/api/v1/contacts?query={"email":"jane@example.com"}

Authorization: Bearer {access_token}
```

### Create an activity
```bash
POST https://api.nimble.com/api/v1/activities

Authorization: Bearer {access_token}
Content-Type: application/json

{"subject": "Follow-up call", "type": "call", "due_date": "2026-06-01", "contact_ids": ["abc123"]}
```

## Key Fields

### Contact
- `id` - Contact UUID
- `fields.first name` - First name (array of value objects)
- `fields.last name` - Last name (array of value objects)
- `fields.email` - Email addresses (array with modifier: work/personal)
- `fields.phone` - Phone numbers (array with modifier)
- `tags` - Array of tag strings

### Activity
- `id` - Activity UUID
- `subject` - Activity title
- `type` - Activity type (call, email, meeting, etc.)
- `due_date` - Due date (ISO 8601)
- `contact_ids` - Array of associated contact IDs

## Parameters

- `per_page` - Results per page (max 100)
- `page` - Page number
- `query` - JSON filter object for search

## When to Use

- Enriching contact records with social profile data automatically
- Managing relationship follow-ups across email, social, and CRM from one place
- Creating CRM contacts and activities from web inquiries or event registrations
- Tagging and segmenting contacts by lead source for targeted outreach

## Rate Limits

- 200 requests per minute; see Nimble API documentation for details

## Relevant Skills

- sales:account-research
- sales:draft-outreach
- marketing:campaign-plan
