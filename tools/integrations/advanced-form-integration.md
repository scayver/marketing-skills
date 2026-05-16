# Advanced Form Integration

WordPress plugin that connects popular form plugins directly to third-party CRM, email, and marketing services from the WordPress dashboard — no custom code required.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No public external REST API |
| MCP | - | Not available |
| CLI | - | No WP-CLI support |
| SDK | - | WordPress PHP hooks only |

## Authentication

- **Type**: WordPress admin access + destination service API keys
- **Header**: N/A — configured through WordPress admin UI
- **Get token**: Each connected service requires its own API credentials configured in AFI settings

## Common Agent Operations

Advanced Form Integration has no external REST API. All configuration is done through the WordPress admin dashboard. Integrations are triggered when supported form plugins submit data.

### Supported form plugins (trigger sources)

```
Gravity Forms
WPForms
Contact Form 7
Ninja Forms
Formidable Forms
Fluent Forms
Elementor Forms
Divi Forms
```

### Supported destination services (partial list)

```
HubSpot CRM
Salesforce
ActiveCampaign
Mailchimp
GetResponse
Zoho CRM
Pipedrive
Airtable
Google Sheets
Slack
```

### Example: configure a connection via PHP filter (advanced)

```php
add_filter( 'afib_connection_data', function( $data, $form_id ) {
    if ( $form_id === 5 ) {
        $data['custom_field'] = get_option( 'my_custom_value' );
    }
    return $data;
}, 10, 2 );
```

## Key Fields

### Connection
- `form_plugin` - Source form plugin (gravity-forms, wpforms, cf7, etc.)
- `form_id` - ID of the specific form to listen to
- `service` - Destination service slug
- `field_mappings` - Array of form field to service field mappings
- `conditional_logic` - Optional conditions to control when integration fires

## Parameters

- `form_id` - Specific form to monitor for submissions
- `service` - Target integration service
- `field_mappings` - Map form field IDs to service field keys
- `enable` - Boolean to activate or deactivate the connection

## When to Use

- Connecting WordPress forms to CRMs or email platforms without custom PHP
- Centralizing multiple form-to-service connections in one plugin
- Setting up conditional field mapping based on form values
- Routing form submissions to multiple services simultaneously

## Rate Limits

- No platform-level rate limits; subject to destination service API limits

## Relevant Skills

- crm-management
- email-marketing
- lead-generation
