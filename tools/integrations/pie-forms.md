# Pie Forms

WordPress drag-and-drop form builder with built-in integrations for email marketing, payments, and CRM platforms.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external API; WordPress-native only |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP action/filter hooks |

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Pie Forms installed and active on the same WordPress site
- **Note**: External connections use each platform's own credentials configured within Pie Forms settings

## Common Agent Operations

Pie Forms does not expose a standalone REST API. Interact with form data via WordPress REST API or PHP hooks.

### List forms (WordPress REST API)

```bash
GET https://yoursite.com/wp-json/wp/v2/pie-forms

Authorization: Bearer {application_password}
```

### Hook: On form submission

```php
add_action('pie_forms_process_complete', function($fields, $entry, $form_data) {
    // $fields contains all submitted field values
    // $form_data contains form ID and settings
}, 10, 3);
```

### Hook: After entry saved

```php
add_action('pie_forms_entry_save', function($entry_id, $fields, $form_data) {
    // Fires after the entry is stored in the database
}, 10, 3);
```

## Key Fields

### Form Submission Data
- `form_id` - ID of the submitted form
- `fields` - Array of field values keyed by field ID
- `entry_id` - Database entry ID
- `date_created` - Submission timestamp
- `user_id` - Logged-in user ID (if applicable)

## Parameters

- `form_id` - Target specific form
- `field_id` - Target specific field within a form

## When to Use

- Capturing leads from WordPress contact and inquiry forms
- Building multi-step registration or onboarding forms
- Collecting survey responses for analysis
- Triggering downstream automations on form submission via hooks

## Rate Limits

- No external API; subject to WordPress server limits only

## Relevant Skills

- marketing:draft-content
- operations:process-doc
- human-resources:onboarding
