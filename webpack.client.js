// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');


const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: './client.tsx',
    output: {
        path: path.resolve(__dirname, 'assets'),
    },

    module: {
        rules: [
            {
                test: /\.(js|tsx|ts)$/i,
                exclude: ['/node_modules/'],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/env", "@babel/react", "@babel/typescript"]
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
    return config;
};
