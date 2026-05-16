# Fabman

Cloud-based management platform for makerspaces, fab labs, and shared workshops — handling members, equipment access, billing, and bookings.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API v1 |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | API-only |

## Authentication

- **Type**: Bearer Token
- **Header**: `Authorization: Bearer {api_token}`
- **Get token**: Fabman Dashboard > Account > API tokens

## Common Agent Operations

### List members
```bash
GET https://fabman.io/api/v1/members?limit=50

Authorization: Bearer {api_token}
```

### Get single member
```bash
GET https://fabman.io/api/v1/members/{id}

Authorization: Bearer {api_token}
```

### Create member
```bash
POST https://fabman.io/api/v1/members

Authorization: Bearer {api_token}
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Doe",
  "emailAddress": "jane@example.com",
  "packageId": 12
}
```

### List bookings
```bash
GET https://fabman.io/api/v1/bookings?from=2024-01-01&until=2024-01-31

Authorization: Bearer {api_token}
```

### List packages
```bash
GET https://fabman.io/api/v1/packages

Authorization: Bearer {api_token}
```

## Key Fields

### Member
- `id` - Member ID
- `firstName` / `lastName` - Name
- `emailAddress` - Email
- `memberNumber` - Unique membership number
- `state` - active, inactive, locked
- `packageId` - Assigned membership package

### Booking
- `id` - Booking ID
- `memberId` - Member who booked
- `resourceId` - Equipment/resource booked
- `startAt` / `endAt` - ISO 8601 timestamps
- `notes` - Booking notes

### Package
- `id` - Package ID
- `name` - Package name
- `price` - Monthly price
- `currency` - Currency code

## Parameters

- `limit` - Results per page (max 100)
- `offset` - Pagination offset
- `from` / `until` - Date range filter (YYYY-MM-DD)
- `state` - Filter members by state

## When to Use

- Sync new members to an email marketing list
- Monitor equipment booking utilization
- Automate membership billing notifications
- Report on space usage and revenue

## Rate Limits

- See Fabman pricing page; API access included on all plans

## Relevant Skills

- operations:capacity-plan
- small-business:business-pulse
- marketing:email-sequence
