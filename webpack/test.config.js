const path = require("path");
const Webpack = require('webpack');
const dotenv = require("dotenv-safe");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base = require("./base.config.js");

dotenv.config({ path: path.resolve(process.cwd(), '.env.test') });

module.exports = () => {
    return {
        ...base(),
        mode: "development",
        output: {
            filename: "[name].[hash].js",
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "awesome-typescript-loader",
                    include: [path.join(__dirname, "../src"), path.join(__dirname, "../tests")],
                },
                {
                    test: /\.(scss|css)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader"
                    ]
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    exclude: /node_modules/,
                    loader: 'file-loader?name=public/fonts/[name].[ext]',
                },
                {
                    test: /\.(jpg|png|svg|cur|ico|gif)$/,
                    exclude: /node_modules/,
                    loader: 'file-loader?name=public/images/[name].[ext]',
                },
            ],
        },
        optimization: undefined,
        plugins: [
            ...base().plugins,
            new Webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(process.env.NODE_ENV || "development"),
                }
            }),
        ]
    }
};
