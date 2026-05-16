# Piotnet Forms

WordPress form builder emphasizing design flexibility, multi-step forms, and built-in connections to marketing and CRM platforms.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external API; WordPress-native only |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP action/filter hooks |

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Piotnet Forms installed and active on the same WordPress site
- **Note**: External platform connections use each platform's own API key configured within Piotnet Forms settings

## Common Agent Operations

Piotnet Forms does not expose a standalone REST API. Interact via WordPress REST or PHP hooks.

### Hook: On form submission

```php
add_action('piotnetforms_after_submission', function($form_id, $entry_id, $fields) {
    // $fields contains all submitted field values
    // $form_id identifies which form was submitted
}, 10, 3);
```

### Hook: On form submission validation pass

```php
add_filter('piotnetforms_before_submission_insert', function($data, $form_id) {
    // Modify or inspect $data before it is saved
    return $data;
}, 10, 2);
```

### List form entries (WordPress admin REST)

```bash
GET https://yoursite.com/wp-json/wp/v2/piotnet-forms-entries

Authorization: Bearer {application_password}
```

## Key Fields

### Form Submission Data
- `form_id` - ID of the submitted form
- `entry_id` - Database entry ID
- `fields` - Array of field values keyed by field name
- `submitted_at` - Submission timestamp
- `page_url` - Page where form was submitted
- `user_id` - WordPress user ID if logged in

## Parameters

- `form_id` - Target specific form
- `entry_id` - Reference a specific submission

## When to Use

- Capturing leads from multi-step WordPress forms
- Building registration or onboarding flows with conditional steps
- Routing form submissions to email marketing platforms via hooks
- Collecting survey or feedback data within WordPress

## Rate Limits

- No external API; subject to WordPress server limits only

## Relevant Skills

- marketing:draft-content
- marketing:email-sequence
- operations:process-doc
