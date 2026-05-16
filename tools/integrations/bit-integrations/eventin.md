# Eventin

WordPress event management plugin for event listings, schedules, ticketing, and attendee registration.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via Eventin endpoints |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP hooks and filters |

## Authentication

- **Type**: WordPress Application Password or consumer key/secret
- **Header**: `Authorization: Basic base64(username:app_password)`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List events
```bash
GET https://yoursite.com/wp-json/eventin/v2/events

Authorization: Basic {base64_credentials}
```

### Get single event
```bash
GET https://yoursite.com/wp-json/eventin/v2/events/{id}

Authorization: Basic {base64_credentials}
```

### List attendees for event
```bash
GET https://yoursite.com/wp-json/eventin/v2/attendees?event_id={id}

Authorization: Basic {base64_credentials}
```

### Create attendee / ticket
```bash
POST https://yoursite.com/wp-json/eventin/v2/attendees

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "event_id": 42,
  "name": "Jane Doe",
  "email": "jane@example.com",
  "ticket_id": 5
}
```

## Key Fields

### Event
- `id` - Event post ID
- `title` - Event name
- `start_date` / `end_date` - ISO 8601 dates
- `location` - Venue details
- `tickets` - Array of ticket types

### Attendee
- `id` - Attendee ID
- `event_id` - Parent event
- `name` - Registrant name
- `email` - Registrant email
- `ticket_id` - Ticket type purchased
- `status` - approved, pending, cancelled

## Parameters

- `event_id` - Filter attendees by event
- `status` - Filter by attendee status
- `per_page` / `page` - Pagination

## When to Use

- Sync event attendees to an email marketing list
- Trigger confirmation emails on registration
- Report on ticket sales and attendee counts
- Automate waitlist management

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- operations:runbook
