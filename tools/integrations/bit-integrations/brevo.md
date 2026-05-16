# Brevo

Brevo (formerly Sendinblue) is a multi-channel marketing platform offering email, SMS, transactional messaging, and CRM tools. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Brevo-Sendinblue.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Add contact to list, update attributes, add to transactional template |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Add contact to list
- Update contact attributes
- Add contact to transactional email template
- Unsubscribe contact

## Authentication

- **Type**: API Key
- **Where to get credentials**: Brevo account > SMTP & API > API Keys > Generate a new API key
- **Required in Bit Integrations**: API Key

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| FIRSTNAME | Subscriber first name (contact attribute) | Optional |
| LASTNAME | Subscriber last name (contact attribute) | Optional |
| PHONE | Subscriber phone number | Optional |
| List IDs | Numeric list IDs to add the contact to | Required |
| Attributes | Custom contact attribute key-value pairs | Optional |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Add subscriber to Brevo list with welcome tag
**Key fields mapped:** Email, FIRSTNAME, LASTNAME
**Use case:** Automatically grow your email list when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Add buyer to Brevo customer list or segment
**Key fields mapped:** Email, FIRSTNAME, Order amount (as custom attribute if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Add to Brevo list and update enrollment-related attributes
**Key fields mapped:** Email, FIRSTNAME, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select Brevo as the action.
5. Connect your Brevo account using your API Key.
6. Select the list to add contacts to.
7. Map the email field and any attribute or custom fields.
8. Save and test with a real form submission.

## When to Use

- Growing an email list from WordPress form submissions automatically
- Segmenting new subscribers by lead source using lists
- Syncing WooCommerce buyers to a customer email list
- Adding new members or course students to onboarding sequences
- Sending transactional emails triggered by WordPress events
- Replacing manual CSV imports from WordPress to your email platform

## Related Integrations

- mailchimp.md
- sendgrid.md
- activecampaign.md
