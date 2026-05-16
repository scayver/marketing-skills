# Pods

Pods is a flexible WordPress framework for creating custom content types, fields, and relationships with powerful front-end and back-end tools. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Project Management and Productivity
**Icon:** `https://bitapps.pro/wp-content/uploads/2023/07/pods.png`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Create or update Pods entries (pod records) |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form fields to Pods field definitions |

## Action Events

- Create pod entry
- Update pod entry

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations and Pods must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Registration Form to Pods Member Profile
**Trigger:** WordPress user registration or profile form submission
**Action:** Create a Pods entry for the new member with extended profile fields
**Use case:** Store extended user profile data in a Pods-managed content type beyond WordPress core user fields

### Recipe 2: Business Directory Form to Pods Listing
**Trigger:** WordPress business submission form
**Action:** Create a Pods entry in a business directory pod
**Use case:** Populate a Pods-powered business directory from user-submitted listing forms

### Recipe 3: Application Form to Pods Application Record
**Trigger:** Job or program application form submission
**Action:** Create a Pods record in an applications pod with all submitted fields
**Use case:** Manage applications in a Pods-powered database with custom statuses and relationships

## Setup Steps

1. Install Bit Integrations and Pods on your WordPress site.
2. In Pods, define the target pod (content type) and its fields.
3. Go to Bit Integrations > Create Integration.
4. Choose your trigger.
5. Select Pods as the Action.
6. Select the target pod.
7. Map form fields to Pods field names.
8. Save and test.

## When to Use

- When building custom data applications with Pods and needing WordPress forms to create or update records
- When Pods-managed content types should be populated automatically from form submissions
- When you need relational data capabilities that standard WordPress post types don't support

## Related Integrations

- advanced-custom-fields.md
- jetengine.md
- acpt.md
- post-creation.md
