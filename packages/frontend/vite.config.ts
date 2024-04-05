import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// 自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 自动导入图标
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const env = loadEnv(configEnv.mode, process.cwd());
  return {
    base: env.VITE_BASE_PATH,

    plugins: [
      vue(),

      AutoImport({
        imports: ["vue", "vue-router"],
        resolvers: [
          ElementPlusResolver(),
        ],
      }),

      Components({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: 'icon',
          }),
        ],
      }),

      Icons(),
    ],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
