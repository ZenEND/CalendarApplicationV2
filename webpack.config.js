require("@babel/polyfill");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    entry: ["@babel/polyfill","./src/index.js"],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
            'style-loader',
            'css-loader',
            'sass-loader',
            ],
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./index.html",
          filename: "./index.html"
        })
    ]
};