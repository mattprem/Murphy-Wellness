# Murphy Wellness Website — Claude Project Context

## What this is
Static HTML/CSS/JS website for Murphy Wellness, a small single-provider rural primary care clinic in Peabody, Kansas. Run by Jeni Murphy, APRN. Supported on the backend by Premonition Health (premonition.health). No build step, no framework — files deploy directly to GoDaddy hosting.

## Clinic facts
- **Address:** 500 W 4th St, Peabody, KS 66866
- **Phone/Text:** (620) 992-6088
- **Fax:** (316) 867-6365
- **Email:** info@murphywellness.org
- **Hours:** Mon/Wed–Fri 10 AM–6 PM · Tue 3–9 PM · Sat by demand
- **Walk-ins:** Welcome. If Jeni is out on a visit, call ahead and she'll let you know when she's back.
- **Telehealth:** Available for all patients at the same rates as in-person visits.

## Care options
- **Membership** — $65/month adults, $25/month children (with adult member parent/guardian). Includes cash-price labs, radiology, and medications (including weight loss meds).
- **Insurance** — In-network: BCBS, Aetna, Cigna, United/UMR, Ambetter/Wellcare, Medicaid, Medicare.
- **Self-pay** — $65 (<20 min), $130 (20–40 min), $195 (41+ min). No membership required.
- **Employer partnerships** — Small businesses can get membership rates for employees/families. On-site workplace visits available on a limited basis.

## Non-member billing (important wording)
For non-members, outside services (labs, medications, imaging) are billed directly by the outside company — lab, pharmacy, or imaging center — at the rates those companies set, through insurance or otherwise. Membership is required to access cash-price discounts.

## Site pages
| File | Purpose |
|------|---------|
| `index.html` | Home — hero, Jeni intro, microneedling spotlight, employer partnerships, chips, CTA |
| `membership.html` | Membership detail, cash-price benefits, FAQ |
| `pricing.html` | Three care paths overview, insurance detail, self-pay table |
| `microneedling.html` | Microneedling service page — pricing, what to expect, CTA |
| `meet-jeni.html` | Provider bio |
| `faq.html` | FAQ accordion with FAQPage JSON-LD |
| `contact.html` | Contact form, address, hours, clinic image |
| `patient-portal.html` | Links to patient portal and forms |
| `privacy-policy.html` | HIPAA privacy policy |
| `thank-you.html` | Post-form submission confirmation |
| `primary-care.html` | Redirect → index.html (merged) |
| `contact-handler.php` | Server-side form handler |

## Assets
- `assets/css/styles.css` — all styles, no preprocessor
- `assets/js/site.js` — nav toggle, scroll reveal, footer year
- `assets/img/murphy-wellness-logo.jpg` — clinic logo
- `assets/img/jeni-murphy.jpg` — Jeni's photo (object-position: center 20% for correct face crop)
- `assets/img/microneedling-hero.png` — hero image for microneedling page
- `assets/img/Stylized clinic.png` — exterior clinic illustration (used on contact page)
- `assets/img/premonition-health-logo.png` — used in footer credit

## Design system (CSS)
- **Colors:** `--color-primary: #5f3a78` · `--color-secondary: #7c5aa6` · `--color-lavender: #cdb9e8` · `--color-highlight: #f3ecfa`
- **Fonts:** `Fraunces` (headings, weight 600) · `Source Sans 3` (body, 400/600/700)
- **Key layout classes:** `.container` · `.section` / `.section.alt` / `.section.tight` · `.grid-2` / `.grid-3` · `.split-panel` · `.hero-shell`
- **Component classes:** `.section-panel` · `.photo-panel.has-image` · `.visual-stack` / `.visual-card` · `.eyebrow` · `.check-list` · `.chip-wrap` / `.chip` · `.cta-band` · `.notice` · `.card.featured-card`
- `.site-header .brand-logo` is `display:none` — logo lives in the home page hero, not the header
- Hero columns use `align-items:stretch` inline on `index.html` to equalize height (global CSS uses `align-items:center`)

## SEO / structured data conventions
- Every page has: `<link rel="canonical">`, `<meta name="referrer" content="strict-origin-when-cross-origin">`, full Open Graph tags
- `index.html` and `contact.html`: MedicalClinic JSON-LD with full address, hours, availableService, medicalSpecialty
- `faq.html`: FAQPage JSON-LD (8 questions covering membership, cost, insurance, self-pay, telehealth, after-work hours, cash-price labs, walk-ins)
- `pricing.html`: FAQPage JSON-LD for pricing questions
- `microneedling.html`: MedicalClinic JSON-LD + service details
- All `target="_blank"` links use `rel="noopener noreferrer"`
- All below-fold images use `loading="lazy"`

## External links
- **Patient blog:** https://premonition.health/blog/ — Murphy Wellness + Premonition Health partnership; plain-language health articles
- **Google Maps:** https://maps.google.com/?q=500+W+4th+St+Peabody+KS+66866
- **Patient portal:** linked from patient-portal.html

## Deployment
Files deploy directly to GoDaddy shared hosting. No CI/CD. Upload changed files via FTP or GoDaddy file manager. The `robots.txt` and `sitemap.xml` are present and should be kept up to date when pages are added or removed.

## Key decisions and conventions
- No comments in HTML/CSS unless the reason is non-obvious
- No JavaScript framework — keep it vanilla
- Inline styles are acceptable for one-off layout adjustments (e.g., `style="object-position:center 20%"`) rather than adding single-use CSS classes
- Microneedling page uses a `<style>` block in `<head>` for page-specific styles rather than polluting the global stylesheet
- `primary-care.html` is kept as a meta-refresh redirect (not deleted) to preserve any inbound links
