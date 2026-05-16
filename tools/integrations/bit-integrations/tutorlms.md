# TutorLMS

TutorLMS is a feature-rich WordPress LMS plugin with a drag-and-drop course builder, quizzes, certificates, and student progress tracking.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/tutor/v2/` |
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
GET https://yoursite.com/wp-json/tutor/v2/courses

Authorization: Basic {base64_credentials}
```

### Get a Single Course
```bash
GET https://yoursite.com/wp-json/tutor/v2/courses/{id}

Authorization: Basic {base64_credentials}
```

### List Students
```bash
GET https://yoursite.com/wp-json/tutor/v2/students

Authorization: Basic {base64_credentials}
```

### Get Student Progress
```bash
GET https://yoursite.com/wp-json/tutor/v2/students/{user_id}/courses/{course_id}/progress

Authorization: Basic {base64_credentials}
```

### List Quizzes for a Course
```bash
GET https://yoursite.com/wp-json/tutor/v2/courses/{course_id}/quizzes

Authorization: Basic {base64_credentials}
```

## Key Fields

### Course
- `id` - Course ID
- `title` - Course name
- `status` - publish, draft
- `price` - Course price (0 for free)
- `enrollments_count` - Total enrolled students

### Student
- `id` - WordPress user ID
- `email` - Student email
- `display_name` - Student name
- `enrolled_courses` - Array of enrolled course IDs

### Progress
- `completed_lessons` - Number of completed lessons
- `total_lessons` - Total lessons in course
- `completion_percent` - 0-100 percentage

## Parameters

- `per_page` / `page` - Pagination controls
- `status` - Filter courses by status
- `course_id` - Scope students or quizzes to a course

## When to Use

- Triggering completion certificates or email sequences at 100% progress
- Syncing enrolled student data to a CRM for upsell sequences
- Reporting on course completion rates and quiz scores
- Automating enrollment for new purchasers from an eCommerce event

## Rate Limits

- Subject to WordPress server limits; no platform-level rate cap

## Relevant Skills

- marketing:email-sequence
- data:analyze
- operations:process-doc
- sales:account-research
