import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
// Set the base path for GitHub Pages deployment
// Replace 'blocks-design-system' with your repo name if different
const repoName = 'blocks-design-system';
// Use VITE_BASE env var if set, else default to GitHub Pages path
const base = process.env.VITE_BASE || `/${repoName}/`;

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      '@blocks': path.resolve(__dirname, '../src'),
    },
    // Prevent bundling a second copy of React into the example app.
    // This ensures hooks (useState, etc.) come from the same React instance.
    dedupe: ['react', 'react-dom'],
  },
});
