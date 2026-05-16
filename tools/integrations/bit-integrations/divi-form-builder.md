# Divi Form Builder (by Divi Engine)

Third-party add-on for Divi Builder that extends the native Divi contact form module with advanced field types, multi-step forms, conditional logic, file uploads, and payment fields.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external API; WordPress-only plugin |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | Not available |
| WordPress REST | - | No dedicated REST endpoint; use PHP hooks |

## Authentication

- **Type**: WordPress application password (for any WP REST access)
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### Hook into Divi Form Builder submission (PHP)
```php
add_action('divi_form_builder_submitted', function($entry, $form_settings) {
    // $entry — array of submitted field values
    // $form_settings — form configuration object
}, 10, 2);
```

### Query submission entries via WP-CLI
```bash
wp post list --post_type=dfb_entry --fields=ID,post_title,post_date
```

### Get a submission entry via REST
```
GET /wp-json/wp/v2/posts/{entry_id}?post_type=dfb_entry

Authorization: Basic {base64_credentials}
```

### List all Divi Form Builder forms
```
GET /wp-json/wp/v2/posts?post_type=dfb_form&per_page=100

Authorization: Basic {base64_credentials}
```

## Key Fields

### Entry (Submission)
- `form_id` - ID of the originating form
- `date_submitted` - Submission timestamp
- Field values are stored as post meta keyed by field name/ID configured in the form builder

### Form Settings
- `id` - Form post ID
- `title` - Form name
- `fields` - Array of field configuration objects (type, label, required, conditional logic rules)
- `notifications` - Email notification configuration
- `confirmation` - Post-submission confirmation type (message or redirect)

## Parameters

- `form_id` - Identifies the specific Divi Form Builder form
- `entry` - Associative array of field values passed to PHP submission hooks
- `field_id` - Unique field identifier used as the key in the entry array

## When to Use

- Capturing multi-step form submissions from complex Divi-built pages
- Processing file upload form data (resumes, portfolios, documents) submitted via Divi forms
- Triggering automations when conditional-logic forms are completed
- Building advanced lead capture or application forms inside Divi without switching page builders

## Rate Limits

- No external API; performance governed by WordPress server capacity

## Relevant Skills

- lead-generation
- content-strategy
