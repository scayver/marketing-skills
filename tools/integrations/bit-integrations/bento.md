# Bento

Bento is a behavior-based email marketing and automation platform built for developers and SaaS businesses, offering event tracking, tagging, and transactional email capabilities. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Bento.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Subscribe, add tag, track event |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Subscribe contact
- Add tag to subscriber
- Track custom event
- Update subscriber fields

## Authentication

- **Type**: API Key
- **Where to get credentials**: Bento account > Settings > API (Publishable Key + Secret Key)
- **Required in Bit Integrations**: Publishable Key and Secret Key

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| First Name | Subscriber first name | Optional |
| Last Name | Subscriber last name | Optional |
| Tags | Tags to apply to the subscriber | Optional |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Subscribe contact in Bento and apply a welcome tag
**Key fields mapped:** Email, First Name, Last Name
**Use case:** Automatically grow your subscriber base when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Subscribe buyer in Bento with buyer tag and track purchase event
**Key fields mapped:** Email, First Name, Order amount (as custom field if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Subscribe to Bento, apply enrollment tag, and track enrollment event
**Key fields mapped:** Email, First Name, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select Bento as the action.
5. Connect your Bento account using your Publishable Key and Secret Key.
6. Configure the subscribe action and tags to apply.
7. Map the email field and any name or tag fields.
8. Save and test with a real form submission.

## When to Use

- Adding WordPress users to behavior-based SaaS email flows
- Segmenting new subscribers by lead source using tags
- Tracking WordPress and WooCommerce events in Bento for behavioral automation
- Adding new members or course students to onboarding sequences
- Replacing manual CSV imports from WordPress to your email platform

## Related Integrations

- encharge.md
- drip.md
- activecampaign.md
