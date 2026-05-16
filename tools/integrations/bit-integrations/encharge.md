# Encharge

Encharge is a marketing automation platform built for SaaS businesses, focusing on behavior-based email flows and user lifecycle management. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Enchange1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create or update user/subscriber, add tag |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Create or update subscriber
- Add tag to subscriber
- Update subscriber profile fields

## Authentication

- **Type**: API Key
- **Where to get credentials**: Encharge account > Settings > API
- **Required in Bit Integrations**: API Key

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| First Name | Subscriber first name | Optional |
| Last Name | Subscriber last name | Optional |
| Phone | Subscriber phone number | Optional |
| Tags | Tags to apply to the subscriber | Optional |
| User ID | External user ID for cross-system matching | Optional |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Create subscriber in Encharge and apply a welcome tag
**Key fields mapped:** Email, First Name, Last Name
**Use case:** Automatically grow your subscriber base when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Create or update subscriber in Encharge with buyer tag
**Key fields mapped:** Email, First Name, Order amount (as custom field if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Create subscriber in Encharge with enrollment tag to trigger onboarding flow
**Key fields mapped:** Email, First Name, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select Encharge as the action.
5. Connect your Encharge account using your API Key.
6. Configure the subscriber action and tags to apply.
7. Map the email field and any name or tag fields.
8. Save and test with a real form submission.

## When to Use

- Adding WordPress users to SaaS onboarding email flows
- Segmenting new subscribers by lead source using tags
- Triggering behavior-based email sequences from WordPress events
- Syncing WooCommerce buyers to customer lifecycle automation
- Replacing manual CSV imports from WordPress to your email platform

## Related Integrations

- activecampaign.md
- drip.md
- bento.md
