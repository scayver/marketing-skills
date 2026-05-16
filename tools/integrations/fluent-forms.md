# Fluent Forms

Fast, lightweight WordPress form builder with drag-and-drop editor, conditional logic, and payment integrations.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via Fluent Forms endpoints |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP hooks and filters |

## Authentication

- **Type**: WordPress Application Password or API Key (Pro)
- **Header**: `Authorization: Basic base64(username:app_password)`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List forms
```bash
GET https://yoursite.com/wp-json/fluentform/v1/forms

Authorization: Basic {base64_credentials}
```

### Get form entries
```bash
GET https://yoursite.com/wp-json/fluentform/v1/entries?form_id={id}

Authorization: Basic {base64_credentials}
```

### Get single entry
```bash
GET https://yoursite.com/wp-json/fluentform/v1/entries/{entry_id}

Authorization: Basic {base64_credentials}
```

### Hook on submission (PHP)
```php
add_action('fluentform/submission_inserted', function($entry_id, $form_data, $form) {
    $email = $form_data['email'] ?? '';
    // Forward via wp_remote_post()
}, 10, 3);
```

## Key Fields

### Form
- `id` - Form ID
- `title` - Form title
- `status` - active, inactive
- `created_at` - Creation timestamp

### Entry
- `id` - Entry ID
- `form_id` - Parent form
- `response` - JSON of submitted field values
- `status` - unread, read, spam, trashed
- `ip` - Submitter IP
- `created_at` - Submission timestamp

## Parameters

- `form_id` - Filter entries by form
- `status` - Filter by entry status
- `per_page` / `page` - Pagination
- `date_range` - Start and end dates

## When to Use

- Sync form leads to a CRM or email platform
- Pull submission data for reporting
- Trigger automations on specific form completions
- Analyze form conversion rates

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit

## Relevant Skills

- marketing:email-sequence
- data:analyze
- operations:process-doc
