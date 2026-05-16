# JetEngine

WordPress plugin by Crocoblock for creating custom post types, meta fields, taxonomies, dynamic listings, and relations.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at /wp-json/jet-engine/v3/ |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | WordPress hooks and REST API only |

## Authentication

- **Type**: WordPress Application Password (Basic Auth)
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### Get custom post type entries

```bash
GET https://yoursite.com/wp-json/wp/v2/{custom_post_type_slug}?per_page=100

Authorization: Basic {base64(user:app_password)}
```

### Create a custom post type entry

```bash
POST https://yoursite.com/wp-json/wp/v2/{custom_post_type_slug}

Authorization: Basic {base64(user:app_password)}
Content-Type: application/json

{"title": "New Entry", "status": "publish", "meta": {"custom_field_key": "value"}}
```

### Update meta fields on an entry

```bash
POST https://yoursite.com/wp-json/wp/v2/{custom_post_type_slug}/{post_id}

Authorization: Basic {base64(user:app_password)}
Content-Type: application/json

{"meta": {"field_key": "updated_value"}}
```

### Query JetEngine listings

```bash
GET https://yoursite.com/wp-json/jet-engine/v3/listings

Authorization: Basic {base64(user:app_password)}
```

### Hook into JetEngine form submission (PHP)

```php
add_action( 'jet-form-builder/form-handler/after-send', function( $handler ) {
    $form_id = $handler->form_id;
    $fields  = $handler->request_handler->get_fields();
    // Process submitted fields
} );
```

## Key Fields

### Custom Post Type Entry
- `id` - WordPress post ID
- `title` - Entry title (rendered as `title.rendered`)
- `status` - publish | draft | private
- `meta` - Associative array of JetEngine custom meta field values
- `date` - Creation timestamp (ISO 8601)

### Relation Object
- `parent_id` - ID of the parent post in the relation
- `child_id` - ID of the child post in the relation
- `rel_id` - Relation definition ID in JetEngine

## Parameters

- `per_page` - Number of results (default 10, max 100)
- `page` - Pagination page
- `meta_key` / `meta_value` - Filter by meta field
- `orderby` - Sort field
- `order` - ASC | DESC

## When to Use

- Managing dynamic directory or listing data in WordPress
- Creating and updating custom database records from external events
- Building custom post type entries from form submissions or API calls
- Syncing custom WordPress content with external platforms

## Rate Limits

- No external rate limits; subject to WordPress server capacity

## Relevant Skills

- content-creation
- lead-generation
- ecommerce
