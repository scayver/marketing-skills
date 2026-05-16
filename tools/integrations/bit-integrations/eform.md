# eForm

WordPress form and survey builder supporting contact forms, quizzes, payment forms, and multi-page surveys.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external REST API |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | WordPress action/filter hooks |

## Authentication

- **Type**: WordPress admin credentials for hook-based access
- **Header**: N/A — server-side PHP hooks only
- **Get token**: No API token; integrate via WordPress hooks in functions.php or a custom plugin

## Common Agent Operations

### Capture form submission (PHP hook)
```php
add_action('eform_after_submit', function($form_data, $form_id) {
    $name  = $form_data['your_name'] ?? '';
    $email = $form_data['your_email'] ?? '';
    // Forward to external system via wp_remote_post()
}, 10, 2);
```

### Get form data via WordPress REST (custom endpoint)
```bash
GET https://yoursite.com/wp-json/wp/v2/posts?post_type=eform

Authorization: Basic {base64_credentials}
```

### Retrieve saved entries (database query)
```php
global $wpdb;
$entries = $wpdb->get_results(
    "SELECT * FROM {$wpdb->prefix}eform_entries WHERE form_id = 5"
);
```

## Key Fields

### Form Submission
- `form_id` - ID of the eForm form
- `entry_id` - Unique submission ID
- `submitted_at` - Submission timestamp
- `fields` - Key-value map of field names to values

## Parameters

- `form_id` - Target form identifier
- `entry_id` - Specific submission to retrieve

## When to Use

- Capture lead or survey data and forward to a CRM
- Trigger email notifications on quiz completion
- Log form submissions to a custom database table
- Build multi-step data collection workflows server-side

## Rate Limits

- No external API; limits are server-side only

## Relevant Skills

- marketing:draft-content
- operations:process-doc
