const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // 模板文件路径
            filename: 'index.html', // 输出文件名
            inject: 'body', // 将 script 标签注入到 body 中
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'), // 指定静态文件目录
            publicPath: '/', // 指定公共路径
        },
        compress: true,
        port: 9000,
    }
};
