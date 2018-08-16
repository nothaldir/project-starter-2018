module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('@csstools/postcss-sass')({
      outputStyle: 'compressed'
    }),
    require('autoprefixer'),
  ],
};
