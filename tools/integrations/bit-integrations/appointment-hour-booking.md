# Appointment Hour Booking

WordPress plugin for managing time-slot based appointment bookings with configurable services, schedules, staff, and payment options.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/ahb/v1/` |
| MCP | - | Not available |
| CLI | - | No WP-CLI support |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords > Add New

## Common Agent Operations

### List bookings

```bash
GET https://yoursite.com/wp-json/ahb/v1/bookings?page=1&per_page=20

Authorization: Basic {base64_credentials}
```

### Get a single booking

```bash
GET https://yoursite.com/wp-json/ahb/v1/bookings/{booking_id}

Authorization: Basic {base64_credentials}
```

### Create a booking

```bash
POST https://yoursite.com/wp-json/ahb/v1/bookings

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "service_id": 2,
  "date": "2025-08-20",
  "time_slot": "10:00",
  "customer_name": "Jane Doe",
  "customer_email": "jane@example.com",
  "customer_phone": "+15551234567"
}
```

### List available time slots

```bash
GET https://yoursite.com/wp-json/ahb/v1/slots?service_id=2&date=2025-08-20

Authorization: Basic {base64_credentials}
```

### List services

```bash
GET https://yoursite.com/wp-json/ahb/v1/services

Authorization: Basic {base64_credentials}
```

## Key Fields

### Booking
- `id` - Booking ID
- `service_id` - Booked service ID
- `date` - Booking date (YYYY-MM-DD)
- `time_slot` - Start time (HH:MM)
- `status` - pending, confirmed, cancelled
- `customer_name` - Customer full name
- `customer_email` - Customer email
- `customer_phone` - Customer phone

### Service
- `id` - Service ID
- `name` - Service name
- `duration` - Duration in minutes
- `price` - Service price

### Time Slot
- `time` - Slot start time (HH:MM)
- `available` - Boolean availability

## Parameters

- `page` - Pagination page
- `per_page` - Results per page
- `date` - Filter bookings by date
- `service_id` - Filter by service
- `status` - Filter by booking status

## When to Use

- Creating bookings programmatically from external intake forms or payment flows
- Reporting on appointment volume and schedule utilization
- Syncing booking data to external CRM or email marketing platforms
- Checking slot availability before creating a booking via API

## Rate Limits

- Subject to WordPress server limits; no platform-enforced rate limiting

## Relevant Skills

- crm-management
- email-marketing
- event-marketing
