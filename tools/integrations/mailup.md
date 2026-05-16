# MailUp

Italian email and SMS marketing platform for managing lists, recipients, and multi-channel campaign delivery at scale.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://services.mailup.com/API/v1.1/Rest/ConsoleService.svc/` |
| MCP | - | No official MCP server |
| CLI | - | No CLI |
| SDK | ✓ | Official .NET and PHP SDKs available |

## Authentication

- **Type**: OAuth 2.0
- **Token URL**: `https://services.mailup.com/Authorization/OAuth/Token`
- **Header**: `Authorization: Bearer {access_token}`
- **Get token**: MailUp Admin > Settings > Developer > API Credentials — obtain client_id and client_secret, then POST to token URL with `grant_type=password`

## Common Agent Operations

### Get all lists
```bash
GET https://services.mailup.com/API/v1.1/Rest/ConsoleService.svc/Console/User/Lists

Authorization: Bearer {access_token}
```

### Add recipient to a list
```bash
POST https://services.mailup.com/API/v1.1/Rest/ConsoleService.svc/Console/List/{list_id}/Recipient

Authorization: Bearer {access_token}
Content-Type: application/json

{"Email": "user@example.com", "Name": "Jane Doe", "Fields": [{"Description": "phone", "Value": "+1234567890"}]}
```

### Get campaign statistics
```bash
GET https://services.mailup.com/API/v1.1/Rest/ConsoleService.svc/Console/List/{list_id}/Email/{message_id}/Stats/Views

Authorization: Bearer {access_token}
```

### Send a transactional email
```bash
POST https://services.mailup.com/API/v1.1/Rest/ConsoleService.svc/Console/List/{list_id}/Email/{message_id}/Send

Authorization: Bearer {access_token}
Content-Type: application/json

{"Recipient": {"Email": "user@example.com", "Name": "Jane"}}
```

## Key Fields

### Recipient
- `Email` - Email address (required)
- `Name` - Full name
- `MobileNumber` - Phone number for SMS
- `MobilePrefix` - Country prefix for SMS
- `Fields` - Array of custom field objects with `Description` and `Value`

### Message
- `idMessage` - Message ID
- `Subject` - Email subject
- `Status` - Message status

## Parameters

- `list_id` - Target list identifier
- `pageNumber` - Pagination page (0-indexed)
- `pageSize` - Results per page

## When to Use

- Sending bulk email or SMS campaigns to segmented audiences
- Managing large subscriber lists with GDPR compliance requirements
- Automating transactional emails via API triggers
- Tracking opens, clicks, and bounce rates per campaign

## Rate Limits

- See MailUp pricing page; limits vary by plan

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- marketing:performance-report
