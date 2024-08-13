import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    host: "192.168.10.149",
    port: "3005",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});