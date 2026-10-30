# IMAGERY.md — PIVX Alliance Registry image inventory & specs

Audit date: 2026-10-30. Current state: **zero raster/vector images on the site** —
all typography (by design, per DESIGN.md). This document specifies every image the
site should have, why it earns its place, and exactly what it looks like.

**Doctrine:** the civic-ledger lane admits only three kinds of imagery:
1. **Identity** (seal, favicons, share cards) — makes the register recognizable
2. **Ceremony** (stamps) — makes status feel official
3. **Provenance** (period artifacts) — makes history feel real
Nothing else. No gradient hero art, no isometric-blockchain illustrations, no stock
handshake photos, no mascots, no emoji, no chart-candlestick decoration.

---

## Inventory (priority order)

| ID | Image | Where used | Size / format | Priority |
|---|---|---|---|---|
| IMG-1 | Registry seal (emblem) | Header, footer, protocol page, OG card | SVG (two lockups) | **P0** |
| IMG-2 | Favicon / app-icon set | Browser tabs, PWA, bookmarks | SVG + PNG 16→512 | **P0** |
| IMG-3 | Social share card (OG) | All page `<meta>` previews, Telegram/X/Discord | 1200×630 PNG/WebP | **P0** |
| IMG-4 | "UNDER REVIEW" stamp | DegenSwap hero overlay + banner | SVG/PNG ~220×90 | **P0** |
| IMG-5 | Stamp trio: RATIFIED / EXPIRED | Detail-page heroes (all records) | SVG ~220×90 each | P1 |
| IMG-6 | 2018 Protocol facsimile | `/alliance/allnodes-2018` + `/protocol` | ~1200×1560 @2x WebP | P1 |
| IMG-7 | Counterparty monogram tiles | Detail pages ×3 (ARK.io, BlockDX, Allnodes) | SVG 96×96 | P1 |
| IMG-8 | Per-alliance OG variants | 4 detail pages | 1200×630 ×4 | P2 |
| IMG-9 | 2018-era editorial clipping | Home "the wound" section | ~900×500, greyscale | P2 (optional) |
| IMG-10 | Paper grain texture | Masthead band only | 256×256 tile, 3% opacity | P2 (optional) |

---

## Specs

### IMG-1 — Registry seal (the brand device)
A circular official-seal emblem, PIVX purple `#662d91` on transparent.
- **Full lockup (≥48px contexts):** outer ring, text-on-path reading
  `PIVX ALLIANCE REGISTRY` (top arc) and `EST. 2018 · REVIVED 2026` (bottom arc),
  separated by two small diamonds. Inner field: an open ledger-book glyph with a
  shield boss — drawn with thick, even strokes (6–8px at 512 canvas) so it survives
  small sizes. Flat color only, no gradients, no bevels.
- **Glyph lockup (favicon-scale):** ledger-book + shield only, no ring text — text
  on a circle is illegible at 16px and turns to mush.
- Placement: header wordmark left (28px), footer center (40px, ink-tinted variant),
  `/protocol` header, IMG-3 composition. Repo: `public/seal.svg` + inline SVG component.

### IMG-2 — Favicon / app-icon set
From the seal glyph lockup: purple `#662d91` rounded-square (border-radius ~17%) field,
white ledger-book glyph centered at ~62% of canvas.
- Sizes: `favicon.svg` (modern), ICO 16/32/48, apple-touch 180, icon-192, icon-512,
  maskable-512 (glyph scaled to 72% safe zone).
- Contrast-proof: white-on-purple passes at every size; do NOT use ink-on-paper for
  icons (disappears against dark browser chrome).

### IMG-3 — Social share card / OG image (1200×630)
The site's handshake with Telegram, X, Discord, and the forum. Composition
(warm paper `#faf9f4` background, matching the live site exactly):
- Left third: seal at ~180px + mono wordmark `PIVX ALLIANCE REGISTRY` stacked.
- Right two-thirds: a miniature of the actual ledger table — 3 rows (Allnodes,
  ARK.io, BlockDX) with their real status chips and dates, rendered crisply as if
  zoomed. Beneath it the tagline in Source Sans 3 bold: **"Visible. Dated. Revocable."**
- Bottom hairline rule + mono caption: `registry state 2026-10-30 · forum pre-proposal`.
- Weight < 200KB. Sharable proof: the card must look like a screenshot of the real
  register, not a generic crypto banner.

### IMG-4 — "UNDER REVIEW" stamp
Rubber-stamp aesthetic, stamp-red `#a13a2e`, rotated −6°.
- Double border (2px outer, 1px inner, 6px gap), mono uppercase
  `UNDER REVIEW`, second line `NO RATIFYING RECORD` at 60% size. Slight ink
  unevenness (2–3% opacity noise inside the strokes) — tired-office-stamp, not
  grunge-horror. Transparent background.
- Usage: overlaid on the DegenSwap hero title block (top-right of the h1, not
  covering text), plus a small inline instance at the end of the banner text.
- This is the single most persuasive image on the site — it is the January-2018
  mechanism made visible. The forum reply literally links to a page that would
  carry it.

### IMG-5 — Stamp trio (ceremonial family)
Same construction as IMG-4, one visual language, three colors:
- `RATIFIED · GOVERNANCE RECORD` — good-green `#1e6b40`, +0° rotation (order)
- `TERM EXPIRED · <date>` — grey-chip `#75705f`, −3° (dormancy)
- `UNDER REVIEW` — IMG-4 (revocation)
Detail heroes get their status stamp; expired records wear it like an archive
folder, active ones like a certificate. Never more than one stamp per page.

### IMG-6 — 2018 Protocol facsimile (provenance artifact)
A stylized period document for the Allnodes detail page and `/protocol`:
- Portrait page (~3:4), aged-white paper with subtle fiber texture, typed-mono
  body: the three v1 rules (governance-only ratification · declared envoys/scope/
  duration ≤12 months · standard vetting sheet, no payments either way), titled
  `PIVX ALLIANCE PROTOCOL — DRAFT`, attributed `Crypto S.I · CryptoHB`,
  dated `5 February 2018`, purple date stamp diagonal.
- **Integrity rule:** small caption below the image in the page itself:
  "Illustrative facsimile of the 2018 draft — original text preserved in the
  LitePaper." It must never be mistakable for a scan of a real document.
- Deliver as WebP ~1200×1560, <150KB, thin rule-frame border, slight rotation.

### IMG-7 — Counterparty monogram tiles
96×96 rounded-square (4px radius) tiles: `--purple-soft` field, ink 2-letter mono
monogram (`AN`, `AR`, `BX`), 1px `--rule` border. Shown at 48px beside the h1 on
detail pages. Deliberately NOT real logos (trademark caution + visual consistency);
if counterparties later endorse listing, swap in approved wordmarks at the same slot.

### IMG-8 — Per-alliance OG variants (P2)
Same composition as IMG-3; swap the table rows for the single alliance's record
+ its status stamp. `/api/og` via `next/og` is an option, but hand-authored static
variants are fine at this scale (watch the satori CSS 500s noted in the skill refs).

### IMG-9 — 2018-era editorial clipping (optional, needs care)
Home "the wound" section: greyscale halftone newspaper-card — headline
`SEC HALTS "DECENTRALIZED BANK" ICO`, dateline `Jan 30, 2018`, wire-service style.
Rules: no real publication mastheads, no photos of real people, no AriseBank/PIVX
logos — type-only composition. Clearly editorial-stylized. If it can't meet all
three rules, skip it; the section works as pure typography today.

### IMG-10 — Paper grain (optional)
Tileable 256×256 neutral-grain PNG at 3–4% opacity, masthead band only. Ship only
if contrast audit still passes 4.5:1 everywhere; flat `--paper` is acceptable.

---

## Technical notes
- SVG-first; raster only for share cards + facsimile (WebP, PNG fallback).
- All content images via `next/image` with explicit width/height (no CLS); stamps
  and seal inline SVG (no network cost).
- Every image gets descriptive `alt` (stamps: `alt=""` where adjacent text already
  conveys status — decorative duplication is an a11y smell).
- Mobile: stamp overlays max-width 180px at 390px; OG/favicons don't affect layout.
- Generation path: seal + stamps + monograms = hand-authored SVG (code, precise);
  facsimile + OG card = composited (PIL) or imagegen; favicon set via the
  favicon-icon-suite pipeline; OG via social-share-cards pipeline.

## Anti-list (what must NEVER appear)
Gradient heroes · glass cards · 3D isometric blockchain art · stock photography ·
mascots/characters (this is a register, not Fledge) · emoji in UI · candlestick
charts · real third-party logos without approval · anything that could be mistaken
for a genuine archival document.
