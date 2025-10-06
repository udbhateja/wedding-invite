Project: Crafto “Sophia & Robert” Wedding Invite Clone
Goal: Recreate the single-page layout from b87645bcd02f44d221dd3ab19f3975e5.jpg as a responsive website with near pixel-tight fidelity.

Ground Rules
- Match overall typography hierarchy, color palette, spacing, copy, and composition to the reference; minor deviations in imagery are acceptable but must preserve the same mood and balance.
- Reuse or recreate assets with visually equivalent style; exact slices from the JPEG are optional where effort is reasonable.
- Validate every visual choice (font size, color, spacing) against measurements taken from the reference image or well-justified approximations.

Step-by-Step Plan
1. Reference & Spec Extraction
   1.1 Open the reference image in a graphics tool that supports zoom and guides (Figma, Sketch, Photopea) for constant comparison.
   1.2 Use a color picker to capture precise hex codes for critical elements: header/nav background, hero gradient sky, hero circle, primary pink accent, orange accent, dark body text, light gray text, RSVP input background, button background. Record them in a palette table inside working notes.
   1.3 Measure pixel dimensions of major vertical spacings (section padding, card gaps, circle diameter, countdown tile size) and horizontal alignments (grid widths, column gaps).
   1.4 Transcribe every text string verbatim (menu labels, section headings, body copy, button labels, dates, captions). Store the content in a structured data file (`data/content.json` or `.yml`).

2. Asset & Resource Preparation
   2.1 Source or create imagery that closely matches the original look: beach wedding hero shot, couple portrait, cake/flowers details, candid couple shots, headshots for wedding party, food/event imagery. Favor cohesive lighting, color temperature, and framing.
   2.2 For signature graphic elements (paint splatters, torn-paper edge, polaroid frames), recreate them using vector/bitmap tools or lightweight CSS/SVG so they read like the original assets.
   2.3 Export imagery at 2× resolution (retina ready) in optimized JPG/PNG/WebP as appropriate and place in `assets/images/` using descriptive filenames.
   2.4 Assemble reusable decorative elements (icons, heart glyphs, social icons) by selecting matching icon sets (e.g., Feather, Font Awesome) and adjust stroke/weight to match the design.

3. Project Scaffolding
   3.1 Create folders: `assets/images`, `assets/icons`, `styles`, `scripts`, and `data`.
   3.2 Add boilerplate files: `index.html`, `styles/main.css`, `scripts/main.js`, and `data/content.json` populated from Step 1.4.
   3.3 Include a README snippet documenting build/run instructions (static site, no build step required).

4. Typography Setup
   4.1 Identify closest web fonts: use Google Fonts `Bebas Neue` for uppercase display headings (hero names, section titles) and `Poppins` (400/500/600) for body text, buttons, and nav items. For the cursive/accent script (e.g., “Best Friends”), evaluate `Playfair Display Italic` or similar and adjust letter-spacing to match.
   4.2 Load fonts via `<link>` tags in `index.html` (include `font-display: swap`) and declare CSS custom properties for font stacks in `:root`.
   4.3 Define base typography scale (root font-size, heading sizes, letter-spacing) based on reference measurements.

5. Global Styles & Variables
   5.1 Declare CSS custom properties for colors, spacing increments, max width container (~1200px), and drop shadows derived from the reference.
   5.2 Apply global reset (`* { box-sizing: border-box; }`), body background gradient, default text color, and base line-height.
   5.3 Implement utility classes for layout (flex rows, columns, grid templates) reflecting repeating patterns.

6. Layout Construction Sequence (follow order to leverage shared patterns)
   6.1 Header & Navigation: build dark strip with logo left, centered monogram (SO ♥ RO), nav links right; include subtle bottom shadow.
   6.2 Hero Section: full-width background photo with centered circular card containing names/date, black vertical name tag, CTA button, and paint splatter accents. Recreate torn-paper bottom edge via pseudo-element overlay or SVG.
   6.3 “We’re Getting Married” Section: two biography cards flanking couple photo, each with name, title, body copy, and social icons; match drop shadows and pink dividers.
   6.4 Timeline Strip: four milestones in a horizontal flex grid with circular markers, thin connectors, year labels; include faint background typography (“WE’RE GETTING MARRIED”) as low-opacity text.
   6.5 Photo Gallery: three-column grid (two rows) with hover states (scale + overlay). Maintain consistent spacing and border radii.
   6.6 Countdown Section: large numbers with labels inside cream background; ensure digits use display font with pink separators.
   6.7 Collage Banner: recreate couple image with overlapping polaroid thumbnails and paint splatters; maintain layering (main photo behind, polaroids above, splatter overlay).
   6.8 Wedding Party Grid: 4-column layout (desktop) with circular avatars, names, roles; responsive behavior for smaller screens (2 columns tablet, 1 mobile).
   6.9 When & Where Cards: three cards with date badges, headings, body copy over light background; include vertical separators and consistent accent styles.
   6.10 RSVP Form: two-column layout with labeled inputs, selects, textarea, submit button; include placeholder text and privacy note matching reference tone.
   6.11 Footer: replicate contact bar with left/right contact info, center monogram, ThemeZee credit.

7. Interactivity & Behavior
   7.1 Implement countdown timer in `scripts/main.js` targeting March 28, 2025 (per reference), formatting numbers with leading zeros.
   7.2 Add smooth-scroll behavior for nav links referencing section IDs.
   7.3 Provide basic RSVP form validation (HTML5 + JS) and mock submit handler showing a success toast consistent with the design (optional per preference).

8. Responsiveness & Cross-Browser Testing
   8.1 Define breakpoints around 1200px, 992px, 768px, 480px; adjust grids, typography, and spacing to maintain hierarchy.
   8.2 Ensure hero circle and countdown remain legible on smaller screens.
   8.3 Test in Chrome, Safari, Firefox; verify font loading, flex/grid behavior, and form styling.

9. Quality Assurance
   9.1 Perform visual diff (overlay screenshots in Figma/PixelSnap) to confirm alignment within ~3px tolerance, focusing on key sections.
   9.2 Check hover/focus states, keyboard navigation, and color contrast (aim for WCAG AA without shifting overall aesthetic).
   9.3 Optimize assets (compress images, confirm total payload reasonable) while preserving visual fidelity.

10. Launch Checklist
   10.1 Run `npx serve` (or similar static server) to preview final build locally.
   10.2 Ensure all asset paths are relative for static hosting.
   10.3 Package deliverables: source files, assets, instructions, reference image for future tweaks.
