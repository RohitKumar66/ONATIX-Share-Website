# ONATIX Share

A responsive product website for ONATIX Share, a local-network file and clipboard sharing app for Windows and Android. The site includes product features, a screenshot walkthrough, setup steps, FAQs, and download links.

## Preview locally

Open `index.html` in a browser, or serve the project folder with a static web server. No build step or package installation is required.

## Project files

- `index.html` — page content and structure
- `style.css` — responsive layout, styling, and animations
- `script.js` — mobile navigation, download link setup, and scroll reveals
- `assets/` — product logo and Windows/Android screenshots

## Configure downloads

Set the Windows, Android, and GitHub release URLs in the `RELEASE` object near the top of `script.js`. Until a platform download URL is configured, its button is marked as coming soon.
