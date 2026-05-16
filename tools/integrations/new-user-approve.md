# New User Approve

WordPress plugin that holds new user registrations in a pending state until an administrator manually approves or denies them, giving site owners gated access control.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external REST API; WordPress hook-based only |
| MCP | - | No official MCP server |
| CLI | - | No CLI |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress plugin-native (hook-based)
- **Access**: Approval and denial actions are triggered via WordPress action hooks on the same WordPress installation; no external credentials required

## Common Agent Operations

New User Approve has no external REST API. Programmatic access is via WordPress action hooks or the WP REST API for user management.

### Approve a pending user (via WP REST API)
```bash
POST https://yoursite.com/wp-json/wp/v2/users/{user_id}

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"meta": {"new_user_approve_status": "approved"}}
```

### List pending users (via WP REST API)
```bash
GET https://yoursite.com/wp-json/wp/v2/users?roles=subscriber&meta_key=new_user_approve_status&meta_value=pending

Authorization: Basic {base64_credentials}
```

### Hook into approval event (PHP — server-side)
```php
add_action('new_user_approve_approve_user', function($user_id) {
    // Fires when a user is approved — send to CRM, email list, etc.
});

add_action('new_user_approve_deny_user', function($user_id) {
    // Fires when a user is denied
});
```

## Key Fields

### User Meta
- `new_user_approve_status` - Approval status: `pending`, `approved`, `denied`
- `user_id` - WordPress user ID
- `user_email` - User email address
- `user_registered` - Registration timestamp

## Parameters

- `meta_key` - Filter by meta field key
- `meta_value` - Filter by meta field value
- `roles` - Filter users by role

## When to Use

- Gating community or membership site registrations behind manual admin review
- Automating approval for users who complete a specific purchase or verification step
- Sending CRM notifications or email welcome sequences immediately after approval
- Building vetting workflows where approval follows a form submission or payment event

## Rate Limits

- No external API; limited by WordPress server capacity

## Relevant Skills

- operations:process-doc
- marketing:email-sequence
- human-resources:onboarding
