# Ninja Forms

Flexible WordPress form builder with a free core plugin and paid add-ons for payments, conditional logic, multi-part forms, and CRM integrations.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via `/wp-json/ninja-forms-submissions/v1/` |
| MCP | - | No official MCP server |
| CLI | - | No CLI |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List all forms
```bash
GET https://yoursite.com/wp-json/ninja-forms-submissions/v1/forms

Authorization: Basic {base64_credentials}
```

### Get submissions for a form
```bash
GET https://yoursite.com/wp-json/ninja-forms-submissions/v1/subs?form_id={form_id}

Authorization: Basic {base64_credentials}
```

### Get a specific submission
```bash
GET https://yoursite.com/wp-json/ninja-forms-submissions/v1/subs/{submission_id}

Authorization: Basic {base64_credentials}
```

### Get form fields
```bash
GET https://yoursite.com/wp-json/ninja-forms-submissions/v1/fields?form_id={form_id}

Authorization: Basic {base64_credentials}
```

## Key Fields

### Form
- `id` - Form ID
- `settings.title` - Form display title
- `fields` - Array of field definition objects

### Submission
- `id` - Submission ID
- `form_id` - Parent form ID
- `date_updated` - Submission timestamp
- `fields` - Array of submitted field objects with `key` and `value`

### Field
- `id` - Field ID
- `key` - Field machine name
- `type` - Field type (textbox, email, phone, etc.)
- `label` - Field display label

## Parameters

- `form_id` - Filter by form ID
- `per_page` - Results per page
- `page` - Page number

## When to Use

- Capturing leads from contact, inquiry, and registration forms on WordPress
- Querying form submission history for reporting or CRM sync
- Building payment-enabled forms with the Stripe or PayPal add-on
- Creating multi-part or conditional-logic forms for complex data collection

## Rate Limits

- Limited by WordPress server capacity; no built-in rate limiting

## Relevant Skills

- marketing:email-sequence
- marketing:draft-content
- data:validate-data
