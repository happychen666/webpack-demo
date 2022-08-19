
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