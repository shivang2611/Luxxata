Luxxata site: plain HTML, CSS and JavaScript (no React, no build step).

Open index.html in a browser, or upload the whole folder to any static host.
Pages use hash links (index.html#/about-us), so no server rewrites are needed.

Folders
  css/     tokens.css (colours, type, spacing) plus one stylesheet per section
  js/      data.js (all copy), then the page and animation scripts, app.js last
  assets/  logo.png
  images/  photos, filled by download-images.sh (113 files listed in images-list.txt)

Notes
  - Fonts (Amiri, Arsenal, Roboto, Inter) load from Google Fonts in css/tokens.css. Add local font files and @font-face rules for fully offline use.
  - Missing photos fall back to the live luxxata.com URL, then to a labelled placeholder.
  - Facebook, Instagram and LinkedIn footer links are generic profile roots until the real URLs are supplied.
