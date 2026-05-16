# Forminator

Free WordPress form, quiz, and poll builder by WPMU DEV supporting contact forms, payment forms, quizzes, and polls.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via Forminator endpoints |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP hooks and filters |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic base64(username:app_password)`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List forms
```bash
GET https://yoursite.com/wp-json/forminator/v1/form

Authorization: Basic {base64_credentials}
```

### Get form submissions
```bash
GET https://yoursite.com/wp-json/forminator/v1/form/{form_id}/submissions

Authorization: Basic {base64_credentials}
```

### Get single submission
```bash
GET https://yoursite.com/wp-json/forminator/v1/form/{form_id}/submissions/{entry_id}

Authorization: Basic {base64_credentials}
```

### Hook on form submission (PHP)
```php
add_action('forminator_form_after_save_entry', function($entry_id, $module_slug) {
    $entry = Forminator_Form_Entry_Model::get_model($entry_id);
    $fields = $entry->meta_data;
    // Forward to external system
}, 10, 2);
```

## Key Fields

### Form
- `id` - Form ID
- `name` - Form name
- `type` - form, poll, quiz
- `status` - published, draft

### Submission (Entry)
- `entry_id` - Submission ID
- `form_id` - Parent form
- `fields` - Array of `{name, value}` objects
- `date_created_sql` - MySQL datetime string
- `ip` - Submitter IP

### Field Object
- `name` - Field key (e.g., `email-1`, `name-1`)
- `value` - Submitted value

## Parameters

- `form_id` - Target form ID
- `per_page` / `page` - Pagination
- `filters` - Field-value filter array

## When to Use

- Route contact form submissions to CRM
- Pull quiz results for lead scoring
- Collect poll data for audience research
- Trigger post-submission email sequences

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit

## Relevant Skills

- marketing:email-sequence
- data:analyze
- operations:process-doc
