const path = require('path');
const webpack = require('webpack');
const noop = function () {
};

// env
const isDev = process.env.NODE_ENV === 'development';
const isBuild = process.env.BUILD === 'true';

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
        main: 'main'
    },

    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist/public'),
        publicPath: '/'
    },

    module: {
        rules: [
            getTSLoader()
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

        isDev ? noop
            : new webpack.optimize.UglifyJsPlugin({
                comments: false,
                dropDebugger: true,
                dropConsole: true,
                compressor: {
                    warnings: false,
                },
            })
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
