###Eslint###

    "eslint-config-airbnb": "^9.0.1",
   "eslint-plugin-import": "^1.8.1",
    "eslint-plugin-jsx-a11y": "^1.5.3",
    "eslint-plugin-react": "^5.2.2",
    
     eslint-config-airbnb@15.1.0
    │ ├── UNMET PEER DEPENDENCY eslint@^3.19.0 || ^4.5.0
    │ ├─┬ eslint-config-airbnb-base@11.3.2
    │ │ └── eslint-restricted-globals@0.1.1
    │ └── UNMET PEER DEPENDENCY eslint-plugin-import@^2.7.0
    ├── UNMET PEER DEPENDENCY eslint-plugin-import@^2.7.0
    ├── UNMET PEER DEPENDENCY eslint-plugin-jsx-a11y@^5.1.1
    └── UNMET PEER DEPENDENCY eslint-plugin-react@^7.1.0
    
    
    {
        "extends": "airbnb",
        "rules": {
            "comma-dangle": ["error", "never"]
        }
    }

继承airbnb的配置规则 同时也可以写入自己特定的规则

##html-webpack-plugin###
自动生成html 页面'


npm run dev
npm run build


###npm shrinkwrap 解决版本固定问题###
####⠹ cloneCurrentTree: sill cloneCurrentTree Finishing 安装一直卡住问题####
npm shrinkwrap    and don't forget to commit it.

为此，npm提供了shrinkwrap命令来解决这个问题。在开发阶段依赖稳定后，运行如下命令：

npm shrinkwrap
npm shrinkwrap--dev//将dev-dependencies计算在内
shrinkwrap会在根目录生成npm-shrinkwrap.json文件。之后的npm install会参照这个文件的版本来安装。

注意项

shrinkwrap计算时是根据当前依赖安装的目录结构生成的，如果你不能保证package.json文件定义的依赖与node_modules下已安装的依赖是匹配、无冗余的，建议在执行shrinkwrap命令前清理依赖并重新安装（rm -rf node_modules && npm install）或精简依赖（npm prune）。
默认情况下，shrinkwrap只计算dependencies依赖，而不计算dev-dependencies，如果在生产环境也需要开发依赖或你的依赖分类不清晰，使用--dev参数生成shrinkwrap文件确保不会出问题。
如果不需要关注dev-dependencies，建议npm install --production或npm prune --production

作者：远伯
链接：http://www.jianshu.com/p/aafd6f198cd7
來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


#####组件热加载功能babel-preset-react-hmre#####
只更新局部组件  而对页面不要求强制刷新

//在开发的时候才启用HMR和Catch Error
  "env": {
   "development": {
     "presets": ["react-hmre"]
   }
  }
  
 ########md5生成#############    
  npm install webpack-md5-hash --save-dev
  Usage
  
  Just add this plugin as usual.
  
   
  // webpack.config.js 
   
  var WebpackMd5Hash = require('webpack-md5-hash');
   
  module.exports = {
      // ... 
      output: {
          //... 
          chunkFilename: "[hash].[id].[name].js"
      },
      plugins: [
          new WebpackMd5Hash()
      ]
  };
  ####文件夹清空####
  clean-webpack-plugin
    npm install --save-dev clean-webpack-plugin
    
    
    const CleanWebpackPlugin = require('clean-webpack-plugin');
    ```
     new CleanWebpackPlugin(
          [BUILD_PATH +'/*.js'],　 //匹配删除的文件
          {
            root: __dirname,       　　　　　　　　　　//根目录
            verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
            dry:      false        　　　　　　　　　　//启用删除文件
          }
        )
    ```
