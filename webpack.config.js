/* eslint-disable */ 

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        // dependencies: [path.resolve(__dirname, 'src/createAppModule.js'), path.resolve(__dirname, 'src/utils.js'),]
        // appCreate: path.resolve(__dirname, 'src/createAppModule.js'),
        // utils: path.resolve(__dirname, 'src/utils.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        // chunkFilename: 'common.js'
  },
  optimization: { //This allows to create just one output file when building
    splitChunks: {
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]|[\\/]src[\\/](createAppModule|utils)\.js$/,
          name: 'common',
          chunks: 'all',
        },
      },
    },
  },
}