const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: './src/index.js',
  entry: {
    // a: './src/a.js',
    app: './src/app.js',
    // adminApp: './src/adminApp.js',
    index: {
      dependOn: 'app',
      import: './src/index.js',
    }
  },
  output: {
    // filename: 'main.js',
    // filename: '[name].[contenthash].bundle.js',
    // path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    //path: __dirname + '/test'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // [style-loader](/loaders/style-loader)
          // { loader: 'style-loader' },
          // [css-loader](/loaders/css-loader)
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
};
