# Asgaros Forum

Asgaros Forum is a lightweight and straightforward WordPress forum plugin for adding discussion boards to any WordPress site. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Community and Forum
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/Asgaros-Forum.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; add members to Asgaros Forum |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map user data to Asgaros Forum member fields |

## Action Events

- Add member to forum

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and Asgaros Forum must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: User Registration to Forum Access
**Trigger:** WordPress user registration
**Action:** Add the new user as a forum member in Asgaros Forum
**Use case:** Automatically grant forum access to all new WordPress registrations

### Recipe 2: Membership Purchase to Premium Forum Access
**Trigger:** WooCommerce or membership plugin purchase
**Action:** Add the buyer as a forum member in Asgaros Forum
**Use case:** Grant forum access as part of a membership or course purchase bundle

### Recipe 3: Form Sign-Up to Forum Community
**Trigger:** WordPress community interest form submission
**Action:** Add the form submitter as an Asgaros Forum member
**Use case:** Let visitors request forum access via a form and automatically grant it

## Setup Steps

1. Install Bit Integrations Pro and Asgaros Forum on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select Asgaros Forum as the Action.
5. Configure the member addition settings.
6. Map the user identifier.
7. Save and test.

## When to Use

- When automating forum membership grants based on registration, purchase, or form events
- When running a simple WordPress forum with Asgaros and needing automated membership management
- When forum access should be part of a larger automated workflow triggered by WordPress events

## Related Integrations

- wpforo.md
- bbpress.md
- buddypress.md
- buddyboss.md
