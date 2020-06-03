// // // npx webpack --config webpack.config.js
// // // 用 --config 选项只是向你表明，可以传递任何名称的配置文件。这对于需要拆分成多个文件的复杂配置是非常有用。
// // const path = require('path');
// // // 如果我们更改了我们的一个入口起点的名称，甚至添加了一个新的名称，生成的包将被重命名在一个构建中
// // // 但是index.html文件仍然会引用旧的名字。我们用 HtmlWebpackPlugin 来解决这个问题。
// // const HtmlWebpackPlugin = require('html-webpack-plugin');
// // const {
// //     CleanWebpackPlugin
// // } = require('clean-webpack-plugin');
// // const webpack = require('webpack');

// // module.exports = {
// //     entry: {
// //         app: './src/index.js'
// //     },
// //     // 将编译后的代码映射回原始源代码。如果一个错误来自于 b.js，source map 就会明确的告诉你。不要用于生产环境
// //     devtool: 'inline-source-map',
// //     // webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)
// //     // 修改配置文件，告诉开发服务器(dev server)，在哪里查找文件
// //     devServer: {
// //         contentBase: './dist',
// //         // 开启模块热替换；只应在开发环境中配置
// //         hot: true
// //     },
// //     // webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。
// //     // 在这种情况下，以 .css 结尾的全部文件，都将被提供给 style-loader 和 css-loader。
// //     // 借助于 style-loader 的帮助，CSS 的模块热替换实际上是相当简单的。
// //     // 当更新 CSS 依赖模块时，此 loader 在后台使用 module.hot.accept 来修补(patch) <style> 标签。
// //     module: {
// //         rules: [{
// //             test: /\.css$/,
// //             use: ['style-loader', 'css-loader']
// //         }]
// //     },
// //     plugins: [
// //         // 每次构建前清理 /dist 文件夹
// //         // new CleanWebpackPlugin(),
// //         // 会用新生成的 index.html 文件，把原来的替换。
// //         new HtmlWebpackPlugin({
// //             title: 'Hot Module Replacement'
// //         }),
// //         // 以便更容易查看要修补(patch)的依赖
// //         new webpack.NamedModulesPlugin(),
// //         new webpack.HotModuleReplacementPlugin()
// //     ],
// //     output: {
// //         filename: '[name].bundle.js',
// //         path: path.resolve(__dirname, 'dist'),
// //         publicPath: '/'
// //     },
// //     // 通过 "mode" 配置选项轻松切换到压缩输出，只需设置为 "production"
// //     mode: "production"
// // };

// const path = require('path');
// const HTMLWebpackPlugin = require('html-webpack-plugin');
// // const webpack = require('webpack');

// module.exports = {
//     entry: {
//         index: './src/index.js',
//         // another: './src/another-module.js'
//     },
//     plugins: [
//         new HTMLWebpackPlugin({
//             title: 'Code Splitting'
//         }),
//         // 这种配置方式已废弃
//         // new webpack.optimize.CommonsChunkPlugin({
//         //     name: 'common' // 指定公共 bundle 的名称。
//         // })
//     ],
//     output: {
//         filename: '[name].bundle.js',
//         chunkFilename: '[name].bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     // CommonsChunkPlugin 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。
//     // optimization: {
//     //     splitChunks: {
//     //         cacheGroups: {
//     //             commons: {
//     //                 name: "commons",
//     //                 chunks: "initial"
//     //             }
//     //         }
//     //     }
//     // },
// };
const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: [
            'lodash'
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Caching'
        }),
        // 使vendor hash保持一致
        new webpack.HashedModuleIdsPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // }),
    ],
    output: {
        // 把一个哈希值添加到打包的文件名中
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "manifest",
                    chunks: "initial"
                }
            }
        }
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "vendor",
                    chunks: "initial"
                }
            }
        }
    }
};