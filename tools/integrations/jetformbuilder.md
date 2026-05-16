# JetFormBuilder

Gutenberg-native WordPress form builder by Crocoblock with post creation, user registration, and booking actions built in.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at /wp-json/jet-form-builder/v1/ |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | WordPress hooks and REST API only |

## Authentication

- **Type**: WordPress Application Password (Basic Auth)
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List all forms

```bash
GET https://yoursite.com/wp-json/jet-form-builder/v1/forms

Authorization: Basic {base64(user:app_password)}
```

### Get form fields

```bash
GET https://yoursite.com/wp-json/jet-form-builder/v1/forms/{form_id}/fields

Authorization: Basic {base64(user:app_password)}
```

### Get form records (submissions)

```bash
GET https://yoursite.com/wp-json/jet-form-builder/v1/records?form_id={form_id}

Authorization: Basic {base64(user:app_password)}
```

### Hook into form submission (PHP)

```php
add_action( 'jet-form-builder/form-handler/after-send', function( $handler ) {
    $form_id = $handler->form_id;
    $fields  = $handler->request_handler->get_fields();
    // Access submitted field values
} );
```

## Key Fields

### Form Object
- `id` - Unique form ID (WordPress post ID)
- `title` - Form name
- `fields` - Array of field definitions (name, type, label, required)

### Record (Submission) Object
- `id` - Record ID
- `form_id` - ID of the submitted form
- `user_id` - WordPress user ID if logged in (0 for guests)
- `created_at` - Submission timestamp
- `fields` - Key/value pairs of submitted field data

## Parameters

- `form_id` - Filter records by form
- `per_page` - Number of results
- `page` - Pagination offset
- `status` - Filter by record status

## When to Use

- Building complex Gutenberg-block forms with multi-step flows
- Capturing leads and creating WordPress posts/users directly on submission
- Managing form submission records within WordPress
- Building booking and registration forms with built-in post creation

## Rate Limits

- No external rate limits; subject to WordPress server capacity

## Relevant Skills

- lead-generation
- email-marketing
- content-creation
