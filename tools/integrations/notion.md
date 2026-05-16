# Notion

All-in-one workspace for notes, wikis, databases, and project management with a flexible block-based editor and relational database capabilities.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://api.notion.com/v1/` |
| MCP | ✓ | Official Notion MCP server available |
| CLI | - | No official CLI |
| SDK | ✓ | Official JavaScript SDK (`@notionhq/client`) |

## Authentication

- **Type**: Bearer Token (Internal Integration)
- **Header**: `Authorization: Bearer {integration_token}` + `Notion-Version: 2022-06-28`
- **Get token**: notion.so/my-integrations > New Integration > copy Internal Integration Token, then share target database with the integration

## Common Agent Operations

### Query a database
```bash
POST https://api.notion.com/v1/databases/{database_id}/query

Authorization: Bearer {integration_token}
Notion-Version: 2022-06-28
Content-Type: application/json

{"filter": {"property": "Status", "select": {"equals": "In Progress"}}}
```

### Create a page (add row to database)
```bash
POST https://api.notion.com/v1/pages

Authorization: Bearer {integration_token}
Notion-Version: 2022-06-28
Content-Type: application/json

{"parent": {"database_id": "{database_id}"}, "properties": {"Name": {"title": [{"text": {"content": "New Entry"}}]}, "Email": {"email": "user@example.com"}, "Status": {"select": {"name": "New"}}}}
```

### Update a page
```bash
PATCH https://api.notion.com/v1/pages/{page_id}

Authorization: Bearer {integration_token}
Notion-Version: 2022-06-28
Content-Type: application/json

{"properties": {"Status": {"select": {"name": "Completed"}}}}
```

### Search pages and databases
```bash
POST https://api.notion.com/v1/search

Authorization: Bearer {integration_token}
Notion-Version: 2022-06-28
Content-Type: application/json

{"query": "project name", "filter": {"value": "database", "property": "object"}}
```

## Key Fields

### Page / Database Row
- `id` - Page UUID
- `properties` - Object of property type objects (title, rich_text, select, date, email, number, etc.)
- `parent` - Parent object (database_id or page_id)
- `created_time` - ISO 8601 creation timestamp
- `last_edited_time` - Last edit timestamp

### Database
- `id` - Database UUID
- `title` - Database title (array of rich text objects)
- `properties` - Schema of property definitions

## Parameters

- `filter` - Filter object for database queries
- `sorts` - Array of sort definitions
- `page_size` - Results per page (max 100)
- `start_cursor` - Pagination cursor

## When to Use

- Using Notion databases as a lightweight CRM, project tracker, or content calendar
- Automatically adding rows to Notion databases from form submissions or API events
- Querying Notion databases to pull structured data into reports or dashboards
- Building wiki-style knowledge bases with programmatically updated content

## Rate Limits

- 3 requests per second per integration; see Notion API documentation

## Relevant Skills

- product-management:write-spec
- marketing:content-creation
- operations:process-doc
