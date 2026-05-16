# FluentBooking

WordPress appointment scheduling plugin with calendar management, availability slots, and team booking.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via FluentBooking endpoints |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP hooks and filters |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic base64(username:app_password)`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List bookings
```bash
GET https://yoursite.com/wp-json/fluent-booking/v2/bookings

Authorization: Basic {base64_credentials}
```

### Get single booking
```bash
GET https://yoursite.com/wp-json/fluent-booking/v2/bookings/{id}

Authorization: Basic {base64_credentials}
```

### List calendars
```bash
GET https://yoursite.com/wp-json/fluent-booking/v2/calendars

Authorization: Basic {base64_credentials}
```

### Get available slots
```bash
GET https://yoursite.com/wp-json/fluent-booking/v2/calendars/{id}/slots?date=2024-06-15

Authorization: Basic {base64_credentials}
```

## Key Fields

### Booking
- `id` - Booking ID
- `calendar_id` - Source calendar
- `status` - pending, scheduled, cancelled, completed
- `guest_email` - Booker email
- `guest_name` - Booker name
- `start_time` / `end_time` - ISO 8601 timestamps
- `meeting_notes` - Optional notes
- `meeting_url` - Video call link (if integrated)

### Calendar
- `id` - Calendar ID
- `title` - Calendar name
- `host_id` - WordPress user hosting the calendar
- `duration` - Default meeting duration (minutes)
- `timezone` - Host timezone

## Parameters

- `status` - Filter bookings by status
- `calendar_id` - Filter by calendar
- `from` / `until` - Date range filter
- `per_page` / `page` - Pagination

## When to Use

- Sync new bookings to a CRM as leads or contacts
- Send reminder emails before appointments
- Log completed meetings for follow-up tasks
- Report on booking volume and cancellation rates

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit

## Relevant Skills

- sales:call-prep
- marketing:email-sequence
- operations:runbook
