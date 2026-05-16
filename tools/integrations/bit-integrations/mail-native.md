# WordPress Native Mail

WordPress's built-in wp_mail() email function for sending transactional and notification emails from a WordPress site.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external API; uses wp_mail() function |
| MCP | - | Not available |
| CLI | ✓ | WP-CLI: wp eval 'wp_mail(...);' |
| SDK | - | WordPress function only |

## Authentication

- **Type**: WordPress SMTP configuration (no external credentials)
- **Header**: N/A — uses server-side SMTP settings
- **Configure**: WordPress Admin > Settings or via SMTP plugin (e.g., WP Mail SMTP, FluentSMTP)

## Common Agent Operations

### Send a basic email (PHP)

```php
wp_mail(
    'recipient@example.com',
    'Subject Line',
    'Email body content here.',
    ['Content-Type: text/html; charset=UTF-8']
);
```

### Send email with dynamic content (PHP)

```php
$to      = get_user_meta( $user_id, 'email', true );
$subject = 'Welcome, ' . $first_name . '!';
$body    = '<p>Thank you for registering. Your account is ready.</p>';
$headers = ['Content-Type: text/html; charset=UTF-8', 'From: Site Name <noreply@yoursite.com>'];
wp_mail( $to, $subject, $body, $headers );
```

### Hook to log sent emails (PHP)

```php
add_action( 'wp_mail_succeeded', function( $mail_data ) {
    // $mail_data['to'], ['subject'], ['message'] — log or audit sent emails
} );
```

### Hook to catch send failures (PHP)

```php
add_action( 'wp_mail_failed', function( $error ) {
    // $error — WP_Error object with failure reason
    error_log( $error->get_error_message() );
} );
```

## Key Fields

### wp_mail() Parameters
- `$to` - Recipient email address or comma-separated list
- `$subject` - Email subject line
- `$message` - Email body (plain text or HTML)
- `$headers` - Array or string of headers (From, CC, BCC, Content-Type)
- `$attachments` - File paths of attachments

### SMTP Configuration (wp-config.php or plugin)
- `SMTP_HOST` - Mail server hostname
- `SMTP_PORT` - Port (587 for TLS, 465 for SSL, 25 for none)
- `SMTP_USER` - Authentication username
- `SMTP_PASS` - Authentication password
- `SMTP_SECURE` - tls | ssl | none

## Parameters

- `Content-Type: text/html` - Enable HTML email body
- `From: Name <email>` - Override sender name and address
- `CC:` / `BCC:` - Add copy recipients
- `X-Mailer:` - Optional mailer identification header

## When to Use

- Sending transactional emails (order confirmations, password resets) from WordPress
- Delivering admin notifications on form submissions or user registrations
- Sending custom welcome emails without a third-party email service
- Testing SMTP configuration and email deliverability on a WordPress site

## Rate Limits

- Depends entirely on the SMTP provider used (SendGrid, Mailgun, SES, Gmail, etc.)

## Relevant Skills

- email-marketing
- lead-generation
