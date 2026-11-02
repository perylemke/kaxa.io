<script setup lang="ts">
import InstallTabs from "./InstallTabs.vue";

const providers = [
  { name: "Sprites", href: "/providers/sprites" },
  { name: "Modal", href: "/providers/modal" },
  { name: "E2B", href: "/providers/e2b" },
  { name: "Docker", href: "/providers/docker" },
  { name: "Daytona", href: "/providers/daytona" },
];

const steps = [
  {
    n: "01",
    title: "Install",
    text: "Homebrew on macOS, a script on Linux and Windows, or a build from source.",
  },
  {
    n: "02",
    title: "Export a token",
    text: "Set KAXA_DEFAULT_PROVIDER and the token for the provider you use. Flags override the environment.",
  },
  {
    n: "03",
    title: "Create a sandbox",
    text: "kaxa create starts one. kaxa exec runs a command. kaxa destroy removes it.",
  },
];

const commands = [
  { name: "version", hint: "Print the version", href: "/commands/version" },
  { name: "create", hint: "Start a sandbox", href: "/commands/create" },
  { name: "list", hint: "Show sandboxes", href: "/commands/list" },
  { name: "exec", hint: "Run a command", href: "/commands/exec" },
  { name: "console", hint: "Open a shell", href: "/commands/console" },
  { name: "sync", hint: "Copy a repository", href: "/commands/sync" },
  { name: "restart", hint: "Reboot from disk", href: "/commands/restart" },
  { name: "upgrade", hint: "Move to a new platform", href: "/commands/upgrade" },
  { name: "snapshot", hint: "Save and restore disk", href: "/commands/snapshot" },
  { name: "url", hint: "Set URL access", href: "/commands/url" },
  { name: "destroy", hint: "Delete a sandbox", href: "/commands/destroy" },
  { name: "mcp", hint: "Serve sandboxes to agents", href: "/agents/mcp" },
];
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero-copy">
        <img class="lockup" src="/kaxa-logo.png" width="220" height="220" alt="Kaxa" />
        <p class="eyebrow">Command line</p>
        <h1>One CLI for sandbox providers</h1>
        <p class="lede">
          kaxa puts isolated execution environments behind one command-line
          interface for multiple sandbox providers.
        </p>
      </div>
      <div class="hero-install">
        <InstallTabs />
        <p class="more">
          <a href="/installation">All install options</a>
        </p>
      </div>
    </section>

    <section class="providers" aria-label="Providers">
      <p>Works with</p>
      <ul>
        <li v-for="provider in providers" :key="provider.name">
          <a :href="provider.href">{{ provider.name }}</a>
        </li>
      </ul>
    </section>

    <section class="steps" aria-labelledby="quick-start">
      <h2 id="quick-start">Quick start</h2>
      <ol>
        <li v-for="step in steps" :key="step.n">
          <span>{{ step.n }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </li>
      </ol>
      <pre class="sample"><code>export KAXA_DEFAULT_PROVIDER=sprites
export KAXA_SPRITES_TOKEN=...

kaxa create my-sprite
kaxa exec my-sprite -- ls -la</code></pre>
    </section>

    <section class="commands" aria-labelledby="manuals">
      <h2 id="manuals">Manuals</h2>
      <ul>
        <li v-for="command in commands" :key="command.name">
          <a :href="command.href">
            <code>{{ command.name }}</code>
            <span>{{ command.hint }}</span>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.home {
  width: min(1080px, calc(100% - 3rem));
  margin: 0 auto;
  padding: 1.5rem 0 4.5rem;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 1.05fr);
  gap: 3rem;
  align-items: center;
  padding: 2.5rem 0 3.5rem;
  animation: rise 560ms ease both;
}

.lockup {
  width: 168px;
  height: auto;
  margin: 0 0 1.25rem;
}

.eyebrow {
  margin: 0 0 0.6rem;
  color: #7eb6ff;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

h1,
h2,
h3 {
  font-family: "Familjen Grotesk", "Avenir Next", sans-serif;
  letter-spacing: -0.03em;
}

h1 {
  margin: 0;
  max-width: 12ch;
  color: #e7eef8;
  font-size: clamp(2.4rem, 4vw, 3.5rem);
  font-weight: 600;
  line-height: 0.98;
}

.lede {
  margin: 1rem 0 0;
  max-width: 38ch;
  color: #93a4bd;
  font-size: 1.08rem;
  line-height: 1.55;
}

.more {
  margin: 0.9rem 0 0;
}

.more a {
  color: #7eb6ff;
  font-weight: 500;
  text-decoration: none;
}

.more a:hover {
  text-decoration: underline;
  text-underline-offset: 0.16em;
}

.providers {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  align-items: baseline;
  padding: 1.1rem 0;
  border-top: 1px solid rgba(231, 238, 248, 0.1);
  border-bottom: 1px solid rgba(231, 238, 248, 0.1);
}

.providers p {
  margin: 0;
  color: #6e829c;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.providers ul,
.commands ul,
.steps ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

.providers ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 1.1rem;
}

.providers a {
  color: #e7eef8;
  text-decoration: none;
  font-weight: 500;
}

.providers a:hover {
  color: #7eb6ff;
}

.steps {
  padding: 3.25rem 0 0;
}

.steps h2,
.commands h2 {
  margin: 0 0 1.25rem;
  color: #e7eef8;
  font-size: 1.35rem;
  font-weight: 600;
}

.steps ol {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

.steps li {
  margin: 0;
  padding: 1.1rem 1.1rem 1.2rem;
  background: #0e1c33;
  border: 1px solid rgba(231, 238, 248, 0.1);
  border-radius: 14px;
}

.steps span {
  color: #7eb6ff;
  font-family: "IBM Plex Mono", ui-monospace, monospace;
  font-size: 0.78rem;
}

.steps h3 {
  margin: 0.45rem 0 0.35rem;
  color: #e7eef8;
  font-size: 1.15rem;
  font-weight: 600;
}

.steps p,
.sample {
  margin: 0;
  color: #93a4bd;
  line-height: 1.5;
}

.sample {
  margin-top: 1.25rem;
  padding: 1.1rem 1.2rem;
  overflow-x: auto;
  background: #0b1728;
  border: 1px solid rgba(231, 238, 248, 0.1);
  border-radius: 14px;
  color: #d6e6ff;
  font-family: "IBM Plex Mono", ui-monospace, monospace;
  font-size: 0.86rem;
  line-height: 1.6;
}

.commands {
  padding-top: 3.25rem;
}

.commands ul {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}

.commands a {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  height: 100%;
  padding: 0.95rem 1rem;
  background: transparent;
  border: 1px solid rgba(231, 238, 248, 0.1);
  border-radius: 12px;
  color: inherit;
  text-decoration: none;
}

.commands a:hover {
  border-color: #7eb6ff;
  background: #0e1c33;
}

.commands code {
  color: #e7eef8;
  font-family: "IBM Plex Mono", ui-monospace, monospace;
  font-size: 0.92rem;
}

.commands span {
  color: #93a4bd;
  font-size: 0.92rem;
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 860px) {
  .hero,
  .steps ol,
  .commands ul {
    grid-template-columns: 1fr;
  }

  .hero {
    gap: 2rem;
    padding-top: 1.5rem;
  }

  h1 {
    max-width: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero {
    animation: none;
  }
}
</style>
