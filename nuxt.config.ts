export default defineNuxtConfig({
  compatibilityDate: '2024-05-03',
  ssr: true,
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],

  i18n: {
    baseUrl: 'https://nizaarznagui.fr',
    restructureDir: false,
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json' }
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
      title: 'Nizaar Znagui | Fullstack Developer Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Explore the portfolio of Nizaar Znagui, a Fullstack Developer specializing in Nuxt 3, Vue, and modern web technologies. Discover interactive 3D experiences and professional projects.' },
        { name: 'keywords', content: 'Nizaar Znagui, Fullstack Developer, Nuxt 3, Vue 3, Portfolio, Web Development, JavaScript, TypeScript, Freelance Developer' },
        { name: 'author', content: 'Nizaar Znagui' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://nizaarznagui.fr/' },
        { property: 'og:title', content: 'Nizaar Znagui | Fullstack Developer' },
        { property: 'og:description', content: 'Interactive developer portfolio featuring a unique 3D desk experience and modern fullstack projects.' },
        { property: 'og:image', content: 'https://nizaarznagui.fr/img/og-image.png' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://nizaarznagui.fr/' },
        { name: 'twitter:title', content: 'Nizaar Znagui | Fullstack Developer' },
        { name: 'twitter:description', content: 'Interactive developer portfolio featuring a unique 3D desk experience.' },
        { name: 'twitter:image', content: 'https://nizaarznagui.fr/img/og-image.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://nizaarznagui.fr' }
      ]
    }
  },

  build: {
    transpile: ['lucide-vue-next', 'gsap']
  }
})
