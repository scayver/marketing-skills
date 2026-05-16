# FormCraft

Premium WordPress form builder with a visual editor, responsive design, conditional logic, and payment form support.

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
- **Get token**: No API token; FormCraft license required for advanced hooks

## Common Agent Operations

### Capture form submission (PHP hook)
```php
add_action('formcraft_post_submit', function($form_data) {
    $form_id = $form_data['form_id'] ?? '';
    $fields  = $form_data['field_values'] ?? [];
    $email   = $fields['email'] ?? '';
    // Forward to external system via wp_remote_post()
});
```

### Send to webhook (built-in integration)
```
FormCraft > Form Editor > Integrations > Webhook
URL: https://your-endpoint.com/webhook
Method: POST
Include: All fields as JSON
```

### Access entry data via hook
```php
add_filter('formcraft_submit_response', function($response, $form_id, $fields) {
    // Modify or log response
    return $response;
}, 10, 3);
```

## Key Fields

### Form Submission
- `form_id` - ID of the FormCraft form
- `field_values` - Key-value array of submitted fields
- `submission_id` - Unique submission identifier
- `submission_date` - Timestamp

### Field Object
- `field_name` - Field key (set in editor)
- `field_label` - Display label
- `field_value` - Submitted value
- `field_type` - text, email, dropdown, file, etc.

## Parameters

- `form_id` - Target form identifier
- Field names are defined per-form in the FormCraft editor

## When to Use

- Capture leads from styled multi-step forms
- Route payment form data to fulfillment workflows
- Trigger CRM contact creation on submission
- Send conditional email notifications based on field values

## Rate Limits

- No external API; server-side PHP only

## Relevant Skills

- marketing:email-sequence
- operations:process-doc
