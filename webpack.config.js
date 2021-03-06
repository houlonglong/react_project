var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var browserSync = require('browser-sync').create();

module.exports = {
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/js/root.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        //  plugins: ['react-html-attrs'], //添加组件的插件配置
        "plugins": [
            ["import", { libraryName: "antd", "style": "css" }],
            ['react-html-attrs'] // `style: true` 会加载 less 文件
          ]
        }
      },
      //下面是使用 ant-design 的配置文件
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  output: {
    path: __dirname,
    filename: "./src/bundle.js"
  },
  // devServer: {
  //   contentBase: path.join(__dirname),
  //   compress: true,
  //   port: 9000,
  //   color:true
  // },
  plugins: debug ? [] : [

    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  //   new BrowserSyncPlugin({
  //    host: 'localhost',
  //    port: 8080,
  //    browsers: [],
  //    server: { baseDir: [ './' ] }
  //  })
  ],
};


// browserSync.init({
//         server: {
//             baseDir: "./",
//         },
//         files: "./src/js/components/*.js",
//         port: 8080
//     });
