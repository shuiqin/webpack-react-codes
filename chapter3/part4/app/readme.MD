###给每个循环组件添加一个唯一的key值###


###无状态函数组件 -- 纯函数###
无内部state 不需要组件生命周期函数 可写成纯函数的形式
根据输入生成组件 - 无其他副作用  -- 推荐写法

##es6 class类型的component组件声明中 不会把一些自定义的callback函数绑定到实例中 所以需要手动在constructor里绑定###
 this.likedCallback = this.likedCallback.bind(this);
    // TODO 因为在es6 class类型的component组件声明中 不会把一些自定义的callback函数绑定到实例中 所以需要手动在constructor里绑定

###state设计原则###
最小化state准则  让大多数组件都是无状态的

父组件包含state 用于处理各种事件 交流逻辑 修改state
对应自组件要关心的只是传入的属性而已

state包含组件的事件回调函数可能引发UI更新的这类数据 应该是轻量化json数据 把数据设计到最小
更多的数据通过render方法计算得到

##state 不应该包含的数据##
1) 可以由state计算得出的数据
2) 组件 组件不需要保存在state中 在render方法中渲染即可
3) props中的数据 


####jsx reactElement p101###
jsx是一种创造ReactElement的便捷写法
ReactElement是轻量级的 无状态的 不可改变的 dom元素的虚拟表达


###ReactDom ###

import ReactDom from 'react-dom';
import { render } from 'react-dom';
