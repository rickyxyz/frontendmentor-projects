import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://rickyxyz.dev/frontendmentor-projects/loopstudios-landing-page-main",
  build: {
    outDir: "../../loopstudios-landing-page-main",
  },
});
