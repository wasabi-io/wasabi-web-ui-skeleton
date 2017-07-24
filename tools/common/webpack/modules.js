const { merge } = require("../util/Objects");
const getTsLoader = () => {
    return {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
            transpileOnly: true
        }
    }
};

const getTsLintLoader = () => {
    return {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: { /* Loader options go here */ }
    }
};

const getCssLoader = () => {
    return {test: /\.css$/, use: ["style-loader","css-loader"]};
};

const getFileLoader = () => {
    return {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, use: "file-loader", include: /fonts/};
};

const getUrlLoader = () => {
    return {test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/, use: "url-loader?limit=100000&name=[name].[ext]"};
};

const htmlLoader = () => {
    return {
        test: /\.html?$/,
        use: [ {
            loader: 'html-loader',
            options: {
                minimize: true
            }
        }]
    };
};

let rules = {
    ts: getTsLoader,
    tsLint: getTsLintLoader,
    css: getCssLoader,
    url: getUrlLoader,
    html: htmlLoader
};

const configurer = (loader, webpackRules) => {
    for(let key in loader) {
        if(loader.hasOwnProperty(key) && rules[key]) {
            let rule = rules[key]();
            if(!rule) {
                throw new Error(key + " rule not found !")
            }

            let options = loader[key];
            if(typeof options !== "boolean") {
                if(!rule.options) {
                    rule.options = options;
                } else {
                    rule.options = merge(options, rule.options);
                }
            }

            webpackRules.push(rule);
        }
    }
};

module.exports = configurer;