let path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

let baseConfig = {
    entry: './app/entryPoints/search.js',
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
    }
};

module.exports = (env) => {
    console.log(`Running in ${env === 'development' ? 'development' : 'production'} mode`);

    if (env === 'development') {
        return merge(baseConfig, {
            mode: 'none',
            plugins: [
                new webpack.NamedModulesPlugin(),
                new webpack.HotModuleReplacementPlugin(),
                new webpack.EnvironmentPlugin({
                    NODE_ENV: 'development',
                    DEBUG: false
                })
            ]
        });
    }

    return merge(baseConfig, {
        mode: 'production',
        plugins: [
            new webpack.EnvironmentPlugin({
                NODE_ENV: 'production',
                DEBUG: false
            })
        ]
    });
};
