const webpack = require("webpack");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

const PORT = process.env.PORT || 3000;

module.exports = merge(commonConfig, {
  // dev only
  // devtool: "inline-source-map",
  devtool: "cheap-module-source-map",
  devServer: {
    // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。
    // devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
    // 推荐使用绝对路径
    // contentBase: path.resolve(__dirname, '../dist'),

    // 此路径下的打包文件可在浏览器中访问。
    // publicPath: '/dist/',

    compress: true,
    hot: true,
    port: PORT,
    open: process.env.HOT ? true : false,
    inline: process.env.HOT ? true : false,
    historyApiFallback: true,
    stats: {
      colors: true,
      chunks: false,
      "errors-only": true,
    },
  },

  entry: [
    "react-hot-loader/patch",
    `webpack-dev-server/client?http://localhost:${PORT}`,
    // dev-server: 遇到错误会重新刷新浏览器
    // only-dev-server: 遇到错误不会重新刷新浏览器，React App推荐使用。因为不会重置状态
    "webpack/hot/only-dev-server",
    "./index",
  ],

  plugins: [
    new webpack.NamedModulesPlugin(),

    // dev only
    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoEmitOnErrorsPlugin(),

    // NODE_ENV should be production so that modules do not perform certain development checks
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
      __DEV__: true,
    }),

    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
  ],
});
