const {rollup} = require('rollup');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const prettier = require('rollup-plugin-prettier');
const compiler = require('@ampproject/rollup-plugin-closure-compiler');
const replace = require('rollup-plugin-replace');
const resolve = require('rollup-plugin-node-resolve');
const postcss = require('rollup-plugin-postcss');
const {getBabelOptions, resolvePath, getClosureOptions} = require('./utils');

const isProduction = process.env.NODE_ENV === 'production';

rollup({
  input: resolvePath('src/index.js'),
  external: ['react', 'react-dom', 'semantic-ui-react'],
  plugins: [
    babel(getBabelOptions()),
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.json'],
      preferBuiltins: false,
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/glamor/server.js': ['renderStatic'],
      },
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    compiler(getClosureOptions()),
    postcss({
      extensions: ['.css'],
    }),
    isProduction &&
      prettier({
        parser: 'babylon',
      }),
  ],
  acorn: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
})
  .then(bundle => {
    bundle.write({
      format: 'umd',
      file: resolvePath('lib/index.js'),
      name: '@gemcook/modal',
      globals: {
        recompose: 'recompose',
        react: 'React',
        'react-dom': 'reactDom',
        classnames: 'classNames',
        'react-modal': 'ReactModal',
        'semantic-ui-react': 'semanticUiReact',
      },
    });
  })
  .catch(e => {
    console.error(e);
  });
