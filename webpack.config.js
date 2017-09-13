module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
          { test: /\.css$/, loader: "style-loader!css-loader" },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: { presets: [ 'es2015', 'react' ] }
          }
        ]
    }
};