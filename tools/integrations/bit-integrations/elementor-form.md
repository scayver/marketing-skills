# Elementor Form

Elementor Pro's built-in Form widget for building and embedding forms directly within Elementor page layouts.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external REST API |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | WordPress action hooks (Pro required) |

## Authentication

- **Type**: WordPress server-side hook access
- **Header**: N/A — server-side PHP integration only
- **Get token**: No API token; Elementor Pro license required for form widget

## Common Agent Operations

### Capture form submission (PHP hook)
```php
add_action('elementor_pro/forms/new_record', function($record, $handler) {
    $fields = $record->get('fields');
    $email  = $fields['email']['value'] ?? '';
    $name   = $fields['name']['value'] ?? '';
    // Forward data to external system via wp_remote_post()
}, 10, 2);
```

### Access form metadata
```php
add_action('elementor_pro/forms/new_record', function($record, $handler) {
    $form_name = $record->get_form_settings('form_name');
    $page_id   = $record->get_form_settings('id');
    $raw       = $record->get('fields'); // All submitted fields
}, 10, 2);
```

### Send data to webhook (built-in action)
```
Elementor Form > Actions After Submit > Webhook
URL: https://your-endpoint.com/webhook
Method: POST
```

## Key Fields

### Form Record
- `form_name` - Name set in Elementor editor
- `id` - Elementor widget ID
- `fields` - Array of field objects with `id`, `value`, `label`

### Field Object
- `id` - Field slug/ID
- `value` - Submitted value
- `label` - Display label
- `type` - text, email, tel, select, textarea, etc.

## Parameters

- `form_name` - Identify which form fired the hook
- Field IDs - Defined per form in the Elementor editor

## When to Use

- Route leads from landing page forms to a CRM
- Trigger welcome emails on form submission
- Log contact form submissions to a spreadsheet
- Sync form data to marketing automation platforms

## Rate Limits

- No external API; server-side PHP only

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- operations:process-doc
