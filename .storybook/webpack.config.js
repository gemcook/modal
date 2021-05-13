const autoprefixer = require('autoprefixer');
const fs = require('fs');
const path = require('path');
const getStyleLoaders = require('./utils/getStyleLoaders');

const directory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(directory, relativePath);

// Export a function. Accept the base config as the only param.
module.exports = ({config, mode}) => {
  return config;
};
