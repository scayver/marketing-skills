# Omnisend

Omnisend is an eCommerce-focused email and SMS marketing platform with advanced segmentation, automation workflows, and omnichannel campaign capabilities. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Email Marketing
**Icon:** `https://bitapps.pro/wp-content/uploads/2023/07/omnsend.png`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create contact, add to list, apply tags |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map subscriber fields and apply tags or lists |

## Action Events

- Create contact
- Add contact to list
- Apply tags to contact
- Update contact properties

## Authentication

- **Type**: API Key
- **Where to get credentials**: Omnisend account > Store Settings > Integrations & API > API Keys > Generate API Key
- **Required in Bit Integrations**: API Key

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| Email | Subscriber email address | Required |
| First Name | Subscriber first name | Optional |
| Last Name | Subscriber last name | Optional |
| Phone | Subscriber phone number (E.164 format) | Optional |
| Tags | Tags to apply to the contact | Optional |
| Lists | List IDs to add the contact to | Optional |

## Common Workflow Recipes

### Recipe 1: Lead Capture Form to Email List
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form, CF7, Elementor Forms)
**Action:** Create contact in Omnisend and add to list with welcome tag
**Key fields mapped:** Email, First Name, Last Name
**Use case:** Automatically grow your email list when visitors fill out any lead capture form

### Recipe 2: WooCommerce Purchase to Customer Segment
**Trigger:** WooCommerce order completed
**Action:** Create or update contact in Omnisend with buyer tag for post-purchase flows
**Key fields mapped:** Email, First Name, Order amount (as custom field if available)
**Use case:** Segment buyers separately from leads for targeted post-purchase sequences

### Recipe 3: Membership or Course Enrollment to Nurture Sequence
**Trigger:** MemberPress or LearnDash enrollment
**Action:** Create contact in Omnisend, add to enrollment list, apply enrollment tag
**Key fields mapped:** Email, First Name, membership level or course name
**Use case:** Trigger onboarding and course-related emails automatically on enrollment

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger (form plugin, WooCommerce, membership plugin, etc.).
4. Select Omnisend as the action.
5. Connect your Omnisend account using your API Key.
6. Select the list and tags to apply.
7. Map the email field and any name, phone, or tag fields.
8. Save and test with a real form submission.

## When to Use

- Growing an email list from WordPress form submissions for eCommerce stores
- Segmenting new subscribers by lead source using tags
- Syncing WooCommerce buyers to an Omnisend customer list for post-purchase flows
- Adding new members or course students to onboarding sequences
- Running omnichannel campaigns across email and SMS from one platform
- Replacing manual CSV imports from WordPress to your email platform

## Related Integrations

- klaviyo.md
- mailchimp.md
- activecampaign.md
