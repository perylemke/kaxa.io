# kaxa.io

Documentation site for [kaxa](https://github.com/perylemke/kaxa), published at [kaxa.io](https://kaxa.io).

The site is a static [VitePress](https://vitepress.dev) build. Pages live in `docs/`. The homepage is a custom layout. Command, provider, and MCP manuals are adapted from the kaxa repository.

## Develop

Requires Node 22.

```bash
npm install
npm run dev
```

`npm run dev` serves the site at `http://127.0.0.1:5173`. `npm run build` writes `docs/.vitepress/dist` and checks that `index.html` and `CNAME` are there. `npm run preview` serves that directory.

## GitHub Pages

Workflows:

- `.github/workflows/ci.yml` builds on every pull request.
- `.github/workflows/pages.yml` builds and deploys on every push to `main`, and when the workflow is run by hand.

The VitePress `base` is `/`, and `docs/public/CNAME` contains `kaxa.io`. The project URL `https://perylemke.github.io/kaxa.io/` does not serve the assets, because they are rooted at the custom domain.

One-time setup in the GitHub repository:

1. Settings → Pages → Build and deployment → Source: GitHub Actions.
2. After the first deploy, set Custom domain to `kaxa.io` and enable Enforce HTTPS.

DNS at the registrar:

- Apex `kaxa.io`: `A` records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- `www.kaxa.io`: `CNAME` to `perylemke.github.io`.

## License

Apache License 2.0. See [LICENSE](LICENSE).
