# MetForm

Elementor-based WordPress form builder for creating forms as drag-and-drop widgets with conditional logic, multi-step support, and built-in analytics.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external REST API; WordPress-native plugin only |
| MCP | - | No official MCP server |
| CLI | - | No CLI |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress plugin-native (hook-based)
- **Access**: Form submission data is accessed via WordPress action hooks (`metform/form/action/submit`) on the same WordPress installation

## Common Agent Operations

MetForm has no external REST API. Integration is via WordPress hooks or the WP REST API for post data.

### List MetForm forms (via WP REST API)
```bash
GET https://yoursite.com/wp-json/wp/v2/metform-form

Authorization: Basic {base64_credentials}
```

### Get form submissions (stored as custom post type)
```bash
GET https://yoursite.com/wp-json/wp/v2/metform-entry?form_id={form_id}

Authorization: Basic {base64_credentials}
```

### Hook into form submission (PHP — server-side)
```php
add_action('metform/form/action/submit', function($data, $form_id) {
    // $data contains all submitted field values
    // Process or forward to external API here
}, 10, 2);
```

## Key Fields

### Form Entry
- `form_id` - MetForm form ID
- `mf_name` - Submitted name field
- `mf_email` - Submitted email field
- `mf_phone` - Submitted phone field
- `mf_message` - Submitted message/textarea
- Custom fields keyed by field ID

## Parameters

- `form_id` - Filter entries by form
- `per_page` - Results per page
- `status` - Entry publish status

## When to Use

- Capturing leads from Elementor-built forms and routing to CRM or email platforms via hooks
- Logging form submissions for analytics using server-side PHP integrations
- Building multi-step forms within Elementor page builder
- Collecting conditional-logic-based form responses for segmented follow-up

## Rate Limits

- No external API; rate limits are WordPress server-dependent

## Relevant Skills

- marketing:draft-content
- marketing:email-sequence
- data:validate-data
