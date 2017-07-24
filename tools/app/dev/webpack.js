process.env.NODE_ENV = process.env.NODE_ENV | "development";
const webpack = require("webpack");
const WebpackNotifierPlugin = require("webpack-notifier");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const packageJson  = require("../../../package.json");
const { merge } = require("../../common/util/Objects");
const configureWebpack = require("../../common/webpack/webpack");
let jsonConfig = require("../webpack.json");

jsonConfig = merge({
    server: true,
    loader: {
        ts: true,
        css: true,
        url: true,
        file: true,
        html: true
    }
}, jsonConfig);

const settings = new configureWebpack(jsonConfig);

settings.webpack.output = {
    filename: "[name].entry.js"
};

settings.webpack.plugins = [
    new WebpackNotifierPlugin({ alwaysNotify: true }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        title: 'React-Bootstrap-Typescript-Mobx',
        version: packageJson.version,
        lastModified: new Date().toString(),
        appMountId: "app",
        template: settings.paths.index_template,
        inject: true,
    })
];

if(jsonConfig.copy && jsonConfig.copy.move) {
    settings.webpack.plugins.push(new CopyWebpackPlugin(jsonConfig.copy.move))
}

module.exports = settings.webpack;