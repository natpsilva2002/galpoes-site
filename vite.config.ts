import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import ViteSitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [react(),
    ViteSitemap({
  hostname: 'https://galpoesconstrucoes.com.br',
  outDir: 'dist'
})

  ],  
  resolve: {
    alias: {
      '@assets': path.resolve('src/assets') // sem __dirname
    }
  }
});
