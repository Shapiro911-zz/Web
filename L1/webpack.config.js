const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./public/js/main.js",
    output: {
        path: resolve(__dirname, 'build'),
        filename: "main.[contenthash].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new HtmlWebpackPlugin({ template: resolve(__dirname, 'public/index.html'), })
    ]
}