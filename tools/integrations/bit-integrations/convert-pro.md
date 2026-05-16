# Convert Pro

WordPress opt-in and popup plugin with advanced targeting rules, A/B testing, behavioral triggers, and built-in integrations with major email marketing platforms.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external API; WordPress-only plugin |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | Not available |
| WordPress REST | ✓ | Standard WP REST API for post types; PHP hooks for lead events |

## Authentication

- **Type**: WordPress application password (for REST access)
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### Hook into opt-in submission (PHP)
```php
add_action('cp_conversion_data', function($post_id, $data) {
    // $post_id — ID of the Convert Pro module
    // $data — array of submitted fields including email, name
}, 10, 2);
```

### List Convert Pro modules (as WordPress posts)
```
GET /wp-json/wp/v2/posts?post_type=cp_module&per_page=100

Authorization: Basic {base64_credentials}
```

### Get a specific module
```
GET /wp-json/wp/v2/posts/{module_post_id}

Authorization: Basic {base64_credentials}
```

### Query conversion log via WP-CLI
```bash
wp db query "SELECT * FROM wp_cp_conversion_log ORDER BY date DESC LIMIT 50;"
```

## Key Fields

### Conversion Event
- `post_id` - WordPress post ID of the Convert Pro module (popup/bar/widget)
- `email` - Subscriber email address captured from the opt-in form
- `name` - Subscriber name (if name field is included)
- `module_type` - Type of display (popup, slide-in, info-bar, widget)

### Module Post
- `ID` - WordPress post ID
- `post_title` - Module name
- `post_status` - publish / draft
- `meta` - Contains targeting rules, design settings, connected integrations

## Parameters

- `post_id` - Identifies the Convert Pro module that triggered the conversion
- `data` - Associative array of submitted opt-in field values in PHP hooks
- `module_type` - Display format of the triggering opt-in

## When to Use

- Capturing popup and slide-in opt-in leads and routing them to CRM or email platforms
- Triggering automations when a visitor converts via a specific campaign or A/B test variant
- Logging popup conversion data for attribution alongside UTM parameters
- Syncing targeted opt-in leads (exit intent, scroll-triggered) with downstream marketing tools

## Rate Limits

- No external API; performance governed by WordPress server capacity

## Relevant Skills

- lead-generation
- email-marketing
- content-strategy
