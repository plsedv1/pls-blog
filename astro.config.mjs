// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://www.pls-edv.de",
  output: "hybrid", // statisch + SSR gemischt (nur Seiten mit prerender=false sind SSR)
  adapter: netlify(), // Netlify-Adapter aktivieren
  integrations: [tailwind(), sitemap()],
});
