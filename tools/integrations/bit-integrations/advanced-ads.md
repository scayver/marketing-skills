# Advanced Ads

WordPress ad management plugin for creating, scheduling, targeting, and rotating advertisements from any ad network or custom HTML/JavaScript.

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
- **Get token**: N/A — configure via WordPress Admin > Advanced Ads

## Common Agent Operations

Advanced Ads has no external REST API. Management is done through WordPress admin or PHP hooks.

### Register an ad group via PHP filter

```php
add_filter( 'advanced-ads-ad-select-args', function( $args ) {
    $args['user_role'] = 'subscriber';
    return $args;
});
```

### Display an ad in a template

```php
// Display ad by ID
the_ad( 42 );

// Display an ad group
the_ad_group( 5 );

// Display an ad placement
the_ad_placement( 'header-placement' );
```

### Hide ads for specific user roles via PHP

```php
add_filter( 'advanced-ads-can-display-ad', function( $can_display, $ad ) {
    if ( is_user_logged_in() && current_user_can( 'premium_member' ) ) {
        return false;
    }
    return $can_display;
}, 10, 2 );
```

### Query ads via WordPress REST API (standard WP posts)

```bash
GET https://yoursite.com/wp-json/wp/v2/advanced_ads

Authorization: Basic {base64_credentials}
```

## Key Fields

### Ad
- `id` - Ad post ID
- `title` - Ad name in admin
- `type` - Ad type: plain, image, rich-content, AdSense, etc.
- `status` - publish, draft
- `conditions` - Targeting conditions array (user role, page, device)
- `expiry_date` - Optional ad expiration date

### Ad Group
- `id` - Group ID
- `name` - Group name
- `type` - default, ordered, or shuffle
- `ads` - Array of ad IDs in the group

## Parameters

- `user_role` - Target ads to specific WordPress roles
- `page_type` - Restrict ad to post, page, archive, etc.
- `device` - Target mobile, desktop, or tablet users
- `expiry_date` - Date string when ad expires

## When to Use

- Displaying and rotating ads on WordPress sites with role-based targeting
- Suppressing ads for premium or logged-in members programmatically
- Scheduling ad campaigns with start and expiry dates
- Managing Google AdSense or custom HTML ad placements in WordPress

## Rate Limits

- No rate limits; governed by WordPress server performance

## Relevant Skills

- content-strategy
- ecommerce
