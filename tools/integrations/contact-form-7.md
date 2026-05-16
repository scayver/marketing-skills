# Contact Form 7

The most widely installed WordPress form plugin (5+ million active installations) for building and embedding contact forms using simple shortcodes and tag syntax.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external API |
| MCP | - | Not available |
| CLI | ✓ | WP-CLI for managing forms and settings |
| SDK | - | Not available |
| WordPress REST | ✓ | REST API at /wp-json/contact-form-7/v1/ |

## Authentication

- **Type**: WordPress application password (for REST access)
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List all forms
```
GET /wp-json/contact-form-7/v1/contact-forms

Authorization: Basic {base64_credentials}
```

### Get a specific form
```
GET /wp-json/contact-form-7/v1/contact-forms/{form_id}

Authorization: Basic {base64_credentials}
```

### Submit a form programmatically
```
POST /wp-json/contact-form-7/v1/contact-forms/{form_id}/feedback

Content-Type: multipart/form-data

your-name=Jane Smith&your-email=jane@example.com&your-message=Hello
```

### Hook into form submission (PHP)
```php
add_action('wpcf7_mail_sent', function($contact_form) {
    $submission = WPCF7_Submission::get_instance();
    $data = $submission->get_posted_data();
    // $data contains all submitted field values
});
```

### List forms via WP-CLI
```bash
wp post list --post_type=wpcf7_contact_form --fields=ID,post_title
```

## Key Fields

### Form Configuration
- `id` - Unique form ID
- `title` - Form name as set in admin
- `form` - Form tag template markup
- `mail` - Mail template configuration object

### Submission Data (via PHP hook)
- `your-name` - Default name field (field names are customizable)
- `your-email` - Default email field
- `your-message` - Default message field
- `_wpcf7_unit_tag` - Unique submission identifier

## Parameters

- `form_id` - Targets a specific form for REST operations
- `per_page` - Number of forms to return (REST listing)
- `offset` - Pagination offset (REST listing)

## When to Use

- Triggering CRM or email list automations when a contact form is submitted
- Capturing lead data from the most common WordPress form plugin
- Logging form submissions to external systems via the REST API or PHP hooks
- Building simple contact, inquiry, or quote request forms with minimal setup

## Rate Limits

- No external API; REST API rate limited by WordPress server and hosting configuration

## Relevant Skills

- lead-generation
- content-strategy
