webpack index.js bundle.js

webpack是构建工具 并不是代码依赖应安装在dev-dependencies中


这样会将css延后到js执行期
可借助extract-text-webpack-plugin插件 在打包时将样式内容抽取并输出到额外的css文件中 然后在页面中直接引入结果css文件即可