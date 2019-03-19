'use strict';

const path = require('path');
const webpack = require('webpack');

const ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: './src/index.js',
    cache: true,
    devtool: 'hidden',
    mode: ENV,
    watch: false,

    stats: {
        warnings: false,
        children: false,
        env: true
    },

    output: {
        path: path.join(__dirname, 'dest'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules|dest/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ],

    externals: {
        react: 'commonjs react'
    }
};

if (ENV === 'production') {
    module.exports.plugins.push(
        new webpack.DefinePlugin(Object.assign({
            'process.env.NODE_ENV': JSON.stringify('production')
        }))
    );
}
