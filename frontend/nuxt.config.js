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

  plugins: ['@/plugins/portofino.js', '@/plugins/vue-plugins.js'],

  components: true,

  buildModules: ['zetto/nuxt'],

  modules: ['@nuxtjs/axios', 'bootstrap-vue/nuxt'],

  axios: {
    baseURL: process.env.API_URL || '//tesi.codemoka.io/api',
  },

  publicRuntimeConfig: {
    apiUrl: process.env.API_URL || '//tesi.codemoka.io/api',
  },
};
