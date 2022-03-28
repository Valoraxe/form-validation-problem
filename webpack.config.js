const path = require('path')

module.exports = {
    mode: 'development',
    entry: ["@babel/polyfill", "./src/app.js"],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    // performance : {
    //     hints : false
    // },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/, //test only files that end in .js
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                exclude: /node_modules/
            }
        ]
    }
};