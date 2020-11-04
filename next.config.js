// next.config.js
const withStyles = require('@webdeb/next-styles')
 
module.exports = withStyles({
  less: true, // use .less files
  sass: true, // use .scss files
  modules: true, // style.(m|module).css & style.(m|module).scss for module files
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  sassLoaderOptions: {
    sassOptions: {
      includePaths: ["src/styles"], // @import 'variables'; # loads (src/styles/varialbes.scss), you got it..
    },
  },
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
  // ignoreOrder:true for https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250#issuecomment-544898772
})