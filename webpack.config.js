var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'es6'),
                query: {
                  presets: 'es2015',
                }
            },
               {
                loader: 'awesome-typescript-loader',
                test: /\.ts$/,
               },
        ]
    },
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
    resolve: { extensions: [".web.ts", ".web.js", ".ts", ".js"] }
};
