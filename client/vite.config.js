import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
// export default defineConfig({
//    plugins: [react(), compression()],
// })

export default defineConfig({
   plugins: [react()],
   build: {
      outDir: 'dist', // Директория для сборки
      sourcemap: false, // Отключает sourcemap для продакшена
      assetsDir: 'assets',
   },
});
