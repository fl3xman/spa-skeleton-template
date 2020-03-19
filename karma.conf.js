module.exports = function (config) {
    config.set({
        frameworks: ["mocha", "polyfill"],
        files: [
            { pattern: "tests/**/*.ts" },
        ],
        preprocessors: {
            "**/*.ts": ["webpack"],
        },
        webpack: require("./webpack/test.config.js")(),
        reporters: ["mocha", "karma-typescript"],
        browsers: ["ChromeHeadlessNoSandbox"],
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: "ChromeHeadless",
                flags: ["--no-sandbox"]
            }
        },
        singleRun: true
    });
};
