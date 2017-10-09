browserify index.js>bundle.js
直接引index.js 代码无法正常执行 因为上面代码是按CommonJS模块规范书写的 
浏览器不支持

浏览器直接能跑的bundle.js
 
webpack index.js bundle.js  //将index.js作为项目入口进行构建