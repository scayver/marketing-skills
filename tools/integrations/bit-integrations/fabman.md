# Fabman

Fabman is a cloud-based management platform for makerspaces, fab labs, coworking spaces, and shared workshops — handling member management, equipment access control, billing, and usage tracking. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No (requires Bit Integrations Pro)
**Category:** Project Management and Productivity
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Fabman.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | Not available as a trigger |
| As Action | ✓ | Creates a new member in Fabman (requires Pro) |
| Free Tier | — | Requires Bit Integrations Pro |
| Field Mapping | ✓ | Map WordPress form fields to Fabman member fields |

## Action Events

- Create member (add a new member to your Fabman space)

## Authentication

- **Type**: API Key
- **Where to get credentials**: Fabman account > Settings > API > Create API key
- **Required in Bit Integrations**: Fabman API key + your Fabman subdomain URL

## Field Mapping Reference

| Field | Description | Notes |
|-------|-------------|-------|
| firstName | Member's first name | Required |
| lastName | Member's last name | Required |
| email | Member's email address | Required — used as unique identifier |
| phone | Member's phone number | Optional |
| address | Member's street address | Optional |
| memberNumber | Custom member ID or number | Optional |
| notes | Internal notes about the member | Optional |

## Common Workflow Recipes

### Recipe 1: Membership Registration Form to Fabman
**Trigger:** WordPress form submission (WPForms, Gravity Forms, Bit Form)
**Action:** Create member in Fabman
**Use case:** Automatically add new makerspace applicants as Fabman members when they complete a registration form on your website

### Recipe 2: WooCommerce Purchase to Fabman Member
**Trigger:** WooCommerce order completed (for a membership product)
**Action:** Create member in Fabman
**Use case:** Instantly provision Fabman access when someone purchases a makerspace membership through your WooCommerce store

### Recipe 3: MemberPress Signup to Fabman
**Trigger:** MemberPress membership activated
**Action:** Create member in Fabman
**Use case:** Sync WordPress membership signups to Fabman so members gain equipment access immediately on purchase

## Setup Steps

1. Install Bit Integrations Pro on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Select your trigger source (WPForms, WooCommerce, MemberPress, etc.).
4. Select Fabman as the action.
5. Enter your Fabman API key and subdomain URL.
6. Select "Create Member" as the action type.
7. Map form or event fields (first name, last name, email, phone) to Fabman member fields.
8. Save and test with a real form submission or purchase.

## When to Use

- Automating member onboarding for a makerspace or fab lab powered by Fabman
- Syncing WooCommerce membership purchases to Fabman access provisioning
- Removing manual data entry when new members register through your WordPress site
- Connecting MemberPress or Paid Memberships Pro signups to Fabman member records

## Related Integrations

- woocommerce.md
- memberpress.md
- paid-memberships-pro.md
- wpforms.md
