# Amira — Journeys in Egypt

Next.js (App Router) site, statically prerendered and deployed on Vercel.

```bash
bun install
bun --bun next dev     # http://localhost:3000
bun --bun next build
```

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://example.com`) in Vercel so canonical URLs, Open Graph images and the sitemap use the real domain.

## Layout

| Path | What it is |
|---|---|
| `app/` | One route per page: `/`, `/collections`, `/collections/[slug]`, `/trips`, `/trips/[slug]`, `/find-your-egypt`, `/plan-my-trip`, plus `sitemap.xml` and `robots.txt`. Each page sets its own metadata and JSON-LD. |
| `lib/data.js` | All site content: trips, collections, day plans, reviews, finder steps. |
| `lib/routes.js`, `lib/seo.ts` | URL ↔ page mapping; metadata and structured data helpers. |
| `components/lx/LuxxataApp.jsx` | Shared state and render values for every page (ported from the old single-page app), mounted in the root layout. |
| `components/lx/views/*View.jsx` | Page markup. `Shell.generated.jsx` is the header, popup, WhatsApp button and footer. |
| `public/images/` | WebP images; `u/` holds the self-hosted Unsplash photos. Regenerate with `bun scripts/optimize-images.mjs`. |
| `legacy/` | The previous hand-rolled SPA, kept for reference until the migration is signed off. |

## Leads sheet

"Send my brief" and the popup form post to `/api/enquiry`, which appends a row to the
"Amira Meta Leads" Google Sheet through a small Apps Script web app. Setup steps are at the
top of `scripts/sheets-webhook.gs`; then set `SHEETS_WEBHOOK_URL` and `SHEETS_WEBHOOK_SECRET`
(see `.env.example`). Without them the form shows a "couldn't send" message.
