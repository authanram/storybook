const path = require('path');

module.exports = {
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.pcss$/, use: ['style-loader', 'postcss-loader'] },
        ]
    }
};
