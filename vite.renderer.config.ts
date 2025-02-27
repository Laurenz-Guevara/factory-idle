import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@classes': path.resolve(__dirname, 'src/classes'),
      '@context': path.resolve(__dirname, 'src/context'),
    },
  },
});

