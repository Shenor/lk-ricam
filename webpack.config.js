const path = require('path');

module.exports = {
    mode: "development",
    devtool: false,
    watch: true,
    context: path.resolve(__dirname, "src/js"),
    entry: {
        main: ["@babel/polyfill", "./index.js"],
        report: './report.js'
    },
    output: {
        path: path.resolve(__dirname, "public/dist"),
        filename: "bundle-[name].js",
        library: "[name]",
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }]
    }
};