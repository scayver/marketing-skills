---
name: sms
description: >
  Use this skill when the user wants SMS or MMS marketing strategy, opt-in flows,
  text message campaigns, abandoned cart texts, event reminders, win-back texts,
  STOP and HELP handling, A2P 10DLC planning, TCPA compliance checkpoints, or
  SMS lifecycle messaging. Trigger phrases include "SMS marketing," "text message
  campaign," "MMS campaign," "A2P 10DLC," "TCPA," "STOP reply," "HELP reply,"
  "SMS opt-in," "cart recovery text," and "text automation."
---

# SMS

## Mandatory Content Standards

- Write in active voice.
- Use short sentences and plain language.
- Address the user as "you" and "your."
- Use `.marketing-os/product-context.md` when it exists. If it is blank or missing, recommend running `product-marketing` first.
- Ask for country, consent source, audience segment, sender type, and platform before producing final SMS copy.
- Keep SMS copy concise, clear, and compliant.
- Do not invent legal permission, subscriber consent, carrier approval, or deliverability results.
- Include opt-out language when the message starts or changes a marketing relationship.
- Respect TCPA, CAN-SPAM where relevant, GDPR, CASL, CTIA guidance, carrier rules, and platform terms.
- Do not use em dashes, hashtags, emojis, or filler closings unless the user explicitly requests a brand style that permits them.
- End every full deliverable with one specific next step.

## Objective

Use this skill to design compliant SMS and MMS campaigns that respect consent, fit the channel, and move subscribers toward a clear action.

SMS works best for time-sensitive, high-intent, simple actions. It does not replace email. It supports launches, reminders, cart recovery, appointments, limited offers, onboarding nudges, reviews, and retention moments.

Next step: confirm consent source before writing copy.

## Required Inputs

| Input | Why It Matters |
|-------|----------------|
| Country or region | Rules differ across TCPA, CASL, GDPR, and local telecom rules |
| Consent source | Determines whether marketing SMS can proceed |
| Sender type | Short code, toll-free, 10DLC, WhatsApp, or platform sender |
| Audience segment | Shapes message relevance and frequency |
| Campaign type | Changes timing, disclosure, and CTA |
| Platform | Determines STOP, HELP, MMS, link, and tracking behavior |
| Quiet hours | Prevents intrusive sends |

Next step: ask for any missing compliance-critical input.

## Consent And Opt-In Standards

Every SMS plan needs documented consent.

| Requirement | Check |
|-------------|-------|
| Clear program name | The subscriber knows who will text them |
| Message purpose | Marketing, reminders, support, alerts, or mixed use |
| Message frequency | Approximate cadence or event-based explanation |
| Fees disclosure | "Msg and data rates may apply" where appropriate |
| STOP instruction | Subscriber can opt out |
| HELP instruction | Subscriber can get support |
| Terms and privacy links | Required for many platforms and carrier reviews |
| Timestamp and source | Proof of consent for audit |

Example opt-in line:

```text
By submitting this form, you agree to receive marketing texts from [Brand]. Msg and data rates may apply. Reply STOP to opt out, HELP for help. See Terms and Privacy Policy.
```

Next step: add the opt-in language at the exact collection point.

## A2P 10DLC And Sender Planning

| Sender Option | Best For | Notes |
|---------------|----------|-------|
| 10DLC | Most US businesses | Requires brand and campaign registration |
| Toll-free | Support, alerts, broader business messaging | Often requires verification |
| Short code | High-volume national programs | Higher cost and longer approval |
| WhatsApp | Conversational global messaging | Requires WhatsApp Business rules and templates |

Prepare legal business name, registration details, website, terms, privacy policy, opt-in screenshots, sample messages, use case, and expected volume.

Next step: collect compliance assets before campaign launch.

## Campaign Types

| Campaign | Best Timing | Message Goal |
|----------|-------------|--------------|
| Welcome | Immediately after opt-in | Confirm value and set expectations |
| Launch | Early access, launch day, last call | Drive time-sensitive action |
| Abandoned cart | 30 minutes to 24 hours after cart | Recover high-intent shoppers |
| Appointment reminder | 24 hours and 2 hours before | Reduce no-shows |
| Event reminder | Registration, day before, one hour before | Increase attendance |
| Review request | After successful service or delivery | Capture reputation signal |
| Win-back | After inactivity threshold | Restart engagement |

Next step: choose one campaign goal and one primary CTA.

## STOP And HELP Workflows

| Subscriber Reply | Required Action |
|------------------|-----------------|
| STOP | Immediately opt out and confirm no further marketing texts |
| HELP | Reply with support contact, brand name, and program guidance |
| START or UNSTOP | Re-subscribe only when the platform and consent rules allow it |
| Complaint words | Route to human review |

STOP confirmation:

```text
[Brand]: You are opted out and will no longer receive marketing texts. Reply START to resubscribe.
```

HELP response:

```text
[Brand]: Need help? Contact [support email] or visit [support URL]. Reply STOP to opt out. Msg and data rates may apply.
```

Next step: test STOP and HELP in the sending platform before sending campaigns.

## Output Format

Use this table for campaign planning.

| Message # | Campaign Type | Segment | Timing | SMS Copy | CTA | Compliance Note | Personalization Field | Success Metric |
|-----------|---------------|---------|--------|----------|-----|-----------------|-----------------------|----------------|

End with the exact platform setup step the user should complete next.

