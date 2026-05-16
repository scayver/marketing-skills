# Essential Addons for Elementor

Popular Elementor extension adding 80+ widgets, including a form widget for building forms within Elementor page layouts.

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
- **Get token**: No API token; Elementor Pro + Essential Addons required

## Common Agent Operations

### Capture form submission (PHP hook)
```php
add_action('eael/contact-form/after_send_email', function($record, $fields) {
    $email = $fields['email'] ?? '';
    $name  = $fields['name'] ?? '';
    // Forward to external API via wp_remote_post()
}, 10, 2);
```

### Use Elementor Pro form hook (also fires for EAEL forms)
```php
add_action('elementor_pro/forms/new_record', function($record, $handler) {
    $fields = $record->get('fields');
    // Same hook as Elementor Pro form widget
}, 10, 2);
```

### Built-in integrations in widget settings
```
Essential Addons Form widget > Form Actions:
- Email notification
- Redirect URL
- Webhook (POST to external URL)
- MailChimp, ActiveCampaign (via widget settings)
```

## Key Fields

### Form Record
- `form_name` - Name from Elementor editor
- `fields` - Array of field objects with `id`, `value`, `label`
- `id` - Widget element ID

### Field Object
- `id` - Field key/slug
- `value` - Submitted value
- `label` - Display label
- `type` - text, email, tel, select, textarea

## Parameters

- Field IDs are defined per-form in the Elementor/EAEL editor
- Hook priority can be adjusted (default 10)

## When to Use

- Capture leads from Elementor landing pages
- Trigger CRM contact creation on form submit
- Send confirmation emails with custom data
- Route form data to different destinations by form name

## Rate Limits

- No external API; server-side PHP only

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- operations:process-doc
