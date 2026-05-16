# FormGent

Conversational WordPress form builder that presents forms as interactive, chat-like experiences to improve completion rates.

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
add_action('formgent_after_submission', function($submission_id, $form_id, $answers) {
    foreach ($answers as $key => $value) {
        // $key = question slug, $value = answer
    }
    $email = $answers['email'] ?? '';
    // Forward via wp_remote_post()
}, 10, 3);
```

### Access submissions via admin REST
```bash
GET https://yoursite.com/wp-json/formgent/v1/submissions?form_id={id}

Authorization: Basic {base64_credentials}
```

### Get form list
```bash
GET https://yoursite.com/wp-json/formgent/v1/forms

Authorization: Basic {base64_credentials}
```

## Key Fields

### Submission
- `submission_id` - Unique submission ID
- `form_id` - Parent form ID
- `answers` - Key-value map of question slugs to responses
- `created_at` - ISO 8601 timestamp
- `ip_address` - Submitter IP

### Form
- `id` - Form ID
- `title` - Form name
- `status` - active, inactive
- `questions` - Array of question objects

### Question Object
- `slug` - Question key (used as answer key)
- `type` - text, email, multiple_choice, dropdown
- `label` - Display text

## Parameters

- `form_id` - Filter submissions by form
- `per_page` / `page` - Pagination

## When to Use

- Capture conversational lead gen data and send to a CRM
- Trigger personalized follow-up emails based on answers
- Log quiz or survey responses for analysis
- Build interactive onboarding flows

## Rate Limits

- No external API; server-side PHP only

## Relevant Skills

- marketing:email-sequence
- data:analyze
- operations:process-doc
