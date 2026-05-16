# Thrive Apprentice

Thrive Apprentice is a WordPress online course builder by Thrive Themes, integrated with the Thrive Suite for sales pages, quizzes, and marketing-focused course delivery.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/thrive-apprentice/v1/` |
| MCP | - | No official MCP server |
| CLI | - | WP-CLI for plugin management |
| SDK | - | No external SDK; use REST directly |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Dashboard > Users > Profile > Application Passwords

## Common Agent Operations

### List Courses
```bash
GET https://yoursite.com/wp-json/thrive-apprentice/v1/courses

Authorization: Basic {base64_credentials}
```

### Get a Single Course
```bash
GET https://yoursite.com/wp-json/thrive-apprentice/v1/courses/{id}

Authorization: Basic {base64_credentials}
```

### List Lessons in a Course
```bash
GET https://yoursite.com/wp-json/thrive-apprentice/v1/courses/{id}/lessons

Authorization: Basic {base64_credentials}
```

### List Students (Enrolled Users)
```bash
GET https://yoursite.com/wp-json/thrive-apprentice/v1/students

Authorization: Basic {base64_credentials}
```

### Enroll a Student in a Course
```bash
POST https://yoursite.com/wp-json/thrive-apprentice/v1/courses/{id}/students

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"user_id": 42}
```

## Key Fields

### Course
- `id` - Course ID
- `title` - Course name
- `status` - publish, draft
- `lessons_count` - Number of lessons

### Student
- `id` - WordPress user ID
- `email` - Student email
- `enrolled_courses` - Array of course IDs
- `progress` - Completion percentage per course

## Parameters

- `status` - Filter courses by publish/draft
- `per_page` / `page` - Pagination controls
- `course_id` - Scope students or lessons to a course

## When to Use

- Automating course enrollment after purchase or registration
- Sending progress-based emails using student completion data
- Reporting on student enrollment and course completion rates
- Syncing student data to a CRM for upsell or support workflows

## Rate Limits

- Subject to WordPress server limits; no platform-level rate cap

## Relevant Skills

- marketing:email-sequence
- data:analyze
- operations:process-doc
- sales:account-research
