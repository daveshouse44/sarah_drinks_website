// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "pes5zq7r",
      dataset: "production",
      useCdn: false,
      apiVersion: "2024-09-14",
      studioBasePath: "/admin",
    }),
    sanity(),
    react(),
    tailwind(),
  ],
});
