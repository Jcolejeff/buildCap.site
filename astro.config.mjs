import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from "@astrojs/node";

import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
   build: {
      inlineStylesheets: `never`,
   },

   integrations: [tailwind(), react(), relativeLinks()],
});
