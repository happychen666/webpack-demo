const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    // filename: 'main.js',
    // filename: '[name].[contenthash].bundle.js',
    // path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    path: __dirname + '/dist'
  },
  plugins: [
    new CleanWebpackPlugin(), // 构建前清理 /dist 文件夹
    new HtmlWebpackPlugin({ template: './src/index.html' })
    // new HtmlWebpackPlugin({ title: '管理输出' })
  ]
};
