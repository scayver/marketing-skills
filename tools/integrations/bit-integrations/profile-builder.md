# Profile Builder

WordPress plugin for creating custom user registration, login, and profile edit forms with role assignment and front-end user management.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/profile-builder/v1/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP hooks and filters |

## Authentication

- **Type**: WordPress REST API (Application Password)
- **Header**: `Authorization: Bearer {application_password}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List registration forms

```bash
GET https://yoursite.com/wp-json/profile-builder/v1/forms

Authorization: Bearer {token}
```

### List profile fields

```bash
GET https://yoursite.com/wp-json/profile-builder/v1/fields

Authorization: Bearer {token}
```

### Create user (WordPress core REST)

```bash
POST https://yoursite.com/wp-json/wp/v2/users

Authorization: Bearer {token}
Content-Type: application/json

{"username": "janedoe", "email": "jane@example.com", "password": "secure_pass", "roles": ["subscriber"]}
```

### Hook: After user registration

```php
add_action('wppb_user_register_success', function($user_id, $user_data) {
    // Fires after Profile Builder completes user registration
}, 10, 2);
```

## Key Fields

### User Object
- `id` - WordPress user ID
- `username` - Login username
- `email` - Email address
- `roles` - Array of WordPress roles
- `first_name` - First name
- `last_name` - Last name

### Profile Field Object
- `field_id` - Field ID
- `field_title` - Display label
- `field_type` - text / select / checkbox / etc.
- `required` - Boolean required status

## Parameters

- `role` - Filter users by WordPress role
- `per_page` - Results per page
- `search` - Search users by name or email

## When to Use

- Building custom front-end registration and login flows
- Managing user roles and profile fields programmatically
- Syncing new registrations with CRM or email marketing platforms
- Creating restricted access areas based on registration form data

## Rate Limits

- Subject to WordPress server limits; no dedicated rate limit

## Relevant Skills

- human-resources:onboarding
- marketing:email-sequence
- operations:process-doc
