# WellU Landing Page Revamp - Implementation Plan

## Task 1: Add global auth modal state + LoginSignupModal component
- **Status**: `pending`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - Add a reusable `LoginSignupModal.tsx` component (new file) with tabbed login and sign-up forms. State managed via `useState` (no libraries).
  - Login: email + password fields, submit button.
  - Sign-up: full name + email + password + confirm password fields, submit button.
  - Submit triggers an inline success state or toast (no backend).
  - Close button, backdrop click-to-close, esc-to-close optional.
  - Mount it globally in `App.tsx` controlled by `authOpen` and `authMode = 'login' | 'signup'` useState.
  - Expose helpers so navbar and hero CTAs can set open + mode.
- **Acceptance Criteria Addressed**: AC-5, AC-9, AC-10
- **Test Requirements**:
  - `rule` TR-1.1: Click "Sign up" CTA → modal opens on sign-up tab with all 4 fields visible. Evidence: DOM snapshot + source showing useState wiring.
  - `rule` TR-1.2: Click "Log in" nav button → modal opens on login tab with 2 fields visible. Evidence: DOM snapshot.
  - `rule` TR-1.3: Submit sign-up form with any values → shows visible success confirmation without page reload or console errors. Evidence: console log + visual confirmation screenshot.
  - `rule` TR-1.4: `npm run build` succeeds with no TS errors from the new component. Evidence: build output exit 0.
- **Notes**: Keep modal style consistent with site (rounded-2xl, white bg, mint/navy/amber accents matching new brand colours).

## Task 2: Rewrite Navbar — brand to WellU, new links, add Login / Sign up buttons
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 1
- **Description**:
  - Component: `Navbar.tsx`
  - Replace brand string with "WellU" using the `#4cad84` green accent for the logo mark or dot (e.g. a green square dot + WellU).
  - Rewrite nav links to WellU student context. Current links: replace with something like: How it works, Features, Pricing, Community. Keep 4 links total to preserve layout.
  - On the right-hand side: remove the existing CTA and add TWO buttons: "Log in" (ghost/secondary) and "Sign up" (filled primary using `#fbb43b` or dark slate).
  - Buttons wired to open the `LoginSignupModal` in the respective modes (Task 1 state).
- **Acceptance Criteria Addressed**: AC-2, AC-10, AC-11, AC-1, AC-3
- **Test Requirements**:
  - `rule` TR-2.1: Navbar brand visible text contains "WellU". Evidence: source + screenshot.
  - `rule` TR-2.2: At least one element (e.g. brand mark, primary button) uses `#4cad84` and at least one element uses `#fbb43b`. Evidence: CSS class literals in Navbar.tsx.
  - `rule` TR-2.3: "Log in" button click → fires the auth open in 'login' mode; "Sign up" button → fires in 'signup' mode. Evidence: onClick handler source.
  - `rule` TR-2.4: No remaining "GoFit" literal string in Navbar.tsx user-visible copy. Evidence: grep.

## Task 3: Rewrite Hero section (App.tsx left column + stickers)
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 1 (hero CTA wiring)
- **Description**:
  - Rewrite NEW pill + eyebrow: replace "NEW" + "AI Boosted Tracking" → e.g. "NEW 2026" + "Built for university students".
  - Rewrite 4-line headline so it's WellU themed. e.g. "Your entire uni life / in / one / place" — actual wording to fit the 4-line block structure exactly.
  - Replace 4 stickers (currently FIT/INFORMED/STRONG/one removed) with new student-wellness themed stickers, 1 per row, matching new brand palette `#4cad84` / `#fbb43b` / `#0EA5E9` / new accent. Suggested words: FOCUSED, BALANCED, ON TRACK, MINDFUL.
  - Rewrite subhead: replace fitness biometric copy with WellU elevator pitch from user spec.
  - Rewrite CTA buttons: primary → "Sign up free" (opens sign-up modal). Secondary → "See how it works" (anchor link to How it works section).
  - Keep social proof stack (avatars + stars), just change the "+48k" / "No credit card required" if needed to student context (e.g. "+25k students").
  - Keep "Also available on mobile" / AppButtons intact (they're generic enough).
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-3, AC-6, AC-7, AC-10
- **Test Requirements**:
  - `rule` TR-3.1: 0 of the sticker badges contain FIT/INFORMED/STRONG/HEALTHY strings. Evidence: grep sticker text in App.tsx.
  - `rule` TR-3.2: Hero headline + subhead + CTA labels contain no fitness keywords (grep against AC-1 list). Evidence: source snippet + grep output.
  - `rule` TR-3.3: Primary CTA wired to open sign-up modal. Evidence: onClick handler snippet.
  - `rubric` TR-3.4: Sticker + headline coherence; scale 1-5; anchors 1=still fitness, 3=partial, 5=reads as WellU student hero instantly; threshold >= 4; evidence: screenshot + source snippet.

## Task 4: Rewrite Awards section → How it works / Features strip
- **Status**: `pending`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - Component: `AwardsSection.tsx` (also check `LaurelWreath.tsx` if it contains assets — reuse container, swap content)
  - Change section heading to "Everything you need, in one place" or "What's inside WellU".
  - Remove the laurels/awards imagery/tokens. Replace with 6-8 feature chips or icons drawn from the 15 core features (e.g. Dashboard, Streaks, AI Assistant, Planner, Journal, Mood, Budget, Community). Each chip has an icon + short label.
  - Keep section layout (horizontal strip, same widths, same bg treatment) structurally identical where possible.
  - Use at least one of `#fbb43b` or `#4cad84` as chip accents.
- **Acceptance Criteria Addressed**: AC-1, AC-4, AC-3, AC-7
- **Test Requirements**:
  - `rule` TR-4.1: Section heading no longer says "awards" / "laurels" / "recognitions". Evidence: rendered heading text.
  - `rule` TR-4.2: Renders >= 6 WellU feature chips (icon + label). Evidence: JSX element count + screenshot.
  - `rule` TR-4.3: Chip labels drawn from the 15 feature theme list. Evidence: label strings in source.
  - `rule` TR-4.4: No awards/laurel graphics remain in rendered output (or if laurel component is still imported it isn't rendered). Evidence: grep of rendered JSX.

## Task 5: Rewrite 3 Scallop Feature Cards (Section 2)
- **Status**: `pending`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - Component: `FeatureCardsScalloped.tsx` (and possibly `ScallopGrooveCard.tsx` if copy lives there)
  - Keep the 3-card grid layout, scallop grooves, card aspect ratios, and visuals 100% intact.
  - Rewrite each card's eyebrow, title, description, icon, and CTA microcopy to WellU value props. Suggested 3-card mapping:
    - Card 1 → "One dashboard for your whole day" (Personal Dashboard, Streaks, Calendar, Reminders rolled into one value prop)
    - Card 2 → "An AI sidekick for student life" (AI Student Assistant)
    - Card 3 → "Wellness that fits into your schedule" (Mood, Journal, Wellness Hub, Goals)
  - Optionally use lucide-react icons that match (keep them neutral, not fitness).
- **Acceptance Criteria Addressed**: AC-1, AC-7, AC-8
- **Test Requirements**:
  - `rule` TR-5.1: All 3 card titles + descriptions contain zero fitness keywords from AC-1's list. Evidence: grep source of card files.
  - `rubric` TR-5.2: Visual shell fidelity; scale 1-5; anchors 1=layout broken, 3=some grooves misaligned, 5=scallop grooves + card positions identical to before; threshold >= 4; evidence: screenshot.
  - `rubric` TR-5.3: Copy quality & fit with 15-feature list; scale 1-5; anchors 1=unrelated, 3=so-so, 5=clearly maps to 3 of the 15 themes; threshold >= 4; evidence: source + reviewer narrative.

## Task 6: Rewrite Health Tracking Section (Section 3) COPY ONLY — visuals stay
- **Status**: `pending`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - Component: `HealthTrackingSection.tsx`
  - Rename component only if it's easy to do via single-edit; otherwise leave filename.
  - Rewrite section eyebrow label, headline, subheading to WellU student dashboard theme. E.g. "See your whole day at a glance" + subhead matching spec.
  - Rewrite the 4 metric pill labels (heart rate, oxygen, body temp, energy) to generic/student-themed label names that match the copy direction. Do NOT rework pill shapes — leave them identical to their current vanilla form per last user edit (rounded-xl, border-slate-200, slate-100 icon bg). Just change the text labels and icons to something that reads "student app" (e.g. Today's Classes, Upcoming Deadlines, Study Hours, Mood).
  - Rewrite status row copy to non-biometric language.
  - **EXPLICITLY DO NOT TOUCH**: PCDashboardMockup, PhoneMockup, any SVG/chart visuals, any image assets inside the dashboards. The biometric visuals remain untouched per user directive.
- **Acceptance Criteria Addressed**: AC-1, AC-7, AC-8, FR-3 bullet in spec re: not touching visuals
- **Test Requirements**:
  - `rule` TR-6.1: 4 metric pill label text no longer contains Heart Rate / Oxygen / Body Temp / Energy. Evidence: source literal strings in HealthTrackingSection.tsx.
  - `rule` TR-6.2: Imports for PCDashboardMockup/PhoneMockup remain the same; children passed to them remain unchanged. Evidence: unchanged import + unchanged JSX for mockup components (git diff shows edits only to copy sections).
  - `rubric` TR-6.3: Copy coherence with WellU "student dashboard" framing; scale 1-5; anchors 1=still reads fitness, 3=halfway, 5=clearly reads student dashboard; threshold >= 4; evidence: source.

## Task 7: Rewrite CommunityFAQ → Student FAQ
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: None
- **Description**:
  - Component: `CommunityFAQ.tsx`
  - Section heading rewrite to WellU context (e.g. "Questions from students").
  - Rewrite all 5-6 accordion items: each question + answer about student-life / WellU product topics. Suggested: Is my data private?, Do you sync with Google Calendar?, Is there a free tier?, Can I use it with my faculty's LMS?, How does the AI Assistant help with studying?
  - Accordion structure, animations, ribbon decorations: keep intact.
- **Acceptance Criteria Addressed**: AC-1, AC-7, AC-9
- **Test Requirements**:
  - `rule` TR-7.1: All FAQ questions/answers rewritten; grep shows 0 "fitness/gofit/athlete/health journey" strings. Evidence: grep output.
  - `rule` TR-7.2: Accordion shell classes + layout unchanged; only text content nodes differ from prior version. Evidence: diff inspection.

## Task 8: Rewrite CTA banner (YourHealthJourneyCTA → WellU themed)
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Task 1 (wiring CTA to sign-up modal)
- **Description**:
  - Component: `YourHealthJourneyCTA.tsx` (filename unchanged or renamed in single file edit)
  - Rewrite headline + subhead + CTA button copy to WellU student-life framing (e.g. "Ready to own your uni experience?", "WellU keeps you on track, grounded, and prepared — every single day of the semester.")
  - Rewrite any text labels that overlay the 3 phone frames.
  - CTA button: "Sign up free" → opens sign-up modal from Task 1.
  - Keep the peach/banner gradient, 3 phone layout, all images, all phone shells exactly as-is.
- **Acceptance Criteria Addressed**: AC-1, AC-7, AC-10, AC-8
- **Test Requirements**:
  - `rule` TR-8.1: Headline + CTA copy no longer says "Your Health / Your Journey" or fitness phrases. Evidence: source.
  - `rule` TR-8.2: CTA button wired to open sign-up modal. Evidence: onClick handler.
  - `rubric` TR-8.3: Banner fidelity (phones, background gradient intact); scale 1-5; anchors 1=broken layout, 3=shifts, 5=exact same shell only copy changed; threshold >= 4; evidence: screenshot.

## Task 9: Rewrite CleanFooter → WellU branding + links
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: None
- **Description**:
  - Component: `CleanFooter.tsx`
  - Brand name → WellU, with `#4cad84` accent mark (same treatment as navbar brand).
  - Footer tagline: short WellU student tagline.
  - Link columns rewritten to WellU student categories and links.
  - Remove any fitness/award copy.
  - Keep simple white style per user's last request (already white/simple footer).
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-3, AC-12
- **Test Requirements**:
  - `rule` TR-9.1: Brand text says "WellU". Evidence: source.
  - `rule` TR-9.2: Uses `#4cad84` at least once in footer. Evidence: CSS literals.
  - `rule` TR-9.3: No fitness copy visible in footer strings. Evidence: grep.

## Task 10: Global clean-up — grep all components for leftover fitness strings, rename page title
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Tasks 3, 4, 5, 6, 7, 8, 9
- **Description**:
  - Edit `index.html` (outside src, in project root) to change `<title>` and any `<meta>` description strings to WellU.
  - Grep all of `src/**/*.tsx`, `src/**/*.ts`, `index.html` for regex /gofit/i /fitness/i /biometric/i /milestone/i /telemetry/i /heart rate/i /oxygen/i and fix any remaining occurrences in user-visible copy (folder names / file names excluded).
  - Also grep `DecorativeRibbons.tsx`, `EditorialQuote.tsx`, `ScallopedCard.tsx`, `AppButtons.tsx`, `Pricing`, `InteractiveGrooveBuilder.tsx`, `ScreensShowcase.tsx`, etc. — any unused or even-used components that still have fitness strings should be cleaned if they render anywhere; if not rendered, leave alone.
  - If component filename still reads `HealthTrackingSection.tsx` etc., leave as-is (hard rename creates import noise) — clean only rendered strings.
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-9
- **Test Requirements**:
  - `rule` TR-10.1: `<title>` in index.html contains "WellU". Evidence: index.html read after edit.
  - `rule` TR-10.2: grep across all source files for the AC-1 fitness keyword list returns 0 matches in string literals of rendered content. Evidence: grep output.
  - `rule` TR-10.3: `npm run build` still passes cleanly after clean-up pass. Evidence: build exit 0.

## Task 11: Final build + runtime smoke test
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Tasks 1-10 (all)
- **Description**:
  - Run full `npm run build`, capture output.
  - Start dev server, open the landing, confirm: nav, hero, features strip, 3 feature cards, dashboard section, FAQ, CTA, footer all render; no console errors; login modal opens via 2 nav buttons + hero CTA.
  - Self-verify every AC rule and evaluate each rubric.
- **Acceptance Criteria Addressed**: All ACs
- **Test Requirements**:
  - `rule` TR-11.1: Build exit 0. Evidence: captured build log.
  - `rule` TR-11.2: Dev console 0 errors on fresh load + after 5 interaction clicks. Evidence: console snapshot.
  - `rubric` TR-11.3: Overall page AC-7 copy coherence score reviewed again; scale 1-5; threshold >= 4; evidence: narrative.
  - `rubric` TR-11.4: Overall page AC-8 visual fidelity score; scale 1-5; threshold >= 4; evidence: narrative.
