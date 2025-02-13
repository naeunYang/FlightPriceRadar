import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // '/api'로 시작하는 모든 요청은 http://localhost:5000으로 보내짐
    proxy: {
      "/api": {
        target: "http://localhost:5000", // 백엔드 서버 주소
        changeOrigin: true,
        secure: false,
      }
    }
  }
  // 프록시 설정을 안한 url로 요청 시 Vite는 해당 경로를 API 요청이 아닌 정적 파일 요청으로 처리한다.
  // 따라서 프록시에 의해 localhost:5000로 전달되지 않고 Vite의 index.html을 반환함
})