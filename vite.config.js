import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'assets', // Directory for placing static assets in dist directory. Default is "assets".
    rollupOptions: {
      output: {
        // Keeping a consistent naming structure
        assetFileNames: 'assets/[name].[hash].[ext]',
      }
    }
  }
})
