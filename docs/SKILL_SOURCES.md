# Skill Sources And Runtime Layers

Marketing Skills OS has one public source of truth. The other skill locations serve different purposes and must not become competing copies of the product.

## Canonical Ownership

| Location | Role | Edit policy |
|----------|------|-------------|
| `skills/` in this repository | Canonical public Marketing Skills OS source | Edit here first. Every public skill must live here. |
| `AIOS/02 Skills/` in the private vault | Private vault workflows and operating notes | Keep private. Link to public skills when useful. Do not copy the public library into this folder. |
| `Skills/active/` in the private vault | Shared installed runtime library | Treat as an installation target or generated runtime layer. Do not use it as the public source. |
| `Projects/.agents/skills/` | Agent runtime cache and installed skills | Let the agent tooling manage this directory. Do not edit it as a product source. |
| `Projects/Claude Skills/` | Removed duplicate checkout | Its useful skill additions were merged into this repository. Do not recreate it. |
| `Projects/Marketing Skills Campaign Assets/` | Private launch and campaign assets | Keep outside the public repository. |
| `Projects/Tools/skills/` | General utility skills | Keep separate from the marketing product. |

## Operating Rule

When a new public marketing skill is needed, create or update `skills/<skill-name>/SKILL.md` in this repository first. Add its evaluation case, registry entry, documentation reference, and validation coverage in the same change.

When a private workflow needs that capability, reference the public skill by slug from the AIOS note. Do not create a second copy with a similar name unless the private note contains genuinely different operating instructions.

When an agent needs an installed runtime copy, install or sync from the canonical public source. Treat `Skills/active/` and `.agents/skills/` as runtime outputs, not authored sources.

## Why The Locations Look Duplicated

The same skill can appear in more than one location because a public source, a private workflow layer, and one or more agent runtimes serve different jobs. The problem is not the presence of runtime copies. The problem starts when a runtime copy becomes an independently edited source.

The public repository currently contains the product skills. The private AIOS folder contains vault-native workflow notes. The active and `.agents` folders contain broader installed libraries and runtime mirrors. They should not be merged into the public repository.

## Migration Status

- The public repository is the canonical source for Marketing Skills OS.
- Existing runtime copies remain in place so Claude Code, Codex, and other agents do not lose access.
- The former `Projects/Claude Skills` checkout was merged into this repository and removed after validation.
- No private vault notes or runtime directories are deleted by this repository change.

## Audit Command

Run this from the repository root:

```bash
npm run skills:sources
```

Use the check mode in CI or before a release:

```bash
npm run skills:sources:check
```

The audit reports the public source, private workflow layer, runtime mirrors, archived duplicate status, and overlapping skill slugs. Expected overlap between a source and its runtime installation does not count as an error.

## Adding A Private Workflow Note

Keep private workflow notes in `AIOS/02 Skills/` when the note needs vault context, personal operating rules, or private business information. Reference a public skill with a short line such as `Public skill: marketing-os` or `Public skill: market-research`.

Do not place private credentials, client data, internal strategy, or vault paths in this repository. Use sanitized public examples instead.

## Decision Record

The repository name and install path remain `scayver/marketing-skills` for compatibility. The public product name remains Marketing Skills OS. This source model keeps the open-source product portable while allowing the private AIOS vault and future Scayver AI Workspace systems to use it without creating another public copy.
