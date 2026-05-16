# MemberPress Courses

Built-in LMS add-on for MemberPress that enables course creation and delivery without a separate LMS plugin, extending the MemberPress REST API.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | Extends MemberPress REST API at `/wp-json/mp/v1/` |
| MCP | - | No official MCP server |
| CLI | - | No CLI |
| SDK | - | No official SDK |

## Authentication

- **Type**: API Consumer Key + Secret (Basic Auth)
- **Header**: `Authorization: Basic {base64(consumer_key:consumer_secret)}`
- **Get token**: WordPress Admin > MemberPress > Developer Tools > API Keys

## Common Agent Operations

### List courses
```bash
GET https://yoursite.com/wp-json/mp/v1/courses

Authorization: Basic {base64_credentials}
```

### Get course lessons
```bash
GET https://yoursite.com/wp-json/mp/v1/courses/{course_id}/lessons

Authorization: Basic {base64_credentials}
```

### Get a member's course progress
```bash
GET https://yoursite.com/wp-json/mp/v1/members/{member_id}/courses

Authorization: Basic {base64_credentials}
```

### Enroll a member in a course
```bash
POST https://yoursite.com/wp-json/mp/v1/courses/{course_id}/enrollments

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"member_id": 42}
```

## Key Fields

### Course
- `id` - Course post ID
- `title` - Course title
- `status` - Publish status
- `lessons` - Array of lesson objects

### Lesson
- `id` - Lesson post ID
- `title` - Lesson title
- `course_id` - Parent course ID

### Progress
- `member_id` - Member user ID
- `course_id` - Course ID
- `completed_lessons` - Count of completed lessons
- `status` - Progress status (in-progress, completed)

## Parameters

- `per_page` - Results per page
- `page` - Page number
- `member_id` - Filter progress by member

## When to Use

- Delivering online courses bundled with MemberPress memberships
- Querying student progress for reporting or completion-based automation
- Automating course enrollment from external payment or registration events
- Building completion-triggered workflows such as certificate delivery or upsell sequences

## Rate Limits

- Limited by WordPress server capacity; no built-in rate limiting

## Relevant Skills

- marketing:email-sequence
- marketing:content-creation
- product-management:write-spec
