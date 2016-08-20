module.exports = {
  entry: './src/app.jsx',
    output: {
      path: './bin',
      filename: 'app.bundle.js'
    },
    module: {
      loaders: [{
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }]
    }
};