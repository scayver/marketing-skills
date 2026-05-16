# Salesforce

Enterprise CRM platform providing sales, service, marketing, and analytics tools with a flexible object model and extensive API surface.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://YOUR_INSTANCE.salesforce.com/services/data/v58.0/` |
| MCP | - | Not available |
| CLI | ✓ | Salesforce CLI (`sf` / `sfdx`) |
| SDK | ✓ | Official SDKs for Java, Python, Node.js, .NET, PHP |

## Authentication

- **Type**: OAuth 2.0 (Connected App)
- **Header**: `Authorization: Bearer {access_token}`
- **Get token**: Salesforce Setup > App Manager > New Connected App, then POST to `/services/oauth2/token`

## Common Agent Operations

### Query records (SOQL)

```bash
GET https://YOUR_INSTANCE.salesforce.com/services/data/v58.0/query?q=SELECT+Id,Name,Email+FROM+Contact+LIMIT+100

Authorization: Bearer {access_token}
```

### Create a Lead

```bash
POST https://YOUR_INSTANCE.salesforce.com/services/data/v58.0/sobjects/Lead

Authorization: Bearer {access_token}
Content-Type: application/json

{"FirstName": "Jane", "LastName": "Doe", "Email": "jane@example.com", "Company": "Acme Corp", "LeadSource": "Web"}
```

### Create a Contact

```bash
POST https://YOUR_INSTANCE.salesforce.com/services/data/v58.0/sobjects/Contact

Authorization: Bearer {access_token}
Content-Type: application/json

{"FirstName": "Jane", "LastName": "Doe", "Email": "jane@example.com", "AccountId": "001Xx000003GYkQ"}
```

### Create an Opportunity

```bash
POST https://YOUR_INSTANCE.salesforce.com/services/data/v58.0/sobjects/Opportunity

Authorization: Bearer {access_token}
Content-Type: application/json

{"Name": "Acme Deal Q2", "StageName": "Prospecting", "CloseDate": "2026-06-30", "AccountId": "001Xx000003GYkQ", "Amount": 25000}
```

### Update a record

```bash
PATCH https://YOUR_INSTANCE.salesforce.com/services/data/v58.0/sobjects/Lead/{record_id}

Authorization: Bearer {access_token}
Content-Type: application/json

{"Status": "Working"}
```

## Key Fields

### Lead Object
- `Id` - Salesforce record ID
- `FirstName` / `LastName` - Name fields
- `Email` - Email address
- `Company` - Company name
- `LeadSource` - Source (Web, Phone, etc.)
- `Status` - Open / Working / Converted

### Contact Object
- `Id` - Record ID
- `AccountId` - Associated Account ID
- `Email` - Email address
- `Phone` - Phone number

### Opportunity Object
- `Name` - Opportunity name
- `StageName` - Pipeline stage
- `CloseDate` - Expected close date
- `Amount` - Deal value

## Parameters

- SOQL `WHERE` clause for filtering
- `fields` - Comma-separated field list in queries
- `limit` - Max records returned (max 2000 per query)

## When to Use

- Enterprise sales pipeline management and reporting
- Syncing leads from external sources into Salesforce
- Automating opportunity creation from marketing events
- Running SOQL queries for custom analytics and reporting

## Rate Limits

- API call limits vary by edition (e.g., Essentials: 100K calls/day, Enterprise: 1M calls/day)
- See Salesforce Platform API limits documentation

## Relevant Skills

- sales:pipeline-review
- sales:forecast
- data:sql-queries
