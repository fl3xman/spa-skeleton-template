const { join, resolve } = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = () => {
    const base = {};

    base.entry = "./src/index.tsx";
    base.output = {
        path: resolve(__dirname, "../dist"),
        publicPath: "/",
        filename: "[name].[hash].js",
    };
    base.node = { console: false, fs: 'empty', net: 'empty', tls: 'empty' };
    base.module = {
        rules: [{
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader",
            exclude: /node_modules/,
            include: [join(__dirname, '../src')],
        },
        {
            test: /\.(jpg|png|svg|cur|ico|gif)$/,
            exclude: /node_modules/,
            loader: 'file-loader?name=public/images/[name].[ext]',
        },
        {
            test: /\.(scss|css)$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                "resolve-url-loader",
                {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
                        sourceMapContents: false
                    }
                },
            ]
        }],
    };
    base.optimization = {
        runtimeChunk: {
            name: 'vendor'
        },
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'initial',
                    minSize: 1
                }
            }
        }
    };
    base.resolve = {
        extensions: [".ts", ".tsx", ".js", ".json"],
    };
    base.plugins = [
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[name].[hash].css",
        }),
        new HtmlWebpackPlugin({
            title: "SPA Skeleteon Template",
            template: 'templates/root.html',
            filename: 'index.html',
            assets: process.env.NODE_ENV === 'development' ? 'assets' : 'public',
            inject: true,
        }),
        new StyleLintPlugin({
            files: ["src/**/*.scss", "assets/styles/**/*.scss"]
        }),
    ];

    return base;
};
