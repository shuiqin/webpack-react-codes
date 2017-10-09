###Flux单向数据流##

##Dispatcher##
1) register: 负责各种actionType的回调, 并在回调中操作store
2) dispatch方法 触发对应类型的回调


Action -> (dispatch Action)  ---> Register(注册事件) --- > 


#####

1) Todo.jsx   触发action
 <CreateButton onClick={this.createTodo} />
  createTodo() {
    TodoAction.create({ id: uuid.v4(), content: '3rd stuff' });
  }
  
2) TodoAction.js 触发action
    create(todo) {
      AppDispatcher.dispatch({
        actionType: 'CREATE_TODO',
        todo
      });
    },
    
3) TodoStore.js action的回调注册
    AppDispatcher.register((action) => {
      switch (action.actionType) {
        case 'CREATE_TODO':
          TodoStore.addTodo(action.todo);
          TodoStore.emitChange();  //触发change事件
          break;
        case 'DELETE_TODO':
          TodoStore.deleteTodo(action.id);
          TodoStore.emitChange();
          break;
        default:
          //  nothing to do here
    
      }
    });
    
4) TodoStore.js 通知view更新数据
      emitChange() {
        this.emit('change');
      },
      addChangeListener(callback) {
        this.on('change', callback);
      },
      removeChangeListener(callback) {
        this.removeListener('change', callback);
      }
       
5) Todo.jsx     
      componentDidMount() {
          //组件刚初始化的时候监听store的change事件
          TodoStore.addChangeListener(this.onChange); //监听store触发的 change事件
        }
        componentWillUnmount() {
          //组件卸载的时候清楚该事件绑定
          TodoStore.removeChangeListener(this.onChange);
        }
        onChange() {
          this.setState({
            todos: TodoStore.getAll()
          });
        }