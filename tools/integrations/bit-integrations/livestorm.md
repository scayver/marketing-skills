# Livestorm

Browser-based webinar and video meeting platform with registrant management, engagement tools, and analytics.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API for events, sessions, registrants, and attendees |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | API only |

## Authentication

- **Type**: API Key
- **Header**: `Authorization: {api_key}`
- **Get key**: Livestorm dashboard > Organization Settings > API

## Common Agent Operations

### List all events

```bash
GET https://api.livestorm.co/v1/events

Authorization: {api_key}
Content-Type: application/vnd.api+json
```

### Get event sessions

```bash
GET https://api.livestorm.co/v1/events/{event_id}/sessions

Authorization: {api_key}
Content-Type: application/vnd.api+json
```

### Register a contact for a session

```bash
POST https://api.livestorm.co/v1/sessions/{session_id}/people

Authorization: {api_key}
Content-Type: application/vnd.api+json

{"data": {"type": "people", "attributes": {"email": "jane@example.com", "first_name": "Jane", "last_name": "Doe"}}}
```

### Get registrants for a session

```bash
GET https://api.livestorm.co/v1/sessions/{session_id}/people?filter[role]=registrant

Authorization: {api_key}
Content-Type: application/vnd.api+json
```

### Get attendees for a session

```bash
GET https://api.livestorm.co/v1/sessions/{session_id}/people?filter[role]=participant

Authorization: {api_key}
Content-Type: application/vnd.api+json
```

## Key Fields

### Event Object
- `id` - Unique event ID
- `title` - Event name
- `slug` - URL slug for registration page
- `estimated_duration` - Duration in minutes

### Session Object
- `id` - Unique session ID
- `event_id` - Parent event ID
- `status` - created | scheduled | started | ended
- `started_at` - Session start time (ISO 8601)
- `registrants_count` - Number of registered people

### Person (Registrant/Attendee) Object
- `id` - Unique person ID
- `email` - Email address
- `first_name`, `last_name` - Name fields
- `role` - registrant | participant | team_member
- `participated_in` - Sessions attended

## Parameters

- `filter[role]` - Filter by person role (registrant, participant)
- `page[number]` - Pagination page
- `page[size]` - Results per page
- `event_id` - Filter sessions by event

## When to Use

- Registering contacts for webinars from landing page forms or purchases
- Pulling attendee lists after a webinar for CRM or follow-up sequences
- Tracking registration and attendance rates for live and on-demand events
- Automating event registration workflows based on external triggers

## Rate Limits

- See developers.livestorm.co for current rate limits

## Relevant Skills

- lead-generation
- email-marketing
- content-creation
