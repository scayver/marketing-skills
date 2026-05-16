# HappyForms

WordPress form builder plugin with a clean interface for creating contact, survey, and lead capture forms.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external API; WordPress plugin only |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | WordPress hooks and filters only |

## Authentication

- **Type**: WordPress admin credentials
- **Header**: `Authorization: Basic {base64(user:app_password)}` for WP REST API
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List form submissions via WordPress REST API

```bash
GET https://yoursite.com/wp-json/wp/v2/happyforms-submissions

Authorization: Basic {base64(user:app_password)}
```

### Trigger action on form submission (PHP hook)

```php
add_action( 'happyforms_submission_complete', function( $form, $values ) {
    // $form — form object with ID, title, and field config
    // $values — associative array of submitted field values
}, 10, 2 );
```

### Get all forms

```bash
GET https://yoursite.com/wp-json/wp/v2/happyforms-forms

Authorization: Basic {base64(user:app_password)}
```

### Get a specific form's fields

```bash
GET https://yoursite.com/wp-json/wp/v2/happyforms-forms/{form_id}

Authorization: Basic {base64(user:app_password)}
```

## Key Fields

### Submission Object
- `form_id` - ID of the form that was submitted
- `date_created` - Submission timestamp
- `fields` - Array of field name/value pairs submitted
- `sender_ip` - Submitter IP address
- `page_url` - URL of the page where form was submitted

### Form Object
- `id` - Unique form identifier
- `title` - Form name
- `parts` - Array of field definitions (label, type, required)

## Parameters

- `form_id` - Filter submissions by form
- `per_page` - Number of results (default 10, max 100)
- `page` - Pagination offset

## When to Use

- Capturing leads from WordPress contact forms
- Running surveys and collecting responses on-site
- Building custom intake forms without coding
- Connecting form submissions to downstream workflows via hooks

## Rate Limits

- No external rate limits; subject to WordPress server capacity

## Relevant Skills

- lead-generation
- email-marketing
- content-creation
