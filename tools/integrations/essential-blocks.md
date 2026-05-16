# Essential Blocks

Gutenberg block library for WordPress adding 40+ blocks, including a Form block for building forms in the block editor.

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
add_action('eb_form_submit', function($form_data, $form_id) {
    $email = $form_data['email'] ?? '';
    $name  = $form_data['name'] ?? '';
    // Forward to CRM or email platform via wp_remote_post()
}, 10, 2);
```

### Access form configuration
```bash
GET https://yoursite.com/wp-json/wp/v2/posts/{post_id}

Authorization: Basic {base64_credentials}
# Parse block content for eb/form block attributes
```

### Send to webhook via built-in integration
```
Essential Blocks Form > Settings > Integrations:
- Webhook URL field (POST JSON to external endpoint)
- MailChimp list ID
- ConvertKit form ID
```

## Key Fields

### Form Submission
- `form_id` - Block client ID or post ID
- `fields` - Key-value map of field IDs to submitted values
- `submitted_at` - Timestamp of submission

### Block Attributes (in page HTML/JSON)
- `formLabel` - Form title
- `inputFields` - Array of field configurations
- `successMessage` - Confirmation text

## Parameters

- Field names are defined in the Gutenberg block editor
- Hook fires once per valid submission

## When to Use

- Capture contact or feedback form submissions
- Route block editor form data to email marketing lists
- Log submissions to a CRM or database
- Trigger post-submission notifications

## Rate Limits

- No external API; server-side PHP only

## Relevant Skills

- marketing:email-sequence
- operations:process-doc
