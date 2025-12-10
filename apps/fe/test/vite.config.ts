import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@ss-mono/fe/ui/bgr': path.resolve(__dirname, '../../../packages/fe/ui/bgr'),
      '@ss-mono/fe/ui/bgr/button/BGRbutton': path.resolve(__dirname, '../../../packages/fe/ui/bgr/button/BGRbutton'),
    },
  },
  server: {
    watch: {
      // 모노레포의 packages 폴더도 감시하도록 설정
      ignored: ['**/node_modules/**', '**/.git/**'],
    },
    fs: {
      // 모노레포 루트까지 접근 허용
      allow: ['..'],
    },
  },
  optimizeDeps: {
    // 모노레포 패키지도 최적화 대상에 포함
    include: ['react', 'react-dom'],
  },
})
