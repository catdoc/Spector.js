var path = require("path");
const webpack = require('webpack');

var MAIN_DIR = path.resolve(__dirname, "../");
var BUILD_DIR = path.resolve(MAIN_DIR, "./dist");
var DEV_DIR = path.resolve(MAIN_DIR, "./minigame");

var buildConfig = function(env) {
    var isProd = env.prod !== undefined;
    var isMinigame = env.minigame !== undefined;
    console.log("isProd:" + isProd + ", isMinigame:" + isMinigame);
    var config = {
        watch: !isProd,
        context: MAIN_DIR,
        entry: isMinigame ? [
            // "./vendors/ace.js",
            // "./vendors/ace-mode-glsl.js",
            // "./vendors/ace-theme-monokai.js",
            // "./vendors/ace-ext-searchbox.js",
            "./src/spector.ts"
        ] : [
            "./vendors/ace.js",
            "./vendors/ace-mode-glsl.js",
            "./vendors/ace-theme-monokai.js",
            "./vendors/ace-theme-override.css",
            "./vendors/ace-ext-searchbox.js",
            "./src/spector.ts"
        ],
        output: {
            path: isProd ? BUILD_DIR : DEV_DIR,
            publicPath: "/",
            filename: isProd ? "spector.bundle.js" : "spector.bundle.dev.js",
            libraryTarget: "umd",
            library: "SPECTOR",
            umdNamedDefine: true
        },
        performance: {
            hints: false
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".css", ".sass"]
        },
        devtool: false,
        mode: isProd ? "production" : "development",
        module: {
            rules: [{
                test: /\.tsx?$/,
                // exclude: [ path.resolve(MAIN_DIR, "./src/backend/spies/xrSpy.ts") ],
                loader: "ts-loader",
                options: {
                    configFile: "src/tsconfig.json"
                }
            }, {
                test: /\.scss$/,
                use: isMinigame ? ["css-loader", "sass-loader"] : [ "style-loader?insert=html", "css-loader", "sass-loader" ]
            }, {
                test: /\.css$/,
                use: isMinigame ? ["css-loader"] : [ "style-loader?insert=html", "css-loader" ]
            }, {
                test: /ace.js$/,
                // use: [ "exports-loader?ace" ]
                loader: "exports-loader",
                options: {
                    type: "commonjs",
                    exports: "ace",
                },
            }, {
                test: /spector.js$/,
                use: [ "exports-loader?SPECTOR" ]
            }]
        },
        plugins: [
            new webpack.DefinePlugin({
                isMinigame : isMinigame,
                __DEV__: !isProd,
                __VERSION__: JSON.stringify('1.0.0')
            })
        ]
    };

    if (!isProd) {
        config.devtool = "nosources-source-map";

        // Source Map Remapping for dev tools.
        config.output.devtoolModuleFilenameTemplate = (info) => {
            info.resourcePath = path.normalize(info.resourcePath);

            console.error(info.resourcePath);

            // if (!path.isAbsolute(info.resourcePath)) {
            //     info.resourcePath = path.join(DEV_DIR, info.resourcePath);
            // }

            return `../${info.resourcePath.replace(/\\/g, "/")}`;
        };
    }

    return config;
}

module.exports = buildConfig;
