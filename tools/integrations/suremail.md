# SureMail

SureMail is a WordPress SMTP email delivery plugin for configuring reliable transactional email sending via external mail providers.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external REST API; SMTP configuration only |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI for plugin management |
| SDK | - | No external SDK |

## Authentication

- **Type**: SMTP credentials (per configured provider)
- **Configuration**: WordPress Dashboard > SureMail > Settings > SMTP
- **Supported providers**: Gmail (OAuth), SendGrid, Mailgun, Amazon SES, SMTP.com, and generic SMTP

## Common Agent Operations

SureMail does not expose a public REST API. Interaction is via WordPress hooks or SMTP provider APIs.

### Send Email via WordPress wp_mail() (PHP)
```php
wp_mail(
  'recipient@example.com',
  'Subject Line',
  'Email body content.',
  ['Content-Type: text/html; charset=UTF-8']
);
```

### Configure SMTP via SendGrid API (underlying provider)
```bash
POST https://api.sendgrid.com/v3/mail/send

Authorization: Bearer {sendgrid_api_key}
Content-Type: application/json

{
  "personalizations": [{"to": [{"email": "user@example.com"}]}],
  "from": {"email": "noreply@yoursite.com"},
  "subject": "Hello",
  "content": [{"type": "text/plain", "value": "Message body"}]
}
```

### Configure SMTP via Mailgun API (underlying provider)
```bash
POST https://api.mailgun.net/v3/{domain}/messages

Authorization: Basic {base64(api:{mailgun_api_key})}

from=noreply@yoursite.com&to=user@example.com&subject=Hello&text=Message+body
```

## Key Fields

### SMTP Settings
- `host` - SMTP server hostname
- `port` - 587 (TLS), 465 (SSL), or 25
- `username` - SMTP username
- `encryption` - tls or ssl
- `from_email` - Sender address
- `from_name` - Sender display name

## Parameters

- `provider` - gmail, sendgrid, mailgun, ses, smtp
- `force_from_email` - Override all outgoing sender addresses

## When to Use

- Ensuring WordPress transactional emails deliver reliably
- Routing all site emails through an authenticated SMTP provider
- Auditing email send logs via the configured provider's dashboard
- Reducing spam folder placement for order confirmations and notifications

## Rate Limits

- Determined by the configured SMTP provider's plan limits

## Relevant Skills

- marketing:email-sequence
- operations:process-doc
- engineering:documentation
