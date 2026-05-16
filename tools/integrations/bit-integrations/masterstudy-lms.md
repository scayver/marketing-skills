# MasterStudy LMS

MasterStudy LMS is a WordPress LMS plugin designed for building online schools and academies with quizzes, certificates, and course bundles. Available as both Trigger and Action in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Action: Yes — Trigger: No
**Category:** LMS and Course Platforms
**Icon:** Action: `https://bit-integrations.com/wp-content/uploads/2026/02/MasterStudy-LMS.svg` — Trigger: `https://bit-integrations.com/wp-content/uploads/2026/02/MasterStudy-LMS-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Fires on purchase, completion, lesson, and quiz events |
| As Action | ✓ | Enroll users in courses |
| Free Tier | ✓ | Action is free; Trigger requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Trigger Events

- Course purchased — fires when a user purchases a course
- Course completed — fires when a user completes a course
- Lesson completed — fires when a user completes a lesson
- Quiz passed — fires when a user passes a quiz

## Action Events

- Enroll in course — add a WordPress user to a MasterStudy LMS course

## Authentication

- **Type**: WordPress plugin-native
- **Required**: MasterStudy LMS must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Add buyer to CRM on course purchase
**Trigger:** MasterStudy LMS — Course purchased
**Action:** HubSpot / Zoho CRM — Create or update contact
**Key fields mapped:** User email, course name, purchase date
**Use case:** Feed course buyers directly into your CRM for sales follow-up or upsell sequences

### Recipe 2: Send completion email via external platform
**Trigger:** MasterStudy LMS — Course completed
**Action:** ActiveCampaign — Add tag or trigger automation
**Key fields mapped:** User email, course name, completion date
**Use case:** Trigger a post-completion email series or upsell campaign

### Recipe 3: Enroll user in course after form submission
**Trigger:** Bit Form / Gravity Forms — Form submitted
**Action:** MasterStudy LMS — Enroll in course
**Key fields mapped:** Email field to user email, course selection
**Use case:** Grant course access as part of a lead magnet or manual enrollment workflow

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select MasterStudy LMS as the trigger or action.
4. For triggers, choose the event (e.g., Course Completed) and select the course.
5. For actions, choose Enroll in Course and select the target course.
6. Map the relevant fields to the connected platform.
7. Save and test with a real event (make a test purchase or complete a test lesson).

## When to Use

- You want to capture course buyers in your CRM automatically
- You need to trigger email automations based on course completions or quiz results
- You want to enroll users in courses from external form submissions or purchases
- You need to segment your audience by course progress

## Related Integrations

- learndash.md
- tutorlms.md
- lifterlms.md
- woocommerce.md
