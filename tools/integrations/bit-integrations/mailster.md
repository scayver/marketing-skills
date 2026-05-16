# Mailster

Mailster is a premium WordPress newsletter plugin offering advanced subscriber management, campaign creation, and automation directly within WordPress. Available as both an Action and Trigger in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Mailster-1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Requires Bit Integrations Pro |
| As Action | ✓ | Free with Bit Integrations free plan |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Subscribe contact to list
- Update subscriber fields
- Unsubscribe contact

## Trigger Events

- Subscriber added
- Subscriber unsubscribed

## Authentication

- **Type**: WordPress plugin-native
- **Where to get credentials**: No external API key needed — Mailster must be installed and active on the same WordPress site
- **Required in Bit Integrations**: No credentials required; Mailster is detected automatically

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| First Name | Subscriber first name | Optional |
| Last Name | Subscriber last name | Optional |
| List ID | The Mailster list to add the subscriber to | Required |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Subscribe user to Mailster newsletter list
**Key fields mapped:** Email, First Name, Last Name
**Use case:** Automatically grow your email list when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Subscribe buyer to Mailster customer list
**Key fields mapped:** Email, First Name, Order amount (as custom field if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Subscribe to Mailster list for enrollment-based nurture
**Key fields mapped:** Email, First Name, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Install and activate the Mailster plugin on the same site.
3. Go to Bit Integrations > Create Integration.
4. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
5. Select Mailster as the action.
6. Mailster is detected automatically — no API key needed.
7. Select the list to subscribe users to.
8. Map the email field and any name fields.
9. Save and test with a real form submission.

## When to Use

- Growing a newsletter list from WordPress form submissions without leaving WordPress
- Managing advanced newsletter campaigns entirely within the WordPress dashboard
- Syncing WooCommerce buyers to a Mailster subscriber list
- Adding new members or course students to onboarding email sequences
- Replacing manual CSV imports from WordPress forms to Mailster

## Related Integrations

- mailpoet.md
- newsletter.md
- mail-mint.md
