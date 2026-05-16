# Restrict Content Pro

WordPress membership plugin for creating subscription-based sites with content restriction by membership level, payments, and member management.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/rcp/v1/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP hooks and filters |

## Authentication

- **Type**: WordPress REST API (Application Password)
- **Header**: `Authorization: Bearer {application_password}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List members

```bash
GET https://yoursite.com/wp-json/rcp/v1/members

Authorization: Bearer {token}
```

### Get member by ID

```bash
GET https://yoursite.com/wp-json/rcp/v1/members/{member_id}

Authorization: Bearer {token}
```

### List membership levels

```bash
GET https://yoursite.com/wp-json/rcp/v1/memberships

Authorization: Bearer {token}
```

### List payments

```bash
GET https://yoursite.com/wp-json/rcp/v1/payments?status=complete

Authorization: Bearer {token}
```

### Hook: On membership activated

```php
add_action('rcp_membership_post_activate', function($membership) {
    $user_id = $membership->get_user_id();
    $level   = $membership->get_object_id();
    // Run logic on activation
});
```

## Key Fields

### Member Object
- `id` - Member ID
- `user_id` - WordPress user ID
- `email` - Email address
- `membership_level_id` - Current membership level ID
- `status` - active / pending / expired / cancelled
- `expiration_date` - Expiry date

### Membership Level Object
- `id` - Level ID
- `name` - Level name
- `price` - Price
- `duration` - Duration in days
- `duration_unit` - day / month / year

### Payment Object
- `id` - Payment ID
- `user_id` - User ID
- `amount` - Amount paid
- `status` - complete / pending / failed
- `date` - Payment date

## Parameters

- `status` - Filter members by status (active, expired, cancelled)
- `membership_level_id` - Filter by level
- `per_page` - Results per page

## When to Use

- Building subscription-based membership sites with gated content
- Tracking member status and expiry dates programmatically
- Triggering automations on membership activation, expiry, or cancellation
- Syncing members with email marketing platforms based on subscription level

## Rate Limits

- Subject to WordPress server limits; no dedicated rate limit

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- sales:pipeline-review
