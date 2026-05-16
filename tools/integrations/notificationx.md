# NotificationX

WordPress social proof and FOMO notification plugin for displaying live sales alerts, review notifications, and engagement stats to boost conversions.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external REST API; WordPress hook-based only |
| MCP | - | No official MCP server |
| CLI | - | No CLI |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress plugin-native (hook-based)
- **Access**: Notification display is controlled via WordPress action hooks on the same WordPress installation; no external credentials required

## Common Agent Operations

NotificationX has no external REST API. Notifications are managed through the WordPress admin and PHP hooks.

### Trigger a custom notification (PHP — server-side)
```php
do_action('nx_notification', [
    'title'   => 'Jane from Austin',
    'content' => 'Just purchased Product X',
    'link'    => 'https://yoursite.com/product-x',
    'image'   => 'https://yoursite.com/avatar.jpg',
    'time'    => current_time('timestamp'),
]);
```

### Hook into notification click event (PHP — server-side)
```php
add_action('nx_notification_clicked', function($notification_id, $user_data) {
    // Log the click or trigger a downstream action
}, 10, 2);
```

### Get notification stats (via WP REST API for stored CPT data)
```bash
GET https://yoursite.com/wp-json/wp/v2/nx_notification?status=publish

Authorization: Basic {base64_credentials}
```

## Key Fields

### Notification
- `title` - Notification headline (e.g., buyer name + location)
- `content` - Notification body text (e.g., "purchased Product X")
- `link` - URL the notification links to
- `image` - Avatar or product image URL
- `time` - Timestamp for "X minutes ago" display

## When to Use

- Displaying real-time social proof notifications driven by actual WooCommerce purchases
- Showing opt-in or review notifications to reduce bounce rates and improve conversions
- Tracking notification click events for conversion attribution
- Running FOMO campaigns that display recent activity to new site visitors

## Rate Limits

- No external API; display frequency is configured in the NotificationX admin settings

## Relevant Skills

- marketing:campaign-plan
- marketing:content-creation
- marketing:performance-report
