var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry : [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './main.js'
    ],
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: "./src",
        hot: true,
        proxy: {
            '/maps*': {
                target: 'https://maps.googleapis.com/',
                secure: false,
                changeOrigin: true
            },
            '/data*': {
                target: 'http://api.openweathermap.org',
                secure: false,
                changeOrigin: true
            }
        }
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loaders: ['react-hot','babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.(ttf|eot|svg|woff||woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }

        ]
    },
    plugins : [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./node_modules")]
    }
};