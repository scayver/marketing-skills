# Google Calendar

Google's scheduling and time-management service for creating, sharing, and managing events and appointments.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Google Calendar API v3 |
| MCP | ✓ | Available via Google Calendar MCP |
| CLI | - | Not available |
| SDK | ✓ | Official client libraries for Python, Node.js, Java, PHP, Go |

## Authentication

- **Type**: OAuth 2.0
- **Header**: `Authorization: Bearer {access_token}`
- **Get token**: Google Cloud Console > Credentials > OAuth 2.0 Client ID; scopes: `https://www.googleapis.com/auth/calendar`

## Common Agent Operations

### List calendars
```bash
GET https://www.googleapis.com/calendar/v3/users/me/calendarList

Authorization: Bearer {access_token}
```

### List events
```bash
GET https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events?timeMin=2024-06-01T00:00:00Z&maxResults=50

Authorization: Bearer {access_token}
```

### Create event
```bash
POST https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events

Authorization: Bearer {access_token}
Content-Type: application/json

{
  "summary": "Kickoff Meeting",
  "start": {"dateTime": "2024-06-15T10:00:00-05:00"},
  "end": {"dateTime": "2024-06-15T11:00:00-05:00"},
  "attendees": [{"email": "jane@example.com"}]
}
```

### Update event
```bash
PATCH https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}

Authorization: Bearer {access_token}
Content-Type: application/json

{"status": "cancelled"}
```

## Key Fields

### Event
- `id` - Event ID
- `summary` - Event title
- `description` - Event details
- `start` / `end` - DateTime or Date objects
- `attendees` - Array of `{email, responseStatus}` objects
- `status` - confirmed, tentative, cancelled
- `location` - Physical or virtual location
- `conferenceData` - Google Meet link info

### Calendar
- `id` - Calendar ID (often an email address)
- `summary` - Calendar display name
- `accessRole` - owner, writer, reader

## Parameters

- `timeMin` / `timeMax` - ISO 8601 date range filter
- `maxResults` - Max events returned (default 250)
- `singleEvents` - Expand recurring events (true/false)
- `orderBy` - startTime or updated

## When to Use

- Book appointments from form submissions
- Sync CRM meetings to Google Calendar
- Automate event creation for webinars or calls
- Monitor upcoming events for reminders

## Rate Limits

- 1,000,000 quota units/day; most operations cost 1-5 units

## Relevant Skills

- sales:call-prep
- operations:runbook
- marketing:campaign-plan
