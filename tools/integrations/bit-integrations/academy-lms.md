# Academy LMS

WordPress-based learning management system for creating and selling online courses with quizzes, progress tracking, and certificate generation.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/academy/v1/` |
| MCP | - | Not available |
| CLI | - | WP-CLI support via plugin commands |
| SDK | - | No official SDK |

## Authentication

- **Type**: WordPress Application Password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords > Add New

## Common Agent Operations

### List courses

```bash
GET https://yoursite.com/wp-json/academy/v1/courses

Authorization: Basic {base64_credentials}
```

### Get single course

```bash
GET https://yoursite.com/wp-json/academy/v1/courses/{course_id}

Authorization: Basic {base64_credentials}
```

### List enrolled students for a course

```bash
GET https://yoursite.com/wp-json/academy/v1/courses/{course_id}/students

Authorization: Basic {base64_credentials}
```

### Get student progress

```bash
GET https://yoursite.com/wp-json/academy/v1/students/{user_id}/progress

Authorization: Basic {base64_credentials}
```

### Enroll a student

```bash
POST https://yoursite.com/wp-json/academy/v1/enrollments

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"course_id": 42, "user_id": 7}
```

## Key Fields

### Course
- `id` - Course ID
- `title` - Course title
- `status` - publish, draft, pending
- `price` - Course price
- `instructor_id` - Instructor user ID
- `enrolled_count` - Total enrollments

### Enrollment
- `user_id` - WordPress user ID
- `course_id` - Course being enrolled in
- `enrolled_at` - Enrollment timestamp
- `progress` - Completion percentage (0–100)
- `completed_at` - Completion timestamp (null if incomplete)

## Parameters

- `per_page` - Results per page (default 10, max 100)
- `page` - Pagination page number
- `status` - Filter courses by status (publish, draft)
- `course_id` - Filter enrollments or quizzes by course

## When to Use

- Reporting on course enrollment and completion rates
- Automating certificate delivery when students complete a course
- Syncing student data to external CRM or email platforms
- Pulling course catalog data into reports or dashboards

## Rate Limits

- Subject to WordPress server limits; no platform-enforced rate limiting

## Relevant Skills

- content-strategy
- email-marketing
- lead-generation
