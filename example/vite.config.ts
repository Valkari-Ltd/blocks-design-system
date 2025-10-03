import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
// Set the base path for GitHub Pages deployment
// Replace 'blocks-design-system' with your repo name if different
const repoName = 'blocks-design-system';

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
  resolve: {
    alias: {
      '@blocks': path.resolve(__dirname, '../src'),
    },
  },
});
