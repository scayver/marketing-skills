# Kadence Blocks Form

Gutenberg block suite for WordPress including a built-in Form block for creating contact and lead forms within the block editor.

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
add_action( 'kadence_blocks_form_submission', function( $form_data, $fields, $post_id ) {
    // $form_data — all submitted field values as array
    // $fields — field configuration from the block
    // $post_id — WordPress post ID where the form lives
}, 10, 3 );
```

### Hook into submission after email send (PHP)

```php
add_action( 'kadence_blocks_form_submission_actions', function( $fields, $post_id, $form_args ) {
    // $fields — submitted data
    // Runs after Kadence has processed its own notification emails
}, 10, 3 );
```

### Query form submissions via WP REST API

```bash
GET https://yoursite.com/wp-json/kb-custom/v1/form-submissions?post_id={post_id}

Authorization: Basic {base64(user:app_password)}
```

### Get all block-based forms on a post

```bash
GET https://yoursite.com/wp-json/wp/v2/posts/{post_id}?context=edit

Authorization: Basic {base64(user:app_password)}
```

## Key Fields

### Submission Data
- `_kb_form_id` - Unique Kadence form block ID on the page
- `email` - Submitter email (if field is included)
- `name` - Submitter name (if field is included)
- `message` - Message body field value
- `post_id` - WordPress post/page where the form is embedded

### Block Configuration
- `field_id` - Unique ID per field in the block settings
- `label` - Visible field label
- `type` - text | email | tel | textarea | select | checkbox | radio
- `required` - Whether the field is required

## Parameters

- `post_id` - Filter submissions by the page containing the form
- `per_page` - Number of results for REST queries

## When to Use

- Building contact and lead forms within the Gutenberg block editor
- Integrating form submissions with email marketing or CRM tools via hooks
- Collecting inquiries from sites built entirely with Kadence Blocks theme/blocks
- Keeping form management inside WordPress without a separate form plugin license

## Rate Limits

- No external rate limits; subject to WordPress server capacity

## Relevant Skills

- lead-generation
- email-marketing
- content-creation
