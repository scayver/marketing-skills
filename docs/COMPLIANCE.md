# Compliance Reference

This project includes skills and tools that can support prospect research, email planning, social outreach, analytics, and integrations. Use them responsibly.

This document is an operating reference for agents and contributors. It is not legal advice.

## Core Rules for Outreach Workflows

Before exporting or contacting prospects, make sure the workflow records:

| Field | Why It Matters |
|-------|----------------|
| `source_url` | Shows where the signal came from |
| `signal_type` | Explains why the account or person entered the list |
| `collected_at` | Shows when the data was gathered |
| `region` | Helps flag GDPR, CASL, and other local requirements |
| `lawful_basis_or_consent_status` | Documents why outreach is allowed |
| `suppression_status` | Prevents contacting unsubscribed or excluded people |
| `outreach_channel_allowed` | Separates email, LinkedIn, SMS, phone, ads, and community channels |

## CAN-SPAM

For commercial email in the United States, plan for accurate sender information, honest subject lines, a valid postal address, a clear opt-out mechanism, and prompt opt-out handling.

Official reference: [FTC CAN-SPAM Act compliance guide](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business).

## GDPR

For personal data involving people in the European Economic Area or United Kingdom, document the lawful basis for processing, collect only necessary data, explain processing transparently, respect data subject rights, and avoid keeping data longer than needed.

Official reference: [European Commission GDPR principles](https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/principles-gdpr/overview-principles/what-data-can-we-process-and-under-which-conditions_en).

## CASL

For commercial electronic messages to Canadian recipients, confirm consent or an applicable exception, identify the sender, include contact information, and provide an unsubscribe mechanism.

Official reference: [CRTC CASL requirements](https://crtc.gc.ca/eng/internet/anti/reg.htm).

## Platform Terms

Respect platform rules for GitHub, LinkedIn, Google Maps, Apollo, ZoomInfo, Sales Navigator, email providers, and enrichment tools.

Do not automate actions that a platform forbids. Do not bypass access controls. Do not scrape private or restricted data. Use public data as a fit or intent signal, not as standalone permission to contact someone.

## Skills That Should Check This File

- `prospect-research`.
- `cold-email`.
- `email-marketing`.
- `linkedin-strategy`.
- `revops`.
- `local-seo`.
- `customer-service`.

## Practical Agent Rule

If a workflow creates or exports a prospect list, the agent should include a compliance column and a suppression-list step before writing outreach.
