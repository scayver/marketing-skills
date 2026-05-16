# weDocs

weDocs is a WordPress documentation plugin for creating and managing organized knowledge base articles and documentation sites. Available as an Action (Pro) in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** No
**Category:** Community and Forum
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/04/weDocs.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Requires Pro plan; create documentation articles in weDocs |
| Free Tier | — | Requires Pro |
| Field Mapping | ✓ | Map form fields to weDocs article content fields |

## Action Events

- Create doc article

## Authentication

- **Type**: WordPress plugin-native
- **Required**: Both Bit Integrations Pro and weDocs must be installed and active on the same WordPress site. No external credentials needed.

## Common Workflow Recipes

### Recipe 1: Content Submission Form to Knowledge Base Article
**Trigger:** WordPress content submission form
**Action:** Create a new weDocs knowledge base article from the submitted content
**Use case:** Let team members or contributors submit documentation drafts via a form that auto-creates weDocs articles

### Recipe 2: Support Ticket Resolution to FAQ Article
**Trigger:** Fluent Support ticket resolved or support form closed
**Action:** Create a weDocs article with the question and resolution
**Use case:** Automatically grow the knowledge base by converting resolved support tickets into documentation

### Recipe 3: Product Launch to Documentation Entry
**Trigger:** WooCommerce product published or form submission announcing a new feature
**Action:** Create a weDocs article for the new product or feature
**Use case:** Automate documentation creation alongside product or feature launches

## Setup Steps

1. Install Bit Integrations Pro and weDocs on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select weDocs as the Action.
5. Select the target documentation section.
6. Map form fields to article title and content.
7. Save and test.

## When to Use

- When content submission forms should automatically create weDocs knowledge base articles
- When support resolutions should feed into a self-service documentation library
- When building a documentation workflow that auto-populates weDocs from WordPress form data

## Related Integrations

- post-creation.md
- wp-post.md
- fluent-support.md
- ninja-tables.md
