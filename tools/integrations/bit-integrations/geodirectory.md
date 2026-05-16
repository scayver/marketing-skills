# GeoDirectory

Scalable WordPress business directory and listings plugin for building local directory sites like Yelp or Airbnb.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via GeoDirectory endpoints |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP hooks and filters |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic base64(username:app_password)`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List listings
```bash
GET https://yoursite.com/wp-json/geodir/v2/listings

Authorization: Basic {base64_credentials}
```

### Get single listing
```bash
GET https://yoursite.com/wp-json/geodir/v2/listings/{id}

Authorization: Basic {base64_credentials}
```

### Create listing
```bash
POST https://yoursite.com/wp-json/geodir/v2/listings

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "title": "Jane's Coffee Shop",
  "status": "publish",
  "geodir_location": "New York, NY",
  "geodir_email": "jane@example.com"
}
```

### List categories
```bash
GET https://yoursite.com/wp-json/geodir/v2/categories

Authorization: Basic {base64_credentials}
```

## Key Fields

### Listing
- `id` - Listing post ID
- `title` - Business name
- `status` - publish, draft, pending
- `geodir_email` - Business email
- `geodir_phone` - Phone number
- `geodir_website` - Website URL
- `geodir_location` - Address/location
- `latitude` / `longitude` - Coordinates
- `rating` - Average rating
- `category` - Category array

### Category
- `id` - Category ID
- `name` - Category name
- `slug` - URL slug
- `count` - Listing count

## Parameters

- `status` - Filter by listing status
- `category` - Filter by category ID or slug
- `location` - Filter by location keyword
- `per_page` / `page` - Pagination

## When to Use

- Bulk import business listings from CSV or external data
- Sync new listings to a CRM for follow-up outreach
- Export directory data for offline analysis
- Automate listing approval notifications

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit

## Relevant Skills

- marketing:content-creation
- data:analyze
- small-business:business-pulse
