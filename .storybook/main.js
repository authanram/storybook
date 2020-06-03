// const path = require('path')

const custom = require('./webpack.config.js')

module.exports = {
    stories: ['../src/**/*.stories.[tj]s'],
    webpackFinal: (config) => {
        return {
            ...config,
            ...custom,
        }
    },
}
