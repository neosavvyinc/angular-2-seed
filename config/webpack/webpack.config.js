const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');

/* =================================================
                ENVIRONMENT VARIABLES
 ================================================= */

const NODE_ENV = process.env.NODE_ENV;

const ENV_DEVELOPMENT = NODE_ENV === 'development';
const ENV_PRODUCTION = NODE_ENV === 'production';
const ENV_TEST = NODE_ENV === 'test';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

/* =================================================
                    CONFIGURATION
 ================================================= */

const config = {};

module.exports = config;

config.resolve = {
    extensions: ['', '.ts', '.js'],
    modulesDirectories: ['node_modules'],
    root: path.resolve('../..')
};

config.module = {
    preLoaders: [
        {
            test: /\.json$/,
            loader: 'json'
        }
    ],
    loaders: [
        {
            test: /\.ts$/,
            loader: 'ts',
            exclude: /node_modules/
        },
        {
            test: /\.html$/,
            loader: 'raw'
        },
        {
            test: /\.css$/,
            loader: 'raw',
            include: path.resolve('src/ts')
        },
        {
            test: /\.scss$/,
            loader: 'raw!postcss!sass',
            include: path.resolve('src/ts')
        },
        {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file',
            query: {
                name: 'assets/[name].[hash].[ext]'
            }
        }
    ]
};

config.plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    })
];

config.postcss = [
    autoprefixer({ browsers: ['last 3 versions'] })
];

/* =================================================
                     DEV && PROD
 ================================================= */
if (ENV_DEVELOPMENT || ENV_PRODUCTION) {
    config.entry = {
        main: ['./src/main.ts'],
        polyfills: './src/polyfills.ts',
        vendor: './src/vendor.ts'
    };

    config.output = {
        filename: '[name].js',
        path: path.resolve('./dist'),
        publicPath: '/'
    };

    config.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills'],
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            chunkSortMode: 'dependency',
            filename: 'index.html',
            hash: false,
            inject: 'body',
            template: './src/index.html'
        })
    );
}
/* =================================================
                    DEVELOPMENT
 ================================================= */
if (ENV_DEVELOPMENT) {
    config.devtool = 'cheap-module-source-map';

    config.entry.main.unshift(`webpack-dev-server/client?http://${HOST}:${PORT}`);

    config.module.loaders.push(
        {
            test: /\.scss$/,
            loader: 'style!css!postcss!sass',
            exclude: path.resolve('src/ts')
        },
        {
            test: /\.css/,
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap'),
            exclude: path.resolve('src/ts')
        }
    );

    config.plugins.push(
        new ExtractTextPlugin('[name].css')
    );

    config.devServer = {
        contentBase: './src',
        historyApiFallback: true,
        host: HOST,
        outputPath: config.output.path,
        port: PORT,
        publicPath: config.output.publicPath,
        stats: {
            cached: true,
            cachedAssets: true,
            chunks: true,
            chunkModules: false,
            colors: true,
            hash: false,
            reasons: true,
            timings: true,
            version: false
        }
    };
}
/* =================================================
                     PRODUCTION
 ================================================= */
if (ENV_PRODUCTION){
    config.devtool = 'source-map';

    config.output.filename = '[name].[chunkhash].js';

    config.module.loaders.push(
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'sass', 'postcss'),
            exclude: path.resolve('src/ts')
        }
    );

    config.plugins.push(
        new WebpackMd5Hash(),
        new ExtractTextPlugin('styles.[contenthash].scss'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                dead_code: true,
                screw_ie8: true,
                unused: true,
                warnings: false
            }
        })
    );
}
/* =================================================
                      TESTING
 ================================================= */
if (ENV_TEST) {
    config.devtool = 'inline-source-map';

    config.module.loaders.push(
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'sass'),
            exclude: path.resolve('src/ts')
        }
    );

    config.plugins.push(
        new ExtractTextPlugin('[name].scss')
    );
}