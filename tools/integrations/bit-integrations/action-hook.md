# WordPress Action Hooks

WordPress's native publish-subscribe event system — functions registered to named hooks execute when `do_action()` is called anywhere in core, themes, or plugins.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external API; WP-native only |
| MCP | - | Not available |
| CLI | ✓ | WP-CLI `wp hook` commands for inspection |
| SDK | ✓ | Available via WordPress PHP API |

## Authentication

- **Type**: WordPress PHP / server-side only
- **Header**: N/A — hooks execute in PHP process context
- **Get token**: N/A — add_action() calls require file access to theme or plugin code

## Common Agent Operations

### Register a callback on an action hook (PHP)

```php
add_action( 'save_post', function( $post_id, $post ) {
    // Your custom logic here
}, 10, 2 );
```

### Fire a custom action hook (PHP)

```php
do_action( 'my_plugin_event', $data_array );
```

### List all hooks registered on a site (WP-CLI)

```bash
wp hook list --format=table
```

### Inspect callbacks on a specific hook (WP-CLI)

```bash
wp hook run save_post --args='{"post_id":42}'
```

### Common built-in action hooks

```
save_post                  - Fires after a post is saved
wp_login                   - Fires after a user logs in
user_register              - Fires after a new user is registered
woocommerce_order_status_changed - Fires on order status transitions
transition_post_status     - Fires on any post status change
```

## Key Fields

### Hook Registration
- `hook_name` - The action name to listen for (e.g., `save_post`)
- `callback` - The PHP callable to execute
- `priority` - Execution order (default 10; lower runs first)
- `accepted_args` - Number of arguments passed to the callback

### Common Hook Parameters
- `$post_id` - ID of the post being saved (save_post)
- `$user_id` - ID of the registering user (user_register)
- `$order` - WooCommerce order object (order hooks)
- `$old_status`, `$new_status` - Status transitions (transition_post_status)

## Parameters

- `priority` - Integer controlling callback execution order
- `accepted_args` - How many arguments to pass from `do_action()` to callback

## When to Use

- Triggering custom logic on WordPress lifecycle events (post save, user login, etc.)
- Integrating plugins that expose their own action hooks with external services
- Building lightweight automation inside WordPress without a plugin
- Hooking into WooCommerce, membership plugins, or LMS events at the PHP level

## Rate Limits

- No rate limits; governed by server execution limits (PHP max_execution_time)

## Relevant Skills

- crm-management
- email-marketing
- ecommerce
