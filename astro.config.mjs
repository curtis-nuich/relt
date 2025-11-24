// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.reltutoring.org",
  base: "/v2",
  outDir: "./dist/v2",
  build: {
    assets: "_assets",
  },
});
