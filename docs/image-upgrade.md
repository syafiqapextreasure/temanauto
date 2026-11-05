# Image quality upgrade — 6 November 2026

The low-resolution blog card crops (244 px wide) were also being enlarged as article banners. They have been replaced with native 2006–2098 px wide panoramic artwork. All seven articles now use responsive sources and natural banner proportions, preventing the old aggressive crop. The feature photo is 1470 px wide; story photos are 1310–1762 px; the existing generated home hero is 1291 px wide. The logo now uses cobalt and pale blue, with transparency.

## Generation and prompt specifications

Mode: built-in ImageGen reference-image edits, as authorized by the user. The built-in tool does not expose a selectable model identifier or an explicit quality flag; no claim is made that an API gpt-image-2/high parameter was used. Each prompt requested the highest native resolution and crisp photographic detail. Source originals are saved in the delivered TemanAuto-image-upgrade folder.

Common photo direction: faithfully reconstruct the supplied reference scene, retain composition, subjects, clothing, lighting and visual style, with naturally sharp native photographic detail. Do not add a website frame, rounded corners, watermarks or decorative text. Fine photographic and facial details can differ from the reference.

- Logo: retain the original vehicle/road emblem silhouette; replace teal with cobalt #073BFF and gold with pale blue #86CFFF. Clean flat edges, transparent background, no wordmark.
- Nadia: pink hijab and cream blouse, crossed arms beside silver car; preserve portrait framing. Remove baked illustration label for a live HTML label.
- Farhan: navy polo, laptop at a leafy cafe; preserve wide composition. Remove baked label.
- Siti: two women in taupe and pink hijabs beside a silver car; preserve wide composition. Remove baked label.
- Budget: panoramic desk photograph, calculator left, complete notebook and pen visible. Exact notebook text: Bajet Bulanan, Gaji, Perbelanjaan, Simpanan, Kereta. Keep all text safely inside the frame.
- Rejected: panoramic desk with car key and paper; exact text Permohonan Loan Kereta and red Ditolak stamp. Show the complete relevant document.
- Freelancer: panoramic photograph of hijab-wearing woman working on laptop at home; preserve warm natural light and original scene.
- Guarantor: panoramic photograph of two men reviewing documents together; retain the scene and visible paperwork.
- Timeline: panoramic desk photograph with phone and keys; full phone screen visible, Permohonan Loan Kereta heading and first green process step.
- Scam: panoramic clipboard photograph, Senarai Semak heading and the three original checklist rows kept legible and fully in frame.
- CTOS article: panoramic paperwork and calculator photograph with hands and car in background; match original scene.
- Blog feature: concerned man reading paperwork, laptop and car key; retain original 415:302 proportions.
- Home hero: reused the previously generated high-resolution silver-car asset; no additional generation.

## Web delivery

Lossless WebP encoding; native originals are never enlarged during encoding. Derivatives at 640 and 1200 px are intentionally resized for smaller displays. Decoded pixel equality was checked against each prepared input. The manifest records dimensions and byte sizes. Responsive srcset/sizes allows the browser to select a suitable version. Versioned filenames prevent stale image caches. Article social-preview metadata also points to upgraded images.

The article share/info/check/document/calculator/source icons are SVG redraws in the existing blue outline style. Illustration labels on story photos are live HTML for sharp text.

## Verification

- Build: 15 static pages.
- Browser review: home hero/logo, story photos, blog grid and budget article at 2560 px; budget article at 820 and 390 px.
- All seven article routes expose the new responsive hero sources.
- Home, stories, blog and all seven articles: no horizontal overflow at 390 and 820 px; seven article routes also checked at 2560 px.
- Browser console: no errors in the inspected local session.
- Static checks cover links, anchors, structured data and every srcset candidate.
- Screenshots and browser-checks.json are included in the image-upgrade deliverables. These verify the local build; Cloudflare deployment is separate.
