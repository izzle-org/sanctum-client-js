let path = require('path');

module.exports = {
    entry: './index.mjs',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'sanctum-client.js',
        libraryTarget: 'commonjs2'
    },
    externals: ['axios']
};
