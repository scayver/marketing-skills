# LearnPress

Free WordPress LMS plugin for creating and selling online courses with lessons, quizzes, and student management.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | REST API at /wp-json/learnpress/v1/ |
| MCP | - | Not available |
| CLI | - | WP-CLI support available |
| SDK | - | WordPress hooks and REST API only |

## Authentication

- **Type**: WordPress Application Password (Basic Auth)
- **Header**: `Authorization: Basic {base64(user:app_password)}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List all courses

```bash
GET https://yoursite.com/wp-json/learnpress/v1/courses?per_page=50

Authorization: Basic {base64(user:app_password)}
```

### Get a course's curriculum

```bash
GET https://yoursite.com/wp-json/learnpress/v1/courses/{course_id}/curriculum

Authorization: Basic {base64(user:app_password)}
```

### Get students enrolled in a course

```bash
GET https://yoursite.com/wp-json/learnpress/v1/courses/{course_id}/students

Authorization: Basic {base64(user:app_password)}
```

### Enroll a user in a course (PHP hook)

```php
do_action( 'learnpress/user/enrolled-course', $user_id, $course_id, $order_id );
// Or use the LP_User_Item class:
$user = learn_press_get_user( $user_id );
$user->enroll_course( $course_id );
```

### Get course orders

```bash
GET https://yoursite.com/wp-json/learnpress/v1/orders?per_page=50

Authorization: Basic {base64(user:app_password)}
```

## Key Fields

### Course Object
- `id` - Unique course ID
- `name` - Course title
- `status` - publish | draft
- `price` - Course price (string)
- `students` - Number of enrolled students

### Student Object
- `id` - WordPress user ID
- `email` - Student email
- `display_name` - Display name
- `enrolled_courses` - Array of enrolled course IDs

### Order Object
- `id` - Order ID
- `user_id` - Purchasing user
- `status` - pending | processing | completed | refunded
- `total` - Order total
- `items` - Array of courses purchased

## Parameters

- `per_page` - Number of results (max 100)
- `page` - Pagination offset
- `status` - Filter by publish/draft
- `course_id` - Filter students or orders by course

## When to Use

- Listing and managing course content on a WordPress LMS
- Enrolling users in courses triggered by purchases or form submissions
- Reporting on student progress and course completions
- Automating course access as part of membership or onboarding workflows

## Rate Limits

- No external rate limits; subject to WordPress server capacity

## Relevant Skills

- course-creation
- email-marketing
- ecommerce
