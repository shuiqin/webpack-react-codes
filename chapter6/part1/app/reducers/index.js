/*
 * @file main file for reducers
 */

import { combineReducers } from 'redux';
import items from './items';
import editor from './editor';

// reducers下实现的文件名与reducer对应的数据名称的一致性
const rootReducer = combineReducers({
  items,
  editor,
});

export default rootReducer;
