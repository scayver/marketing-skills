# LearnDash

WordPress LMS plugin for creating and selling online courses with quizzing, drip content, groups, and certificates.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at /wp-json/ldlms/v2/ |
| MCP | - | Not available |
| CLI | - | WP-CLI commands available |
| SDK | - | WordPress hooks and REST API only |

## Authentication

- **Type**: Consumer Key + Consumer Secret (Basic Auth)
- **Header**: `Authorization: Basic {base64(consumer_key:consumer_secret)}`
- **Get keys**: LearnDash Settings > REST API > Add New Key

## Common Agent Operations

### List all courses

```bash
GET https://yoursite.com/wp-json/ldlms/v2/sfwd-courses?per_page=100

Authorization: Basic {base64(key:secret)}
```

### Get a user's course progress

```bash
GET https://yoursite.com/wp-json/ldlms/v2/users/{user_id}/course-progress

Authorization: Basic {base64(key:secret)}
```

### Enroll a user in a course

```bash
POST https://yoursite.com/wp-json/ldlms/v2/users/{user_id}/course-progress

Authorization: Basic {base64(key:secret)}
Content-Type: application/json

{"course_id": 456}
```

### Get quiz results for a user

```bash
GET https://yoursite.com/wp-json/ldlms/v2/users/{user_id}/quiz-statistic-ref?course_id=456

Authorization: Basic {base64(key:secret)}
```

### List groups

```bash
GET https://yoursite.com/wp-json/ldlms/v2/groups?per_page=50

Authorization: Basic {base64(key:secret)}
```

## Key Fields

### Course Object
- `id` - Unique course ID
- `title` - Course title (rendered)
- `status` - publish | draft
- `price_type` - free | paynow | subscribe | closed
- `price` - Course price

### User Progress Object
- `course_id` - Course being tracked
- `completed` - Whether the course is completed (boolean)
- `steps_completed` - Number of completed steps
- `steps_total` - Total steps in the course

### Quiz Result
- `quiz_id` - Quiz identifier
- `score` - Raw score
- `percentage` - Percentage correct
- `pass` - Whether the user passed

## Parameters

- `per_page` - Number of results (max 100)
- `page` - Pagination page
- `course_id` - Filter by course
- `user_id` - Filter by user

## When to Use

- Enrolling or unenrolling users in courses programmatically
- Tracking course completion and quiz scores for reporting
- Segmenting email subscribers by course enrollment or completion
- Triggering CRM updates or email sequences based on course events

## Rate Limits

- No external rate limits; subject to WordPress server capacity

## Relevant Skills

- course-creation
- email-marketing
- crm-management
