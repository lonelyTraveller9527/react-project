import React, { Component } from 'react';

import Test from './Test'

class Domain extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    return (
      <div>
        domain
        <Test />
      </div>
    );
  }
}

export default Domain;