import AppDispatcher from '../dispatcher/AppDispatcher';
/*
* action就是普通javascript object ,
 * 用actiontype 字段表明action的用途
 * 另一个表明它所传递的消息
 *
 * register注册回调 在 TodoStore写
* */
const TodoAction = {
  create(todo) {
    AppDispatcher.dispatch({
      actionType: 'CREATE_TODO',
      todo
    });
  },
  delete(id) {
    AppDispatcher.dispatch({
      actionType: 'DELETE_TODO',
      id
    });
  }
};

export default TodoAction;
