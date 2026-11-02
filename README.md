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

## License

Apache License 2.0. See [LICENSE](LICENSE).
