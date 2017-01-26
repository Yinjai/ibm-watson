module.exports = {
    entry: [
        './personality.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
        {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    resolve: {
        extensions: ['', '.js']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    node: {
        fs: "empty",
        tls:"empty",
        net:"empty"
    }
};
