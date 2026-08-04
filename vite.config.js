import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Vitalimetro/',
  plugins: [react()],
  build: {
    // Security: Minify and obfuscate production builds
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true, // Remove debugger statements
      },
      mangle: true, // Obfuscate variable names
      output: {
        comments: false, // Remove comments
      },
    },
    // Security: Disable source maps in production to prevent source code exposure
    sourcemap: false,
  },
  define: {
    // Security: Strip debug code in production
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
})
