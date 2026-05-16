# MailPoet

MailPoet is a WordPress-native email marketing plugin that lets you create, send, and manage newsletters directly from your WordPress dashboard. Available as both an Action and Trigger in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/MailPoet.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Requires Bit Integrations Pro |
| As Action | ✓ | Free with Bit Integrations free plan |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Subscribe user to list
- Add subscriber to newsletter list
- Update subscriber fields
- Unsubscribe contact

## Trigger Events

- Subscriber confirmed (double opt-in confirmed)
- Subscriber unsubscribed

## Authentication

- **Type**: WordPress plugin-native
- **Where to get credentials**: No external API key needed — MailPoet must be installed and active on the same WordPress site
- **Required in Bit Integrations**: No credentials required; MailPoet is detected automatically

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| First Name | Subscriber first name | Optional |
| Last Name | Subscriber last name | Optional |
| List ID | The MailPoet list to add the subscriber to | Required |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Subscribe user to MailPoet newsletter list
**Key fields mapped:** Email, First Name, Last Name
**Use case:** Automatically grow your email list when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Add buyer to MailPoet customer list or segment
**Key fields mapped:** Email, First Name, Order amount (as custom field if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Add to MailPoet list with enrollment tag
**Key fields mapped:** Email, First Name, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Install and activate the MailPoet plugin on the same site.
3. Go to Bit Integrations > Create Integration.
4. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
5. Select MailPoet as the action.
6. MailPoet is detected automatically — no API key needed.
7. Select the list to add subscribers to.
8. Map the email field and any name fields.
9. Save and test with a real form submission.

## When to Use

- Growing an email list from WordPress form submissions without leaving WordPress
- Managing newsletters entirely within the WordPress dashboard
- Syncing WooCommerce buyers to a MailPoet subscriber list
- Adding new members or course students to onboarding email sequences
- Replacing manual CSV imports from WordPress forms to MailPoet

## Related Integrations

- newsletter.md
- mailster.md
- mail-mint.md
