# Mail Mint

Mail Mint is a WordPress-native email marketing plugin offering contact management, automation, and list building directly within the WordPress dashboard. Available as both an Action and Trigger in the Bit Integrations WordPress plugin.

**Role:** Trigger/Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Mail-Mint.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | ✓ | Requires Bit Integrations Pro |
| As Action | ✓ | Free with Bit Integrations free plan |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Create contact
- Add contact to list
- Apply tag to contact
- Update contact fields

## Trigger Events

- Contact created
- Tag applied to contact
- Automation completed

## Authentication

- **Type**: WordPress plugin-native
- **Where to get credentials**: No external API key needed — Mail Mint must be installed and active on the same WordPress site
- **Required in Bit Integrations**: No credentials required; Mail Mint is detected automatically

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| First Name | Subscriber first name | Optional |
| Last Name | Subscriber last name | Optional |
| Phone | Subscriber phone number | Optional |
| Lists | List IDs to add the contact to | Optional |
| Tags | Tags to apply to the contact | Optional |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Create contact in Mail Mint and add to list with welcome tag
**Key fields mapped:** Email, First Name, Last Name
**Use case:** Automatically grow your email list when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Create buyer contact in Mail Mint and add to customer list with buyer tag
**Key fields mapped:** Email, First Name, Order amount (as custom field if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Create contact in Mail Mint, add to enrollment list, apply enrollment tag
**Key fields mapped:** Email, First Name, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Install and activate the Mail Mint plugin on the same site.
3. Go to Bit Integrations > Create Integration.
4. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
5. Select Mail Mint as the action.
6. Mail Mint is detected automatically — no API key needed.
7. Select the list and tags to apply.
8. Map the email field and any name, phone, or tag fields.
9. Save and test with a real form submission.

## When to Use

- Growing an email list from WordPress form submissions without leaving WordPress
- Managing contacts and automation entirely within the WordPress dashboard
- Syncing WooCommerce buyers to a Mail Mint contact list
- Adding new members or course students to onboarding email sequences
- Replacing manual CSV imports from WordPress forms to Mail Mint

## Related Integrations

- mailpoet.md
- newsletter.md
- mailster.md
