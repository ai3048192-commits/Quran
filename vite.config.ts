import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // هذا يسمح لك باستخدام '@/' للوصول لمجلد src مباشرة بدلاً من '../'
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000, // تحديد المنفذ الافتراضي للتشغيل المحلي
  },
})
