require('dotenv-safe').config();

const Webpack = require('webpack');

const { resolve } = require("path");

const base = require("./base.config");

module.exports = (__env, { build }) => {
    return {
        ...base(build),
        mode: "production",
        output: {
            path: resolve(__dirname, "../dist"),
            publicPath: "./",
            filename: "[name].[hash].js"
        },
        plugins: [
            ...base(build).plugins,
            new Webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(process.env.NODE_ENV || "production"),
                }
            }),
        ]
    }
};
