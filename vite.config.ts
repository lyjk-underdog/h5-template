import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { svgBuilder } from 'vite-svg-plugin'
import { viteMockServe } from 'vite-plugin-mock';
import IconTypes from './plugin/vite-plugin-icon2ts';
 
// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      resolvers: [VantResolver()],
      dts: 'types/auto-imports.d.ts',
    }),
    Components({
      dirs: ['src/components'],
      resolvers: [VantResolver()],
      dts: 'types/components.d.ts'
    }),
    svgBuilder({ path: './src/icons/svg/', prefix: 'icon' }),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: command === 'serve',
      prodEnabled: false
    }),
    IconTypes({
      path: fileURLToPath(new URL('./src/icons/svg', import.meta.url)),
      outFile:'types.ts',
      typeName:'IconClass'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}))
