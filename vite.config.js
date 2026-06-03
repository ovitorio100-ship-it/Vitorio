import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        obrigado: resolve(__dirname, 'obrigado.html'),
        privacy: resolve(__dirname, 'atendeos/privacy/index.html'),
        terms: resolve(__dirname, 'atendeos/terms/index.html'),
        pipeline: resolve(__dirname, 'leads/pipeline/index.html'),
      }
    }
  }
});
