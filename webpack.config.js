let path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app/js/entryPoints/search.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'search.bundle.js',
        publicPath: '/build/',
        pathinfo: false,
        libraryTarget: 'window',
        library: 'ReactSearch'
    },
    devServer: {
        contentBase: '.',
        publicPath: '/build/',
        watchContentBase: false,
        hotOnly: true,
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, 'app'),
                    path.resolve(__dirname, 'node_modules/@salesforce'),
                    path.resolve(__dirname, '__mocks__')
                ],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'images/[hash]-[name].[ext]'
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
