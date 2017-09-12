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
            test: /\.js$, .jsx$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: { presets: [ 'es2015', 'react' ] }
          }
        ]
    }
};