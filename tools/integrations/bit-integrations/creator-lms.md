# Creator LMS

Creator LMS is a WordPress LMS plugin built for content creators and course sellers who need a streamlined course delivery experience. Available as both Trigger and Action in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** No — both Trigger and Action require Pro
**Category:** LMS and Course Platforms
**Icon:** Action: `https://bit-integrations.com/wp-content/uploads/2026/04/CreatorLMS.svg` — Trigger: `https://bit-integrations.com/wp-content/uploads/2026/04/CreatorLMS-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on course and student activity events |
| As Action | ✓ | Manage course enrollment and student data |
| Free Tier | — | Requires Pro for both Trigger and Action |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Trigger Events

- Student course activity events (refer to Bit Integrations documentation for the current full list of supported trigger events)

## Action Events

- Course enrollment and student management actions (refer to Bit Integrations documentation for the current full list of supported action events)

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Creator LMS must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Sync new enrollments to email platform
**Trigger:** Creator LMS — Student enrolled
**Action:** ConvertKit / ActiveCampaign — Add subscriber or tag
**Key fields mapped:** Student email, course name, enrollment date
**Use case:** Automatically add new Creator LMS students to your email platform for course-specific sequences

### Recipe 2: Enroll student after external purchase
**Trigger:** WooCommerce / SureCart — Order or purchase completed
**Action:** Creator LMS — Enroll student in course
**Key fields mapped:** Customer email, product linked to course
**Use case:** Grant Creator LMS access when students purchase through an external checkout

### Recipe 3: Notify on course completion
**Trigger:** Creator LMS — Course completed
**Action:** HubSpot — Update contact or add note
**Key fields mapped:** Student email, course name, completion date
**Use case:** Trigger CRM updates or success team notifications when students complete training

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select Creator LMS as the trigger or action.
4. For triggers, choose the relevant student or course event.
5. For actions, choose the enrollment or student management action and select the target course.
6. Map the relevant fields to the connected platform.
7. Save and test with a real event (enroll a test student or complete a test lesson).

## When to Use

- You sell courses via Creator LMS and want to sync student data with your email or CRM platform
- You need to enroll students from external checkout flows
- You want to trigger automations based on student progress milestones
- You need to integrate Creator LMS into a multi-step onboarding sequence

## Related Integrations

- learndash.md
- tutorlms.md
- masterstudy-lms.md
- woocommerce.md
- surecart.md
