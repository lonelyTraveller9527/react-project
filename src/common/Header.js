import React, { Component } from 'react';
import './header.scss'

class Header extends Component {
  state = {
    title: ''
  }
  componentDidMount(){
    switch (this.props.location.pathname) {
      case '/domain':
        this.setState({title: 'domain title'})
        break;
      case '/ssl':
        this.setState({title: 'ssl title'})
        break
      default:
        break
    }
  }
  componentWillReceiveProps(newProps){
    switch (newProps.location.pathname) {
      case '/domain':
        this.setState({title: 'domain title'})
        break;
      case '/ssl':
        this.setState({title: 'ssl title'})
        break
      default:
        break
    }
  }
  render() {
    // if(match.path === '' || match.path === '/'){
    //   return (
    //     <h2 className="header-title">
    //       {title}
    //     </h2>
    //   )
    // }
    const {
      title
    } = this.state
    return (
      <h2 className="header-title">
        {

        }
        <button className="header-left">返回上一级</button> 
        {title}
        <button className="header-right">返回首页</button>
      </h2>
    );
  }
}

export default Header;