const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  // tell the dev server where to look for files
  devServer: {
    contentBase: './dist',
  },
  entry: {
    shared: 'lodash',
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    another: {
      import: './src/another-module.js',
      dependOn: 'shared',
    },
  },
  optimization: {
    runtimeChunk: 'single',
  },
  output: {
    // filename: 'main.js',
    // filename: '[name].[contenthash].bundle.js',
    // path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    path: __dirname + '/dist'
  },
  plugins: [
    // new CleanWebpackPlugin(), // 构建前清理 /dist 文件夹
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({ template: './src/index.html' })
    // new HtmlWebpackPlugin({ title: '管理输出' })
  ]
};
