import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const repo = 'Pu'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${repo}/`,
})
