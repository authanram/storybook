let custom = {}
try { custom = require('./tailwind.custom') } catch (e) {}

const tailwind = {

    purge: {
        content: [
            './tailwind.purgecss',
            './src/**/*.php',
            './src/**/*.html',
            './src/**/*.js',
            './src/**/*.jsx',
            './src/**/*.ts',
            './src/**/*.tsx',
            './src/**/*.php',
            './src/**/*.vue',
        ],
        options: {
            defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
            whitelist: [],
            whitelistPatterns: [
                /-active$/,
                /-enter$/,
                /-leave-to$/,
                /show$/,
            ],
        },
    },

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...require('tailwindcss/defaultTheme').fontFamily.sans],
            },
        },
    },

    variants: {
        display: ['responsive', 'last', 'hover', 'focus', 'group-hover'],
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },

    plugins: [
        require('@tailwindcss/ui'),
    ],

}

module.exports = Object.assign({}, tailwind, custom)
