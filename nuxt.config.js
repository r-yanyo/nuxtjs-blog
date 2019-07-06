const pkg = require('./package')

import client from './apis/contentful.js'
import config from './config/config.js'

const generateDynamicRoutes = callback => {
  const routes = client.getEntries().then(contents =>
    contents.items.map(content => {
      return `/posts/${content.fields.date}/${content.sys.id}`
    })
  )
  callback(null, routes)
}

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'og:url', property: 'og:url', content: 'https://r-yanyo.com/' },
      { hid: 'og:title', property: 'og:title', content: 'r-yanyoのブログ' },
      { hid: 'og:image', property: 'og:image', content: 'https://r-yanyo.com/images/ball.png' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'r-yanyoのブログ' },
      { hid: 'og:type', property: 'og:type', content: 'blog' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'r-yanyoのブログです。'
      },
      // Twitter
      { name: 'twitter:card', content: 'summary' }
    ],
    link: [{ rel: 'icon', href: '/ball.png' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/css/main.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  generate: {
    routes: generateDynamicRoutes
  },

  env: {
    SPACE_ID: process.env['SPACE_ID'] || config['SPACE_ID'],
    ACCESS_TOKEN: process.env['ACCESS_TOKEN'] || config['ACCESS_TOKEN']
  }
}
