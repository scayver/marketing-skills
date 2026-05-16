# Contact Form Email

Lightweight WordPress plugin that captures form submissions and delivers them to a specified email address, with a minimal configuration footprint suited for simple contact needs.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external API |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | Not available |
| WordPress REST | - | No dedicated REST endpoint; use PHP hooks |

## Authentication

- **Type**: WordPress authentication (for any WP REST access)
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### Hook into form submission (PHP)
The plugin fires a WordPress action when a form is processed. Hook name may vary by plugin version — check the plugin source or documentation for the exact action name.

```php
// Generic approach — intercept the submission at wp_mail time
add_filter('wp_mail', function($args) {
    // Inspect $args['to'] to identify Contact Form Email messages
    // Extract submitted data from $args['message']
    return $args;
});
```

### Query form configurations via WP-CLI
```bash
wp option list --search="contact_form_email_*"
```

### Retrieve stored settings
```
GET /wp-json/wp/v2/settings

Authorization: Basic {base64_credentials}
```

## Key Fields

### Submitted Data (plugin-dependent)
- Submitted field values are passed as an associative array to the plugin's internal action hook
- Common default fields: `name`, `email`, `message`
- Field names are determined by the HTML `name` attributes in the shortcode or widget configuration

### Plugin Settings
- `to` - Recipient email address
- `subject` - Email subject template
- `form_fields` - Configured input fields (name, email, message, etc.)

## Parameters

- Field names are user-defined in the plugin configuration; no standardized schema
- The plugin does not expose a public query or pagination API

## When to Use

- Simple WordPress sites needing a minimal contact form with no database storage
- Capturing basic name/email/message submissions to trigger lightweight automations via PHP hooks
- Sites where form entries only need to arrive by email, with no submission history required

## Rate Limits

- No external API; submission handling is handled by WordPress and server mail configuration

## Relevant Skills

- lead-generation
- content-strategy
