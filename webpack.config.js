const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'), // change this
    publicPath: '/',
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./build",
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
    }),
],
  module: {
    rules: [
        {
            test: /\.js$/,
            use: "babel-loader"
        },
        {
            test: /\.css$/,
            use: ('style-loader', 'css-loader')
        }
    ]
  },
}
