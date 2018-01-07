/**
 * Development environment setup
 *
 *   Common setup
 * + Strong source mapping
 * + Simple devServer configuration
 * + Hot Module Replacement
 * + Inline CSS
 */
const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new ExtractTextPlugin({
            disable: true
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
});