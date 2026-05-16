# MailerPress

MailerPress is a WordPress-native email marketing plugin offering subscriber management, campaign creation, and automation workflows directly within WordPress. Available as both an Action and Trigger in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** No
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Mailer-Press.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Requires Bit Integrations Pro |
| As Action | ✓ | Requires Bit Integrations Pro |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Add subscriber to list
- Update subscriber fields
- Unsubscribe contact

## Trigger Events

- Subscriber added

## Authentication

- **Type**: WordPress plugin-native
- **Where to get credentials**: No external API key needed — MailerPress must be installed and active on the same WordPress site
- **Required in Bit Integrations**: No credentials required; MailerPress is detected automatically

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| Name | Subscriber full name | Optional |
| List ID | The MailerPress list to add the subscriber to | Required |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Add subscriber to MailerPress list
**Key fields mapped:** Email, Name
**Use case:** Automatically grow your email list when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Add buyer to MailerPress customer list
**Key fields mapped:** Email, Name, Order amount (as custom field if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Add to MailerPress list for enrollment-based nurture
**Key fields mapped:** Email, Name, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations Pro on your WordPress site.
2. Install and activate the MailerPress plugin on the same site.
3. Go to Bit Integrations > Create Integration.
4. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
5. Select MailerPress as the action.
6. MailerPress is detected automatically — no API key needed.
7. Select the list to add subscribers to.
8. Map the email field and the name field.
9. Save and test with a real form submission.

## When to Use

- Growing a subscriber base from WordPress form submissions without leaving WordPress
- Managing newsletters and automation entirely within the WordPress dashboard
- Syncing WooCommerce buyers to a MailerPress subscriber list
- Adding new members or course students to onboarding email sequences
- Replacing manual CSV imports from WordPress forms to MailerPress

## Related Integrations

- mailpoet.md
- newsletter.md
- mailster.md
