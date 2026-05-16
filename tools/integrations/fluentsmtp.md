# FluentSMTP

WordPress SMTP plugin that replaces the default wp_mail() function with a configured transactional sending service for reliable email delivery.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external REST API |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | WordPress wp_mail() filter hooks |

## Authentication

- **Type**: SMTP credentials or API key from connected sending service
- **Header**: N/A — credentials entered in WordPress admin settings
- **Get token**: FluentSMTP Settings > Connections; credentials come from chosen mail provider (SendGrid, Mailgun, SES, etc.)

## Common Agent Operations

### Send email via WordPress (PHP)
```php
wp_mail(
    'recipient@example.com',
    'Subject Line',
    '<p>HTML body content</p>',
    ['Content-Type: text/html; charset=UTF-8']
);
// FluentSMTP intercepts and routes through configured provider
```

### Check email logs (PHP)
```php
// FluentSMTP logs are stored in the database
global $wpdb;
$logs = $wpdb->get_results(
    "SELECT * FROM {$wpdb->prefix}fluentsmtp_logs ORDER BY created_at DESC LIMIT 50"
);
```

### Hook before email is sent
```php
add_filter('wp_mail', function($args) {
    // Modify to/from/subject/body before FluentSMTP sends
    return $args;
});
```

### Hook after email is sent
```php
add_action('fluentsmtp/email_sent', function($response, $data) {
    // Log success or trigger follow-up action
}, 10, 2);
```

## Key Fields

### Email Log Record
- `id` - Log entry ID
- `to` - Recipient address(es)
- `from` - Sender address
- `subject` - Email subject
- `body` - Email body (HTML)
- `status` - sent, failed
- `response` - Provider response message
- `created_at` - Send timestamp

## Parameters

- No external API parameters; configuration done in WordPress admin
- Supported providers: SendGrid, Mailgun, Amazon SES, Postmark, SparkPost, Gmail, Outlook, and others

## When to Use

- Ensure WordPress transactional emails reach the inbox
- Log and audit all outgoing WordPress emails
- Route emails through a specific sending domain
- Debug email delivery failures via the built-in log

## Rate Limits

- Limits depend on the connected sending service provider

## Relevant Skills

- operations:runbook
- engineering:debug
- marketing:email-sequence
