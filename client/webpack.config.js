const webpack = require("webpack")
const path = require("path")

const nodeEnv = process.env.NODE_ENV || "development"

const config = {
  entry: [
    "babel-polyfill",
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:3500",
    "entry"
  ],

  output: {
    filename: "hmr-bundle.js",
    publicPath: "http://localhost:3500/"
  },

  resolve: {
    modules: [path.resolve("./src"), "node_modules"],
    extensions: [".js"],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: JSON.stringify(nodeEnv) }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [path.resolve("./src")]
      },

      {
        test: /\.css$/,
        loader: [
          "style-loader?sourceMap",
          "css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]"
        ]
      }
    ]
  },

  devServer: {
    port: 3500,
    hot: true,
    stats: {
      hash: false,
      version: false,
      chunks: false
    }
  }
}

if (nodeEnv !== "production") {
  config.plugins.push(new webpack.NoEmitOnErrorsPlugin())
  config.devtool = "cheap-module-source-map"
} else {
  config.devtool = "eval"
}

module.exports = config
