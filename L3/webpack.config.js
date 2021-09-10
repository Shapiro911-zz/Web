const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    mode: "development",
    entry: "./public/js/main.js",
    output: {
        path: resolve(__dirname, 'build'),
        filename: "main.[contenthash].js"
    },
    devServer: {
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(png|gif|jpe?g|mp3|mp4)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './items'
                        }
                    },
                    {
                        loader: ImageMinimizerPlugin.loader,
                        options: {
                            severityError: "warning", // Ignore errors on corrupted images
                            minimizerOptions: {
                                plugins: ["gifsicle"],
                            },
                        },
                    }
                ]
            },
            {
                test: /\.sass$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new HtmlWebpackPlugin({ template: resolve(__dirname, 'public/index.html'), }),
    ]
}