import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        destino: resolve(__dirname, 'destino.html'),
        lotes: resolve(__dirname, 'lotes.html'),
        trayectoria: resolve(__dirname, 'trayectoria.html'),
        contacto: resolve(__dirname, 'contacto.html'),
      },
    },
  },
})
