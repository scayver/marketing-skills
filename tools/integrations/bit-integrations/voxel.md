# Voxel

Voxel is a WordPress theme framework and directory/listing builder for creating custom post type directories, classifieds, booking sites, and community platforms with advanced field types and search.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API for Voxel custom post types via WP core endpoints |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI for plugin management |
| SDK | - | No external SDK; interact via WP REST directly |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Dashboard > Users > Profile > Application Passwords

## Common Agent Operations

### List Posts of a Custom Post Type
```bash
GET https://yoursite.com/wp-json/wp/v2/{post_type}

Authorization: Basic {base64_credentials}
```

### Get a Single Listing
```bash
GET https://yoursite.com/wp-json/wp/v2/{post_type}/{id}

Authorization: Basic {base64_credentials}
```

### Create a Listing
```bash
POST https://yoursite.com/wp-json/wp/v2/{post_type}

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "title": "Joe's Coffee Shop",
  "status": "publish",
  "meta": {
    "address": "123 Main St",
    "phone": "+15551234567"
  }
}
```

### Update a Listing
```bash
POST https://yoursite.com/wp-json/wp/v2/{post_type}/{id}

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"meta": {"status": "verified"}}
```

### Query Listings with Search Parameters
```bash
GET https://yoursite.com/wp-json/wp/v2/{post_type}?search=coffee&meta_key=city&meta_value=Boston

Authorization: Basic {base64_credentials}
```

## Key Fields

### Listing (Custom Post Type)
- `id` - WordPress post ID
- `title` - Listing name
- `status` - publish, draft, pending
- `author` - WordPress user ID of listing owner
- `meta` - Key-value map of Voxel custom fields (address, phone, hours, etc.)
- `date` - ISO 8601 creation date

## Parameters

- `post_type` - The slug of the Voxel-registered custom post type (e.g., `places`, `listings`)
- `per_page` / `page` - Pagination controls
- `author` - Filter by listing owner user ID
- `status` - Filter by post status

## When to Use

- Programmatically creating directory listings from external data sources
- Syncing listing status changes to CRM or notification systems
- Reporting on listing counts by category, location, or status
- Building bulk import tools for directory entries

## Rate Limits

- Subject to WordPress server limits; no platform-level rate cap

## Relevant Skills

- marketing:content-creation
- data:explore-data
- operations:process-doc
- product-management:write-spec
