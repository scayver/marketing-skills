# Academy LMS

Academy LMS is a WordPress LMS plugin for building online academies with course management, quiz systems, and student progress tracking. Available as both Trigger and Action in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Action: Yes — Trigger: No
**Category:** LMS and Course Platforms
**Icon:** Action: `https://bit-integrations.com/wp-content/uploads/2026/02/Academy-LMS-1.svg` — Trigger: `https://bit-integrations.com/wp-content/uploads/2026/02/Academy-LMS.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on course enrollment and course completion events |
| As Action | ✓ | Enroll student in course |
| Free Tier | ✓ | Action is free; Trigger requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Trigger Events

- Course enrollment — fires when a student enrolls in a course
- Course completion — fires when a student completes a course

## Action Events

- Enroll student — add a WordPress user to an Academy LMS course

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Academy LMS must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Add student to email list on enrollment
**Trigger:** Academy LMS — Course enrollment
**Action:** Mailchimp / MailerLite — Add subscriber or add to group
**Key fields mapped:** Student email, course name, enrollment date
**Use case:** Automatically add enrolled students to a course-specific email segment

### Recipe 2: Notify team on course completion
**Trigger:** Academy LMS — Course completion
**Action:** Email notification or Slack webhook
**Key fields mapped:** Student name, course name, completion date
**Use case:** Alert instructors or support teams when students complete a course

### Recipe 3: Enroll student after payment
**Trigger:** WooCommerce — Order completed
**Action:** Academy LMS — Enroll student
**Key fields mapped:** Customer email, product linked to course
**Use case:** Automatically enroll students in Academy LMS courses after purchasing via WooCommerce

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select Academy LMS as the trigger or action.
4. For triggers, choose the event (e.g., Course Completion) and select the course.
5. For actions, choose Enroll Student and select the target course.
6. Map the relevant fields to the connected platform.
7. Save and test with a real event (enroll a test student or complete a test course).

## When to Use

- You want to sync Academy LMS enrollments with your email marketing platform
- You need to enroll students automatically from WooCommerce or form-based flows
- You want to trigger notifications when students complete courses
- You need to integrate Academy LMS data into a broader automation stack

## Related Integrations

- learndash.md
- tutorlms.md
- masterstudy-lms.md
- woocommerce.md
