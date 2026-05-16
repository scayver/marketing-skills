# ARMember

WordPress membership plugin for building subscription sites with content restriction, multiple membership plans, payment gateway integration, and member management.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/armember/v1/` |
| MCP | - | Not available |
| CLI | - | No WP-CLI support |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords > Add New

## Common Agent Operations

### List membership plans

```bash
GET https://yoursite.com/wp-json/armember/v1/plans

Authorization: Basic {base64_credentials}
```

### Get a member's current plan

```bash
GET https://yoursite.com/wp-json/armember/v1/members/{user_id}

Authorization: Basic {base64_credentials}
```

### Assign a member to a plan

```bash
POST https://yoursite.com/wp-json/armember/v1/members/{user_id}/plans

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"plan_id": 3, "status": "active"}
```

### List active members

```bash
GET https://yoursite.com/wp-json/armember/v1/members?status=active&per_page=50

Authorization: Basic {base64_credentials}
```

### Cancel a member's plan

```bash
DELETE https://yoursite.com/wp-json/armember/v1/members/{user_id}/plans/{plan_id}

Authorization: Basic {base64_credentials}
```

## Key Fields

### Membership Plan
- `id` - Plan ID
- `name` - Plan name
- `price` - Plan price
- `duration` - Subscription duration
- `duration_unit` - days, months, years
- `trial_days` - Free trial period

### Member
- `user_id` - WordPress user ID
- `plan_id` - Assigned plan ID
- `status` - active, expired, cancelled, pending
- `start_date` - Membership start date
- `expiry_date` - Membership expiry date

## Parameters

- `status` - Filter members by status (active, expired, cancelled)
- `plan_id` - Filter members by plan
- `per_page` - Results per page
- `page` - Pagination page

## When to Use

- Programmatically assigning membership plans after external payment or form submission
- Reporting on active vs. expired member counts by plan
- Syncing membership status to external CRM or email marketing platforms
- Automating cancellation or upgrade workflows triggered by external events

## Rate Limits

- Subject to WordPress server limits; no platform-enforced rate limiting

## Relevant Skills

- email-marketing
- crm-management
- ecommerce
