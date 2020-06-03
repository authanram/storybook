const path = require('path')

module.exports = {
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
            test: /\.pcss/,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
            include: path.resolve(__dirname, '../')
        })

        return config
    },

    addons: [
        '@storybook/addon-actions/register',
        '@storybook/addon-knobs/register',
        '@storybook/addon-storysource',
    ],

    stories: ['../src/**/*.stories.[jt]sx'],
}
