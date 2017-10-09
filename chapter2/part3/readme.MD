####webpack 与part2比 简化####
通过配置文件进行配置 与 requireJS, browserify相比 比较便利的特性
默认会使用当前目录下的webpack.config.js 配置文件只需export一个配置信息对象即可

###webpack.config.js ###
直接跑webpack命令就可以  会默认从webpack.config.js 中获取配置信息 并执行构建过程