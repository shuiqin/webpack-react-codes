###HtmlWebpackPlugin####
自动生成一个几乎为空的html页面 并向其中注入构建的 结果文件路径 即使路径中包含动态的内容 入MD5戳

webpack.config.js中添加插件

plugins: [
		new HtmlWebpackPlugin({
			title: 'use plugin'
		})
	]
	
####实时构建###	
监听文件改动并实时构建的能力 
##webpack --watch##
webpack --watch  即可开启监视功能  webpack -w

##webpack-dev-server##
webpack还提供啦webpack-dev-server来辅助开发与调试
它是个基于Express框架的 Node.js服务器 提供客户端运行环境 会被注入到页面代码中执行 , 并通过
Socket.IO与服务器通信 
服务器短的每次改动与重新构建都会被通知到页面上 页面可以随之做出反应

自动刷新  // 模块热替换等
 npm install webpack-dev-server -g
 会默认监听8080 端口
 
 //webpack-dev-server 配置 详见 webpack官方文档
  devServer: {
     contentBase: HTML_PATH,
     historyApiFallback: false,
     hot: true,
     port: 8088,
     publicPath: PUBLIC_PATH,
     noInfo: false,
     disableHostCheck: true,
   },
   
   
   ########
   moudule.js:338 throw err; Error: Cannot find module 'webpack/lib/node/NodeTemplatePlugin'
   原创 2016年06月30日 17:56:52 6910211
   我查了一些资料，是因为全局安装webpack,导致的。
   解决方法：1，可以在本项目中安装，npm install webpack
   2, 或者是，在~/.bash_profile中添加如下设置： export NODE_PATH="/usr/local/lib/node_modules" 保存退出。
   （.bash_profile这个是隐藏文件，或者是配置文件，那怎么进入这个文件哪？
       输入cd ~，输入touch .bash_profile，输入open -e .bash_profile，保存文件，关闭.bash_profile；更新刚配置的环境变量，输入source .bash_profile）