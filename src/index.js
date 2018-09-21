// // 下面开始使用redux的开发
// import { createStore } from 'redux'

// console.log(createStore)

// // @第一步：写一个reducer函数
// function addItem (state = [] , action) {
//     switch (action.type) {
//         case 'ADD_ITEM' : 
//             console.log(action , state)
//             return [action.text , ...state]
//         default : 
//             return state
//     }
// }

//  // @store
//  // store = createStore(reducer)
//  const store = createStore(addItem)

//  // @render
//  // render函数是从目前的store中取出state数据，然后展示在网页上
//  function render () {
//      const items = store.getState().map(item => (
//          item ? `<li>${item}<li>` : ''
//      ))

//      document.getElementById('app').innerHTML = `<ul>${items.join('')}</ul>`

//      console.log(store , store.getState())
//  }

// // 第一次要调用一次render函数，先渲染页面
// render()

// // 订阅render到store，这会让store中如果有新的state(状态)时，会重新调用一次render()
// store.subscribe(render)

// // 监听事件到 "btn" 按钮,
// // 点按按钮会触发 store.dispatch(action)，发送一个动作，
// // 例如 store.dispatch({ type: 'ADD_ITEM', textValue })
// const btn = document.getElementById('btn')
// const inputTxt = document.getElementById('txt')

// // dispatch 改变值得实惠分发一个action
// function handler() {
//     store.dispatch({
//         type : 'ADD_ITEM',
//         text : inputTxt.value
//     })
//     inputTxt.value = ''
// }

// btn.addEventListener('click' , handler)


// 这里开始写react的代码

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import panelControls from '../container/reducers.js'
import App from '../component/app.js'

const store = createStore(panelControls)

console.log("getState" , store.getState())

ReactDOM.render(<div>
    <Provider store={store}>
       <App></App>
   </Provider>
</div> , document.getElementById('app'))
