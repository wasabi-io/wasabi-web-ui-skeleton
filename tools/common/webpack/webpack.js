const path = require("path");
const webpack = require("webpack");
const Finder = require("../util/PathFinder");
const Arrays = require("../util/Arrays");
const { merge } = require("../util/Objects");

const nodeEnv = process.env.NODE_ENV || "production";
function configure(config){
    let settings = {
        webpack: {
            module: {
                rules: []
            },
            plugins: [
                new webpack.DefinePlugin({
                    "process.env": {
                        "NODE_ENV": JSON.stringify(nodeEnv)
                    }
                })
            ],
            node: {
                fs: "empty"
            }
        }
    };
    const finder = new Finder(config.basePath);
    const paths = finder.getAll(config.paths);

    settings.webpack.resolve = require("./resolve")({
        basePath: config.basePath,
        paths,
        aliases: config.config,
        modules: config.modules,
        extensions: config.extensions
    });

   if(config.loader) {
      require("./modules")(config.loader, settings.webpack.module.rules);
    }
    Arrays.addAllAsUniqueToArray(config.rules, settings.webpack.module.rules);

   settings.webpack.entry = config.entries;
   settings.webpack.devtool = "source-map";
   settings.webpack.context = paths.app;
    if(config.server) {
        settings.webpack.devServer = require("./devserver")(config.server);
    }
    settings.paths = paths;
    if(config.webpack) {
        settings.webpack = merge(config.webpack, settings.webpack);
    }
    if(nodeEnv === "production") {
        settings.webpack.plugins.push(
            new webpack.optimize.UglifyJsPlugin()
        );
        settings.webpack.plugins.push(
            new webpack.optimize.OccurrenceOrderPlugin()
        );
    }
   return settings;
}

module.exports = configure;
