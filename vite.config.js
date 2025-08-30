import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      '@': '/src', // This maps '@' to your 'src' directory
      // You can add more aliases here if needed, e.g.,
      // '@components': '/src/components',
      // '@utils': '/src/utils',
    },
  }
})
