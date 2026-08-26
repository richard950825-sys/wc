# WC

WC is a mobile-first public toilet direction sign prepared for GitHub Pages.

Tap the distance to edit it. Tap the arrow to rotate it in 45-degree steps.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Production build

```bash
npm run build
```

The static site is generated in `out/`.

## Publish with GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Run the **Deploy to GitHub Pages** workflow, or push a new commit to `main`.

The build detects the repository name automatically, so it supports both
`username.github.io` repositories and project sites such as
`username.github.io/wc/`.
