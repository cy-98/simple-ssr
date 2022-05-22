const path = require('path');
const isProduction = process.env.NODE_ENV == 'production';


/**
 * @type {import('webpack').Configuration}
 */
const config = {
    entry: './src/server.tsx',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
        library: 'library',
        publicPath: 'auto',
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/i,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/react", "@babel/typescript"]
                    }
                },
                exclude: ['/node_modules/'],
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
