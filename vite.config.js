import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/shadowspectra-site/', // NOME EXATO DO TEU REPOSITÓRIO
  plugins: [react()],
})
