# User Registration

User Registration is a WordPress plugin by WPEverest for building custom user registration and login forms with profile fields, role assignment, and payment add-ons.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/user-registration/v1/` |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI with WP user commands |
| SDK | - | No external SDK; use REST directly |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Dashboard > Users > Profile > Application Passwords

## Common Agent Operations

### List Forms
```bash
GET https://yoursite.com/wp-json/user-registration/v1/forms

Authorization: Basic {base64_credentials}
```

### Get a Single Form
```bash
GET https://yoursite.com/wp-json/user-registration/v1/forms/{id}

Authorization: Basic {base64_credentials}
```

### List Registrations (Submitted Entries)
```bash
GET https://yoursite.com/wp-json/user-registration/v1/registrations

Authorization: Basic {base64_credentials}
```

### Get a Single Registration
```bash
GET https://yoursite.com/wp-json/user-registration/v1/registrations/{id}

Authorization: Basic {base64_credentials}
```

### Get Registered Users (via WP core)
```bash
GET https://yoursite.com/wp-json/wp/v2/users

Authorization: Basic {base64_credentials}
```

## Key Fields

### Form
- `id` - Form ID
- `title` - Form name
- `fields` - Array of field configurations
- `status` - publish, draft

### Registration
- `id` - Registration entry ID
- `form_id` - Originating form
- `user_id` - Created WordPress user ID
- `status` - pending, approved, rejected
- `fields` - Key-value map of submitted values
- `created_at` - ISO 8601 submission timestamp

## Parameters

- `form_id` - Filter registrations by form
- `status` - Filter registrations by approval status
- `per_page` / `page` - Pagination controls

## When to Use

- Triggering welcome emails or onboarding sequences on registration
- Routing new registrations to a CRM for lead nurturing
- Automating user approval or rejection based on field values
- Reporting on registration volume and form performance

## Rate Limits

- Subject to WordPress server limits; no platform-level rate cap

## Relevant Skills

- marketing:email-sequence
- data:analyze
- operations:process-doc
- customer-support:customer-research
