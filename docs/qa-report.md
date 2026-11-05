# Verification record — 6 November 2026

## Visual verification first

All six approved page types were rendered and compared side by side before interaction testing. Full-page captures cover 1440×1000 desktop, 820×1180 tablet and 390×844 phone. The same six pages were checked at 2560×1440. Screenshot deliverables are supplied separately to keep the source repository lean.

Corrections from the comparison: increased desktop supporting text, restored original icons and separators, blended pale hero illustrations, preserved original image aspect ratios, repaired the service timeline's mobile minimum-width overflow, restored spacing around mobile heading line breaks, kept hero illustrations on phones and corrected the related article image/title pairing.

Final measurements: no horizontal overflow on any of those 24 page/viewport combinations. Base body type is 18px on phone/tablet, approximately 24px (home) / 28px (interior pages) at 1440px, and 32px / 36px at 2560px. Labels and metadata use a smaller relative scale. No broken image requests were observed after lazy images were scrolled into view.

## Browser interactions

- Mobile menu opens; Escape closes it and resets expanded state.
- Blog category filter returns one scam article; unmatched query shows the empty state; reset restores results; page 2 shows the remaining article.
- FAQ search returns the CTOS match; clearing restores groups; the approval question expands.
- Story category returns one matching fictional example.
- Article copy-link button reports successful copying.
- Motion preference toggles and persists between pages. Motion was reduced for comparison captures; production defaults remain animated unless the user/system requests reduction.
- Monthly calculator: 54,000 principal over 84 months at 0% returns RM642.86. Deposit greater than price displays an error.
- Budget calculator: 3,000 income less 1,600 debt, 1,600 living costs and 500 savings displays −RM700.00.
- Deposit calculator: saved amount equal to target displays “Sasaran dicapai”.
- No JavaScript console errors in the checked article session.

## Automated verification

`npm run build` generates 15 pages. `npm run check` verifies 453 internal asset/page links, 36 structured-data objects, exactly one H1 per page, unique IDs, local anchors, Malay language metadata, canonicals and sample-story indexing exclusions. Five calculator tests verify amortisation balances, zero rates, paid-off vehicles, invalid inputs, deficits and savings completion.

## Deployment limitation

Wrangler 4.158.0 is pinned with a lockfile. A local Cloudflare dry-run was attempted, but this managed Windows environment rejects child-process spawning (`EPERM`), including the esbuild process required by Wrangler. The static build, local HTTP preview and browser tests succeeded. A Cloudflare runtime/deployment has not been verified here; run deployment through Workers Builds or an unrestricted local terminal using the README instructions.

Search rankings, indexed status, WhatsApp message delivery and domain/DNS attachment cannot be verified before public deployment. No messages were sent during testing.
