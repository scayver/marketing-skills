# Sensei LMS

Sensei LMS is a WordPress LMS plugin by Automattic, the makers of WordPress.com and WooCommerce, designed for course creation with deep WooCommerce integration. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** LMS and Course Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Sensei-LMS.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Enroll student in course |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Enroll student in course — add a WordPress user to a Sensei LMS course

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Sensei LMS must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; both plugins must be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Enroll student after WooCommerce purchase
**Trigger:** WooCommerce — Order completed
**Action:** Sensei LMS — Enroll student in course
**Key fields mapped:** Customer email, product linked to course
**Use case:** Automatically grant Sensei LMS course access when a WooCommerce order is completed

### Recipe 2: Enroll student from lead magnet form
**Trigger:** Gravity Forms / WPForms — Form submitted
**Action:** Sensei LMS — Enroll student in course
**Key fields mapped:** Email field, free course selection
**Use case:** Use a lead capture form to automatically enroll subscribers in a free Sensei course

### Recipe 3: Enroll student on membership activation
**Trigger:** MemberPress — Membership purchased
**Action:** Sensei LMS — Enroll student in course
**Key fields mapped:** User email, course tied to membership level
**Use case:** Bundle Sensei LMS courses with MemberPress membership tiers

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select Sensei LMS as the action.
4. Choose Enroll Student in Course and select the target course.
5. Map the user email from your trigger source to Sensei LMS's student field.
6. Save and test with a real event (complete a test WooCommerce purchase or form submission).

## When to Use

- You sell Sensei LMS courses via WooCommerce and want enrollment fully automated
- You use Sensei for free courses and want to enroll students via form submissions
- You bundle Sensei courses with membership plans managed elsewhere
- You want to integrate Sensei LMS into a multi-step onboarding automation

## Related Integrations

- learndash.md
- lifterlms.md
- woocommerce.md
- memberpress.md
- learnpress.md
