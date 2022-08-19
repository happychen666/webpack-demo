<<<<<<< HEAD

const path = require('path');

//D:\happychenData\webpack-demo   __driname的默认值是当前工程的根目录
console.log('oooooo=====', __dirname, path.join(__dirname, './src/'))

module.exports = {
    context: path.join(__dirname, './src/'),
    entry: {
        index: './index.js',
        vendor: ['vuex', 'lodash', 'vue']
    },
    // output: {
    //     filename: 'main.js',
    // },
    mode: 'production',
    optimization: {
        splitChunks:
        {
            chunks:
                'all',
        },
    },
    devServer: {
        publicPath: '/dist'
    }
}
=======
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    polyfills: './src/polyfills',
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      // 将第三方库(library) （例如 lodash 或 react）提取到单独的 vendor chunk 文件中
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    // new CleanWebpackPlugin(), // 构建前清理 /dist 文件夹
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    // new HtmlWebpackPlugin({ title: '管理输出' })
    new webpack.ProvidePlugin({
      // _: 'lodash',
      join: ['lodash', 'join'],
    })
  ],
  module: {
    rules: [
      {
        test: require.resolve('./src/index.js'),
        use: 'imports-loader?wrapper=window',
      },
      {
        test: require.resolve('./src/globals.js'),
        use:
          'exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse',
      }
    ],
  },
};
>>>>>>> 17cd1ae1be56d1cbd738730ec0b36152effb666f
