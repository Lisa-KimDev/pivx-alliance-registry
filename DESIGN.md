# PIVX Alliance Registry — Design System

## Lane
**Civic ledger.** This site is an *official public register*, not a landing page. Reference
discipline: public gazette + public-notices board + bank statement. Dignified, stamped,
dated. Warm paper, ink black, one institutional accent (PIVX purple). One accent only.

## Tokens (CSS variables — single source of truth)
```css
--paper: #faf9f4;        /* page background — warm paper, never pure white */
--ink: #1d1a16;          /* primary text — warm near-black */
--ink-soft: #6b6357;     /* secondary text — 4.5:1+ on paper */
--rule: #d8d2c4;         /* hairline ledger rules */
--purple: #662d91;       /* PIVX institutional accent (from pivx.org) */
--purple-soft: #f0e9f7;  /* accent tint fills */
--stamp-red: #a13a2e;    /* disavowal/under-review stamps ONLY */
--good-green: #1e6b40;   /* active status dots ONLY */
--mono: "IBM Plex Mono", monospace;  /* addresses, hashes, dates, table data */
--sans: "Source Sans 3", system-ui, sans-serif;  /* body + headings */
```

## Typography
- **Headings:** Source Sans 3, 700, tight tracking, sentence case. Sizes 2.25/1.5/1.125.
- **Body:** Source Sans 3 400, 1.06rem, 1.65 line-height, max-width 68ch.
- **Data (dates, hashes, addresses, table numerics):** IBM Plex Mono, 0.8125rem.
- Google Fonts via `<link>`; system fallbacks must not leak slop fonts as identity.

## Layout grammar
- Max content width **1100px**, generous side padding (24px mobile / 48px desktop).
- Ledger table = the hero of the home page. Full-width rows separated by 1px `--rule`;
  header row uppercase mono letter-spaced; no zebra, no card grids, no shadows.
- Rows are links (whole-row hover: `--purple-soft` wash + 3px left border `--purple`).
- Status chip: 8px dot + mono label, green = active, grey = expired, purple = under review.
- **Disavowal banner** (when shown, top of page under header): 2px solid `--stamp-red`
  left border, `#fdf1ef` fill, stamp-red mono headline "UNDER REVIEW". Never red page-wide.
- Header: slim bar, wordmark left ("PIVX ALLIANCE REGISTRY" mono, letter-spaced),
  nav right, bottom border `--rule`. Sticky allowed.

## Components
- `.chip` status, `.rule-table` ledger table, `.stamp` (red review stamp),
  `.fact-list` (mono key→value pairs on detail pages), `.tag` (protocol pill).
- Buttons: 1px `--ink` border, square corners (2px radius max), purple fill only for
  the single primary CTA. No gradients, no glow, no shadows beyond a 1px ring.

## Motion
ONE orchestrated load: rows fade+rise 20px, staggered 40ms, once. Hover transitions
150ms ease. No parallax, no floaters, no random fades.

## Guardrails — What NOT to do
- NO dark mode as default (Carl's standing rule: user-facing sites default LIGHT).
- NO purple gradient hero, NO glassmorphism, NO rounded-2xl card grids, NO emoji in UI.
- NO centered hero text walls; left-aligned, document-like.
- NO decorative icons that carry no information.
- NO Inter/Roboto/Space Grotesk/system-ui as identity font.
- Red is reserved: `--stamp-red` appears ONLY in the disavowal banner + review stamps.
- Never let demo/disavowed data look live: grey "EXPIRED" chips, explicit dates.
