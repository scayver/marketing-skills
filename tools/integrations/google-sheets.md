# Google Sheets

Cloud-based spreadsheet application for creating, editing, and collaborating on tabular data with formula and chart support.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Google Sheets API v4 |
| MCP | ✓ | Available via Google Drive/Sheets MCP |
| CLI | - | Not available |
| SDK | ✓ | Official client libraries for Python, Node.js, Java, PHP, Go |

## Authentication

- **Type**: OAuth 2.0 or Service Account
- **Header**: `Authorization: Bearer {access_token}`
- **Get token**: Google Cloud Console > Credentials; scopes: `https://www.googleapis.com/auth/spreadsheets`

## Common Agent Operations

### Read values from range
```bash
GET https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}

Authorization: Bearer {access_token}
```

### Append rows
```bash
POST https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}:append?valueInputOption=USER_ENTERED

Authorization: Bearer {access_token}
Content-Type: application/json

{"values": [["Jane Doe", "jane@example.com", "2024-06-15"]]}
```

### Update values
```bash
PUT https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}?valueInputOption=USER_ENTERED

Authorization: Bearer {access_token}
Content-Type: application/json

{"values": [["Updated Value"]]}
```

### Create spreadsheet
```bash
POST https://sheets.googleapis.com/v4/spreadsheets

Authorization: Bearer {access_token}
Content-Type: application/json

{"properties": {"title": "Lead Tracker Q2"}}
```

## Key Fields

### Spreadsheet
- `spreadsheetId` - Unique spreadsheet ID (from URL)
- `properties.title` - Spreadsheet name
- `sheets` - Array of sheet objects

### Sheet
- `sheetId` - Integer sheet ID
- `title` - Tab name
- `index` - Tab position

### Values Response
- `range` - A1 notation of returned range
- `majorDimension` - ROWS or COLUMNS
- `values` - 2D array of cell values

## Parameters

- `range` - A1 notation (e.g., `Sheet1!A1:D100`)
- `valueInputOption` - RAW or USER_ENTERED
- `insertDataOption` - OVERWRITE or INSERT_ROWS (append only)
- `majorDimension` - ROWS or COLUMNS

## When to Use

- Log form submissions as new spreadsheet rows
- Build real-time dashboards from live data sources
- Store lead or order data for non-technical review
- Export CRM data for analysis in spreadsheet format

## Rate Limits

- 300 requests/minute per project; 60 requests/minute per user

## Relevant Skills

- data:analyze
- data:build-dashboard
- marketing:performance-report
