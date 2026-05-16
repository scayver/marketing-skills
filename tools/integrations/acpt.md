# ACPT

WordPress plugin for building and managing custom post types, taxonomies, and meta fields through a visual interface — no code required.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/acpt/v1/` |
| MCP | - | Not available |
| CLI | - | No WP-CLI support |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords > Add New

## Common Agent Operations

### List custom post types

```bash
GET https://yoursite.com/wp-json/acpt/v1/post-types

Authorization: Basic {base64_credentials}
```

### Get meta field definitions for a post type

```bash
GET https://yoursite.com/wp-json/acpt/v1/post-types/{post_type}/meta-fields

Authorization: Basic {base64_credentials}
```

### Create a post with meta fields

```bash
POST https://yoursite.com/wp-json/acpt/v1/posts

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "post_type": "listing",
  "title": "New Listing",
  "status": "publish",
  "meta": {"price": "250", "location": "New York"}
}
```

### Update meta fields on an existing post

```bash
PUT https://yoursite.com/wp-json/acpt/v1/posts/{post_id}/meta

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"price": "300", "status_field": "active"}
```

### Query posts by meta field value

```bash
GET https://yoursite.com/wp-json/acpt/v1/posts?post_type=listing&meta_key=location&meta_value=New+York

Authorization: Basic {base64_credentials}
```

## Key Fields

### Post Type
- `slug` - Post type identifier (e.g., `listing`, `property`)
- `label` - Human-readable name
- `supports` - Enabled WordPress features (title, editor, thumbnail)

### Meta Field
- `field_name` - Field key used in queries and API
- `field_type` - text, number, date, select, image, etc.
- `field_group` - Group the field belongs to
- `required` - Whether the field is required

## Parameters

- `post_type` - Filter by custom post type slug
- `meta_key` - Meta field name to filter by
- `meta_value` - Value to match for meta_key filter
- `per_page` - Results per page (default 10)
- `page` - Pagination page

## When to Use

- Building custom WordPress databases or directories driven by structured data
- Populating ACPT-managed post types from external form submissions or data feeds
- Querying structured content for reporting or data export
- Managing listings, profiles, or records with typed meta fields

## Rate Limits

- Subject to WordPress server limits; no platform-enforced rate limiting

## Relevant Skills

- content-strategy
- crm-management
