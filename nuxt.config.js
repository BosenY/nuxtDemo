module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Nuxt.js project" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css','element-ui/lib/theme-default/index.css'],
  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#3B8070',height:'10px' }
  loading: {
    color: 'blue',
    height: '5px'
  },
  build: {
    vendor: ['element-ui']
  },
  plugins: [
    '~plugins/element-ui.js'
  ]

}
