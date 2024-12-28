import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
// export default defineConfig({
//    plugins: [react(), compression()],
// })

export default defineConfig({
   plugins: [react()],
   base: '/komedija-com-v2/',
   build: {
      outDir: 'dist', // Директория для сборки
      sourcemap: false, // Отключает sourcemap для продакшена
      assetsDir: 'assets',
      rollupOptions: {
         output: {
            // Для CSS файлов
            entryFileNames: 'assets/[name].js',
            chunkFileNames: 'assets/[name].js',
            assetFileNames: 'assets/[name][extname]',
         }
      },
   },
});
