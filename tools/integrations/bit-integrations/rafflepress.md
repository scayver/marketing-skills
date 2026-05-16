# RafflePress

WordPress viral giveaway and contest plugin for growing email lists and social followings through referral-based entry campaigns and sweepstakes.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/rafflepress/v1/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP hooks and filters |

## Authentication

- **Type**: WordPress REST API (Application Password)
- **Header**: `Authorization: Bearer {application_password}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List giveaways

```bash
GET https://yoursite.com/wp-json/rafflepress/v1/giveaways

Authorization: Bearer {token}
```

### Get giveaway details

```bash
GET https://yoursite.com/wp-json/rafflepress/v1/giveaways/{giveaway_id}

Authorization: Bearer {token}
```

### List entries for a giveaway

```bash
GET https://yoursite.com/wp-json/rafflepress/v1/giveaways/{giveaway_id}/entries

Authorization: Bearer {token}
```

### Hook: On new entry

```php
add_action('rafflepress_entry_added', function($entry_id, $giveaway_id, $user_data) {
    // Fires when a new entry is recorded
}, 10, 3);
```

## Key Fields

### Giveaway Object
- `id` - Giveaway ID
- `title` - Giveaway title
- `status` - active / draft / ended
- `start_date` - Start date
- `end_date` - End date
- `entry_count` - Total entries

### Entry Object
- `entry_id` - Entry ID
- `giveaway_id` - Associated giveaway ID
- `email` - Entrant email
- `name` - Entrant name
- `actions_completed` - Array of completed entry actions
- `entry_points` - Total points earned

## Parameters

- `giveaway_id` - Filter by giveaway
- `status` - Filter by giveaway status
- `per_page` - Results per page

## When to Use

- Running viral giveaways to grow email lists and social followings
- Incentivizing referrals with bonus contest entries
- Rewarding purchases or registrations with automatic giveaway entry
- Collecting contestant data for post-giveaway marketing campaigns

## Rate Limits

- Subject to WordPress server limits; no dedicated rate limit

## Relevant Skills

- marketing:campaign-plan
- marketing:content-creation
- marketing:email-sequence
