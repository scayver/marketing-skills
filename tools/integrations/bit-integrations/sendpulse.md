# SendPulse

SendPulse is a multi-channel marketing platform combining email, SMS, web push notifications, and chatbot automation in a single dashboard. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/SendPulse.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Add subscriber to mailing list, update subscriber |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Add subscriber to mailing list
- Update subscriber information
- Apply variables to subscriber profile
- Unsubscribe contact

## Authentication

- **Type**: API Key
- **Where to get credentials**: SendPulse account > Settings > API (Client ID + Client Secret)
- **Required in Bit Integrations**: Client ID and Client Secret

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| Name | Subscriber full name | Optional |
| Phone | Subscriber phone number | Optional |
| Variables | Custom variable key-value pairs | Optional |
| List ID | The SendPulse mailing list to add the subscriber to | Required |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Add subscriber to SendPulse mailing list
**Key fields mapped:** Email, Name
**Use case:** Automatically grow your email list when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Add buyer to SendPulse customer mailing list
**Key fields mapped:** Email, Name, Order amount (as custom variable if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Add to SendPulse mailing list with enrollment variables
**Key fields mapped:** Email, Name, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select SendPulse as the action.
5. Connect your SendPulse account using your Client ID and Client Secret.
6. Select the mailing list to add subscribers to.
7. Map the email field and any name, phone, or variable fields.
8. Save and test with a real form submission.

## When to Use

- Growing an email list from WordPress form submissions automatically
- Segmenting new subscribers by lead source using mailing lists
- Syncing WooCommerce buyers to a customer email list
- Adding new members or course students to onboarding sequences
- Running multi-channel campaigns (email + SMS + push) from one platform
- Replacing manual CSV imports from WordPress to your email platform

## Related Integrations

- mailchimp.md
- getresponse.md
- brevo.md
