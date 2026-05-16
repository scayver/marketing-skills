# Divi Form (Divi Builder Contact Form Module)

The built-in Contact Form module in Divi Builder (by Elegant Themes), allowing forms to be embedded within any Divi page layout using the visual drag-and-drop editor.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external API; WordPress-only |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | Not available |
| WordPress REST | - | No dedicated REST endpoint; use PHP hooks |

## Authentication

- **Type**: WordPress application password (for any WP REST access)
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### Hook into Divi Contact Form submission (PHP)
```php
add_filter('et_pb_contact_form_submit_notification_subject', function($subject, $contact_form) {
    return $subject;
}, 10, 2);

add_action('et_pb_contact_form_submit', function($contact_form_info, $fields) {
    // $fields contains submitted field values keyed by field label
}, 10, 2);
```

### Intercept via wp_mail (alternative approach)
```php
add_filter('wp_mail', function($args) {
    // Identify Divi form emails by subject or to address
    // Parse $args['message'] to extract field values
    return $args;
});
```

### List Divi-built pages via REST
```
GET /wp-json/wp/v2/pages?per_page=100

Authorization: Basic {base64_credentials}
```
Then inspect `content.raw` for `[et_pb_contact_form` shortcodes or `et_pb_contact_form` block markup.

## Key Fields

### Submission Data
- Field values are keyed by the field's custom `field_id` attribute as set in the Divi module settings
- Default fields: `et_pb_contact_name`, `et_pb_contact_email`, `et_pb_contact_message`
- Custom fields use the ID set in the Divi Builder field options

### Contact Form Module Settings
- `form_field` - Repeating child modules defining each input
- `email` - Notification recipient address
- `success_message` - Confirmation text shown after submit
- `use_redirect` - Whether to redirect after submission
- `redirect_url` - URL to redirect to on success

## Parameters

- `contact_form_info` - Object passed to `et_pb_contact_form_submit` with form metadata
- `fields` - Associative array of submitted field values in PHP hook callbacks

## When to Use

- Capturing leads from contact or inquiry forms built inside Divi page layouts
- Triggering CRM or email list automations when a Divi form is submitted
- Logging Divi form submissions to external systems via PHP hooks
- Building simple lead capture pages using the Divi visual builder without separate form plugins

## Rate Limits

- No external API; performance governed by WordPress server and hosting configuration

## Relevant Skills

- lead-generation
- content-strategy
