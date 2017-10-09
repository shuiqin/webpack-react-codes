###安装babel cli  使用babel编译的方法###
    npm install babel-cli -g
    
    
    /*
    * 现在只是吧es6.js代码复制过来 没有任何处理 需要配置babel怎么去编译代码
    *
    * 1)babel是通过安装插件(plugin)或者预设(preset, 就是一组设定好的插件)来编译代码
    * 配置.babelrc
      2) npm init 
      3) npm install --save-dev babel-preset-es2015
      4) 修改.babelrc文件 添加
        "presets": ['es2015'],
        
     5) 运行 babel es6.js -o compiledes6.js  //发现已经编译完成
        
    * */
    
    
###babel单独插件实现对象展开操作符  babel单独插件的配置使用###
        npm install babel-plugin-transform-object-rest-spread --save-dev
        
### babel核心概念####        
用一系列的plugin来管理编译规则  通过不同的plugin,  不仅可以编译ES6代码 还可以编译React JSX 


###待解决问题###
SyntaxError: Unexpected token import  


####模块module与组件component###
模块是语言层面的 往往表现为单独的js文件 对外暴露一些属性方法
组件是业务层面的 一个独立使用的功能实现 往往表现为一个UI组件 组件包含他所需要的所有资源  js, css , html , 甚至图片与字体
组件化以模块化为基础

#####uglifyjs######
安装 : sudo npm install uglify-js -g
  /*
     At the moment uglifyjs does not support ES6 syntax. You can use babel for it. See more https://babeljs.io/.
  */
  
uglifyjs compiledes6.js -o mincompliedmain.js

#####uglifyjs######

###jshint ####
 jshint test.js  
 //注 ： 需要在目录下放.jshintrc文件 
{
  "esversion": 6
}

相应grunt插件
grunt-contrib-jshint
####sh文件运行 ###

sh task.sh

####sh文件运行 ###


###grunt###
npm install grunt-cli -g

配置 Gruntfile.js 文件

jshint配置
jshintrc: true, // 使用.jshintrc文件
 
 ---- 跑命令 --- 
 grunt 
 grunt jshint
 
 用js的方法跑任务  开发人员好接受 
###gulp###
gulpfile.js
通过流的概念来简化多个任务之间的配置和输出 让任务的配置更加简洁和易于上手   

 ---- 跑命令 --- 
gulp
gulp lint
###gulp###

####模块打包工具Bundler bundler文件  ####
node.js中使用require同步加载的方式因为受浏览器环境特殊性的影响 无法使用

####browserify####
支持commonjs规范
browserify将浏览器不支持的模块进行编译 转换 合并, 并且最后生成的代码可以在浏览器端良好运行的工具 称为bundler

browserify test.js>bundler.js  

bundler.js该文件可直接在浏览器使用 只需插到script标签就可以
####browserify####

####webpack####
支持amd和commonjs规范

通过loader机制也可以使用es6的模块格式

bundler主要任务突破浏览器的鸿沟
将各种格式的js代码 甚至是静态文件, 进行 分析 压缩 合并 打包 最后生成浏览器支持的代码


多种模块方案的支持 及视一切资源为可管理模块的思路
####webpack####