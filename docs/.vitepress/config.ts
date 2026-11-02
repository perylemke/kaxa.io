import { defineConfig } from "vitepress";

export default defineConfig({
  title: "kaxa",
  titleTemplate: ":title | kaxa",
  description:
    "One CLI for sandbox providers. Install kaxa and read the manuals for Sprites, Modal, E2B, Docker, and Daytona.",
  lang: "en-US",
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: false,
  appearance: false,
  base: "/",
  vite: {
    server: {
      allowedHosts: [".ngrok-free.dev", ".ngrok-free.app", ".ngrok.io", ".ngrok.app"],
    },
  },
  sitemap: {
    hostname: "https://kaxa.io",
  },
  head: [
    ["link", { rel: "icon", href: "/kaxa-logo.png" }],
    ["meta", { name: "theme-color", content: "#07111F" }],
    ["meta", { property: "og:title", content: "kaxa" }],
    [
      "meta",
      {
        property: "og:description",
        content: "One CLI for sandbox providers.",
      },
    ],
    ["meta", { property: "og:image", content: "https://kaxa.io/kaxa-logo.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { name: "twitter:card", content: "summary" }],
  ],
  markdown: {
    theme: "github-dark-dimmed",
  },
  themeConfig: {
    logo: { src: "/kaxa-logo.png", alt: "kaxa", height: 48, width: 48 },
    siteTitle: false,
    nav: [
      { text: "Docs", link: "/getting-started" },
      { text: "GitHub", link: "https://github.com/perylemke/kaxa" },
    ],
    sidebar: [
      { text: "Getting started", link: "/getting-started" },
      { text: "Installation", link: "/installation" },
      { text: "Configuration", link: "/configuration" },
      {
        text: "Commands",
        items: [
          { text: "version", link: "/commands/version" },
          { text: "create", link: "/commands/create" },
          { text: "list", link: "/commands/list" },
          { text: "exec", link: "/commands/exec" },
          { text: "console", link: "/commands/console" },
          { text: "sync", link: "/commands/sync" },
          { text: "restart", link: "/commands/restart" },
          { text: "upgrade", link: "/commands/upgrade" },
          { text: "snapshot", link: "/commands/snapshot" },
          { text: "url", link: "/commands/url" },
          { text: "destroy", link: "/commands/destroy" },
        ],
      },
      {
        text: "Providers",
        items: [
          { text: "Sprites", link: "/providers/sprites" },
          { text: "Modal", link: "/providers/modal" },
          { text: "E2B", link: "/providers/e2b" },
          { text: "Docker", link: "/providers/docker" },
          { text: "Daytona", link: "/providers/daytona" },
        ],
      },
      {
        text: "AI agents",
        items: [{ text: "MCP", link: "/agents/mcp" }],
      },
    ],
    editLink: {
      pattern: "https://github.com/perylemke/kaxa.io/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    footer: {
      message:
        '<a href="https://github.com/perylemke/kaxa">GitHub</a> · <a href="https://github.com/perylemke/kaxa/releases">Releases</a>',
      copyright:
        '<a href="https://github.com/perylemke/kaxa/blob/main/LICENSE">Apache License 2.0</a>',
    },
    search: {
      provider: "local",
    },
    outline: {
      label: "On this page",
      level: [2, 3],
    },
    docFooter: {
      prev: "Previous",
      next: "Next",
    },
  },
});
