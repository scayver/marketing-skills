# NEX-Forms

Premium WordPress form builder with drag-and-drop interface, advanced field types, conditional logic, and built-in submission analytics.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external REST API; WordPress hook-based only |
| MCP | - | No official MCP server |
| CLI | - | No CLI |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress plugin-native (hook-based)
- **Access**: Form submission data is accessed via WordPress action hooks on the same WordPress installation; no external credentials required

## Common Agent Operations

NEX-Forms has no external REST API. Submissions are stored as custom post types and accessed via WordPress hooks or WP REST API.

### List NEX-Forms submissions (via WP REST API)
```bash
GET https://yoursite.com/wp-json/wp/v2/nx-forms-entry

Authorization: Basic {base64_credentials}
```

### Get a specific submission
```bash
GET https://yoursite.com/wp-json/wp/v2/nx-forms-entry/{entry_id}

Authorization: Basic {base64_credentials}
```

### Hook into form submission (PHP — server-side)
```php
add_action('nex_forms_after_successful_save', function($form_id, $entry_id, $form_data) {
    // $form_data contains all submitted field values
    // Forward to external API or service here
}, 10, 3);
```

## Key Fields

### Form Entry
- `form_id` - NEX-Forms form ID
- `entry_id` - Submission entry ID
- Field values keyed by field name (e.g., `first_name`, `email`, `message`)
- `submission_date` - Submission timestamp
- `page_url` - URL where the form was submitted

## Parameters

- `form_id` - Filter entries by form
- `per_page` - Results per page
- `date_from` / `date_to` - Date range filters

## When to Use

- Capturing leads from advanced WordPress forms and routing to CRM or email platforms
- Building forms with conditional logic for segmented data collection
- Logging submissions with built-in analytics to track conversion rates per form
- Triggering server-side automations via PHP hooks on form submission

## Rate Limits

- No external API; limited by WordPress server capacity

## Relevant Skills

- marketing:draft-content
- marketing:email-sequence
- data:validate-data
