---
name: a11y-audit
description: >
  Use this skill when the user wants an accessibility audit for a website,
  landing page, app UI, form, checkout, dashboard, marketing page, or design
  system. Trigger phrases include "accessibility audit," "a11y audit," "WCAG,"
  "check accessibility," "keyboard navigation," "screen reader," "color contrast,"
  "alt text," "form labels," and "accessible landing page."
---

# Accessibility Audit

## Mandatory Content Standards

- Write in active voice.
- Use short sentences and plain language.
- Address the user as "you" and "your."
- Use `.marketing-os/product-context.md` when it exists. If it is blank or missing, continue because accessibility audits can run from the page or UI alone.
- Do not claim WCAG conformance unless a complete audit supports it.
- Do not invent test results. Mark untested items clearly.
- Prioritize issues by user impact, not personal preference.
- Include practical fixes and acceptance checks.
- Do not use em dashes, hashtags, emojis, or filler closings.
- End every full deliverable with one specific next step.

## Objective

Use this skill to identify accessibility barriers and convert them into a prioritized fix plan. It supports marketing pages, SaaS onboarding, ecommerce flows, local business sites, forms, and dashboards.

This skill complements `cro`, `landing-page-cro`, `signup`, `onboarding`, `ecommerce-content`, and `site-architecture`.

Next step: identify the page, flow, or component under review.

## Audit Areas

| Area | What To Check |
|------|---------------|
| Keyboard | Tab order, focus visibility, traps, skip links |
| Screen reader | Names, roles, states, headings, landmarks |
| Color and contrast | Text contrast, non-text contrast, state contrast |
| Forms | Labels, errors, instructions, required fields, autocomplete |
| Images | Alt text, decorative handling, complex image descriptions |
| Media | Captions, transcripts, autoplay, controls |
| Motion | Reduced motion, animation controls, flashing |
| Layout | Reflow, zoom, responsive behavior, reading order |
| Copy | Clear labels, descriptive links, simple instructions |
| Conversion elements | CTA clarity, checkout, signup, pricing, modal behavior |

Next step: test the primary user path before secondary pages.

## Severity Model

| Severity | Meaning | Examples |
|----------|---------|----------|
| Critical | Blocks task completion for some users | Keyboard trap, unlabeled checkout form, inaccessible modal |
| High | Creates major friction or confusion | Missing form errors, poor heading structure, invisible focus |
| Medium | Reduces usability or comprehension | Vague link text, weak alt text, low contrast secondary text |
| Low | Polish or maintainability | Minor landmark cleanup, redundant labels |

Next step: fix critical blockers before visual polish.

## WCAG-Oriented Checklist

- Page has one clear `h1`.
- Headings follow a logical order.
- Interactive elements have accessible names.
- Buttons and links describe their action.
- Form inputs have labels.
- Error messages tell users how to fix the issue.
- Focus order matches visual order.
- Focus indicators appear clearly.
- Text meets contrast requirements.
- Content works at 200 percent zoom.
- Images use meaningful alt text or empty alt for decorative images.
- Video has captions or transcript.
- Motion respects reduced-motion preferences.
- Modals trap focus only while open and return focus on close.

Next step: verify each fix with keyboard-only navigation.

## Output Format

| Priority | Issue | Location | Impact | WCAG Area | Recommended Fix | Acceptance Check |
|----------|-------|----------|--------|-----------|-----------------|------------------|

Then provide executive summary, critical blockers, high-impact fixes, quick wins, testing checklist, and follow-up tools or commands.

End with the first issue to fix and the exact acceptance check.

