# Uncanny Automator

Uncanny Automator is a powerful WordPress automation plugin that connects WordPress plugins together using recipes with triggers and actions, without requiring custom code.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external REST API; operates via WordPress hooks and recipe configuration |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI for plugin management |
| SDK | - | PHP developer API for custom triggers and actions |

## Authentication

- **Type**: WordPress Application Password (for WP REST API access)
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Dashboard > Users > Profile > Application Passwords

## Common Agent Operations

Uncanny Automator does not expose a public REST API. Recipes are configured via the WordPress admin UI. Developers can extend with custom triggers and actions via PHP.

### Register a Custom Trigger (PHP)
```php
// Add a custom trigger to Uncanny Automator
add_filter( 'uncanny_automator_add_integration', function( $integrations ) {
  $integrations['MY_PLUGIN'] = [
    'name' => 'My Plugin',
    'icon_url' => plugins_url( 'icon.svg', __FILE__ ),
  ];
  return $integrations;
} );
```

### Fire a Custom Trigger (PHP)
```php
// Dispatch a custom Uncanny Automator trigger
do_action( 'uncanny_automator_maybe_trigger_MY_EVENT', [
  'user_id' => get_current_user_id(),
  'meta'    => ['key' => 'value'],
] );
```

### List Recipes (WP Post Query)
```php
$recipes = get_posts([
  'post_type'   => 'uo-recipe',
  'post_status' => 'publish',
  'numberposts' => -1,
]);
```

## Key Fields

### Recipe (WordPress CPT `uo-recipe`)
- `ID` - WordPress post ID
- `post_title` - Recipe name
- `post_status` - publish (active), draft (inactive)
- `meta.uap_recipe_type` - logged-in or anonymous
- `meta.uap_max_times_per_user` - Per-user run limit

### Trigger / Action (WordPress CPT `uo-trigger` / `uo-action`)
- `ID` - Post ID
- `meta.uap_trigger_code` - Trigger integration code
- `meta.uap_action_code` - Action integration code

## Parameters

- Recipe behavior configured entirely in the Uncanny Automator admin UI
- Custom triggers and actions require PHP development

## When to Use

- Connecting LearnDash, TutorLMS, or WooCommerce events without custom code
- Automating multi-step workflows across many WordPress plugins
- Triggering user role changes, email sends, or membership updates on plugin events
- Extending automation with custom triggers from proprietary WordPress plugins

## Rate Limits

- No platform-level rate limits; constrained by WordPress server performance

## Relevant Skills

- operations:process-doc
- engineering:documentation
- marketing:campaign-plan
- product-management:write-spec
