var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash'); //md5生成
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清空文件夹


var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var APP_PATH = path.resolve(ROOT_PATH, 'app');
module.exports= {
  entry: {
    app: path.resolve(APP_PATH, 'app.jsx')
  },
  output: {
    path: BUILD_PATH,
    filename: '[hash].[id].[name].js'
  },

  //enable dev source map
  devtool: 'eval-source-map',
  //enable webpack dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: APP_PATH
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: APP_PATH
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: APP_PATH
      }    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'My first react app'
    }),
    new WebpackMd5Hash(),
    new CleanWebpackPlugin(
      [BUILD_PATH +'/*.js'],　 //匹配删除的文件
      {
        root: __dirname,       　　　　　　　　　　//根目录
        verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
        dry:      false        　　　　　　　　　　//启用删除文件
      }
    )
  ]
}
