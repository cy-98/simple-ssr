// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

/**
 * @type {import('webpack').Configuration}
 */
const config = {
    entry: ['webpack-hot-middleware/client?path=http://localhost:3002/__webpack_hmr', './src/client.tsx'],
    output: {
        publicPath: 'auto',
        path: path.resolve(__dirname, 'assets'),
        filename: 'client.js',
    },
    target: 'web',
    optimization: {
        sideEffects: false,
        usedExports: true,
    },
    devServer: {
        port: 3002,
        hot: true,
        proxy: [{
            target: 'http://my-backend.localhost'
        }],
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
          }
    },

    module: {
        rules: [
            {
                test: /\.(js|tsx|ts)$/i,
                exclude: ['/node_modules/'],
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [require('react-refresh/babel')],
                        presets: ["@babel/react", "@babel/typescript"]
                    }
                }
            },
        ],
    },

    plugins: [
        new ReactRefreshPlugin(),
        new HotModuleReplacementPlugin({
            overlay: { sockIntergration: 'whm' }
        })
    ],

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};

module.exports = () => {
    return config;
};
