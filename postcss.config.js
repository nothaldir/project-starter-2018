module.exports = {
  parser: 'postcss-scss',
  map: {
    inline: true
  },
  plugins: [
    require('postcss-easy-import')({
      prefix: '_',
      extensions: [
        '.scss',
        '.css'
      ]
    }),
    require('@csstools/postcss-sass')({
      outputStyle: 'compressed'
    }),
    require('autoprefixer')({
      grid: true
    })
  ],
};
