# WP Travel Engine

WP Travel Engine is a WordPress travel booking plugin for travel agencies and tour operators to manage trip listings, itineraries, pricing packages, and bookings.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `/wp-json/wte/v1/` |
| MCP | - | Not available |
| CLI | ✓ | Via WP-CLI |
| SDK | - | Not available |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List all trips
```
GET https://yoursite.com/wp-json/wte/v1/trips?per_page=50

Authorization: Basic {base64_credentials}
```

### Get trip details
```
GET https://yoursite.com/wp-json/wte/v1/trips/{trip_id}

Authorization: Basic {base64_credentials}
```

### Create a booking
```
POST https://yoursite.com/wp-json/wte/v1/bookings

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "trip_id": 42,
  "traveler_name": "Jane Smith",
  "traveler_email": "jane@example.com",
  "trip_date": "2024-06-15",
  "travelers": 2,
  "package_id": 5
}
```

### List bookings
```
GET https://yoursite.com/wp-json/wte/v1/bookings?status=pending

Authorization: Basic {base64_credentials}
```

## Key Fields

### Trip Object
- `id` - Trip ID
- `title` - Trip name
- `status` - `publish`, `draft`
- `meta._wte_trip_duration` - Trip duration
- `meta._wte_trip_price` - Base price
- `meta._wte_min_pax` - Minimum travelers
- `meta._wte_max_pax` - Maximum group size
- `packages` - Array of trip packages

### Booking Object
- `id` - Booking ID
- `trip_id` - Associated trip ID
- `traveler_name` - Primary traveler name
- `traveler_email` - Contact email
- `trip_date` - Departure date (YYYY-MM-DD)
- `travelers` - Number of travelers
- `total_cost` - Total booking cost
- `status` - `pending`, `confirmed`, `cancelled`, `completed`

### Package Object
- `id` - Package ID
- `name` - Package name
- `price` - Package price per person

## Parameters

- `status` - Filter bookings by status
- `trip_id` - Filter bookings by trip
- `per_page` - Results per page

## When to Use

- Creating bookings programmatically from external inquiry forms or payment systems
- Querying upcoming trips to generate marketing content or social posts
- Building booking dashboards for travel agency operations
- Syncing booking status with CRM contact records for customer follow-up

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit
- Recommend paginated requests for large booking exports

## Relevant Skills

- marketing:campaign-plan
- sales:pipeline-review
- operations:capacity-plan
