# Demio

Browser-based webinar platform designed for marketers, offering live events, automated webinars, on-demand replays, and built-in engagement and analytics tools.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v1 at my.demio.com/api/v1 |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | No official SDK |

## Authentication

- **Type**: API Key + API Secret (two required headers)
- **Headers**:
  - `Api-Key: {api_key}`
  - `Api-Secret: {api_secret}`
- **Get token**: Demio account > Settings > API

## Common Agent Operations

### List all events
```
GET https://my.demio.com/api/v1/event

Api-Key: {api_key}
Api-Secret: {api_secret}
```

### Get event details
```
GET https://my.demio.com/api/v1/event/{event_id}

Api-Key: {api_key}
Api-Secret: {api_secret}
```

### Register an attendee for an event
```
POST https://my.demio.com/api/v1/event/register

Api-Key: {api_key}
Api-Secret: {api_secret}
Content-Type: application/json

{
  "id": "{event_id}",
  "date_id": "{session_date_id}",
  "name": "Jane Smith",
  "email": "jane@example.com"
}
```

### Get registrants for an event
```
GET https://my.demio.com/api/v1/event/{event_id}/participants

Api-Key: {api_key}
Api-Secret: {api_secret}
```

## Key Fields

### Event
- `id` - Unique event identifier
- `name` - Webinar/event name
- `status` - active / inactive
- `type` - live, automated, or hybrid
- `dates` - Array of scheduled session objects, each with a `date_id`

### Registration
- `id` - Event ID (required)
- `date_id` - Session date ID (required for scheduled sessions)
- `name` - Registrant full name (required)
- `email` - Registrant email (required)
- `ref_url` - Optional referral or tracking URL

### Participant Record
- `name` - Attendee name
- `email` - Attendee email
- `attended` - Boolean attendance status
- `join_time` / `leave_time` - Session timestamps

## Parameters

- `event_id` - Targets a specific event for registration and participant queries
- `date_id` - Targets a specific scheduled session within an event
- `ref_url` - Referral tracking URL passed on registration

## When to Use

- Registering leads from a landing page or opt-in form directly into a Demio webinar
- Granting webinar access automatically after an e-commerce purchase
- Enrolling email subscribers in automated webinar funnels for lead nurturing
- Pulling attendee and no-show data post-event for follow-up segmentation

## Rate Limits

- See [demio.com/developers](https://demio.com/developers) or contact Demio support for current limits

## Relevant Skills

- event-marketing
- lead-generation
- email-marketing
