# Modern Events Calendar

Feature-rich WordPress event management plugin with booking, ticket sales, front-end submission, and multiple calendar views.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via `/wp-json/mec/v1/` |
| MCP | - | No official MCP server |
| CLI | - | No CLI |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List events
```bash
GET https://yoursite.com/wp-json/mec/v1/events

Authorization: Basic {base64_credentials}
```

### Get event details
```bash
GET https://yoursite.com/wp-json/mec/v1/events/{id}

Authorization: Basic {base64_credentials}
```

### Create a booking
```bash
POST https://yoursite.com/wp-json/mec/v1/bookings

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"event_id": 101, "first_name": "Jane", "last_name": "Doe", "email": "jane@example.com", "tickets": [{"ticket_id": 1, "quantity": 2}]}
```

### List bookings for an event
```bash
GET https://yoursite.com/wp-json/mec/v1/bookings?event_id={id}

Authorization: Basic {base64_credentials}
```

## Key Fields

### Event
- `id` - Event post ID
- `title` - Event title
- `start` - Start datetime (ISO 8601)
- `end` - End datetime (ISO 8601)
- `location` - Venue name and address
- `tickets` - Array of ticket type objects

### Booking
- `id` - Booking ID
- `event_id` - Associated event ID
- `first_name` - Attendee first name
- `last_name` - Attendee last name
- `email` - Attendee email
- `status` - Booking status (confirmed, pending, cancelled)

## Parameters

- `per_page` - Results per page
- `page` - Page number
- `event_id` - Filter bookings by event

## When to Use

- Publishing and managing events on a WordPress site with booking capability
- Automating attendee registration from external form submissions or purchases
- Querying event booking data for attendee reports or CRM sync
- Building event-based marketing workflows triggered by registrations

## Rate Limits

- Limited by WordPress server capacity; no built-in rate limiting

## Relevant Skills

- marketing:campaign-plan
- marketing:email-sequence
- operations:runbook
