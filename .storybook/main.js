module.exports = {
    addons: require('./addons'),

    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
            test: /\.pcss/,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
            include: require('path').resolve(__dirname, '../')
        })

        return config
    },

    stories: ['../src/**/*.stories.[jt]sx'],
}
