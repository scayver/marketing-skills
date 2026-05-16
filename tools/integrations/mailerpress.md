# MailerPress

WordPress-native email marketing plugin for subscriber management, newsletter campaigns, and automation workflows within WordPress.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at /wp-json/mailerpress/v1/ |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | WordPress hooks and REST API only |

## Authentication

- **Type**: WordPress Application Password (Basic Auth)
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### Add a subscriber to a list

```bash
POST https://yoursite.com/wp-json/mailerpress/v1/subscribers

Authorization: Basic {base64(user:app_password)}
Content-Type: application/json

{"email": "jane@example.com", "name": "Jane Doe", "list_id": 5}
```

### Get all lists

```bash
GET https://yoursite.com/wp-json/mailerpress/v1/lists

Authorization: Basic {base64(user:app_password)}
```

### Get subscribers in a list

```bash
GET https://yoursite.com/wp-json/mailerpress/v1/subscribers?list_id=5&per_page=100

Authorization: Basic {base64(user:app_password)}
```

### Unsubscribe a contact

```bash
POST https://yoursite.com/wp-json/mailerpress/v1/subscribers/unsubscribe

Authorization: Basic {base64(user:app_password)}
Content-Type: application/json

{"email": "jane@example.com"}
```

### Hook into subscriber added event (PHP)

```php
add_action( 'mailerpress_subscriber_added', function( $subscriber_id, $list_id, $email ) {
    // Trigger downstream actions when a subscriber is added
}, 10, 3 );
```

## Key Fields

### Subscriber Object
- `id` - Unique subscriber ID
- `email` - Primary email address
- `name` - Full name
- `list_id` - Associated list ID
- `status` - subscribed | unsubscribed
- `created_at` - Subscription timestamp

### List Object
- `id` - Unique list ID
- `name` - List name
- `subscriber_count` - Number of active subscribers

### Campaign Object
- `id` - Campaign ID
- `subject` - Email subject line
- `status` - Draft | Scheduled | Sent
- `list_id` - Target list

## Parameters

- `list_id` - Filter subscribers or campaigns by list
- `per_page` - Results per page
- `page` - Pagination offset
- `status` - Filter by subscriber status

## When to Use

- Managing email subscribers entirely within WordPress
- Sending newsletters and broadcast emails without a third-party service
- Building subscriber lists from WordPress form submissions or purchases
- Running on-site email marketing without external dependencies

## Rate Limits

- No external rate limits; subject to WordPress server and SMTP provider capacity

## Relevant Skills

- email-marketing
- lead-generation
- content-creation
