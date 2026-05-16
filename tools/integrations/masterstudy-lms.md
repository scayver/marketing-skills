# MasterStudy LMS

WordPress LMS plugin for building online schools and academies with quizzes, certificates, course bundles, and instructor management.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API via `/wp-json/masterstudy-lms/v1/` |
| MCP | - | No official MCP server |
| CLI | - | No CLI |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List courses
```bash
GET https://yoursite.com/wp-json/masterstudy-lms/v1/courses

Authorization: Basic {base64_credentials}
```

### Get course details
```bash
GET https://yoursite.com/wp-json/masterstudy-lms/v1/courses/{id}

Authorization: Basic {base64_credentials}
```

### Enroll a student
```bash
POST https://yoursite.com/wp-json/masterstudy-lms/v1/enrollments

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"course_id": 42, "user_id": 7}
```

### Get student progress
```bash
GET https://yoursite.com/wp-json/masterstudy-lms/v1/students/{user_id}/progress

Authorization: Basic {base64_credentials}
```

## Key Fields

### Course
- `id` - Course ID
- `title` - Course title
- `price` - Course price
- `status` - Publish status
- `instructor_id` - Instructor user ID

### Enrollment
- `user_id` - Student WordPress user ID
- `course_id` - Course ID
- `status` - Enrollment status

## Parameters

- `per_page` - Results per page
- `page` - Page number
- `user_id` - Filter by student

## When to Use

- Building an online academy with multiple instructors on WordPress
- Automating enrollment after payment or membership activation
- Querying quiz pass/fail data for reporting or follow-up automation
- Managing course certificates programmatically

## Rate Limits

- Limited by WordPress server capacity; no built-in rate limiting

## Relevant Skills

- marketing:content-creation
- marketing:email-sequence
- product-management:write-spec
