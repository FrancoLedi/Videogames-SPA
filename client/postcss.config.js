module.exports = {
    plugins: [
      require('postcss-import'),
      require('postcss-preset-env'),
      require('postcss-mixins'),
      require("postcss-nesting"),       /* Nesting CSS */
      require("autoprefixer")         /* CSS Vendor prefixes */
    ]
  }