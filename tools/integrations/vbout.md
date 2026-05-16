# Vbout

Vbout is a multi-channel marketing automation platform offering email campaigns, social media management, lead tracking, and contact list tools.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `https://api.vbout.com/1/` |
| MCP | - | No official MCP server |
| CLI | - | No official CLI |
| SDK | - | No official SDK; use REST directly |

## Authentication

- **Type**: API Key (query parameter)
- **Parameter**: `?key={api_key}`
- **Get token**: Vbout Dashboard > Account Settings > API Keys

## Common Agent Operations

### List Email Lists
```bash
GET https://api.vbout.com/1/emailmarketing/lists.json?key={api_key}
```

### Add a Contact to a List
```bash
POST https://api.vbout.com/1/emailmarketing/addcontact.json

Content-Type: application/x-www-form-urlencoded

key={api_key}&listid={list_id}&email=user@example.com&firstname=Jane&lastname=Doe&status=active
```

### Get Contact Details
```bash
GET https://api.vbout.com/1/emailmarketing/getcontact.json?key={api_key}&email=user@example.com
```

### List Email Campaigns
```bash
GET https://api.vbout.com/1/emailmarketing/campaigns.json?key={api_key}
```

### Get Campaign Stats
```bash
GET https://api.vbout.com/1/emailmarketing/campaignstats.json?key={api_key}&id={campaign_id}
```

## Key Fields

### Contact
- `id` - Contact ID
- `email` - Contact email address
- `firstname` / `lastname` - Name fields
- `status` - active, unsubscribed, bounced
- `listid` - List membership

### Campaign
- `id` - Campaign ID
- `name` - Campaign name
- `status` - draft, scheduled, sent
- `sent` - Number of sends
- `opens` / `clicks` - Engagement counts

## Parameters

- `key` - Required API key on all requests
- `listid` - Target email list ID
- `email` - Contact email address (for lookup or update)
- `status` - Filter contacts by active/unsubscribed

## When to Use

- Adding new leads to Vbout email lists from form submissions
- Triggering automation workflows based on contact activity
- Pulling campaign performance data for marketing reports
- Syncing CRM contact status changes to Vbout list membership

## Rate Limits

- See Vbout pricing page for API call limits per plan

## Relevant Skills

- marketing:email-sequence
- marketing:campaign-plan
- marketing:performance-report
- data:analyze
