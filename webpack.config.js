const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const noop = function () {
};

// env
const isDev = process.env.NODE_ENV !== 'production';
const isBuild = process.env.BUILD === 'true';

const extractSass = new ExtractTextPlugin({
    filename: "css/[name].css",
    disable: isBuild
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
                loader: 'awesome-typescript-loader',
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

module.exports = {
    devtool: isDev ? 'source-map' : false,

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [
            path.resolve(__dirname, 'src/Client'),
            'node_modules'
        ],
    },

    context: path.resolve(__dirname, 'src/Client'),

    entry: {
        main: 'main.entry',
        critical: 'critical.entry'
    },

    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist/public'),
        publicPath: '/'
    },

    module: {
        rules: [
            getTSLoader(),
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
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

        new webpack.NamedModulesPlugin(),

        isDev ? noop : new webpack.optimize.ModuleConcatenationPlugin(),

        extractSass
    ],

    devServer: {
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

    mode: isDev ? 'development' : 'production',

    stats: {
        children: false,
        chunks: false,
    },
};
