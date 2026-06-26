import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// `base` is the repo sub-path on GitHub Pages for production builds,
// and root ("/") during local development.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/pavan-sandeep-portfolio/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
}));
