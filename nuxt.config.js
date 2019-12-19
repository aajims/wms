const webpack = require('webpack')
const pkg     = require('./package')

module.exports = {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta : [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid    : 'description',
        name   : 'description',
        content: pkg.description,
      },
    ],
    link: [
      {
        rel : 'icon',
        type: 'image/x-icon',
        href: '/favicon.png',
      },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,600,700' },
    ],
    script: [
      { src: '/vendors/jquery.min.js', body: true },
      { src: '/vendors/popper.min.js', body: true },
      { src: '/vendors/bootstrap.bundle.min.js', body: true },
      { src: '/vendors/js.cookie.min.js', body: true },
      { src: '/vendors/moment.min.js', body: true },
      { src: '/vendors/tooltip.min.js', body: true },
      { src: '/vendors/perfect-scrollbar.min.js', body: true },
      { src: '/vendors/sticky.min.js', body: true },
      { src: '/vendors/wNumb.js', body: true },
      { src: '/js/config.js', body: true },
      { src: '/js/scripts.bundle.min.js', body: true },
    ],
    bodyAttrs: { class: 'kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--fixed kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading' },
  },
  loading: '~/components/loading.vue',
  css    : ['@/assets/scss/app.scss', '@/assets/css/style.bundle.min.css'],
  plugins: [
    {
      src: '@/plugins/datepicker',
      ssr: false,
    },
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy',
    'nuxt-simple-line-icons',
    'cookie-universal-nuxt',
    ['@nuxtjs/moment', { plugin: false }],
    ['bootstrap-vue/nuxt', { css: false }],
  ],
  axios: { proxy: true },
  proxy: {
    '/api/': {
      target     : process.env.API_URL,
      pathRewrite: { '^/api': '' },
    },
  },
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
    plugins: [new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' })],
  },
}
