import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/portfolio/",
  preview: {
    host: true,
    port: 8080,
  },
  server: {
    // https://github.com/vitejs/vite/issues/16522#issuecomment-2432846922
    port: 5173,
    host: "127.0.0.1",
  },
});
