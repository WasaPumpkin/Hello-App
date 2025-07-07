import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // For S3 deployment
  build: {
    outDir: 'dist',
  },
});
