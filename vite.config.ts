import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoPrefixer from 'autoprefixer'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  // root: path.join(__dirname, 'src'),// 入口index.html文件位置自定义
  plugins: [vue(), WindiCSS()],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@assets': path.join(__dirname, 'src/assets/')
    }
  },
  css: {
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
      hashPrefix: "prefix", // 在生成hash的时候加盐，生成更加唯一hash，不容易碰撞
    },
    preprocessorOptions: {
      less: {
        additionalData: `@import "src/assets/styles/var.less";`
      }
    },
    postcss: {
      plugins: [
        AutoPrefixer({overrideBrowserslist: ['chrome > 40', 'ff > 31', 'ie 11']})
      ]
    }
  }
})
