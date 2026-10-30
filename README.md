# PIVX Alliance Registry

The public register of PIVX alliances — visible, dated, revocable. Built to
accompany the "Reviving the PIVX Alliance Protocol" governance pre-proposal
(October 2026).

**Stack:** Next.js 15 (App Router, static) · Tailwind v4 · TypeScript. No DB, no
auth: the registry is data-as-code in `src/lib/registry.ts`, updated by commits —
every change is itself on the public record.

## Pages

| Route | What it is |
|---|---|
| `/` | Masthead, the register (ledger table), why it exists |
| `/alliance/[slug]` | Alliance record: summary, deliverables per party, fact box with treasury/vote-hash data, primary sources |
| `/protocol` | Protocol v2: six rules, mandatory vetting sheet, open governance questions |
| `/submit` | The proposal path (5 steps) + disavowal banner explainer |

## Conventions

- **AGENTS.md = how it's built. DESIGN.md = how it looks.** All visual tokens are
  CSS variables in `src/app/globals.css`; components reference them, never hardcode.
- Status chips: `active` (green) / `expired` (grey) / `review` (red stamp).
  Red is reserved for the review/disavowal path only.
- The `degenswap-labs` entry is a deliberate DEMO entity (flagged in the UI)
  demonstrating the disavowal banner. Remove it when a real review case arrives.
- Light mode only, per house rule. Mobile: ledger table collapses to stacked cards.
- Historical data is sourced from forum.pivx.org proposal threads (#870 ARK.io,
  #1192 BlockDX) and the 2018 protocol LitePaper — verify before editing records.

## Update flow

1. Edit `src/lib/registry.ts` (new alliance, status flip, review open/close).
2. `npm run build` — must pass.
3. Commit (author `cryptosixxx@gmail.com`) → push → Vercel auto/CLI deploy.

## Related

- Pre-proposal thread: PIVX Forum → Pre-Proposal Discussions (Oct 2026)
- Historical protocol: https://steemit.com/pivx/@cryptosi/pivx-alliance-protocol-immutable-steemit-copy
