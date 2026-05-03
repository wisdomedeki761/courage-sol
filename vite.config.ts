import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  publicDir: 'image',
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      'hls.js': resolve(__dirname, 'src/mock-hls.js'),
    },
  },
});
