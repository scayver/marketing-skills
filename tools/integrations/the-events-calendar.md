# The Events Calendar

The Events Calendar is the most popular WordPress event management plugin, providing event listings, RSVP, ticketing, and venue/organizer management.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/tribe/events/v1/` |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI for plugin management |
| SDK | - | No external SDK; use REST directly |

## Authentication

- **Type**: WordPress Application Password (for write operations) or public for reads
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Dashboard > Users > Profile > Application Passwords

## Common Agent Operations

### List Events
```bash
GET https://yoursite.com/wp-json/tribe/events/v1/events

Authorization: Basic {base64_credentials}
```

### Get a Single Event
```bash
GET https://yoursite.com/wp-json/tribe/events/v1/events/{id}
```

### Create an Event
```bash
POST https://yoursite.com/wp-json/tribe/events/v1/events

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "title": "Spring Summit 2026",
  "start_date": "2026-06-01 09:00:00",
  "end_date": "2026-06-01 17:00:00",
  "venue": 15,
  "status": "publish"
}
```

### List Venues
```bash
GET https://yoursite.com/wp-json/tribe/events/v1/venues
```

### List Organizers
```bash
GET https://yoursite.com/wp-json/tribe/events/v1/organizers
```

## Key Fields

### Event
- `id` - Event ID
- `title` - Event name
- `start_date` - ISO 8601 or MySQL format start datetime
- `end_date` - End datetime
- `venue` - Venue ID or object
- `organizer` - Organizer ID or object
- `status` - publish, draft, private

### Venue
- `id` - Venue ID
- `venue` - Venue name
- `address` - Street address
- `city`, `state`, `country` - Location fields

## Parameters

- `start_date` / `end_date` - Filter events by date range
- `status` - Filter by publish/draft
- `per_page` / `page` - Pagination controls
- `search` - Text search across event titles

## When to Use

- Syncing upcoming events to a CRM or marketing calendar
- Triggering promotional emails when events are published
- Building event directories or aggregator feeds
- Reporting on event attendance data

## Rate Limits

- Subject to WordPress server limits; no platform-level rate cap

## Relevant Skills

- marketing:campaign-plan
- marketing:content-creation
- data:explore-data
- operations:process-doc
