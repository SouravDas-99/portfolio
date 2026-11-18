# Sourav Das — Portfolio

Static, dependency-free portfolio site. Plain HTML, CSS and JavaScript; no build step.

## Structure

    index.html          Page shell (semantic markup, meta/OG tags, script loading)
    404.html            Custom not-found page
    css/styles.css      All styles and animations
    js/content.js       YOUR CONTENT. Edit text, links, projects, skills, experience here.
    js/main.js          Rendering, animations, modal, navigation (no need to edit)
    assets/             Favicon, OG image (add og-image.png, 1200x630)
    robots.txt          Crawler rules (update the domain)
    sitemap.xml         Sitemap (update the domain)
    _headers            Security headers and caching (Netlify / Cloudflare Pages)

## Before going live

1. Replace every `YOUR-DOMAIN.com` in index.html, robots.txt and sitemap.xml.
2. In js/content.js replace the email, LinkedIn and YouTube placeholders.
3. Add assets/og-image.png (1200 x 630) for link previews.
4. Remove or confirm any "*" figures and placeholder text such as "YEAR TO CONFIRM" and "DETAILS TO ADD".

## Run locally

    npx serve .
    # or
    python3 -m http.server 8080

Open http://localhost:8080.

## Deploy

- Netlify / Cloudflare Pages: drag the folder into the dashboard, or connect the Git repo. `_headers` is picked up automatically. Build command: none. Publish directory: `.`
- Vercel: works as-is for static files. Move the security headers into vercel.json if you want them there.
- GitHub Pages: works, but cannot set the `_headers` security headers.

## Notes

- The Lenis smooth-scroll library loads from jsDelivr (pinned to 1.1.13). If the CDN is blocked the site still works, with native scrolling.
- Google Fonts are loaded from Google. For fully self-hosted fonts, download them into assets/fonts and update the @font-face source.
