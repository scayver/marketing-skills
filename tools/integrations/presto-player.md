# Presto Player

WordPress video player plugin for course creators and content marketers, with chapter markers, email capture gates, CTAs, and video progress tracking.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | ✓ | WordPress REST API at `/wp-json/presto-player/v1/` |
| MCP | - | Not available |
| CLI | - | Not available |
| SDK | - | PHP hooks only |

## Authentication

- **Type**: WordPress REST API (Application Password)
- **Header**: `Authorization: Bearer {application_password}`
- **Get token**: WordPress Admin > Users > Profile > Application Passwords

## Common Agent Operations

### List videos

```bash
GET https://yoursite.com/wp-json/presto-player/v1/videos

Authorization: Bearer {token}
```

### Get video details

```bash
GET https://yoursite.com/wp-json/presto-player/v1/videos/{video_id}

Authorization: Bearer {token}
```

### List media hubs

```bash
GET https://yoursite.com/wp-json/presto-player/v1/media-hubs

Authorization: Bearer {token}
```

### Get user video progress

```bash
GET https://yoursite.com/wp-json/presto-player/v1/progress?video_id={id}&user_id={user_id}

Authorization: Bearer {token}
```

## Key Fields

### Video Object
- `id` - Video ID
- `title` - Video title
- `video_url` - Source video URL
- `duration` - Duration in seconds
- `chapters` - Array of chapter timestamps and titles
- `preset_id` - Player preset ID

### Progress Object
- `user_id` - WordPress user ID
- `video_id` - Video ID
- `percent` - Completion percentage (0-100)
- `completed` - Boolean watched status
- `last_watched` - Timestamp

## Parameters

- `video_id` - Target specific video
- `user_id` - Filter by WordPress user ID
- `per_page` - Results per page

## When to Use

- Tracking video completion rates for course or content analytics
- Gating video content behind email opt-in forms
- Adding interactive CTAs at specific video timestamps
- Syncing video watch progress with LMS lesson completion status

## Rate Limits

- Subject to WordPress server limits; no dedicated rate limit

## Relevant Skills

- marketing:content-creation
- marketing:performance-report
- data:analyze
