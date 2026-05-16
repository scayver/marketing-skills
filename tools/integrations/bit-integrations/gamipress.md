# GamiPress

WordPress gamification plugin for awarding points, achievements, and ranks to users based on site activity.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via GamiPress endpoints |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP functions and action hooks |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic base64(username:app_password)`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### Get user points
```bash
GET https://yoursite.com/wp-json/gamipress/v1/user-points?user_id={id}

Authorization: Basic {base64_credentials}
```

### Award points to user (PHP)
```php
gamipress_award_points_to_user($user_id, $points, $points_type);
```

### Get user achievements
```bash
GET https://yoursite.com/wp-json/gamipress/v1/user-achievements?user_id={id}

Authorization: Basic {base64_credentials}
```

### Get user ranks
```bash
GET https://yoursite.com/wp-json/gamipress/v1/user-ranks?user_id={id}

Authorization: Basic {base64_credentials}
```

### Hook on points award (PHP)
```php
add_action('gamipress_award_points_to_user', function($user_id, $points, $points_type) {
    // Trigger reward notification or sync to external system
}, 10, 3);
```

## Key Fields

### Points Entry
- `user_id` - WordPress user ID
- `points` - Points amount
- `points_type` - Points type slug (e.g., "coins", "credits")
- `reason` - Award reason
- `date` - Award timestamp

### Achievement
- `ID` - Achievement post ID
- `post_title` - Achievement name
- `post_type` - Achievement type
- `date` - Date earned

### Rank
- `ID` - Rank post ID
- `post_title` - Rank name
- `rank_type` - Rank type slug

## Parameters

- `user_id` - WordPress user ID to query
- `points_type` - Filter by points type slug
- `limit` / `offset` - Pagination

## When to Use

- Reward users for external actions (purchases, referrals)
- Sync gamification milestones to email sequences
- Display leaderboard data in external dashboards
- Trigger notifications when users reach new ranks

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- product-management:metrics-review
