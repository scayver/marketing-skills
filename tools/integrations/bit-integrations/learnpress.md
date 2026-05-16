# LearnPress

LearnPress is a free WordPress LMS plugin for creating and selling courses with lessons, quizzes, and basic course management. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** LMS and Course Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Learn-Press.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Enroll user in course |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Enroll user in course — add a WordPress user to a LearnPress course

## Authentication

- **Type**: WordPress plugin-native
- **Required**: LearnPress must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Enroll user after WooCommerce purchase
**Trigger:** WooCommerce — Order completed
**Action:** LearnPress — Enroll user in course
**Key fields mapped:** Customer email, product linked to course
**Use case:** Automatically enroll a buyer in the LearnPress course tied to a WooCommerce product

### Recipe 2: Enroll user after form submission
**Trigger:** Bit Form / Contact Form 7 — Form submitted
**Action:** LearnPress — Enroll user in course
**Key fields mapped:** Email field, course selection
**Use case:** Allow manual or gated enrollment via a form without requiring payment

### Recipe 3: Enroll user on membership activation
**Trigger:** Paid Memberships Pro / MemberPress — Membership activated
**Action:** LearnPress — Enroll user in course
**Key fields mapped:** User email, membership level mapped to course
**Use case:** Bundle LearnPress course access with a membership plan

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select LearnPress as the action.
4. Choose Enroll User in Course and select the target course.
5. Map the user email from your trigger source to LearnPress's user field.
6. Save and test with a real event (complete a test purchase or form submission).

## When to Use

- You use LearnPress for course delivery but manage enrollment through WooCommerce or membership plugins
- You want to automate enrollment from form submissions or external triggers
- You need to bundle LearnPress courses with membership plans
- You want to enroll users in courses as part of a broader onboarding flow

## Related Integrations

- learndash.md
- lifterlms.md
- tutorlms.md
- memberpress.md
- woocommerce.md
