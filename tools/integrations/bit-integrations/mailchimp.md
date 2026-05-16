# Mailchimp

Mailchimp is a widely used email marketing and audience management platform for small to mid-size businesses. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Mail-Chimp.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Add to audience, apply tags, update merge fields |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Add subscriber to audience
- Apply tag to contact
- Update merge fields
- Update subscriber status (subscribed, pending, unsubscribed)

## Authentication

- **Type**: API Key
- **Where to get credentials**: Mailchimp account > Account > Extras > API keys > Create a Key
- **Required in Bit Integrations**: API Key

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| FNAME | Subscriber first name (merge field) | Optional |
| LNAME | Subscriber last name (merge field) | Optional |
| PHONE | Subscriber phone number (merge field) | Optional |
| Tags | Comma-separated tags to apply | Optional |
| Merge Fields | Additional custom merge field values | Optional |
| Status | Subscription status (subscribed, pending) | Optional |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Add subscriber to Mailchimp audience with welcome tag
**Key fields mapped:** Email, FNAME, LNAME
**Use case:** Automatically grow your email list when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Add buyer to Mailchimp customer audience or segment
**Key fields mapped:** Email, FNAME, Order amount (as merge field if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Add to Mailchimp audience and apply enrollment tag
**Key fields mapped:** Email, FNAME, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select Mailchimp as the action.
5. Connect your Mailchimp account using your API Key.
6. Select the audience to add subscribers to.
7. Map the email field and any name or tag fields.
8. Save and test with a real form submission.

## When to Use

- Growing an email list from WordPress form submissions automatically
- Segmenting new subscribers by lead source using tags
- Syncing WooCommerce buyers to a customer email audience
- Adding new members or course students to onboarding sequences
- Replacing manual CSV imports from WordPress to your email platform

## Related Integrations

- activecampaign.md
- mailerlite.md
- getresponse.md
