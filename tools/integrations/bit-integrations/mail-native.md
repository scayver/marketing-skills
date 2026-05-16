# Mail (Native WordPress Mail)

Mail (Native WordPress Mail) uses WordPress's built-in wp_mail() function to send email notifications directly from your site without requiring an external email marketing platform. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/03/Mail-2.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Send native WordPress email via wp_mail() |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Send email notification
- Send dynamic email with mapped field values in subject or body

## Authentication

- **Type**: WordPress SMTP settings
- **Where to get credentials**: No external platform credentials needed — uses your WordPress site's configured SMTP settings (wp_mail configuration)
- **Required in Bit Integrations**: No credentials required; uses native WordPress mail system

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| To (Email) | Recipient email address | Required |
| Subject | Email subject line | Required |
| Message Body | Email body content (can include mapped field values) | Required |
| From Name | Sender display name | Optional |
| From Email | Sender email address | Optional |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Send a native WordPress notification email to admin or the submitter
**Key fields mapped:** To (Email), Subject, Message Body with form field values
**Use case:** Receive instant email notifications when visitors submit a lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Send a native WordPress confirmation or follow-up email to the buyer
**Key fields mapped:** To (Email), Subject, Message Body with order details
**Use case:** Send a custom thank-you or follow-up email immediately after a purchase

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Send a native WordPress welcome email to the new member or student
**Key fields mapped:** To (Email), Subject, Message Body with membership or course details
**Use case:** Deliver an instant welcome email when someone enrolls in a course or membership

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Configure your WordPress SMTP settings for reliable delivery (e.g., using WP Mail SMTP).
3. Go to Bit Integrations > Create Integration.
4. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
5. Select Mail (Native WordPress Mail) as the action.
6. No account connection required.
7. Configure the To address, Subject, and Message Body fields.
8. Map dynamic field values from your trigger into the subject or body.
9. Save and test with a real form submission.

## When to Use

- Sending instant notification emails when WordPress forms are submitted
- Delivering custom order confirmation or follow-up emails after WooCommerce purchases
- Sending welcome emails on membership or course enrollment without a third-party platform
- Triggering internal admin notifications based on WordPress events
- Building simple email notification workflows without subscribing to an external email service

## Related Integrations

- mailpoet.md
- newsletter.md
- brevo.md
