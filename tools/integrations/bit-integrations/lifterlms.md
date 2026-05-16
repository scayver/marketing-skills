# LifterLMS

LifterLMS is a flexible WordPress LMS plugin for building online courses, memberships, and coaching programs. Available as both Trigger and Action in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Action: Yes — Trigger: No
**Category:** LMS and Course Platforms
**Icon:** Action: `https://bit-integrations.com/wp-content/uploads/2026/02/Lifter-LMS-1.svg` — Trigger: `https://bit-integrations.com/wp-content/uploads/2026/02/Lifter-LMS.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on course, lesson, quiz, and membership events |
| As Action | ✓ | Enroll or unenroll users from courses and memberships |
| Free Tier | ✓ | Action is free; Trigger requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Trigger Events

- Course enrolled — fires when a user enrolls in a course
- Course completed — fires when a user completes a course
- Lesson completed — fires when a user completes a lesson
- Quiz passed — fires when a user passes a quiz
- Membership enrolled — fires when a user joins a membership
- Membership cancelled — fires when a user's membership is cancelled

## Action Events

- Enroll in course — add a WordPress user to a LifterLMS course
- Enroll in membership — add a user to a LifterLMS membership
- Unenroll — remove a user from a course or membership

## Authentication

- **Type**: WordPress plugin-native
- **Required**: LifterLMS must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Add CRM contact on course enrollment
**Trigger:** LifterLMS — Course enrolled
**Action:** Zoho CRM / HubSpot — Create or update contact
**Key fields mapped:** User email, first name, last name, course name
**Use case:** Automatically add new students to your CRM pipeline for follow-up

### Recipe 2: Grant course access after membership purchase
**Trigger:** WooCommerce — Order completed
**Action:** LifterLMS — Enroll in course
**Key fields mapped:** Customer email, product name mapped to course
**Use case:** Bundle course access with product purchases outside LifterLMS checkout

### Recipe 3: Tag members in email platform on membership cancellation
**Trigger:** LifterLMS — Membership cancelled
**Action:** Mailchimp — Remove tag or move to cancelled segment
**Key fields mapped:** User email, membership name, cancellation date
**Use case:** Trigger win-back email sequences when a membership lapses

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select LifterLMS as the trigger or action.
4. For triggers, choose the event (e.g., Membership Cancelled) and select the membership or leave global.
5. For actions, choose Enroll in Course or Enroll in Membership, then select the target.
6. Map the relevant fields (user email, course or membership ID, etc.) to the connected platform.
7. Save and test with a real event (enroll a test user or cancel a test membership).

## When to Use

- You want to push LifterLMS student data into a CRM or email platform automatically
- You need to enroll users in courses based on external purchases or form submissions
- You want to segment email subscribers based on membership status changes
- You need to trigger off-boarding workflows when memberships are cancelled

## Related Integrations

- learndash.md
- tutorlms.md
- memberpress.md
- restrict-content.md
- paid-memberships-pro.md
