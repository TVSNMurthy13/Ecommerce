import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mkcert from 'vite-plugin-mkcert';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    https: {
      key: undefined,
      cert: undefined,  
    },
    proxy: {
      // redirect API calls to the backend to avoid CORS and certificate issues
      '/api': {
        target: 'https://localhost:5043',
        changeOrigin: true,
        secure: false, // allow self-signed backend cert
      },
    },
  },
})
