# LifterLMS

WordPress LMS plugin for building online courses, memberships, and coaching programs with built-in ecommerce.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at /wp-json/llms/v1/ |
| MCP | - | Not available |
| CLI | - | WP-CLI support available |
| SDK | - | WordPress hooks and REST API only |

## Authentication

- **Type**: WordPress Application Password (Basic Auth)
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords (user must have LMS admin role)

## Common Agent Operations

### List all courses

```bash
GET https://yoursite.com/wp-json/llms/v1/courses?per_page=50

Authorization: Basic {base64(user:app_password)}
```

### Get student enrollments

```bash
GET https://yoursite.com/wp-json/llms/v1/students/{student_id}/enrollments

Authorization: Basic {base64(user:app_password)}
```

### Enroll a student in a course

```bash
POST https://yoursite.com/wp-json/llms/v1/enrollments

Authorization: Basic {base64(user:app_password)}
Content-Type: application/json

{"student_id": 42, "post_id": 456, "status": "enrolled"}
```

### Get all memberships

```bash
GET https://yoursite.com/wp-json/llms/v1/memberships?per_page=50

Authorization: Basic {base64(user:app_password)}
```

### Get course progress for a student

```bash
GET https://yoursite.com/wp-json/llms/v1/students/{student_id}/progress?post_id={course_id}

Authorization: Basic {base64(user:app_password)}
```

## Key Fields

### Course Object
- `id` - Unique course ID
- `title` - Course title (rendered)
- `status` - publish | draft
- `price` - Course price
- `enrollment_open` - Whether enrollment is open

### Enrollment Object
- `student_id` - WordPress user ID
- `post_id` - Course or membership ID
- `status` - enrolled | expired | cancelled | on-hold
- `date_created` - Enrollment date

### Student Object
- `id` - WordPress user ID
- `email` - Student email
- `name` - Full name
- `enrollment_count` - Number of enrolled courses

## Parameters

- `per_page` - Results per page (max 100)
- `page` - Pagination offset
- `student_id` - Filter by student
- `post_id` - Filter by course or membership

## When to Use

- Managing course and membership enrollments programmatically
- Reporting on student progress and completion rates
- Triggering email or CRM actions on enrollment/completion events
- Bundling course access with membership plans or external purchases

## Rate Limits

- No external rate limits; subject to WordPress server capacity

## Relevant Skills

- course-creation
- email-marketing
- ecommerce
