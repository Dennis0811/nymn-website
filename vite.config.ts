import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/nymn-website/",
  plugins: [tailwindcss()],
});
