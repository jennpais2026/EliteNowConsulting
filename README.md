# EliteNow Consulting — SEO Fix Pack

Everything in this folder is ready to commit to your GitHub repo. Once it lands on `main`, Cloudflare Pages will auto-deploy it.

## What's in this folder

```
seo-fixes/
├── README.md                          ← you are here
├── robots.txt                         ← drops in repo root
├── sitemap.xml                        ← drops in repo root
├── contact.html                       ← drops in repo root (new page)
├── footer-fix.html                    ← reference markup to update existing pages
├── meta-tags-snippets.html            ← per-page <head> snippets
├── homepage-faq-section.html          ← FAQ section for the homepage
├── related-services-blocks.html       ← cross-link blocks for each service page
├── schema-homepage.html               ← JSON-LD for the homepage
├── schema-service-itsm.html           ← JSON-LD for ITSM page
├── schema-service-governance.html     ← JSON-LD for Platform Governance page
├── schema-service-integrations.html   ← JSON-LD for Strategic Integrations page
├── schema-service-automation.html     ← JSON-LD for Process Automation page
└── functions/
    └── api/
        └── contact.js                 ← Cloudflare Pages Function for the form
```

## Deployment order — do it in this order

### Step 1: Drop the new root files (5 minutes)

Copy these to the **root of your repo** (same level as `index.html`):

- `robots.txt`
- `sitemap.xml`
- `contact.html`

### Step 2: Add the Cloudflare Pages Function (10 minutes)

Copy the **entire `functions/` directory** to your repo root. The file path matters — it must be exactly `functions/api/contact.js`. Cloudflare reads that directory structure to route `POST /api/contact` to the handler.

**Before this will actually deliver email:** read the comment block at the top of `contact.js` — you need to add two TXT records to your DNS (Cloudflare → DNS → Records) so MailChannels will accept sends from your domain. Five-minute job, instructions are in the file. Without those records, the form will submit but email won't be delivered.

### Step 3: Update each existing HTML page (30 minutes)

For **each of the 5 existing pages** (`index.html`, `it-service-management.html`, `platform-governance.html`, `strategic-integrations.html`, `process-automation.html`):

1. **Open `meta-tags-snippets.html`** in this folder and copy the block for the matching page. Paste it inside `<head>`, right after the existing `<meta name="viewport">` line. This adds canonical, Open Graph, and Twitter Card tags.

2. **Open the matching `schema-*.html` file** and copy the JSON-LD `<script>` blocks. Paste them at the bottom of `<head>`, just before `</head>`.

3. **Update the nav `<li>` for Contact**: change `<a href="#contact">Contact</a>` to `<a href="/contact">Contact</a>`. See `footer-fix.html` for context.

4. **Replace the Contact column in the footer**: see `footer-fix.html`. The current `javascript:void(0);` email and contact-form links get swapped for a real `mailto:` link and a link to the new `/contact` page.

### Step 4: Add the homepage FAQ section (10 minutes)

Open `homepage-faq-section.html` and paste the `<section id="faq">` block into `index.html`, just before the final "Ready to Architect Your Future?" CTA section.

The FAQ section in HTML and the FAQPage JSON-LD in `schema-homepage.html` must say the same thing — if you edit one, edit the other. Google will silently ignore mismatched FAQ schema.

### Step 5: Add cross-link blocks to each service page (10 minutes)

Open `related-services-blocks.html`. There's a block for each of the 4 service pages. Paste each into the bottom of its matching page, just before the final calendar CTA.

### Step 6: Commit, push, deploy

```bash
git checkout -b seo-foundation
git add .
git commit -m "SEO foundation: schema, sitemap, robots, OG tags, contact page"
git push origin seo-foundation
```

Open a PR, review, merge. Cloudflare Pages will auto-deploy within a couple minutes.

### Step 7: Tell Google about it (10 minutes)

This is the step that actually gets you indexed.

1. Go to [Google Search Console](https://search.google.com/search-console).
2. If you don't have a property for `elitenowconsulting.com` yet, add one. Verify ownership via a DNS TXT record (Cloudflare → DNS makes this easy).
3. Once verified: **Sitemaps** in the left nav → submit `https://elitenowconsulting.com/sitemap.xml`.
4. **URL inspection** → paste each of the 5 main URLs (`/`, `/it-service-management`, `/platform-governance`, `/strategic-integrations`, `/process-automation`, `/contact`) → click "Request indexing" for each.
5. Repeat at [Bing Webmaster Tools](https://www.bing.com/webmasters). Bing also feeds DuckDuckGo and several other engines.

### Step 8: Verify everything is working (15 minutes)

Run each of these once everything is live:

- [Schema.org validator](https://validator.schema.org/) — paste each URL, confirm no errors
- [Google Rich Results Test](https://search.google.com/test/rich-results) — paste each URL, confirm Organization, Service, FAQPage, BreadcrumbList show up green
- [PageSpeed Insights](https://pagespeed.web.dev/) — paste each URL, note any LCP / CLS / INP warnings
- [OpenGraph.xyz](https://www.opengraph.xyz/) — paste each URL, confirm the social card preview looks right
- Open `https://elitenowconsulting.com/robots.txt` in a browser — should show the file
- Open `https://elitenowconsulting.com/sitemap.xml` — should show the XML
- Open `https://elitenowconsulting.com/contact` — should show the new page
- Submit a test message through the contact form — should land in `partners@elitenowconsulting.com`

## Open items I left placeholders for

These don't block anything — the site will work fine without them — but the SEO value goes up when they're filled in:

- **Founder full name** in `schema-homepage.html`: search for `TODO: founder full name` and replace
- **1200×630 social-share image** — currently meta tags fall back to your logo, which works but looks odd cropped in LinkedIn/Slack previews. When you have one, save it as `/social-card.png` in your repo root and update the `og:image` and `twitter:image` URLs in every page (search/replace `EliteNowC_logowhiteSleft.png` → `social-card.png`)
- **DNS records for MailChannels** — see the top of `functions/api/contact.js`. Without these the form will submit successfully from the user's perspective but no email will arrive in your inbox

## Want me to open the GitHub PR for you?

Reply with the repo URL (e.g. `github.com/your-username/elitenowconsulting`) and I'll use the GitHub MCP to:

1. Create a `seo-foundation` branch
2. Commit all the files above into the right locations
3. Open a PR with a description matching this README
4. Show you the PR link to review and merge

You'll need to approve GitHub MCP access first if you haven't already.

## What this fix pack does NOT include

These are still on the "Strategic Investments" track from the audit and are bigger projects we should tackle next:

- The `/insights/` blog with cornerstone articles (Technical Debt Audit Guide, OOTB Restoration, etc.)
- Dedicated service pages for CMDB, IRM, ITOM, NowAssist
- The `/case-studies/` hub (the 7,000-user ServiceDesk modernization deserves its own page)
- `/about/founder/` page with full E-E-A-T signals
- HTML versions of Terms / Privacy / Cookie Policy (currently PDFs)

Let me know which of those you want to tackle next and I'll write that code too.
