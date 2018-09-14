const autoprefixer = require('autoprefixer');

module.exports = (cssOptions, preProcessor) => {
  const loaders = [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebook/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          autoprefixer({
            flexbox: 'no-2009',
            grid: true,
          }),
        ],
      },
    },
  ];

  if (preProcessor) {
    loaders.push(require.resolve(preProcessor));
  }

  return loaders;
};
