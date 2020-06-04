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
        // presets
        {
            name: '@storybook/preset-typescript',
            options: {
                tsLoaderOptions: {
                    configFile: path.resolve(__dirname, '../tsconfig.json'),
                },
                forkTsCheckerWebpackPluginOptions: {
                    colors: false,
                },
                include: [path.resolve(__dirname, '../src')],
                transpileManager: true,
            },
        },
        // panel
        '@storybook/addon-knobs/register',
        '@storybook/addon-jest/register',
        '@storybook/addon-storysource',
        '@storybook/addon-actions/register',
        // preview
        '@storybook/addon-docs/register',
        'storybook-addon-paddings',
    ],

}
