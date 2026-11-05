# Approved artwork audit

Six reference pages are retained in the user deliverables. Audit baseline: 6 November 2026.

| Page | Required composition and imagery | Final implementation status |
|---|---|---|
| Home | 42/54 split hero; exact car crop and baked slogan; three issue pills; three-check trust strip; three illustrated steps; two testimonial cards; pale-blue road CTA; navy footer | Implemented; desktop, tablet and phone compared |
| Cara kami bantu | 44/54 split; original broker photo; four-step vertical timeline; right checklist; two role panels; FAQ preview; road CTA | Implemented; desktop, tablet and phone compared |
| Cerita pelanggan | centred pale-blue hero; sample badge; filter pills; image/quote split; two photo stories; assurance panel; road CTA | Implemented; desktop, tablet and phone compared |
| Soalan lazim | pale-blue hero illustration; search; 28/68 sidebar/content; original helper photo; grouped accordions; blog invitation | Implemented; desktop, tablet and phone compared |
| Blog | pale-blue hero; original car/document illustration; search and category pills; featured split card; 3-column/2-row grid; pagination; CTA | Implemented; desktop, tablet and phone compared |
| Article | breadcrumb; title/byline/share; panoramic original photo; 64/34 article/sidebar; answer box; original icons; FAQs; sources; related stories; CTA | Implemented; desktop, tablet and phone compared |

## Measurement and typography targets

- Reference homepage: 1007 × 1561; interior pages: approximately 819 × 1920.
- Horizontal page padding: about 3.2–4% of viewport. Large desktop content remains centred up to 1800px.
- Base body 18px on phone/tablet, growing to 32–36px on large screens; headings scale fluidly. Mobile does not shrink body below 18px.
- The raster references contain no font metadata. Inter is the visually matched self-hosted approximation, not a claimed recovery of a font embedded in the artwork.
- Extract photos at their original aspect ratios; no arbitrary hero recropping. Native photo detail is limited by reference resolution.
- Preserve original raster icons, including their pale tiles. Do not substitute a generic icon library.
- Motion is subtle; respects reduced-motion and never hides content by default.

## Verification order

1. Audit components and reference proportions.
2. Compare full-page screenshots at desktop, tablet and phone widths.
3. Correct missing art, typography, cropping, background and spacing.
4. Then test filters, search, accordion navigation, calculator, contact URLs, routing and metadata.

## Final differences retained intentionally

- Inter matches the visual style but the exact original font cannot be identified from raster artwork.
- Larger readable supporting text changes line wrapping and makes several interior pages taller than the narrow approved mockups. The section order, original photos, illustration family and desktop column structure remain.
- The obscured full road background was regenerated; its curve is close, not pixel-identical. The original cropped decorative pieces are also included in assets.
- Seven published articles require two working pagination pages, rather than the mockup's three placeholder buttons.
- Article copy has current sources and an additional question about approval guarantees; the related-article title uses the actual published article.
- The footer adds phone, privacy and reduced-motion controls. All fictional stories are labelled, including the home-page samples.
- On phones, columns stack; the article contents list moves above the article. The FAQ sidebar helper card is omitted on narrow screens while the main WhatsApp CTA remains available.

See qa-report.md for final browser checks, viewport measurements and the local Cloudflare runtime restriction. Side-by-side screenshot deliverables show remaining differences without claiming 100% pixel identity.

