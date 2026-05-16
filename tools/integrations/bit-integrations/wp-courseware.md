# WP Courseware

WP Courseware is a drag-and-drop WordPress LMS plugin with drip content scheduling, quizzes, gradebooks, and certificate generation for online course creators.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at `/wp-json/wp-courseware/v1/` |
| MCP | - | Not available |
| CLI | ✓ | Via WP-CLI |
| SDK | - | Not available |

## Authentication

- **Type**: WordPress Application Password or API Key
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List all courses
```
GET https://yoursite.com/wp-json/wp-courseware/v1/courses

Authorization: Basic {base64_credentials}
```

### Get enrolled students for a course
```
GET https://yoursite.com/wp-json/wp-courseware/v1/courses/{course_id}/students

Authorization: Basic {base64_credentials}
```

### Enroll a student in a course
```
POST https://yoursite.com/wp-json/wp-courseware/v1/courses/{course_id}/students

Authorization: Basic {base64_credentials}
Content-Type: application/json

{
  "user_id": 42
}
```

### Get student progress for a course
```
GET https://yoursite.com/wp-json/wp-courseware/v1/students/{user_id}/progress?course_id={course_id}

Authorization: Basic {base64_credentials}
```

## Key Fields

### Course Object
- `id` - Course ID
- `title` - Course title
- `status` - `publish`, `draft`
- `modules` - Array of module IDs
- `enrollment_count` - Number of enrolled students

### Student Progress Object
- `user_id` - WordPress user ID
- `course_id` - Course ID
- `progress` - Percentage complete (0-100)
- `status` - `not_started`, `in_progress`, `completed`
- `completed_units` - Array of completed unit IDs
- `completion_date` - Date completed (if applicable)

### Module/Unit Object
- `id` - Unit ID
- `title` - Unit title
- `module_id` - Parent module ID
- `type` - `unit`, `quiz`

## Parameters

- `course_id` - Filter by specific course
- `user_id` - Filter by student
- `status` - Filter by enrollment or progress status

## When to Use

- Enrolling students programmatically after external purchases or registrations
- Querying completion data to trigger certificates or next-step communications
- Building course progress reports for instructors or administrators
- Syncing enrollment status with CRM or email platforms for targeted follow-up

## Rate Limits

- Subject to WordPress server limits; no hard API rate limit
- Batch enrollment operations should include delays to avoid server overload

## Relevant Skills

- marketing:email-sequence
- data:analyze
- customer-support:customer-research
