'use strict';

module.exports = (config) => {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'karma.entry.js'
        ],
        preprocessors: {
            'karma.entry.js': ['webpack', 'sourcemap']
        },
        webpack: require('../webpack/webpack.config'),
        webpackServer: {
            noInfo: true
        },
        browsers: ['Chrome', 'PhantomJS2'],
        phantomjsLauncher: {
            exitOnResourceError: true
        },
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-phantomjs2-launcher',
            'karma-sourcemap-loader',
            'karma-webpack'
        ],
        autoWatch: true,
        logLevel: config.LOG_INFO,
        reporters: ['dots'],
        singleRun: false
    })
}