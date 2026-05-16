# Masteriyo LMS

Modern WordPress LMS plugin for building, selling, and managing online courses with a focus on performance and simplicity.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via `/wp-json/masteriyo/v1/` |
| MCP | - | No official MCP server |
| CLI | - | No CLI |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress Application Password or JWT
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List courses
```bash
GET https://yoursite.com/wp-json/masteriyo/v1/courses

Authorization: Basic {base64_credentials}
```

### Get a single course
```bash
GET https://yoursite.com/wp-json/masteriyo/v1/courses/{id}

Authorization: Basic {base64_credentials}
```

### Enroll a student in a course
```bash
POST https://yoursite.com/wp-json/masteriyo/v1/course-progress

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"course_id": 42, "user_id": 7, "status": "enrolled"}
```

### List students for a course
```bash
GET https://yoursite.com/wp-json/masteriyo/v1/students?course_id={course_id}

Authorization: Basic {base64_credentials}
```

## Key Fields

### Course
- `id` - Course post ID
- `name` - Course title
- `price` - Course price
- `status` - Publish status
- `enrollment_limit` - Max students (0 = unlimited)

### Student / Progress
- `user_id` - WordPress user ID
- `course_id` - Course ID
- `status` - Progress status (enrolled, progress, completed)
- `completed_lessons` - Count of completed lessons

## Parameters

- `per_page` - Results per page (default 10)
- `page` - Page number
- `course_id` - Filter by course
- `status` - Filter by status

## When to Use

- Building or managing an online course catalog on WordPress
- Automating student enrollment based on purchase or membership events
- Querying course completion rates and student progress for reporting
- Integrating course access with payment gateways or membership plugins

## Rate Limits

- Limited by WordPress server capacity; no built-in rate limiting

## Relevant Skills

- marketing:content-creation
- marketing:email-sequence
- product-management:write-spec
