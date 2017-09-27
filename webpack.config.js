const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const isProduction = (process.env.NODE_ENV=='production');

/* eslint-disable no-console */

const webpackConfig = function(env) {
    const isProduction = env.production;

    return {
        devtool: !isProduction && 'cheap-eval-source-map',
        entry: [
            path.join(__dirname, 'src/app')
        ],
        target: 'web',
        output: {
            path: path.join(__dirname, 'target'),
            publicPath: '/',
            filename: 'app.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'src/index.html'),
                minify: isProduction && {
                    removeComments: true,
                    collapseWhitespace: true
                },
                hash: isProduction,
                inject: true
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: isProduction
            }),
            new CopyWebpackPlugin([
                {
                    from: path.join(__dirname, 'src/static'),
                    to: 'static'
                }
            ])
        ],
        module: {
            loaders: [
                {
                    test: /\.html$/,
                    exclude: path.join(__dirname, "/src/index.html"),
                    loaders: ['ngtemplate-loader?relativeTo=src/', 'html-loader']
                },
                {
                    test: /\.js$/,
                    include: path.join(__dirname, 'src'),
                    loaders: ['babel-loader']
                },
                {
                    test: /(\.css|\.scss)$/,
                    loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
                },
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, 'target'),
            compress: true,
            port: 8084
        }
    };
};

module.exports.default = webpackConfig;