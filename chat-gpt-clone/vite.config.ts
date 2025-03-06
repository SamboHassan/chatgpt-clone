import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
   base: '/',
  plugins: [react(), tsconfigPaths()],
    build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'], // Split React into a separate chunk
          'chakra-ui': ['@chakra-ui/react'], // Separate Chakra UI
        },
      },
    },
  },
})





