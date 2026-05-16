# WooCommerce Bookings

WooCommerce Bookings is the official WooCommerce extension for selling appointments, rentals, and time-based services with calendar-integrated booking management.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `/wp-json/wc-bookings/v1/` |
| MCP | - | Not available |
| CLI | ✓ | Via WP-CLI with WooCommerce commands |
| SDK | - | Not available |

## Authentication

- **Type**: Consumer Key + Consumer Secret (same as WooCommerce REST API)
- **Header**: `Authorization: Basic {base64(consumer_key:consumer_secret)}`
- **Get token**: WooCommerce Admin > Settings > Advanced > REST API > Add Key

## Common Agent Operations

### List bookings
```
GET https://yoursite.com/wp-json/wc-bookings/v1/bookings?per_page=50

Authorization: Basic {base64_credentials}
```

### Get a specific booking
```
GET https://yoursite.com/wp-json/wc-bookings/v1/bookings/{booking_id}

Authorization: Basic {base64_credentials}
```

### Create a booking
```
POST https://yoursite.com/wp-json/wc-bookings/v1/bookings

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "product_id": 42,
  "customer_id": 15,
  "start_date": "2024-03-15",
  "end_date": "2024-03-15",
  "status": "confirmed"
}
```

### Get available slots for a bookable product
```
GET https://yoursite.com/wp-json/wc-bookings/v1/products/{product_id}/slots?start=2024-03-01&end=2024-03-31

Authorization: Basic {base64_credentials}
```

## Key Fields

### Booking Object
- `id` - Booking ID
- `status` - `unpaid`, `pending`, `confirmed`, `cancelled`, `complete`
- `product_id` - ID of the bookable product
- `customer_id` - WordPress user ID of the customer
- `start_date` - Booking start date (YYYY-MM-DD or Unix timestamp)
- `end_date` - Booking end date
- `order_id` - Associated WooCommerce order ID
- `resource_id` - Assigned resource (room, staff, equipment)

### Resource Object
- `id` - Resource ID
- `title` - Resource name (e.g., "Room A", "Staff Member")
- `availability` - Availability rules array

## Parameters

- `status` - Filter bookings by status
- `product_id` - Filter by bookable product
- `customer_id` - Filter by customer
- `after` / `before` - ISO 8601 date range for booking dates

## When to Use

- Creating bookings programmatically from external scheduling forms or CRM events
- Querying upcoming appointments for reminder or notification workflows
- Syncing booking status with external calendar systems (Google Calendar, Outlook)
- Building availability checkers for service-based businesses

## Rate Limits

- No built-in rate limits; subject to WordPress server capacity
- Recommend paginated requests with `per_page=100` for bulk exports

## Relevant Skills

- marketing:campaign-plan
- operations:capacity-plan
- customer-support:customer-research
