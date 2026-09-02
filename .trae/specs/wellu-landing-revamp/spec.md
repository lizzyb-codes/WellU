# WellU Landing Page Revamp - Product Requirements Document

## Overview
- **Summary**: Rebrand the existing GoFit fitness landing page into a marketing landing page for "WellU" — an all-in-one university student life companion platform. Keep the current page structure and most visuals (phone mockups, PC dashboard visuals, scallop cards, mint theme) completely intact. Rewrite all copy/headlines, rebrand names/navigation, inject two new WellU accent colours, repurpose the awards section as a features/how-it-works strip, and add simple functional-looking login/sign-up screens.
- **Purpose**: Replace GoFit fitness positioning with WellU student-life positioning so the landing page sells the student life companion product, without rebuilding components or visuals from scratch.
- **Target Users**: Prospective university students, current undergrads, potentially university administrations evaluating student-wellness tools.

## Goals
- Every headline, subhead, CTA, feature card text, FAQ item, badge, sticker, and footer link matches the WellU "student life companion" product.
- GoFit branding (name, tagline, fitness-oriented copy, FIT/INFORMED/STRONG stickers) fully removed.
- New WellU brand colours `#fbb43b` (orange-gold) and `#4cad84` (wellness-green) incorporated as accent colours on top of the existing mint palette.
- Awards/laurels section re-skinned to "Features" or "How it works" showcasing WellU capabilities while keeping the existing structural layout.
- Simple, functional-looking login and sign-up flows added (modals or screen switcher) so the landing page feels "somewhat functional" rather than static marketing.
- Hero headline sticker badges rethemed to student/wellness language.
- Navbar rewritten to WellU context with explicit Login / Sign Up buttons.
- Page `<title>` and any visible brand references changed to WellU.

## Non-Goals
- **No visual rewrites of dashboard mockups**: Section 3's PC dashboard and phone mockups (biometric visuals, charts) remain exactly as-is. Only surrounding copy/headings change.
- **No real backend/auth**: Login/sign-up is a presentational/state-only demo with no server calls.
- **No multi-page app**: Remains a single-page landing; no actual Dashboard, Planner, Journal, Budget separate pages built.
- **No feature implementation beyond marketing copy**: The 15 listed features appear as copy, cards, or bullets only; no real feature UIs are built.
- **No page structure changes**: 7-section flow (Hero → Awards/Features → 3 Cards → Dashboard Section → FAQ → CTA → Footer) is preserved; sections are not reordered or removed.
- **No new logo image assets created**.

## Background & Context
- Current repository: `c:\Users\HomePC\Downloads\WellU\gofit---transforming-health` — a Vite + React + Tailwind marketing landing for a fitness product ("GoFit").
- WellU product spec provided verbatim by user: 15 core features centred on Personal Dashboard, Daily Streaks, Affirmations, Student News, Academic Planner, AI Student Assistant, Journal, Mood Tracker, Wellness Hub, Goals & Habits, Calendar, Reminders, Student Budget, Events & Opportunities, Student Community.
- User answered 5 clarification questions:
  1. Keep existing mint theme, incorporate `#fbb43b` and `#4cad84`.
  2. 3 feature cards: keep the existing card visuals/layout, just change copy — do NOT replace with Dashboard/AI Assistant/Streaks specific designs.
  3. Dashboard section visuals (PC/phone): leave exactly as-is, only change copy around them.
  4. Scope: landing page only, make it "somewhat functional".
  5. Awards/laurels section: keep where it is, rename/repurpose to "Features" or "How it works".
- Explicit user directive: "Keep most of the shit the same just make it match with the copy".

## Functional Requirements
- **FR-1 — Copy rewrite across all sections**: Every headline, subhead, body paragraph, CTA label, badge microcopy, sticker text, testimonial-like text, nav label, footer link label, FAQ question + answer, and pricing copy (if rendered) rewritten in natural WellU student language. No remaining GoFit/fitness references.
- **FR-2 — WellU naming everywhere**: Logo/brand mark in navbar, hero side copy, page document title, any "GoFit" or "gofit" literal strings, footer brand → all say/use "WellU".
- **FR-3 — Brand colour injection**: `#fbb43b` and `#4cad84` introduced as reusable accent colours and used visibly on the page (CTAs, accents, stickers, badges, highlights). Existing mint theme remains dominant but co-exists.
- **FR-4 — Awards → Features / How it works**: `AwardsSection` section title and content rewritten. Laurels/award tokens are replaced or re-skinned to represent "What's inside WellU" capability slots (e.g., 6-8 feature chips/icons). General section layout/background/spacing kept.
- **FR-5 — Simple Login / Sign-up experience**: A user-accessible Login + Sign-up form (modal, drawer, or view switcher) added with basic fields (email + password for login; name/email/password for sign-up). Clicking navbar Login/Sign-up or primary hero CTA opens the sign-up view. Has basic client-side state but no server calls; "somewhat functional".
- **FR-6 — Hero headline sticker badges rethemed**: 3-4 row stickers use WellU student/wellness vocabulary (e.g. FOCUSED, BALANCED, ON TRACK, MINDFUL) instead of FIT/INFORMED/STRONG/HEALTHY. One sticker per row layout preserved.
- **FR-7 — 3 Feature Cards (Section 2) rethemed**: `FeatureCardsScalloped` (3 scalloped cards) — card titles, descriptions, icons, and eyebrow labels all reworded around WellU value propositions. Scallop-card shell design unchanged.
- **FR-8 — Health Tracking Section (Section 3) copy retheme**: Section headline, subhead, section eyebrow, metric pill labels, and status row copy rewritten to position the section as "See how WellU puts your whole day in one place". Biometric visuals inside the dashboard mockups left untouched per user.
- **FR-9 — FAQ (Section 4) retheme**: All 5-6 CommunityFAQ accordion items rewritten with student-life questions + answers. Accordion shell/animation untouched.
- **FR-10 — CTA banner (Section 5) retheme**: `YourHealthJourneyCTA` banner headline, subhead, CTA button copy, and 3-phone label strings rewritten to WellU. Peach banner preserved visually.
- **FR-11 — Navbar retheme**: Brand text → WellU. Nav links renamed to WellU/student context (e.g. How it works, Features, Pricing → whatever fits WellU). Add explicit "Log in" and "Sign up" buttons on the right that open the auth UI.
- **FR-12 — Footer retheme**: `CleanFooter` brand name → WellU, column headings + links rewritten to student/WellU categories. No layout changes.
- **FR-13 — Document title update**: `index.html` `<title>` says "WellU - Your Student Life Companion" (or similar).

## Non-Functional Requirements
- **NFR-1 — Build & type health**: `npm run build` exits 0 with no TS diagnostics errors; no new console runtime errors on mount.
- **NFR-2 — Responsive behaviour preserved**: All existing responsive breakpoints (sm/md/lg/xl) continue to work. No horizontal overflow at 375px width.
- **NFR-3 — No visual regressions in untouched visuals**: Phone mockups in hero, scalloped card shell, dashboard visuals in Section 3, FAQ accordion shell, accordion icons, CTA 3-phone layout all render as they did before (only copy differs).
- **NFR-4 — Interoperable with existing HMR & dev server**: Changes continue to hot-reload normally on `npm run dev`.

## Constraints
- **Technical**: Must stay inside existing React + Vite + TSX + Tailwind codebase. No new runtime dependencies beyond what is installed (no auth libraries, no new state management). State for login/signup modal uses React `useState`.
- **Business**: Page must clearly read as "WellU student companion" within 3 seconds of loading (hero headline + subhead + nav brand).
- **Dependencies**: Existing components (`ScallopedCard`, `HealthTrackingSection`, `CommunityFAQ`, `YourHealthJourneyCTA`, `CleanFooter`, `AwardsSection`, `FeatureCardsScalloped`, `Navbar`) are edited in place — not deleted or replaced with new component files unless absolutely necessary for FR-5 auth UI.
- **User directive constraint**: Keep section structure and component visuals unchanged where possible. Prioritize copy rewrites and small accent recolourings over structural rewrites.

## Assumptions
- "Somewhat functional" (FR-5) means: forms render, state toggles between login/sign-up, submit produces a visible toast/success state, but no network call. This definition is assumed pending user override.
- User-supplied hex `#4cad84` is the primary new WellU green accent, not a replacement for the existing mint — assumed because user said "incorporate this a little".
- The 15-feature list is copy fodder for awards→features chips and FAQ text. We do not build UI for the features themselves.
- PC/phone dashboard section images are left as fitness visuals because user said "Do not do any of this this was just for copywriting".

## Acceptance Criteria

### AC-1: No remaining fitness copy anywhere on the page
- **Type**: `rule`
- **Given**: A fresh production build served on `localhost:3000`
- **When**: An agent greps the rendered DOM + all component source files (`src/**/*.tsx`, `src/**/*.ts`, `index.html`) for regex patterns /gofit/i, /fitness/i, /biometric/i, /heart rate/i, /oxygen/i, /milestone/i, /telemetry/i
- **Then**: Zero matches remain in rendered page copy, visible headings, CTAs, badges, stickers, nav, footer, or component strings (with the exception of code comments or folder names that are not user-visible)
- **Pass Condition**: 0 regex matches for the listed fitness keywords in rendered user-visible copy and string literals
- **Evidence**: `npm run build` success + grep output of component files showing 0 matches for fitness keyword patterns (excluding directory names / `gofit---transforming-health` folder which is out of scope)

### AC-2: WellU brand present at critical points
- **Type**: `rule`
- **Given**: Landing page loaded
- **When**: Checking navbar brand, hero subhead area, page `<title>`, footer brand, CTA banner brand
- **Then**: Every one of those locations explicitly says "WellU" (not "GoFit" or blank)
- **Pass Condition**: All 5 listed brand points contain the literal string "WellU"
- **Evidence**: DOM snapshot or source snippets from Navbar, hero copy, index.html, CleanFooter, and CTA banner showing "WellU"

### AC-3: Both new brand colours visibly used
- **Type**: `rule`
- **Given**: Landing page loaded in browser
- **When**: Inspecting 5+ surface areas that used accent colours before
- **Then**: At least 2 distinct surface areas use `#fbb43b` and at least 2 distinct surface areas use `#4cad84` as visible background/text/border colour
- **Pass Condition**: >= 2 surfaces use `#fbb43b`; >= 2 surfaces use `#4cad84`
- **Evidence**: Source code diff snippets showing the hex colours applied in >= 2 places each, plus screenshot observation

### AC-4: Awards section rethemed to Features / How it works
- **Type**: `rule`
- **Given**: Awards section component (`AwardsSection.tsx`)
- **When**: Rendered
- **Then**: Section heading no longer says "awards/laurels". Section content consists of >= 5 WellU feature labels/chips (or equivalent representation of "what's inside WellU")
- **Pass Condition**: Section heading contains "Features" or "How it works" or student-context title; >= 5 WellU chips rendered
- **Evidence**: Rendered section screenshot + source snippet of section title and chip list

### AC-5: Working Login + Sign-up UX
- **Type**: `rule`
- **Given**: Landing page loaded
- **When**: Clicking navbar "Log in" opens auth UI with email/password fields; switching to "Sign up" tab shows name/email/password/confirm-password fields; submitting shows a visible confirmation toast or success message (no network call required)
- **Then**: All 3 sub-behaviours work without page refresh or console errors
- **Pass Condition**: Log in click → modal opens; tab switch → sign up fields visible; submit → visible success confirmation
- **Evidence**: Screenshot or video step-through of the 3 states, plus no console errors during flow

### AC-6: Hero stickers rethemed to student language
- **Type**: `rule`
- **Given**: Hero headline rendered
- **When**: Inspecting the 3-4 coloured sticker badges on the headline rows
- **Then**: None of the stickers say FIT, INFORMED, STRONG, or HEALTHY. Each sticker uses a distinct WellU / student / wellness - themed word
- **Pass Condition**: 0 of 4 stickers contain old words; each sticker contains vocabulary consistent with student-life or the 15 feature themes
- **Evidence**: App.tsx hero sticker block source code + screenshot

### AC-7: All 7 sections reworded to WellU copy (no fitness copy anywhere)
- **Type**: `rubric`
- **Dimension**: Completeness & coherence of WellU copy across every section
- **Scale**: 1-5
- **Anchors**: 1 = only hero changed, rest fitness; 3 = most sections changed but 2+ sections still visibly fitness wording; 4 = 6/7 sections perfect, minor fitness stragglers in 1 section; 5 = hero, awards/features, 3 feature cards, dashboard section, FAQ, CTA, footer ALL read as cohesive WellU student product with zero fitness wording anywhere
- **Pass Threshold**: >= 4
- **Evidence**: Scroll-through screenshot or visual pass of each section, plus reviewer narrative

### AC-8: No visual regressions on preserved visuals
- **Type**: `rubric`
- **Dimension**: Faithfulness to existing layout & visuals
- **Scale**: 1-5
- **Anchors**: 1 = major layout shifts, scallop cards missing, dashboard section broken, hero phone moved; 3 = layout preserved but 2+ components have visual breaks; 4 = only tiny accidental misalignments that don't affect UX; 5 = hero phone mockup, scalloped cards, dashboard mockup images, 3-phone CTA layout, FAQ accordion all visually identical to before — only text and accent colours differ
- **Pass Threshold**: >= 4
- **Evidence**: Side-by-side comparison or reviewer narrative attesting the preserved visuals are intact

### AC-9: Build & runtime health
- **Type**: `rule`
- **Given**: Clean checkout with all edits applied
- **When**: `npm run build` runs followed by `npm run dev` and first-page load
- **Then**: Build exits 0; first page load has 0 console errors
- **Pass Condition**: `npm run build` exit code 0; console errors count == 0 after first mount
- **Evidence**: Build command output, dev server console snapshot at 0 errors

### AC-10: Navbar has Login & Sign up buttons wired to auth UI
- **Type**: `rule`
- **Given**: Landing page loaded
- **When**: Clicking navbar "Log in" → auth UI opens in login state; clicking navbar "Sign up" → auth UI opens in sign-up state
- **Then**: Both buttons open the auth UI, in their respective correct tab states
- **Pass Condition**: Both buttons work; correct tab is open per button
- **Evidence**: Source snippet showing Navbar handlers, plus live click evidence

## Open Questions
- [ ] (Low) Is a success toast sufficient for sign-up submit "somewhat functional" or should we also add a mock "signed in" state in the nav (show user email instead of Login/Sign up buttons)? Assumption: toast only is sufficient unless user overrides.
- [ ] (Low) Should the 3 scallop feature cards use feature-names drawn from the 15-core list verbatim, or be value-prop oriented? Assumption: value-prop phrasing that maps to the 15-core list (e.g. Card 1: "One dashboard for your whole day" → maps to Personal Dashboard + Calendar + Reminders).
