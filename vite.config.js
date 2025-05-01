import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src', // This is usually the alias used for the src directory in Vite projects
    },
  },
  plugins: [
    react(),
    tailwindcss()
  ],
})
