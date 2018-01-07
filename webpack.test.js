/**
 * Test environment setup
 *
 *   Common setup
 * + Strong source mapping
 * + Don't use UglifyJSPlugin
 */
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    devtool: "inline-source-map",
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});