import React from 'react';
import { render } from 'react-dom';
import Profile from './Profile';

const ele = document.createElement('div');
document.body.appendChild(ele);
const props = {
  name: 'viking',
  age: 20
};
render(<Profile {...props} />, ele);// 使用reactDom把组件挂载到dom节点上
