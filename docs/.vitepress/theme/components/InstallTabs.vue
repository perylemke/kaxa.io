<script setup lang="ts">
import { ref } from "vue";

const tabs = [
  {
    id: "homebrew",
    label: "Homebrew",
    command: "brew install --cask perylemke/tap/kaxa",
  },
  {
    id: "unix",
    label: "macOS / Linux",
    command:
      "curl -fsSL https://github.com/perylemke/kaxa/releases/latest/download/install.sh | sh",
  },
  {
    id: "windows",
    label: "Windows",
    command:
      "irm https://github.com/perylemke/kaxa/releases/latest/download/install.ps1 | iex",
  },
  {
    id: "source",
    label: "Source",
    command: "go install ./cmd/kaxa",
  },
] as const;

const selected = ref(0);
const copied = ref(false);
let resetTimer = 0;

function select(index: number): void {
  selected.value = index;
  copied.value = false;
  document.getElementById(`install-tab-${tabs[index].id}`)?.focus();
}

function onKeydown(event: KeyboardEvent): void {
  const last = tabs.length - 1;
  let next = selected.value;
  if (event.key === "ArrowRight") {
    next = selected.value === last ? 0 : selected.value + 1;
  } else if (event.key === "ArrowLeft") {
    next = selected.value === 0 ? last : selected.value - 1;
  } else if (event.key === "Home") {
    next = 0;
  } else if (event.key === "End") {
    next = last;
  } else {
    return;
  }
  event.preventDefault();
  select(next);
}

async function copy(): Promise<void> {
  const command = tabs[selected.value].command;
  try {
    await navigator.clipboard.writeText(command);
  } catch {
    const area = document.createElement("textarea");
    area.value = command;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
  copied.value = true;
  window.clearTimeout(resetTimer);
  resetTimer = window.setTimeout(() => {
    copied.value = false;
  }, 1600);
}
</script>

<template>
  <div class="install">
    <div
      class="tabs"
      role="tablist"
      aria-label="Install kaxa"
      @keydown="onKeydown"
    >
      <button
        v-for="(tab, index) in tabs"
        :id="`install-tab-${tab.id}`"
        :key="tab.id"
        type="button"
        role="tab"
        class="tab"
        :aria-selected="selected === index"
        :tabindex="selected === index ? 0 : -1"
        :aria-controls="`install-panel-${tab.id}`"
        @click="select(index)"
      >
        {{ tab.label }}
      </button>
    </div>
    <div
      v-for="(tab, index) in tabs"
      v-show="selected === index"
      :id="`install-panel-${tab.id}`"
      :key="tab.id"
      role="tabpanel"
      class="panel"
      :aria-labelledby="`install-tab-${tab.id}`"
    >
      <pre class="command"><code>{{ tab.command }}</code></pre>
      <button type="button" class="copy" @click="copy">
        {{ copied ? "Copied" : "Copy" }}
      </button>
      <span class="sr" aria-live="polite">{{ copied ? "Copied" : "" }}</span>
    </div>
  </div>
</template>

<style scoped>
.install {
  background: #0e1c33;
  border: 1px solid rgba(231, 238, 248, 0.12);
  border-radius: 14px;
  overflow: hidden;
}

.tabs {
  display: flex;
  gap: 0;
  border-bottom: 1px solid rgba(231, 238, 248, 0.1);
  overflow-x: auto;
}

.tab {
  appearance: none;
  background: transparent;
  border: 0;
  border-bottom: 2px solid transparent;
  color: #93a4bd;
  cursor: pointer;
  font: 500 0.92rem/1 "Familjen Grotesk", "Avenir Next", sans-serif;
  margin-bottom: -1px;
  padding: 0.85rem 1rem;
  white-space: nowrap;
}

.tab[aria-selected="true"] {
  color: #e7eef8;
  border-bottom-color: #7eb6ff;
}

.tab:focus-visible,
.copy:focus-visible {
  outline: 2px solid #7eb6ff;
  outline-offset: 3px;
}

.panel {
  position: relative;
  padding: 1.1rem 5.5rem 1.15rem 1.1rem;
}

.command {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
}

.command code {
  font-family: "IBM Plex Mono", ui-monospace, monospace;
  font-size: 0.86rem;
  line-height: 1.55;
  color: #d6e6ff;
}

.copy {
  position: absolute;
  top: 0.85rem;
  right: 0.85rem;
  appearance: none;
  background: #12243f;
  border: 1px solid rgba(231, 238, 248, 0.14);
  border-radius: 8px;
  color: #e7eef8;
  cursor: pointer;
  font: 500 0.78rem/1 "Familjen Grotesk", "Avenir Next", sans-serif;
  padding: 0.45rem 0.65rem;
}

.copy:hover {
  border-color: #7eb6ff;
  color: #7eb6ff;
}

.sr {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
