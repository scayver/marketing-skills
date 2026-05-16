# Creator LMS

WordPress LMS plugin built for content creators and course sellers that provides streamlined course creation, student management, and progress tracking.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | - | No external API |
| MCP | - | Not available |
| CLI | - | WP-CLI available for WordPress-level operations |
| SDK | - | Not available |
| WordPress REST | ✓ | REST endpoints at /wp-json/creator-lms/v1/ |

## Authentication

- **Type**: WordPress application password
- **Header**: `Authorization: Basic {base64(username:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List all courses
```
GET /wp-json/creator-lms/v1/courses

Authorization: Basic {base64_credentials}
```

### Get course details
```
GET /wp-json/creator-lms/v1/courses/{course_id}

Authorization: Basic {base64_credentials}
```

### Enroll a student in a course
```
POST /wp-json/creator-lms/v1/enrollments

Authorization: Basic {base64_credentials}
Content-Type: application/json

{"user_id": 42, "course_id": 17}
```

### Get enrollments for a course
```
GET /wp-json/creator-lms/v1/courses/{course_id}/students

Authorization: Basic {base64_credentials}
```

### Hook into enrollment event (PHP)
```php
add_action('creator_lms_student_enrolled', function($user_id, $course_id) {
    // Trigger downstream action on enrollment
}, 10, 2);
```

## Key Fields

### Course
- `id` - Course post ID
- `title` - Course name
- `status` - publish / draft
- `price` - Course price
- `instructor_id` - WordPress user ID of the instructor

### Enrollment
- `user_id` - WordPress user ID of the student
- `course_id` - Creator LMS course ID
- `enrolled_at` - Enrollment timestamp
- `status` - active / completed / cancelled

### Student Progress
- `user_id` - Student identifier
- `course_id` - Course identifier
- `completed_lessons` - Count or array of completed lesson IDs
- `completion_percentage` - Progress as a percentage

## Parameters

- `course_id` - Targets a specific course for enrollment or progress queries
- `user_id` - Targets a specific student
- `per_page` - Results per page for list endpoints
- `page` - Pagination page number

## When to Use

- Enrolling students programmatically after purchase or registration
- Syncing new enrollment data to email marketing or CRM platforms
- Triggering automations (certificate delivery, Slack notification) on course completion
- Pulling student progress data for reporting or success team workflows

## Rate Limits

- No external API; limits governed by WordPress server capacity

## Relevant Skills

- course-creation
- email-marketing
- lead-generation
