# WPLMS

WPLMS is a WordPress LMS plugin built on BuddyPress, designed for enterprise training, education platforms, and social learning environments. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** LMS and Course Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/WP-LMS-2.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Enroll user in course |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Enroll user in course — add a WordPress user to a WPLMS course

## Authentication

- **Type**: WordPress plugin-native
- **Required**: WPLMS must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; BuddyPress and WPLMS must both be active on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Enroll user after WooCommerce purchase
**Trigger:** WooCommerce — Order completed
**Action:** WPLMS — Enroll user in course
**Key fields mapped:** Customer email, product linked to course
**Use case:** Automatically enroll a purchaser in the WPLMS course associated with a WooCommerce product

### Recipe 2: Enroll user from form submission
**Trigger:** Gravity Forms / Bit Form — Form submitted
**Action:** WPLMS — Enroll user in course
**Key fields mapped:** Email field, course selection
**Use case:** Use a form as a manual enrollment gateway for training programs

### Recipe 3: Enroll user on CRM tag applied
**Trigger:** HubSpot / ActiveCampaign — Tag or list updated
**Action:** WPLMS — Enroll user in course
**Key fields mapped:** Contact email, course to enroll in
**Use case:** Trigger WPLMS enrollment from CRM-based segmentation or sales workflows

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select WPLMS as the action.
4. Choose Enroll User in Course and select the target course.
5. Map the user email from your trigger source to WPLMS's user field.
6. Save and test with a real event (complete a test purchase or submit a test form).

## When to Use

- You run a BuddyPress-based social learning platform and need external enrollment automation
- You sell WPLMS courses via WooCommerce and want to automate access
- You need to enroll users based on CRM actions or external triggers
- You want to integrate WPLMS into a broader onboarding or training workflow

## Related Integrations

- learndash.md
- lifterlms.md
- woocommerce.md
- memberpress.md
