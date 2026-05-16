# MemberPress Courses

MemberPress Courses is the built-in LMS module for MemberPress that lets membership site owners create and deliver online courses without a separate LMS plugin. Available as Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** LMS and Course Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Member-Press-Courses.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Enroll user in course |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user and event data to connected platforms |

## Action Events

- Enroll user in course — add a WordPress user to a MemberPress Course

## Authentication

- **Type**: WordPress plugin-native
- **Required**: MemberPress with the Courses add-on must be installed and active; Bit Integrations reads it directly via WordPress hooks
- **Note**: No API keys required; MemberPress and Bit Integrations must both be on the same WordPress site

## Common Workflow Recipes

### Recipe 1: Enroll user in course after membership purchase
**Trigger:** MemberPress — Membership purchased
**Action:** MemberPress Courses — Enroll user in course
**Key fields mapped:** User email, membership level mapped to course
**Use case:** Automatically grant access to specific courses when a member purchases a specific membership level

### Recipe 2: Enroll user after WooCommerce purchase
**Trigger:** WooCommerce — Order completed
**Action:** MemberPress Courses — Enroll user in course
**Key fields mapped:** Customer email, product linked to course
**Use case:** Grant course access when a WooCommerce product is purchased outside MemberPress checkout

### Recipe 3: Enroll user from form submission
**Trigger:** Gravity Forms / Bit Form — Form submitted
**Action:** MemberPress Courses — Enroll user in course
**Key fields mapped:** Email field, course selection
**Use case:** Enroll users in a free MemberPress Course via a lead capture form

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Ensure MemberPress and the MemberPress Courses add-on are both installed and active.
3. Go to Bit Integrations > Create Integration.
4. Select MemberPress Courses as the action.
5. Choose Enroll User in Course and select the target course.
6. Map the user email from your trigger source to MemberPress Courses' user field.
7. Save and test with a real event (complete a test membership purchase or form submission).

## When to Use

- You use MemberPress for memberships and the Courses add-on for content delivery and want cross-level enrollment automation
- You sell courses through WooCommerce but deliver them via MemberPress Courses
- You want to enroll users in courses via form submissions or external triggers
- You need to automate course bundling across multiple membership tiers

## Related Integrations

- memberpress.md
- learndash.md
- lifterlms.md
- woocommerce.md
- restrict-content.md
