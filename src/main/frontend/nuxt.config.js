export default {
  ssr: false,

  target: 'static',

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

  plugins: ['@/plugins/portofino.js'],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    'zetto/nuxt',
  ],

  modules: ['@nuxtjs/axios'],

  build: {
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  },
  
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL || '/api',
  },
};
