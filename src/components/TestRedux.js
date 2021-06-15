import React, { Component } from 'react';
import store from '../store/index'
import {asyncAction1} from '../store/actions/actions'
import {changeMsg} from '../store/actions/dispatch'

import { connect } from 'react-redux'

class TestRedux extends Component {
  state = {
    message: '',
    arrInfo: []
  }
  componentDidMount(){
    // console.log(store,'=====')
    // this.setState({message: store.getState().message, arrInfo: [...store.getState().arrInfo] })
    // store.subscribe(()=>{
    //   this.setState({message: store.getState().message, arrInfo: [...store.getState().arrInfo]})
    // })
    console.log(this.state, this.props, '=====')
  }

  render() {
    return (
      <div>
        asdsadsadsdasdasdadsdsasd ======================
        <h2>{this.props.message}</h2>
        <p>{this.props.arrInfo}</p>
        <button onClick={()=>{
          this.props.changeMsg('react redux click change msg')
          // store.dispatch({ type: 'change', value: 'changemsg' })
        }} >anniu</button>
        <button onClick={()=>{
          // store.dispatch(asyncAction1([11,22,33]))
          this.props.asyncAction1([99,88,77,66])
        }} >按钮2</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    changeMsg: (...rest)=> {dispatch(changeMsg(...rest))},
    asyncAction1: (...rest)=> dispatch(asyncAction1(...rest))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestRedux);