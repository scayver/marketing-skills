# Twilio

Twilio is a cloud communications platform for programmatic SMS, MMS, voice calls, WhatsApp messaging, and email at scale.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://api.twilio.com/2010-04-01/Accounts/{AccountSid}/` |
| MCP | - | No official MCP server |
| CLI | ✓ | Twilio CLI (`twilio` command) |
| SDK | ✓ | Official SDKs in Python, Node.js, Java, C#, PHP, Ruby, Go |

## Authentication

- **Type**: HTTP Basic Auth (Account SID + Auth Token)
- **Header**: `Authorization: Basic {base64(AccountSid:AuthToken)}`
- **Get credentials**: Twilio Console > Dashboard — Account SID and Auth Token displayed on home screen

## Common Agent Operations

### Send an SMS
```bash
POST https://api.twilio.com/2010-04-01/Accounts/{AccountSid}/Messages.json

Authorization: Basic {base64_credentials}
Content-Type: application/x-www-form-urlencoded

To=%2B15551234567&From=%2B15559876543&Body=Your+order+has+shipped!
```

### Send an MMS with Media
```bash
POST https://api.twilio.com/2010-04-01/Accounts/{AccountSid}/Messages.json

Authorization: Basic {base64_credentials}
Content-Type: application/x-www-form-urlencoded

To=%2B15551234567&From=%2B15559876543&Body=Check+this+out&MediaUrl=https%3A%2F%2Fexample.com%2Fimage.jpg
```

### List Messages
```bash
GET https://api.twilio.com/2010-04-01/Accounts/{AccountSid}/Messages.json?To=%2B15551234567

Authorization: Basic {base64_credentials}
```

### Make a Voice Call
```bash
POST https://api.twilio.com/2010-04-01/Accounts/{AccountSid}/Calls.json

Authorization: Basic {base64_credentials}
Content-Type: application/x-www-form-urlencoded

To=%2B15551234567&From=%2B15559876543&Url=https%3A%2F%2Fhandler.twilio.com%2Ftwiml%2FEH123
```

## Key Fields

### Message
- `sid` - Unique message SID
- `from` - Sender phone number (E.164 format)
- `to` - Recipient phone number (E.164 format)
- `body` - Message content
- `status` - queued, sent, delivered, failed
- `date_sent` - ISO 8601 send timestamp
- `price` - Cost per message (negative number in USD)

### Call
- `sid` - Unique call SID
- `from` / `to` - Caller and callee numbers
- `status` - initiated, ringing, in-progress, completed, failed
- `duration` - Call length in seconds

## Parameters

- `To` / `From` - E.164 formatted phone numbers
- `Body` - Message text (up to 1,600 characters; longer messages split into segments)
- `MediaUrl` - URL of media attachment for MMS
- `StatusCallback` - Webhook URL for delivery status updates

## When to Use

- Sending transactional SMS notifications (order confirmations, shipping alerts)
- Delivering OTP codes for two-factor authentication
- Running SMS marketing campaigns to opted-in subscribers
- Automating voice call broadcasts or reminders

## Rate Limits

- 1 SMS/second per long code number by default; short codes support 100+ SMS/second
- See Twilio messaging limits documentation for current thresholds

## Relevant Skills

- marketing:campaign-plan
- marketing:email-sequence
- customer-support:draft-response
- operations:runbook
