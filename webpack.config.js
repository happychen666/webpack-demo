
const path = require('path');
//D:\happychenData\webpack-demo   __driname的默认值是当前工程的根目录
console.log('oooooo=====', __dirname, path.join(__dirname, './src/'))
let HtmlWebpackPlugin = require('html-webpack-plugin')
let { CleanWebpackPlugin } = require('clean-webpack-plugin')// 文件夹清除工具


module.exports = {
    context: path.join(__dirname),
    entry: {
        pageA: './src/pageA.js',
        pageB: './src/pageB.js'
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
    },
    plugins: [
        new CleanWebpackPlugin(),// 清空dist文件夹
        // 参数使用详见https://blog.csdn.net/hbiao68/article/details/104054932
        new HtmlWebpackPlugin({
            filename: 'pageA.html',  						//打包后文件的名字
            template: './public/a.html',		//   模板文件的名字
            chunks: ['pageA'],									// 与entry入口文件属性搭配			配置各自的文件路径 
            title: '我是a.html的标题',

        }),
        new HtmlWebpackPlugin({
            filename: 'pageB.html',  //打包后文件的名字
            template: './public/b.html',//   模板文件的名字
            chunks: ['pageB'],
            title: '我是b.html的标题'
        })
    ]
}
