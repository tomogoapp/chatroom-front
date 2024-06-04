
import { createResolver } from '@nuxt/kit'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    port: 8015
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' }
      ]
    }
  },
  plugins: [
    '@/plugins/initAuth'
  ],
  build: {
    transpile: ['vuetify'],
  },
  css: ['vuetify/styles','@mdi/font/css/materialdesignicons.min.css'],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@vueuse/nuxt',
    [
      '@pinia/nuxt',{
        autoImports: ['defineStore','storeToRefs']
      }
    ]
  ],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || 'http://localhost:3000'
    }
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})