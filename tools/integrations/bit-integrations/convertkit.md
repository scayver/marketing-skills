# Kit (ConvertKit)

Kit (formerly ConvertKit) is a creator-focused email marketing platform that uses tags and sequences instead of traditional lists to manage subscribers. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Kit1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Subscribe to form, apply tag, add to sequence |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Subscribe contact to form
- Apply tag to subscriber
- Add subscriber to sequence
- Update subscriber fields
- Unsubscribe contact

## Authentication

- **Type**: API Key
- **Where to get credentials**: Kit account > Settings > Advanced > API Key
- **Required in Bit Integrations**: API Key

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| First Name | Subscriber first name | Optional |
| Tags | Tags to apply to the subscriber | Optional |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Subscribe contact to Kit form and apply a welcome tag
**Key fields mapped:** Email, First Name
**Use case:** Automatically grow your subscriber base when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Apply a buyer tag to the subscriber in Kit and add to a post-purchase sequence
**Key fields mapped:** Email, First Name
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Subscribe to Kit form, apply enrollment tag, and add to onboarding sequence
**Key fields mapped:** Email, First Name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select Kit (ConvertKit) as the action.
5. Connect your Kit account using your API Key.
6. Select the form or tag to use for new subscribers.
7. Map the email field and first name field.
8. Save and test with a real form submission.

## When to Use

- Growing a subscriber base from WordPress form submissions automatically
- Segmenting new subscribers by lead source using tags
- Adding WooCommerce buyers to post-purchase email sequences
- Enrolling members or course students in onboarding sequences
- Managing creator audiences with a tag-based system instead of lists
- Replacing manual CSV imports from WordPress to your email platform

## Related Integrations

- mailerlite.md
- getresponse.md
- activecampaign.md
