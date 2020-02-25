require('dotenv').config()

module.exports = {
  mode   : 'universal',
  loading: '~/components/loading.vue',
  css    : ['@/assets/scss/app.scss'],
  plugins: [
    { src: '@/plugins/datepicker', ssr: false },
    { src: '@/plugins/vue-good-table', ssr: false },
    { src: '@/plugins/pagination', ssr: false },
    { src: '@/plugins/qrcode', ssr: false },
  ],
  serverMiddleware: [{ path: '/api', handler: '~/api/index.js' }],
  buildModules    : ['@nuxtjs/dotenv'],
  modules         : [
    'nuxt-session',
    '@nuxtjs/axios',
    'nuxt-simple-line-icons',
    'cookie-universal-nuxt',
    '@nuxtjs/moment',
    ['bootstrap-vue/nuxt', { css: false }],
  ],
  build: {
    babel  : { plugins: ['lodash'] },
    loaders: {
      vue: {
        transformAssetUrls: {
          'img'             : 'src',
          'image'           : 'xlink:href',
          'b-img'           : 'src',
          'b-img-lazy'      : ['src', 'blank-src'],
          'b-card'          : 'img-src',
          'b-card-img'      : 'img-src',
          'b-carousel-slide': 'img-src',
          'b-embed'         : 'src',
          'img-viewer'      : 'src',
        },
      },
    },
  },
}
