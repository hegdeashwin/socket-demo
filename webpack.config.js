'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: './src/socket-demo.js',

  output: {
    path: './dist/',
    filename: 'socket-demo.min.js'
  },

  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};

module.exports = config;
