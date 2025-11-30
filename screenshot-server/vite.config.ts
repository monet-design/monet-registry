import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  // 메인 프로젝트의 public 폴더를 사용하여 이미지 로드
  publicDir: path.resolve(__dirname, "../public"),
  server: {
    port: 4173,
    host: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "motion/react", "lucide-react"],
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
});
