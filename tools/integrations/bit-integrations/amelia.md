# Amelia

Professional WordPress booking plugin for appointments, events, and services with a polished front-end calendar, employee management, and payment processing.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `/wp-json/amelia/v1/` |
| MCP | - | Not available |
| CLI | - | No WP-CLI support |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress Application Password or Amelia API key (Amelia Pro)
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords > Add New

## Common Agent Operations

### List appointments

```bash
GET https://yoursite.com/wp-json/amelia/v1/appointments?page=1&limit=20

Authorization: Basic {base64_credentials}
```

### Get a single appointment

```bash
GET https://yoursite.com/wp-json/amelia/v1/appointments/{appointment_id}

Authorization: Basic {base64_credentials}
```

### Create an appointment

```bash
POST https://yoursite.com/wp-json/amelia/v1/bookings

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "serviceId": 3,
  "providerId": 1,
  "bookingStart": "2025-08-15 10:00:00",
  "customer": {
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "jane@example.com",
    "phone": "+15551234567"
  }
}
```

### List customers

```bash
GET https://yoursite.com/wp-json/amelia/v1/users/customers?page=1&limit=50

Authorization: Basic {base64_credentials}
```

### List services

```bash
GET https://yoursite.com/wp-json/amelia/v1/services

Authorization: Basic {base64_credentials}
```

## Key Fields

### Appointment
- `id` - Appointment ID
- `serviceId` - ID of the booked service
- `providerId` - Employee/provider ID
- `bookingStart` - Start datetime (YYYY-MM-DD HH:MM:SS)
- `bookingEnd` - End datetime
- `status` - approved, pending, canceled, no-show
- `customer` - Nested customer object

### Customer
- `id` - Customer ID
- `firstName`, `lastName` - Name fields
- `email` - Customer email
- `phone` - Phone number

### Service
- `id` - Service ID
- `name` - Service name
- `duration` - Duration in seconds
- `price` - Service price

## Parameters

- `page` - Pagination page number
- `limit` - Results per page
- `status` - Filter appointments by status
- `serviceId` - Filter by service
- `providerId` - Filter by employee

## When to Use

- Syncing Amelia booking data to external CRM or email marketing platforms
- Creating appointments programmatically from external intake forms
- Reporting on appointment volume, revenue, and employee performance
- Triggering post-booking workflows (confirmation emails, CRM updates) on booking events

## Rate Limits

- Subject to WordPress server limits; no platform-enforced rate limiting

## Relevant Skills

- crm-management
- email-marketing
- event-marketing
