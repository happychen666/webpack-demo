const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
  entry: './src/index.js',
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
          { loader: 'style-loader' },
          // [css-loader](/loaders/css-loader)
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      // using the built-in Asset Modules of webpack to incorporate our images
      {
        test: /\.(png|svg|jpg|jpeg|gif)/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|tf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
};
