# Beaver Builder Form

Contact form module built into the Beaver Builder WordPress page builder — allows embedding forms directly within page layouts without a separate form plugin.

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
- **Get token**: N/A — requires Beaver Builder premium license

## Common Agent Operations

Beaver Builder Form has no external REST API. Submissions are handled server-side and can be intercepted via WordPress action hooks.

### Hook into Beaver Builder form submission (PHP)

```php
add_action( 'fl_builder_before_save_form', function( $form, $settings ) {
    // $settings contains form field values
    $email = $settings->email ?? '';
    $name  = $settings->name ?? '';
    // Custom logic: send to CRM, email platform, etc.
}, 10, 2 );
```

### After submission hook (PHP)

```php
add_action( 'fl_builder_after_save_form', function( $form, $settings, $mailer, $response ) {
    $email = $settings->email ?? '';
    // Trigger external API call here
}, 10, 4 );
```

### Access field values from settings object

```php
// Field names match the "Name" set in Beaver Builder's form module field editor
$first_name = $settings->first_name ?? '';
$phone      = $settings->phone ?? '';
$message    = $settings->message ?? '';
```

## Key Fields

### Form Submission (via hook settings object)
- Field values are accessed via `$settings->{field_name}` where field_name matches the configured field name in the Beaver Builder form module
- `$form` - Form configuration object (module ID, settings)

### Common Field Types
- Text, email, phone, textarea — standard input fields
- Select, radio, checkbox — selection fields
- Hidden — hidden fields for UTM parameters or tracking data

## Parameters

- Field names are configured per-form in the Beaver Builder module settings; no standardized API parameters

## When to Use

- Forwarding Beaver Builder form submissions to CRM or email platforms via PHP hooks
- Adding custom validation or enrichment logic to form submissions
- Passing UTM data captured in hidden fields to external analytics or CRM systems
- Building contact forms within Beaver Builder layouts without installing a standalone form plugin

## Rate Limits

- No rate limits; governed by WordPress server performance

## Relevant Skills

- lead-generation
- crm-management
- email-marketing
