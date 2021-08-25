const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    "./src/index.tsx"
  ],

  node: {
    fs: "empty"
  },

  output: {
    filename: "[name].[hash].bundle.js",
    path: __dirname + "/dist",
    publicPath: "/"
  },

  devServer: {
    port: 8080,
    historyApiFallback: true
  },

  devtool: "source-map",

  resolve: {
    extensions: [
      ".ts",
      ".tsx",
      ".js",
      ".jsx",
      ".yaml"
    ]
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },

      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },

      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: "/node_modules/"
      },

      {
        test: /\.svg$/,
        loader: "url-loader"
      },

      {
        test: /\.png$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 50000,
            mimetype: "image/png",
            name: "./assets/image/[name].[hash].[ext]",
          },
        },
      },

      {
        test: /\.(jpg|jpeg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 50000,
            mimetype: "image/jpeg",
            name: "./assets/image/[name].[hash].[ext]",
          },
        },
      },

      {
        test: /\.(ttf|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 50000,
            mimetype: "application/font-ttf",
            name: "./assets/font/[name].[hash].[ext]",
          },
        },
      },

      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.ejs",
      inject: "body"
    })
  ]
}