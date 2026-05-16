# Advanced Custom Fields (ACF)

The most widely used WordPress plugin for adding structured custom field groups to posts, pages, users, taxonomy terms, and other content types.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `/wp-json/acf/v3/` (ACF Pro) |
| MCP | - | Not available |
| CLI | ✓ | WP-CLI `wp acf` commands via ACF CLI addon |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords > Add New

## Common Agent Operations

### Get ACF fields for a post

```bash
GET https://yoursite.com/wp-json/acf/v3/posts/{post_id}

Authorization: Basic {base64_credentials}
```

### Get ACF fields for a user

```bash
GET https://yoursite.com/wp-json/acf/v3/users/{user_id}

Authorization: Basic {base64_credentials}
```

### Update ACF field values on a post

```bash
POST https://yoursite.com/wp-json/acf/v3/posts/{post_id}

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"fields": {"field_key_abc123": "New Value", "field_key_def456": "Another Value"}}
```

### Get field group definitions

```bash
GET https://yoursite.com/wp-json/acf/v3/field-groups

Authorization: Basic {base64_credentials}
```

### Get fields in a specific group

```bash
GET https://yoursite.com/wp-json/acf/v3/field-groups/{group_id}/fields

Authorization: Basic {base64_credentials}
```

## Key Fields

### ACF Field
- `key` - Unique field key (e.g., `field_63a1b2c3d4e5f`)
- `name` - Field name (slug-style, e.g., `phone_number`)
- `label` - Human-readable label
- `type` - text, textarea, number, email, url, image, file, select, checkbox, radio, date_picker, relationship, etc.
- `value` - Current field value

### Field Group
- `id` - Group ID
- `title` - Group title
- `location` - Conditions for where this group appears
- `fields` - Array of field definitions

## Parameters

- `post_id` - Target post ID for field reads/writes
- `user_id` - Target user ID for user field reads/writes
- `per_page` - Results per page
- `page` - Pagination page

## When to Use

- Reading or writing structured metadata on WordPress posts and users via REST
- Populating custom field data from external data sources or form submissions
- Exporting ACF field values to external analytics or CRM systems
- Building headless WordPress applications that consume ACF-structured content

## Rate Limits

- Subject to WordPress server limits; no platform-enforced rate limiting

## Relevant Skills

- content-strategy
- crm-management
