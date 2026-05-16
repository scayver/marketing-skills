# WP Job Manager

WP Job Manager is a lightweight WordPress plugin for creating and managing job listing boards with front-end job submission, filtering, and application management.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/wp/v2/job_listing/` |
| MCP | - | Not available |
| CLI | ✓ | Via WP-CLI |
| SDK | - | Not available |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List all job listings
```
GET https://yoursite.com/wp-json/wp/v2/job_listing?per_page=50

Authorization: Basic {base64_credentials}
```

### Get a specific job listing
```
GET https://yoursite.com/wp-json/wp/v2/job_listing/{listing_id}

Authorization: Basic {base64_credentials}
```

### Create a new job listing
```
POST https://yoursite.com/wp-json/wp/v2/job_listing

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "title": "Senior Developer",
  "content": "We are looking for a senior developer...",
  "status": "publish",
  "meta": {
    "_job_location": "Remote",
    "_company_name": "Acme Corp",
    "_job_type": "full-time",
    "_application": "jobs@acme.com"
  }
}
```

### Filter listings by job type
```
GET https://yoursite.com/wp-json/wp/v2/job_listing?job_listing_type=full-time

Authorization: Basic {base64_credentials}
```

## Key Fields

### Job Listing Post Object
- `id` - Post ID
- `title` - Job title
- `content` - Job description
- `status` - `publish`, `pending`, `expired`, `preview`
- `meta._job_location` - Job location
- `meta._company_name` - Hiring company name
- `meta._company_website` - Company website URL
- `meta._job_type` - Job type slug (e.g., `full-time`, `part-time`, `remote`)
- `meta._application` - Application email or URL
- `meta._job_expiry_date` - Expiration date (YYYY-MM-DD)

### Job Type Taxonomy
- `slug` - Type identifier (e.g., `full-time`, `freelance`)
- `name` - Display name

## Parameters

- `per_page` - Results per page (max 100)
- `status` - Filter by post status
- `job_listing_type` - Filter by job type taxonomy slug
- `search` - Keyword search on title and content

## When to Use

- Programmatically publishing job openings from an ATS or HR system via API
- Querying active job listings to display or sync to external job aggregators
- Expiring or updating listings in bulk based on HR system state changes
- Building recruitment dashboards on top of WordPress job board data

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit
- Recommended: paginate requests with `per_page=100`

## Relevant Skills

- human-resources:recruiting-pipeline
- human-resources:job-post-builder
- operations:process-doc
