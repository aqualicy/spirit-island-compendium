import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/spirit-island-compendium/', // Set base for GitHub Pages
  plugins: [react()],
});
