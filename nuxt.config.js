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
      { src: '/js/jquery.min.js', body: true },
      { src: '/js/perfect-scrollbar.min.js', body: true },
      { src: '/js/js.cookie.min.js', body: true },
      { src: '/js/scrolltop.js', body: true },
      { src: '/js/bootstrap.bundle.min.js', body: true },
      { src: '/js/util.js', body: true },
      { src: '/js/offcanvas.js', body: true },
      { src: '/js/toggle.js', body: true },
      { src: '/js/header.js', body: true },
      { src: '/js/menu.js', body: true },
      { src: '/js/layout.js', body: true },
    ],
    bodyAttrs: { class: 'kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--fixed kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading' },
  },
  loading: { color: '#fff' },
  css    : ['@/assets/scss/app.scss'],
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
  axios: { browserBaseURL: '/api', proxy: false },
  // proxy: {
  //   '/api': {
  //     target     : process.env.API_URL,
  //     pathRewrite: { '^/api': '/' },
  //   },
  // },
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
