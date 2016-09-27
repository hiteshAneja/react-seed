var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
    debug: true,
    entry: './src/app/index.jsx',
    output: {
        path: __dirname + '/target/',
        filename: 'index.bundle.js',
        sourceMapFilename: 'index.map',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        root: [__dirname + '/src/app'],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx/,
            loader: 'babel-loader',
            query: {
                presets: [
                    'babel-preset-es2015',
                    'babel-preset-react',
                    'babel-preset-stage-0'
                ],
                plugins: [
                    'transform-decorators-legacy'
                ]
            }
        }, {
            test: /\.css$/,
            loaders: ['css-loader']
        }, ]
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};