// next.config.js is not transformed by Babel. So you can only use javascript features supported by your version of Node.js.
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    cssModules: true
  });
