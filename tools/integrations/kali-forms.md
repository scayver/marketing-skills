# Kali Forms

WordPress form builder plugin with drag-and-drop interface, conditional logic, and multi-step form support.

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

### Hook into form submission (PHP)

```php
add_action( 'kali_forms_after_submission', function( $form_id, $fields ) {
    // $form_id — ID of the submitted Kali Forms form
    // $fields — associative array of field slugs and submitted values
}, 10, 2 );
```

### Hook before submission is stored (PHP)

```php
add_action( 'kali_forms_before_submission', function( $form_id, $fields ) {
    // Runs before the submission is saved to the database
}, 10, 2 );
```

### List form submissions via WP REST API

```bash
GET https://yoursite.com/wp-json/wp/v2/kali-forms-entries?form_id={form_id}

Authorization: Basic {base64(user:app_password)}
```

### Get all forms

```bash
GET https://yoursite.com/wp-json/wp/v2/kali-forms?per_page=100

Authorization: Basic {base64(user:app_password)}
```

## Key Fields

### Submission Object
- `form_id` - ID of the form that was submitted
- `date_created` - Submission timestamp
- `email` - Submitter email (if an email field is present)
- `name` - Submitter name (if a name field is present)
- `fields` - Array of all field label/value pairs submitted
- `page_url` - URL of the page where the form was submitted

### Form Object
- `id` - Unique form ID
- `title` - Form name
- `fields` - Array of field definitions (type, label, slug, required)

## Parameters

- `form_id` - Filter entries by specific form
- `per_page` - Number of results per page
- `page` - Pagination offset
- `orderby` - Sort by date or ID

## When to Use

- Creating multi-step lead capture forms on WordPress
- Running contact, survey, or registration forms with conditional logic
- Collecting submissions that need to route to email marketing or CRM tools

## Rate Limits

- No external rate limits; subject to WordPress server capacity

## Relevant Skills

- lead-generation
- email-marketing
- content-creation
