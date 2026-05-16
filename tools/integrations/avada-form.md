# Avada Form

Built-in form builder included with the Avada WordPress theme and page builder — allows creating contact forms, surveys, and opt-in forms directly within Avada layouts.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No public external REST API |
| MCP | - | Not available |
| CLI | - | No WP-CLI support |
| SDK | - | WordPress PHP hooks only |

## Authentication

- **Type**: WordPress admin access
- **Header**: N/A — plugin managed within WordPress admin
- **Get token**: N/A — requires Avada theme license and active installation

## Common Agent Operations

Avada Form has no external REST API. Form submissions are handled server-side and can be intercepted via WordPress hooks.

### Hook into Avada Form submission (PHP)

```php
add_action( 'fusion_form_after_submit', function( $form_data, $form_id ) {
    $email = $form_data['email-1'] ?? '';
    $name  = $form_data['text-1'] ?? '';
    // Custom logic: forward to CRM, log, etc.
}, 10, 2 );
```

### Access Avada form entries via admin

Avada Form stores entries in the WordPress database under custom tables. Query via:

```php
global $wpdb;
$entries = $wpdb->get_results(
    $wpdb->prepare(
        "SELECT * FROM {$wpdb->prefix}fusion_form_submissions WHERE form_id = %d ORDER BY time DESC LIMIT 50",
        $form_id
    )
);
```

### Retrieve form fields list (PHP)

```php
$form_post = get_post( $form_id );
$form_meta = get_post_meta( $form_id, '_fusion_builder_status', true );
```

## Key Fields

### Form Submission
- `form_id` - Avada form post ID
- `form_name` - Form title/name
- `time` - Submission timestamp
- Field values keyed by field element name (e.g., `email-1`, `text-1`, `textarea-1`)

### Common Field Types
- `text` / `email` / `phone` / `textarea` - Standard input fields
- `select` / `radio` / `checkbox` - Selection fields
- `hidden` - Hidden fields for UTM params or page data
- `file` - File upload field

## Parameters

- `form_id` - Avada form post ID
- Field element names vary by form configuration

## When to Use

- Processing Avada form submissions with custom PHP for CRM or email platform integration
- Capturing lead data from Avada-built landing pages via hooks
- Routing Avada form submissions to external services using webhook forwarding
- Building forms natively within Avada layouts without installing a separate form plugin

## Rate Limits

- No rate limits; governed by WordPress server performance

## Relevant Skills

- lead-generation
- crm-management
- email-marketing
