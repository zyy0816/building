import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// react react-dom babel-preset-react
// .babelrc
// babel-plugin-transform-object-assign
// babel-plugin-*   部分无法转换 比如Object.assign()


class Demo extends Component{
  render(){
    return (
      <div className="box">{this.props.text}</div>
    )
  }
}

ReactDOM.render(
  <Demo text="This is a text"/>,
  document.querySelector('.container')
)