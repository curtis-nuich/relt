// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.reltutoring.org",
  base: "/",
  outDir: "./dist",
  build: {
    assets: "_assets",
  },
});
