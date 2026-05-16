# Mailrelay

Mailrelay is a bulk email marketing platform with one of the most generous free plans on the market, offering high-volume sending and subscriber group management. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/MailRelay.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Add subscriber to group |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Add subscriber to group
- Update subscriber fields
- Unsubscribe contact

## Authentication

- **Type**: API Key
- **Where to get credentials**: Mailrelay account settings > API section
- **Required in Bit Integrations**: API Key

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| Name | Subscriber full name | Optional |
| Group ID | The Mailrelay group to add the subscriber to | Required |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Add subscriber to Mailrelay group with welcome tag
**Key fields mapped:** Email, Name
**Use case:** Automatically grow your email list when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Add buyer to Mailrelay customer group
**Key fields mapped:** Email, Name, Order amount (as custom field if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Add to Mailrelay group for enrollment-based nurture
**Key fields mapped:** Email, Name, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select Mailrelay as the action.
5. Connect your Mailrelay account using your API Key.
6. Select the group to add subscribers to.
7. Map the email field and the name field.
8. Save and test with a real form submission.

## When to Use

- Growing an email list from WordPress form submissions automatically
- Segmenting new subscribers by lead source using groups
- Syncing WooCommerce buyers to a customer email group
- Adding new members or course students to onboarding sequences
- Replacing manual CSV imports from WordPress to your email platform

## Related Integrations

- mailchimp.md
- mailerlite.md
- benchmark-email.md
