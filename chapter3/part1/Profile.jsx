import React from 'react';

export default Class Profile extends React.Component{
  render(){
    return (
      <div className="profile-component">
        <h2>Hi, i am {this.props.name}</h2>
      </div>
    )
  }
}