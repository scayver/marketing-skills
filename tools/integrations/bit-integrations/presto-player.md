# Presto Player

Presto Player is a WordPress video player plugin optimized for course creators and content marketers, with chapter markers, email capture, CTAs, and advanced progress tracking. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** LMS and Course Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Presto-Player.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Mark video as watched, update playback progress |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Mark video as watched — programmatically mark a Presto Player video as watched for a user
- Update playback progress — update a user's playback position or progress on a video

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Presto Player must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Mark video as watched on LMS lesson completion
**Trigger:** LearnDash / TutorLMS — Lesson completed
**Action:** Presto Player — Mark video as watched
**Key fields mapped:** User ID, video ID linked to lesson
**Use case:** Sync LMS lesson completion status with Presto Player's watched state for accurate progress tracking

### Recipe 2: Update video progress after form submission
**Trigger:** Bit Form — Form submitted (e.g., quiz or check-in)
**Action:** Presto Player — Update playback progress
**Key fields mapped:** User email, video progress percentage
**Use case:** Reset or advance a user's video progress based on an external trigger or admin action

### Recipe 3: Mark video as watched after membership upgrade
**Trigger:** MemberPress — Membership level changed
**Action:** Presto Player — Mark video as watched
**Key fields mapped:** User ID, videos associated with upgraded access
**Use case:** Unlock and pre-mark gated content as available for upgraded members

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select Presto Player as the action.
4. Choose the action event: Mark Video as Watched or Update Playback Progress.
5. Select or map the target video and user identifiers.
6. Map the user ID or email from your trigger source to Presto Player's user field.
7. Save and test with a real event (complete a test lesson or trigger a test form submission).

## When to Use

- You use Presto Player alongside an LMS and want video progress synced with lesson completions
- You need to programmatically mark content as watched for users who completed equivalent tasks elsewhere
- You want to reset or advance playback progress as part of a content unlocking workflow
- You need to keep Presto Player progress records in sync with external user actions

## Related Integrations

- learndash.md
- tutorlms.md
- lifterlms.md
- memberpress.md
