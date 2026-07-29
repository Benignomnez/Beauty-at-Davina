# Beauty at Davina — Brand Identity Notes

Source: `Manual de Identidad — Beauty at Davina` (38 pages, by Jesús Valenzuela / @brandbooking), shared by the PM (Katherine González) via Drive, July 2026.

This is a **checkpoint of the official brand guide** for reference before applying any rebrand work. **None of this has been applied to the live site yet** — the site as currently built uses the Claude Design mockup's palette (green `#33473B` / gold `#A6864E` / cream `#F8F4EE`, Cormorant Garamond + Manrope), which differs from this official guide in both color and typography. See "Reconciliation needed" at the bottom.

## 1. Brand positioning ("Dirección Visual")

**Keywords:** Integral, Estético, Vital, Avanzado, Equilibrio, Exclusivo

**Brand statement (paraphrased):** A brand focused on holistic wellness and patient longevity. Services span supplements, IV infusions, weight-loss programs, facial treatments, Botox, fillers, and **sexual wellness**.

**Core concept: "Glow In & Glow Out"** — pairs internal care (health, supplements, weight, sexual wellness, IV infusions) with external care (facials, Botox, fillers) for complete results. This is the brand's central creative platform and isn't reflected anywhere in the current site copy.

**⚠️ Gap: Sexual wellness is a named service pillar in the brand guide and does not exist anywhere on the current site** (not in Treatments, not in Services).

## 2. Color palette (official, with exact codes)

| Name | Hex | RGB | CMYK | Pantone | Role / proportion |
|---|---|---|---|---|---|
| Verde Bosque (Forest Green) | `#0B2D26` | 11,45,38 | 88,51,66,57 | 560 C | **Dominant — 60%.** Medical authority, stability, longevity. Main backgrounds, "authority" elements. |
| Blanco Almendra (Almond White) | `#F9F7F2` | 249,247,242 | 1,1,4,0 | 7541 CP | **Contrast — 20%.** Whitespace, text on dark backgrounds, print backgrounds. |
| Beige Arena (Sand Beige) | `#CFAB8F` | 207,171,143 | 20,33,44,1 | 466 C | **Equilibrio — 10%.** Bridges clinical/human; weight-loss & sexual wellness constancy. |
| Durazno Claro (Light Peach) | `#F8C09D` | 248,192,157 | 1,27,38,0 | 4021 C | **Impulso — 5%.** "Glow In" spark — IV infusions/supplements energy. Icon accents, web highlights. |
| Terracota / Cobre (Piel 3) | `#B66640` | 182,102,64 | 24,66,83,12 | 7584 C | **Transformación — 3%.** Metabolism/strength — weight loss + sexual wellness warmth. CTA buttons, promos, decorative accents. |
| Rosa Viejo / Malva (Piel 4) | `#BC8A81` | 188,138,129 | 27,48,45,4 | 7522 C | **Elegancia — 2%.** "Glow Out" delicacy — facials/Botox/fillers. Refined accents, aesthetics-area details, premium stationery. |

This is a materially different palette from what's currently built (green `#33473B` / gold `#A6864E` / cream `#F8F4EE`). The forest green is close in *concept* (deep green as the anchor color) but a different exact shade; there is no gold/mustard tone in the official palette at all — its role is split between terracotta (CTAs/accents) and peach (highlights).

## 3. Typography

- **Primary — DM Sans Medium**: all titles and phrases/headlines.
- **Secondary — DM Sans Regular**: body copy / running text.
- **Special — DM Sans Italic**: special/emphasis text.
- **No serif typeface anywhere in the system.** The current site's Cormorant Garamond (serif, used for all headings) is not part of the official identity — everything is DM Sans at different weights/styles.
- The logo wordmark itself ("BEAUTY / AT DAVINA") uses its own fixed high-contrast serif lettering, but that's treated as a locked logo asset, not a typeface to use in running copy.

Type hierarchy (title/subtitle/body/button) all map to DM Sans Regular or Medium per the guide's page 26 example — no separate display serif tier.

## 4. Logo

Three variations, each for different contexts:
- **Logo Principal** — full lockup (symbol + "BEAUTY / AT DAVINA" wordmark). Default, used whenever there's room.
- **Logo Secundario** — used when the primary doesn't fit the format.
- **Símbolo** — the "B" monogram/icon alone, for small formats (social profile pictures, small print).

Rules: protection area = "x" (height of the logo's "B") on all sides — no element may sit closer; minimum print sizes 4cm/2cm/1cm for primary/secondary/symbol respectively (not directly binding for web, but signals "don't shrink below legibility"); prefer color logo on light backgrounds, white logo on colored/terracotta backgrounds; single-ink (black-on-white prioritized) is acceptable when needed; on photography, place in the most visible area and pick whichever brand color contrasts best with the photo.

**Asset files received** (in `assets/brand/logo/`):
- `transparent/` — 8 full-lockup PNGs (4x, transparent background) in: charcoal, white (×2 variants), beige arena, rosa malva, durazno, terracota, verde bosque
- `on-color/` — the same lockups pre-composited onto official brand-color swatches (reference only)
- `editable-pdf/` — 18 vector-editable PDF assets (likely per-variant/per-lockup source files)

No SVG was included — PDFs are vector and can be converted to SVG if needed for crisp, tiny-footprint web use instead of the PNGs.

## 5. Photography style

**Keywords:** Minimalismo, Estética, Fluidez (Minimalism, Aesthetic, Fluidity)

- **Lighting — "Golden Hour Glow":** natural morning/sunset light, never flat clinical lighting — skin should glow on its own.
- **Skin/authenticity — "Radiant Authenticity":** real, hydrated, luminous skin texture, not over-edited; peaceful/content expressions.
- **Textures — "Liquid Sensoriality":** linen, silk, glass transparency, fresh plants.
- Shot categories: Lifestyle, Product, Neutral tones.

This is useful guidance for whenever real photography replaces the current placeholder tiles.

## 6. Social/print production specs (for their marketing team, not the website)

- Instagram posts: 1080×1080, 150ppi, .jpg
- Instagram stories: 1080×1920, 150ppi, .jpg
- Stationery: 300ppi, embossed finish
- Packaging: 20×25cm, 300ppi, gold foil finish

## Reconciliation needed before applying to the site

This is a substantial rebrand relative to what's currently live, not a drop-in asset swap:

1. **Full color repaint** — every CSS color token (`--green`, `--gold`, `--bg`, etc.) would need remapping to the 6 official colors and their specified proportions (60/20/10/5/3/2).
2. **Typography swap** — replace Cormorant Garamond + Manrope with DM Sans (Medium/Regular/Italic) sitewide; this changes the visual character of every heading on every page.
3. **New content: sexual wellness** — needs copy, pricing, and placement in Treatments/Services (a real gap versus the brand's own stated service lineup).
4. **"Glow In & Glow Out" positioning** — the current copy doesn't use this framing anywhere; adopting it would touch Home hero/about copy and possibly section groupings (grouping services into "glow in" vs "glow out" is a real option the guide implies).
5. **Real NAP data** — confirmed on multiple real marketing flyers in the same Drive folder: address `925 NE 30 Terrace, Suite 316, Homestead, FL 33033`, phone `(305) 245-8787`, parent entity "Davina Medical Care, P.A.", website `www.DavinaMedical.com`. All different from the placeholder data currently on the site.
6. **Real IV Therapy menu** — the "IV Therapy Options Available" flyer names three specific offerings that should replace the generic IV Therapy copy currently on the site:
   - **NAD IV Therapy** — mental clarity, energy, cellular repair, anti-aging
   - **Immunity IV Therapy** — vitamin C, zinc, antioxidants; illness prevention/recovery ($150 per the Immunity flyer)
   - **Get Up and Go IV Therapy** — B vitamins + amino acids; energy, metabolism, athletic performance

Not starting any of this until scope/sequencing is confirmed.

## Drive folder inventory — what was pulled vs. skipped

The shared folder (`Beauty At Davina Web`) has 15 items. Accounted for:

**Pulled into this repo:**
- `Logo entregables beauty at davina (1).zip` → extracted into `assets/brand/logo/`
- `Manual de Identidad - Beauty at Davina.pdf` (this was a Drive *shortcut* whose target file wasn't actually shared — the PM/user uploaded the real PDF directly in chat instead, which is what's saved here and what this notes file is based on)
- 5 real marketing flyers, saved to `assets/brand/reference-flyers/`: `NAD .png`, `NAD FLYER updated.pdf`, `Immunity Flyer.pdf`, `Flyer - IV Therapy Options Available .png`, `Get up and go .png` — these are the source for the real NAP data and IV therapy menu above. Note: their visual design (red/teal, "Davina Medical Care" crest logo) is the **older** practice branding, not the new identity manual's palette — useful for real content/copy, not for visual style.

**Seen but intentionally not pulled** (not Beauty at Davina brand assets):
- `1.png`, `2.png`, `mBCA Patient Oriented 1 Pager - Print.pdf` — third-party marketing for a "seca mBCA" body-composition device, unrelated to the website
- `BOTOX Cosmetic Primary Logo Drug-Name White.png`, `BOTOX Cosmetic-Primary Logo Drug Name Black.png`, `JUVE_LOGO_PRIMARY_HORIZONTAL_K.png` — Allergan's own product trademarks (Botox/Juvéderm), not this clinic's brand identity; using them would fall under Allergan's own brand-usage rules, a separate question from this identity manual
- `Flyer - IMMUNITY IV INFUSION (1).png` — a near-duplicate of `Immunity Flyer.pdf`, same offer/content
- `Juvederm Collection Info Sheet.docx` — an internal staff reference on specific Juvéderm filler formulations (Ultra XC, Volbella, Voluma, etc.); useful clinical detail but the site currently describes fillers generically rather than by product line, so nothing was pulled from it yet
