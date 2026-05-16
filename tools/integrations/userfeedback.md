# UserFeedback

UserFeedback is a WordPress on-site survey plugin that displays targeted popup and slide-in surveys to collect visitor opinions, NPS scores, and satisfaction ratings.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/userfeedback/v1/` |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI for plugin management |
| SDK | - | No official SDK; use REST directly |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Dashboard > Users > Profile > Application Passwords

## Common Agent Operations

### List Surveys
```bash
GET https://yoursite.com/wp-json/userfeedback/v1/surveys

Authorization: Basic {base64_credentials}
```

### Get a Single Survey
```bash
GET https://yoursite.com/wp-json/userfeedback/v1/surveys/{id}

Authorization: Basic {base64_credentials}
```

### List Responses for a Survey
```bash
GET https://yoursite.com/wp-json/userfeedback/v1/surveys/{id}/responses

Authorization: Basic {base64_credentials}
```

### Get a Single Response
```bash
GET https://yoursite.com/wp-json/userfeedback/v1/responses/{id}

Authorization: Basic {base64_credentials}
```

## Key Fields

### Survey
- `id` - Survey ID
- `title` - Survey name
- `status` - active, inactive
- `questions` - Array of question objects
- `response_count` - Total number of responses

### Response
- `id` - Response ID
- `survey_id` - Parent survey
- `answers` - Array of question-answer pairs
- `page_url` - URL where the survey was displayed
- `created_at` - ISO 8601 submission timestamp
- `user_id` - WordPress user ID if logged in (optional)

### Question
- `id` - Question ID
- `type` - nps, text, radio, checkbox, rating
- `label` - Question text

## Parameters

- `survey_id` - Required to scope responses to a survey
- `per_page` / `page` - Pagination controls
- `date_from` / `date_to` - Filter responses by date range

## When to Use

- Aggregating NPS scores to calculate trend data over time
- Routing low-score responses to a support queue automatically
- Reporting on visitor satisfaction by page or product category
- Syncing survey responses to a data warehouse for analysis

## Rate Limits

- Subject to WordPress server limits; no platform-level rate cap

## Relevant Skills

- product-management:synthesize-research
- data:analyze
- customer-support:ticket-triage
- marketing:performance-report
