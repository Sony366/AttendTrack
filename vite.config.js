import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react({
      // Fast Refresh (HMR) explicitly enable karne ke liye
      fastRefresh: true,
    }),
    tailwindcss(),
  ],
  server: {
    watch: {
      usePolling: true, // Windows file-watching fix
    },
  },
})