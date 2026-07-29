# PM Follow-Ups — Rebrand Implementation

Notes for Katherine (PM) after applying the official brand identity to the live site. Full source analysis is in `BRAND_GUIDELINES.md`.

## Applied to the site (no action needed)

- Official color palette (Verde Bosque, Blanco Almendra, Beige Arena, Durazno Claro, Terracota, Rosa Malva) wired into `assets/css/style.css`, with Terracota used for CTA buttons per the brand guide's role assignment.
- Typography switched sitewide from Cormorant Garamond/Manrope to DM Sans (Regular/Medium/Italic), matching the manual's "no serif in the system" rule.
- Real logo (`assets/brand/logo/`) swapped in for the text wordmark in every nav and footer.
- Real NAP data applied sitewide: **925 NE 30 Terrace, Suite 316, Homestead, FL 33033** / **(305) 245-8787**, replacing the placeholder address and phone number.
- "A service of Davina Medical Care, P.A." added to the footer per the parent-brand relationship in the manual.
- "Glow In & Glow Out" adopted as the site's organizing framework: Treatments and Services are now split into **Glow Out** (Botox, fillers, lip injections, PRP, medical skincare, laser) and **Glow In** (NAD/Immunity/Get Up and Go IV therapy, weight loss, sexual wellness), and the Home page About section now introduces the concept directly.
- Real IV therapy menu applied (replacing the generic "IV Therapy" placeholder): **NAD IV Therapy**, **Immunity IV Therapy** ($150 per the Immunity flyer), and **Get Up and Go IV Therapy**.
- **Dermal Fillers replaced with the real JUVÉDERM® collection** (from `Juvederm Collection Info Sheet.docx`, added to the Drive folder 2026-07-29): all 6 formulations — Ultra XC, Ultra Plus XC, Volbella XC, Vollure XC, Voluma XC, Volux XC — now shown on the Treatments page with their real best-for area and duration. Source notes saved to `assets/brand/reference-docs/juvederm-collection-info-sheet.md`.
- **Body Composition Analysis added as a new Glow In service** (from the seca mBCA flyers added to the Drive folder the same day), positioned alongside Weight Loss Programs on Treatments and Services. Source notes saved to `assets/brand/reference-docs/seca-mbca-body-composition.md`.
- **Official BOTOX® Cosmetic and JUVÉDERM® trademark logos added as trust badges**: the real manufacturer logos (pulled from the Drive folder) now appear next to the Botox and Dermal Fillers sections on Treatments, and as small icons on the matching Services cards, to reassure customers these are genuine FDA-approved products rather than substitutes. Logos are used unmodified/unscaled-in-aspect (full lockup, not cropped) per standard trademark-usage practice. Full-size source files kept in `assets/brand/logo/product-logos/`.

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
2. **Real photography — treatments.** Every treatment card and detail row across Home, Treatments, Services, and Gallery (~35+ image slots: Botox, Fillers, Lip Injections, PRP, IV Therapy, Medical Skincare, Laser, etc.) is a placeholder. Need real procedure/product photography, or licensed stock as a stand-in if real photography isn't ready.
3. **Real team roster — names, roles, photos.** `team.html` and the Home "Meet the Team" section currently list **8 placeholder people** (Dr. Davina Rey, Marisol Vega RN, Camille Ortiz, Ana Delgado, Sofia Marin PA, Elena Cruz, Renata Lima, Bianca Reyes) carried over from the original design template — **these are not confirmed to be real staff.** We need the actual provider/staff list (names, credentials, roles) plus headshots before this goes live, or the site will be presenting fictional people as the clinic's team.
4. **Before & After photography.** The dedicated Before & After page and the Home preview section have 6 before/after pairs, all placeholders. These need real (consented, HIPAA-compliant-release) patient photos or should be removed/replaced with stock until available.
5. **Gallery images.** 12 placeholder tiles across categories (Botox, Clinic, Fillers, IV Therapy, Skincare, Lips, Laser, PRP, Team, Wellness) — same story, no real photos yet.
6. **Instagram feed section.** Home page has a 6-post "@beautyatdavina" grid, currently all placeholders — either needs a live Instagram embed/API connection or real post images if the feed is static.
7. **Booking platform** — see open item #5 above; this also blocks the "Book a Consultation" CTAs from doing anything beyond opening the contact form. No platform, account, or API credentials have been provided yet.

**Bottom line for Katherine:** the site is structurally and content-wise ready (real services, real NAP, real pricing where available, real brand system) — what's blocking a true launch is photography, a confirmed real staff list, and the booking integration. Worth raising as a single, explicit ask rather than letting it surface page-by-page during review.
