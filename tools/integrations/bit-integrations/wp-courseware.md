# WP Courseware

WP Courseware is a drag-and-drop WordPress course builder plugin with drip content, quizzes, and gradebooks. Available as both Trigger and Action in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Action: Yes — Trigger: No
**Category:** LMS and Course Platforms
**Icon:** Action: `https://bit-integrations.com/wp-content/uploads/2026/02/WpCourseware.svg` — Trigger: `https://bit-integrations.com/wp-content/uploads/2026/02/WpCourseware-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on enrollment, unit completion, and course completion events |
| As Action | ✓ | Enroll or unenroll students |
| Free Tier | ✓ | Action is free; Trigger requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Trigger Events

- Course enrollment — fires when a student enrolls in a course
- Unit completion — fires when a student completes a unit (module)
- Course completion — fires when a student completes the full course

## Action Events

- Enroll student — add a WordPress user to a WP Courseware course
- Unenroll student — remove a student from a WP Courseware course

## Authentication

- **Type**: WordPress plugin-native
- **Required**: WP Courseware must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Tag student in email platform on enrollment
**Trigger:** WP Courseware — Course enrollment
**Action:** ConvertKit / Mailchimp — Add tag or add to list
**Key fields mapped:** Student email, course name, enrollment date
**Use case:** Automatically start a welcome or orientation email sequence for new enrollees

### Recipe 2: Notify team on course completion
**Trigger:** WP Courseware — Course completion
**Action:** Slack or email notification
**Key fields mapped:** Student name, course name, completion date
**Use case:** Alert your team or customer success department when students finish a course

### Recipe 3: Enroll student after membership purchase
**Trigger:** MemberPress / WooCommerce — Membership purchased or order completed
**Action:** WP Courseware — Enroll student
**Key fields mapped:** Customer email, course linked to product or membership
**Use case:** Automate course access grants from external purchase systems

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select WP Courseware as the trigger or action.
4. For triggers, choose the event (e.g., Course Completion) and select the course.
5. For actions, choose Enroll Student or Unenroll Student and select the course.
6. Map the relevant fields to the connected platform.
7. Save and test with a real event (enroll a test student or complete a test unit).

## When to Use

- You want to automatically add WP Courseware students to your email platform
- You need to enroll students from WooCommerce purchases or membership activations
- You want to send notifications when students hit completion milestones
- You need to remove access for students who cancel or churn

## Related Integrations

- learndash.md
- tutorlms.md
- memberpress.md
- woocommerce.md
