# Murphy Wellness Website Overhaul

Prepared for a full redesign and rewrite of the Murphy Wellness website, grounded in the live site at [murphywellness.org](https://murphywellness.org/) as reviewed on March 11, 2026.

Assumptions used in this handoff:
- Murphy Wellness is a primary care clinic in Peabody, Kansas.
- Jeni Murphy is the lead clinician and the primary face of the brand.
- The clinic currently communicates membership-based care, insurance billing, limited Medicaid acceptance, telehealth/home-visit flexibility where appropriate, and community-rooted rural care.
- Updated pricing guidance provided for this project overrides the current site where needed, especially the new 3-path structure and the one-time self-pay range of `$65-$195`.

## A. Creative Direction Summary

The redesigned Murphy Wellness site should feel calm, modern, and grounded in real care rather than generic wellness marketing. The visual direction uses a purple-forward palette built from deep plum, softened violet, lavender, and clean white so the brand feels welcoming and distinctive without drifting into spa-like or overly decorative territory. The experience should immediately communicate: this is primary care, it is personal, it is easier to access than patients expect, and there are clear ways to pay for care.

The UX should move away from the current all-in-one, repetitive page into a confident multi-page structure with clear pathways for different patient needs. Instead of making patients read everything to understand basic pricing or access, the new site should help them self-sort quickly: membership, insurance-based visits, or one-time self-pay. Patients should feel relieved, informed, and respected within the first few seconds of use.

## B. Full Sitemap

### 1. Home
- Page purpose: Introduce Murphy Wellness clearly and guide visitors into the right care/payment path.
- User intent: "What is this clinic, who is it for, and how do I get started?"
- Primary CTA: `Choose Your Care Option`
- Secondary CTA: `Call or Text Murphy Wellness`
- Role in funnel: Awareness and first conversion step.

### 2. Primary Care
- Page purpose: Explain the clinic’s primary care model, scope, and care philosophy in practical terms.
- User intent: "Can this clinic help with the kind of care I need?"
- Primary CTA: `See Pricing Options`
- Secondary CTA: `Request an Appointment`
- Role in funnel: Consideration and fit confirmation.

### 3. Membership
- Page purpose: Explain the membership model, what it includes, and why it may be valuable.
- User intent: "Should I join the membership instead of using traditional visits?"
- Primary CTA: `Ask About Membership`
- Secondary CTA: `Compare Care Options`
- Role in funnel: High-intent conversion page for recurring care.

### 4. Insurance & Self-Pay Pricing
- Page purpose: Clarify how insurance billing works, how self-pay works, and when one-time visits make sense.
- User intent: "What will this cost me and which option fits my situation?"
- Primary CTA: `Contact Us About Pricing`
- Secondary CTA: `Request a Visit`
- Role in funnel: Decision page and friction reducer.

### 5. Meet Jeni
- Page purpose: Build trust by introducing Jeni as a capable, relational, community-centered provider.
- User intent: "Who will I be seeing and can I trust this practice?"
- Primary CTA: `Get in Touch`
- Secondary CTA: `Learn About Primary Care`
- Role in funnel: Trust-building page.

### 6. Contact
- Page purpose: Make it easy to call, text, message, locate, and request an appointment.
- User intent: "How do I actually reach the clinic?"
- Primary CTA: `Call or Text Now`
- Secondary CTA: `Send a Message`
- Role in funnel: Conversion endpoint.

### 7. FAQ
- Page purpose: Reduce uncertainty and answer common questions without cluttering main pages.
- User intent: "I have a practical question before I contact you."
- Primary CTA: `Still Have Questions? Contact Us`
- Secondary CTA: `Compare Care Options`
- Role in funnel: Objection handling.

### 8. Patient Forms / Patient Portal
- Page purpose: Give current or new patients quick access to forms, portal, and next steps.
- User intent: "I already know I’m a patient or I’ve been told to complete something."
- Primary CTA: `Open Patient Portal`
- Secondary CTA: `Call for Help`
- Role in funnel: Post-conversion utility.

### 9. Privacy Policy
- Page purpose: Meet legal and platform expectations.
- User intent: "How is my information handled?"
- Primary CTA: None
- Secondary CTA: `Contact Murphy Wellness`
- Role in funnel: Compliance support.

### Optional 10. Services
- Page purpose: List common care categories in a scannable format.
- User intent: "Do you treat this issue or provide this type of visit?"
- Primary CTA: `Request an Appointment`
- Secondary CTA: `See Pricing Options`
- Role in funnel: SEO and mid-funnel education.

### Optional 11. Rural / Community Care
- Page purpose: Expand the clinic’s local, access-focused story for rural patients.
- User intent: "Will this clinic work for the realities of where I live?"
- Primary CTA: `Talk With Our Clinic`
- Secondary CTA: `Meet Jeni`
- Role in funnel: Storytelling and differentiation.

## C. Global UX System

### Top Navigation
- Desktop nav order: `Home`, `Primary Care`, `Membership`, `Insurance & Self-Pay Pricing`, `Meet Jeni`, `FAQ`, `Contact`
- Utility links in header top row if desired: `Patient Portal`, `Forms`, `Call/Text`
- Right-aligned persistent CTA button: `Request Appointment`
- Keep total main nav items to 7 or fewer before utility overflow.

### Sticky Header Behavior
- Transparent over hero at page top.
- On scroll past 24px, header becomes solid white with subtle blur and thin lavender bottom border.
- Logo shrinks slightly from 44px height to 36px.
- Primary CTA remains visible on desktop at all times.

### Mobile Hamburger Nav Behavior
- Top bar includes logo left, `Call/Text` pill center-right if space allows, menu toggle right.
- Drawer opens from right, full-height, with large tap-safe links.
- Include first two actions in drawer: `Request Appointment` and `Call/Text`.
- Use body scroll lock while drawer is open.
- Close drawer on route change, overlay click, or Escape key.

### CTA Placement Rules
- Every page gets one primary CTA above the fold.
- Every major page gets a second CTA after the main explanatory content.
- Pages with pricing or trust content should end with a low-friction CTA such as `Call or Text With Questions`.
- Use one primary style per section. Avoid competing button clusters of 3+ equal weights.

### Footer Structure
- Column 1: Logo, one-sentence brand statement.
- Column 2: Primary navigation.
- Column 3: Contact details, address, phone, fax, email.
- Column 4: Patient actions, portal/forms/privacy.
- Bottom row: Copyright, privacy link, accessibility statement link if created.

### Internal Linking Strategy
- Home links into every key page with preview cards.
- Primary Care links to Membership and Insurance & Self-Pay Pricing.
- Membership page links to pricing comparison and Contact.
- Pricing page links to Membership, Contact, and FAQ.
- Meet Jeni links to Primary Care and Contact.
- FAQ links to exact conversion pages for each answer category.

### Section Spacing Rhythm
- Desktop section padding: `88px` top and bottom standard, `112px` for hero or major split sections.
- Tablet: `72px`
- Mobile: `56px`
- Use tighter `32px` internal spacing inside cards and content blocks.

### Content Width Rules
- Standard content max-width: `1160px`
- Reading text columns: `680px`
- Wide comparison or card areas: `1200px`
- Never allow long paragraphs to span full width.

### Layout Container Rules
- Use a 12-column desktop grid, 8-column tablet grid, 4-column mobile grid.
- Alternate between split layouts, card grids, and anchored text blocks so pages feel structured, not monotonous.
- Keep one clear focal point per section.

### Trust-Building Content Placement
- Put relational trust signals early: longer visits, easier access, local care, clear pricing.
- Put personal/provider trust signals mid-page: Jeni bio, care philosophy, community tie.
- Put practical trust signals late: insurance clarity, map, phone, FAQ, portal/forms.

### Card/Grid Systems
- Three-up cards for care pathways on desktop, stacked on mobile.
- Two-up split cards for values, benefits, and care differences.
- Comparison table desktop transforms into stacked comparison cards on mobile.

### Image Usage Rules
- Prefer authentic clinic, local, and provider photos over stock.
- Avoid overly staged hospital imagery or abstract wellness visuals.
- Use portrait headshots with soft neutral backgrounds.
- Use wide images only when they support locality, warmth, or real patient journey cues.

### Icon Usage Rules
- Use simple outlined icons with rounded corners and 1.75px stroke.
- Limit to functional communication: visit, phone, calendar, insurance, map pin, heart, chat.
- Avoid decorative medical icon clutter.

### Animation Rules
- Use short 180ms to 260ms transitions.
- Allow fade-up, soft reveal, and subtle lift only.
- Keep motion secondary to readability.
- Respect `prefers-reduced-motion`.

### Scroll Behavior
- Smooth scrolling only for on-page anchor jumps.
- Avoid scroll hijacking, sticky multi-step panels, or animated counters.

### Rules for Balancing Warmth With Clarity
- Lead with practical headlines, then add warmth in supporting copy.
- Keep paragraphs to 2-4 lines max on desktop.
- Use plain-language subheads instead of abstract values-only language.
- Use reassuring microcopy near forms and pricing.

### Rules for Helping Patients Choose Between Membership, Insurance, and Self-Pay
- Show the 3 options together on Home and Pricing pages.
- Label each option by best-fit use case, not only payment type.
- Use phrases like `Best for ongoing care`, `Best if you want to use insurance`, `Best if you need a one-time visit`.
- Include short decision helpers under each option.
- Keep the pricing range `$65-$195` visible wherever self-pay is mentioned.

## D. Full Page-by-Page Wireframes

### 1. Home

#### Section: Hero
- Purpose: Explain Murphy Wellness in 5 seconds and orient visitors fast.
- Layout recommendation: Two-column split; left text stack, right visual card cluster or calm clinic image.
- Content type: Headline, subhead, 2 CTAs, quick proof line.
- Ideal copy length: 1 headline, 2 short paragraphs max, 3 trust bullets.
- CTA recommendation: `Choose Your Care Option`, `Call or Text`
- Visual treatment notes: Soft plum gradient wash with floating white info cards for `Membership`, `Insurance`, `One-Time Visit`.
- Implementation notes: Keep hero text in 520-620px column; on mobile, place CTAs directly below subhead.

#### Section: Quick Value Proposition
- Purpose: Clarify what makes Murphy Wellness different.
- Layout recommendation: Three horizontal feature blocks.
- Content type: Short headline plus three concise benefit statements.
- Ideal copy length: 20-30 words per block.
- CTA recommendation: None inside section.
- Visual treatment notes: White cards on lavender-tinted background.
- Implementation notes: Use icons and limit to three proof points.

#### Section: 3 Ways to Get Care
- Purpose: Help patients self-sort immediately.
- Layout recommendation: Three equal cards with best-fit labels.
- Content type: Card title, short description, best-for line, mini CTA.
- Ideal copy length: 35-50 words per card.
- CTA recommendation: `Learn About Membership`, `Use Insurance`, `See Self-Pay Pricing`
- Visual treatment notes: Membership card slightly emphasized with plum border; all cards equal height.
- Implementation notes: Add `Most flexible for ongoing care` badge only if true.

#### Section: Why Patients Choose Murphy Wellness
- Purpose: State real benefits in plain language.
- Layout recommendation: Two-column list with six short reasons.
- Content type: Benefit bullets with micro-explanations.
- Ideal copy length: 8-14 words each plus one short sentence.
- CTA recommendation: `See How Care Works`
- Visual treatment notes: Alternating soft background band.
- Implementation notes: Use check icons or dot markers; avoid paragraph wall.

#### Section: Primary Care Snapshot
- Purpose: Preview the scope of care.
- Layout recommendation: Text left, services list right.
- Content type: Intro paragraph plus service chips.
- Ideal copy length: 70-100 words plus 8-12 chips.
- CTA recommendation: `Explore Primary Care`
- Visual treatment notes: Warm white panel with subtle photo strip.
- Implementation notes: Chip list can be reused on Primary Care page.

#### Section: Membership Snapshot
- Purpose: Introduce membership in a low-pressure way.
- Layout recommendation: Highlight card or split section.
- Content type: What membership includes, best-for list, one sentence on pricing philosophy.
- Ideal copy length: 100-130 words.
- CTA recommendation: `See Membership Details`
- Visual treatment notes: Plum-to-violet gradient card with white text and supportive badges.
- Implementation notes: Include one line clarifying that insurance can still matter depending on patient situation.

#### Section: Insurance & Self-Pay Snapshot
- Purpose: Reduce cost confusion fast.
- Layout recommendation: Two stacked cards or side-by-side cards.
- Content type: Insurance explanation, self-pay explanation, pricing range.
- Ideal copy length: 120-150 words total.
- CTA recommendation: `See Full Pricing Options`
- Visual treatment notes: One card white, one card pale mauve to distinguish paths.
- Implementation notes: Put `$65-$195 one-time visits` in large numeric styling.

#### Section: Meet Jeni Preview
- Purpose: Humanize the practice.
- Layout recommendation: Split section with headshot and short intro.
- Content type: Intro, short bio sentence, care philosophy sentence.
- Ideal copy length: 90-120 words.
- CTA recommendation: `Meet Jeni`
- Visual treatment notes: Soft portrait crop, dusty mauve accent bar.
- Implementation notes: Keep bio teaser concise to avoid duplicate long-form content.

#### Section: FAQ Preview
- Purpose: Address common uncertainty.
- Layout recommendation: 4-question accordion or two-column short list.
- Content type: Short answers with links.
- Ideal copy length: 20-40 words per answer.
- CTA recommendation: `View All FAQs`
- Visual treatment notes: Clean accordion cards.
- Implementation notes: Include one FAQ about self-pay and one about insurance.

#### Section: Final CTA
- Purpose: Convert visitors who are ready.
- Layout recommendation: Centered CTA band.
- Content type: Strong closing headline, one reassurance line, 2 buttons.
- Ideal copy length: 25-45 words.
- CTA recommendation: `Request an Appointment`, `Call or Text Now`
- Visual treatment notes: Deep plum background with soft lavender glow.
- Implementation notes: Include phone number directly in button or beside it.

### 2. Primary Care

#### Section: Hero
- Purpose: Define Murphy Wellness as practical primary care, not vague wellness.
- Layout recommendation: Left-aligned text with right-side image or checklist card.
- Content type: Headline, subhead, CTA pair.
- Ideal copy length: 1 short paragraph plus 4-item trust list.
- CTA recommendation: `See Pricing Options`, `Contact Us`
- Visual treatment notes: More clinical/clean than Home hero.
- Implementation notes: Use H1 focused on primary care in Peabody, KS.

#### Section: Who It’s For
- Purpose: Help visitors identify fit.
- Layout recommendation: Two-column cards by patient need.
- Content type: Personas/use cases.
- Ideal copy length: 5-6 cards at 25 words each.
- CTA recommendation: `Ask If We’re a Fit`
- Visual treatment notes: Compact cards with simple icons.
- Implementation notes: Include families, adults managing chronic conditions, patients wanting more time, rural patients needing easier access.

#### Section: What We Help With
- Purpose: Show concrete scope.
- Layout recommendation: Responsive grid.
- Content type: Service categories and common concerns.
- Ideal copy length: 8-12 categories, 6-10 words each.
- CTA recommendation: `Contact Us About Your Needs`
- Visual treatment notes: Chips or mini cards.
- Implementation notes: Keep compliant and broad; avoid overpromising.

#### Section: What Makes Care Different Here
- Purpose: Distinguish Murphy Wellness from rushed traditional care.
- Layout recommendation: Two-column text and stacked proof cards.
- Content type: Comparison-style explanation.
- Ideal copy length: 120-160 words.
- CTA recommendation: `Learn About Membership`
- Visual treatment notes: One side can include quote pullout.
- Implementation notes: Focus on longer visits, relationship continuity, easier communication.

#### Section: Longer Visits / Better Access
- Purpose: Expand the strongest differentiator.
- Layout recommendation: Split content with timeline or step cards.
- Content type: Short narrative and benefit list.
- Ideal copy length: 100-140 words.
- CTA recommendation: `Request an Appointment`
- Visual treatment notes: Time/access icons; quiet background.
- Implementation notes: Mention same-day or responsive access only if operationally accurate.

#### Section: Rural / Community-Centered Care
- Purpose: Reinforce local identity and accessibility.
- Layout recommendation: Full-width text band with supporting image.
- Content type: Short narrative.
- Ideal copy length: 90-120 words.
- CTA recommendation: `Meet Jeni`
- Visual treatment notes: Local photo or soft map abstraction.
- Implementation notes: Keep rooted, not sentimental.

#### Section: Flexible Access
- Purpose: Explain telehealth, phone, or home-visit flexibility where appropriate.
- Layout recommendation: Three mini cards.
- Content type: Care format options and brief qualifiers.
- Ideal copy length: 20-30 words each.
- CTA recommendation: `Ask About Visit Options`
- Visual treatment notes: Secondary accent background.
- Implementation notes: Add conditional language such as `when appropriate` and `based on patient needs`.

#### Section: CTA to Pricing / Contact
- Purpose: Move from education to action.
- Layout recommendation: Two CTA cards.
- Content type: Pricing path chooser plus contact prompt.
- Ideal copy length: 50-70 words each.
- CTA recommendation: `Compare Pricing Options`, `Call or Text Us`
- Visual treatment notes: High-contrast cards.
- Implementation notes: Reuse global conversion module.

### 3. Membership

#### Section: Hero
- Purpose: Frame membership as ongoing access, not a hard sell.
- Layout recommendation: Split hero with left copy and right key inclusion card.
- Content type: Headline, subhead, 3 quick benefits.
- Ideal copy length: 80-110 words.
- CTA recommendation: `Ask About Membership`, `Compare All Options`
- Visual treatment notes: Most brand-expressive page; plum and lavender layering.
- Implementation notes: Lead with fit: people who want ongoing relationship-based care.

#### Section: How Membership Works
- Purpose: Make the model easy to understand.
- Layout recommendation: 3-step horizontal or vertical process.
- Content type: Step cards.
- Ideal copy length: 20-30 words per step.
- CTA recommendation: `Talk With Our Clinic`
- Visual treatment notes: Numbered cards with rounded connectors.
- Implementation notes: Example steps: join, schedule, stay connected.

#### Section: What’s Included
- Purpose: Clarify value.
- Layout recommendation: Two-column checklist.
- Content type: Included care access and services.
- Ideal copy length: 8-10 checklist items.
- CTA recommendation: `See If Membership Fits`
- Visual treatment notes: White content block on tinted section.
- Implementation notes: Distinguish clinician services from outside costs like labs or imaging.

#### Section: Why Membership May Be a Good Fit
- Purpose: Help users self-select.
- Layout recommendation: Best-for cards.
- Content type: Patient scenarios.
- Ideal copy length: 4-6 cards at 20-35 words.
- CTA recommendation: `Contact Us About Membership`
- Visual treatment notes: Small persona-style cards.
- Implementation notes: Include adults without nearby access, people wanting more direct communication, families wanting continuity.

#### Section: Cost Explanation
- Purpose: Explain membership pricing in plain language.
- Layout recommendation: Pricing card plus explainer column.
- Content type: Simple pricing, what it covers, what it doesn’t.
- Ideal copy length: 120-160 words.
- CTA recommendation: `Ask a Pricing Question`
- Visual treatment notes: Emphasize transparency over sales.
- Implementation notes: If exact membership fees remain current from the live site, use:
  - Adults: `$65/month`
  - Children with parent membership: `$25/month`
  - Include note that insurance billing may still apply depending on patient coverage and services.

#### Section: FAQ
- Purpose: Handle recurring objections.
- Layout recommendation: Accordion.
- Content type: 5-7 membership questions.
- Ideal copy length: 25-50 words per answer.
- CTA recommendation: `Still Not Sure? Contact Us`
- Visual treatment notes: Compact accordion cards.
- Implementation notes: Include cancellation, insurance interaction, visit frequency, labs/medications.

#### Section: CTA
- Purpose: Convert.
- Layout recommendation: Centered closing panel.
- Content type: Headline, microcopy, two CTAs.
- Ideal copy length: 25-40 words.
- CTA recommendation: `Ask About Membership`, `Call or Text`
- Visual treatment notes: Deep plum background.
- Implementation notes: Include line `We’re happy to help you decide whether membership makes sense for you.`

### 4. Insurance & Self-Pay Pricing

#### Section: Hero
- Purpose: Remove cost confusion fast.
- Layout recommendation: Left text, right pricing summary card.
- Content type: Headline, short explainer, direct pricing callout.
- Ideal copy length: 80-110 words.
- CTA recommendation: `Contact Us About Pricing`, `Request a Visit`
- Visual treatment notes: Large numeric emphasis for `$65-$195`.
- Implementation notes: Put decision support above the fold.

#### Section: Insurance Billing Explained
- Purpose: Clarify what happens when patients want to use insurance.
- Layout recommendation: Split content with bullet list.
- Content type: Practical explanation.
- Ideal copy length: 120-150 words.
- CTA recommendation: `Call With Insurance Questions`
- Visual treatment notes: Clean white background.
- Implementation notes: Avoid payer-specific promises unless verified operationally.

#### Section: Self-Pay Explained
- Purpose: Clarify non-membership self-pay option.
- Layout recommendation: Short text with support cards.
- Content type: Explanation and best-use cases.
- Ideal copy length: 100-130 words.
- CTA recommendation: `Ask About Self-Pay Visits`
- Visual treatment notes: Light mauve band.
- Implementation notes: Explain that self-pay works for people without insurance who do not want a membership.

#### Section: One-Time Visit Pricing Range
- Purpose: Make the new range memorable and easy to scan.
- Layout recommendation: One large price card with examples.
- Content type: Range, explanation, not-all-visits-cost-the-same note.
- Ideal copy length: 70-110 words.
- CTA recommendation: `Contact Us for Visit Estimate`
- Visual treatment notes: Big numerals, soft gradient background.
- Implementation notes: Add line `Most one-time visits fall between $65 and $195 depending on visit type and complexity.`

#### Section: Who Each Option Is Best For
- Purpose: Help self-selection.
- Layout recommendation: Three cards.
- Content type: Best-for summaries.
- Ideal copy length: 35-55 words each.
- CTA recommendation: `Compare Options`
- Visual treatment notes: Color-coded but consistent cards.
- Implementation notes: Should mirror Home care-path cards for consistency.

#### Section: Comparison Table
- Purpose: Provide side-by-side clarity.
- Layout recommendation: Desktop table, mobile cards.
- Content type: Feature comparison.
- Ideal copy length: 7-9 rows.
- CTA recommendation: `Talk Through Your Options`
- Visual treatment notes: Sticky left labels on desktop if custom-coded.
- Implementation notes: Compare:
  - Best for
  - How you pay
  - Ongoing access
  - Office visits
  - Communication/access
  - Insurance involvement
  - Good fit for uninsured patients
  - Ideal use case

#### Section: FAQ
- Purpose: Resolve friction.
- Layout recommendation: Accordion by billing theme.
- Content type: 6-8 questions.
- Ideal copy length: 25-55 words per answer.
- CTA recommendation: `Still Have Questions? Contact Us`
- Visual treatment notes: Standard FAQ style.
- Implementation notes: Include whether one-time visits require membership, whether insurance is required, and whether the clinic can help decide.

#### Section: CTA
- Purpose: Convert uncertain users.
- Layout recommendation: Two-button band.
- Content type: Reassurance plus direct action.
- Ideal copy length: 20-35 words.
- CTA recommendation: `Call or Text Us`, `Request a Visit`
- Visual treatment notes: High-contrast band.
- Implementation notes: Phrase around clarity, not pressure.

### 5. Meet Jeni

#### Section: Hero
- Purpose: Introduce Jeni with warmth and credibility.
- Layout recommendation: Large portrait plus left-aligned intro.
- Content type: Headline, short intro, credential line.
- Ideal copy length: 70-100 words.
- CTA recommendation: `Contact Murphy Wellness`
- Visual treatment notes: Clean portrait with soft mauve frame.
- Implementation notes: Include credentials exactly as confirmed by clinic branding.

#### Section: Intro
- Purpose: Human first impression.
- Layout recommendation: Simple text block.
- Content type: Short personal statement.
- Ideal copy length: 60-90 words.
- CTA recommendation: None.
- Visual treatment notes: Generous whitespace.
- Implementation notes: Keep authentic and grounded.

#### Section: Bio
- Purpose: Show experience and preparation.
- Layout recommendation: Two-column text and highlights.
- Content type: Bio summary and credential highlights.
- Ideal copy length: 140-180 words.
- CTA recommendation: `Request an Appointment`
- Visual treatment notes: Timeline or highlight chips if helpful.
- Implementation notes: Avoid overly long chronology.

#### Section: Care Approach
- Purpose: Clarify what patients can expect from her style of care.
- Layout recommendation: Three principle cards.
- Content type: Short statements with support copy.
- Ideal copy length: 25-40 words each.
- CTA recommendation: `Learn About Primary Care`
- Visual treatment notes: Light background and quote styling.
- Implementation notes: Focus on listening, relationship, practical access.

#### Section: Why Murphy Wellness Exists
- Purpose: Explain the clinic mission in a concrete way.
- Layout recommendation: Narrative text block with pull quote.
- Content type: Founding story.
- Ideal copy length: 100-140 words.
- CTA recommendation: `See Care Options`
- Visual treatment notes: Dusty mauve quote block.
- Implementation notes: Tie directly to access gaps and community need.

#### Section: Community / Rural Connection
- Purpose: Reinforce place-based trust.
- Layout recommendation: Text plus local image.
- Content type: Short narrative.
- Ideal copy length: 70-100 words.
- CTA recommendation: `Get in Touch`
- Visual treatment notes: Landscape or local street/clinic image.
- Implementation notes: Avoid over-romanticizing rural life; emphasize practical access.

#### Section: CTA
- Purpose: Convert trust into contact.
- Layout recommendation: Centered CTA panel.
- Content type: Reassuring invitation.
- Ideal copy length: 20-30 words.
- CTA recommendation: `Call or Text Murphy Wellness`, `Request an Appointment`
- Visual treatment notes: Deep plum background.
- Implementation notes: Keep tone personal but professional.

### 6. Contact

#### Section: Hero / Intro
- Purpose: Make reaching the clinic feel easy and safe.
- Layout recommendation: Intro left, contact quick-actions right.
- Content type: Headline, reassuring copy, action buttons.
- Ideal copy length: 50-80 words.
- CTA recommendation: `Call`, `Text`, `Send a Message`
- Visual treatment notes: Practical utility-first design.
- Implementation notes: On mobile, quick-action buttons appear first.

#### Section: Call / Text Options
- Purpose: Present the fastest path to contact.
- Layout recommendation: Three action cards.
- Content type: Call, text, appointment request.
- Ideal copy length: 10-25 words each.
- CTA recommendation: Direct action links.
- Visual treatment notes: High-contrast action cards.
- Implementation notes: Use tap-safe tel/sms links.

#### Section: Contact Form
- Purpose: Capture non-urgent inquiries.
- Layout recommendation: Single-column form with support text.
- Content type: Name, phone, email, message, optional preferred contact method.
- Ideal copy length: Minimal.
- CTA recommendation: `Send Message`
- Visual treatment notes: Calm white form card.
- Implementation notes: Use explicit note: `Please do not send urgent medical concerns through this form.`

#### Section: Address / Map
- Purpose: Help local patients find the clinic.
- Layout recommendation: Two-column map and address panel.
- Content type: Address, map embed or image link, directions button.
- Ideal copy length: Minimal.
- CTA recommendation: `Get Directions`
- Visual treatment notes: Rounded map container.
- Implementation notes: If builder limits map styling, use static image plus link to Google Maps.

#### Section: Office Information
- Purpose: Present practical details.
- Layout recommendation: Detail cards.
- Content type: Hours, fax, email, visit notes, insurance note if needed.
- Ideal copy length: Short labels and values.
- CTA recommendation: `Call With Questions`
- Visual treatment notes: Utility cards.
- Implementation notes: Avoid burying hours in footer only.

#### Section: Appointment Request CTA
- Purpose: Separate direct booking intent from general contact.
- Layout recommendation: Highlight bar or card.
- Content type: Short explanation and button.
- Ideal copy length: 20-30 words.
- CTA recommendation: `Request an Appointment`
- Visual treatment notes: Accent background.
- Implementation notes: If no scheduling tool exists, route to form or call/text.

#### Section: Reassurance Copy
- Purpose: Reduce friction.
- Layout recommendation: Small text block near footer.
- Content type: 2-3 reassurance bullets.
- Ideal copy length: 25-50 words total.
- CTA recommendation: None.
- Visual treatment notes: Muted supportive styling.
- Implementation notes: Mention that the clinic can help patients understand which visit/payment option fits.

### 7. FAQ

#### Section: Hero
- Purpose: Set expectations.
- Layout recommendation: Standard hero.
- Content type: Headline, brief intro.
- Ideal copy length: 40-60 words.
- CTA recommendation: `Contact Us`
- Visual treatment notes: Light intro band.
- Implementation notes: Keep concise.

#### Section: Membership
- Purpose: Answer recurring membership questions.
- Layout recommendation: Accordion group.
- Content type: 4-6 Q&As.
- Ideal copy length: 25-55 words each.
- CTA recommendation: `Ask About Membership`
- Visual treatment notes: Group heading and divider.
- Implementation notes: Include cost, cancellation, insurance, included care.

#### Section: Insurance
- Purpose: Clarify insurance use.
- Layout recommendation: Accordion group.
- Content type: 3-5 Q&As.
- Ideal copy length: 25-55 words each.
- CTA recommendation: `Call With Insurance Questions`
- Visual treatment notes: Standard accordions.
- Implementation notes: Include in-network language carefully.

#### Section: Self-Pay
- Purpose: Explain one-time visits.
- Layout recommendation: Accordion group.
- Content type: 3-5 Q&As.
- Ideal copy length: 25-55 words each.
- CTA recommendation: `Ask About Self-Pay Visits`
- Visual treatment notes: Pricing-related accent color.
- Implementation notes: Mention `$65-$195`.

#### Section: Appointments
- Purpose: Remove process friction.
- Layout recommendation: Accordion group.
- Content type: 3-4 Q&As.
- Ideal copy length: 20-45 words each.
- CTA recommendation: `Request an Appointment`
- Visual treatment notes: Consistent.
- Implementation notes: Include what to bring, new patient flow.

#### Section: Communication
- Purpose: Explain contact expectations.
- Layout recommendation: Accordion group.
- Content type: 2-4 Q&As.
- Ideal copy length: 20-45 words each.
- CTA recommendation: `Call or Text`
- Visual treatment notes: Consistent.
- Implementation notes: Clarify non-urgent vs urgent communication.

#### Section: Logistics
- Purpose: Cover location, forms, portal, and general operations.
- Layout recommendation: Accordion group.
- Content type: 3-4 Q&As.
- Ideal copy length: 20-45 words each.
- CTA recommendation: `Go to Patient Portal`
- Visual treatment notes: Consistent.
- Implementation notes: Link out to forms/portal page where appropriate.

### 8. Patient Forms / Patient Portal

#### Section: Hero
- Purpose: Direct patients quickly.
- Layout recommendation: Simple centered utility page.
- Content type: Headline, 1-sentence explanation, 2 buttons.
- Ideal copy length: 25-40 words.
- CTA recommendation: `Open Patient Portal`, `Download Forms`
- Visual treatment notes: Simple, practical, low-friction.
- Implementation notes: Keep this page brief.

#### Section: What This Page Is For
- Purpose: Prevent confusion.
- Layout recommendation: Two cards for new and current patients.
- Content type: Who should use portal/forms.
- Ideal copy length: 30-45 words each.
- CTA recommendation: Same as above.
- Visual treatment notes: Utility cards.
- Implementation notes: Use direct action labels.

#### Section: Support Fallback
- Purpose: Help patients who are stuck.
- Layout recommendation: Callout box.
- Content type: Contact fallback.
- Ideal copy length: 20-30 words.
- CTA recommendation: `Call for Help`
- Visual treatment notes: Soft highlight box.
- Implementation notes: Put phone number inline.

### 9. Privacy Policy

#### Implementation Recommendation Notes Only
- Use a standalone legal template reviewed by the clinic or counsel.
- Cover contact form submissions, analytics, cookies, embedded maps, patient portal/vendor handoff, and reCAPTCHA if used.
- Do not place HIPAA promises in casual marketing language unless reviewed.
- Link from footer and forms.

## E. Full Rewritten Website Copy

### 1. Home

#### Hero
**H1:** Primary care that feels personal, clear, and easier to access.

**Body copy:**  
Murphy Wellness is a primary care clinic in Peabody, Kansas built around real relationships, longer visits, and practical access to care. Whether you want a membership, prefer to use insurance, or need a one-time self-pay visit, we make it easier to choose the option that fits you.

**Trust bullets:**
- Longer visits and relationship-based care
- Options for membership, insurance, or one-time self-pay
- Community-centered care with rural patients in mind

**Primary CTA:** `Choose Your Care Option`  
**Secondary CTA:** `Call or Text (620) 992-6088`

#### Quick Value Proposition
**Headline:** Care built to be more personal and more usable.

**Block 1 title:** More time  
You should not feel rushed through your primary care.

**Block 2 title:** More clarity  
We explain your care and your options in plain language.

**Block 3 title:** More access  
We work to make care easier to reach and easier to navigate.

#### 3 Ways to Get Care
**Headline:** Choose the care path that fits you.

**Card 1 title:** Membership  
Best for patients who want ongoing primary care, easier access, and a stronger long-term care relationship.  
**CTA:** `Learn About Membership`

**Card 2 title:** Insurance-Based Visits  
Best for patients who want to use traditional insurance billing for primary care visits.  
**CTA:** `Use Insurance`

**Card 3 title:** One-Time Self-Pay Visits  
Best for patients without insurance, or for those who want a one-time visit without joining a membership. Visits typically range from **$65 to $195**.  
**CTA:** `See Self-Pay Pricing`

#### Why Patients Choose Murphy Wellness
**Headline:** Why patients choose Murphy Wellness

- **Longer visits:** More time to talk through what is going on.
- **Relationship-based care:** You are known here, not rushed through.
- **Clear options:** Membership, insurance, and self-pay are all explained simply.
- **Local access:** Care that makes sense for Peabody and surrounding communities.
- **Flexible communication:** Easier access when appropriate and available.
- **Upfront pricing:** Fewer surprises and more straightforward decisions.

#### Primary Care Snapshot
**Headline:** Everyday primary care, built around real life.

**Body copy:**  
Murphy Wellness provides primary care for adults, families, and patients who want a more connected care experience. We help with preventive care, routine visits, chronic condition management, medication follow-up, and everyday health concerns that need thoughtful attention.

**Service chips:**  
Annual wellness visits, sick visits, chronic condition follow-up, medication management, preventive care, family care, women’s health support, health planning, care coordination, practical follow-up

**CTA:** `Explore Primary Care`

#### Membership Snapshot
**Headline:** A simpler way to stay connected to your care.

**Body copy:**  
For many patients, membership offers the easiest path to ongoing care. It is designed for people who want longer visits, a stronger care relationship, and more direct access to their clinic over time. It is especially helpful if you value continuity, convenience, and clear expectations.

**CTA:** `See Membership Details`

#### Insurance & Self-Pay Snapshot
**Headline:** Prefer insurance or need one-time pricing?

**Body copy:**  
Murphy Wellness also offers traditional insurance billing and one-time self-pay visits. If you want to use insurance for your visit, we can help you understand that path. If you do not have insurance and do not want a membership, one-time self-pay visits are available, typically ranging from **$65 to $195** depending on the visit.

**CTA:** `See Full Pricing Options`

#### Meet Jeni Preview
**Headline:** Meet Jeni Murphy

**Body copy:**  
Jeni Murphy built Murphy Wellness around the kind of care many patients feel they have been missing: time to talk, practical support, and a real relationship with the person providing their primary care. Her work is rooted in both clinical experience and a strong commitment to rural community access.

**CTA:** `Meet Jeni`

#### FAQ Preview
**Headline:** Common questions

**Q:** Do I have to join the membership to become a patient?  
**A:** No. Murphy Wellness offers membership, insurance-based visits, and one-time self-pay visits.

**Q:** Can I use insurance here?  
**A:** Yes. Traditional insurance billing is available for many patients.

**Q:** What if I do not have insurance?  
**A:** One-time self-pay visits are available, typically ranging from $65 to $195.

**Q:** How do I know which option fits me?  
**A:** Contact the clinic and we can help you choose the best fit for your needs.

**CTA:** `View All FAQs`

#### Final CTA
**Headline:** Ready to take the next step?

**Body copy:**  
We are happy to help you understand your options and get started with care.

**Primary CTA:** `Request an Appointment`  
**Secondary CTA:** `Call or Text Now`

### 2. Primary Care

#### Hero
**H1:** Primary care designed around people, not rushed visits.

**Body copy:**  
Murphy Wellness offers primary care with longer visits, clearer communication, and a more personal care relationship. We serve patients in Peabody and surrounding communities who want care that feels more connected, practical, and easier to access.

**CTA:** `See Pricing Options`  
**Secondary CTA:** `Contact Us`

#### Who It’s For
**Headline:** Murphy Wellness may be a good fit if you are looking for:

- A primary care clinic that takes more time with you
- Ongoing support for routine and chronic health needs
- Easier access to care in a rural community setting
- A provider who values relationships and continuity
- Clear options for membership, insurance, or self-pay

#### What We Help With
**Headline:** Common reasons patients come to Murphy Wellness

- Preventive visits
- Routine primary care
- Sick visits
- Chronic condition follow-up
- Blood pressure and diabetes management
- Medication check-ins
- Women’s health support
- Family care needs
- Health questions that need time and attention

#### What Makes Care Different Here
**Headline:** What makes Murphy Wellness different

**Body copy:**  
Many patients are used to short visits, long waits, and feeling like they have to fit their concerns into a rushed appointment. Murphy Wellness is built differently. The focus is on relationship-based care, thoughtful follow-up, and practical access so patients can feel heard, understood, and better supported over time.

#### Longer Visits / Better Access
**Headline:** More time. Better conversations. A stronger care relationship.

**Body copy:**  
Longer visits create room for better questions, clearer explanations, and more personalized care. That matters whether you are managing an ongoing condition, talking through new concerns, or simply wanting a provider who knows your health story.

#### Rural / Community-Centered Care
**Headline:** Care shaped by real community needs

**Body copy:**  
Murphy Wellness is rooted in the realities of rural care. Access matters. Convenience matters. Being known by your clinic matters. This practice is designed to serve patients who want high-quality primary care close to home, with a more personal and community-centered feel.

#### Flexible Access
**Headline:** Flexible care options when appropriate

**Body copy:**  
Depending on the situation and what is clinically appropriate, Murphy Wellness may offer flexible care options that make it easier for patients to stay connected without unnecessary barriers. Contact the clinic to ask what visit formats may be available for your needs.

#### CTA
**Headline:** Want to understand your options?

**Body copy:**  
Compare membership, insurance-based visits, and one-time self-pay pricing.

**Primary CTA:** `Compare Pricing Options`  
**Secondary CTA:** `Call or Text Us`

### 3. Membership

#### Hero
**H1:** Membership-based primary care for patients who want a closer care relationship.

**Body copy:**  
Murphy Wellness membership is designed for patients who want ongoing primary care with more continuity, more direct access, and fewer surprises. It is a simple way to build your care around relationship, time, and consistency.

**CTA:** `Ask About Membership`  
**Secondary CTA:** `Compare All Options`

#### How Membership Works
**Headline:** How membership works

**Step 1:** Join the membership  
Choose membership if you want ongoing, relationship-based primary care.

**Step 2:** Schedule and stay connected  
Use the clinic for routine care, follow-up, and ongoing health needs.

**Step 3:** Get more continuity over time  
Build care around a provider who knows you and your health history.

#### What’s Included
**Headline:** What membership is designed to provide

- Ongoing primary care support
- Longer visits when needed
- A stronger long-term care relationship
- More direct communication and follow-up
- Practical access for routine and recurring needs
- Clear expectations around care

**Microcopy:**  
Outside services such as labs, imaging, medications, or services billed separately may involve additional cost.

#### Why Membership May Be a Good Fit
**Headline:** Membership may be a good fit if you:

- Want a primary care home, not just a one-time visit
- Value having more time with your clinician
- Want easier access and continuity over time
- Prefer a more personal care experience
- Live locally and want a more connected clinic relationship

#### Cost Explanation
**Headline:** Membership pricing

**Body copy:**  
Current membership pricing is straightforward:

- **Adults (19+): $65/month**
- **Children with a parent membership: $25/month**

This monthly fee is designed to support your ongoing primary care relationship with Murphy Wellness. Depending on your insurance and visit type, insurance billing may still play a role in how some services are handled. If you are unsure whether membership or another option is the best fit, the clinic can help you decide.

**CTA:** `Ask a Pricing Question`

#### Membership FAQ
**Q:** Do I need insurance to join?  
**A:** No. Membership can be a good option for patients with or without insurance, depending on their situation.

**Q:** Is membership the only way to be seen?  
**A:** No. Murphy Wellness also offers insurance-based visits and one-time self-pay visits.

**Q:** What if I only need one visit?  
**A:** A one-time self-pay visit may make more sense than membership if you do not need ongoing care.

**Q:** Are labs and medications included?  
**A:** Some outside services may have separate costs. Contact the clinic for details based on your needs.

**Q:** How do I know if membership is worth it for me?  
**A:** If you want ongoing care, more continuity, and easier access over time, membership may be a strong fit.

#### CTA
**Headline:** Interested in membership but still have questions?

**Body copy:**  
We are happy to help you decide whether membership makes sense for your care needs.

**Primary CTA:** `Ask About Membership`  
**Secondary CTA:** `Call or Text`

### 4. Insurance & Self-Pay Pricing

#### Hero
**H1:** Clear pricing options for how you want to receive care.

**Body copy:**  
Murphy Wellness offers three ways to receive care: membership, traditional insurance billing, and one-time self-pay visits. If you do not have insurance and do not want a membership, one-time visits are available and typically range from **$65 to $195**.

**Primary CTA:** `Contact Us About Pricing`  
**Secondary CTA:** `Request a Visit`

#### Insurance Billing Explained
**Headline:** Want to use insurance?

**Body copy:**  
Murphy Wellness offers traditional insurance billing for patients who want to use their insurance for primary care visits. Coverage and patient responsibility can vary by plan, so the best next step is to contact the clinic if you have questions about how insurance may apply to your care.

#### Self-Pay Explained
**Headline:** Prefer self-pay instead?

**Body copy:**  
If you do not have insurance, or you do not want a membership, you can still schedule a one-time self-pay visit. This option is designed to give patients a straightforward way to receive care without committing to an ongoing membership.

#### One-Time Visit Pricing Range
**Headline:** One-time self-pay visits: **$65 to $195**

**Body copy:**  
Most one-time self-pay visits fall between **$65 and $195**, depending on the type of visit and the complexity involved. If you are not sure where your visit may fall, contact the clinic and we will help you understand what to expect.

#### Who Each Option Is Best For
**Headline:** Which option may fit you best?

**Membership:**  
Best for patients who want ongoing care, a stronger long-term relationship, and easier access over time.

**Insurance-Based Visits:**  
Best for patients who want to use traditional insurance billing for primary care visits.

**One-Time Self-Pay Visits:**  
Best for patients without insurance, or patients who want a one-time visit without joining a membership.

#### Comparison Table Copy
**Headline:** Compare your options

| Option | Best For | How You Pay | Ongoing Care | Insurance Involved | Good Fit For |
| --- | --- | --- | --- | --- | --- |
| Membership | Ongoing relationship-based care | Monthly membership fee | Yes | May still matter depending on services and coverage | Patients who want continuity and easier access |
| Insurance-Based Visits | Traditional primary care billing | Insurance plus any applicable patient responsibility | Usually visit-based | Yes | Patients who prefer standard insurance billing |
| One-Time Self-Pay | Single visits without membership | Upfront self-pay visit cost | Not designed for ongoing access | No | Uninsured patients or patients who want one visit |

#### Pricing FAQ
**Q:** Do I have to join the membership to be seen?  
**A:** No. One-time self-pay visits and insurance-based visits are also available.

**Q:** How much is a one-time self-pay visit?  
**A:** Most one-time visits range from $65 to $195, depending on the visit.

**Q:** Can I use insurance instead of paying cash?  
**A:** Yes. Traditional insurance billing is available for many patients.

**Q:** What if I do not know which option is best?  
**A:** Contact the clinic and we can help you understand which path may fit your needs.

**Q:** Is self-pay only for people without insurance?  
**A:** It is often most useful for people without insurance, but it can also help patients who prefer a one-time visit outside a membership model.

#### CTA
**Headline:** Still unsure which option fits?

**Body copy:**  
Call or text Murphy Wellness and we will help you sort it out.

**Primary CTA:** `Call or Text Us`  
**Secondary CTA:** `Request a Visit`

### 5. Meet Jeni

#### Hero
**H1:** Meet Jeni Murphy

**Body copy:**  
Murphy Wellness was built around Jeni Murphy’s commitment to more personal, relationship-based primary care. Her approach combines clinical experience, practical communication, and a strong belief that rural communities deserve better access to care.

**CTA:** `Contact Murphy Wellness`

#### Intro
**Headline:** Care starts with being known.

**Body copy:**  
Jeni believes primary care works best when patients feel heard, respected, and supported over time. Murphy Wellness was created to make more room for that kind of care.

#### Bio
**Headline:** A provider focused on thoughtful, community-centered care

**Body copy:**  
Jeni Murphy brings years of primary care experience to Murphy Wellness, with a focus on building real relationships and helping patients navigate care in a clear, practical way. Her goal is not simply to move patients through visits. It is to create a clinic where people can ask questions, feel understood, and receive care that fits their real lives.

#### Care Approach
**Headline:** What patients can expect from Jeni’s approach

**Card 1 title:** She listens first  
Care begins with understanding the full picture, not rushing to the next appointment.

**Card 2 title:** She values continuity  
Better care comes from knowing the patient over time.

**Card 3 title:** She keeps care practical  
Patients deserve clear guidance, realistic options, and straightforward communication.

#### Why Murphy Wellness Exists
**Headline:** Why Murphy Wellness was created

**Body copy:**  
Murphy Wellness exists because too many patients feel rushed, disconnected, or unsure where to turn for everyday primary care. The practice was built to offer a better experience: more time, clearer options, and a care relationship that feels local, personal, and dependable.

#### Community / Rural Connection
**Headline:** Rooted in community

**Body copy:**  
Murphy Wellness is shaped by the needs of rural patients and families. In communities like Peabody, convenient and trustworthy care matters. The clinic is designed to make that care more accessible and more personal, close to home.

#### CTA
**Headline:** Ready to connect with Murphy Wellness?

**Primary CTA:** `Call or Text Murphy Wellness`  
**Secondary CTA:** `Request an Appointment`

### 6. Contact

#### Hero / Intro
**H1:** Contact Murphy Wellness

**Body copy:**  
Questions about appointments, membership, insurance, or one-time self-pay visits? We are happy to help you understand your options and take the next step.

#### Call / Text Options
**Card 1 title:** Call  
Speak with the clinic directly.  
**CTA:** `Call (620) 992-6088`

**Card 2 title:** Text  
Reach out quickly with a non-urgent question.  
**CTA:** `Text the Clinic`

**Card 3 title:** Request an appointment  
Tell us what kind of visit you need and how to reach you.  
**CTA:** `Request an Appointment`

#### Contact Form
**Headline:** Send us a message

**Field labels:**
- Full Name
- Phone Number
- Email Address
- Preferred Contact Method
- Message

**Microcopy:**  
Please do not send urgent medical concerns through this form. If you are having a medical emergency, call 911.

**Button:** `Send Message`

#### Address / Map
**Headline:** Visit Murphy Wellness

**Address:**  
500 W 4th St  
Peabody, KS 66866

**Contact details:**  
Phone: (620) 992-6088  
Fax: (316) 867-6365  
Email: info@murphywellness.org

**CTA:** `Get Directions`

#### Office Information
**Headline:** Office information

**Body copy:**  
If you are new to Murphy Wellness and are unsure whether membership, insurance, or one-time self-pay is the best fit, contact us first. We are happy to walk you through your options.

#### Appointment Request CTA
**Headline:** Ready to request a visit?

**Body copy:**  
We will help you figure out the right next step.

**CTA:** `Request an Appointment`

#### Reassurance Copy
- We welcome questions before your first visit.
- We can help you understand which care option fits best.
- We aim to make the process clear and low-stress.

### 7. FAQ

#### Hero
**H1:** Frequently asked questions

**Body copy:**  
Answers to common questions about membership, insurance, self-pay visits, appointments, and how Murphy Wellness works.

#### Membership FAQ
**Q:** What is the membership option?  
**A:** Membership is designed for patients who want ongoing, relationship-based primary care with more continuity and easier access over time.

**Q:** How much does membership cost?  
**A:** Current membership pricing is $65/month for adults and $25/month for children with a parent membership.

**Q:** Is membership required?  
**A:** No. Murphy Wellness also offers insurance-based visits and one-time self-pay visits.

**Q:** Who is membership best for?  
**A:** It is often a strong fit for patients who want ongoing care, longer visits, and a more connected relationship with their clinic.

#### Insurance FAQ
**Q:** Can I use insurance at Murphy Wellness?  
**A:** Yes. Traditional insurance billing is available for many patients.

**Q:** Will you help me understand how my insurance applies?  
**A:** Yes. Contact the clinic and we can help explain your options as clearly as possible.

**Q:** Does insurance work the same for every patient?  
**A:** No. Coverage and patient responsibility depend on your plan and visit type.

#### Self-Pay FAQ
**Q:** Do you offer one-time visits?  
**A:** Yes. One-time self-pay visits are available for patients who do not want a membership.

**Q:** How much is a one-time self-pay visit?  
**A:** Most one-time visits range from $65 to $195, depending on the type of visit and the complexity involved.

**Q:** Is self-pay only for people without insurance?  
**A:** It is especially helpful for uninsured patients, but it may also work for patients who prefer a one-time self-pay option.

#### Appointments FAQ
**Q:** How do I request an appointment?  
**A:** You can call, text, or use the contact form to request a visit.

**Q:** What if I am not sure what kind of appointment I need?  
**A:** Reach out and we can help guide you to the best next step.

**Q:** Can new patients contact the clinic with questions first?  
**A:** Yes. Murphy Wellness welcomes questions before your first visit.

#### Communication FAQ
**Q:** Can I text the clinic?  
**A:** Yes, for non-urgent questions and communication when available.

**Q:** Should I use the website form for urgent issues?  
**A:** No. The website form is for non-urgent messages only.

#### Logistics FAQ
**Q:** Where is Murphy Wellness located?  
**A:** 500 W 4th St, Peabody, Kansas 66866.

**Q:** Do you have patient forms or a portal?  
**A:** Yes. Use the Patient Forms / Patient Portal page for quick access.

**Q:** What if I get stuck?  
**A:** Call the clinic and we will help you.

### 8. Patient Forms / Patient Portal

#### Hero
**H1:** Patient forms and portal access

**Body copy:**  
Use this page if you have been asked to complete forms, access your patient portal, or take the next step as a current or new patient.

**Primary CTA:** `Open Patient Portal`  
**Secondary CTA:** `Download Forms`

#### New Patient Card
**Headline:** New patient?

**Body copy:**  
Start here if you were asked to complete intake forms before your first visit.

#### Current Patient Card
**Headline:** Current patient?

**Body copy:**  
Use the portal for approved account access, forms, and follow-up tasks as directed by the clinic.

#### Support Fallback
**Headline:** Need help?

**Body copy:**  
Call Murphy Wellness and we will help you find the right form or portal link.

**CTA:** `Call for Help`

### 9. Privacy Policy

No marketing copy drafted here by request. Use reviewed legal copy and keep it linked from the footer, forms, and any patient data collection points.

## F. Mobile-Optimized Version

### Mobile Design System
- Breakpoints:
  - `0-639px`: mobile
  - `640-959px`: large mobile / small tablet
  - `960-1199px`: tablet / small desktop
  - `1200px+`: desktop
- Mobile section padding: `56px` top/bottom standard, `40px` for utility sections.
- Mobile type scale:
  - H1: `2.25rem / 1.1`
  - H2: `1.75rem / 1.15`
  - H3: `1.25rem / 1.25`
  - Body large: `1.0625rem / 1.65`
  - Body: `1rem / 1.65`
- Card padding: `20px`
- Grid gap: `16px`
- Button height: minimum `48px`, preferred `52px`
- Tap targets: minimum `44x44px`
- Drawer menu: full-height right-side drawer with overlay, visible close button, no tiny nested links.
- Mobile footer simplification: 2 compact stacks, essential nav first, contact second.

### Global Mobile UX Rules
- Keep one primary CTA visible in the hero without scrolling.
- Use stacked cards for pricing paths, benefits, and service categories.
- Convert long FAQ areas into grouped accordions.
- Shorten introductory copy by 20-30% versus desktop where needed.
- Avoid side-by-side columns below `640px`.
- Keep critical phone/text action within thumb reach near the bottom through a sticky CTA bar.
- Use reduced-motion defaults on lower-powered devices where possible.
- Prioritize fast-loading compressed images and system fallbacks for fonts.

### Sticky Mobile CTA Behavior
- Fixed bottom bar on key pages with two actions:
  - `Call/Text`
  - `Request Appointment`
- Height: `64px`
- Background: solid white with top border and light shadow.
- Hide on upward keyboard focus in forms if it blocks inputs.

### Image Cropping Guidance
- Use portrait crops for provider image at `4:5`.
- Use landscape clinic/community images at `16:10`.
- Keep faces centered with safe crop padding.
- Avoid text baked into images.

### Reduced-Motion Guidance
- Remove reveal animations on mobile when `prefers-reduced-motion` is active.
- Keep only color and opacity transitions under 120ms.
- Disable smooth scroll if reduced motion is requested.

### Mobile Form Simplification
- Keep form fields in one column.
- Remove unnecessary optional inputs.
- Use native input types: `tel`, `email`, `text`.
- Keep labels above fields; never rely on placeholders alone.
- Limit appointment request to 4-5 fields plus message.

### Page-by-Page Mobile Behavior

#### Home
- Hero stacks in this order: eyebrow, headline, short subhead, primary CTA, secondary CTA, care-path summary chips.
- Quick Value Proposition becomes three stacked cards.
- 3 Ways to Get Care remains three stacked cards with short body copy.
- Why Patients Choose becomes a single-column checklist.
- Primary Care Snapshot shortens service chip count to 6 visible chips plus `See more` if custom-coded.
- Membership Snapshot and Insurance & Self-Pay Snapshot remain separate cards.
- Meet Jeni Preview image moves above copy.
- FAQ Preview becomes accordion.
- Final CTA remains full-width with sticky bottom CTA active.
- Above the fold: H1, short explainer, primary CTA, call/text option.

#### Primary Care
- Hero uses headline, 2-sentence intro, one primary CTA, one text link CTA.
- Who It’s For becomes stacked fit cards.
- What We Help With becomes two-column chip grid if space allows; otherwise stacked chips.
- What Makes Care Different Here shortens to 3 bullets plus one paragraph.
- Longer Visits / Better Access becomes accordion or stacked cards.
- Rural / Community-Centered Care remains a simple text block with image beneath.
- Flexible Access becomes three stacked mini cards.
- Final CTA uses two stacked buttons.

#### Membership
- Hero uses concise fit-oriented headline and key inclusion card below.
- How Membership Works becomes vertical 3-step stack.
- What’s Included becomes checklist accordion if copy grows.
- Why Membership May Be a Good Fit becomes stacked scenario cards.
- Cost Explanation stays high on page; include pricing immediately under intro on mobile.
- FAQ remains accordions.
- Sticky CTA bar should appear after hero.

#### Insurance & Self-Pay Pricing
- Hero must show `$65-$195` within first screen.
- Insurance and Self-Pay sections become separate stacked cards.
- Comparison table converts to three comparison cards with repeated labels for readability.
- FAQ remains accordions.
- Use direct `Call With Pricing Questions` button after pricing range.

#### Meet Jeni
- Portrait image first, then H1, then intro.
- Bio shortened to 2 short paragraphs with `Read more` only if needed.
- Care Approach remains stacked 3-card section.
- Founding story stays as one concise block.
- CTA appears midway and at end.

#### Contact
- Quick actions appear before intro text: call, text, request appointment.
- Form appears before map on mobile.
- Office information becomes compact definition-list cards.
- Reassurance copy stays near form submit button.
- Sticky CTA can be disabled on this page to avoid conflict with the form.

#### FAQ
- Show category jump links at top as horizontal scroll pills.
- Each category stays collapsed until opened.
- Keep answers trimmed; move long details to related pages.

#### Patient Forms / Portal
- Keep entire page under two scroll screens.
- Portal CTA first, forms CTA second, help CTA third.

#### Privacy Policy
- Use simple text layout with large readable type and clear headings.

### Mobile Performance Considerations
- Preload only one hero image per page.
- Use WebP or AVIF where supported.
- Lazy-load below-the-fold images.
- Use SVG icons inline or as a sprite.
- Avoid large sliders, video backgrounds, or embedded feeds.

## G. Visual Design System

### 1. Color Palette
- Primary purple: `#5F3A78`
- Secondary purple: `#7C5AA6`
- Lavender accent: `#CDB9E8`
- Soft highlight color: `#F3ECFA`
- Page background: `#FBFAFD`
- Alternate section background: `#F4F0F8`
- Card background: `#FFFFFF`
- Border color: `#E3DAED`
- Heading color: `#2F223A`
- Body text color: `#4A4252`
- Muted text color: `#766D7F`
- Reassurance accent: `#DDEAD9`
- Optional blush accent: `#EACFD9`

### 2. Typography
- Recommended headings font: `"Fraunces", Georgia, serif`
- Recommended body font: `"Source Sans 3", "Segoe UI", sans-serif`
- H1: `clamp(2.75rem, 5vw, 4.5rem)`, weight `600`, line-height `1.02`
- H2: `clamp(2rem, 3.2vw, 3rem)`, weight `600`, line-height `1.08`
- H3: `1.5rem`, weight `600`, line-height `1.18`
- H4: `1.125rem`, weight `700`, line-height `1.3`
- Body large: `1.125rem`, weight `400`, line-height `1.7`
- Body standard: `1rem`, weight `400`, line-height `1.7`
- Small text: `0.9375rem`, weight `400`, line-height `1.55`
- Eyebrow text: `0.8125rem`, weight `700`, line-height `1.2`, letter spacing `0.12em`, uppercase
- Button text: `0.95rem`, weight `700`, line-height `1`
- Quote/testimonial text: `1.25rem`, weight `500`, line-height `1.5`

### 3. Component Styles
- Primary buttons: solid plum background, white text, 999px radius, 14px x 20px padding, hover lift and darken.
- Secondary buttons: transparent background, plum text, 1.5px lavender border, pale lavender hover fill.
- Text links: secondary purple with visible underline offset.
- Cards: white background, 24px radius, 1px soft border, subtle shadow.
- Pricing cards: 28px radius, stronger border, optional top badge, one lightly tinted featured card.
- Comparison table: lavender header row, white and near-white striped body rows, thin soft borders.
- FAQ accordions: white cards, 18px radius, generous tap padding, plus/minus icon.
- Forms: 52px input height, clear labels, plum focus ring, 140px minimum text area.
- Contact cards: large action buttons, icon + title + short explanation.
- Chips: rounded pills with soft lavender background and plum text.
- Images: 28px radius with soft shadow; avoid generic hard-edge imagery.

### 4. Spacing / Shape / Depth
- Radius scale:
  - Small: `14px`
  - Medium: `20px`
  - Large: `28px`
  - Pill: `999px`
- Shadows:
  - Low: `0 6px 18px rgba(61, 38, 80, 0.06)`
  - Mid: `0 12px 32px rgba(61, 38, 80, 0.08)`
- Hover transitions: `200ms ease`
- Section spacing:
  - Desktop: `88px`
  - Mobile: `56px`
- Grid gutters:
  - Desktop: `24px`
  - Mobile: `16px`
- Container widths:
  - Standard: `1160px`
  - Narrow text: `680px`
  - Wide compare: `1240px`
- Background layering rules:
  - Use gradients sparingly in heroes and CTA bands.
  - Use solid pale section backgrounds for information-heavy content.
  - Keep tables and forms on plain white or very pale tints for legibility.

## H. GoDaddy Build Plan

### Recommended Site Structure
- Use a real multi-page architecture.
- Core pages:
  - `/`
  - `/primary-care`
  - `/membership`
  - `/pricing`
  - `/meet-jeni`
  - `/contact`
  - `/faq`
  - `/patient-portal`
  - `/privacy-policy`

### Page Build Order
1. Global header, footer, typography, color tokens
2. Home
3. Pricing
4. Primary Care
5. Membership
6. Meet Jeni
7. Contact
8. FAQ
9. Patient Portal / Forms
10. Privacy Policy

### Reusable Section Strategy
- Build reusable modules for hero, CTA band, 3-card option grid, benefit checklist, FAQ accordion, comparison table/cards, contact action cards, and split image-text sections.
- Keep classes component-oriented so sections can be reused across pages.

### Header / Footer Implementation
- Header should be global and consistent across all pages.
- Footer should include brand line, navigation, contact details, patient links, and privacy link.

### How to Manage Editable Content Simply
- If using GoDaddy Website Builder:
  - Keep content in modular sections with clear titles for easy editing.
  - Use built-in page duplication for repeated layout patterns.
  - Maintain a separate source-of-truth content document for copy changes.
- If using custom HTML/CSS/JS:
  - Keep each page as a separate HTML file.
  - Store repeated header/footer snippets as includes only if the hosting setup supports preprocessing; otherwise update consistently using a shared partial workflow before upload.
  - Keep site settings in a small `site.js` or `site-config.json` if manually maintained.

### Static Pages vs Lightweight Modular Templates
- Best default for GoDaddy custom hosting: static multi-page HTML/CSS/JS.
- If there is server-side support and the team is comfortable, use lightweight includes or a simple static-site build step locally before deployment.
- Avoid heavyweight frameworks unless there is a clear maintenance owner.

### Form Setup Recommendations
- For GoDaddy Website Builder:
  - Use native form block tied to clinic email.
  - Enable spam protection and confirmation messaging.
  - Use required fields only for name, preferred contact method, and message.
- For custom HTML:
  - Use a form provider or server-side handler compatible with GoDaddy hosting.
  - Redirect to a custom thank-you state or inline confirmation.
  - Add hidden honeypot field and server-side validation.

### FAQ Setup
- Use accordion blocks grouped by category.
- On GoDaddy builder, create separate accordion sections per category.
- On custom build, use semantic `button` plus content region with ARIA.

### Pricing Table Setup
- Use one decision-summary module near top, one comparison table on desktop, and one stacked card alternative on mobile.
- Keep one-time self-pay pricing range visible above the table.

### Comparison Module Setup
- Use rows for `Best for`, `Payment structure`, `Ongoing care`, `Insurance`, `Access style`, and `Good fit for uninsured patients`.

### Mobile Breakpoint Strategy
- Build mobile-first from `320px`.
- Add first major breakpoint at `640px`.
- Add tablet refinement at `960px`.
- Add wide desktop polish at `1200px`.

### Image Optimization
- Export photos at display size, not original camera size.
- Use WebP when possible.
- Keep hero images under `250KB` if feasible.
- Use responsive `srcset` in custom builds.
- Avoid background videos.

### Accessibility Setup
- Use one H1 per page.
- Preserve heading order.
- Use semantic `header`, `main`, `section`, `footer`, `nav`.
- Provide keyboard-visible focus styles.
- Ensure contrast meets WCAG AA.
- Add alt text to informative images and empty alt for decorative graphics.

### SEO Setup
- Set unique title tags and meta descriptions for each page.
- Use descriptive slugs.
- Add local business schema.
- Add FAQ schema on FAQ and pricing pages where relevant.
- Add internal links between primary care, pricing, membership, and contact pages.

### Performance Best Practices
- Keep CSS in one minified file where practical.
- Defer non-critical JS.
- Use lightweight vanilla JS for nav, accordion, and reveal effects.
- Lazy-load below-the-fold images.
- Avoid third-party widgets unless essential.

### Analytics / Conversion Tracking Recommendations
- Install Google Analytics 4.
- Install Google Search Console.
- Track click-to-call, click-to-text, appointment request submissions, membership inquiry clicks, and portal clicks.

### Recommendations if Building With GoDaddy Website Builder
- Best for speed, simple maintenance, and non-technical editing.
- Use duplicated section layouts to create page consistency.
- Favor native modules over custom embeds when possible for reliability.
- Keep visual customization tight so the builder does not drift into inconsistent spacing or font sizing.
- Use custom code areas only for small enhancements like FAQ behavior or analytics if the builder allows.

### Recommendations if Building With Custom HTML/CSS/JS on GoDaddy
- Best for stronger design control, performance, and consistent UX.
- Use:
  - `/assets/css/styles.css`
  - `/assets/js/site.js`
  - `/assets/img/...`
- Build with semantic HTML and modular section classes.
- Deploy as static files through GoDaddy hosting file manager, FTP, or CI if available.
- This is the recommended path if visual polish and SEO control are top priorities.

## I. Implementation Snippets

### 1. Sticky Header Scroll Behavior

```html
<header class="site-header" data-header>
  <div class="container header-inner">
    <a href="/" class="logo">Murphy Wellness</a>
    <nav class="desktop-nav" aria-label="Primary">
      <a href="/primary-care">Primary Care</a>
      <a href="/membership">Membership</a>
      <a href="/pricing">Pricing</a>
      <a href="/meet-jeni">Meet Jeni</a>
      <a href="/contact">Contact</a>
    </nav>
    <a class="button button-primary" href="/contact">Request Appointment</a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-drawer" data-menu-toggle>
      Menu
    </button>
  </div>
</header>
```

```css
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(251, 250, 253, 0.72);
  backdrop-filter: blur(14px);
  transition: background-color 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
  border-bottom: 1px solid transparent;
}

.site-header.is-scrolled {
  background: rgba(255, 255, 255, 0.96);
  border-bottom-color: #e3daed;
  box-shadow: 0 8px 24px rgba(61, 38, 80, 0.08);
}
```

```js
const header = document.querySelector("[data-header]");

function updateHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });
```

### 2. Smooth Scrolling

```css
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

### 3. FAQ Accordion

```html
<div class="faq-list" data-accordion>
  <div class="faq-item">
    <button class="faq-trigger" type="button" aria-expanded="false">
      Do I have to join the membership to be seen?
    </button>
    <div class="faq-panel" hidden>
      <p>No. Murphy Wellness offers membership, insurance-based visits, and one-time self-pay visits.</p>
    </div>
  </div>
</div>
```

```css
.faq-item {
  background: #fff;
  border: 1px solid #e3daed;
  border-radius: 18px;
  overflow: clip;
}

.faq-trigger {
  width: 100%;
  padding: 20px 22px;
  background: none;
  border: 0;
  text-align: left;
  font: inherit;
  font-weight: 700;
  color: #2f223a;
  cursor: pointer;
}

.faq-panel {
  padding: 0 22px 20px;
  color: #4a4252;
}
```

```js
document.querySelectorAll("[data-accordion] .faq-trigger").forEach((button) => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    const panel = button.nextElementSibling;

    button.setAttribute("aria-expanded", String(!expanded));
    panel.hidden = expanded;
  });
});
```

### 4. Mobile Nav Drawer Toggle

```html
<aside class="mobile-drawer" id="mobile-drawer" hidden data-mobile-drawer>
  <div class="mobile-drawer-panel">
    <button type="button" class="drawer-close" data-menu-close>Close</button>
    <a href="/contact" class="button button-primary">Request Appointment</a>
    <a href="tel:16209926088" class="button button-secondary">Call or Text</a>
    <nav class="mobile-nav" aria-label="Mobile">
      <a href="/">Home</a>
      <a href="/primary-care">Primary Care</a>
      <a href="/membership">Membership</a>
      <a href="/pricing">Pricing</a>
      <a href="/meet-jeni">Meet Jeni</a>
      <a href="/faq">FAQ</a>
      <a href="/contact">Contact</a>
    </nav>
  </div>
</aside>
```

```css
.mobile-drawer[hidden] {
  display: none;
}

.mobile-drawer {
  position: fixed;
  inset: 0;
  background: rgba(34, 24, 43, 0.35);
  z-index: 1100;
}

.mobile-drawer-panel {
  margin-left: auto;
  width: min(88vw, 360px);
  height: 100%;
  background: #fff;
  padding: 24px;
  display: grid;
  gap: 16px;
}
```

```js
const drawer = document.querySelector("[data-mobile-drawer]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const menuClose = document.querySelector("[data-menu-close]");

function setDrawer(open) {
  if (!drawer || !menuToggle) return;
  drawer.hidden = !open;
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("nav-open", open);
}

menuToggle?.addEventListener("click", () => setDrawer(true));
menuClose?.addEventListener("click", () => setDrawer(false));
drawer?.addEventListener("click", (event) => {
  if (event.target === drawer) setDrawer(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setDrawer(false);
});
```

### 5. Subtle On-Scroll Reveal Animations

```html
<section class="reveal" data-reveal>
  ...
</section>
```

```css
[data-reveal] {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 240ms ease, transform 240ms ease;
}

[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  [data-reveal] {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

```js
const revealItems = document.querySelectorAll("[data-reveal]");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealItems.forEach((item) => observer.observe(item));
```

### 6. Reduced-Motion Fallback

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 7. Comparison Table / Card Layout for Pricing Options

```html
<section class="care-options">
  <div class="comparison-table desktop-only">
    <table>
      <thead>
        <tr>
          <th>Option</th>
          <th>Best For</th>
          <th>How You Pay</th>
          <th>Ongoing Care</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Membership</td>
          <td>Ongoing relationship-based care</td>
          <td>Monthly fee</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Insurance</td>
          <td>Traditional primary care billing</td>
          <td>Insurance + patient responsibility</td>
          <td>Visit-based</td>
        </tr>
        <tr>
          <td>One-Time Self-Pay</td>
          <td>Single visits without membership</td>
          <td>$65-$195 per visit</td>
          <td>No</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="comparison-cards mobile-only">
    <article class="option-card">
      <h3>Membership</h3>
      <p><strong>Best for:</strong> Ongoing relationship-based care</p>
      <p><strong>How you pay:</strong> Monthly fee</p>
      <p><strong>Ongoing care:</strong> Yes</p>
    </article>
  </div>
</section>
```

### 8. CTA Hover Interactions

```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 52px;
  padding: 0.875rem 1.25rem;
  border-radius: 999px;
  text-decoration: none;
  transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease, color 180ms ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button-primary {
  background: #5f3a78;
  color: #fff;
  box-shadow: 0 10px 24px rgba(95, 58, 120, 0.2);
}

.button-primary:hover {
  background: #4f2f64;
  box-shadow: 0 14px 28px rgba(95, 58, 120, 0.24);
}

@media (prefers-reduced-motion: reduce) {
  .button,
  .button:hover {
    transform: none;
  }
}
```

## J. SEO Package

### Homepage Title Tag
`Murphy Wellness | Personalized Primary Care in Peabody, KS`

### Homepage Meta Description
`Murphy Wellness offers personalized primary care in Peabody, Kansas with membership, insurance-based visits, and one-time self-pay options from $65 to $195.`

### Page-Level Title Tags
- Home: `Murphy Wellness | Personalized Primary Care in Peabody, KS`
- Primary Care: `Primary Care in Peabody, KS | Murphy Wellness`
- Membership: `Membership Primary Care | Murphy Wellness Peabody, KS`
- Insurance & Self-Pay Pricing: `Insurance and Self-Pay Pricing | Murphy Wellness`
- Meet Jeni: `Meet Jeni Murphy | Murphy Wellness Peabody, KS`
- Contact: `Contact Murphy Wellness | Peabody, KS Primary Care`
- FAQ: `Murphy Wellness FAQs | Membership, Insurance, and Self-Pay`
- Patient Portal: `Patient Portal and Forms | Murphy Wellness`
- Privacy Policy: `Privacy Policy | Murphy Wellness`

### Page-Level Meta Descriptions
- Home: `Personalized primary care in Peabody, Kansas with longer visits, easier access, and clear care options including membership, insurance, and self-pay.`
- Primary Care: `Learn how Murphy Wellness provides primary care with longer visits, relationship-based care, and practical access for patients in Peabody and surrounding communities.`
- Membership: `Explore Murphy Wellness membership for ongoing primary care with more continuity, easier access, and clear monthly pricing.`
- Pricing: `Compare Murphy Wellness membership, insurance-based visits, and one-time self-pay visits. Self-pay visits typically range from $65 to $195.`
- Meet Jeni: `Meet Jeni Murphy and learn about the community-centered approach behind Murphy Wellness in Peabody, Kansas.`
- Contact: `Call, text, message, or request an appointment with Murphy Wellness in Peabody, Kansas.`
- FAQ: `Get answers about Murphy Wellness membership, insurance billing, self-pay visits, appointments, communication, and clinic logistics.`
- Patient Portal: `Access patient forms and portal links for Murphy Wellness.`
- Privacy Policy: `Read the Murphy Wellness privacy policy and learn how website information is handled.`

### H1 Recommendations
- Home: `Primary care that feels personal, clear, and easier to access.`
- Primary Care: `Primary care designed around people, not rushed visits.`
- Membership: `Membership-based primary care for patients who want a closer care relationship.`
- Pricing: `Clear pricing options for how you want to receive care.`
- Meet Jeni: `Meet Jeni Murphy`
- Contact: `Contact Murphy Wellness`
- FAQ: `Frequently asked questions`
- Patient Portal: `Patient forms and portal access`

### URL Slug Recommendations
- `/`
- `/primary-care`
- `/membership`
- `/pricing`
- `/meet-jeni`
- `/contact`
- `/faq`
- `/patient-portal`
- `/privacy-policy`

### Local SEO Recommendations for Peabody, Kansas
- Ensure NAP consistency:
  - Murphy Wellness
  - 500 W 4th St, Peabody, KS 66866
  - (620) 992-6088
- Create or fully optimize Google Business Profile.
- Add Peabody, Kansas naturally in Home, Contact, Meet Jeni, and Primary Care pages.
- Mention nearby service area language lightly, such as `serving Peabody and surrounding communities`.
- Collect and publish patient reviews on Google Business Profile when appropriate and compliant.

### Image Alt Text Guidance
- Provider headshot: `Jeni Murphy at Murphy Wellness in Peabody, Kansas`
- Clinic exterior: `Murphy Wellness clinic in Peabody, Kansas`
- Contact map image: `Map showing Murphy Wellness location in Peabody, Kansas`
- Decorative abstract shape: empty alt `""`

### Schema Recommendations
- `MedicalBusiness` or more specific healthcare schema if appropriate
- `Physician` or clinician schema for Jeni if operationally accurate
- `LocalBusiness`
- `FAQPage` for FAQ page and selected FAQ-rich sections

### FAQ Schema Opportunities
- FAQ page
- Pricing page FAQ section
- Membership page FAQ section
- Limit schema to visible on-page questions and answers only.

### Internal Linking Strategy
- Home links to all core pages.
- Primary Care links to Membership and Pricing.
- Membership links to Pricing and Contact.
- Pricing links to Membership, FAQ, and Contact.
- Meet Jeni links to Primary Care and Contact.
- FAQ links users to detailed page answers where helpful.

### On-Page SEO Guidance
- Keep one H1 per page.
- Use descriptive H2s that match patient questions.
- Include Peabody, Kansas naturally where relevant.
- Keep paragraphs concise for readability and snippet potential.
- Use internal links with descriptive anchor text like `compare pricing options` instead of `click here`.
- Optimize for clarity first, SEO second.

## K. Final Implementation Checklist

### Strategy
- Confirm final service scope and any care-format claims.
- Confirm membership pricing is still `$65/month` adult and `$25/month` child.
- Confirm insurance participation language before launch.
- Confirm appointment request workflow and who monitors inquiries.

### Content
- Approve final page copy.
- Gather final clinician bio details and credential formatting.
- Confirm FAQ answers for billing and communication.
- Finalize patient portal and forms links.
- Confirm exact office hours.

### Design
- Approve purple-forward palette and typography pairing.
- Select final imagery: Jeni portrait, clinic exterior, local/community photo.
- Build reusable modules and standard spacing rules.
- Ensure visual hierarchy is strong on every page.

### Mobile
- Test all pages with one-thumb navigation in mind.
- Verify sticky mobile CTA does not block forms or map.
- Ensure pricing options remain clear above the fold.
- Convert tables to stacked cards under mobile breakpoint.

### Build
- Create page templates or modular static sections.
- Implement header, footer, CTA band, FAQ accordion, and comparison module.
- Optimize images and compress assets.
- Validate links, buttons, and form submissions.

### Forms
- Add required labels and validation.
- Add anti-spam protection.
- Set confirmation messaging and email routing.
- Add non-urgent medical disclaimer.

### Accessibility
- Validate color contrast.
- Check keyboard navigation and focus states.
- Ensure semantic heading order.
- Add alt text and empty alt for decorative images.
- Test reduced-motion behavior.

### SEO
- Add title tags and meta descriptions.
- Submit XML sitemap if using custom hosting.
- Connect Google Search Console.
- Implement local business and FAQ schema.
- Verify canonical tags if platform supports them.

### QA
- Test desktop, tablet, and mobile breakpoints.
- Test call and text links on mobile devices.
- Test form behavior and thank-you state.
- Review for grammar, repetition, and consistency.
- Check Core Web Vitals basics: image size, layout shift, JS weight.

### Launch
- Backup current site.
- Publish core pages first if staged rollout is needed.
- Verify analytics and conversion events.
- Re-submit sitemap to Google after launch.
- Monitor contact form and CTA conversions during the first two weeks.
