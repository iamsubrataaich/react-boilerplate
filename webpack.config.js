const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },
  plugins: [
    new ESLintPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "./src/favicon.ico", to: "./public" },
        { from: "./src/manifest.json", to: "./public" },
        { from: "./src/logo192.png", to: "./public" },
        { from: "./src/logo512.png", to: "./public" },
      ],
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: "./src/sw.js",
      swDest: "sw.js",
    }),
  ],
};
