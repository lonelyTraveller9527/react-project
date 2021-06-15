[React 路由使用](src\App.js)

# 1、安装对应依赖路由包

npm i react-router-dom --save

# 2、import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

Router —— 路由最外层包裹
Route —— 设置匹配路径和加载组件，Route 的位置就是路由匹配时组件加载显示的位置
Link —— 设置 a 链接跳转路由，to 可以接收地址或是对象类型包括 state/pathname/query 的参数
Switch —— 作用类似于 switch ，一般用于路由匹配时，使得路由匹配到就不继续匹配

# 路由传值

1、动态参数传值 在 Route path 属性设置， this.props.match.params 接收
2、query 参数传值， 在 Link to 属性设置对象格式传递， to={{pathname: '/xx', query: {id: '12xx'}}},在 this.props.location.query 接收
3、state 参数传值，在 Link to 属性设置对象格式传递， to={{pathname: '/xx', state: {id: '12xx'}}},在 this.props.location.state 接收

注意：只有 Route 加载的组件才能获取，且不包括子组件，如果需要使用需要把 prosp 解构传递下去才行

==================================================================================================================================================================
[React 的仓库 redux 使用](src\store)

# 1、安装 redux 依赖

npx i redux --save

# 2、新建 store/reducer.js 设置 redux 的仓库初始数据配置

store/reduce.js

```
const defaultState = {
  message: 'message'
}
const reduce = (state = defaultState, action) => {
  if(action.type === 'change'){
    return {
    ...state,
    message: action.value
    }
  }
  return state
}
export default reduce
```

# 新建 store/index.js 设置 store 配置，导入 createStore 和 reduce 进行初始配置

store/index.js

```
import { createStore } from 'redux'
import reduce from './reduce'

const store = createStore(
  reduce,
)

export default store
```

# 3、组件内使用 store

```
import store
state ===> store.getState().[name]
dispatch ===> store.dispatch({ type: [action.type], value: [action.value]})
使用 store 对象内的订阅来对 store 内的状态进行实时监听刷新 store.subscribe(()=>{ this.setState({[state.name]: [store.state.name]}) })
```

============================================================================================================================================================================
[React 仓库 redux-thunk 的使用]()

# redux-thunk 可以用于 redux 的中间件，可以增强 redux 的 dispatch 功能，实现异步 dispatch

# 1、安装 redux-thunk 依赖包

npm i redux-thunk --save

# 2、在 store 内配置使用 redux-thunk，同步导入 redux 的 applyMiddleware 进行中间件功能增强

store/index.js

```
import { createStore, applyMiddleware } from 'redux'
import reduce from './reduce'
import thunk from 'redux-thunk'

const store = createStore(
  reduce,
  applyMiddleware(thunk)
)

export default store
```

# 3、组件内使用新的 redux

设置 action 异步函数，action 的异步函数可以接收参数作为二次 dispatch 的 value

```
export const asyncAction1 = (value)=>{
  return (dispatch)=>{
    setTimeout(() => {
      dispatch({type: 'actionChange', value})
    }, 2000);
  }
}
```

组件内调用 action 异步函数
store.dispatch( asyncAction1([value]) )

以此可以实现 action 的异步操作

===============================================================================================================================

[React 仓库 react-redux 的使用]()

# react-redux 可以用于把 store 的状态转换为组件自身的 state 和 props

# 1、安装 react-redux 的依赖

npm i react-redux --save

# 2、组件内使用 react-redux

```
异步 action 导出
export const asyncAction1 = (value)=>{
  return (dispatch)=>{
    setTimeout(() => {
      dispatch({type: 'actionChange', value})
    }, 2000);
  }
}

同步 dispatch 导出
export const changeMsg = (value)=>{
  return {
    type: 'change',
    value
  }
}
```

在对应组件内导入 connect ==> import { connect } from 'react-redux'

使用 connect 转换状态到组件

```
const mapStateToProps = (state, ownProps) => {
  // state == store.state
  // ownProps == 组件自身的props，避免组件自身props被覆盖
  return {
    ...state,
    ...ownProps
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  // dispatch ==> store.dispatch
  // ownProps ==> 组件自身的props
  return {
    ...ownProps,
    changeMsg: (...rest)=> {dispatch(changeMsg(...rest))},
    asyncAction1: (...rest)=> dispatch(asyncAction1(...rest))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestRedux);
```

需要注意 dispatch 在转换 props 的时候，需要使用箭头函数的形式进行转换，注意参数的衔接传递

# 3、组件调用

调用该注册了 redux store 的组件时，需要先导入如下包

```
import store from './store/index'
import { Provider } from 'react-redux'

<Provider store={store}>
  <TestRedux />
</Provider>
```

这样就可以把 store 注册在目标组件，且把 store 内的状态函数转换为组件内的 props ，后续注意 props 衔接即可
