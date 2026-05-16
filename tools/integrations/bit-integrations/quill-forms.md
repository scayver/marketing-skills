# Quill Forms

WordPress form builder for creating Typeform-style conversational forms with a smooth one-question-at-a-time interface to improve completion rates.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external API; WordPress-native only |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP action/filter hooks |

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Quill Forms installed and active on the same WordPress site
- **Note**: No external credentials required

## Common Agent Operations

Quill Forms does not expose a standalone external REST API. Interact via WordPress hooks.

### Hook: On form submission

```php
add_action('quillforms_entry_saved', function($entry_id, $form_id, $entry_data) {
    // $entry_data['answers'] contains all field responses
    // Fires after the entry is stored
}, 10, 3);
```

### Hook: Before entry saved

```php
add_filter('quillforms_before_entry_save', function($entry_data, $form_id) {
    // Modify or inspect data before saving
    return $entry_data;
}, 10, 2);
```

### List forms (WordPress REST)

```bash
GET https://yoursite.com/wp-json/wp/v2/quill-forms

Authorization: Bearer {application_password}
```

## Key Fields

### Submission Data
- `entry_id` - Database entry ID
- `form_id` - Quill Forms form post ID
- `answers` - Array of block ID to answer value
- `submitted_at` - Submission timestamp
- `user_id` - WordPress user ID if logged in
- `source_url` - Page URL where form was submitted

## Parameters

- `form_id` - Target specific form
- `entry_id` - Reference a specific submission

## When to Use

- Building conversational surveys or lead qualification questionnaires
- Creating multi-step onboarding flows with higher completion rates
- Collecting qualitative feedback from customers in a guided format
- Running polls or quizzes with branching logic

## Rate Limits

- No external API; subject to WordPress server limits only

## Relevant Skills

- marketing:draft-content
- marketing:campaign-plan
- data:analyze
