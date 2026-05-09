import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/birthday/',
  plugins: [react()],
  server: {
    host: true,
  },
})
