const path = require('path');

module.exports = {
    entry: "./wwwroot/inventory/src",
    output: {
        path: path.resolve(__dirname, "wwwroot/inventory/js"),
        filename: "bundle.js",
        publicPath:"/inventory/js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/react']
                    }
                }
            }
        ]
    }
};