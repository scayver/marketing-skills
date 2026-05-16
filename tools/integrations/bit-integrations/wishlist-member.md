# Wishlist Member

Wishlist Member is a WordPress membership plugin for creating protected membership sites with level-based content access and payment gateway integration.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `/wp-json/wlmapi/v1/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | Not available |

## Authentication

- **Type**: API Key
- **Header**: `X-WLM-API-KEY: {api_key}`
- **Get token**: WordPress Admin > Wishlist Member > Settings > API; copy the API key

## Common Agent Operations

### List all membership levels
```
GET https://yoursite.com/wp-json/wlmapi/v1/levels

X-WLM-API-KEY: {api_key}
```

### Get a member's details
```
GET https://yoursite.com/wp-json/wlmapi/v1/members/{user_id}

X-WLM-API-KEY: {api_key}
```

### Add member to a level
```
POST https://yoursite.com/wp-json/wlmapi/v1/members/{user_id}/levels

X-WLM-API-KEY: {api_key}
Content-Type: application/json

{
  "level": "gold-membership",
  "action": "add"
}
```

### Remove member from a level
```
POST https://yoursite.com/wp-json/wlmapi/v1/members/{user_id}/levels

X-WLM-API-KEY: {api_key}
Content-Type: application/json

{
  "level": "gold-membership",
  "action": "remove"
}
```

## Key Fields

### Member Object
- `user_id` - WordPress user ID
- `email` - Member email address
- `levels` - Array of membership level slugs assigned to the user
- `registration_date` - When the member was added

### Level Object
- `id` - Level ID
- `name` - Level display name
- `slug` - Level slug (used in API calls)
- `active` - Whether the level is active

### Transaction Object
- `id` - Transaction ID
- `user_id` - Associated WordPress user
- `level` - Membership level
- `amount` - Payment amount
- `date` - Transaction date

## Parameters

- `level` - Membership level slug
- `action` - `add` or `remove`
- `user_id` - WordPress user ID

## When to Use

- Granting or revoking membership level access based on external events
- Syncing membership status with CRM or email marketing platforms
- Querying member lists for targeted email campaigns
- Automating membership lifecycle management (onboarding, expiry, renewal)

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit
- Recommend batch operations with delays for bulk member updates

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- sales:account-research
