const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const noop = function () {
};

// env
const isDev = process.env.NODE_ENV === 'development';
const isBuild = process.env.BUILD === 'true';

// plugins
const extractCSS = new ExtractTextPlugin({
    filename: isDev ? 'css/[name].css' : 'css/[name].[chunkhash:5].css',
    allChunks: true,
});

const extractFontsCSS = new ExtractTextPlugin({
    filename: isDev ? 'css/fonts.css' : 'css/fonts.[chunkhash:5].css',
    allChunks: true,
});

const extractCriticalCSS = new ExtractTextPlugin({
    filename: isDev ? 'css/critical.css' : 'css/critical.[chunkhash:5].css',
    allChunks: true,
});

// loaders
function getCacheLoader() {
    return {
        loader: 'cache-loader'
    };
}

function getTSLoader() {
    return {
        test: /(\.tsx?)$/,
        use: [
            getCacheLoader(),
            {
                loader: 'ts-loader',
                options: {
                    // silent: true,
                    configFile: path.resolve(__dirname, 'tsconfig.json'),
                    compilerOptions: {
                        module: 'esnext',
                        target: 'es5',
                        noEmitHelpers: true,
                        importHelpers: true
                    }
                }
            },
        ],
    };
}

function getBaseCssLoadersList(isModules) {
    return [
        {loader: 'css-loader'},
        {
            loader: 'postcss-loader',
            options: {
                sourceMap: true,
                config: {
                    path: __dirname,
                },
            },
        },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true,
                includePaths: [
                    path.resolve(__dirname, './src'),
                ],
                outputStyle: 'expanded',
            },
        },
    ];
}

function getCSSLoader() {
    const loaders = getBaseCssLoadersList();

    return {
        test: /(\.scss|\.css)$/,
        exclude: /(fonts|critical)\.scss$/,
        use: extractCSS.extract(loaders)
    };
}

function getFontCSSLoader() {
    const loaders = getBaseCssLoadersList();

    return {
        test: /fonts\.scss$/,
        use: extractFontsCSS.extract(loaders)
    };
}

function getCriticalCSSLoader() {
    const loaders = getBaseCssLoadersList();
    return {
        test: /critical\.scss$/,
        use: extractCriticalCSS.extract(loaders)
    };
}

function getFontLoader() {
    return {
        test: /\.(woff|woff2)$/,
        use: [
            {loader: 'url-loader'}
        ],
    };
}

function getImgToB64Loader() {
    return {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        // include: path.resolve(__dirname, 'src/img'),
        // exclude: path.resolve(__dirname, svgIconsPath),
        use: [
            {loader: 'url-loader', options: {limit: 16000}},
        ],
    };
}

module.exports = {
    devtool: isDev ? 'source-map' : false,

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [
            path.resolve(__dirname, 'src/client'),
            'node_modules'
        ],
    },

    context: path.resolve(__dirname, 'src/client'),

    entry: {
        main: 'main'
    },

    output: {
        filename: isDev ? 'js/[name].js' : 'js/[name].[chunkhash:5].js',
        chunkFilename: isDev ? 'js/[name].js' : 'js/[name].[chunkhash:5].js',
        path: path.resolve(__dirname, 'dist/public'),
        publicPath: (isDev && !isBuild) ? 'http://localhost:8080/' : '/',
    },

    module: {
        rules: [
            getTSLoader(),
            getCSSLoader(),
            getFontCSSLoader(),
            getCriticalCSSLoader(),
            getFontLoader(),
            getImgToB64Loader(),
        ],
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
            },
            DEV: JSON.stringify(isDev),
            BUILD: JSON.stringify(isBuild),
        }),

        isDev
            ? new webpack.HotModuleReplacementPlugin()
            : noop,

        !isDev
            ? new webpack.optimize.ModuleConcatenationPlugin()
            : noop,

        isDev
            ? new webpack.NamedModulesPlugin()
            : new webpack.HashedModuleIdsPlugin({
                hashFunction: 'sha256',
                hashDigest: 'hex',
                hashDigestLength: 5
            }),

        // chunks optimizations
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: (module) => module.context && module.context.indexOf('node_modules') >= 0,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),

        extractCSS,
        extractFontsCSS,
        extractCriticalCSS,

        !isDev
            ? new webpack.optimize.UglifyJsPlugin({
                comments: false,
                dropDebugger: true,
                dropConsole: true,
                compressor: {
                    warnings: false,
                },
            })
            : noop,

        new StatsPlugin('../stats.json'),

        !isDev
            ? new SWPrecacheWebpackPlugin({
                minify: true,
                cacheId: 'naxatu',
                filename: 'service-worker.js',
                navigateFallback: '/',
            })
            : noop,
    ],

    devServer: {
        proxy: {
            '/': 'http://localhost:3020'
        },
        compress: true,
        historyApiFallback: true,
        stats: {
            children: false,
            chunks: false,
        },
        overlay: {
            warnings: true,
            errors: true
        },
    },

    stats: {
        children: false,
        chunks: false,
    },
};
