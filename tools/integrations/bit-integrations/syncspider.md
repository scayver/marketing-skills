# SyncSpider

SyncSpider is an e-commerce-focused integration platform designed to sync product, order, and customer data across online stores and marketplaces. Available as an Action in the Bit Integrations WordPress plugin.

**Role:** Action
**Free Tier:** Yes
**Category:** Automation and Integration Platforms
**Icon:** `https://bit-integrations.com/wp-content/uploads/2026/02/SyncSpider.svg`

## Capabilities in Bit Integrations

| Feature | Available | Notes |
|---------|-----------|-------|
| As Trigger | — | — |
| As Action | ✓ | Send data to SyncSpider via API |
| Free Tier | ✓ | Free with Bit Integrations free plan |
| Field Mapping | ✓ | Map form or WooCommerce fields to SyncSpider fields |

## Action Events

- Send WordPress or WooCommerce data to SyncSpider for cross-platform syncing

## Authentication

- **Type**: API Key
- **Required**: API key from your SyncSpider account settings

## Common Workflow Recipes

### Recipe 1: WooCommerce Order to Marketplace Sync
**Trigger:** WooCommerce order placed
**Action:** SyncSpider syncs order data to an external marketplace or fulfillment platform
**Use case:** Keep sales channels synchronized when orders come in through WordPress/WooCommerce

### Recipe 2: Product Form Submission to Catalog
**Trigger:** WordPress form submission with product details
**Action:** SyncSpider pushes product data to connected sales channels
**Use case:** Distribute new product listings across multiple platforms from a single WordPress form

### Recipe 3: Customer Registration to Cross-Platform CRM
**Trigger:** WooCommerce customer registration
**Action:** SyncSpider syncs customer profile to connected CRM or ERP
**Use case:** Maintain a unified customer database across all sales and service platforms

## Setup Steps

1. Install Bit Integrations on your WordPress site.
2. Go to Bit Integrations > Create Integration.
3. Choose your trigger.
4. Select SyncSpider as the Action.
5. Enter your SyncSpider API key in Bit Integrations.
6. Configure the target SyncSpider task or task group.
7. Map fields.
8. Save and test.

## When to Use

- When running a multi-channel e-commerce operation that needs data synced across platforms
- When WooCommerce orders or products need to flow into marketplaces or ERPs automatically
- When you need e-commerce-specific integration logic beyond generic webhook tools

## Related Integrations

- zapier.md
- make.md
- webhook-outgoing.md
- custom-api.md
