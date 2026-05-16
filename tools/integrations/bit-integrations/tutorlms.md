# TutorLMS

TutorLMS is a feature-rich WordPress LMS plugin with a drag-and-drop course builder, advanced quizzing, and certificate generation. Available as both Trigger and Action in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Action: Yes — Trigger: No
**Category:** LMS and Course Platforms
**Icon:** Action: `https://bit-integrations.com/wp-content/uploads/2026/02/TutorLMS-1.svg` — Trigger: `https://bit-integrations.com/wp-content/uploads/2026/02/TutorLMS.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on enrollment, lesson, quiz, and certificate events |
| As Action | ✓ | Enroll or unenroll students from courses |
| Free Tier | ✓ | Action is free; Trigger requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Trigger Events

- Course enrolled — fires when a student enrolls in a course
- Course completed — fires when a student completes a course
- Lesson completed — fires when a student completes a lesson
- Quiz attempted — fires when a student submits a quiz attempt
- Quiz passed — fires when a student passes a quiz
- Certificate issued — fires when a student earns a certificate

## Action Events

- Enroll student in course — add a WordPress user to a TutorLMS course
- Unenroll — remove a student from a TutorLMS course

## Authentication

- **Type**: WordPress plugin-native
- **Required**: TutorLMS must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Sync new enrollments to email marketing platform
**Trigger:** TutorLMS — Course enrolled
**Action:** MailerLite / ConvertKit — Add subscriber or add tag
**Key fields mapped:** Student email, course name, enrollment date
**Use case:** Automatically start a drip email sequence when a student enrolls

### Recipe 2: Enroll student after WooCommerce purchase
**Trigger:** WooCommerce — Order completed
**Action:** TutorLMS — Enroll student in course
**Key fields mapped:** Customer email, product linked to course
**Use case:** Automatically grant course access when a standalone product is purchased

### Recipe 3: Notify team in Slack when certificate issued
**Trigger:** TutorLMS — Certificate issued
**Action:** Slack (via webhook) — Post message
**Key fields mapped:** Student name, course name, date
**Use case:** Celebrate student achievements with your team in real time

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select TutorLMS as the trigger or action.
4. For triggers, choose the event (e.g., Course Completed) and select the target course.
5. For actions, choose Enroll Student in Course and select the course.
6. Map the relevant fields (student email, course ID, etc.) to the connected platform.
7. Save and test with a real event (enroll a test student or complete a test lesson).

## When to Use

- You want to automatically tag or segment students in your email platform based on course activity
- You need to enroll students based on external purchases or form completions
- You want to notify your team when students hit key milestones
- You need to sync TutorLMS student records into a CRM

## Related Integrations

- learndash.md
- lifterlms.md
- masterstudy-lms.md
- woocommerce.md
