###显示Markdown转换以后的内容 需要marked库将Markdown格式转化为HTML文档格式###
marked为代码依赖

npm install marked --save


###test###
touch shuiqintest.js  生成test文件
react-addons-test-utils 推出一套专门的测试工具  这套工具api复杂且难记


enzyme对 react-addons-test-utils做了封装 比较好用
https://github.com/airbnb/enzyme
http://airbnb.io/enzyme/


####react测试思路###
render 将虚拟dom对象转化成真正的 dom对象
1) 虚拟dom对象 本质是js对象, 可采用测试对象的方式来测试组件是否正常
2) 真正的dom对象 在虚拟dom对象挂载到dom以后 可通过测试一些真实的交互操作来测试dom结构是否发生相应的变化以测试是否正常
####react测试思路###

###配置测试环境####
    "test": "NODE_ENV=production mocha --compilers js:babel-core/register --require ignore-styles"
预编译器  babel
--require 指的是运行测试之前需要引入的一些辅助插件  ignore-styles


  let list = shallow(<List items={testData} />);//shallow 生成虚拟dom
expect(list.find(ListItem).length).to.equal(testData.length); //find可以查找选择器或component本身


无状态组件测试: 
根据传入的属性 判断是否生成正确的对应税局 


###react局限##
react负责 view层级的内容
还有以下层级:

数据流向
state管理
路由解决方案