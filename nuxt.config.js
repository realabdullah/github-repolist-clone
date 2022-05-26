export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'realabdullah (Abdullahi Odesanmi) / Repositories . GitHub',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/getData.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // GraphQl Apollo Client
    '@nuxtjs/apollo',
    // MomentJs
    '@nuxtjs/moment'
  ],

  // Apollo configuration
  apollo: {
    clientConfigs: {
      default: '~/plugins/alt-apollo-config.js'
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  //env variables
  env: {
    nuxtApiUrl: process.env.NUXT_API_ENDPOINT,
    accessToken: process.env.NUXT_ACCESS_TOKEN
  }
}
