// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-04-11',
  ssr: false,
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],

  i18n: {
    restructureDir: false,
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'fr', file: 'fr.json' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    lazy: false,
    langDir: 'locales'
  },

  css: [
    '~/assets/css/main.css'
  ],

  app: {
    head: {
      title: 'Nizaar Znagui | Portfolio',
      meta: [
        { name: 'description', content: 'Professional Portfolio of Nizaar Znagui' }
      ]
    }
  },

  build: {
    transpile: ['lucide-vue-next', 'gsap']
  }
})
