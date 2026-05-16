# Thrive Automator

Thrive Automator is a free WordPress automation plugin by Thrive Themes that connects Thrive products and third-party plugins via triggers and actions without an external API.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external REST API; operates via WordPress hooks |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI for plugin management |
| SDK | - | No external SDK |

## Authentication

- **Type**: WordPress Application Password (for WP REST API access)
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Dashboard > Users > Profile > Application Passwords

## Common Agent Operations

Thrive Automator does not expose a public REST API. Automation is configured via the WordPress admin UI or programmatically via WordPress PHP hooks.

### List Automations (via WP Database Query)
```php
// In a custom WordPress plugin or mu-plugin
$automations = get_posts([
  'post_type'   => 'ta_automation',
  'post_status' => 'any',
  'numberposts' => -1,
]);
```

### Fire a Custom Trigger via PHP Hook
```php
// Dispatch a named Thrive Automator trigger from custom code
do_action( 'ta_trigger_custom_event', [
  'user_id' => get_current_user_id(),
  'event'   => 'custom_signup_complete',
] );
```

### Register a Custom Action via PHP Hook
```php
// Add a custom action step available in Thrive Automator
add_filter( 'ta_available_actions', function( $actions ) {
  $actions[] = [
    'id'    => 'my_custom_action',
    'label' => 'My Custom Action',
  ];
  return $actions;
} );
```

## Key Fields

### Automation (WordPress Custom Post Type `ta_automation`)
- `ID` - WordPress post ID
- `post_title` - Automation name
- `post_status` - publish (active) or draft (inactive)
- `meta.ta_trigger` - Trigger configuration
- `meta.ta_actions` - Serialized action steps

## Parameters

- Automation behavior is controlled via the Thrive Automator admin UI
- Programmatic access requires custom WordPress code or WP-CLI

## When to Use

- Orchestrating multi-step automation entirely within Thrive Suite
- Bridging Thrive Leads opt-ins to Thrive Apprentice course enrollments
- Firing custom business logic on WordPress events without external SaaS
- Logging conversion events from Thrive Quiz Builder to a CRM via webhook action

## Rate Limits

- No platform-level rate limits; constrained by WordPress server performance

## Relevant Skills

- marketing:campaign-plan
- marketing:email-sequence
- operations:process-doc
- engineering:documentation
