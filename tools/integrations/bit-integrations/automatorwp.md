# AutomatorWP

WordPress automation plugin that creates automated workflows between WordPress plugins using triggers and actions — the Zapier for WordPress-to-WordPress integrations.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No public external REST API |
| MCP | - | Not available |
| CLI | - | No WP-CLI support |
| SDK | - | WordPress PHP hooks only |

## Authentication

- **Type**: WordPress admin access
- **Header**: N/A — plugin managed entirely within WordPress admin
- **Get token**: N/A — automations are configured via WordPress Admin > AutomatorWP

## Common Agent Operations

AutomatorWP has no external REST API. Automations are built and managed through the WordPress admin interface and executed via WordPress hooks.

### Fire an AutomatorWP trigger programmatically (PHP)

```php
// Trigger a custom AutomatorWP action from code
do_action( 'automatorwp_user_action', array(
    'user_id' => get_current_user_id(),
    'action'  => 'my_custom_event',
    'data'    => array( 'key' => 'value' ),
));
```

### Complete an AutomatorWP recipe for a user (PHP)

```php
// Manually complete an automation recipe for a specific user
automatorwp_complete_action( $action_id, $user_id, $automation_id );
```

### Check if user completed a recipe (PHP)

```php
$times_completed = automatorwp_get_user_completed_times( $user_id, $automation_id );
```

### Register a custom trigger (PHP)

```php
add_filter( 'automatorwp_triggers', function( $triggers ) {
    $triggers['my_plugin_event'] = array(
        'label'       => 'User does something in My Plugin',
        'action'      => 'my_plugin_custom_hook',
        'integration' => 'my-plugin',
    );
    return $triggers;
});
```

## Key Fields

### Automation (Recipe)
- `id` - Automation ID
- `title` - Recipe name
- `type` - user (per user) or anonymous (site-wide)
- `status` - active or inactive
- `triggers` - Conditions that start the recipe
- `actions` - Steps to execute when triggered
- `times_per_user` - Max completions per user (0 = unlimited)

### Trigger
- `trigger_type` - Plugin-specific trigger identifier
- `completion_count` - Number of times trigger must fire

### Action
- `action_type` - Plugin-specific action identifier
- `args` - Action-specific configuration

## Parameters

- `user_id` - WordPress user ID for user-based automations
- `automation_id` - Target recipe ID
- `times` - Completion count threshold

## When to Use

- Automating cross-plugin workflows (LMS enrollment on purchase, badges on completion, etc.)
- Granting access to courses, forums, or content based on user behavior
- Running gamification workflows with GamiPress, BadgeOS, or myCRED
- Building no-code WordPress-to-WordPress automation without custom PHP

## Rate Limits

- No rate limits; governed by WordPress server performance and hook execution

## Relevant Skills

- crm-management
- email-marketing
- ecommerce
