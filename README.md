# Sahi Sauda

Sahi Sauda is a bright, mobile-first, direct-owner property website focused on Balicha Plot 6. Built with plain HTML, CSS, and a little JavaScript. No build step or package installation.

## Preview locally

Open `index.html` directly in your browser, or run this command from the project directory:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Then visit http://127.0.0.1:8080. Stop the server with Ctrl+C.

## Pages and assets

- `index.html`: Balicha-led homepage with real property photos, essential facts, owner introduction, FAQs, and persistent mobile contact actions. Dheekli appears as a separate secondary listing.
- `property-balicha.html`: Plot 6 details, photographs, site plan, and location.
- `property-dheekli-plot38.html`: Plot 38 details, photograph, plans, PDF downloads, and location.
- `site.css`: shared styling and responsive layouts; supports reduced motion.
- `property-gallery.js`: accessible photo viewer with keyboard navigation and focus restoration.
- `images/sahi-sauda-mark.svg`: scalable plot-and-checkmark logo; also used as the favicon.
- `images/` and `documents/`: existing property photographs, plans, and documents.

Prices and property information should be confirmed with the owner before publishing changes. WhatsApp links prepare a message for the visitor to send; no enquiry is submitted automatically.

Google Fonts and embedded Google Maps use an internet connection. System font fallbacks and direct map links are included. Placeholder analytics integrations from the previous design have been removed; add verified analytics IDs when ready to configure tracking.

The site is a static website. Preview changes locally before publishing through the repository’s deployment workflow.
