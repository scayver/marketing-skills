# Piotnet Addons For Elementor (PAFE)

WordPress plugin that extends Elementor with additional widgets, form elements, and marketing-focused features for building advanced pages and forms.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external API; WordPress-native only |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP action/filter hooks |

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Elementor and PAFE installed and active on the same WordPress site
- **Note**: No external credentials; each marketing platform integration uses its own API key configured within PAFE settings

## Common Agent Operations

PAFE does not expose a standalone REST API. Interact via WordPress REST API or PHP hooks.

### Hook: On PAFE form submission

```php
add_action('pafe_form_submit', function($form_id, $fields) {
    // $form_id is the Elementor widget form ID
    // $fields contains all submitted field values
}, 10, 2);
```

### Hook: After successful submission

```php
add_action('pafe_form_submit_success', function($record, $ajax_handler) {
    // $record->get_formatted_data() returns field values
}, 10, 2);
```

### List Elementor posts containing PAFE forms (WordPress REST)

```bash
GET https://yoursite.com/wp-json/wp/v2/pages?meta_key=_elementor_data

Authorization: Bearer {application_password}
```

## Key Fields

### Form Submission Data
- `form_id` - Elementor widget/form ID
- `fields` - Associative array of field ID to value
- `page_url` - Page where the form was submitted
- `submission_date` - Timestamp of submission
- `user_id` - WordPress user ID if logged in

## Parameters

- `form_id` - Target specific PAFE form
- `field_id` - Target a specific field within the form

## When to Use

- Building Elementor-powered lead capture forms with advanced conditional logic
- Creating multi-step forms inside Elementor page designs
- Collecting data from Elementor pages and routing to CRM or email tools via hooks
- Extending Elementor with login, registration, and profile widgets

## Rate Limits

- No external API; subject to WordPress server limits only

## Relevant Skills

- marketing:draft-content
- marketing:content-creation
- operations:process-doc
