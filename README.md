## 1，资源的输入和输出

相关的配置项context、entry、output。

在配置打包入口时，context相当于路径前缀，entry是入口文件路径。

若为单入口，则chunk name不可更改，若为多入口，则必须为每一个chunk指定chunk name。

当第三方依赖较多时，我们可以用提取vendor的方法将这些模块打包到一个单独的bundle中，以更有效地利用客户端缓存，加快页面渲染速度。

path和publicPath的区别在于path指定的是资源的输出位置，而publicPath指定的是间接资源的请求位置