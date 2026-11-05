# TemanAuto

Malay-language car brokerage website built from the six approved TemanAuto designs. Static HTML is generated at build time; browser JavaScript powers search, filters, calculators and motion controls. No database, form service or secret is required.

## Run locally

Use Node.js 22.8 or newer (24 recommended).

```sh
npm ci
npm run build
npm run dev
```

Open http://127.0.0.1:8767. Run `npm test` and `npm run check` after changes.

## Cloudflare Workers deployment

Connect this GitHub repository to **Workers & Pages → Create → Import a repository** using Cloudflare Workers Builds.

- Root directory: repository root
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Use Node.js 24 in build settings.
- `wrangler.jsonc` serves `dist` as static assets; no Worker entry point is needed.
- Clean paths use `html_handling: "drop-trailing-slash"`. Unknown paths return the custom 404 page.

Alternatively, from an authenticated local Cloudflare environment:

```sh
npm ci
npm run deploy
```

After deployment, add `www.temanauto.com` in the Worker's **Settings → Domains & Routes → Add → Custom Domain**. Configure the apex `temanauto.com` to redirect to `https://www.temanauto.com` in Cloudflare. The domain and DNS must be available in your account; they have not been connected by this source-code delivery.

Official deployment references: [Static Assets](https://developers.cloudflare.com/workers/static-assets/), [routing configuration](https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/), [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/), [Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).

## Content and contact settings

- `src/config.mjs`: brand, canonical domain and WhatsApp **60195886216**.
- `src/pages.mjs`: home, service, sample stories and FAQs.
- `src/content.mjs`: seven sourced Malay articles.
- `src/editorial.mjs`: blog listing and article layouts.
- `src/calculator.mjs` / `src/calculations.js`: monthly repayment, budget and deposit savings tools.
- `src/styles.css`: responsive design and reduced-motion behaviour.
- `public/assets`: extracted artwork and lossless WebP assets.
- `docs/search-strategy.md`: query clusters, competitor research and editorial roadmap.
- `docs/design-audit.md` / `docs/qa-report.md`: design comparison and verification record.

The invented testimonials remain visibly labelled **Contoh testimoni / Contoh rekaan**. The stories page is excluded from the sitemap and marked `noindex,follow`. Replace these with real, consented customer stories before treating them as evidence or indexing the page. No review-rating schema is generated.

The site explains the broker's role and does not promise loan approval. The calculator is an estimate using a reducing-balance repayment formula, not a lender eligibility check or quotation. All calculations and searches run in the visitor's browser. WhatsApp links open a draft; visitors choose whether to send it.

## SEO and search visibility

Every public page is pre-rendered with a unique title, description and canonical URL. Articles include source links, answer-first text, internal links, Article and Breadcrumb structured data. Organization schema, Open Graph metadata, a sitemap and robots file are included. There are no invented search-volume figures, location pages or guaranteed ranking claims.

After launch, verify the domain in Google Search Console and submit `https://www.temanauto.com/sitemap.xml`. Add the actual service area and verifiable business identity when available. See the search strategy for the next article topics and evidence gaps.

## Asset and design limits

The logo now matches the cobalt-blue theme. Following the image-quality review, the home hero, three story photos, blog feature and all seven article banners use higher-resolution artwork with responsive lossless WebP versions. Article symbols use scalable SVG outlines. See `docs/image-upgrade.md` and `docs/responsive-assets.json` for provenance, dimensions and verification. Reconstructed photos preserve the scenes but may differ in fine detail from the original designs. Remaining extracted artwork and the reconstructed road background are retained.

Inter is self-hosted and visually matched; the raster designs did not identify the original typeface. The implemented layout is close to the approved design, with responsive reflow, larger readable desktop type, accessible controls and extra footer information. It is not claimed to be a pixel-identical reproduction at every viewport.
