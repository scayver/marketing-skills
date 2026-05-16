# Sarbacane

Sarbacane (Mailify) is a French email and SMS marketing platform used by businesses across Europe for campaign management and list automation. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Sarbacane.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Add contact to list |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Add contact to list
- Update contact fields
- Unsubscribe contact

## Authentication

- **Type**: API Key
- **Where to get credentials**: Sarbacane account settings — API key and Account ID
- **Required in Bit Integrations**: API Key and Account ID

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| Nom | Subscriber last name | Optional |
| Prenom | Subscriber first name | Optional |
| List ID | The Sarbacane list to add the contact to | Required |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Add subscriber to Sarbacane list with welcome tag
**Key fields mapped:** Email, Prenom, Nom
**Use case:** Automatically grow your email list when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Add buyer to Sarbacane customer list or segment
**Key fields mapped:** Email, Prenom, Order amount (as custom field if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Add to Sarbacane list for enrollment-based nurture
**Key fields mapped:** Email, Prenom, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select Sarbacane as the action.
5. Connect your Sarbacane account using your API Key and Account ID.
6. Select the list to add contacts to.
7. Map the email field and name fields (prenom, nom).
8. Save and test with a real form submission.

## When to Use

- Growing an email list from WordPress form submissions automatically
- Segmenting new subscribers by lead source using lists
- Syncing WooCommerce buyers to a customer email list for European audiences
- Adding new members or course students to onboarding sequences
- Replacing manual CSV imports from WordPress to your email platform

## Related Integrations

- mailchimp.md
- mailjet.md
- brevo.md
