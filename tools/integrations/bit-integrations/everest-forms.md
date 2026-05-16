# Everest Forms

WordPress form builder with drag-and-drop interface and premium add-ons for advanced form functionality.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external REST API |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | WordPress action hooks |

## Authentication

- **Type**: WordPress server-side hook access
- **Header**: N/A — server-side PHP integration only
- **Get token**: No API token required

## Common Agent Operations

### Capture form submission (PHP hook)
```php
add_action('everest_forms_process_complete', function($form_data, $fields, $entry, $form_id) {
    $email = $fields['field_id_1']['value'] ?? '';
    $name  = $fields['field_id_0']['value'] ?? '';
    // Forward via wp_remote_post()
}, 10, 4);
```

### Access entries via database
```php
global $wpdb;
$entries = $wpdb->get_results(
    "SELECT * FROM {$wpdb->prefix}evf_entries WHERE form_id = {$form_id}"
);
```

### Get forms list (WP REST)
```bash
GET https://yoursite.com/wp-json/wp/v2/posts?post_type=evf-form

Authorization: Basic {base64_credentials}
```

## Key Fields

### Submission
- `form_id` - ID of the Everest form
- `entry_id` - Unique submission record
- `fields` - Keyed array of field values
- `date_created` - Submission timestamp

### Field Object
- `field_id` - Internal field identifier
- `name` - Field label
- `value` - Submitted value
- `type` - text, email, dropdown, checkbox, etc.

## Parameters

- `form_id` - Target form to hook
- Hook priority adjustable (default 10)

## When to Use

- Send leads from WordPress contact forms to a CRM
- Trigger welcome emails on newsletter signups
- Log support requests to a ticketing system
- Notify team on high-priority form submissions

## Rate Limits

- No external API; server-side PHP only

## Relevant Skills

- marketing:email-sequence
- operations:process-doc
