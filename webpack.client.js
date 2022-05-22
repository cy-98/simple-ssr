// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const isProduction = process.env.NODE_ENV == 'production';

/**
 * @type {import('webpack').Configuration}
 */
const config = {
    entry: './src/client.tsx',
    output: {
        publicPath: 'auto',
        path: path.resolve(__dirname, 'assets'),
        filename: 'client.js',
    },
    optimization: {
        sideEffects: false,
        usedExports: true,
    },

    module: {
        rules: [
            {
                test: /\.(js|tsx|ts)$/i,
                exclude: ['/node_modules/'],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/react", "@babel/typescript"]
                    }
                }
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    config.mode = 'production';

    return config;
};
