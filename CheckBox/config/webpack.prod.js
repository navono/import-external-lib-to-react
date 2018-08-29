const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  devtool: "cheap-module-source-map",

  // entry: ["./index"],
  // 上述的entry，输出的bundle名称为`main`。
  // 如果要指定输出的名称，可以使用以下方法
  entry: {
    index: ["./components/index"],
  },

  output: {
    path: path.resolve(__dirname, "../../lib/CheckBox/"),
    filename: "[name].js",
    libraryTarget: "umd",
    library: "CheckBox",
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    },
  },

  plugins: [
    new CleanWebpackPlugin(["CheckBox"], {
      root: path.resolve(__dirname, "../../lib"),
    }),

    // new webpack.LoaderOptionsPlugin({
    //   minimize: true,
    //   debug: true,
    // }),

    // new webpack.optimize.UglifyJsPlugin({
    //   beautify: false,
    //   mangle: true,
    //   compress: true,
    //   comments: false,
    //   // 通过设置devtool options可以生成Source Maps
    //   sourceMap: true,
    // }),

    // https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
    // https://github.com/webpack/webpack/issues/864
    new webpack.optimize.OccurrenceOrderPlugin(),

    // NODE_ENV should be production so that modules do not perform certain development checks
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),

    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../index.d.ts"),
        to: path.resolve(__dirname, "../../lib/CheckBox"),
      },
    ]),

    // 将 CSS 文件输出到指定的文件
    // new ExtractTextPlugin('style.css'),
  ],
});
