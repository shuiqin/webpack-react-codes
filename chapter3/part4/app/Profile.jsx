import React, { PropTypes } from 'react';
import Hobby from './Hobby';

const propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired  // 组件属性验证
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: 0,
      hobbies: ['skateboarding', 'rock music']
    };
    this.likedCallback = this.likedCallback.bind(this);
    // TODO 因为在es6 class类型的component组件声明中 不会把一些自定义的callback函数绑定到实例中 所以需要手动在constructor里绑定
    // react并未把事件绑定在特定的dom节点上 实际是用事件代理的方式在最外层绑定一个事件回调 当组件unmounted的时候 事件回调会自动删除
    this.addHobbyCallback = this.addHobbyCallback.bind(this);
  }


  componentDidMount() {
    setTimeout(() => {
      this.likedCallback();
    }, 1000);
  }

  likedCallback() {
    let liked = this.state.liked;
    liked++;
    this.setState({
      liked
    });
  }

  addHobbyCallback() {
    const hobbyInput = this.refs.hobby; // DOM操作
    const val = hobbyInput.value;
    if (val) {
      let hobbies = this.state.hobbies;
      hobbies = [...hobbies, val];
      this.setState({
        hobbies
      }, () => {
        hobbyInput.value = '';
      });
    }
  }

  render() {
    // 给每个循环组件添加一个唯一的key值
    return (
      <div>
        <h1>我的名字叫 {this.props.name}</h1>
        <h2>我今年 {this.props.age} 岁</h2>
        <button onClick={this.likedCallback}>给我点赞</button>
        <h2>总点赞数： {this.state.liked}</h2>
        <h2>我的爱好：</h2>
        <ul>
          {this.state.hobbies.map((hobby, i) => <Hobby key={i} hobby={hobby} />)}
        </ul>
        <input type="text" ref="hobby" />
        <button onClick={this.addHobbyCallback}>添加爱好</button>
      </div>
    );
  }
}

// 将验证附值给组件的propTypes属性
Profile.propTypes = propTypes;

export default Profile;
