require('dotenv-safe').config();

const Webpack = require("webpack");

const base = require("./base.config");

module.exports = () => {
    return {
        ...base(),
        mode: "development",
        devtool: "source-map",
        watch: true,
        devServer: {
            host: '0.0.0.0',
            port: 3000,
            historyApiFallback: true,
            publicPath: '/',
        },
        module: {
            rules: [
                ...base().module.rules,
            ]
        },
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
