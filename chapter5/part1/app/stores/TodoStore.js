import EventEmitter from 'events';
import assign from 'object-assign';
import AppDispatcher from '../dispatcher/AppDispatcher';
import uuid from 'uuid';

// store是单例
const TodoStore = assign({}, EventEmitter.prototype, {
  todos: [{ id: uuid.v4(), content: 'first one' }, { id: uuid.v4(), content: '2nd one' }],
  getAll() {
    return this.todos;
  },
  addTodo(todo) {
    this.todos.push(todo);
  },
  deleteTodo(id) {
    this.todos = this.todos.filter(item => item.id !== id);
  },
  emitChange() {
    this.emit('change');
  },
  addChangeListener(callback) {
    this.on('change', callback);
  },
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
});

// 注册回调 回调的时候处理数据
// 注册不同事件的回调
// store是更新数据的唯一场所
// action和dispather不和数据打交道
AppDispatcher.register((action) => {
  switch (action.actionType) {
    case 'CREATE_TODO':
      TodoStore.addTodo(action.todo);
      TodoStore.emitChange();  // 触发change事件
      break;
    case 'DELETE_TODO':
      TodoStore.deleteTodo(action.id);
      TodoStore.emitChange();
      break;
    default:
      //  nothing to do here

  }
});
export default TodoStore;
