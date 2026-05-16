# FluentSMTP

FluentSMTP is a WordPress SMTP plugin that replaces the default WordPress mail function with a configured transactional email sending service for reliable email delivery. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** WordPress Core and Utility
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/FluentSMTP.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; send email via FluentSMTP's configured sending service |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to email to, subject, and body |

## Action Events

- Send email via FluentSMTP configured SMTP connection

## Authentication

- **Type**: WordPress plugin-native
- **Required**: FluentSMTP must be installed and configured with a sending service (SendGrid, Mailgun, SES, Gmail SMTP, etc.). Bit Integrations routes outgoing email through FluentSMTP automatically.

## Common Workflow Recipes

### Recipe 1: Form Submission to Custom Transactional Email
**Trigger:** WordPress form submission
**Action:** Send a custom transactional email via FluentSMTP with form field data merged into the message
**Use case:** Send highly deliverable transactional confirmation or notification emails triggered by form submissions, routing through FluentSMTP's configured provider

### Recipe 2: WooCommerce Order to Custom Order Email
**Trigger:** WooCommerce order status change
**Action:** Send a customized order notification email via FluentSMTP to the customer or admin
**Use case:** Replace or supplement WooCommerce's default order emails with custom Bit Integrations-triggered emails routed through FluentSMTP

### Recipe 3: User Registration to Welcome Email
**Trigger:** WordPress user registration
**Action:** Send a personalized welcome email via FluentSMTP
**Use case:** Deliver custom welcome emails with improved deliverability via FluentSMTP on every new WordPress registration

## Setup Steps

1. Install Bit Integrations Pro and FluentSMTP on your WordPress site.
2. Configure FluentSMTP with your preferred sending service (SendGrid, Mailgun, SES, etc.).
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select FluentSMTP as the Action.
6. Configure email to, from, subject, and body fields.
7. Map form fields into the email subject and body.
8. Save and test.

## When to Use

- When Bit Integrations-triggered emails need to be routed through FluentSMTP for improved deliverability
- When replacing WordPress's default wp_mail with a configured transactional provider for automation emails
- When custom transactional emails should be sent with form field data merged into the message body

## Related Integrations

- fluentsmtp.md
- sendgrid.md
- mailchimp.md
- fluent-support.md
