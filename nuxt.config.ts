// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],

  nitro: {
    serveStatic: true,
    publicAssets: [
      {
        baseURL: '/',
        dir: 'public',
        maxAge: 60 * 60 * 24 * 365
      }
    ]
  },

  i18n: {
    locales: [
      { code: 'de', iso: 'de-DE', file: 'de.json', name: 'Deutsch' },
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' }
    ],
    langDir: 'locales',
    defaultLocale: 'de',
    strategy: 'prefix_except_default'
  },

  app: {
    head: {
      title: 'GTAS',
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' }
      ]
    }
  }
})