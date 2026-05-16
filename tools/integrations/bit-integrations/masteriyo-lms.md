# Masteriyo LMS

Masteriyo LMS is a modern WordPress LMS plugin focused on performance and simplicity for building and selling online courses. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** LMS and Course Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Masteriyo-LMS.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Enroll student in course |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Enroll student in course — add a WordPress user to a Masteriyo LMS course

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Masteriyo LMS must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Enroll student after WooCommerce purchase
**Trigger:** WooCommerce — Order completed
**Action:** Masteriyo LMS — Enroll student in course
**Key fields mapped:** Customer email, product linked to course
**Use case:** Automatically enroll buyers in the Masteriyo course associated with a WooCommerce product

### Recipe 2: Enroll student from form submission
**Trigger:** Gravity Forms / Bit Form — Form submitted
**Action:** Masteriyo LMS — Enroll student in course
**Key fields mapped:** Email field, course selection
**Use case:** Use a registration form to manually enroll students without a storefront

### Recipe 3: Enroll student on membership activation
**Trigger:** MemberPress — Membership purchased
**Action:** Masteriyo LMS — Enroll student in course
**Key fields mapped:** User email, course tied to membership level
**Use case:** Bundle Masteriyo course access with a MemberPress subscription

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select Masteriyo LMS as the action.
4. Choose Enroll Student in Course and select the target course.
5. Map the user email from your trigger source to Masteriyo's student field.
6. Save and test with a real event (make a test purchase or submit a test form).

## When to Use

- You sell courses via WooCommerce but deliver them through Masteriyo LMS
- You want to automate enrollment from form submissions or membership activations
- You need to integrate Masteriyo into a broader automation workflow
- You want to enroll users programmatically based on external events

## Related Integrations

- learndash.md
- masterstudy-lms.md
- tutorlms.md
- woocommerce.md
- memberpress.md
