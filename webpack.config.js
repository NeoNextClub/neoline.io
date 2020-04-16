const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/scripts/index.js',
        tutorial: './src/scripts/tutorial.js',
        dapi: './src/scripts/dapi.js',
        other: './src/scripts/other.js',
        help: './src/scripts/help.js'
    },
    devtool: false,
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    },
                    'sass-loader?sourceMap'
                ]
            },
            {
                test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
        new HtmlWebpackPlugin({
            template: 'src/sites/zh/index.html',
            inject: 'body',
            favicon: 'favicon.ico',
            xhtml: true,
            metadata: {
                isDevServer: false
            },
            minify: {
                caseSensitive: true,
                collapseWhitespace: true,
                keepClosingSlash: true
            },
            chunks: ['index'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: 'src/sites/en/index.html',
            inject: 'body',
            xhtml: true,
            metadata: {
                isDevServer: false
            },
            minify: {
                caseSensitive: true,
                collapseWhitespace: true,
                keepClosingSlash: true
            },
            chunks: ['index'],
            filename: 'en/index.html'
        }),
        new HtmlWebpackPlugin({
            template: 'src/sites/tutorial.html',
            inject: 'body',
            xhtml: true,
            metadata: {
                isDevServer: false
            },
            minify: {
                caseSensitive: true,
                collapseWhitespace: true,
                keepClosingSlash: true
            },
            chunks: ['tutorial'],
            filename: 'tutorial/index.html'
        }),
        new HtmlWebpackPlugin({
            template: 'src/sites/dapi.html',
            inject: 'body',
            xhtml: true,
            metadata: {
                isDevServer: false
            },
            minify: {
                caseSensitive: true,
                collapseWhitespace: true,
                keepClosingSlash: true
            },
            chunks: ['dapi'],
            filename: 'dapi/index.html'
        }),
        new HtmlWebpackPlugin({
            template: 'src/sites/zh/help.html',
            inject: 'body',
            xhtml: true,
            metadata: {
                isDevServer: false
            },
            minify: {
                caseSensitive: true,
                collapseWhitespace: true,
                keepClosingSlash: true
            },
            chunks: ['help'],
            filename: 'help/index.html'
        }),
        new HtmlWebpackPlugin({
            template: 'src/sites/en/help.html',
            inject: 'body',
            xhtml: true,
            metadata: {
                isDevServer: false
            },
            minify: {
                caseSensitive: true,
                collapseWhitespace: true,
                keepClosingSlash: true
            },
            chunks: ['help'],
            filename: 'en/help/index.html'
        }),
        new HtmlWebpackPlugin({
            template: 'src/sites/kr/help.html',
            inject: 'body',
            xhtml: true,
            metadata: {
                isDevServer: false
            },
            minify: {
                caseSensitive: true,
                collapseWhitespace: true,
                keepClosingSlash: true
            },
            chunks: ['help'],
            filename: 'kr/help/index.html'
        }),
        new HtmlWebpackPlugin({
            template: 'src/sites/jp/help.html',
            inject: 'body',
            xhtml: true,
            metadata: {
                isDevServer: false
            },
            minify: {
                caseSensitive: true,
                collapseWhitespace: true,
                keepClosingSlash: true
            },
            chunks: ['help'],
            filename: 'jp/help/index.html'
        }),
        new HtmlWebpackPlugin({
            template: 'src/sites/zh/privacy.html',
            inject: 'body',
            xhtml: true,
            metadata: {
                isDevServer: false
            },
            minify: {
                caseSensitive: true,
                collapseWhitespace: true,
                keepClosingSlash: true
            },
            chunks: ['other'],
            filename: 'privacy/index.html'
        }),
        new HtmlWebpackPlugin({
            template: 'src/sites/en/privacy.html',
            inject: 'body',
            xhtml: true,
            metadata: {
                isDevServer: false
            },
            minify: {
                caseSensitive: true,
                collapseWhitespace: true,
                keepClosingSlash: true
            },
            chunks: ['other'],
            filename: 'en/privacy/index.html'
        }),
        new HtmlWebpackPlugin({
            template: 'src/sites/zh/agreement.html',
            inject: 'body',
            xhtml: true,
            metadata: {
                isDevServer: false
            },
            minify: {
                caseSensitive: true,
                collapseWhitespace: true,
                keepClosingSlash: true
            },
            chunks: ['other'],
            filename: 'agreement/index.html'
        }),
        new HtmlWebpackPlugin({
            template: 'src/sites/en/agreement.html',
            inject: 'body',
            xhtml: true,
            metadata: {
                isDevServer: false
            },
            minify: {
                caseSensitive: true,
                collapseWhitespace: true,
                keepClosingSlash: true
            },
            chunks: ['other'],
            filename: 'en/agreement/index.html'
        })
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[chunkhash].bundle.js',
        sourceMapFilename: '[file].map',
        chunkFilename: '[name].[chunkhash].chunk.js'
    }
};
