# Ninja Tables

WordPress table plugin for creating responsive, interactive data tables on posts and pages with sortable columns, search, and import/export.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via `/wp-json/ninja-tables/v1/` |
| MCP | - | No official MCP server |
| CLI | - | No CLI |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List tables
```bash
GET https://yoursite.com/wp-json/ninja-tables/v1/tables

Authorization: Basic {base64_credentials}
```

### Get table data (rows)
```bash
GET https://yoursite.com/wp-json/ninja-tables/v1/tables/{table_id}/data

Authorization: Basic {base64_credentials}
```

### Add a row to a table
```bash
POST https://yoursite.com/wp-json/ninja-tables/v1/tables/{table_id}/data

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"name": "Jane Doe", "email": "jane@example.com", "score": "95"}
```

### Update a row
```bash
PUT https://yoursite.com/wp-json/ninja-tables/v1/tables/{table_id}/data/{row_id}

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"score": "98"}
```

## Key Fields

### Table
- `id` - Table post ID
- `post_title` - Table name
- `columns` - Array of column definition objects

### Column
- `key` - Column machine key
- `name` - Column display label
- `data_type` - Data type (text, number, date, etc.)

### Row
- `id` - Row ID
- Column key-value pairs matching the table's column definitions

## Parameters

- `table_id` - Target table ID
- `per_page` - Results per page
- `page` - Page number

## When to Use

- Displaying live leaderboards, directories, or data tables on WordPress pages
- Populating tables programmatically from form submissions or external data
- Building publicly visible member or product directories with real-time data
- Managing structured data visible on the WordPress front end without a custom database

## Rate Limits

- Limited by WordPress server capacity; no built-in rate limiting

## Relevant Skills

- data:create-viz
- marketing:content-creation
- operations:process-doc
