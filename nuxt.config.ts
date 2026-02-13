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
      Inter: {
        wght: [400, 500, 600, 700],
      },
      'Montserrat Alternates': {
        wght: [400, 500, 600, 700],
      },
      Adamina: {
        wght: [400],
      },
      Montserrat: {
        wght: [400, 500, 600, 700],
      },
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
      strapiURL: process.env.STRAPI_API || 'http://95.216.143.122:1337/api',
      strapiAPI:
        process.env.API_KEY ||
        'cc29d7c1b2ab6f7dc1c60fb7201c0177c754317802360b4e5ea46e65b5e9b2c0aa7144262e29ace5296cebdaeb4842626f8b65f61aab086bde92424b209186d7998e3ccb48cb6539c98302b9bd05acdfba2cfc1aeac58bbe609b5da1a9982d3ece057922952b9db3a21c0491a941277e18f4ae158d9750a12958d349e86f4e45',
    },
  },
});
