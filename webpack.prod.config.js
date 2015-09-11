'use strict';

var webpack = require('webpack');
var config = require('./webpack.base.config.js');

var SaveAssetsJson = require('assets-webpack-plugin');

var bundleVersion = 'v1.3';

config.bail = true;
config.debug = false;
config.profile = false;
config.devtool = '#source-map';

config.output = {
  path: './client/dist',
  pathInfo: true,
  publicPath: 'client/dist/',
  filename: 'bundle.' + bundleVersion + '.min.js'
};

config.plugins = config.plugins.concat([
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({ output: {comments: false} }),
  new SaveAssetsJson({
    path: process.cwd(),
    filename: 'assets.json'
  })
]);

config.module.loaders = config.module.loaders.concat([
  {test: /\.jsx?$/, loaders: [ 'babel'], exclude: /node_modules/}
]);

module.exports = config;
