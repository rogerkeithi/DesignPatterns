import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { 
    https: {
      key: fs.readFileSync('backend/key.pem'),
      cert: fs.readFileSync('backend/cert.pem'),
    },
  },
  proxy: {
    '/api': {
         target: 'https://localhost:5000',
         changeOrigin: true,
         secure: true,      
         ws: true,
     }
}
})
