// 入口文件
// 引入react, 引入reactDom
// 导入的时候,根据导入的文件的类型,顺序有所区别
// 1. 第三方包
// 2. 自定义的
// 3. 样式文件/图片..
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// 引入根组件
import App from './App'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
