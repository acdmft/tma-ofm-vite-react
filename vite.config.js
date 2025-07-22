import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwinddcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwinddcss()],
  // server: {
  //   allowedHosts: [/\.ngrok-free\.app$/],
  //   host: true,
  // },
});
