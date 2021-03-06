/*
 * @Description: 父向子传值与子组件操控父组件的方法
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-05-16 22:48:44
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-05-24 20:57:35
 */
import React, { Component } from 'react';
 import PropTypes from 'prop-types';
 

/*  父组件写的什么key 子组件就点什么key 通过props获取 */
/* class LiItem extends Component {
  state = {  }
  render() { 
  return ( 
  <li onClick={()=>this.hendleClick()}>{this.props.content}</li> 
  );
  }
  hendleClick(){
    console.log(this.props.index)
  }
}
 
export default LiItem; */


class LiItem extends Component {
 constructor(props){
  super(props)
  this.hendleClick = this.hendleClick.bind(this)
 }
  // 运行阶段的第一个生命周期函数
  // 使用这个 函数，可以按需更新页面；减少不必要的 DOM 渲染；
 shouldComponentUpdate(nextProps,nextState){
   // 需求3：偶数更新页面；奇数不更新页面；
   // return false
   // 注意： 在 shouldComponentUpdate 方法中，
   // 如果想获取 最新的 state 值，千万不要使用 this.state.***
   // return false; // 解决组件频繁渲染问题
   if(nextProps.content!==this.props.content){
     return true;
   }else{
     return false;
   }
}

  render() { 
  return ( 
  <li onClick={()=>this.hendleClick()}>{this.props.avname}--{this.props.content}</li> 
  );
  }
  hendleClick(){
    console.log('只能获取,因为react是单向数据流',this.props.list)
    console.log(this.props.index)
    this.props.deleteItem(this.props.index)
  }
}
 
// 属性校验,项目大了 规范问题
LiItem.propTypes = {
  content:PropTypes.string,
  index:PropTypes.number,
  deleteItem:PropTypes.func,
  list:PropTypes.array,
  avname:PropTypes.string.isRequired, // 必须传入,不传就报错 isRequired方法
}


// 不传也不想让他报错,给一个默认值
LiItem.defaultProps={
  avname:'崩坏3'
}
export default LiItem;