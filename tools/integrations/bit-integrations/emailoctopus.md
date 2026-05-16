# EmailOctopus

EmailOctopus is an affordable email marketing platform built on Amazon SES, offering contact list management, campaigns, and automation for budget-conscious marketers. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Email_Octopus1.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create contact in list |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Create contact in list
- Update contact fields
- Unsubscribe contact

## Authentication

- **Type**: API Key
- **Where to get credentials**: EmailOctopus account > Profile > API Keys > Create API Key
- **Required in Bit Integrations**: API Key

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| First Name | Subscriber first name (via fields object) | Optional |
| Last Name | Subscriber last name (via fields object) | Optional |
| Tags | Tags to apply to the contact | Optional |
| List ID | The EmailOctopus list to add the contact to | Required |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Create contact in EmailOctopus list with welcome tag
**Key fields mapped:** Email, First Name, Last Name
**Use case:** Automatically grow your email list when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Create buyer contact in EmailOctopus customer list
**Key fields mapped:** Email, First Name, Order amount (as custom field if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Create contact in EmailOctopus list with enrollment tag
**Key fields mapped:** Email, First Name, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select EmailOctopus as the action.
5. Connect your EmailOctopus account using your API Key.
6. Select the list to add contacts to.
7. Map the email field and any name or tag fields.
8. Save and test with a real form submission.

## When to Use

- Growing an email list from WordPress form submissions on a tight budget
- Segmenting new subscribers by lead source using tags
- Syncing WooCommerce buyers to a customer email list
- Adding new members or course students to onboarding sequences
- Replacing manual CSV imports from WordPress to your email platform

## Related Integrations

- sendy.md
- mailerlite.md
- mailchimp.md
