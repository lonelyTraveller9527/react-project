import React, { Component } from 'react';

class SslPord extends Component {
  render() {
    return (
      <div>
        asd
        {
          this.props.location.pathname === '/' && 'yes'
        }
        {
          this.props.location.pathname === '/domain' && 'domain'
        }
        {
          this.props.location.pathname === '/ssl' && 'ssl'
        }
      </div>
    );
  }
}

export default SslPord;