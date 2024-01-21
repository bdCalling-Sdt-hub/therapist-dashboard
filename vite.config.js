import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: "103.145.138.78",
  //   port: "3005",
  // },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});