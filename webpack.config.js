const path = require('path');

module.exports = {
    entry: {
        'search/app': './src/search/app.js',
    },
    output: {
        path: path.resolve('./dist/'),
        publicPath: '/',
        filename: '[name].js',
        library: "Kuryu",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader',
                        scss: 'vue-style-loader!css-loader!sass-loader',
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};
