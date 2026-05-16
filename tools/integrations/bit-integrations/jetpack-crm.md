# Jetpack CRM

WordPress-native CRM plugin for managing contacts, companies, transactions, invoices, and quotes without an external service.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at /wp-json/jetpack-crm/v4/ |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | WordPress hooks and REST API only |

## Authentication

- **Type**: WordPress Application Password (Basic Auth)
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List contacts

```bash
GET https://yoursite.com/wp-json/jetpack-crm/v4/contacts?per_page=100

Authorization: Basic {base64(user:app_password)}
```

### Create a contact

```bash
POST https://yoursite.com/wp-json/jetpack-crm/v4/contacts

Authorization: Basic {base64(user:app_password)}
Content-Type: application/json

{"email": "jane@example.com", "fname": "Jane", "lname": "Doe", "phone": "+15555550100"}
```

### Create a company

```bash
POST https://yoursite.com/wp-json/jetpack-crm/v4/companies

Authorization: Basic {base64(user:app_password)}
Content-Type: application/json

{"name": "Acme Corp", "email": "contact@acme.com"}
```

### Get contact events (activity log)

```bash
GET https://yoursite.com/wp-json/jetpack-crm/v4/events?contact_id={contact_id}

Authorization: Basic {base64(user:app_password)}
```

### Create an invoice

```bash
POST https://yoursite.com/wp-json/jetpack-crm/v4/invoices

Authorization: Basic {base64(user:app_password)}
Content-Type: application/json

{"contact_id": 123, "due_date": "2025-07-01", "line_items": [{"name": "Service", "quantity": 1, "unit_price": 500}]}
```

## Key Fields

### Contact Object
- `id` - Unique contact ID
- `email` - Primary email address
- `fname`, `lname` - First and last name
- `phone` - Phone number
- `company_id` - Associated company ID
- `status` - Contact status label

### Company Object
- `id` - Unique company ID
- `name` - Company name
- `email` - Company email

### Invoice Object
- `id` - Invoice ID
- `contact_id` - Linked contact
- `status` - Draft | Unpaid | Paid | Overdue
- `due_date` - Due date (ISO 8601)

## Parameters

- `per_page` - Results per page (max 100)
- `page` - Pagination offset
- `search` - Search term for filtering
- `contact_id` - Filter events/invoices by contact

## When to Use

- Managing a self-hosted CRM entirely within WordPress
- Keeping all customer data on your own server for GDPR compliance
- Creating contacts and companies from form submissions or purchases
- Generating and tracking invoices and quotes for clients

## Rate Limits

- No external rate limits; subject to WordPress server capacity

## Relevant Skills

- crm-management
- lead-generation
- ecommerce
