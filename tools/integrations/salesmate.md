# Salesmate

Smart CRM and sales automation platform for growing teams with pipeline management, built-in calling, and automated follow-up sequences.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://apis.salesmate.io/v3/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | No official SDK; standard REST |

## Authentication

- **Type**: API Key + Access Token
- **Header**: `accessToken: {access_token}` and `x-linkable-id: {user_email}`
- **Get token**: Salesmate > My Account > Integrations > API Key

## Common Agent Operations

### List contacts

```bash
GET https://apis.salesmate.io/v3/contacts

accessToken: {access_token}
x-linkable-id: user@example.com
```

### Create contact

```bash
POST https://apis.salesmate.io/v3/contacts

accessToken: {access_token}
x-linkable-id: user@example.com
Content-Type: application/json

{"data": {"firstName": "Jane", "lastName": "Doe", "email": "jane@example.com", "phone": "+1-555-0100"}}
```

### Create deal

```bash
POST https://apis.salesmate.io/v3/deals

accessToken: {access_token}
x-linkable-id: user@example.com
Content-Type: application/json

{"data": {"title": "Acme Corp Deal", "contactId": 123, "pipelineId": 1, "stageId": 2, "dealValue": 5000}}
```

### List companies

```bash
GET https://apis.salesmate.io/v3/companies

accessToken: {access_token}
x-linkable-id: user@example.com
```

### Create activity

```bash
POST https://apis.salesmate.io/v3/activities

accessToken: {access_token}
x-linkable-id: user@example.com
Content-Type: application/json

{"data": {"title": "Follow-up call", "type": "Call", "dueDate": "2026-05-20", "contactId": 123}}
```

## Key Fields

### Contact Object
- `id` - Contact ID
- `firstName` / `lastName` - Name
- `email` - Email address
- `phone` - Phone number
- `companyId` - Associated company ID

### Deal Object
- `id` - Deal ID
- `title` - Deal title
- `dealValue` - Monetary value
- `pipelineId` - Pipeline ID
- `stageId` - Stage ID
- `status` - Open / Won / Lost

### Activity Object
- `title` - Activity title
- `type` - Call / Email / Meeting / Task
- `dueDate` - Due date
- `contactId` - Associated contact ID

## Parameters

- `page` - Page number
- `perPage` - Results per page
- `search` - Search by name or email

## When to Use

- Managing sales pipelines with built-in calling and email tracking
- Syncing leads from external sources into deal pipelines
- Logging customer interactions as activities for timeline tracking
- Running sales sequences and follow-up automations

## Rate Limits

- See Salesmate pricing page for plan-based API limits

## Relevant Skills

- sales:pipeline-review
- sales:call-prep
- sales:forecast
