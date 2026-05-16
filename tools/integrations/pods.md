# Pods

WordPress framework for creating custom content types, custom fields, and relationships with REST API support and a flexible templating system.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `/wp-json/pods/v1/` |
| MCP | - | Not available |
| CLI | ✓ | WP-CLI commands via `wp pods` |
| SDK | - | PHP framework only |

## Authentication

- **Type**: WordPress REST API (Application Password or JWT)
- **Header**: `Authorization: Bearer {application_password}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List all pods (content types)

```bash
GET https://yoursite.com/wp-json/pods/v1/pods

Authorization: Bearer {token}
```

### List items in a pod

```bash
GET https://yoursite.com/wp-json/pods/v1/pods/{pod_name}/items

Authorization: Bearer {token}
```

### Get a single pod item

```bash
GET https://yoursite.com/wp-json/pods/v1/pods/{pod_name}/items/{item_id}

Authorization: Bearer {token}
```

### Create a pod item

```bash
POST https://yoursite.com/wp-json/pods/v1/pods/{pod_name}/items

Authorization: Bearer {token}
Content-Type: application/json

{"name": "New Entry", "custom_field_1": "value", "custom_field_2": "value"}
```

### WP-CLI: List pod items

```bash
wp pods list --pod=my_pod_name
```

## Key Fields

### Pod Item Object
- `id` - Item ID
- `name` - Item title/name
- `slug` - URL slug
- `status` - publish / draft / pending
- `date_modified` - Last modified timestamp
- Custom fields are included by their field name as defined in the pod

## Parameters

- `pod` - Pod name (slug) to target
- `limit` - Number of items to return
- `page` - Page number for pagination
- `orderby` - Field to sort by
- `where` - SQL-style filter condition

## When to Use

- Building custom data applications on WordPress (directories, catalogs, databases)
- Extending WordPress post types with complex relational fields
- Creating structured content types beyond default posts/pages
- Programmatically reading or writing custom content via the REST API

## Rate Limits

- Self-hosted WordPress; limits depend on server configuration

## Relevant Skills

- engineering:architecture
- operations:process-doc
- marketing:content-creation
