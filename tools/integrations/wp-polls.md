# WP-Polls

WP-Polls is a WordPress plugin for embedding polls and voting forms into posts and pages, with AJAX-based voting, result display, and basic analytics.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external REST API; WordPress-native only |
| MCP | - | Not available |
| CLI | ✓ | Via WP-CLI for database-level queries |
| SDK | - | Not available |

## Authentication

- **Type**: WordPress admin login or Application Password for WP REST API access
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### Query polls via WordPress database (WP-CLI)
```bash
wp db query "SELECT pollq_id, pollq_question, pollq_totalvotes FROM wp_pollsq ORDER BY pollq_timestamp DESC LIMIT 20"
```

### Get poll answers and vote counts
```bash
wp db query "SELECT polla_aid, polla_answers, polla_votes FROM wp_pollsa WHERE polla_qid = {poll_id}"
```

### Access poll data via WordPress REST API (custom endpoint)
```
GET https://yoursite.com/wp-json/wp/v2/polls

Authorization: Basic {base64_credentials}
```

### Register a vote programmatically (via plugin hook)
```php
// WordPress PHP hook
do_action('wp_polls_vote', $poll_id, $poll_answer_id, $user_id);
```

## Key Fields

### Poll Object (wp_pollsq table)
- `pollq_id` - Poll ID
- `pollq_question` - Poll question text
- `pollq_totalvotes` - Total votes cast
- `pollq_timestamp` - Creation timestamp
- `pollq_expiry` - Expiry date (Unix timestamp; 0 = no expiry)
- `pollq_active` - 1 = active, 0 = closed

### Poll Answer Object (wp_pollsa table)
- `polla_aid` - Answer ID
- `polla_qid` - Parent poll ID
- `polla_answers` - Answer text
- `polla_votes` - Vote count for this answer

### Poll Log Object (wp_pollsip table)
- `pollip_qid` - Poll ID
- `pollip_ip` - Voter IP address
- `pollip_userid` - WordPress user ID (0 for guests)
- `pollip_timestamp` - Vote timestamp

## Parameters

- `poll_id` - Target poll identifier
- `answer_id` - Target answer option for a vote
- `multiple` - Whether the poll allows multiple selections

## When to Use

- Embedding audience preference surveys into blog posts or landing pages
- Tracking reader sentiment or product preferences via simple voting
- Collecting feedback from site visitors without complex form builders
- Displaying live voting results to engage community members

## Rate Limits

- No external API; rate limiting depends on server configuration
- Duplicate vote prevention controlled by IP logging or cookie settings

## Relevant Skills

- marketing:content-creation
- marketing:draft-content
- data:explore-data
