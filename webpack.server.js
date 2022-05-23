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
        filename: "server.js",
        library: 'library',
        publicPath: 'auto',
    },
    watch: true,
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
    return config;
};
