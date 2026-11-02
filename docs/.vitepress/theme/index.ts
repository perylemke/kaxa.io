import DefaultTheme from "vitepress/theme";
import "@fontsource/familjen-grotesk/400.css";
import "@fontsource/familjen-grotesk/500.css";
import "@fontsource/familjen-grotesk/600.css";
import "@fontsource/familjen-grotesk/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./custom.css";
import type { Theme } from "vitepress";

export default {
  extends: DefaultTheme,
  enhanceApp() {
    if (typeof document !== "undefined") {
      document.documentElement.classList.add("dark");
    }
  },
} satisfies Theme;
