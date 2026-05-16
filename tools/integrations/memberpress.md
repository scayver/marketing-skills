# MemberPress

Leading WordPress membership plugin for creating subscription sites, gating content by membership level, and managing recurring payments.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API via `/wp-json/mp/v1/` with consumer key + secret |
| MCP | - | No official MCP server |
| CLI | - | No CLI |
| SDK | - | No official SDK |

## Authentication

- **Type**: API Consumer Key + Secret (Basic Auth)
- **Header**: `Authorization: Basic {base64(consumer_key:consumer_secret)}`
- **Get token**: WordPress Admin > MemberPress > Developer Tools > API Keys

## Common Agent Operations

### List members
```bash
GET https://yoursite.com/wp-json/mp/v1/members

Authorization: Basic {base64_credentials}
```

### Get a single member
```bash
GET https://yoursite.com/wp-json/mp/v1/members/{id}

Authorization: Basic {base64_credentials}
```

### List memberships (products)
```bash
GET https://yoursite.com/wp-json/mp/v1/memberships

Authorization: Basic {base64_credentials}
```

### List transactions
```bash
GET https://yoursite.com/wp-json/mp/v1/transactions?member_id={id}

Authorization: Basic {base64_credentials}
```

### List subscriptions
```bash
GET https://yoursite.com/wp-json/mp/v1/subscriptions?member_id={id}

Authorization: Basic {base64_credentials}
```

## Key Fields

### Member
- `id` - WordPress user ID
- `email` - Member email address
- `membership` - Array of active membership objects
- `registered_at` - Registration date

### Transaction
- `amount` - Payment amount
- `status` - Transaction status (complete, pending, refunded)
- `membership_id` - Associated membership ID
- `created_at` - Transaction timestamp

## Parameters

- `per_page` - Results per page (default 10, max 100)
- `page` - Page number
- `member_id` - Filter by member
- `status` - Filter by status

## When to Use

- Querying active member counts and subscription statuses for reporting
- Automating CRM contact creation when members sign up or cancel
- Syncing membership level data to email marketing segmentation
- Auditing transactions and subscription renewals programmatically

## Rate Limits

- Limited by WordPress server capacity; no built-in rate limiting

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- sales:pipeline-review
