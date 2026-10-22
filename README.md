# A Little Birthday Magic ♡

A beginner-friendly, mobile-first birthday surprise website built with plain HTML, CSS, and JavaScript. Designed to publish on GitHub Pages.

## Files

- `index.html` — page structure and content
- `style.css` — colors, layout, responsive design, and animations
- `script.js` — personalization and interactive effects
- `images/` — place your own memory photos here

## Personalize it

Open `script.js` and edit the `birthdaySettings` object near the top:

- `friendName`: the name or nickname shown on the page
- `yourName`: the name shown in the footer
- `pageTitle`: the browser tab title

In `index.html`, edit the letter paragraphs and the captions under the photo cards to make them personal.

## Add your photos

Put three photos in the `images` folder and name them exactly:

- `memory-1.jpg`
- `memory-2.jpg`
- `memory-3.jpg`

JPG, PNG, or WebP images are fine, but if you use another extension, update the matching `src` path in `index.html`. For a better mobile experience, use cropped photos around 900 pixels wide and compress very large files.

## Preview locally

Double-click `index.html` to open it in a browser. The page should work without installing anything. The font loads from Google Fonts when internet access is available; fallback fonts are included.

## Publish with GitHub Pages

1. Sign in to GitHub and create a new repository, for example `birthday-surprise`.
2. Upload `index.html`, `style.css`, `script.js`, and the `images` folder to the repository's top level. Keep the filenames and folder paths exactly as shown.
3. Commit the files to the `main` branch.
4. Open the repository's **Settings** tab.
5. In the sidebar, open **Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select branch **main** and folder **/(root)**, then click **Save**.
8. Wait for the deployment to finish. In Settings → Pages, use **Visit site** to open the published website.

A project site normally has an address like `https://YOUR-USERNAME.github.io/birthday-surprise/`. Replace `YOUR-USERNAME` with your GitHub username. Publishing can take a few minutes.

## Important privacy note

A GitHub Pages site is public on the internet. Do not include private information or photos unless everyone pictured is comfortable with that. Anyone who has the link may be able to view it.
