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
    'nuxt-swiper',
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
        '920b6a15fcd2dc0e70cf9fbe96db28b11ad8f6bf3b45a39941b951f5d1d3f7eb348cfbd9944ded164c4b9c49dc9b5cee3f0f89eb29d2ce5dcc9137f3e66466f1b3be23ba69446ef44fd9ce83b6f8768cb4def4563c26dd615e9beb5ec19b94dbda236bb6cdd9a159259632bcf7cc5ef58b20ea62fff05c2860cbdd76c2fae383',
    },
  },
});
