# Bit Assist Form

WordPress chat widget and support plugin by Bit Apps that includes a built-in contact form inside the chat interface — captures leads and support requests directly from the chat bubble.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/bit-assist/v1/` |
| MCP | - | Not available |
| CLI | - | No WP-CLI support |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords > Add New

## Common Agent Operations

### List form submissions

```bash
GET https://yoursite.com/wp-json/bit-assist/v1/submissions?per_page=50&page=1

Authorization: Basic {base64_credentials}
```

### Get a single submission

```bash
GET https://yoursite.com/wp-json/bit-assist/v1/submissions/{submission_id}

Authorization: Basic {base64_credentials}
```

### List configured chat widgets

```bash
GET https://yoursite.com/wp-json/bit-assist/v1/widgets

Authorization: Basic {base64_credentials}
```

### Hook into form submission (PHP)

```php
add_action( 'bit_assist_form_submitted', function( $form_data, $widget_id ) {
    $email = $form_data['email'] ?? '';
    $name  = $form_data['name'] ?? '';
    // Forward to CRM, email platform, etc.
}, 10, 2 );
```

## Key Fields

### Submission
- `id` - Submission ID
- `widget_id` - Source chat widget ID
- `form_fields` - Object containing submitted field values
- `submitted_at` - Submission timestamp
- `page_url` - Page where the form was submitted

### Form Fields (typical)
- `name` - Submitter name
- `email` - Email address
- `phone` - Phone number
- `message` - Message or inquiry text

## Parameters

- `per_page` - Results per page
- `page` - Pagination page
- `widget_id` - Filter submissions by specific widget

## When to Use

- Capturing lead and support data submitted through the chat widget form
- Forwarding chat widget form submissions to CRM or email platforms
- Pulling submission history for follow-up or reporting purposes
- Building automated responses triggered by chat widget form submissions

## Rate Limits

- Subject to WordPress server limits; no platform-enforced rate limiting

## Relevant Skills

- lead-generation
- crm-management
- email-marketing
