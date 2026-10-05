import { defineConfig } from "astro/config";
import seoGraph from "@jdevalk/astro-seo-graph/integration";

// https://astro.build/config
export default defineConfig({
  site: "https://burbank.dental",
  output: "static",
  build: {
    format: "file",
  },
  integrations: [
    seoGraph({
      validateH1: true,
      validateUniqueMetadata: true,
      validateImageAlt: true,
      validateInternalLinks: true,
    }),
  ],
});
