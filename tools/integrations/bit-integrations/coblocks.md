# CoBlocks

Gutenberg block suite for WordPress (by GoDaddy) that includes a Form block, enabling contact forms to be embedded directly within the WordPress block editor.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external API; WordPress-only plugin |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | Not available |
| WordPress REST | ✓ | Standard WP REST API for block post types |

## Authentication

- **Type**: WordPress application password (for REST access)
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### Hook into CoBlocks form submission (PHP)
```php
add_action('coblocks_form_submit', function($data, $form_id) {
    // $data contains submitted field values keyed by label
    // $form_id is the post ID of the page containing the form
}, 10, 2);
```

### Query pages containing CoBlocks form blocks
```
GET /wp-json/wp/v2/pages?per_page=100

Authorization: Basic {base64_credentials}
```
Then inspect `content.rendered` or `content.raw` for `<!-- wp:coblocks/form` block markup.

### Get a specific page by ID
```
GET /wp-json/wp/v2/pages/{page_id}

Authorization: Basic {base64_credentials}
```

## Key Fields

### Form Submission Data
- `name` - Submitter name field value
- `email` - Submitter email field value
- `message` - Message or textarea field value
- `subject` - Optional subject field
- `form_id` - WordPress post ID of the page containing the form

### Block Markup Attributes
- `subject` - Email subject line configured in block settings
- `to` - Notification recipient email
- `successText` - Confirmation message shown after submission

## Parameters

- `form_id` - Page post ID where the CoBlocks form block is embedded
- `data` - Associative array of submitted field values in PHP hooks

## When to Use

- Capturing contact form leads from pages built entirely in the WordPress block editor
- Triggering automations (CRM, email list) when visitors submit a Gutenberg-native form
- Logging block editor form submissions to a spreadsheet or database
- Sending team notifications when a block-based contact form is completed

## Rate Limits

- No external API; performance governed by WordPress server capacity

## Relevant Skills

- lead-generation
- content-strategy
