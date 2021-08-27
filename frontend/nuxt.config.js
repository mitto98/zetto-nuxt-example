export default {
  ssr: false,

  target: 'server',

  head: {
    title: 'zetto-nuxt-example',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['bootstrap/scss/bootstrap.scss'],

  plugins: ['@/plugins/portofino.js'],

  components: true,

  buildModules: ['zetto/nuxt'],

  modules: ['@nuxtjs/axios'],

  publicRuntimeConfig: {
    apiUrl: process.env.API_URL || '//tesi.codemoka.io/api',
  },
};
