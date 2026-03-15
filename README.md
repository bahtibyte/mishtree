# Mishtree – Linktree-style link page

A minimal single-page React app that shows a vertical list of clickable link cards (like Linktree).

## Run locally

```bash
npm install
npm run dev
```

Then open the URL shown (e.g. http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Images

Put your card images in `public/images/` and name them as in `src/data/links.js` (e.g. `youtube.jpg`, `instagram.jpg`). You can also use any image URL in the `image` field.

## Project structure

- `src/App.jsx` – main page
- `src/components/LinkCard.jsx` – single link card
- `src/data/links.js` – list of links (edit here to add/change links)
- `src/styles/app.css` – page layout
- `src/styles/linkcard.css` – card styles
- `public/images/` – place your images here
