# Drip

Drip is an eCommerce-focused email marketing and automation platform known for deep behavioral segmentation, event tracking, and revenue attribution. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Drip.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create or update subscriber, apply tag, record event |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Create or update subscriber
- Apply tag to subscriber
- Record custom event
- Unsubscribe contact

## Authentication

- **Type**: API Key
- **Where to get credentials**: Drip account > User Settings > User Info > API Token
- **Required in Bit Integrations**: API Token and Account ID

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| First Name | Subscriber first name | Optional |
| Last Name | Subscriber last name | Optional |
| Phone | Subscriber phone number | Optional |
| Tags | Tags to apply to the subscriber | Optional |
| Account ID | Your Drip account ID | Required |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Create subscriber in Drip and apply a welcome tag
**Key fields mapped:** Email, First Name, Last Name
**Use case:** Automatically grow your subscriber base when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Create or update subscriber in Drip with buyer tag and record purchase event
**Key fields mapped:** Email, First Name, Order amount (as custom field if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Create subscriber in Drip, apply enrollment tag, and record enrollment event
**Key fields mapped:** Email, First Name, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select Drip as the action.
5. Connect your Drip account using your API Token and Account ID.
6. Configure the subscriber action and tags to apply.
7. Map the email field and any name or tag fields.
8. Save and test with a real form submission.

## When to Use

- Growing a subscriber base from WordPress form submissions for eCommerce stores
- Segmenting new subscribers by lead source using tags
- Recording WordPress and WooCommerce events in Drip for behavioral automation
- Adding new members or course students to onboarding sequences
- Replacing manual CSV imports from WordPress to your email platform

## Related Integrations

- activecampaign.md
- klaviyo.md
- omnisend.md
