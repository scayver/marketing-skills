# ARForms

Premium WordPress form builder with drag-and-drop interface, advanced field types, conditional logic, multi-step forms, and payment gateway integrations.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No public external REST API |
| MCP | - | Not available |
| CLI | - | No WP-CLI support |
| SDK | - | WordPress PHP hooks only |

## Authentication

- **Type**: WordPress admin access
- **Header**: N/A — plugin managed entirely within WordPress admin
- **Get token**: N/A — configure via WordPress Admin > ARForms

## Common Agent Operations

ARForms has no external REST API. Form submissions are handled server-side and can be acted on via WordPress hooks.

### Hook into form submission (PHP)

```php
add_action( 'arfb_after_save_entry', function( $entry_id, $form_id, $form_data ) {
    $email = $form_data['field_email'] ?? '';
    $name  = $form_data['field_name'] ?? '';
    // Custom logic: send to CRM, log, etc.
}, 10, 3 );
```

### Get form entries via WordPress database

```php
global $wpdb;
$entries = $wpdb->get_results(
    $wpdb->prepare(
        "SELECT * FROM {$wpdb->prefix}arflb_entries WHERE form_id = %d ORDER BY created_at DESC LIMIT 50",
        $form_id
    )
);
```

### Query entries via standard WP REST (if enabled)

```bash
GET https://yoursite.com/wp-json/wp/v2/arforms-entries?form_id=3

Authorization: Basic {base64_credentials}
```

## Key Fields

### Form Entry
- `entry_id` - Unique submission ID
- `form_id` - Parent form ID
- `form_name` - Human-readable form name
- `created_at` - Submission timestamp
- Field values keyed by field slug or ID (varies by form configuration)

### Common Field Types
- `text` / `email` / `phone` / `textarea` - Standard input fields
- `dropdown` / `radio` / `checkbox` - Selection fields
- `file` - File upload (stored URL)
- `hidden` - Hidden fields (UTM params, page URL, referrer)

## Parameters

- `form_id` - Filter entries by specific form
- `entry_id` - Retrieve a specific submission

## When to Use

- Processing form submissions with custom PHP logic for advanced integrations
- Logging ARForms entries to external CRM or email platforms via hooks
- Pulling historical submission data for reporting or migration
- Combining ARForms with a no-code automation layer using webhook forwarding

## Rate Limits

- No rate limits; governed by WordPress server performance

## Relevant Skills

- lead-generation
- crm-management
- email-marketing
