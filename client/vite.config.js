import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
   plugins: [react()],
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
