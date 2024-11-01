// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    externalVue: false,
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/svg-sprite',
    'nuxt-swiper',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/eslint',
  ],
  googleFonts: {
    families: {
      Inter: true,
      Montserrat: true,
    },
  },
  css: ['@/assets/scss/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;',
        },
      },
    },
    server: {
      hmr: {
        overlay: false,
      },
    },
  },
  runtimeConfig: {
    public: {
      strapiURL: process.env.STRAPI_API || 'https://benjamin-kalu-cms.onrender.com/api',
      strapiAPI:
        process.env.API_KEY ||
        '40c5026243247daf24bd4561fbfc7efa64182b56bf1528c33aa704792dee746cef4dca364fc7923393ec2eb035aefa1ee85e66549202550a6d299255fa9b7d98ad862eb22ae71ccf3796c8e745d290a3fc6022844e3785308258fc96434b40524c5fba18643bdb97ffde43de62abfde87a12a7bea909f279f9d6c64129b931b9',
    },
  },
});
