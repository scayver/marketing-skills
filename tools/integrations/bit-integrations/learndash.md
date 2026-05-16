# LearnDash

LearnDash is a leading WordPress LMS plugin for creating and selling online courses with advanced quizzing, drip content, and certificates. Available as both Trigger and Action in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Action: Yes — Trigger: No
**Category:** LMS and Course Platforms
**Icon:** Action: `https://bit-integrations.com/wp-content/uploads/2026/02/LearnDash-LMS.svg` — Trigger: `https://bitapps.pro/wp-content/uploads/2023/07/learndash-1.png`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on course, lesson, topic, quiz, group, and certificate events |
| As Action | ✓ | Enroll or unenroll users from courses and groups |
| Free Tier | ✓ | Action is free; Trigger requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Trigger Events

- Course enrolled — fires when a user is enrolled in a course
- Course completed — fires when a user completes a course
- Lesson completed — fires when a user completes a lesson
- Topic completed — fires when a user completes a topic
- Quiz passed — fires when a user passes a quiz
- Quiz failed — fires when a user fails a quiz
- Group enrolled — fires when a user is added to a LearnDash group
- Certificate earned — fires when a user earns a certificate

## Action Events

- Enroll in course — add a WordPress user to a LearnDash course
- Unenroll from course — remove a user from a LearnDash course
- Add to group — add a user to a LearnDash group
- Remove from group — remove a user from a LearnDash group

## Authentication

- **Type**: WordPress plugin-native
- **Required**: LearnDash must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Tag subscribers in email platform on course enrollment
**Trigger:** LearnDash — Course enrolled
**Action:** Mailchimp / ActiveCampaign — Add tag or update contact
**Key fields mapped:** User email, course name, enrollment date
**Use case:** Segment your email list automatically when someone joins a course

### Recipe 2: Grant membership access after quiz passed
**Trigger:** LearnDash — Quiz passed
**Action:** MemberPress — Add membership level
**Key fields mapped:** User email, quiz name, score
**Use case:** Unlock premium membership tiers for students who demonstrate competency

### Recipe 3: Send certificate notification via CRM
**Trigger:** LearnDash — Certificate earned
**Action:** HubSpot — Create or update contact, add note
**Key fields mapped:** User email, course name, certificate date
**Use case:** Notify sales or success teams when a lead or customer completes training

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select LearnDash as the trigger or action.
4. For triggers, choose the event (e.g., Course Completed) and select the specific course or leave it global.
5. For actions, choose Enroll in Course or another action, then select the target course or group.
6. Map the relevant fields (user email, course ID, etc.) to the connected platform.
7. Save and test with a real event (enroll a test user, complete a test lesson, etc.).

## When to Use

- You want to automatically tag or segment email subscribers based on course progress
- You need to grant or revoke membership access based on course completion
- You want to sync LearnDash student data to a CRM like HubSpot or Salesforce
- You need to trigger onboarding sequences when a user enrolls in a specific course

## Related Integrations

- lifterlms.md
- tutorlms.md
- masterstudy-lms.md
- memberpress.md
- memberpress-courses.md
