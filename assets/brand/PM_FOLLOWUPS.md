# PM Follow-Ups — Rebrand Implementation

Notes for Katherine (PM) after applying the official brand identity to the live site. Full source analysis is in `BRAND_GUIDELINES.md`.

## Applied to the site (no action needed)

- Official color palette (Verde Bosque, Blanco Almendra, Beige Arena, Durazno Claro, Terracota, Rosa Malva) wired into `assets/css/style.css`, with Terracota used for CTA buttons per the brand guide's role assignment.
- Typography switched sitewide from Cormorant Garamond/Manrope to DM Sans (Regular/Medium/Italic), matching the manual's "no serif in the system" rule.
- Real logo (`assets/brand/logo/`) swapped in for the text wordmark in every nav and footer.
- Real NAP data applied sitewide: **925 NE 30 Terrace, Suite 316, Homestead, FL 33033** / **(305) 245-8787**, replacing the placeholder address and phone number.
- "A service of Davina Medical Care, P.A." added to the footer per the parent-brand relationship in the manual.
- "Glow In & Glow Out" adopted as the site's organizing framework: Treatments and Services are now split into **Glow Out** (Botox, JUVÉDERM fillers) and **Glow In** (NAD/Immunity/Get Up and Go IV therapy, weight loss, body composition analysis, sexual wellness), and the Home page About section now introduces the concept directly.
- Real IV therapy menu applied (replacing the generic "IV Therapy" placeholder): **NAD IV Therapy**, **Immunity IV Therapy** ($150 per the Immunity flyer), and **Get Up and Go IV Therapy**.
- **Dermal Fillers replaced with the real JUVÉDERM® collection** (from `Juvederm Collection Info Sheet.docx`, added to the Drive folder 2026-07-29): all 6 formulations — Ultra XC, Ultra Plus XC, Volbella XC, Vollure XC, Voluma XC, Volux XC — now shown on the Treatments page with their real best-for area and duration. Source notes saved to `assets/brand/reference-docs/juvederm-collection-info-sheet.md`.
- **Body Composition Analysis added as a new Glow In service** (from the seca mBCA flyers added to the Drive folder the same day), positioned alongside Weight Loss Programs on Treatments and Services. Source notes saved to `assets/brand/reference-docs/seca-mbca-body-composition.md`.
- **Official BOTOX® Cosmetic and JUVÉDERM® trademark logos added as trust badges**: the real manufacturer logos (pulled from the Drive folder) now appear next to the Botox and Dermal Fillers sections on Treatments, and as small icons on the matching Services cards, to reassure customers these are genuine FDA-approved products rather than substitutes. Logos are used unmodified/unscaled-in-aspect (full lockup, not cropped) per standard trademark-usage practice. Full-size source files kept in `assets/brand/logo/product-logos/`.

## Unverified services removed from the site (2026-07-29)

At the client's request, we audited every service/treatment mentioned anywhere on the site against the actual source documents provided (brand manual, IV therapy flyers, Juvéderm sheet, seca sheet) and **removed everything that had no backing in a real document** — these had been carried over from the original generic design template at project start and were never verified against Beauty at Davina's actual offerings:

- Lip Injections (as a standalone service — see note below)
- PRP Treatments / PRP Therapy
- Medical Skincare
- Laser Treatments / Laser Hair Removal / Laser Skin Treatments / Laser Resurfacing
- Chemical Peels
- Microneedling
- Hair Loss Treatments
- Vitamin Injections
- The generic, undifferentiated "IV Therapy" label (superseded by the real NAD/Immunity/Get Up and Go menu)

**The site's Treatments/Services pages, Home featured sections, footer links, contact-form dropdown, gallery, team bios, and Before & After page were all updated accordingly** — this was a large structural change, not a copy edit, and is reflected across all 8 pages. Two before/after pairs (previously "Lip Enhancement" and part of "Cheek Filler") were kept and relabeled to explicitly cite the specific JUVÉDERM formulation (Volbella XC, Voluma XC) since lips and cheeks are genuinely FDA-approved use areas for those confirmed products — this is different from treating "Lip Injections" as its own undocumented service line.

**What's left on the site now (all confirmed by a real document):** Botox, the 6-product JUVÉDERM filler collection, NAD/Immunity/Get Up and Go IV Therapy, Weight Loss Programs, Body Composition Analysis, and the Sexual Wellness pillar (placeholder copy, per item 1 below). If any of the removed items above are actually real services you offer, let us know and we'll add them back with real copy/pricing rather than the generic template descriptions that were there before.

## Update (2026-07-29): Lip Injections, PRP, Medical Skincare, Laser & Hair Loss restored

After the removal above, we got access to the **Tareas** board on your Monday.com project ("Mi equipo" workspace). Two task titles on that board explicitly scope work we'd just removed:

- "Subpágina: Inyectables (Botox, Rellenos, Labios, PRP)" — names Labios (Lip Injections) and PRP as in-scope subpages, alongside Botox and Fillers.
- "Subpágina: Cuidado Especializado (Láser, Piel Médico, Caída del Cabello)" — names Láser (Laser), Piel Médico (Medical Skincare) and Caída del Cabello (Hair Loss) as an in-scope category.

That's a real project-scope source we hadn't checked when we did the document audit — it just isn't a *brand* document, it's your own task breakdown. Since it directly contradicts "not part of the original scope," we restored these five items rather than leave the site inconsistent with the board:

- **Lip Injections** — back as its own row/card (Treatments, Services, Home featured + signature grids), $550 / 30 min.
- **PRP Treatments** — back as its own row/card, $700 / 45–60 min.
- **Medical Skincare** — back, copy trimmed to drop "peels" (Chemical Peels itself is still excluded, see below), from $180.
- **Laser Treatments** (hair removal + skin treatments) — back, from $120.
- **Hair Loss Treatments** — new section added (didn't exist before), since the board names "Caída del Cabello" as its own subpage; placeholder copy/pricing (from $400) since we have zero source material for this one — **needs real copy and pricing from you.**
- Team bios (Marisol Vega, Camille Ortiz), the Before & After page (3 pairs restored: Medical Skincare, Laser Resurfacing, PRP Hair Restoration), the contact-form dropdown, and footer links were all updated to match.

**Still true and unchanged:** Chemical Peels, Microneedling, and Vitamin Injections remain removed — nothing (not even the board) names these as their own line items, so they're staying out until you confirm otherwise. And **none of the five restored items above have real copy, photography, or confirmed pricing from any document** — the pricing/duration shown is carried over from the original design template, not verified. Please treat this as an open ask, same as Sexual Wellness in item 1 below.

## Open items — need your confirmation before we go further

1. **Sexual wellness — real services & pricing.** The brand guide names this as an official service pillar, but no menu, descriptions, or pricing exist in any asset we've received. We've added a generic, non-explicit placeholder card/row ("Confidential, physician-led care for intimacy and vitality — discussed one-on-one during a private consultation") on both the Services and Treatments pages so the pillar isn't visibly missing, but this needs real copy and pricing from you/the clinical team before launch.
2. **Juvéderm per-product pricing** — the info sheet gives no prices per formulation. We kept the existing single "from $650" figure at the top of the Dermal Fillers section and added a note that "pricing varies by product and treatment area, confirmed during your consultation." Let us know if you'd rather list per-product starting prices.
3. **Body Composition Analysis pricing** — neither seca flyer includes a price; currently shown as "Consult." Let us know if there's a set price (e.g., a standalone fee or bundled with weight-loss programs).
4. **Trademark logo usage sign-off** — we went ahead and added the Botox Cosmetic and Juvéderm logos as trust badges per your direction. Please have your legal/marketing contact double-check this against Allergan's official brand-usage guidelines (sizing, clear-space, required registration marks) before launch, since we're applying our own best judgment on placement rather than a documented usage guide.
5. **Booking platform integration** (e.g., Square Appointments) — contract references this; not started pending confirmation of which system the clinic actually uses.
6. **Bilingual (Spanish) site support** — contract references this; explicitly deferred, not started.
7. **Domain** — site currently references the placeholder `www.beautyatdavina.com` in canonical tags, OG tags, and JSON-LD. The brand manual and marketing flyers reference `www.DavinaMedical.com`. Please confirm which domain is correct/final so we don't launch with the wrong one baked into SEO metadata.
8. **"Glow In & Glow Out" copy review** — this is new customer-facing language we introduced by extrapolating from the brand manual's internal creative platform. Please review the actual wording on Home, Services and Treatments before this goes live, in case the client has specific phrasing they want to keep consistent with their own marketing.
9. **Immunity IV Therapy price discrepancy** — a separate "Immunity IV Infusion" social/promo flyer shows a **"New Year Sale" price of $95** ("while supplies last, subject to availability"), versus the **$150** standing price shown on the site (from the earlier Immunity flyer PDF). We've deliberately left the site at $150 since the $95 reads as a limited-time promotional price, not a permanent one — flagging in case you want to run that $95 offer as a time-boxed banner/promo on the site rather than changing the base price.

## Missing assets — not yet provided, needed before launch

Nothing below has been confirmed as "in progress" or "coming" — these are open asks, not scheduled deliverables. Everything we've received so far (logo files, brand manual, marketing flyers, the Juvéderm/seca docs) has been graphic/document assets, never raw photography, a real staff roster, or booking-system credentials.

1. **Real photography — clinic.** Every "clinic interior" spot on the site (About page hero, Home About section, Home hero lifestyle shot) is a gray placeholder box. Need actual interior/exterior shots of the Homestead location.
2. **Real photography — treatments.** Every treatment card and detail row across Home, Treatments, Services, and Gallery (Botox, the 6 JUVÉDERM formulations, NAD/Immunity/Get Up and Go IV Therapy, Weight Loss, Body Composition Analysis) is a placeholder. Need real procedure/product photography, or licensed stock as a stand-in if real photography isn't ready.
3. **Real team roster — names, roles, photos.** `team.html` and the Home "Meet the Team" section currently list **8 placeholder people** (Dr. Davina Rey, Marisol Vega RN, Camille Ortiz, Ana Delgado, Sofia Marin PA, Elena Cruz, Renata Lima, Bianca Reyes) carried over from the original design template — **these are not confirmed to be real staff.** We need the actual provider/staff list (names, credentials, roles) plus headshots before this goes live, or the site will be presenting fictional people as the clinic's team.
4. **Before & After photography.** The dedicated Before & After page and the Home preview section have 6 before/after pairs, all placeholders. These need real (consented, HIPAA-compliant-release) patient photos or should be removed/replaced with stock until available.
5. **Gallery images.** 8 placeholder tiles across categories (Botox, Fillers, IV Therapy, Body Composition, Clinic, Team, Wellness) — same story, no real photos yet.
6. **Instagram feed section.** Home page has a 6-post "@beautyatdavina" grid, currently all placeholders — either needs a live Instagram embed/API connection or real post images if the feed is static.
7. **Booking platform** — see open item #5 above; this also blocks the "Book a Consultation" CTAs from doing anything beyond opening the contact form. No platform, account, or API credentials have been provided yet.

**Bottom line for Katherine:** the site is structurally and content-wise ready (real services, real NAP, real pricing where available, real brand system) — what's blocking a true launch is photography, a confirmed real staff list, and the booking integration. Worth raising as a single, explicit ask rather than letting it surface page-by-page during review.
