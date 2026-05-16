# Hustle

WordPress popup, slide-in, and opt-in plugin for capturing email subscribers and displaying targeted offers.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external API; WordPress plugin only |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | WordPress hooks and filters only |

## Authentication

- **Type**: WordPress admin credentials
- **Header**: `Authorization: Basic {base64(user:app_password)}` for WP REST API
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### Hook into opt-in submission (PHP)

```php
add_action( 'hustle_form_submit_before_set_fields', function( $hustle_form, $data ) {
    // $hustle_form — Hustle form/module object
    // $data — submitted field data array
}, 10, 2 );
```

### Hook into successful opt-in (PHP)

```php
add_action( 'hustle_form_submit_success', function( $module_id, $fields, $hustle_form ) {
    // $module_id — ID of the module that captured the opt-in
    // $fields — submitted field values
}, 10, 3 );
```

### Get module list via WP REST API

```bash
GET https://yoursite.com/wp-json/wp/v2/hustle_module

Authorization: Basic {base64(user:app_password)}
```

### Filter opt-in data before processing (PHP)

```php
add_filter( 'hustle_form_submit_data', function( $data, $module_id ) {
    // Modify or validate $data before it is stored
    return $data;
}, 10, 2 );
```

## Key Fields

### Opt-in Submission
- `module_id` - ID of the Hustle module (popup, slide-in, or embed)
- `email` - Subscriber email address
- `name` - Subscriber name (if field is enabled)
- `fields` - All submitted field key/value pairs
- `hustle_privacy_consent` - GDPR consent checkbox value

### Module Object
- `id` - Unique module identifier
- `module_name` - Human-readable name
- `module_type` - popup | slidein | embedded | social_sharing
- `active` - Whether the module is published

## Parameters

- `module_id` - Target a specific popup or opt-in module
- `per_page` - Results per page for REST queries
- `status` - Filter by module status (publish, draft)

## When to Use

- Growing an email list with timed or exit-intent popups
- Displaying targeted offers to specific page visitors
- Capturing leads with embedded opt-in forms in content
- Running GDPR-compliant consent capture on WordPress sites

## Rate Limits

- No external rate limits; subject to WordPress server capacity

## Relevant Skills

- lead-generation
- email-marketing
- content-creation
