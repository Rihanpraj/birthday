import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/birthday-for-jeny/' : '/',
  plugins: [react()],
  server: {
    host: true,
  },
}))
