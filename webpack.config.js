'use strict';

const path = require('path');
const webpack = require('webpack');

const ENV = process.env.NODE_ENV || 'development';

module.exports = {
    context: path.join(process.cwd(), 'src'),
    entry: './index.js',
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
        path: path.join(process.cwd(), 'dist'),
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
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'prop-types': {
            root: 'PropTypes',
            commonjs2: 'prop-types',
            commonjs: 'prop-types',
            amd: 'prop-types'
        }
    },

    devServer: {
        contentBase: path.join(__dirname, 'dev'),
        historyApiFallback: true,
        open: true
    }
};

if (ENV === 'production') {
    module.exports.plugins.push(
        new webpack.DefinePlugin(Object.assign({
            'process.env.NODE_ENV': JSON.stringify('production')
        }))
    );
}
