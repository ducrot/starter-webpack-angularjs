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
const webpack = require('webpack');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                                require('autoprefixer')()
                            ]
                        }
                    },
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
});